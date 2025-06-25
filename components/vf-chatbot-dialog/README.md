# Chatbot Dialog Component

<h2 class="vf-u-type--lead">
<span class="vf-badge vf-badge--primary vf-badge--phases">Alpha</span>
</h2>

A confirmation dialog for the chatbot modal, used for confirming actions like closing the chat.

## Usage

### When to use this component

Use the chatbot dialog component to:

- Confirm destructive actions like closing the chat and losing conversation history
- Prevent accidental loss of important conversations or work in progress
- Ask for user consent before clearing chat data or switching contexts
- Provide clear options when users attempt to navigate away from active conversations
- Handle scenarios where user intent needs clarification before proceeding

The dialog is particularly important for longer conversations where users have invested time and effort, or when chat history contains valuable information they might need to reference.

### When not to use this component

This component is not to be used independent of the standalone or modal chatbot containers as it may not work correctly

Avoid the confirmation dialog when:

- The action is easily reversible or non-destructive
- Users can quickly restart or recover their conversation state
- The chat contains only brief, casual exchanges with little value
- Frequent confirmations would interrupt the user experience unnecessarily
- Alternative methods exist to preserve user work (like auto-save functionality)

For simple interactions or when users expect immediate responses to close actions, confirmation dialogs can feel obtrusive.

### Implementation

The dialog component provides:

- Clear explanation of what will happen if the user confirms the action
- Prominent action buttons with clear labels (e.g., "Keep chat open" vs "Close and delete")
- Modal overlay that focuses attention on the decision
- Keyboard navigation support for accessibility
- Option to cancel and return to the chat without losing progress
- Consistent styling that matches the overall chatbot interface

The dialog typically appears when users click the close button on a chatbot that contains an active conversation.

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-dialog
```

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
