# Chatbot Feedback component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-feedback.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-feedback)

## About

A feedback component for the Visual Framework chatbot that allows users to:
- Provide thumbs up/down feedback on responses
- Select specific feedback options based on their response
- Add custom comments
- See success/error states with closeable banners

## Usage

```njk
{% render "@vf-chatbot-shared-components/vf-chatbot-feedback", {
  responseId: "response-123"
} %}

<!-- OR for specific variants -->
{% render "@vf-chatbot-shared-components/vf-chatbot-feedback--positive" %}
{% render "@vf-chatbot-shared-components/vf-chatbot-feedback--negative" %}
```

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
