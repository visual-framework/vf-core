## 5. Dialog Component README

```markdown
# Chatbot Dialog Component

A confirmation dialog for the chatbot modal, used for confirming actions like closing the chat.

## Usage

```njk
{% render "@vf-chatbot-modal/vf-chatbot-dialog", {
  title: "Close chat and delete conversation?",
  message: "Are you sure you want to close the chat?",
  submessage: "Your current conversation history will be permanently deleted.",
  cancelLabel: "Keep chat open",
  confirmLabel: "Close and delete"
} %}
```
## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
