export class VFChatbotDialog {
  constructor(element) {
    this.el = element;
    this.cancelBtn = this.el.querySelector("[data-vf-js-dialog-cancel]");
    this.confirmBtn = this.el.querySelector("[data-vf-js-dialog-confirm]");
    this.closeBtn = this.el.querySelector("[data-vf-js-dialog-close]");

    this.bindEvents();
  }

  bindEvents() {
    this.cancelBtn?.addEventListener("click", () => {
      this.hide();
      this.el.dispatchEvent(new CustomEvent("vf-chatbot-dialog:cancel"));
    });

    this.confirmBtn?.addEventListener("click", () => {
      this.hide();
      this.el.dispatchEvent(new CustomEvent("vf-chatbot-dialog:confirm"));
    });

    this.closeBtn?.addEventListener("click", () => {
      this.hide();
      this.el.dispatchEvent(new CustomEvent("vf-chatbot-dialog:cancel"));
    });
  }

  show() {
    this.el.style.display = "flex";
  }

  hide() {
    this.el.style.display = "none";
  }
}

export function initVFChatbotDialog(element) {
  return new VFChatbotDialog(element);
}
