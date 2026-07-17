// import { initVFChatbotFab } from "@visual-framework/vf-chatbot-fab/vf-chatbot-fab.js";
// import { initVFChatbotModal } from "@visual-framework/vf-chatbot-modal/vf-chatbot-modal.js";
// import { initVFChatbotStandalone } from "@visual-framework/vf-chatbot-standalone/vf-chatbot-standalone.js";

import { initVFChatbotFab } from "../vf-chatbot-fab/vf-chatbot-fab.js";
import { initVFChatbotModal } from "../vf-chatbot-modal/vf-chatbot-modal.js";
import { initVFChatbotStandalone } from "../vf-chatbot-standalone/vf-chatbot-standalone.js";
// Accessibility helpers
let previouslyFocusedElement = null;
let focusTrapHandler = null;
let escapeHandler = null;

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
      this.closeChat();
    });

    // Handle escape key (handled in focus trap for accessibility)
    // document.addEventListener("keydown", e => {
    //   if (
    //     e.key === "Escape" &&
    //     !this.modal.classList.contains("vf-chatbot-modal-container--inactive")
    //   ) {
    //     this.closeChat();
    //   }
    // });
  },

  enableFocusTrap: function() {
    const modal = this.modal;
    const focusableSelectors = [
      "a[href]",
      "area[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ];
    const getFocusable = () =>
      Array.from(modal.querySelectorAll(focusableSelectors.join(","))).filter(
        el => el.offsetParent !== null
      );

    // Focus first focusable element or modal itself
    const focusables = getFocusable();
    // Try to focus the input first
    const input = modal.querySelector("[data-vf-js-chatbot-modal-input]");
    if (input) {
      input.focus();
    } else if (focusables.length) {
      focusables[0].focus();
    } else {
      modal.setAttribute("tabindex", "-1");
      modal.focus();
    }

    // Trap focus
    focusTrapHandler = e => {
      if (!modal.classList.contains("vf-chatbot-modal-container--active"))
        return;
      if (e.key !== "Tab") return;
      const focusables = getFocusable();
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    // Escape closes modal
    escapeHandler = e => {
      if (!modal.classList.contains("vf-chatbot-modal-container--active"))
        return;
      if (e.key === "Escape") {
        e.preventDefault();
        this.closeChat();
      }
    };

    document.addEventListener("keydown", focusTrapHandler);
    document.addEventListener("keydown", escapeHandler);
  },

  disableFocusTrap: function() {
    document.removeEventListener("keydown", focusTrapHandler);
    document.removeEventListener("keydown", escapeHandler);
  },

  openChat: function() {
    this.fab.classList.add("vf-chatbot-fab--inactive");
    this.modal.classList.remove("vf-chatbot-modal-container--inactive");
    this.modal.classList.add("vf-chatbot-modal-container--active");
    this.modal.setAttribute("aria-modal", true);

    // Accessibility: store and trap focus
    previouslyFocusedElement = document.activeElement;
    this.enableFocusTrap();

    // Focus on input if it exists
    const input = this.modal.querySelector("[data-vf-js-chatbot-modal-input]");
    if (input) {
      setTimeout(() => input.focus(), 300);

      // Enter to send message (unless Shift+Enter)
      input.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          // You may want to call your send message logic here
          const sendBtn = input.parentElement.querySelector(
            "[data-vf-js-chatbot-modal-send]"
          );
          if (sendBtn) sendBtn.click();
        }
      });
    }

    sessionStorage.setItem("chatbotModalMinimized", "false");
  },
  closeChat: function() {
    this.fab.classList.remove("vf-chatbot-fab--inactive");
    this.modal.classList.remove("vf-chatbot-modal-container--active");
    this.modal.classList.add("vf-chatbot-modal-container--inactive");
    this.modal.setAttribute("aria-modal", false);

    // Accessibility: restore focus and remove trap
    this.disableFocusTrap();
    if (previouslyFocusedElement && previouslyFocusedElement.focus) {
      previouslyFocusedElement.focus();
    }

    sessionStorage.setItem("chatbotModalMinimized", "true");
  }
};

// Utility to update bottom/right margin for all chatbots
function updateChatbotBottomMargin(bottomMarginPx = 0, rightMarginPx = 0) {
  document.querySelectorAll("[data-vf-js-chatbot]").forEach(element => {
    element.style.setProperty(
      "--vf-chatbot-modal-bottom-margin",
      `${bottomMarginPx}px`
    );
    element.style.setProperty(
      "--vf-chatbot-modal-right-margin",
      `${rightMarginPx}px`
    );
  });
}

function getChatbotBottomMargin(userSuppliedMargin) {
  // If user provided a margin, use it
  if (typeof userSuppliedMargin === "number") return userSuppliedMargin;

  // Find all visible banners with .vf-banner--bottom
  const banners = Array.from(
    document.querySelectorAll(".vf-banner--bottom")
  ).filter(banner => {
    // Only consider banners that are displayed (not display: none)
    return !!(
      banner.offsetParent ||
      (window.getComputedStyle(banner).display !== "none" &&
        banner.offsetHeight > 0)
    );
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

  return [maxHeight, 0];
}

function initVFChatbot(config = {}) {
  if (config && config.type == "modal") {
    const elements = document.querySelectorAll("[data-vf-js-chatbot]");
    const chatbotBottomMargin = getChatbotBottomMargin(
      config.chatbotBottomMargin
    ) || [0, 0];
    let modalInstances = [];
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
      modalInstances = modalInstances.concat(initVFChatbotModal(config));
    });
    return modalInstances;
  } else if (config && config.type == "standalone") {
    return initVFChatbotStandalone(config);
  }
}

// Global exposure
if (typeof window !== "undefined") {
  window.VFChatbot = VFChatbot;
  window.initVFChatbot = initVFChatbot;
}

export { VFChatbot, initVFChatbot };
