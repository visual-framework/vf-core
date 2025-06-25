# Chatbot Prompt Component

Message bubbles for user and assistant messages in the chatbot.

## Usage

### When to use this component

Use the chatbot prompt component to:

- Display individual messages in the conversation thread between user and assistant
- Show clear visual distinction between user messages and AI responses
- Present structured content including text, sources, and interactive elements
- Provide consistent formatting for all message types in the chat interface
- Enable message-level interactions like feedback, copying, or sharing

The prompt component is the core building block of any chatbot conversation, handling both simple text exchanges and complex responses with multiple elements.

### When not to use this component

This component is not to be used independent of the standalone or modal chatbot containers as it may not work correctly

The prompt component is essential for chatbot interfaces, but consider alternatives when:

- Displaying system messages or notifications (use dedicated alert components instead)
- Showing typing indicators or loading states (use specialized loading components)
- Presenting error messages that aren't part of the conversation flow
- Displaying welcome screens or introductory content (use dedicated welcome components)

Different message types may need different visual treatment than standard conversation prompts.

### Implementation

The prompt component provides:

- Distinct styling for user vs. assistant messages
- Avatar display with customizable images and names
- Support for rich content including HTML, links, and embedded elements
- Integration points for sources, action prompts, and feedback controls
- Loading states for messages that are being generated
- Responsive design that adapts to different screen sizes
- Proper semantic markup for accessibility

Messages appear in chronological order in the chat thread, with user messages typically aligned to one side and assistant responses to the other.

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-prompt
```


## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)

