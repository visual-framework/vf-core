export function VFChatbotPrompt({
  type,
  isLoading,
  avatar,
  content,
  allowFeedback
}) {
  return (
    <>
      <div
        className={`vf-chatbot-message vf-chatbot-message--${type}${
          isLoading ? " vf-chatbot-message--loading" : ""
        } vf-u-margin__top--400`}
      >
        <div className="vf-chatbot-message__avatar vf-u-margin__bottom--200">
          {avatar && avatar.name && type === "user" && (
            <span className="vf-chatbot-message__avatar-name">
              {avatar.name}
            </span>
          )}
          {avatar && avatar.src && <img src={avatar.src} alt={avatar.alt} />}
          {avatar && avatar.name && type === "assistant" && (
            <span className="vf-chatbot-message__avatar-name">
              {avatar.name}
            </span>
          )}
        </div>
        <div className="vf-chatbot-message__content vf-u-padding--200">
          {isLoading ? (
            <div className="vf-chatbot-message__content-loading-dots">...</div>
          ) : (
            <div
              className="vf-chatbot-message__content-prompt vf-u-padding__left--200  vf-u-padding__right--200"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          )}
        </div>
      </div>
      {allowFeedback && (
        <div
          className="vf-chatbot-feedback vf-u-margin__top--200"
          data-vf-js-chatbot-feedback
        ></div>
      )}
    </>
  );
}
