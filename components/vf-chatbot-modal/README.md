# Chatbot Modal component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-modal.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-modal)

## About

The chat modal component for the Visual Framework chatbot. This component provides the main chat interface that appears when users click the floating action button.

## Features

- Responsive design that works on both desktop and mobile
- Auto-expanding input field
- Message history with automatic scrolling
- Smooth animations for show/hide
- Event-based communication with parent components
- Optional settings button
- Customizable welcome message

## Usage

### JavaScript

```js
import { initVFChatbotModal } from '@visual-framework/vf-chatbot-modal/vf-chatbot-modal.js';
// Or import directly
// import { initVFChatbotModal } from '../components/raw/vf-chatbot-modal/vf-chatbot-modal.js';

initVFChatbotModal();
```

### Nunjucks template

```njk
{% render '@vf-chatbot-modal', {
  title: "Chat with us",
  welcome_message: "Hello! How can I help you today?",
  input_placeholder: "Type your message...",
  show_settings: true
} %}
```

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-modal
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```scss
@import "@visual-framework/vf-chatbot-modal/index.scss";
```