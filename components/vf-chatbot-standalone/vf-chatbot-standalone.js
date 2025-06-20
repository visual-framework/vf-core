// vf-chatbot-standalone.js
import { initVFChatbotSources } from "../vf-chatbot-sources/vf-chatbot-sources";
import { VFChatbotFeedback } from "../vf-chatbot-feedback/vf-chatbot-feedback.js";
import { initVFChatbotSelector } from "../vf-chatbot-selector/vf-chatbot-selector.js";
import { initVFChatbotActionPrompt } from "../vf-chatbot-action-prompt/vf-chatbot-action-prompt.js";
import { VFChatbotWelcome } from "../vf-chatbot-welcome/vf-chatbot-welcome.js";

class VFChatbotStandalone {
  constructor(element) {
    console.log("Initializing standalone chatbot..."); // Debug log

    // Store DOM elements
    this.container = element;
    this.welcomeScreen = this.container.querySelector(
      "[data-vf-js-chatbot-welcome]"
    );
    this.messagesContainer = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-messages]"
    );
    this.loadingIndicator = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-loading]"
    );
    this.input = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-input]"
    );
    this.sendBtn = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-send]"
    );
    this.disclaimer = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-disclaimer]"
    );
    this.disclaimerCloseBtn = this.disclaimer.querySelector(
      ".vf-button--dismiss"
    );

    // Selector element
    this.selectorEl = this.container.querySelector(
      "[data-vf-js-chatbot-selector]"
    );

    this.userTemplate = this.container.querySelector("#user-message-template");
    this.assistantTemplate = this.container.querySelector(
      "#assistant-message-template"
    );
    this.loadingTemplate = this.container.querySelector(
      "#loading-indicator-template"
    );

    // State
    this.currentAssistant = ""; // Default assistant
    // Load Q&A data
    this.loadQADataAndPopulateSuggestions();

    // Initialize the UI
    this.init();

    // Initialize welcome component
    if (this.welcomeScreen) {
      this.welcomeComponent = new VFChatbotWelcome(this.welcomeScreen);

      // Wait for welcome component to be ready
      this.welcomeComponent
        .init()
        .then(() => {
          console.log("Welcome component initialized"); // Debug log
          this.welcomeScreen.addEventListener(
            "vf-chatbot-welcome:suggestion-click",
            event => {
              const question = event.detail.question;
              this.showChatInterface();
              this.sendUserMessage(question);
            }
          );
        })
        .catch(error => {
          console.error("Failed to initialize welcome component:", error);
        });
    }
  }

  init() {
    // Initialize selector if present
    if (this.selectorEl) {
      const selector = initVFChatbotSelector(this.selectorEl);
      this.selectorEl.addEventListener("routeselection", e => {
        this.handleRouteSelection(e.detail);
      });

      // Set initial route selection based on variant
      if (this.selectorEl.dataset.variant) {
        const variantRoutes = this.selectorEl.querySelectorAll(
          "[data-vf-js-selector-item]"
        );
        variantRoutes.forEach(item => {
          if (item.dataset.routeId === this.selectorEl.dataset.variant) {
            selector.handleItemSelection(item);
          }
        });
      }
    }

    // Bind other events
    this.bindEvents();
    // this.initAutoResize();

    console.log("Standalone chatbot initialized successfully"); // Debug log
  }

  async loadQADataAndPopulateSuggestions() {
    try {
      const response = await fetch(
        "../../assets/vf-chatbot/assets/vf-chatbot-qa.json"
      );
      const data = await response.json();
      this.qaData = data.predefinedQA;
      this.fallbackResponses = data.fallbackResponses;
    } catch (error) {
      console.error("Failed to load Q&A data:", error);
    }
  }

  handleRouteSelection(detail) {
    const { selectedItems } = detail;
    if (selectedItems && selectedItems.length > 0) {
      this.currentAssistant = selectedItems[0];
      // You can add logic here to change the assistant's behavior based on selection
      console.log(`Switched to ${this.currentAssistant} assistant`);
    }
  }

  bindEvents() {
    console.log("Binding events for standalone chatbot..."); // Debug log

    // Send message events
    this.sendBtn?.addEventListener("click", () => this.sendMessage());
    // Listen for dismiss button click
    if (this.disclaimer && this.disclaimerCloseBtn) {
      this.disclaimerCloseBtn.addEventListener("click", () => {
        this.disclaimer.classList.add("vf-u-display-none");
      });
    }
  }

  sendMessage() {
    if (!this.input || !this.input.value.trim()) return;

    const text = this.input.value.trim();

    // Always show chat interface
    this.showChatInterface();

    // Send the message
    this.sendUserMessage(text);
  }

  showChatInterface() {
    if (this.welcomeScreen) {
      this.welcomeScreen.style.display = "none";
    }
    if (this.messagesContainer) {
      this.messagesContainer.style.display = "flex";
    }

    // Focus on the input field
    if (this.input) {
      this.input.focus();
    }
  }

  sendUserMessage(text) {
    if (!text || !this.messagesContainer) return;
    const userMessage = this.userTemplate.content.cloneNode(true);
    const content = userMessage.querySelector(".vf-chatbot-message__content");

    // Set text content
    content.textContent = text;
    this.messagesContainer.appendChild(userMessage);
    // Clear input if this came from the input field
    if (this.input && this.input.value === text) {
      this.input.value = "";
      this.input.style.height = "auto"; // Reset height
    }

    this.scrollToBottom();

    // Process the message
    this.processUserMessage(text);
  }

  processUserMessage(text) {
    // Show loading state
    this.setLoadingState(true);

    // Check if we have a predefined answer
    if (this.qaData && this.qaData[text]) {
      const answer = this.qaData[text];
      this.addAssistantResponse(
        answer.answer || answer.html,
        answer.sources || [],
        answer.prompts || []
      );
      this.setLoadingState(false);
      this.scrollToBottom();
      return;
    }

    // Use random fallback response
    const fallbackResponse = this.fallbackResponses[
      Math.floor(Math.random() * this.fallbackResponses.length)
    ];
    this.addAssistantResponse(
      fallbackResponse["answer"],
      [],
      fallbackResponse["prompts"] || []
    );
    this.setLoadingState(false);
    this.scrollToBottom();
    return;
  }

  // Fix the addAssistantResponse method to avoid Nunjucks in JS
  addAssistantResponse(text, sources = [], prompts = []) {
    if (!this.assistantTemplate || !this.messagesContainer) return;

    const assistantMessage = this.assistantTemplate.content.cloneNode(true);
    const content = assistantMessage.querySelector(".vf-chatbot-message__content");
    content.innerHTML = text;

    // Initialize the feedback component for this message
    const feedbackContainer = assistantMessage.querySelector('[data-vf-js-chatbot-feedback]');

    // Add sources if present
    if (sources && sources.length > 0) {
      // Add sources
      const sourcesEl = initVFChatbotSources(sources);
      assistantMessage.insertBefore(
      sourcesEl.el,
      feedbackContainer
    );
    }
    // Add prompts if available
    if (prompts && prompts.length > 0) {
      const promptsComponent = initVFChatbotActionPrompt(prompts);
      if (promptsComponent) {
        content.appendChild(promptsComponent);
      }
    }
    if (feedbackContainer) {
      new VFChatbotFeedback(feedbackContainer, `response-${Date.now()}`);
    }

    this.messagesContainer.appendChild(assistantMessage);
    this.scrollToBottom();
  }

  setLoadingState(isLoading) {
    if (this.loadingIndicator) {
      this.loadingIndicator.style.display = isLoading ? "flex" : "none";
    }

    if (this.sendBtn) {
      this.sendBtn.disabled = isLoading;
    }

    if (this.input) {
      this.input.disabled = isLoading;
    }

    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }
}

// Initialize
function initVFChatbotStandalone() {
  console.log("Looking for standalone chatbot elements..."); // Debug log
  const chatbotElements = document.querySelectorAll(
    "[data-vf-js-chatbot-standalone-container]"
  );

  if (chatbotElements.length === 0) {
    console.warn("No standalone chatbot elements found on page");
    return;
  }

  console.log(`Found ${chatbotElements.length} standalone chatbot elements`); // Debug log

  // Initialize each standalone chatbot element
  const instances = [];
  chatbotElements.forEach(element => {
    instances.push(new VFChatbotStandalone(element));
  });

  return instances;
} // Make initialization function available globally
const global =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
    ? window
    : typeof global !== "undefined"
    ? global
    : typeof self !== "undefined"
    ? self
    : {};

if (typeof window !== "undefined") {
  window.VFChatbotStandalone = VFChatbotStandalone;
  window.initVFChatbotStandalone = initVFChatbotStandalone;

  // Also make it available as a global variable
  global.VFChatbotStandalone = VFChatbotStandalone;
  global.initVFChatbotStandalone = initVFChatbotStandalone;

  console.log("Exposed initVFChatbotStandalone to global scope");
}

// Export both the class and the initialization function
export { VFChatbotStandalone, initVFChatbotStandalone };
