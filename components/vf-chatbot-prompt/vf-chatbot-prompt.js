// vf-chatbot-prompt

function VFChatbotPrompt(element) {
  this.el = element;
  this.loading = false;
}

VFChatbotPrompt.prototype = {
  setLoading: function(isLoading) {
    this.loading = isLoading;

    if (isLoading) {
      // Remove existing loading element if any
      this.removeLoading();

      // Create loading element
      const loadingEl = document.createElement("div");
      loadingEl.className = "vf-chatbot-prompt__loading";
      loadingEl.innerHTML = `
        <span class="vf-chatbot-prompt__dot"></span>
        <span class="vf-chatbot-prompt__dot"></span>
        <span class="vf-chatbot-prompt__dot"></span>
      `;

      this.el.appendChild(loadingEl);
    } else {
      this.removeLoading();
    }
  },

  removeLoading: function() {
    const loadingEl = this.el.querySelector(".vf-chatbot-prompt__loading");
    if (loadingEl) {
      loadingEl.remove();
    }
  },

  setResponse: function(html) {
    // Remove loading first
    this.setLoading(false);

    // Create response element
    const responseEl = document.createElement("div");
    responseEl.className =
      "vf-chatbot-prompt__message vf-chatbot-prompt__message--system";
    responseEl.innerHTML = html;

    this.el.appendChild(responseEl);
  }
};

function initVFChatbotPrompt(message) {
  const el = document.createElement("div");
  el.className = "vf-chatbot-prompt";
  el.setAttribute("data-vf-js-chatbot-prompt", "");

  const messageEl = document.createElement("div");
  messageEl.className =
    "vf-chatbot-prompt__message vf-chatbot-prompt__message--user";
  messageEl.textContent = message;

  el.appendChild(messageEl);

  const prompt = new VFChatbotPrompt(el);
  return prompt;
}

export { VFChatbotPrompt, initVFChatbotPrompt };
