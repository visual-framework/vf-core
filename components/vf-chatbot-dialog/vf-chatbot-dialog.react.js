import { useRef, useEffect } from "react";
import { initVFChatbotDialog } from "./vf-chatbot-dialog.js";

export function VFChatbotDialog({
  title = "Close chat and delete conversation?",
  message = "Are you sure you want to close the chat? <br>Your current conversation history will be permanently deleted.",
  cancelLabel = "Keep chat open",
  confirmLabel = "Close and delete",
  onClose,
  onCancel,
  onConfirm
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) {
      initVFChatbotDialog(dialogRef.current);
    }
  }, []);

  // Always render the dialog structure, no conditional rendering
  return (
    <div
      ref={dialogRef}
      className="vf-chatbot-dialog"
      data-vf-js-chatbot-dialog
    >
      <div className="vf-chatbot-dialog__content">
        <div className="vf-chatbot-dialog__header vf-u-margin__bottom--400">
          <h2 className="vf-chatbot-dialog__title">{title}</h2>
          <button className="vf-chatbot-dialog__close" data-vf-js-dialog-close aria-label="Close dialog" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        <div className="vf-chatbot-dialog__body vf-u-margin__bottom--800">
          <p className="vf-text vf-text-body--3" dangerouslySetInnerHTML={{ __html: message }} />
        </div>
        <div className="vf-chatbot-dialog__actions">
          <button className="vf-chatbot-dialog__button vf-chatbot-dialog__button--outline" data-vf-js-dialog-cancel onClick={onCancel}>
            {cancelLabel}
          </button>
          <button className="vf-chatbot-dialog__button vf-chatbot-dialog__button--primary" data-vf-js-dialog-confirm onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}