// vf-chatbot-modal.js
import { initVFChatbotSources } from "../vf-chatbot-sources/vf-chatbot-sources";
import { VFChatbotFeedback } from "../vf-chatbot-feedback/vf-chatbot-feedback.js";
import { initVFChatbotSelector } from "../vf-chatbot-selector/vf-chatbot-selector.js";
import { initVFChatbotWelcome } from "../vf-chatbot-welcome/vf-chatbot-welcome.js";
import { initVFChatbotDialog } from "../vf-chatbot-dialog/vf-chatbot-dialog.js";

class VFChatbotModal {
  constructor(element, customConfig = {}) {

    this.container = element;
    this.loadConfiguration(customConfig);
    this.setupDOMElements();
    this.setupState();
    this.setupEventHandlers();
    this.init();
  }

  loadConfiguration(customConfig) {
    // Get config from data-vf-chatbot-config attribute
    let dataConfig = {};
    const attr = this.container.getAttribute("data-vf-chatbot-config");
    if (attr) {
      try {
        dataConfig = JSON.parse(attr);
      } catch (e) {
        console.warn("Invalid JSON in data-vf-chatbot-config:", e);
      }
    }

    // Default configuration
    const defaultConfig = {
      type: "modal",
      title: "AI Assistant",
      welcome_logo: true,
      welcome_message: "Welcome! I'm here to help",
      welcome_logo_alt: "AI Assistant",
      welcome_suggestions_title: "Try asking me:",
      input_placeholder: "Ask me ...",
      welcome_max_suggestions: 4,
      disclaimer:
        'Disclaimer: This chatbot is designed to assist you with general information and basic inquiries. See our <a class="vf-banner__link" target="_blank" rel="noopener noreferrer" aria-label="disclaimer notes (opens in new tab)" href="https://www.ebi.ac.uk/data-protection/privacy-notice/embl-ebi-public-website/">disclaimer notes</a>.',
      footnote:
        'Review AI generated content for accuracy. <a class="vf-link" target="_blank" rel="noopener noreferrer" aria-label="Leave feedback (opens in new tab)" href="https://embl.service-now.com/esc?id=sc_cat_item&sys_id=5eeb8eb91b92e650b376da88b04bcbc1">Leave feedback</a>.',
      icons: {
        assistant_avatar:
          "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg",
        user_avatar:
          "../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg",
        send_button: "../../assets/vf-chatbot/assets/vf-chatbot--icon-send.svg",
        main_logo_url:
          "../../assets/vf-chatbot/assets/vf-chatbot--icon-32x32-dark-green.svg",
        minimize:
          "../../assets/vf-chatbot/assets/vf-chatbot--icon-minimize.svg",
        close: "../../assets/vf-chatbot/assets/vf-chatbot--icon-close.svg"
      },

      api: {
        chat_endpoint: false, //"/api/chat", // Disabled to use fallback responses
        feedback_endpoint: false, //"/api/feedback",
        qa_data_url: "../../assets/vf-chatbot/assets/vf-chatbot-qa.json",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer your-token"
        },
        timeout: 10000
      },

      features: {
        enable_welcome: true,
        enable_feedback: true,
        enable_sources: true,
        enable_sources_custom_format: false,
        enable_welcome_suggestions: true,
        enable_typing_indicator: true,
        enable_disclaimer: true,
        enable_predefined_qa: true,
        enable_fallback_responses: true,
        enable_qa_data_loading: true,
        enable_instant_feedback: false
      },

      behavior: {
        auto_scroll: true,
        typing_delay: 800,
        show_scrollbar: false
      },

      selectorContext: {
        chatbotRoutes: {
          multiSelect: true,
          maxMultiSelect: 3,
          showSearch: true,
          showSearchThreshold: 5,
          showAllServices: true,
          showAllServicesSelected: true,
          routes:
            "../../assets/vf-chatbot/assets/vf-chatbot-selector-services.json",
          placeholder: "Select services",
          title: "Services",
          selector_logo_url:
            "../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-dark-green.svg",
          selector_logo_title: "AI Assistant"
        }
      },

      handlers: {
        on_message_send: "handleMessageSend",
        on_response_receive: "handleResponseReceive",
        on_feedback_submit: "handleFeedbackSubmit",
        on_suggestion_click: "handleSuggestionClick",
        on_error: "handleError",
        on_conversation_start: "handleConversationStart",
        on_conversation_end: "handleConversationEnd",
        on_fab_click: "handleFabClick",
        on_dialog_confirm: "handleDialogConfirm",
        on_dialog_cancel: "handleDialogCancel",
        on_minimize: "handleMinimize"
      },

      feedback_options: {
        positive: [
          { id: "accurate", label: "Accurate" },
          { id: "easy", label: "Easy to understand" },
          { id: "formatted", label: "Well formatted" }
        ],
        negative: [
          { id: "inaccurate", label: "Inaccurate answer" },
          { id: "nocontext", label: "Did not use context" },
          { id: "poorformat", label: "Poorly formatted" }
        ]
      },
      enable_session_persistence: true,
      restore_minimized_state: true // If true, restore minimized state after navigation
    };

    // Merge configurations: default < data-attribute < custom
    this.config = this.deepMerge(defaultConfig, dataConfig, customConfig);
    console.log("Final merged config:", this.config);
  }

  deepMerge(...objects) {
    return objects.reduce((prev, obj) => {
      // ✅ FIX: Skip null/undefined objects
      if (!obj || typeof obj !== "object") {
        return prev;
      }

      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];

        // ✅ FIX: Skip undefined values to maintain priority
        if (oVal === undefined) {
          return;
        }

        if (Array.isArray(pVal) && Array.isArray(oVal)) {
          prev[key] = pVal.concat(...oVal);
        } else if (
          pVal &&
          oVal &&
          typeof pVal === "object" &&
          typeof oVal === "object" &&
          !Array.isArray(pVal) &&
          !Array.isArray(oVal)
        ) {
          prev[key] = this.deepMerge(pVal, oVal);
        } else {
          // ✅ FIX: Only assign if oVal is not null/undefined
          if (oVal !== null && oVal !== undefined) {
            prev[key] = oVal;
          }
        }
      });
      return prev;
    }, {});
  }

  setupDOMElements() {
    this.fab = document.querySelector("[data-vf-js-chatbot-fab]");

    this.minimizeBtn = this.container.querySelector(
      "[data-vf-js-chatbot-modal-minimize]"
    );
    this.closeBtn = this.container.querySelector(
      "[data-vf-js-chatbot-modal-close]"
    );

    this.welcomeScreen = this.container.querySelector(
      "[data-vf-js-chatbot-welcome]"
    );
    this.messagesContainer = this.container.querySelector(
      "[data-vf-js-chatbot-modal-messages]"
    );
    this.input = this.container.querySelector(
      "[data-vf-js-chatbot-modal-input]"
    );
    this.sendBtn = this.container.querySelector(
      "[data-vf-js-chatbot-modal-send]"
    );
    this.disclaimer = this.container.querySelector(
      "[data-vf-js-chatbot-modal-disclaimer]"
    );
    this.disclaimerCloseBtn = this.disclaimer?.querySelector(
      ".vf-button--dismiss"
    );
    this.selectorEl = this.container.querySelector(
      "[data-vf-js-chatbot-selector]"
    );

    // Templates
    this.userTemplate = this.container.querySelector("#user-message-template");
    this.assistantTemplate = this.container.querySelector(
      "#assistant-message-template"
    );
    this.loadingTemplate = this.container.querySelector(
      "#loading-indicator-template"
    );
    this.actionPromptsTemplate = this.container.querySelector(
      "#action-prompts-template"
    );
    this.singlePromptTemplate = this.container.querySelector(
      "#single-action-prompt-template"
    );

    this.dialog = this.container.querySelector("[data-vf-js-chatbot-dialog]");
    // Apply configuration to DOM elements
    this.applyConfigurationToDOM();
  }

  applyConfigurationToDOM() {
    // Update input placeholder
    if (this.input) {
      this.input.placeholder = this.config.input_placeholder;
      // Initialize textarea height
      this.autoResizeTextarea();
    }

    // Update auto-scroll behavior
    if (this.messagesContainer) {
      this.messagesContainer.dataset.autoScroll = this.config.behavior.auto_scroll;
    }
  }
  setupState() {
    this.currentAssistant = "";
    this.conversationId = this.generateConversationId();
    this.messageHistory = [];
    this.loadingIndicator = null;
    this.apiResponseListener = null;

    // Load Q&A data if using fallback responses
    this.loadQADataAndPopulateSuggestions();

    // Restore conversation HTML from sessionStorage
    const persistedHTML = this.loadConversationHTML();
    if (persistedHTML && this.messagesContainer) {
      this.messagesContainer.innerHTML = persistedHTML;
      if (this.welcomeScreen) {
        this.welcomeScreen.style.display = "none";
      }
      this.messagesContainer.style.display = "flex";
      // Hide disclaimer if present
      if (this.disclaimer) {
        this.disclaimer.classList.add("vf-u-display-none");
      }
      // Hide all loading indicator divs
      const loadingDivs = this.messagesContainer.querySelectorAll(
        ".vf-chatbot-message--loading"
      );
      loadingDivs.forEach(div => {
        div.style.display = "none";
      });
      // Hide all feedback response banners
      const feedbackBanners = this.messagesContainer.querySelectorAll(
        ".vf-chatbot-feedback__form-container"
      );
      feedbackBanners.forEach(div => {
        div.style.display = "none";
      });
      // Re-initialize feedback thumbs
      const feedbackContainers = this.messagesContainer.querySelectorAll(
        "[data-vf-js-chatbot-feedback]"
      );
      const feedbackState = JSON.parse(
        sessionStorage.getItem("chatbotModalFeedbackState") || "{}"
      );
      feedbackContainers.forEach(container => {
        const messageId = container.dataset.messageId;
        const feedbackType = feedbackState[messageId];
        if (feedbackType) {
          // Find thumb icons and set solid/active state
          const positiveThumb = container.querySelector(
            "[data-vf-js-feedback-thumb='up']"
          );
          const negativeThumb = container.querySelector(
            "[data-vf-js-feedback-thumb='down']"
          );
          if (positiveThumb && feedbackType === "positive") {
            positiveThumb.classList.add("vf-chatbot-feedback__thumb--solid");
            if (negativeThumb) {
              negativeThumb.classList.remove(
                "vf-chatbot-feedback__thumb--solid"
              );
              negativeThumb.style.display = "none";
            }
          }
          if (negativeThumb && feedbackType === "negative") {
            negativeThumb.classList.add("vf-chatbot-feedback__thumb--solid");
            if (positiveThumb) {
              positiveThumb.classList.remove(
                "vf-chatbot-feedback__thumb--solid"
              );
              positiveThumb.style.display = "none";
            }
          }
        } else {
          new VFChatbotFeedback(container, messageId, {
            enable_instant_feedback: this.config.features
              .enable_instant_feedback,
            api_endpoint: this.config.api.feedback_endpoint,
            positiveOptions: this.config.feedback_options?.positive,
            negativeOptions: this.config.feedback_options?.negative
          });
        }
      });
      // Re-initialize 'View sources' event listeners
      const sourcesContainers = this.messagesContainer.querySelectorAll(
        ".vf-chatbot-sources-toggle"
      );
      if (sourcesContainers) {
        sourcesContainers.forEach(sourcesContainer => {
          const toggleBtn = sourcesContainer.querySelector(
            "[data-vf-js-chatbot-sources-toggle]"
          );
          const sourcesDiv = sourcesContainer.querySelector(
            "[data-vf-js-chatbot-sources]"
          );
          const hideBtn = sourcesContainer.querySelector(
            "[data-vf-js-chatbot-sources-hide]"
          );

          toggleBtn.addEventListener("click", () => {
            sourcesDiv.classList.remove("vf-chatbot-sources--collapsed");
            toggleBtn.style.display = "none";
            // Scroll the sources div into view
            // sourcesDiv.scrollIntoView({ behavior: "smooth", block: "center" });
          });
          hideBtn.addEventListener("click", () => {
            sourcesDiv.classList.add("vf-chatbot-sources--collapsed");
            toggleBtn.style.display = "";
          });
          hideBtn.click();
        });
      }
      // Keep chatbot open if there is persistedHTML
      if (this.container) {
        this.fab.classList.add("vf-chatbot-fab--inactive");
        this.container.classList.remove("vf-chatbot-modal-container--inactive");
        this.container.classList.add("vf-chatbot-modal-container--active");
        this.container.setAttribute("aria-modal", true);

        // Focus on input if it exists
        const input = this.container.querySelector(
          "[data-vf-js-chatbot-modal-input]"
        );
        if (input) {
          setTimeout(() => input.focus(), 300);
        }
      }

      const wasMinimized =
        sessionStorage.getItem("chatbotModalMinimized") === "true";
      if (this.container) {
        if (this.config.restore_minimized_state && !wasMinimized) {
          this.fab.classList.add("vf-chatbot-fab--inactive");
          this.container.classList.remove(
            "vf-chatbot-modal-container--inactive"
          );
          this.container.classList.add("vf-chatbot-modal-container--active");
          this.container.setAttribute("aria-modal", true);
        } else {
          this.fab.classList.remove("vf-chatbot-fab--inactive");
          this.container.classList.remove("vf-chatbot-modal-container--active");
          this.container.classList.add("vf-chatbot-modal-container--inactive");
          this.container.setAttribute("aria-modal", false);
          // Focus input if needed
        }
      }
      return; // Skip history-based rendering if HTML is present
    }
  }

  setupEventHandlers() {
    // Setup global event handlers for custom functions
    this.setupCustomEventHandlers();

    // Bind internal events
    this.bindEvents();
  }

  setupCustomEventHandlers() {
    // Create wrapper functions that call user-defined handlers and emit events
    const handlers = this.config.handlers;

    // Message send handler
    this.onMessageSend = message => {
      const eventData = {
        message,
        conversationId: this.conversationId,
        timestamp: Date.now()
      };

      this.emitEvent("vf-chatbot:message-send", eventData);

      if (
        handlers.on_message_send &&
        typeof window[handlers.on_message_send] === "function"
      ) {
        window[handlers.on_message_send](eventData);
      }
    };

    // Response receive handler
    this.onResponseReceive = (response, sources, prompts) => {
      const eventData = {
        response,
        sources,
        prompts,
        conversationId: this.conversationId,
        timestamp: Date.now()
      };

      this.emitEvent("vf-chatbot:response-receive", eventData);

      if (
        handlers.on_response_receive &&
        typeof window[handlers.on_response_receive] === "function"
      ) {
        window[handlers.on_response_receive](eventData);
      }
    };

    // Feedback submit handler
    this.onFeedbackSubmit = (
      messageId,
      feedbackType,
      feedbackText = "",
      feedbackComment = ""
    ) => {
      const eventData = {
        messageId,
        feedbackType,
        feedbackText,
        feedbackComment,
        conversationId: this.conversationId,
        timestamp: Date.now()
      };

      this.emitEvent("vf-chatbot:feedback-submit", eventData);

      // Call API if configured
      if (this.config.api.feedback_endpoint) {
        this.submitFeedbackToAPI(eventData);
      }

      // Update local storage feedback state
      if (this.config.enable_session_persistence) {
        let feedbackState = JSON.parse(
          sessionStorage.getItem("chatbotModalFeedbackState") || "{}"
        );
        feedbackState[messageId] = feedbackType; // e.g., "positive" or "negative"
        sessionStorage.setItem(
          "chatbotModalFeedbackState",
          JSON.stringify(feedbackState)
        );
      }

      if (
        handlers.on_feedback_submit &&
        typeof window[handlers.on_feedback_submit] === "function"
      ) {
        window[handlers.on_feedback_submit](eventData);
      }
    };

    // Suggestion click handler
    this.onSuggestionClick = suggestion => {
      const eventData = {
        suggestion,
        conversationId: this.conversationId,
        timestamp: Date.now()
      };

      this.emitEvent("vf-chatbot:suggestion-click", eventData);

      if (
        handlers.on_suggestion_click &&
        typeof window[handlers.on_suggestion_click] === "function"
      ) {
        window[handlers.on_suggestion_click](eventData);
      }
    };

    // Error handler
    this.onError = (error, context) => {
      const eventData = {
        error,
        context,
        conversationId: this.conversationId,
        timestamp: Date.now()
      };

      this.emitEvent("vf-chatbot:error", eventData);

      if (
        handlers.on_error &&
        typeof window[handlers.on_error] === "function"
      ) {
        window[handlers.on_error](eventData);
      }
    };

    // Conversation start handler
    this.onConversationStart = () => {
      const eventData = {
        conversationId: this.conversationId,
        timestamp: Date.now()
      };

      this.emitEvent("vf-chatbot:conversation-start", eventData);

      if (
        handlers.on_conversation_start &&
        typeof window[handlers.on_conversation_start] === "function"
      ) {
        window[handlers.on_conversation_start](eventData);
      }
    };

    // Conversation end handler
    this.onConversationEnd = () => {
      const eventData = {
        conversationId: this.conversationId,
        messageCount: this.messageHistory.length,
        timestamp: Date.now()
      };

      this.emitEvent("vf-chatbot:conversation-end", eventData);

      if (
        handlers.on_conversation_end &&
        typeof window[handlers.on_conversation_end] === "function"
      ) {
        window[handlers.on_conversation_end](eventData);
      }
    };

    // FAB click handler
    this.onFabClick = () => {
      const eventData = {
        conversationId: this.conversationId,
        timestamp: Date.now()
      };
      this.emitEvent("vf-chatbot-fab:click", eventData);

      if (
        handlers.on_fab_click &&
        typeof window[handlers.on_fab_click] === "function"
      ) {
        window[handlers.on_fab_click](eventData);
      }
    };

    // Dialog confirm handler
    this.onDialogConfirm = () => {
      const eventData = {
        conversationId: this.conversationId,
        timestamp: Date.now()
      };
      this.emitEvent("vf-chatbot-dialog:confirm", eventData);

      if (
        handlers.on_dialog_confirm &&
        typeof window[handlers.on_dialog_confirm] === "function"
      ) {
        window[handlers.on_dialog_confirm](eventData);
      }
    };

    // Dialog cancel handler
    this.onDialogCancel = () => {
      const eventData = {
        conversationId: this.conversationId,
        timestamp: Date.now()
      };
      this.emitEvent("vf-chatbot-dialog:cancel", eventData);

      if (
        handlers.on_dialog_cancel &&
        typeof window[handlers.on_dialog_cancel] === "function"
      ) {
        window[handlers.on_dialog_cancel](eventData);
      }
    };

    // Minimize handler
    this.onMinimize = () => {
      const eventData = {
        conversationId: this.conversationId,
        timestamp: Date.now()
      };
      this.emitEvent("vf-chatbot-modal:minimize", eventData);

      if (
        handlers.on_minimize &&
        typeof window[handlers.on_minimize] === "function"
      ) {
        window[handlers.on_minimize](eventData);
      }
    };
  }

  emitEvent(eventName, data) {
    const event = new CustomEvent(eventName, {
      bubbles: true,
      detail: data
    });
    this.container.dispatchEvent(event);
  }

  generateConversationId() {
    return `conv_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  }

  async init() {
    // Initialize selector if present
    if (this.selectorEl) {
      const selector = initVFChatbotSelector(this.selectorEl);
      this.selectorEl.addEventListener("routeselection", e => {
        this.handleRouteSelection(e.detail);
        // Save selection on change
        if (this.config.enable_session_persistence) {
          sessionStorage.setItem(
            "vfChatbotSelectorSelection",
            JSON.stringify(e.detail.selectedItems)
          );
        }
      });

      // Restore selection only after routes are loaded/rendered
      this.selectorEl.addEventListener("routesloaded", () => {
        if (this.config.enable_session_persistence) {
          this.savedSelection = sessionStorage.getItem(
            "vfChatbotSelectorSelection"
          );
          if (this.savedSelection) {
            const selectedItems = JSON.parse(this.savedSelection);
            selector.setSelection(selectedItems);
          }
        }
      });
    }

    // Initialize welcome component
    if (this.welcomeScreen && this.config.features.enable_welcome_suggestions) {
      try {
        initVFChatbotWelcome(this.welcomeScreen);

        // Only add the event listener if not already present
        const existingListeners = this.welcomeScreen._hasSuggestionClickListener;
        if (!existingListeners) {
          this.welcomeScreen.addEventListener(
            "vf-chatbot-welcome:suggestion-click",
            event => {
              const question = event.detail.question;
              this.onSuggestionClick(question);
              this.showChatInterface();
              this.sendUserMessage(question);
            }
          );
          // Mark that the listener has been added
          this.welcomeScreen._hasSuggestionClickListener = true;
        }

        this.welcomeScreen.scrollTop = this.welcomeScreen.scrollHeight;
      } catch (error) {
        console.error("Failed to initialize welcome component:", error);
        this.onError(error, "welcome_component_init");
      }
    }

    // Trigger conversation start
    this.onConversationStart();

    console.log("Modal chatbot initialized successfully");
  }

  async loadQADataAndPopulateSuggestions() {
    // Skip loading if Q&A data loading is disabled
    if (!this.config.features.enable_qa_data_loading) {
      console.log("Q&A data loading is disabled");
      return;
    }

    // Skip loading if no URL is configured
    if (!this.config.api.qa_data_url) {
      console.log("No Q&A data URL configured");
      return;
    }
    try {
      const response = await fetch(this.config.api.qa_data_url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      // Load predefined Q&A if enabled
      if (this.config.features.enable_predefined_qa && data.predefinedQA) {
        this.qaData = data.predefinedQA;
      } else {
        console.log("Predefined Q&A loading is disabled or no data available");
      }

      // Load fallback responses if enabled
      if (
        this.config.features.enable_fallback_responses &&
        data.fallbackResponses &&
        data.fallbackResponses.length > 0
      ) {
        this.fallbackResponses = data.fallbackResponses;
      } else {
        console.log("Using default fallback responses");
      }
    } catch (error) {
      console.error("Failed to load Q&A data:", error);
      this.onError(error, "qa_data_load");
    }
  }

  handleRouteSelection(detail) {
    const { selectedItems } = detail;
    if (selectedItems && selectedItems.length > 0) {
      this.currentAssistant = selectedItems.join(", ");
      console.log(`Switched to ${this.currentAssistant} assistant`);

      this.emitEvent("vf-chatbot:assistant-change", {
        selectedAssistants: this.currentAssistant,
        conversationId: this.conversationId
      });
    }
  }

  bindEvents() {
    this.minimizeBtn?.addEventListener("click", () => {
      this.onMinimize();
      this.minimize();
    });

    this.closeBtn?.addEventListener("click", () => this.showCloseDialog());

    // Send message events
    this.sendBtn?.addEventListener("click", () => this.sendMessage());

    this.input?.addEventListener("keypress", e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });

    // Auto-resize textarea functionality
    this.input?.addEventListener("input", () => this.autoResizeTextarea());
    this.input?.addEventListener("paste", () => {
      // Use setTimeout to ensure the pasted content is processed
      setTimeout(() => this.autoResizeTextarea(), 0);
    });

    // Disclaimer close
    if (this.disclaimer && this.disclaimerCloseBtn) {
      this.disclaimerCloseBtn.addEventListener("click", () => {
        this.disclaimer.classList.add("vf-u-display-none");
      });
    }

    // Global feedback event listener
    this.container.addEventListener("vf-chatbot-feedback:submit", event => {
      const {
        messageId,
        feedbackType,
        feedbackText,
        feedbackComment
      } = event.detail;
      this.onFeedbackSubmit(
        messageId,
        feedbackType,
        feedbackText,
        feedbackComment
      );
    });

    // Action prompt click listener
    this.container.addEventListener("vf-chatbot-action-prompt:click", event => {
      const { text } = event.detail;
      this.sendUserMessage(text);
    });

    this.fab?.addEventListener("click", this.onFabClick);
    this.dialog?.addEventListener(
      "vf-chatbot-dialog:confirm",
      this.onDialogConfirm
    );
    this.dialog?.addEventListener(
      "vf-chatbot-dialog:cancel",
      this.onDialogCancel
    );
  }

  sendMessage() {
    if (!this.input || !this.input.value.trim()) return;

    const text = this.input.value.trim();
    this.showChatInterface();
    this.sendUserMessage(text);
  }

  autoResizeTextarea() {
    if (!this.input) return;

    // Reset height to auto to get the actual scroll height
    // this.input.style.height = 'auto';
    // Get computed styles
    const computedStyle = window.getComputedStyle(this.input);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 24;
    const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
    const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
    const borderTop = parseFloat(computedStyle.borderTopWidth) || 0;
    const borderBottom = parseFloat(computedStyle.borderBottomWidth) || 0;

    // Calculate heights more accurately
    const extraHeight = paddingTop + paddingBottom + borderTop + borderBottom;
    const minHeight = lineHeight + extraHeight; // Height for 1 row
    const maxHeight = lineHeight * 5 + extraHeight; // Height for 5 rows

    // Get the scroll height (content height)
    const scrollHeight = this.input.scrollHeight;

    // Calculate the new height, constrained by min and max
    let newHeight = Math.max(minHeight, scrollHeight);

    if (newHeight >= maxHeight) {
      // If content exceeds 5 rows, set to max height and enable scrolling
      newHeight = maxHeight;
      this.input.classList.add("vf-chatbot-modal__input--scrollable");
    } else {
      // Remove scrollable class if content fits within 5 rows
      this.input.classList.remove("vf-chatbot-modal__input--scrollable");
    }

    // Apply the new height
    this.input.style.height = newHeight + "px";
  }

  showChatInterface() {
    if (this.welcomeScreen) {
      this.welcomeScreen.style.display = "none";
    }
    if (this.messagesContainer) {
      this.messagesContainer.style.display = "flex";
    }
    if (this.input) {
      this.input.focus();
    }
  }

  sendUserMessage(text) {
    if (!text || !this.messagesContainer) return;

    // Add to message history
    this.messageHistory.push({
      type: "user",
      content: text,
      timestamp: Date.now()
    });

    // Trigger message send event
    this.onMessageSend(text);

    // Create user message element
    const userMessage = this.userTemplate.content.cloneNode(true);
    const content = userMessage.querySelector(
      ".vf-chatbot-message__content-prompt"
    );
    content.textContent = text;

    // Update avatar if configured
    const avatar = userMessage.querySelector("img");
    if (avatar) {
      avatar.src = this.config.icons.user_avatar;
    }

    this.messagesContainer.appendChild(userMessage);
    this.saveConversationHTML(this.messagesContainer.innerHTML);

    // Clear input
    if (this.input) {
      this.input.value = "";
      this.input.style.height = "auto";
      // Reset textarea to minimum height and remove scrollable class
      this.input.classList.remove("vf-chatbot-modal__input--scrollable");
      this.autoResizeTextarea();
    }

    this.scrollToBottom();
    this.processUserMessage(text);
  }

  async processUserMessage(text) {
    this.setLoadingState(true);

    try {
      // Check for predefined answers first
      if (this.qaData && this.qaData[text]) {
        setTimeout(() => {
          const answer = this.qaData[text];
          this.addAssistantResponse(
            answer.answer || answer.html,
            answer.sources || [],
            answer.prompts || []
          );
          this.setLoadingState(false);
        }, this.config.behavior.typing_delay);
        return;
      }

      // Try API call if configured
      if (this.config.api.chat_endpoint) {
        const response = await this.callChatAPI(text);
        this.addAssistantResponse(
          response.response,
          response.sources || [],
          response.prompts || []
        );
        this.setLoadingState(false);
      } else {
        // Use fallback response
        setTimeout(() => {
          let fallbackResponse;

          if (this.fallbackResponses && this.fallbackResponses.length > 0) {
            fallbackResponse = this.fallbackResponses[
              Math.floor(Math.random() * this.fallbackResponses.length)
            ];

            this.addAssistantResponse(
              fallbackResponse.answer,
              [],
              fallbackResponse.prompts || []
            );
          }
          this.setLoadingState(false);
        }, this.config.behavior.typing_delay);
      }
    } catch (error) {
      console.error("Error processing message:", error);
      this.onError(error, "message_processing");
      this.setLoadingState(false);
      // this.showErrorMessage();
    }
  }

  async callChatAPI(message) {
    const requestData = {
      message,
      assistant: this.currentAssistant,
      conversationId: this.conversationId,
      messageHistory: this.config.features.enable_conversation_history
        ? this.messageHistory
        : []
    };

    const response = await fetch(this.config.api.chat_endpoint, {
      method: "POST",
      headers: this.config.api.headers,
      body: JSON.stringify(requestData),
      signal: AbortSignal.timeout(this.config.api.timeout)
    });

    if (!response.ok) {
      throw new Error(
        `API call failed: ${response.status} ${response.statusText}`
      );
    }

    return await response.json();
  }

  async submitFeedbackToAPI(feedbackData) {
    try {
      await fetch(this.config.api.feedback_endpoint, {
        method: "POST",
        headers: this.config.api.headers,
        body: JSON.stringify(feedbackData)
      });
    } catch (error) {
      console.error("Failed to submit feedback:", error);
      this.onError(error, "feedback_submission");
    }
  }

  addAssistantResponse(text, sources = [], prompts = []) {
    if (!this.assistantTemplate || !this.messagesContainer) return;

    const messageId = `msg_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

    // Add to message history
    this.messageHistory.push({
      type: "assistant",
      content: text,
      sources,
      prompts,
      messageId,
      timestamp: Date.now()
    });

    // Trigger response receive event
    this.onResponseReceive(text, sources, prompts);

    const assistantMessage = this.assistantTemplate.content.cloneNode(true);
    const content = assistantMessage.querySelector(
      ".vf-chatbot-message__content-prompt"
    );
    content.innerHTML = text;

    // Update avatar if configured
    const avatar = assistantMessage.querySelector("img");
    if (avatar) {
      avatar.src = this.config.icons.assistant_avatar;
    }

    // Initialize feedback if enabled
    if (this.config.features.enable_feedback) {
      const feedbackContainer = assistantMessage.querySelector(
        "[data-vf-js-chatbot-feedback]"
      );
      if (feedbackContainer) {
        feedbackContainer.dataset.messageId = messageId;

        // Pass configuration to VFChatbotFeedback component
        new VFChatbotFeedback(feedbackContainer, messageId, {
          enable_instant_feedback: this.config.features.enable_instant_feedback,
          api_endpoint: this.config.api.feedback_endpoint,
          positiveOptions: this.config.feedback_options?.positive,
          negativeOptions: this.config.feedback_options?.negative
        });
      }
    }

    // Add sources if enabled and present
    if (
      this.config.features.enable_sources &&
      sources &&
      (sources.length > 0 || sources != "")
    ) {
      const feedbackContainer = assistantMessage.querySelector(
        "[data-vf-js-chatbot-feedback]"
      );
      let sourceHTML = "";
      if (
        !this.config.features.enable_sources_custom_format &&
        sources.length > 0
      ) {
        sourceHTML = sources
          .map(
            message => `
          <li class="vf-chatbot-sources__item">
            <div class="vf-chatbot-sources__label">${message.domain}</div>
            <a class="vf-link vf-chatbot-sources__link" href="${message.url}" target="_blank" rel="noopener noreferrer" aria-label="${message.title} (opens in new tab)">
              ${message.title}
            </a>
            <div class="vf-chatbot-sources__description">${message.description}</div>
          </li>
        `
          )
          .join("");
      } else if (
        this.config.features.enable_sources_custom_format &&
        sources != ""
      ) {
        sourceHTML = sources;
      }
      if (sourceHTML != "") {
        const sourcesEl = initVFChatbotSources(sourceHTML);
        assistantMessage.insertBefore(sourcesEl.el, feedbackContainer);
      }
    }

    // Add prompts if present
    if (prompts && prompts.length > 0) {
      this.addActionPrompts(assistantMessage, prompts, content);
    }

    this.messagesContainer.appendChild(assistantMessage);
    this.saveConversationHTML(this.messagesContainer.innerHTML);
    this.scrollToBottom();

    return messageId;
  }

  addActionPrompts(assistantMessage, prompts, contentElement) {
    if (!this.actionPromptsTemplate || !this.singlePromptTemplate) return;

    const promptsContainer = this.actionPromptsTemplate.content.cloneNode(true);
    const promptsList = promptsContainer.querySelector(
      "[data-vf-js-action-prompts-list]"
    );

    prompts.forEach(prompt => {
      const promptEl = this.singlePromptTemplate.content.cloneNode(true);
      const link = promptEl.querySelector(".vf-chatbot-action-prompt__link");

      if (link) {
        link.href = prompt.action_url || "#";
        link.textContent = prompt.action_text;

        // Set target and add accessibility attributes
        if (prompt.action_url?.startsWith("tel:")) {
          link.target = "_self";
        } else if (prompt.action_url) {
          link.target = "_blank";
          // Add aria-label for screen readers to indicate it opens in a new tab
          link.setAttribute(
            "aria-label",
            `${prompt.action_text} (opens in new tab)`
          );
          // Add rel="noopener noreferrer" for security
          link.rel = "noopener noreferrer";
        }

        if (!prompt.action_url) {
          link.addEventListener("click", e => {
            e.preventDefault();
            this.emitEvent("vf-chatbot-action-prompt:click", {
              text: prompt.action_text
            });
          });
        }
      }

      promptsList.appendChild(promptEl);
    });

    contentElement.appendChild(promptsContainer);
  }

  setLoadingState(isLoading) {
    if (!this.config.features.enable_typing_indicator) return;

    if (isLoading) {
      if (!this.loadingIndicator && this.loadingTemplate) {
        const loadingContent = this.loadingTemplate.content.cloneNode(true);
        this.loadingIndicator = loadingContent.firstElementChild;

        // Update avatar
        const avatar = this.loadingIndicator.querySelector("img");
        if (avatar) {
          avatar.src = this.config.icons.assistant_avatar;
        }

        this.messagesContainer.appendChild(this.loadingIndicator);
      } else if (this.loadingIndicator && !this.loadingIndicator.parentNode) {
        // Re-append if it was removed from DOM
        this.messagesContainer.appendChild(this.loadingIndicator);
      }

      if (this.loadingIndicator) {
        this.loadingIndicator.style.display = "block";
      }
    } else {
      if (this.loadingIndicator) {
        this.loadingIndicator.style.display = "none";
        this.messagesContainer.removeChild(this.loadingIndicator);
      }
    }

    // Disable/enable controls
    if (this.sendBtn) this.sendBtn.disabled = isLoading;
    // if (this.input) this.input.disabled = isLoading;

    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this.config.behavior.auto_scroll && this.messagesContainer) {
      this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
  }

  // Public API methods
  resetConversation() {
    this.messageHistory = [];
    this.conversationId = this.generateConversationId();

    if (this.messagesContainer) {
      this.messagesContainer.innerHTML = "";
      if (this.config.enable_session_persistence) {
        sessionStorage.removeItem("chatbotModalConversationHTML");
        sessionStorage.removeItem("chatbotModalFeedbackState");
        sessionStorage.removeItem("chatbotModalMinimized");
      }
    }
    if (this.savedSelection && this.config.enable_session_persistence) {
      sessionStorage.removeItem("vfChatbotSelectorSelection");
    }

    if (this.welcomeScreen && this.config.features.enable_welcome_suggestions) {
      this.welcomeScreen.style.display = "flex";
    }

    this.onConversationStart();
  }

  updateConfiguration(newConfig) {
    this.config = this.deepMerge(this.config, newConfig);
    this.applyConfigurationToDOM();
    // this.applyTheme();
  }

  getConfiguration() {
    return { ...this.config };
  }

  getConversationHistory() {
    return [...this.messageHistory];
  }

  minimize() {
    const event = new Event("vf-chatbot-modal-container:close", {
      bubbles: true
    });
    this.container.dispatchEvent(event);
  }

  showCloseDialog() {
    if (this.dialog) {
      // Initialize and show the dialog
      initVFChatbotDialog(this.dialog);
      this.dialog.style.display = "flex";

      // Listen for dialog events
      const onConfirm = () => {
        this.resetConversation(); // <-- Reset to original state
        this.dialog.removeEventListener("vf-chatbot-dialog:confirm", onConfirm);
        this.minimize();
      };
      this.dialog.addEventListener("vf-chatbot-dialog:confirm", onConfirm);
    }
  }

  destroy() {
    this.onConversationEnd();

    // Remove event listeners
    this.sendBtn?.removeEventListener("click", this.sendMessage);
    this.input?.removeEventListener("keypress", this.handleKeyPress);

    // Clean up API response listener
    if (this.apiResponseListener) {
      this.container.removeEventListener(
        "vf-chatbot:api-response",
        this.apiResponseListener
      );
    }
  }

  // Helper functions for conversation persistence
  saveConversationHTML(html) {
    if (this.config.enable_session_persistence) {
      sessionStorage.setItem("chatbotModalConversationHTML", html);
    }
  }

  loadConversationHTML() {
    if (this.config.enable_session_persistence) {
      return sessionStorage.getItem("chatbotModalConversationHTML") || "";
    }
    return "";
  }
}

// Global initialization function with configuration support
function initVFChatbotModal(customConfig = {}) {
  console.log("Looking for modal chatbot elements...");
  const chatbotElements = document.querySelectorAll(
    "[data-vf-js-chatbot-modal-container]"
  );

  if (chatbotElements.length === 0) {
    console.warn("No modal chatbot elements found on page");
    return [];
  }

  const instances = [];
  chatbotElements.forEach(element => {
    instances.push(new VFChatbotModal(element, customConfig));
  });

  return instances;
}

// Global exposure
if (typeof window !== "undefined") {
  window.VFChatbotModal = VFChatbotModal;
  window.initVFChatbotModal = initVFChatbotModal;
}

export { VFChatbotModal, initVFChatbotModal };
