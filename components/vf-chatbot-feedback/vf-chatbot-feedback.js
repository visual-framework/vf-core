export class VFChatbotFeedback {
  constructor(container, messageId, config = {}) {
    this.container = container;
    this.messageId = messageId;
    this.config = {
      enable_instant_feedback: false,
      api_endpoint: null,
      ...config
    };
    this.positiveTemplate = document.querySelector(
      "#feedback-positive-template"
    );
    this.negativeTemplate = document.querySelector(
      "#feedback-negative-template"
    );
    this.positiveOptions = config.positiveOptions || [
      { id: "accurate", label: "Accurate answer" },
      { id: "easy", label: "Easy to understand" },
      { id: "formatted", label: "Well formatted" },
      { id: "helpful", label: "Helpful" }
    ];
    this.negativeOptions = config.negativeOptions || [
      { id: "inaccurate", label: "Inaccurate answer" },
      { id: "nocontext", label: "Did not use context" },
      { id: "poorformat", label: "Poorly formatted" },
      { id: "nothelpful", label: "Not helpful" }
    ];
    this.renderInitialState();
    this.selectedThumb = "";
  }

  renderInitialState() {
    this.container.innerHTML = `
      <div class="vf-chatbot-feedback__actions">
        <button class="vf-chatbot-feedback__thumb" data-vf-js-feedback-thumb="up" aria-label="Good response">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99997 19.9997H17.1919C17.9865 19.9997 18.7058 19.5293 19.0243 18.8013L21.8323 12.383C21.9429 12.1302 22 11.8573 22 11.5813V10.9997C22 9.89518 21.1045 8.99975 20 8.99975H13.5L14.7066 4.57545C14.8772 3.94998 14.5826 3.29105 14.0027 3.00111C13.4204 2.70995 12.7134 2.87231 12.3164 3.38835L8.41472 8.46057C8.14579 8.81019 7.99997 9.2389 7.99997 9.67999V19.9997ZM7.99997 19.9997H2V9.99975H7.99997V19.9997Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="vf-chatbot-feedback__thumb" data-vf-js-feedback-thumb="down" aria-label="Bad response">
        <svg width="24" height="24" viewBox="10 10 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 14H27.1919C27.9865 14 28.7058 14.4704 29.0243 15.1984L31.8323 21.6167C31.9429 21.8695 32 22.1424 32 22.4184V23C32 24.1046 31.1045 25 30 25H23.5L24.7066 29.4243C24.8772 30.0498 24.5826 30.7087 24.0027 30.9986C23.4204 31.2898 22.7134 31.1274 22.3164 30.6114L18.4147 25.5392C18.1458 25.1896 18 24.7608 18 24.3198V24M18 14H12V24H18M18 14V24" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
      </div>
      <div class="vf-chatbot-feedback__form-container"></div>
    `;
    this.bindThumbEvents();
  }

  bindThumbEvents() {
    const upThumb = this.container.querySelector(
      "[data-vf-js-feedback-thumb='up']"
    );
    const downThumb = this.container.querySelector(
      "[data-vf-js-feedback-thumb='down']"
    );
    const formContainer = this.container.querySelector(
      ".vf-chatbot-feedback__form-container"
    );

    upThumb?.addEventListener("click", () => {
      upThumb.classList.add("vf-chatbot-feedback__thumb--solid");
      downThumb.classList.remove("vf-chatbot-feedback__thumb--solid");

      if (this.config.enable_instant_feedback) {
        // Submit feedback immediately without showing form
        this.submitInstantFeedback("positive");
        this.showSuccessBanner();
      } else {
        // Traditional flow - show feedback form
        this.showForm("positive", formContainer);
      }
    });

    downThumb?.addEventListener("click", () => {
      downThumb.classList.add("vf-chatbot-feedback__thumb--solid");
      upThumb.classList.remove("vf-chatbot-feedback__thumb--solid");

      if (this.config.enable_instant_feedback) {
        // Submit feedback immediately without showing form
        this.submitInstantFeedback("negative");
        this.showSuccessBanner();
      } else {
        // Traditional flow - show feedback form
        this.showForm("negative", formContainer);
      }
    });
  }

  submitInstantFeedback(feedbackType) {
    const feedbackData = {
      messageId: this.messageId,
      feedbackType: feedbackType,
      feedbackText: "", // Empty for instant feedback
      feedbackComment: "", // Empty for instant feedback
      timestamp: Date.now()
    };

    // Emit event for parent component to handle
    this.emitFeedbackEvent(feedbackData);

    // Send to API if configured
    if (this.config.api_endpoint) {
      this.sendFeedbackToAPI(feedbackData);
    }

    console.log("Instant feedback submitted:", feedbackData);
  }

  showSuccessBanner() {
    const formContainer = this.container.querySelector(
      ".vf-chatbot-feedback__form-container"
    );

    // Show thank you message using vf-banner (dismissible)
    formContainer.innerHTML = `
      <div class="vf-banner" aria-label="Thank you" data-vf-js-banner>
        <div class="vf-banner__content">
          <p class="vf-banner__text">Thank you for your feedback!</p>
          <button role="button" aria-label="close notification banner" class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>dismiss banner</title>
              <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
            </svg>
          </button>
        </div>
      </div>
    `;

    // Hide the unselected thumb and disable the selected one
    const upThumb = this.container.querySelector(
      "[data-vf-js-feedback-thumb='up']"
    );
    const downThumb = this.container.querySelector(
      "[data-vf-js-feedback-thumb='down']"
    );
    if (upThumb.classList.contains("vf-chatbot-feedback__thumb--solid")) {
      downThumb.style.display = "none";
      upThumb.disabled = true; // Disable the clicked thumb
    } else if (
      downThumb.classList.contains("vf-chatbot-feedback__thumb--solid")
    ) {
      upThumb.style.display = "none";
      downThumb.disabled = true; // Disable the clicked thumb
    }

    // Add dismiss functionality
    const banner = formContainer.querySelector("[data-vf-js-banner]");
    const closeBtn = formContainer.querySelector(".vf-button--dismiss");
    if (banner && closeBtn) {
      closeBtn.addEventListener("click", () => {
        banner.remove();
      });
    }
  }

  emitFeedbackEvent(feedbackData) {
    const event = new CustomEvent("vf-chatbot-feedback:submit", {
      bubbles: true,
      detail: feedbackData
    });
    this.container.dispatchEvent(event);
  }

  async sendFeedbackToAPI(feedbackData) {
    try {
      const response = await fetch(this.config.api_endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(feedbackData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Failed to send feedback to API:", error);
    }
  }

  showForm(type, formContainer) {
    if (!formContainer) {
      formContainer = this.container.querySelector(
        ".vf-chatbot-feedback__form-container"
      );
    }
    formContainer.innerHTML = "";
    const template =
      type === "positive" ? this.positiveTemplate : this.negativeTemplate;
    if (template) {
      const formContent = template.content.cloneNode(true);
      formContent.children[0].style.display = "block";
      formContainer.appendChild(formContent);
      this.bindFormEvents(formContainer);

      // Bring the feedback form into view
      formContainer.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  bindFormEvents(formContainer) {
    // Option button selection logic (if needed)
    const optionButtons = formContainer.querySelectorAll(
      ".vf-chatbot-feedback__option"
    );
    optionButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        optionButtons.forEach(b =>
          b.classList.remove("vf-chatbot-feedback__option--selected")
        );
        btn.classList.add("vf-chatbot-feedback__option--selected");
      });
    });

    // Submit button logic
    const submitBtn = formContainer.querySelector(
      "[data-vf-js-feedback-submit]"
    );
    submitBtn?.addEventListener("click", () =>
      this.submitFeedback(formContainer)
    );

    // Close icon logic
    const closeBtn = formContainer.querySelector(
      "[data-vf-js-feedback-form-close]"
    );
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        // Remove the feedback form
        formContainer.innerHTML = "";

        // Remove solid class from both thumbs
        const upThumb = this.container.querySelector(
          "[data-vf-js-feedback-thumb='up']"
        );
        const downThumb = this.container.querySelector(
          "[data-vf-js-feedback-thumb='down']"
        );
        upThumb?.classList.remove("vf-chatbot-feedback__thumb--solid");
        downThumb?.classList.remove("vf-chatbot-feedback__thumb--solid");
      });
    }
  }

  submitFeedback(formContainer) {
    // Collect form data for traditional feedback
    const selectedOptions = formContainer.querySelectorAll(
      ".vf-chatbot-feedback__option--selected"
    );
    const feedbackText = Array.from(selectedOptions)
      .map(option => option.textContent.trim())
      .join(", ");

    const feedbackType = this.container
      .querySelector("[data-vf-js-feedback-thumb='up']")
      ?.classList.contains("vf-chatbot-feedback__thumb--solid")
      ? "positive"
      : "negative";

    const feedbackComment =
      formContainer.querySelector(".vf-chatbot-feedback__comment").value || "";

    const feedbackData = {
      messageId: this.messageId,
      feedbackType: feedbackType,
      feedbackText: feedbackText,
      feedbackComment: feedbackComment,
      timestamp: Date.now()
    };

    // Emit event for parent component to handle
    this.emitFeedbackEvent(feedbackData);

    // Send to API if configured
    if (this.config.api_endpoint) {
      this.sendFeedbackToAPI(feedbackData);
    }

    // Show success banner (reuse existing logic)
    this.showSuccessBanner();
  }
}

// Add this function at the end of the file:
export function initVFChatbotFeedback(
  container,
  messageId = null,
  config = {}
) {
  if (!container) return;
  // Prevent double-initialization
  if (container.__vfChatbotFeedbackInstance)
    return container.__vfChatbotFeedbackInstance;
  const instance = new VFChatbotFeedback(container, messageId, config);
  container.__vfChatbotFeedbackInstance = instance;
  return instance;
}
