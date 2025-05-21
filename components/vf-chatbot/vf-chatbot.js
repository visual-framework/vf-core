// vf-chatbot
function VFChatbot(element) {
  this.el = element;
  this.fab = this.el.querySelector("[data-vf-js-chatbot-fab]");
  this.modal = this.el.querySelector("[data-vf-js-chatbot-modal]");

  this.init();
}

VFChatbot.prototype = {
  init: function() {
    if (!this.fab || !this.modal) return;

    // Handle FAB click
    this.fab.addEventListener("click", e => {
      e.stopPropagation();
      this.toggleChat();
    });

    // Handle modal events
    this.modal.addEventListener("vf-chatbot-modal:close", () => {
      this.fab.classList.remove("vf-chatbot-fab--active");
    });

    this.modal.addEventListener("vf-chatbot-modal:minimize", () => {
      this.fab.classList.remove("vf-chatbot-fab--active");
    });

    this.modal.addEventListener("vf-chatbot-modal:maximize", () => {
      this.fab.classList.add("vf-chatbot-fab--active");
    });

    // Handle clicks outside modal
    document.addEventListener("click", e => {
      if (
        !this.modal.classList.contains("vf-chatbot-modal--minimized") &&
        !this.modal.contains(e.target) &&
        !this.fab.contains(e.target)
      ) {
        this.closeChat();
      }
    });

    // Handle escape key
    document.addEventListener("keydown", e => {
      if (
        e.key === "Escape" &&
        !this.modal.classList.contains("vf-chatbot-modal--minimized")
      ) {
        this.closeChat();
      }
    });
  },

  toggleChat: function() {
    const isMinimized = this.modal.classList.contains(
      "vf-chatbot-modal--minimized"
    );
    const isActive = this.modal.classList.contains("vf-chatbot-modal--active");

    if (isMinimized || !isActive) {
      this.openChat();
    } else {
      this.minimizeChat();
    }
  },

  openChat: function() {
    this.fab.classList.add("vf-chatbot-fab--active");
    this.modal.classList.remove("vf-chatbot-modal--minimized");
    this.modal.classList.add("vf-chatbot-modal--active");

    // Focus on input if it exists
    const input = this.modal.querySelector("[data-vf-js-chatbot-input]");
    if (input) {
      setTimeout(() => input.focus(), 300);
    }
  },

  minimizeChat: function() {
    this.fab.classList.remove("vf-chatbot-fab--active");
    this.modal.classList.add("vf-chatbot-modal--minimized");
    this.modal.classList.remove("vf-chatbot-modal--active");
  },

  closeChat: function() {
    this.fab.classList.remove("vf-chatbot-fab--active");
    this.modal.classList.remove("vf-chatbot-modal--active");
    this.modal.classList.remove("vf-chatbot-modal--minimized");
  },

  isModalOpen: function() {
    return this.modal.classList.contains("vf-chatbot-modal--active");
  }
};

function initVFChatbot() {
  const elements = document.querySelectorAll("[data-vf-js-chatbot]");
  elements.forEach(element => new VFChatbot(element));
}

export { VFChatbot, initVFChatbot };
