import { useEffect, useRef } from "react";
import { initVFChatbotFeedback } from "./vf-chatbot-feedback.js";

export function VFChatbotFeedback({
  feedback_options = [],
  type,
  onFeedback,
  comment,
  onCommentChange,
  onClose,
  onSubmit
}) {
  const feedbackRef = useRef(null);

  useEffect(() => {
    if (feedbackRef.current) {
      initVFChatbotFeedback(feedbackRef.current);
    }
  }, []);

  return (
    <div
      ref={feedbackRef}
      className="vf-chatbot-feedback__form vf-u-margin__top--400"
    >
      <div className="vf-chatbot-feedback__form-content vf-u-padding--400">
        <div className="vf-chatbot-feedback__form-content-header">
          <div className="vf-chatbot-feedback__title">Tell us more (optional)</div>
          <button
            role="button"
            className="vf-chatbot-feedback__form-close vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
            type="button"
            aria-label="Close feedback form"
            data-vf-js-feedback-form-close
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>dismiss banner</title>
              <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
            </svg>
          </button>
        </div>
        <div className="vf-chatbot-feedback__options">
          {feedback_options.map(option => (
            <button
              key={option.id}
              className="vf-chatbot-feedback__option"
              data-feedback-option={option.id}
              onClick={() => onFeedback && onFeedback(type, option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <label
          id="vf-chatbot-feedback-comment-title"
          htmlFor="vf-chatbot-feedback-comment"
          className="vf-chatbot-feedback__comment-title"
        >
          Comments
        </label>
        <textarea
          id="vf-chatbot-feedback-comment"
          aria-labelledby="vf-chatbot-feedback-comment-title"
          className="vf-chatbot-feedback__comment"
          rows={4}
          value={comment}
          onChange={e => onCommentChange && onCommentChange(e.target.value)}
        />
        <button
          type="submit"
          className="vf-chatbot-feedback__submit vf-u-padding--200"
          data-vf-js-feedback-submit
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}