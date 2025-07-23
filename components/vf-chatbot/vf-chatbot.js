// vf-chatbot
function VFChatbot(element) {
  this.el = element;
  this.fab = this.el.querySelector("[data-vf-js-chatbot-fab]");
  this.modal = this.el.querySelector("[data-vf-js-chatbot-modal-container]");

  this.init();
}

VFChatbot.prototype = {
  init: function() {
    if (!this.fab || !this.modal) return;

    // Handle FAB toggle event
    this.el.addEventListener("vf-chatbot-fab:toggle", e => {
      e.stopPropagation();
      this.openChat();
    });

    // Handle modal events
    this.modal.addEventListener("vf-chatbot-modal-container:close", () => {
      // this.fab.classList.remove("vf-chatbot-fab--inactive");
      this.closeChat();
    });

    // Handle escape key
    document.addEventListener("keydown", e => {
      if (
        e.key === "Escape" &&
        !this.modal.classList.contains("vf-chatbot-modal-container--inactive")
      ) {
        this.closeChat();
      }
    });
  },

  openChat: function() {
    this.fab.classList.add("vf-chatbot-fab--inactive");
    this.modal.classList.remove("vf-chatbot-modal-container--inactive");
    this.modal.classList.add("vf-chatbot-modal-container--active");

    // Focus on input if it exists
    const input = this.modal.querySelector("[data-vf-js-chatbot-input]");
    if (input) {
      setTimeout(() => input.focus(), 300);
    }
  },

  closeChat: function() {
    this.fab.classList.remove("vf-chatbot-fab--inactive");
    this.modal.classList.remove("vf-chatbot-modal-container--active");
    this.modal.classList.add("vf-chatbot-modal-container--inactive");
  }
};

function getBottomBannerHeight(userHeight) {
  // If user provided a height, use it
  if (typeof userHeight === "number") return userHeight;
  // Otherwise, check for .vf-banner--bottom
  const banner = document.querySelector(".vf-banner--bottom");
  if (banner) {
    return banner.offsetHeight || 0;
  }
  return 0;
}

function initVFChatbot(userOptions = {}) {
  const elements = document.querySelectorAll("[data-vf-js-chatbot]");
  const chatbotBottomMargin = getBottomBannerHeight(
    userOptions.chatbotBottomMargin
  );
  elements.forEach(element => {
    // Set CSS variable for FAB and modal margin
    element.style.setProperty(
      "--vf-bottom-banner-height",
      `${chatbotBottomMargin}px`
    );
    new VFChatbot(element);
  });
}

export { VFChatbot, initVFChatbot };
