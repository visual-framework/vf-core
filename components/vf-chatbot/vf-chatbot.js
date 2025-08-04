
import { initVFChatbotFab } from "vf-chatbot-fab/vf-chatbot-fab.js";
import { initVFChatbotModal } from "vf-chatbot-modal/vf-chatbot-modal.js";
import { initVFChatbotStandalone } from "vf-chatbot-standalone/vf-chatbot-standalone.js";

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
    sessionStorage.setItem("chatbotModalMinimized", "false");
  },

  closeChat: function() {
    this.fab.classList.remove("vf-chatbot-fab--inactive");
    this.modal.classList.remove("vf-chatbot-modal-container--active");
    this.modal.classList.add("vf-chatbot-modal-container--inactive");
    sessionStorage.setItem("chatbotModalMinimized", "true");
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

function initVFChatbot(config = {}) {
  if (config && config.type == "modal") {
    const elements = document.querySelectorAll("[data-vf-js-chatbot]");
    const chatbotBottomMargin = getBottomBannerHeight(
      config.chatbotBottomMargin
    );
    elements.forEach(element => {
      // Set CSS variable for FAB and modal margin
      element.style.setProperty(
        "--vf-bottom-banner-height",
        `${chatbotBottomMargin}px`
      );
      new VFChatbot(element);
      initVFChatbotFab();
      initVFChatbotModal(config);
    });
  } else if (config && config.type == "standalone") {
    initVFChatbotStandalone(config);
  }
}

// Global exposure
if (typeof window !== "undefined") {
  window.VFChatbot = VFChatbot;
  window.initVFChatbot = initVFChatbot;
}

export { VFChatbot, initVFChatbot };
