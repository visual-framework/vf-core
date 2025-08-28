import { useEffect, useRef, useState } from "react";
import { VFChatbotSelector } from "../vf-chatbot-selector/vf-chatbot-selector.react";
import { VFChatbotWelcome } from "../vf-chatbot-welcome/vf-chatbot-welcome.react";
import { VFChatbotPrompt } from "../vf-chatbot-prompt/vf-chatbot-prompt.react";
import { VFChatbotFeedback } from "../vf-chatbot-feedback/vf-chatbot-feedback.react";
import { VFChatbotDialog } from "../vf-chatbot-dialog/vf-chatbot-dialog.react";
import { VFChatbotActionPrompt } from "../vf-chatbot-action-prompt/vf-chatbot-action-prompt.react";
import ReactDOMServer from "react-dom/server";

export function VFChatbotStandalone({
  config,
  messages = [],
  sources = [],
  prompts = [],
  onSendMessage,
  onInputChange,
  inputValue,
  onFeedback,
  onDialogConfirm,
  onDialogCancel
}) {
  const standaloneRef = useRef(null);
  const userMessageTemplateRef = useRef(null);
  const assistantMessageTemplateRef = useRef(null);
  const actionPromptTemplateRef = useRef(null);
  const loadingIndicatorTemplateRef = useRef(null);
  const actionPromptsTemplateRef = useRef(null);
  const feedbackPositiveTemplateRef = useRef(null);
  const feedbackNegativeTemplateRef = useRef(null);
  const [qaData, setQaData] = useState([]);

  useEffect(() => {
    // User message template
    if (userMessageTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotPrompt
          type="user"
          avatar={{
            src: config.icons.user_avatar,
            alt: "You",
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
            alt: config.title,
            name: config.title
          }}
          content="How can I help you?"
          source={sources}
          prompts={prompts}
          allowFeedback={config.features.enable_feedback}
        />
      );
      assistantMessageTemplateRef.current.innerHTML = htmlString;
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

    // Action prompt template
    if (actionPromptTemplateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotActionPrompt action_url="#" action_text="" />
      );
      actionPromptTemplateRef.current.innerHTML = htmlString;
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
      ref={standaloneRef}
      className="vf-content vf-chatbot-standalone-container"
      data-vf-js-chatbot-standalone-container
      data-vf-chatbot-config={JSON.stringify(config)}
    >
      {/* Header */}
      <div className="vf-chatbot-standalone__header">
        <div className="vf-chatbot-standalone__header-left">
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
      </div>

      {/* Main Standalone Chatbot */}
      <div
        className="vf-chatbot-standalone | vf-u-background-color-ui--grey--light vf-u-margin__bottom--400"
        data-vf-js-chatbot-standalone
      >
        <div
          className="vf-chatbot-standalone__content"
          data-vf-js-chatbot-standalone-content
        >
          {/* Welcome Screen */}
          {config.features.enable_welcome && (
            <VFChatbotWelcome
              qaData={qaData} // Pass as prop!
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
                ? "vf-chatbot-standalone__messages-no-scrollbar"
                : "vf-chatbot-standalone__messages"
            }
            data-vf-js-chatbot-standalone-messages
            data-auto-scroll={config.behavior.auto_scroll}
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
              className="vf-chatbot-standalone__disclaimer"
              data-vf-js-chatbot-standalone-disclaimer
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
        <div className="vf-chatbot-standalone__input-container">
          <div className="vf-chatbot-standalone__input-wrapper">
            <label
              className="vf-u-sr-only"
              id="vf-chatbot-standalone-input-label"
              htmlFor="vf-chatbot-standalone-input"
            >
              Ask me
            </label>
            <textarea
              id="vf-chatbot-standalone-input"
              aria-labelledby="vf-chatbot-standalone-input-label"
              className="vf-chatbot-standalone__input vf-form__textarea vf-u-padding__left--400"
              placeholder={config.input_placeholder}
              rows={1}
              data-vf-js-chatbot-standalone-input
              value={inputValue}
              onChange={onInputChange}
            />
            <button
              className="vf-chatbot-standalone__send-button"
              aria-label="Send message"
              data-vf-js-chatbot-standalone-send
              onClick={onSendMessage}
            >
              <img src={config.icons.send_button} alt="Send" />
            </button>
          </div>
          {config.footnote && (
            <div
              className="vf-chatbot-standalone__footnote vf-u-margin__top--200"
              data-vf-js-chatbot-standalone-footnote
              dangerouslySetInnerHTML={{ __html: config.footnote }}
            ></div>
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
          id="action-prompts-template"
          ref={actionPromptsTemplateRef}
        ></template>
        {config.features.enable_typing_indicator && (
          <template
            id="loading-indicator-template"
            ref={loadingIndicatorTemplateRef}
          ></template>
        )}
        {config.features.enable_feedback && (
          <>
            <template
              id="feedback-positive-template"
              ref={feedbackPositiveTemplateRef}
            ></template>
            <template
              id="feedback-negative-template"
              ref={feedbackNegativeTemplateRef}
            ></template>
          </>
        )}
      </div>
    </div>
  );
}
