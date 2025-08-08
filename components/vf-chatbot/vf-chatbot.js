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

// Utility to update bottom/right margin for all chatbots
function updateChatbotBottomMargin(bottomMarginPx = 0, rightMarginPx =0) {
  document.querySelectorAll("[data-vf-js-chatbot]").forEach(element => {
    element.style.setProperty("--vf-chatbot-modal-bottom-margin", `${bottomMarginPx}px`);
    element.style.setProperty("--vf-chatbot-modal-right-margin", `${rightMarginPx}px`);
  });
}

function getChatbotBottomMargin(userSuppliedMargin) {
  // If user provided a margin, use it
  if (typeof userSuppliedMargin === "number") return userSuppliedMargin;

  // Find all visible banners with .vf-banner--bottom
  const banners = Array.from(document.querySelectorAll(".vf-banner--bottom"))
    .filter(banner => {
      // Only consider banners that are displayed (not display: none)
      return !!(banner.offsetParent || (window.getComputedStyle(banner).display !== "none" && banner.offsetHeight > 0));
    });

  // Get the tallest banner's offsetHeight
  let maxHeight = 0;
  banners.forEach(banner => {
    // Listen for close events to update margin
    banner.addEventListener("vf-banner:close", () => {
      updateChatbotBottomMargin(0, 0);
    });
    const closeBtn = banner.querySelector("[data-vf-js-banner-close]");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        updateChatbotBottomMargin(0, 0);
      });
    }
    if (banner.offsetHeight > maxHeight) {
      maxHeight = banner.offsetHeight;
    }
  });

  return [ maxHeight, 0];
}

function initVFChatbot(config = {}) {
  if (config && config.type == "modal") {
    const elements = document.querySelectorAll("[data-vf-js-chatbot]");
    const chatbotBottomMargin = getChatbotBottomMargin(
      config.chatbotBottomMargin
    ) || [0, 0];
    elements.forEach(element => {
      // Set CSS variable for FAB and modal margin
      element.style.setProperty(
        "--vf-chatbot-modal-bottom-margin",
        `${chatbotBottomMargin[0]}px`
      );
      element.style.setProperty(
        "--vf-chatbot-modal-right-margin",
        `${chatbotBottomMargin[1]}px`
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
