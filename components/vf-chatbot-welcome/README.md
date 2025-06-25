# Chatbot Welcome Component

## About

Initial welcome screen for the chatbot, displaying a greeting and suggested questions.

## Usage

### When to use this component

Use the chatbot welcome component to:

- Provide a clear introduction to the chatbot's purpose and capabilities
- Guide users with suggested questions or topics they can explore
- Set expectations about what kind of help or information the chatbot can provide
- Create a friendly, approachable first impression for the conversational interface
- Reduce user uncertainty about how to start interacting with the chatbot

The welcome screen is particularly effective when users might be unfamiliar with chatbots or when the chatbot serves specific, specialized functions that benefit from explanation.

### When not to use this component

This component is not to be used independent of the standalone or modal chatbot containers as it may not work correctly

Avoid the welcome screen when:

- Users are already familiar with the chatbot and frequent returning users would find it repetitive
- The chatbot's purpose is immediately obvious from the context
- Screen space is limited and you need to maximize the conversation area
- The chatbot is embedded in a workflow where users have a specific, urgent task to complete
- You have evidence that users prefer to jump straight into asking questions

For experienced users or simple use cases, a minimal interface that goes directly to the input field may be more efficient.

### Implementation

The welcome component appears when the chatbot is first opened and includes:

- A welcoming title and description
- Brief explanation of the chatbot's capabilities
- Clickable suggestion prompts to help users get started
- Visual branding elements like icons or logos

Users can either click on a suggested question or type their own query to begin the conversation.

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-welcome
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```scss
@import "@visual-framework/vf-chatbot-welcome/index.scss";
```

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
