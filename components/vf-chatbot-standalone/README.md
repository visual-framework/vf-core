# Chatbot Standalone component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-standalone.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-standalone)

## About

A full-page standalone chatbot interface that can be accessed via a direct URL. This component reuses elements from the chatbot modal but is designed to work as a standalone page rather than a popup.

## Usage

### JavaScript

```js
import { initVFChatbotStandalone } from '@visual-framework/vf-chatbot-standalone/vf-chatbot-standalone.js';
// Or import directly
// import { initVFChatbotStandalone } from '../components/raw/vf-chatbot-standalone/vf-chatbot-standalone.js';

initVFChatbotStandalone();
```

### Nunjucks template

```njk
{% render '@vf-chatbot-standalone', {
  title: "AI Assistant",
  welcome_message: "Hello! How can I help you today?",
  input_placeholder: "Type your message...",
  show_suggestions: true,
  show_close_button: true
} %}
```

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-standalone
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```scss
@import "@visual-framework/vf-chatbot-standalone/index.scss";
```

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)