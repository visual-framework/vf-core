// vf-chatbot-standalone.js
import { initVFChatbotSources } from "../vf-chatbot-sources/vf-chatbot-sources";
import { VFChatbotFeedback } from "../vf-chatbot-feedback/vf-chatbot-feedback.js";
import { initVFChatbotSelector } from "../vf-chatbot-selector/vf-chatbot-selector.js";
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
    this.input = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-input]"
    );
    this.sendBtn = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-send]"
    );
    this.disclaimer = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-disclaimer]"
    );
    this.disclaimerCloseBtn = this.disclaimer?.querySelector(".vf-button--dismiss");

    // Selector element
    this.selectorEl = this.container.querySelector(
      "[data-vf-js-chatbot-selector]"
    );

    this.userTemplate = this.container.querySelector("#user-message-template");
    this.assistantTemplate = this.container.querySelector( "#assistant-message-template");
    this.loadingTemplate = this.container.querySelector("#loading-indicator-template");

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
    const content = userMessage.querySelector(".vf-chatbot-message__content-prompt");

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
    // Show loading state immediately
    this.setLoadingState(true);

    // Check if we have a predefined answer
    if (this.qaData && this.qaData[text]) {
      // Add delay even for predefined answers to show loading indicator
      setTimeout(() => {
        const answer = this.qaData[text];
        this.addAssistantResponse(
          answer.answer || answer.html,
          answer.sources || [],
          answer.prompts || []
        );
        this.setLoadingState(false);
        this.scrollToBottom();
      }, 800); // 800ms delay for predefined answers
      return;
    } else if (this.callExternalAPI) {
      // Send custom event for external API call
      const apiCallEvent = new CustomEvent('vf-chatbot:api-call', {
        bubbles: true,
        detail: {
          question: text,
          assistant: this.currentAssistant,
          timestamp: Date.now()
        }
      });

      // Listen for API response (add listener only once)
      if (!this.apiResponseListener) {
        this.apiResponseListener = (event) => {
          const { response, sources, prompts, error } = event.detail;

          if (error) {
            // Handle API error - use fallback response
            console.error('API call failed:', error);
            const fallbackResponse = this.fallbackResponses[
              Math.floor(Math.random() * this.fallbackResponses.length)
            ];
            this.addAssistantResponse(
              fallbackResponse["answer"],
              [],
              fallbackResponse["prompts"] || []
            );
          } else {
            // Handle successful API response
            this.addAssistantResponse(
              response,
              sources || [],
              prompts || []
            );
          }

          this.setLoadingState(false);
          this.scrollToBottom();
        };

        // Add the event listener to the container
        this.container.addEventListener('vf-chatbot:api-response', this.apiResponseListener);
      }

      // Dispatch the API call event
      this.container.dispatchEvent(apiCallEvent);

      // Set a timeout fallback in case the API doesn't respond
      setTimeout(() => {
        // Check if we're still in loading state (API didn't respond)
        if (this.sendBtn && this.sendBtn.disabled) {
          console.warn('API call timeout - using fallback response');
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
        }
      }, 10000); // 10 second timeout
    } else {
      // Add delay for fallback response as well
      setTimeout(() => {
        // Use random fallback response when API is not available
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
      }, 600); // 600ms delay for fallback responses
    }
  }

  // Fix the addAssistantResponse method to avoid Nunjucks in JS
  addAssistantResponse(text, sources = [], prompts = []) {
    if (!this.assistantTemplate || !this.messagesContainer) return;

    const assistantMessage = this.assistantTemplate.content.cloneNode(true);
    const content = assistantMessage.querySelector(".vf-chatbot-message__content-prompt");
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
      const promptsTemplate = this.container.querySelector('#action-prompts-template');
      const singlePromptTemplate = this.container.querySelector('#single-action-prompt-template');

      if (promptsTemplate && singlePromptTemplate) {
        // Clone the prompts container template
        const promptsContainer = promptsTemplate.content.cloneNode(true);
        const promptsList = promptsContainer.querySelector('[data-vf-js-action-prompts-list]');

        // Create each individual prompt using the single prompt template
        prompts.forEach(prompt => {
          const promptEl = singlePromptTemplate.content.cloneNode(true);
          const link = promptEl.querySelector('.vf-chatbot-action-prompt__link');
          const wrapper = promptEl.querySelector('.vf-chatbot-action-prompt');

          if (link && wrapper) {
            link.href = prompt.action_url || '#';
            link.textContent = prompt.action_text;
            link.target = prompt.action_url?.startsWith('tel:') ? '_self' : '_blank';

            // Add click event if no URL
            if (!prompt.action_url) {
              link.addEventListener('click', (e) => {
                e.preventDefault();
                link.dispatchEvent(new CustomEvent('vf-chatbot-action-prompt:click', {
                  bubbles: true,
                  detail: { text: prompt.action_text }
                }));
              });
            }
          }

          promptsList.appendChild(promptEl);
        });

        content.appendChild(promptsContainer);
      }
    }
    if (feedbackContainer) {
      new VFChatbotFeedback(feedbackContainer, `response-${Date.now()}`);
    }

    this.messagesContainer.appendChild(assistantMessage);
    this.scrollToBottom();
  }

  setLoadingState(isLoading) {
    if (isLoading) {
      // Create loading indicator from template if it doesn't exist
      if (!this.loadingIndicator) {
        const loadingTemplate = this.container.querySelector('#loading-indicator-template');
        if (loadingTemplate) {
          const loadingContent = loadingTemplate.content.cloneNode(true);
          this.loadingIndicator = loadingContent.firstElementChild;
          this.messagesContainer.appendChild(this.loadingIndicator);
        } else {
          console.warn('Loading indicator template not found');
          return;
        }
      }
      this.loadingIndicator.style.display = 'block';
    } else {
      // Hide loading indicator
      if (this.loadingIndicator) {
        this.loadingIndicator.style.display = 'none';
      }
    }

    // Disable/enable input controls
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
