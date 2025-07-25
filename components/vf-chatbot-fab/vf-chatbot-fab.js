// vf-chatbot-fab

function VFChatbotFab(element) {
  this.el = element;
  this.chatIcon = this.el.querySelector(".vf-chatbot-fab__icon--chat");

  this.init();
}

VFChatbotFab.prototype = {
  init: function() {
    this.addEventListeners();
  },

  addEventListeners: function() {
    this.el.addEventListener("click", () => {
      this.toggleState();
    });
  },

  toggleState: function() {
    this.el.classList.toggle("vf-chatbot-fab--inactive");

    // Dispatch event for parent chatbot component
    this.el.dispatchEvent(
      new CustomEvent("vf-chatbot-fab:toggle", {
        bubbles: true,
        detail: {
          isActive: this.el.classList.contains("vf-chatbot-fab--inactive")
        }
      })
    );
  }
};

function initVFChatbotFab() {
  const elements = document.querySelectorAll("[data-vf-js-chatbot-fab]");
  for (let i = 0; i < elements.length; i++) {
    new VFChatbotFab(elements[i]);
  }
}

// Global exposure
if (typeof window !== "undefined") {
  window.VFChatbotFab = VFChatbotFab;
  window.initVFChatbotFab = initVFChatbotFab;
}

export { VFChatbotFab, initVFChatbotFab };
