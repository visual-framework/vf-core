// vf-chatbot-welcome.js

export class VFChatbotWelcome {
  constructor(element, options = {}) {
    this.el = element;
    this.suggestionsGrid = this.el.querySelector(
      "[data-vf-js-chatbot-welcome-suggestions-grid]"
    );
    this.qaData = null;
    this.predefinedQA = null;
    this.fallbackResponses = null;
    this.boundHandleSuggestionClick = this.handleSuggestionClick.bind(this);

    // Configuration from data attributes with fallbacks
    this.config = {
      welcome_max_suggestions:
        options.welcome_max_suggestions ||
        parseInt(this.el.dataset.maxQuestions, 10) ||
        4,
      enable_qa_data_loading:
        options.enable_qa_data_loading !== undefined
          ? options.enable_qa_data_loading
          : this.el.dataset.enableQaDataLoading !== "false",
      enable_predefined_qa:
        options.enable_predefined_qa !== undefined
          ? options.enable_predefined_qa
          : this.el.dataset.enablePredefinedQa !== "false",
      enable_fallback_responses:
        options.enable_fallback_responses !== undefined
          ? options.enable_fallback_responses
          : this.el.dataset.enableFallbackResponses !== "false",
      qa_data_url:
        this.el.dataset.qaDataUrl
    };
    this.init();
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
    // If Q&A data loading is disabled, don't load any data
    if (!this.config.enable_qa_data_loading) {
      console.log("Q&A data loading disabled for welcome component");
      return;
    }

    // Check if qa_data_url is provided
    if (!this.config.qa_data_url) {
      console.warn("No Q&A data URL provided for welcome component");
      return;
    }

    try {
      console.log(`Loading Q&A data from: ${this.config.qa_data_url}`);
      const response = await fetch(this.config.qa_data_url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch Q&A data: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      this.qaData = data;

      // Store predefined Q&A if enabled
      if (this.config.enable_predefined_qa && data.predefinedQA) {
        this.predefinedQA = data.predefinedQA;
        console.log("Predefined Q&A loaded successfully");
      }

      // Store fallback responses if enabled
      if (
        this.config.enable_fallback_responses &&
        data.fallbackResponses &&
        data.fallbackResponses.length > 0
      ) {
        this.fallbackResponses = data.fallbackResponses;
        console.log("Fallback responses loaded successfully");
      }
    } catch (error) {
      console.error("Failed to load Q&A data:", error);
      // Provide default fallback responses if loading fails
      this.setDefaultFallbackResponses();
    }
  }

  setDefaultFallbackResponses() {
    if (this.config.enable_fallback_responses) {
      this.fallbackResponses = [
        {
          answer:
            "I'm here to help with your questions. Please try asking about our services or general information.",
          sources: [],
          prompts: [
            "What services do you offer?",
            "How can I get started?",
            "Tell me more about your organization"
          ]
        },
        {
          answer:
            "I'm an AI assistant designed to help with information and basic inquiries. How can I assist you today?",
          sources: [],
          prompts: [
            "What can you help me with?",
            "How do I contact support?",
            "Where can I find more information?"
          ]
        }
      ];
      console.log("Using default fallback responses for welcome component");
    }
  }

  populateSuggestions() {
    if (!this.suggestionsGrid) return;

    // Clear existing suggestions
    this.suggestionsGrid.innerHTML = "";

    let questionsToShow = [];

    // Try to get questions from predefined Q&A first
    if (this.config.enable_predefined_qa && this.predefinedQA) {
      questionsToShow = Object.keys(this.predefinedQA);
    }
    // If no predefined Q&A, try to get prompts from fallback responses
    else if (this.config.enable_fallback_responses && this.fallbackResponses) {
      questionsToShow = this.fallbackResponses
        .filter(response => response.prompts && response.prompts.length > 0)
        .flatMap(response => response.prompts);
    }

    // If we still don't have questions, show a default message
    if (questionsToShow.length === 0) {
      console.log("No questions available for welcome suggestions");
      return;
    }

    // Get random questions
    const randomQuestions = questionsToShow
      .sort(() => 0.5 - Math.random())
      .slice(0, this.config.welcome_max_suggestions);

    // Create suggestion elements using template-based rendering
    randomQuestions.forEach((question) => {
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
    if (!question) return;

    // Get answer data from predefined Q&A or fallback responses
    let answerData = null;

    // First try predefined Q&A
    if (
      this.config.enable_predefined_qa &&
      this.predefinedQA &&
      this.predefinedQA[question]
    ) {
      answerData = this.predefinedQA[question];
    }
    // If not found in predefined Q&A, try to find in fallback responses
    else if (this.config.enable_fallback_responses && this.fallbackResponses) {
      const fallbackResponse = this.fallbackResponses.find(
        response => response.prompts && response.prompts.includes(question)
      );
      if (fallbackResponse) {
        answerData = fallbackResponse;
      }
    }

    // If still no answer data, provide a default response
    if (!answerData) {
      answerData = {
        answer:
          "I'm here to help with your questions. Please try asking about our services or general information.",
        sources: [],
        prompts: [
          "What services do you offer?",
          "How can I get started?",
          "Tell me more about your organization"
        ]
      };
    }

    // Dispatch event only once
    this.el.dispatchEvent(
      new CustomEvent("vf-chatbot-welcome:suggestion-click", {
        bubbles: true,
        detail: {
          question,
          answer: answerData.answer || "",
          sources: answerData.sources || [],
          prompts: answerData.prompts || []
        }
      })
    );
  }
}

// Initialize
export function initVFChatbotWelcome(element) {
  return new VFChatbotWelcome(element);
}
