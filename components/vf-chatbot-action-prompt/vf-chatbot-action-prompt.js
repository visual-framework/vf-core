// vf-chatbot-action-prompt.js

class VFChatbotActionPrompt {
  constructor(element) {
    this.el = element;
    this.link = this.el.querySelector(".vf-chatbot-action-prompt__link");

    if (this.link) {
      this.bindEvents();
    }
  }

  bindEvents() {
    this.link.addEventListener("click", event => {
      // If it's a placeholder link or form action
      if (
        this.link.getAttribute("href") === "#" ||
        this.link.hasAttribute("data-vf-js-chatbot-action-form") ||
        this.link.hasAttribute("data-vf-js-chatbot-standalone-suggestion")
      ) {
        event.preventDefault();

        // Handle form submission if needed
        const formId = this.link.getAttribute("data-vf-js-chatbot-action-form");
        if (formId) {
          const form = document.getElementById(formId);
          if (form) {
            form.submit();
            return;
          }
        }

        // Get suggestion text if available
        const suggestionText = this.link.getAttribute("data-vf-js-chatbot-standalone-suggestion");

        // Get action data if available
        const actionData = this.link.getAttribute(
          "data-vf-js-chatbot-action-data"
        ) || suggestionText;

        // Dispatch custom event with action data
        this.el.dispatchEvent(
          new CustomEvent("vf-chatbot-action-prompt:click", {
            bubbles: true,
            detail: {
              text: suggestionText || this.link.textContent.trim(),
              data: actionData
            }
          })
        );
      }
    });
  }
}

// Initialize component
function initVFChatbotActionPrompt() {
  const actionPrompts = document.querySelectorAll(
    "[data-vf-js-chatbot-action-prompt]"
  );

  actionPrompts.forEach(actionPrompt => {
    new VFChatbotActionPrompt(actionPrompt);
  });
}

export { VFChatbotActionPrompt, initVFChatbotActionPrompt };
