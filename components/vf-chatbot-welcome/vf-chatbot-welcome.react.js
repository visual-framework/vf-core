import { useEffect, useRef } from "react";
import ReactDOMServer from "react-dom/server";
import { VFChatbotActionPrompt } from "../vf-chatbot-action-prompt/vf-chatbot-action-prompt.react";

export function VFChatbotWelcome({
  welcome_logo,
  welcome_logo_url,
  welcome_logo_alt = "AI Assistant",
  welcome_title,
  welcome_message,
  welcome_suggestions_title,
  enable_welcome_suggestions,
  welcome_max_suggestions = 4,
  enable_qa_data_loading = true,
  enable_predefined_qa = true,
  enable_fallback_responses = true,
  qa_data_url
}) {
  const welcomeRef = useRef(null);
  const templateRef = useRef(null);

  useEffect(() => {
    if (templateRef.current) {
      const htmlString = ReactDOMServer.renderToStaticMarkup(
        <VFChatbotActionPrompt action_url="#" action_text="" />
      );
      templateRef.current.innerHTML = htmlString;
    }
  }, []);

  return (
    <div
      ref={welcomeRef}
      className="vf-chatbot-welcome"
      data-vf-js-chatbot-welcome
      data-max-questions={welcome_max_suggestions}
      data-enable-qa-data-loading={enable_qa_data_loading}
      data-enable-predefined-qa={enable_predefined_qa}
      data-enable-fallback-responses={enable_fallback_responses}
      data-qa-data-url={qa_data_url}
    >
      <div className="vf-chatbot-welcome__content">
        {welcome_logo && (
          <div className="vf-chatbot-welcome__logo">
            {welcome_logo_url && (
              <img
                className="vf-chatbot-welcome__logo-image"
                src={welcome_logo_url}
                alt={welcome_logo_alt}
              />
            )}
          </div>
        )}
        {welcome_title && (
          <h1 className="vf-chatbot-welcome__title">{welcome_title}</h1>
        )}
        {welcome_message && (
          <div className="vf-chatbot-welcome__message">{welcome_message}</div>
        )}
      </div>
      {enable_welcome_suggestions && (
        <div className="vf-chatbot-welcome__suggestions">
          {welcome_suggestions_title && (
            <h3 className="vf-chatbot-welcome__suggestions-title">
              {welcome_suggestions_title}
            </h3>
          )}
          <div
            className="vf-chatbot-welcome__suggestions-grid"
            data-vf-js-chatbot-welcome-suggestions-grid
          ></div>
        </div>
      )}
      <template id="welcome-suggestion-template" ref={templateRef}></template>
    </div>
  );
}
