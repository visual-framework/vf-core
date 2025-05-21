// vf-chatbot-modal

class VFChatbotModal {
  constructor(element) {
    console.log("Initializing chatbot modal..."); // Debug log

    // API configuration
    this.API_TOKEN = "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"; // Replace with your token
    this.API_URL =
      "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill";

    // Store DOM elements
    this.modal = element;
    this.trigger = document.querySelector("[data-vf-js-chatbot-trigger]");
    this.closeBtn = this.modal.querySelector("[data-vf-js-chatbot-close]");
    this.minimizeBtn = this.modal.querySelector(
      "[data-vf-js-chatbot-minimize]"
    );
    this.input = this.modal.querySelector(".vf-chatbot-modal__input");
    this.sendBtn = this.modal.querySelector("[data-vf-js-chatbot-send]");
    this.messagesContainer = this.modal.querySelector(
      ".vf-chatbot-modal__messages"
    );
    this.welcomeScreen = this.modal.querySelector(
      "[data-vf-js-chatbot-welcome]"
    );
    this.suggestionBtns = this.modal.querySelectorAll(
      "[data-vf-js-chatbot-suggestion]"
    );

    // State
    this.hasInteracted = false;

    this.bindEvents();
  }

  bindEvents() {
    console.log("Binding events..."); // Debug log

    // Toggle modal
    this.trigger?.addEventListener("click", () => this.toggleModal());
    this.closeBtn?.addEventListener("click", e => {
      e.stopPropagation();
      this.closeModal();
    });
    this.minimizeBtn?.addEventListener("click", e => {
      e.stopPropagation();
      this.minimize();
    });

    // Send message events
    this.sendBtn?.addEventListener("click", () => this.sendMessage());
    this.input?.addEventListener("keypress", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // Welcome screen events
    if (this.welcomeScreen) {
      this.welcomeScreen.addEventListener("vf-chatbot-welcome:closed", () => {
        this.showChatInterface();
      });

      this.welcomeScreen.addEventListener(
        "vf-chatbot-welcome:suggestion",
        event => {
          const { text } = event.detail;
          this.showChatInterface();
          this.sendUserMessage(text);
        }
      );
    }

    // Suggestion buttons
    this.suggestionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const text =
          btn.getAttribute("data-vf-js-chatbot-suggestion") ||
          btn.textContent.trim();
        this.sendUserMessage(text);
      });
    });
  }

  showChatInterface() {
    if (this.welcomeScreen) {
      this.welcomeScreen.style.display = "none";
    }

    this.messagesContainer.style.display = "block";
    this.input.focus();
    this.hasInteracted = true;
  }

  resetWelcomeScreen() {
    if (this.welcomeScreen && !this.hasInteracted) {
      this.welcomeScreen.style.display = "flex";
      this.messagesContainer.style.display = "none";
    }
  }

  minimize() {
    this.modal.classList.add("vf-chatbot-modal--minimized");
    this.modal.classList.remove("vf-chatbot-modal--active");

    // Dispatch minimize event
    this.modal.dispatchEvent(new CustomEvent("vf-chatbot-modal:minimize"));
  }

  maximize() {
    // First remove minimized to ensure smooth transition
    this.modal.classList.remove("vf-chatbot-modal--minimized");

    // Small delay to ensure CSS transition works properly
    requestAnimationFrame(() => {
      this.modal.classList.add("vf-chatbot-modal--active");

      // Focus on input if it exists
      const input = this.modal.querySelector(".vf-chatbot-modal__input");
      if (input) {
        setTimeout(() => input.focus(), 300);
      }
    });

    // Dispatch maximize event
    this.modal.dispatchEvent(new CustomEvent("vf-chatbot-modal:maximize"));

    // Focus on input if welcome screen is not shown
    if (this.hasInteracted) {
      setTimeout(() => this.input.focus(), 300);
    }
  }

  closeModal() {
    this.modal.classList.remove("vf-chatbot-modal--active");
    this.modal.classList.remove("vf-chatbot-modal--minimized");

    // Reset welcome screen for next open
    this.resetWelcomeScreen();

    // Dispatch close event
    this.modal.dispatchEvent(new CustomEvent("vf-chatbot-modal:close"));
  }

  toggleModal() {
    const isMinimized = this.modal.classList.contains(
      "vf-chatbot-modal--minimized"
    );
    const isActive = this.modal.classList.contains("vf-chatbot-modal--active");

    if (isMinimized || !isActive) {
      this.maximize();
    } else {
      this.minimize();
    }
  }

  sendUserMessage(text) {
    // Add user message to UI
    const userMessageEl = document.createElement("div");
    userMessageEl.className = "vf-chatbot-message vf-chatbot-message--user";
    userMessageEl.innerHTML = `
      <div class="vf-chatbot-message__content">${text}</div>
    `;
    this.messagesContainer.appendChild(userMessageEl);

    // Clear input if this came from the input field
    if (this.input.value === text) {
      this.input.value = "";
    }

    this.scrollToBottom();

    // Process the message (simulate response)
    this.processUserMessage(text);
  }

  sendMessage() {
    const text = this.input.value.trim();
    if (!text) return;

    this.sendUserMessage(text);
  }

  async processUserMessage(message) {
    // Show loading state
    this.setLoadingState(true);

    try {
      const response = await this.callAPI(message);
      console.log("API Response:", response); // Debug log
      this.addMessage(response, "system");
    } catch (error) {
      console.error("Error:", error);
      this.addMessage(
        "Sorry, I encountered an error. Please try again.",
        "system"
      );
    }

    // // Simulate API call with timeout
    setTimeout(() => {
      // Add assistant response
      this.addAssistantResponse(this.getSimulatedResponse(message));
      this.setLoadingState(false);
    }, 1000);
  }

  addAssistantResponse(text) {
    const assistantMessageEl = document.createElement("div");
    assistantMessageEl.className =
      "vf-chatbot-message vf-chatbot-message--assistant";
    assistantMessageEl.innerHTML = `
      <img src="/assets/vf-chatbot/assets/ai-assistant-icon.svg" alt="AI Assistant" class="vf-chatbot-message__avatar">
      <div class="vf-chatbot-message__content">${text}</div>
    `;
    this.messagesContainer.appendChild(assistantMessageEl);

    this.scrollToBottom();
  }

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

  setLoadingState(isLoading) {
    this.input.disabled = isLoading;
    this.sendBtn.disabled = isLoading;
    this.sendBtn.innerHTML = isLoading ? "Sending..." : "Send";
  }

  scrollToBottom() {
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }
}

// Initialize
function initVFChatbotModal() {
  console.log("Looking for chatbot elements..."); // Debug log
  const chatbotElements = document.querySelectorAll(
    "[data-vf-js-chatbot-modal]"
  );

  if (chatbotElements.length === 0) {
    console.warn("No chatbot elements found on page");
    return;
  }

  console.log(`Found ${chatbotElements.length} chatbot elements`); // Debug log
  chatbotElements.forEach(element => new VFChatbotModal(element));
}

export { VFChatbotModal, initVFChatbotModal };
