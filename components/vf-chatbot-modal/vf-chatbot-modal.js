import { initVFChatbotSources } from "../vf-chatbot-sources/vf-chatbot-sources";
import { VFChatbotFeedback } from "../vf-chatbot-feedback/vf-chatbot-feedback.js";
import { initVFChatbotSelector } from "../vf-chatbot-selector/vf-chatbot-selector.js";
import { initVFChatbotDialog } from "../vf-chatbot-dialog/vf-chatbot-dialog.js";

class VFChatbotModal {
  constructor(element) {

    // Store DOM elements
    this.container = element;
    this.chatInterface = this.container.querySelector(
      "[data-vf-js-chatbot-modal-chat]"
    );
    this.welcomeScreen = this.container.querySelector(
      "[data-vf-js-chatbot-modal-welcome]"
    );
    this.messagesContainer = this.container.querySelector(
      "[data-vf-js-chatbot-modal-messages]"
    );
    this.loadingIndicator = this.container.querySelector(
      "[data-vf-js-chatbot-modal-loading]"
    );
    this.input = this.container.querySelector(
      "[data-vf-js-chatbot-modal-input]"
    );
    this.sendBtn = this.container.querySelector(
      "[data-vf-js-chatbot-modal-send]"
    );
    this.welcomeInput = this.container.querySelector(
      "[data-vf-js-chatbot-welcome-input]"
    );
    this.welcomeSendBtn = this.container.querySelector(
      "[data-vf-js-chatbot-welcome-send]"
    );
    this.suggestionBtns = this.container.querySelectorAll(
      "[data-vf-js-chatbot-suggestion]"
    );

    // Suggestions grid element
    this.suggestionsGrid = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-suggestions-grid]"
    );

    // Add minimize button reference
    // this.minimizeBtn = this.container.querySelector(
    //   "[data-vf-js-chatbot-minimize]"
    // );

    this.closeBtn = this.container.querySelector("[data-vf-js-chatbot-close]");
    this.dialog = document.querySelector("[data-vf-js-chatbot-dialog]");

    if (this.dialog) {
      this.dialogComponent = initVFChatbotDialog(this.dialog);
      this.dialog.addEventListener("vf-chatbot-dialog:confirm", () => {
        this.resetAndClose();
      });
    }

    // Selector element
    this.selectorEl = this.container.querySelector(
      "[data-vf-js-chatbot-selector]"
    );

    // API configuration - Mistral AI
    this.API_TOKEN = "";
    this.API_URL = "https://api.mistral.ai/v1/chat/completions";

    // Disclaimer elements
    this.disclaimerEl = this.container.querySelector(
      "[data-vf-js-chatbot-modal-disclaimer]"
    );
    this.disclaimerCloseBtn = this.container.querySelector(
      "[data-vf-js-chatbot-disclaimer-close]"
    );

    // State
    this.hasInteracted = false;
    this.currentAssistant = "general"; // Default assistant

    // Add QA data property
    this.qaData = null;

    // Load Q&A data
    this.loadQADataAndPopulateSuggestions();
    // Initialize the UI
    this.init();
  }

  async loadQADataAndPopulateSuggestions() {
    try {
      const response = await fetch(
        "../../assets/vf-chatbot/assets/vf-chatbot-qa.json"
      );
      const data = await response.json();
      this.qaData = data.predefinedQA;
      this.fallbackResponses = data.fallbackResponses;

      // Get random questions for suggestions
      const questions = Object.keys(this.qaData);
      const randomQuestions = questions
        .sort(() => 0.5 - Math.random())
        .slice(0, 3); // Get 3 random questions

      // Populate suggestions grid
      if (this.suggestionsGrid) {
        randomQuestions.forEach((question, index) => {
          // const isLastAndOdd = index === 2 && randomQuestions.length === 3;
          const promptHtml = `
            <div class="vf-chatbot-action-prompt"
              data-vf-js-chatbot-standalone-suggestion="${question}"
              data-vf-js-chatbot-action-prompt>
              <a
                href="#"
                class="vf-chatbot-action-prompt__link"
              >
              ${question}
              </a>
            </div>`;
          this.suggestionsGrid.insertAdjacentHTML("beforeend", promptHtml);

          // Initialize the action prompt that was just added
          const newPrompt = this.suggestionsGrid.lastElementChild;
        });

        // Bind click events to new suggestion prompts
        // this.bindSuggestionEvents();
      }
    } catch (error) {
      console.error("Failed to load Q&A data:", error);
    }
  }

  // bindSuggestionEvents() {
  //   const suggestions = this.container.querySelectorAll(
  //     "[data-vf-js-chatbot-standalone-suggestion]"
  //   );
  //   suggestions.forEach(suggestion => {
  //     suggestion.addEventListener("click", () => {
  //       const question = suggestion.getAttribute(
  //         "data-vf-js-chatbot-standalone-suggestion"
  //       );
  //       this.handleSuggestionClick(question);
  //     });
  //   });
  // }
  // async loadQAData() {
  //   try {
  //     const response = await fetch('../../assets/vf-chatbot/assets/vf-chatbot-qa.json');
  //     const data = await response.json();
  //     this.qaData = data.predefinedQA;
  //     this.fallbackResponses = data.fallbackResponses;

  //     // Update suggestion prompts with random questions
  //     this.updateSuggestionPrompts();
  //   } catch (error) {
  //     console.error('Failed to load Q&A data:', error);
  //   }
  // }

  // updateSuggestionPrompts() {
  //   if (!this.qaData || !this.suggestionBtns.length) return;

  //   const questions = Object.keys(this.qaData);
  //   const randomQuestions = questions
  //     .sort(() => 0.5 - Math.random())
  //     .slice(0, this.suggestionBtns.length);

  //   this.suggestionBtns.forEach((btn, index) => {
  //     if (randomQuestions[index]) {
  //       btn.textContent = randomQuestions[index];
  //       btn.setAttribute('data-vf-js-chatbot-suggestion', randomQuestions[index]);
  //     }
  //   });
  // }

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

    // Initialize disclaimer if present
    if (this.disclaimerEl && this.disclaimerCloseBtn) {
      this.bindDisclaimerEvents();
    }

    // Bind events
    this.bindEvents();
    this.initAutoResize();
  }

  handleRouteSelection(detail) {
    const { selectedItems } = detail;
    if (selectedItems && selectedItems.length > 0) {
      this.currentAssistant = selectedItems[0];
      console.log(`Switched to ${this.currentAssistant} assistant`);
    }
  }

  bindEvents() {
    // Bind minimize event
    if (this.minimizeBtn) {
      this.minimizeBtn.addEventListener("click", () => {
        this.minimize();
      });
    }
    // Send message events
    this.sendBtn?.addEventListener("click", () => this.sendMessage());
    // this.input?.addEventListener("keypress", e => {
    //   if (e.key === "Enter" && !e.shiftKey) {
    //     e.preventDefault();
    //     this.sendMessage();
    //   }
    // });

    // Welcome screen events
    this.welcomeSendBtn?.addEventListener("click", () =>
      this.sendWelcomeMessage()
    );
    this.welcomeInput?.addEventListener("keypress", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendWelcomeMessage();
      }
    });

    // Welcome screen suggestion buttons
    this.suggestionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const text =
          btn.getAttribute("data-vf-js-chatbot-suggestion") ||
          btn.textContent.trim();

        // Show chat interface
        this.showChatInterface();

        // Update the input field with the suggestion text
        if (this.input && text) {
          this.input.value = text;

          // Adjust the height of the input field to match content
          this.input.style.height = "auto";
          this.input.style.height = this.input.scrollHeight + "px";
        }

        // Send the message to the API
        if (text) {
          this.sendUserMessage(text);
        }
      });
    });

    // Modal controls
    this.closeBtn?.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      this.dialogComponent?.show();
    });

    // Listen for action prompt clicks
    this.container.addEventListener("vf-chatbot-action-prompt:click", event => {
      const { text } = event.detail;

      // Show chat interface
      this.showChatInterface();

      // Update the input field with the suggestion text
      if (this.input && text) {
        this.input.value = text;

        // Adjust the height of the input field to match content
        this.input.style.height = "auto";
        this.input.style.height = this.input.scrollHeight + "px";
      }

      // Send the message to the API
      if (text) {
        this.sendUserMessage(text);
      }
    });
  }

  bindDisclaimerEvents() {
    this.disclaimerCloseBtn.addEventListener("click", e => {
      e.stopPropagation(); // Prevent event from bubbling to modal
      this.disclaimerEl.style.display = "none";
    });
  }

  initAutoResize() {
    // Auto-resize textarea as user types
    if (this.input) {
      this.input.addEventListener("input", () => {
        this.input.style.height = "auto";
        this.input.style.height = this.input.scrollHeight + "px";
      });
    }
  }

  sendMessage() {
    if (!this.input || !this.input.value.trim()) return;

    const text = this.input.value.trim();
    this.sendUserMessage(text);
  }

  sendWelcomeMessage() {
    if (!this.welcomeInput || !this.welcomeInput.value.trim()) return;

    const text = this.welcomeInput.value.trim();
    this.showChatInterface();
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

    this.hasInteracted = true;
  }

  resetWelcomeScreen() {
    if (this.welcomeScreen && !this.hasInteracted) {
      this.welcomeScreen.style.display = "flex";
      this.messagesContainer.style.display = "none";
    }
  }

  minimize() {
    // Hide modal
    this.container.classList.remove("vf-chatbot-modal--active");

    // Dispatch event to show FAB
    document.dispatchEvent(
      new CustomEvent("vf-chatbot-modal:hide", {
        bubbles: true
      })
    );

    // Reset welcome screen if needed
    this.resetWelcomeScreen();
  }

  // UNUSED: maximize() is not needed since we use simple show/hide
  /*
  maximize() {
    // First remove minimized to ensure smooth transition
    this.container.classList.remove("vf-chatbot-modal--minimized");

    // Small delay to ensure CSS transition works properly
    requestAnimationFrame(() => {
      this.container.classList.add("vf-chatbot-modal--active");

      // Focus on input if it exists
      const input = this.container.querySelector(".vf-chatbot-modal__input");
      if (input) {
        setTimeout(() => input.focus(), 300);
      }
    });

    // Dispatch maximize event
    this.container.dispatchEvent(new CustomEvent("vf-chatbot-modal:maximize"));

    // Focus on input if welcome screen is not shown
    if (this.hasInteracted) {
      setTimeout(() => this.input.focus(), 300);
    }
  }
  */

  closeModal() {
    this.container.classList.remove("vf-chatbot-modal--active");
    this.container.classList.remove("vf-chatbot-modal--minimized");

    // Reset welcome screen for next open
    this.resetWelcomeScreen();

    // Dispatch close event
    this.container.dispatchEvent(new CustomEvent("vf-chatbot-modal:close"));
  }

  // UNUSED: toggleModal() is not needed with simplified show/hide
  /*
  toggleModal() {
    const isMinimized = this.container.classList.contains(
      "vf-chatbot-modal--minimized"
    );
    const isActive = this.container.classList.contains(
      "vf-chatbot-modal--active"
    );

    if (isMinimized || !isActive) {
      this.maximize();
    } else {
      this.minimize();
    }
  }
  */

  sendUserMessage(text) {
    if (!text || !this.messagesContainer) return;

    // Add user message to UI
    const userMessageEl = document.createElement("div");
    userMessageEl.className = "vf-chatbot-message vf-chatbot-message--user";
    userMessageEl.innerHTML = `
      <div class="vf-chatbot-message__avatar">
        <span class="vf-chatbot-message__avatar-name">You</span>
        <img src="../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg" alt="You">
      </div>
      <div class="vf-chatbot-message__content">${text}</div>
    `;
    this.messagesContainer.insertBefore(userMessageEl, this.loadingIndicator);

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
    return;
    // Check if we have a predefined answer
    // if (this.qaData && this.qaData[text]) {
    //   const answer = this.qaData[text];
    //   const responseText = answer.answer || answer.html;
    //   const sources = answer.sources || [];
    //   const prompts = answer.prompts || [];

    //   this.addAssistantResponse(responseText, sources, prompts);
    //   this.setLoadingState(false);
    //   return;
    // }

    // If no predefined answer, use existing API call
    // this.callAPI(text)
    //   .then(response => {
    //     const sources = response.sources || [];
    //     const responseText = response.html || response;
    //     this.addAssistantResponse(responseText, sources);
    //     this.setLoadingState(false);
    //   })
    //   .catch(error => {
    //     console.error("API Error:", error);
    //     // Use random fallback response
    //     const fallbackResponse = this.fallbackResponses[
    //       Math.floor(Math.random() * this.fallbackResponses.length)
    //     ];
    //     this.addAssistantResponse(fallbackResponse);
    //     this.setLoadingState(false);
    //   });
  }

  callAPI(text) {
    return new Promise((resolve, reject) => {
      fetch(this.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.API_TOKEN}`
        },
        body: JSON.stringify({
          model: "mistral-tiny",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: text }
          ]
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (
            data &&
            data.choices &&
            data.choices[0] &&
            data.choices[0].message &&
            data.choices[0].message.content
          ) {
            resolve(data.choices[0].message.content);
          } else {
            reject(new Error("Invalid API response"));
          }
        })
        .catch(error => {
          console.error("API call failed:", error);
          reject(error);
        });
    });
  }

  addAssistantResponse(text, sources = [], prompts = []) {
    if (!text || !this.messagesContainer) return;

    // Add assistant message to UI
    const assistantMessageEl = document.createElement("div");
    assistantMessageEl.className =
      "vf-chatbot-message vf-chatbot-message--assistant";
    assistantMessageEl.innerHTML = `
      <div class="vf-chatbot-message__avatar">
        <div class="vf-chatbot-message__avatar-image">
        <img src="../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg" alt="AI Assistant">
        </div>
        <span class="vf-chatbot-message__avatar-name">AI Assistant</span>
      </div>
      <div class="vf-chatbot-message__content">${text}</div>
    `;

    // Add sources if available
    if (sources && sources.length > 0) {
      const sourcesEl = initVFChatbotSources(sources);

      // Enhance: scroll to bottom when sources are expanded
      const toggleBtn = sourcesEl.el.querySelector(
        "[data-vf-js-chatbot-sources-toggle]"
      );
      const sourcesDiv = sourcesEl.el.querySelector(
        "[data-vf-js-chatbot-sources]"
      );

      if (toggleBtn && sourcesDiv) {
        toggleBtn.addEventListener("click", () => {
          // Wait for the sources div to expand, then scroll
          setTimeout(() => {
            if (this.messagesContainer) {
              this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
            }
          }, 100);
        });
      }

      assistantMessageEl.appendChild(sourcesEl.el);
    }

    // Add action prompts if available
    if (prompts && prompts.length > 0) {
      const promptsEl = document.createElement("div");
      promptsEl.className = "vf-chatbot-action-prompts";
      promptsEl.innerHTML = `
        <div class="vf-chatbot-action-prompts__list">
          ${prompts
            .map(
              prompt => `
            <div class="vf-chatbot-action-prompt">
              <a
                href="${prompt.action_url}"
                class="vf-chatbot-action-prompt__link"
                ${prompt.action_url.startsWith("tel:") ? "" : 'target="_blank"'}
              >
                ${prompt.action_text}
              </a>
            </div>
          `
            )
            .join("")}
        </div>
      `;
      assistantMessageEl.appendChild(promptsEl);
    }

    // Add feedback
    const feedbackTemplate = `
      <div class="vf-chatbot-feedback" data-vf-js-chatbot-feedback>
        <div class="vf-chatbot-feedback__actions">
          <button class="vf-chatbot-feedback__thumb" data-vf-js-feedback-thumbs-up>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 10V20M7 10H4C3.44772 10 3 10.4477 3 11V19C3 19.5523 3.44772 20 4 20H7M7 10L11.6276 2.93004C11.7326 2.7702 11.8705 2.63305 12.0319 2.52646C12.1934 2.41987 12.3746 2.34591 12.5639 2.30869C12.7532 2.27148 12.9472 2.27175 13.1364 2.30949C13.3256 2.34723 13.5065 2.42167 13.6676 2.52868C13.8287 2.63569 13.9661 2.77319 14.0706 2.93328C14.1751 3.09336 14.2445 3.27152 14.2748 3.45758C14.3051 3.64364 14.2957 3.83374 14.2471 4.01587C14.1986 4.19799 14.112 4.36857 13.9924 4.51725L12 7H16.2795C16.7799 7 17.2704 7.14549 17.7035 7.42152C18.1366 7.69755 18.4976 8.09734 18.7529 8.58079C19.0082 9.06425 19.1495 9.61509 19.1634 10.1793C19.1773 10.7436 19.0633 11.3021 18.8321 11.8L16.5724 16.7197C16.2001 17.5071 15.6042 18.1551 14.8667 18.5697C14.1291 18.9843 13.2869 19.1473 12.4614 19.0358L7 18V10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="vf-chatbot-feedback__thumb" data-vf-js-feedback-thumbs-down>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 14V4M17 14H20C20.5523 14 21 13.5523 21 13V5C21 4.44772 20.5523 4 20 4H17M17 14L12.3724 21.07C12.2674 21.2298 12.1295 21.367 11.9681 21.4735C11.8066 21.5801 11.6254 21.6541 11.4361 21.6913C11.2468 21.7285 11.0528 21.7283 10.8636 21.6905C10.6744 21.6528 10.4935 21.5783 10.3324 21.4713C10.1713 21.3643 10.0339 21.2268 9.92937 21.0667C9.82487 20.9066 9.75555 20.7285 9.72522 20.5424C9.69489 20.3564 9.70426 20.1663 9.75285 19.9841C9.80144 19.802 9.88804 19.6314 10.0076 19.4828L12 17H7.72054C7.22011 17 6.72956 16.8545 6.29647 16.5785C5.86337 16.3025 5.50236 15.9027 5.24709 15.4192C4.99182 14.9358 4.85054 14.3849 4.83659 13.8207C4.82265 13.2564 4.93671 12.6979 5.16795 12.2L7.42763 7.28027C7.79992 6.49287 8.39583 5.84492 9.13337 5.43031C9.8709 5.01571 10.7131 4.85272 11.5386 4.96415L17 6V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="vf-chatbot-feedback__form"></div>
      </div>
    `;

    const feedbackEl = document.createElement("div");
    feedbackEl.innerHTML = feedbackTemplate;
    assistantMessageEl.appendChild(feedbackEl.firstElementChild);

    // Initialize feedback after element is in DOM
    const feedbackComponent = assistantMessageEl.querySelector(
      "[data-vf-js-chatbot-feedback]"
    );
    if (feedbackComponent) {
      new VFChatbotFeedback(feedbackComponent, `response-${Date.now()}`);
    }

    // Insert before loading indicator
    this.messagesContainer.insertBefore(
      assistantMessageEl,
      this.loadingIndicator
    );
    this.scrollToBottom();
  }

  // UNUSED: Old version of getSimulatedResponse can be removed
  /*
  getSimulatedResponse(text) {
    // Simple response simulation
    if (text.toLowerCase().includes("metabolomics")) {
      return "Metabolomics is the large-scale study of small molecules,";
    } else if (text.toLowerCase().includes("genomics")) {
      return "Genomics is the study of the structure, function, evolution, and mapping of genomes.";
    } else if (text.toLowerCase().includes("proteomics")) {
      return "Proteomics is the study of the structure, function, and regulation of the proteome.";
    } else if (text.toLowerCase().includes("transcriptomics")) {
      return "Transcriptomics is the study of the complete set of RNA molecules within a cell.";
    } else if (text.toLowerCase().includes("epigenomics")) {
      return "Epigenomics is the study of heritable changes in gene function that do not involve changes to the DNA sequence.";
    } else if (text.toLowerCase().includes("metabolomics")) {
      return "Metabolomics is the large-scale study of small molecules,";
    } else if (text.toLowerCase().includes("genomics")) {
      return "Genomics is the study of the structure, function, evolution, and mapping of genomes.";
    } else if (text.toLowerCase().includes("proteomics")) {
      return "Proteomics is the study of the structure, function, and regulation of the proteome.";
    } else if (text.toLowerCase().includes("transcriptomics")) {
      return "Transcriptomics is the study of the complete set of RNA molecules within a cell.";
    } else if (text.toLowerCase().includes("epigenomics")) {
      return "Epigenomics is the study of heritable changes in gene function that do not involve changes to the DNA sequence.";
    } else {
      return "I'm sorry, I didn't understand that. Could you please provide more context or ask a specific question?";
    }
  }
  */

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

  getSimulatedResponse() {
    // Fallback responses when API fails
    const fallbackResponses = [
      "I'm sorry, I'm having trouble connecting to my knowledge base right now. Could you try again in a moment?",
      "That's an interesting question. Let me think about how to best answer that for you.",
      "I understand you're asking about bioinformatics training. We have several resources available. Could you tell me more about your specific interests?",
      "Thank you for your question. We offer various workshops and online courses on that topic. Would you like me to provide more specific information?",
      "I'd be happy to help with that. We have both introductory and advanced courses available depending on your experience level."
    ];

    return fallbackResponses[
      Math.floor(Math.random() * fallbackResponses.length)
    ];
  }

  resetAndClose() {
    // Clear chat history
    this.messagesContainer.innerHTML = "";

    // Reset to welcome screen
    // this.showWelcomeScreen();

    // Close modal
    this.close();

    // Dispatch event
    this.container.dispatchEvent(new CustomEvent("vf-chatbot-modal:reset"));
  }
}

// Initialize
function initVFChatbotModal() {
  // console.log("Looking for chatbot elements..."); // UNUSED: Debug log
  const chatbotElements = document.querySelectorAll(
    "[data-vf-js-chatbot-modal]"
  );

  if (chatbotElements.length === 0) {
    console.warn("No chatbot elements found on page");
    return;
  }

  // console.log(`Found ${chatbotElements.length} chatbot elements`); // UNUSED: Debug log

  const instances = [];
  chatbotElements.forEach(element => {
    instances.push(new VFChatbotModal(element));
  });

  return instances;
}

// REDUNDANT: Simplify global assignments
if (typeof window !== "undefined") {
  window.VFChatbotModal = VFChatbotModal;
  window.initVFChatbotModal = initVFChatbotModal;
}

export { VFChatbotModal, initVFChatbotModal };
