// vf-chatbot-welcome.js

export class VFChatbotWelcome {
  constructor(element, options = {}) {
    this.el = element;
    this.suggestionsGrid = this.el.querySelector(
      "[data-vf-js-chatbot-welcome-suggestions-grid]"
    );
    this.qaData = null;
    this.boundHandleSuggestionClick = this.handleSuggestionClick.bind(this);

    // Get maxQuestions from data attribute or use default
    this.maxQuestions =
      options.maxQuestions ||
      parseInt(this.el.dataset.maxQuestions, 10) ||
      3; // Default to 3 if not specified
  }

  async init() {
    try {
      await this.loadQAData();
      this.populateSuggestions();
      this.bindEvents();
      return Promise.resolve();
    } catch (error) {
      console.error("Failed to initialize welcome component:", error);
      return Promise.reject(error);
    }
  }

  async loadQAData() {
    try {
      const response = await fetch(
        "../../assets/vf-chatbot/assets/vf-chatbot-qa.json"
      );
      const data = await response.json();
      this.qaData = data.predefinedQA;
    } catch (error) {
      console.error("Failed to load Q&A data:", error);
    }
  }

  populateSuggestions() {
    if (!this.qaData || !this.suggestionsGrid) return;

    // Clear existing suggestions
    this.suggestionsGrid.innerHTML = "";

    // Get random questions
    const questions = Object.keys(this.qaData);
    const randomQuestions = questions
      .sort(() => 0.5 - Math.random())
      .slice(0, this.maxQuestions);

    // Create suggestion elements using template-based rendering
    randomQuestions.forEach((question, index) => {
      const suggestionTemplate = document.querySelector(
        "#welcome-suggestion-template"
      );
      if (suggestionTemplate) {
        const suggestionEl = suggestionTemplate.content.cloneNode(true);
        const link = suggestionEl.querySelector(
          ".vf-chatbot-action-prompt__link"
        );
        const wrapper = suggestionEl.querySelector(".vf-chatbot-action-prompt");

        if (link && wrapper) {
          link.textContent = question;
          wrapper.setAttribute(
            "data-vf-js-chatbot-welcome-suggestion",
            question
          );

          this.suggestionsGrid.appendChild(suggestionEl);
        }
      } else {
        console.warn("Welcome suggestion template not found");
      }
    });
  }

  bindEvents() {
    // Remove existing event listener if any
    this.suggestionsGrid?.removeEventListener(
      "click",
      this.boundHandleSuggestionClick
    );

    // Add single event listener using event delegation
    this.suggestionsGrid?.addEventListener(
      "click",
      this.boundHandleSuggestionClick
    );
  }

  handleSuggestionClick(e) {
    e.preventDefault();

    const suggestionEl = e.target.closest(
      "[data-vf-js-chatbot-welcome-suggestion]"
    );
    if (!suggestionEl) return;

    const question = suggestionEl.getAttribute(
      "data-vf-js-chatbot-welcome-suggestion"
    );
    if (!question || !this.qaData[question]) return;

    // Get answer data
    const answer = this.qaData[question];

    // Dispatch event only once
    this.el.dispatchEvent(
      new CustomEvent("vf-chatbot-welcome:suggestion-click", {
        bubbles: true,
        detail: {
          question,
          answer: answer.answer || "",
          sources: answer.sources || [],
          prompts: answer.prompts || []
        }
      })
    );
  }
}

// Initialize
export function initVFChatbotWelcome() {
  const elements = document.querySelectorAll("[data-vf-js-chatbot-welcome]");
  elements.forEach(element => new VFChatbotWelcome(element));
}
