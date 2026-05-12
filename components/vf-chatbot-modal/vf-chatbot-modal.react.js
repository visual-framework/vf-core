import { useEffect, useRef, useState } from "react";
import { VFChatbotSelector } from "../vf-chatbot-selector/vf-chatbot-selector.react";
import { VFChatbotWelcome } from "../vf-chatbot-welcome/vf-chatbot-welcome.react";
import { VFChatbotDialog } from "../vf-chatbot-dialog/vf-chatbot-dialog.react";
import { VFChatbotPrompt } from "../vf-chatbot-prompt/vf-chatbot-prompt.react";
import { VFChatbotFeedback } from "../vf-chatbot-feedback/vf-chatbot-feedback.react";
import { VFChatbotActionPrompt } from "../vf-chatbot-action-prompt/vf-chatbot-action-prompt.react";
import ReactDOMServer from "react-dom/server";

export function VFChatbotModal({
  config,
  messages = [],
  sources = [],
  prompts = [],
  onSendMessage,
  onMinimize,
  onClose,
  onInputChange,
  inputValue,
  onFeedback,
  onDialogConfirm,
  onDialogCancel
}) {
  const modalRef = useRef(null);
  const userMessageTemplateRef = useRef(null);
  const assistantMessageTemplateRef = useRef(null);
  const actionPromptTemplateRef = useRef(null);
  const loadingIndicatorTemplateRef = useRef(null);
  const actionPromptsTemplateRef = useRef(null);
  const feedbackPositiveTemplateRef = useRef(null);
  const feedbackNegativeTemplateRef = useRef(null);
  const [qaData] = useState([]);

  useEffect(() => {
    // User message template
    if (userMessageTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotPrompt
          type="user"
          avatar={{
            src: config.icons.user_avatar,
            alt: "Your avatar",
            name: "You"
          }}
          content="Hello!"
        />
      );
      userMessageTemplateRef.current.innerHTML = htmlString;
    }

    // Assistant message template
    if (assistantMessageTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotPrompt
          type="assistant"
          avatar={{
            src: config.icons.assistant_avatar,
            alt: config.title + " avatar",
            name: config.title
          }}
          content="How can I help you?"
          allowFeedback={config.features.enable_feedback}
        />
      );
      assistantMessageTemplateRef.current.innerHTML = htmlString;
    }

    // Action prompt template
    if (actionPromptTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotActionPrompt action_url="#" action_text="" />
      );
      actionPromptTemplateRef.current.innerHTML = htmlString;
    }

    // Loading indicator template
    if (loadingIndicatorTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotPrompt
          type="assistant"
          isLoading={true}
          avatar={{
            src: config.icons.assistant_avatar,
            alt: config.title,
            name: config.title
          }}
        />
      );
      loadingIndicatorTemplateRef.current.innerHTML = htmlString;
    }

    // Action prompts template
    if (actionPromptsTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <div className="vf-chatbot-action-prompts vf-u-margin__top--400">
          <div
            className="vf-chatbot-action-prompts__list"
            data-vf-js-action-prompts-list
          >
            {/* Individual prompts will be populated here */}
          </div>
        </div>
      );
      actionPromptsTemplateRef.current.innerHTML = htmlString;
    }

    // Feedback positive template
    if (feedbackPositiveTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotFeedback
          feedback_options={config.feedback_options?.positive || []}
          type="positive"
          onFeedback={onFeedback}
        />
      );
      feedbackPositiveTemplateRef.current.innerHTML = htmlString;
    }

    // Feedback negative template
    if (feedbackNegativeTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotFeedback
          feedback_options={config.feedback_options?.negative || []}
          type="negative"
          onFeedback={onFeedback}
        />
      );
      feedbackNegativeTemplateRef.current.innerHTML = htmlString;
    }
  }, [config, onFeedback]);

  return (
    <div
      ref={modalRef}
      className="vf-content vf-chatbot-modal-container"
      data-vf-js-chatbot-modal-container
      data-vf-chatbot-config={JSON.stringify(config)}
      role="dialog"
      aria-label={config.title + "chatbot"}
    >
      {/* Header */}
      <div
        role="region"
        aria-label="Chatbot header"
        className="vf-chatbot-modal__header"
      >
        <div
          role="region"
          aria-label="Chatbot selector"
          className="vf-chatbot-modal__header-left"
        >
          {config.selectorContext ? (
            <VFChatbotSelector {...config.selectorContext} />
          ) : (
            <div className="vf-chatbot-selector">
              <div className="vf-chatbot-selector__title">
                <img
                  src={config.selectorContext?.selector_logo_url}
                  alt={config.selectorContext?.selector_logo_title}
                />
                <div className="vf-chatbot-selector__title-content">
                  <span className="vf-chatbot-selector__main-text">
                    {config.selectorContext?.selector_logo_title}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="vf-chatbot-modal__header-right">
          <button
            className="vf-chatbot-modal__minimize"
            aria-label="Minimize chatbot"
            data-vf-js-chatbot-modal-minimize
            onClick={onMinimize}
          >
            <img src={config.icons.minimize} alt="Minimize chatbot" />
          </button>
          <button
            className="vf-chatbot-modal__close"
            aria-label="Close chatbot"
            data-vf-js-chatbot-modal-close
            onClick={onClose}
          >
            <img src={config.icons.close} alt="Close chatbot" />
          </button>
        </div>
      </div>

      {/* Main Modal */}
      <div
        className="vf-chatbot-modal | vf-u-background-color-ui--grey--light"
        data-vf-js-chatbot-modal
      >
        <div
          className="vf-chatbot-modal__content"
          data-vf-js-chatbot-modal-content
        >
          {/* Welcome Screen */}
          {config.features.enable_welcome && (
            <VFChatbotWelcome
              qaData={qaData}
              welcome_logo={config.welcome_logo}
              welcome_logo_url={config.icons.main_logo_url}
              welcome_logo_alt={config.welcome_logo_alt}
              welcome_title={config.title}
              welcome_message={config.welcome_message}
              welcome_suggestions_title={config.welcome_suggestions_title}
              enable_welcome_suggestions={
                config.features.enable_welcome_suggestions
              }
              welcome_max_suggestions={config.welcome_max_suggestions}
              qa_data_url={config.api.qa_data_url}
              enable_qa_data_loading={config.features.enable_qa_data_loading}
              enable_predefined_qa={config.features.enable_predefined_qa}
              enable_fallback_responses={
                config.features.enable_fallback_responses
              }
            />
          )}

          {/* Messages */}
          <div
            className={
              config.behavior.show_scrollbar === false
                ? "vf-chatbot-modal__messages-no-scrollbar vf-u-margin__bottom--400"
                : "vf-chatbot-modal__messages vf-u-margin__bottom--400"
            }
            data-vf-js-chatbot-modal-messages
            data-auto-scroll={config.behavior.auto_scroll}
            role="region"
            aria-label="Chat messages"
          >
            {messages.map((msg, idx) => (
              <VFChatbotPrompt
                key={idx}
                {...msg}
                sources={sources}
                prompts={prompts}
                allowFeedback={config.features.enable_feedback}
                onFeedback={onFeedback}
              />
            ))}
          </div>

          {/* Disclaimer Banner */}
          {config.disclaimer && config.features.enable_disclaimer && (
            <div
              className="vf-chatbot-modal__disclaimer"
              role="region"
              aria-label="Disclaimer banner"
              data-vf-js-chatbot-modal-disclaimer
            >
              <div className="vf-banner vf-banner--alert vf-banner--info">
                <div className="vf-banner__content">
                  <p
                    className="vf-banner__text"
                    dangerouslySetInnerHTML={{ __html: config.disclaimer }}
                  />
                  <button
                    role="button"
                    aria-label="close notification banner"
                    className="vf-button vf-button--icon vf-button--dismiss | vf-banner__button"
                    onClick={config.onDismissDisclaimer}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>dismiss banner</title>
                      <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Container */}
        <div
          className="vf-chatbot-modal__input-container"
          role="region"
          aria-label="Chat message input"
        >
          <div className="vf-chatbot-modal__input-wrapper">
            <label
              className="vf-u-sr-only"
              id="vf-chatbot-modal-input-label"
              htmlFor="vf-chatbot-modal-input"
            >
              Ask me
            </label>
            <textarea
              id="vf-chatbot-modal-input"
              aria-labelledby="vf-chatbot-modal-input-label"
              className="vf-chatbot-modal__input vf-form__textarea vf-u-padding__left--400"
              placeholder={config.input_placeholder}
              rows={1}
              data-vf-js-chatbot-modal-input
              value={inputValue}
              onChange={onInputChange}
            />
            <button
              className="vf-chatbot-modal__send-button"
              aria-label="Send message"
              data-vf-js-chatbot-modal-send
              onClick={onSendMessage}
            >
              <img src={config.icons.send_button} alt="Send" />
            </button>
          </div>
          {config.footnote && (
            <div
              role="region"
              aria-label="footnote"
              className="vf-chatbot-modal__footnote vf-u-margin__top--200 vf-u-margin__bottom--200"
              data-vf-js-chatbot-modal-footnote
              dangerouslySetInnerHTML={{ __html: config.footnote }}
            />
          )}
        </div>

        {/* Dialog */}
        <VFChatbotDialog
          {...config.dialogProps}
          onConfirm={onDialogConfirm}
          onCancel={onDialogCancel}
        />

        {/* Templates rendered as <template> elements for JS */}
        <template
          id="user-message-template"
          ref={userMessageTemplateRef}
        ></template>
        <template
          id="assistant-message-template"
          ref={assistantMessageTemplateRef}
        ></template>
        <template
          id="single-action-prompt-template"
          ref={actionPromptTemplateRef}
        ></template>
        <template
          id="loading-indicator-template"
          ref={loadingIndicatorTemplateRef}
        ></template>
        <template
          id="action-prompts-template"
          ref={actionPromptsTemplateRef}
        ></template>
        <template
          id="feedback-positive-template"
          ref={feedbackPositiveTemplateRef}
        ></template>
        <template
          id="feedback-negative-template"
          ref={feedbackNegativeTemplateRef}
        ></template>
      </div>
    </div>
  );
}
