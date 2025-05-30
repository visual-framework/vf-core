export class VFChatbotFeedback {
  constructor(element, responseId) {
    if (!element) {
      console.error("Feedback element is required");
      return;
    }

    this.el = element;
    this.responseId = responseId;
    this.selectedFeedback = null;
    this.positiveFeedbackOptions = [
      "Accurate answer",
      "Easy to understand",
      "Well formatted",
      "Helpful"
    ];
    this.negativeFeedbackOptions = [
      "Inaccurate answer",
      "Did not use context",
      "Poorly formatted",
      "Not helpful"
    ];

    // API configuration - Mistral AI
    this.API_TOKEN = "";
    this.API_URL = "https://api.mistral.ai/v1/chat/completions";

    // Initialize after ensuring element exists
    this.init();
  }

  init() {
    // Ensure element exists before querying
    if (!this.el) return;

    const thumbsUp = this.el.querySelector("[data-vf-js-feedback-thumbs-up]");
    const thumbsDown = this.el.querySelector(
      "[data-vf-js-feedback-thumbs-down]"
    );

    if (thumbsUp) {
      thumbsUp.addEventListener("click", () =>
        this.handleThumbsClick("positive")
      );
    }

    if (thumbsDown) {
      thumbsDown.addEventListener("click", () =>
        this.handleThumbsClick("negative")
      );
    }
  }

  handleThumbsClick(type) {
    // First remove solid class from both thumbs
    const thumbsUp = this.el.querySelector("[data-vf-js-feedback-thumbs-up]");
    const thumbsDown = this.el.querySelector(
      "[data-vf-js-feedback-thumbs-down]"
    );
    thumbsUp?.classList.remove("vf-chatbot-feedback__thumb--solid");
    thumbsDown?.classList.remove("vf-chatbot-feedback__thumb--solid");

    // Make the clicked thumb solid
    const selectedThumb = this.el.querySelector(
      type === "positive"
        ? "[data-vf-js-feedback-thumbs-up]"
        : "[data-vf-js-feedback-thumbs-down]"
    );
    selectedThumb?.classList.add("vf-chatbot-feedback__thumb--solid");

    this.selectedFeedback = type;
    this.showFeedbackForm(type);
  }

  showFeedbackForm(type) {
    const formContainer = this.el.querySelector(".vf-chatbot-feedback__form");

    // Clear any existing content (form or banners)
    formContainer.innerHTML = "";

    const feedbackOptions =
      type === "positive"
        ? this.positiveFeedbackOptions
        : this.negativeFeedbackOptions;
    const formTitle = "Tell us more about your response";

    const formEl = document.createElement("div");
    formEl.className = "vf-chatbot-feedback__form-content";
    formEl.innerHTML = `
      <h3 class="vf-chatbot-feedback__title">${formTitle}</h3>
      <div class="vf-chatbot-feedback__options">
        ${feedbackOptions
    .map(
      option => `
          <button class="vf-chatbot-feedback__option" data-feedback-option="${option}">
            ${option}
          </button>
        `
    )
    .join("")}
      </div>
      <h4 class="vf-chatbot-feedback__comment-title">Comments</h4>
      <textarea
        class="vf-chatbot-feedback__comment"
        rows="4"
      ></textarea>
      <button type="submit" class="vf-chatbot-feedback__submit">
        Submit
      </button>
    `;

    // Add event listeners for options
    const options = formEl.querySelectorAll(".vf-chatbot-feedback__option");
    options.forEach(option => {
      option.addEventListener("click", e => {
        // Remove selected class from all options
        options.forEach(opt =>
          opt.classList.remove("vf-chatbot-feedback__option--selected")
        );
        // Add selected class to clicked option
        e.target.classList.add("vf-chatbot-feedback__option--selected");
      });
    });

    // Add submit handler
    const submitBtn = formEl.querySelector(".vf-chatbot-feedback__submit");
    submitBtn.addEventListener("click", () => this.submitFeedback());

    formContainer.appendChild(formEl);
    // Scroll the form into view
    formEl.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // // Ensure the feedback form is visible
    // setTimeout(() => {
    //   formContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // }, 100);
  }

  async submitFeedback() {
    // const selectedOption = this.el.querySelector(
    //   ".vf-chatbot-action-prompt--selected"
    // );
    // const comment = this.el.querySelector(".vf-chatbot-feedback__comment")
    //   .value;

    // if (response.ok) {
    this.showSuccess();
    // } else {
    // this.showError();
    // }
    // } catch (error) {
    //   this.showError();
    // }
  }

  showSuccess() {
    const formContainer = this.el.querySelector(".vf-chatbot-feedback__form");
    formContainer.innerHTML = `
      <div class="vf-banner vf-banner--success">
        <div class="vf-banner__content">
          <p class="vf-banner__text">Thank you for the feedback!</p>
          <button class="vf-banner__close" aria-label="Close feedback banner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" stroke="currentColor" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // Add close button event listener
    const closeBtn = formContainer.querySelector(".vf-banner__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        formContainer.innerHTML = "";
      });
    }

    // Hide the unselected thumb by setting display: none
    const otherThumb = this.el.querySelector(
      this.selectedFeedback === "positive"
        ? "[data-vf-js-feedback-thumbs-down]"
        : "[data-vf-js-feedback-thumbs-up]"
    );
    if (otherThumb) {
      otherThumb.style.display = "none";
    }

    // Add solid class only to the selected thumb
    const selectedThumb = this.el.querySelector(
      this.selectedFeedback === "positive"
        ? "[data-vf-js-feedback-thumbs-up]"
        : "[data-vf-js-feedback-thumbs-down]"
    );
    selectedThumb?.classList.add("vf-chatbot-feedback__thumb--solid");
  }

  showError() {
    const formContainer = this.el.querySelector(".vf-chatbot-feedback__form");
    formContainer.innerHTML = `
      <div class="vf-banner vf-banner--error">
        <div class="vf-banner__content">
          <p class="vf-banner__text">Failed to submit feedback. Please try again.</p>
          <button class="vf-banner__close" aria-label="Close error banner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" stroke="currentColor" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    `;

    // On error, remove solid class from both thumbs to restore original state
    const thumbsUp = this.el.querySelector("[data-vf-js-feedback-thumbs-up]");
    const thumbsDown = this.el.querySelector(
      "[data-vf-js-feedback-thumbs-down]"
    );
    thumbsUp?.classList.remove("vf-chatbot-feedback__thumb--solid");
    thumbsDown?.classList.remove("vf-chatbot-feedback__thumb--solid");

    // Add close button event listener
    const closeBtn = formContainer.querySelector(".vf-banner__close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        formContainer.innerHTML = "";
      });
    }
  }
}
