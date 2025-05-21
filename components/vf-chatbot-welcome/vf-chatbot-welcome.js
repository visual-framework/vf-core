// vf-chatbot-welcome.js

class VFChatbotWelcome {
  constructor(element) {
    this.el = element;
    this.startButton = this.el.querySelector("[data-vf-js-chatbot-start]");
    this.suggestions = this.el.querySelectorAll(
      "[data-vf-js-chatbot-suggestion]"
    );

    this.bindEvents();
  }

  bindEvents() {
    // Start conversation button
    this.startButton?.addEventListener("click", () => {
      this.hideWelcomeScreen();
    });

    // Suggestion buttons
    this.suggestions.forEach(suggestion => {
      suggestion.addEventListener("click", () => {
        const text = suggestion.getAttribute("data-vf-js-chatbot-suggestion");
        this.sendSuggestion(text);
      });
    });
  }

  hideWelcomeScreen() {
    // Hide welcome screen
    this.el.style.display = "none";

    // Dispatch event to notify that welcome screen is closed
    this.el.dispatchEvent(new CustomEvent("vf-chatbot-welcome:closed"));
  }

  sendSuggestion(text) {
    // Hide welcome screen
    this.hideWelcomeScreen();

    // Dispatch event with the suggestion text
    this.el.dispatchEvent(
      new CustomEvent("vf-chatbot-welcome:suggestion", {
        detail: { text }
      })
    );
  }
}

// Initialize
function initVFChatbotWelcome() {
  const welcomeElements = document.querySelectorAll(
    "[data-vf-js-chatbot-welcome]"
  );

  welcomeElements.forEach(element => new VFChatbotWelcome(element));
}

export { VFChatbotWelcome, initVFChatbotWelcome };
