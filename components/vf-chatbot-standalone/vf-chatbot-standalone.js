// vf-chatbot-standalone.js
class VFChatbotStandalone {
  constructor(element) {
    console.log("Initializing standalone chatbot..."); // Debug log

    // Store DOM elements
    this.container = element;
    this.welcomeScreen = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-welcome]"
    );
    this.chatInterface = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-chat]"
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
    this.welcomeInput = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-welcome-input]"
    );
    this.welcomeSendBtn = this.container.querySelector(
      "[data-vf-js-chatbot-standalone-welcome-send]"
    );
    this.suggestionBtns = this.container.querySelectorAll(
      "[data-vf-js-chatbot-standalone-suggestion]"
    );
    // API configuration - Mistral AI
    this.API_TOKEN = "";
    this.API_URL = "https://api.mistral.ai/v1/chat/completions";

    // State
    this.hasInteracted = false;

    this.bindEvents();
    this.initAutoResize();

    console.log("Standalone chatbot initialized successfully"); // Debug log
  }

  bindEvents() {
    console.log("Binding events for standalone chatbot..."); // Debug log

    // Send message events
    this.sendBtn?.addEventListener("click", () => this.sendMessage());
    this.input?.addEventListener("keypress", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // Welcome screen input events
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
          btn.getAttribute("data-vf-js-chatbot-standalone-suggestion") ||
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

    // Listen for action prompt clicks
    this.container.addEventListener("vf-chatbot-action-prompt:click", event => {
      const { text, data } = event.detail;

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
    if (this.chatInterface) {
      this.chatInterface.style.display = "block";
    }

    // Focus on the input field
    if (this.input) {
      this.input.focus();
    }

    this.hasInteracted = true;
  }

  sendUserMessage(text) {
    if (!text || !this.messagesContainer) return;

    // Add user message to UI
    const userMessageEl = document.createElement("div");
    userMessageEl.className = "vf-chatbot-message vf-chatbot-message--user";
    userMessageEl.innerHTML = `
      <div class="vf-chatbot-message__content">${text}</div>
    `;
    this.messagesContainer.appendChild(userMessageEl);

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

    // Call the API
    this.callAPI(text)
      .then(response => {
        this.addAssistantResponse(response.html || response);
        this.setLoadingState(false);
      })
      .catch(error => {
        console.error("API Error:", error);
        // Fallback to simulated response if API fails
        this.addAssistantResponse(this.getSimulatedResponse(text));
        this.setLoadingState(false);
      });
  }

  callAPI(text) {
    return new Promise((resolve, reject) => {
      fetch(this.API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.API_TOKEN}`
        },
        body: JSON.stringify({
          model: "mistral-tiny", // or another available model
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
          // Mistral returns: { choices: [{ message: { content: "..." } }] }
          if (data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
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

  addAssistantResponse(text) {
    if (!text || !this.messagesContainer) return;

    // Add assistant message to UI
    const assistantMessageEl = document.createElement("div");
    assistantMessageEl.className =
      "vf-chatbot-message vf-chatbot-message--assistant";
    assistantMessageEl.innerHTML = `
      <div class="vf-chatbot-message__avatar">
        <img src="../../assets/vf-chatbot/assets/ai-assistant-icon.svg" alt="AI Assistant">
      </div>
      <div class="vf-chatbot-message__content">${text}</div>
    `;
    this.messagesContainer.appendChild(assistantMessageEl);

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

  getSimulatedResponse(text) {
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
}

// Initialize
function initVFChatbotStandalone() {
  console.log("Looking for standalone chatbot elements..."); // Debug log
  const chatbotElements = document.querySelectorAll(
    "[data-vf-js-chatbot-standalone]"
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
}

// Make initialization function available globally
if (typeof window !== "undefined") {
  window.VFChatbotStandalone = VFChatbotStandalone;
  window.initVFChatbotStandalone = initVFChatbotStandalone;

  // Also make it available as a global variable without window prefix
  if (typeof globalThis !== "undefined") {
    globalThis.VFChatbotStandalone = VFChatbotStandalone;
    globalThis.initVFChatbotStandalone = initVFChatbotStandalone;
  }

  console.log("Exposed initVFChatbotStandalone to global scope");
}

// Export both the class and the initialization function
export { VFChatbotStandalone, initVFChatbotStandalone };
