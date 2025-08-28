export function VFChatbotActionPrompt({ action_url, action_text, action_target, onClick }) {
  return (
    <div className="vf-chatbot-action-prompt">
      {action_url ? (
        <a
          href={action_url}
          className="vf-chatbot-action-prompt__link"
          role="button"
          target={action_target || undefined}
          onClick={onClick}
        >
          {action_text}
        </a>
      ) : (
        <button className="vf-chatbot-action-prompt__link" onClick={onClick}>
          {action_text}
        </button>
      )}
    </div>
  );
}