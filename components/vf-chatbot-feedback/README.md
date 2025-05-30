# Chatbot Feedback component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-feedback.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-feedback)

## About

A feedback component for the Visual Framework chatbot that allows users to:
- Provide thumbs up/down feedback on responses
- Select specific feedback options based on their response
- Add custom comments
- See success/error states with closeable banners

## Usage

### JavaScript

```js
import { initVFChatbotFeedback } from '@visual-framework/vf-chatbot-feedback/vf-chatbot-feedback.js';
// Or import directly
// import { initVFChatbotFeedback } from '../components/raw/vf-chatbot-feedback/vf-chatbot-feedback.js';

initVFChatbotFeedback();
```

### Features

1. Dynamic feedback options based on thumbs up/down selection
2. Smooth scroll behavior for feedback form visibility
3. Success and error states with closeable banners
4. Visual feedback with solid state thumb icons
5. Comment section for detailed feedback

### Dependencies

- @visual-framework/vf-sass-config
- @visual-framework/vf-banner
