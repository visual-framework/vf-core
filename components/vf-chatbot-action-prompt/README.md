# Chatbot Action Prompt component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-action-prompt.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-action-prompt)

## About

The action prompt component for the Visual Framework chatbot. This component provides interactive links that can be used in the chatbot interface for various purposes such as:

- Suggestion links in the welcome screen
- Action links within chat messages
- Call-to-action links
- Form submission triggers

All action prompts are rendered as links with consistent styling, regardless of their function.

## Usage

### JavaScript

```js
import { initVFChatbotActionPrompt } from '@visual-framework/vf-chatbot-action-prompt/vf-chatbot-action-prompt.js';
// Or import directly
// import { initVFChatbotActionPrompt } from '../components/raw/vf-chatbot-action-prompt/vf-chatbot-action-prompt.js';

initVFChatbotActionPrompt();
```

### Nunjucks template

Basic action:
```njk
{% render '@vf-chatbot-action-prompt', {
  action_text: "Find workshops near research institutions",
  action_data: "find_workshops"
} %}
```

External link:
```njk
{% render '@vf-chatbot-action-prompt', {
  action_type: "link",
  action_text: "Visit our website",
  action_url: "https://example.com",
  action_target: "_blank"
} %}
```

Phone link:
```njk
{% render '@vf-chatbot-action-prompt', {
  action_type: "phone",
  action_text: "Call support",
  action_phone: "+1234567890"
} %}
```

Form submit link:
```njk
{% render '@vf-chatbot-action-prompt', {
  action_type: "form",
  action_text: "Submit",
  action_form: "contact-form"
} %}
```

## Install

```bash
yarn add --dev @visual-framework/vf-chatbot-action-prompt
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```scss
@import "@visual-framework/vf-chatbot-action-prompt/index.scss";
```

## Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| `action_text` | string | Yes | - | The text to display on the link |
| `action_type` | string | No | "button" | Type of action: "button", "link", "phone", or "form" |
| `action_url` | string | No | - | URL for link type actions |
| `action_target` | string | No | - | Target for link type actions (e.g., "_blank") |
| `action_phone` | string | No | - | Phone number for phone type actions |
| `action_form` | string | No | - | Form ID for form submit actions |
| `action_data` | string | No | - | Custom data to be included in the click event |
| `modifier_class` | string | No | - | Additional CSS classes (e.g., "vf-chatbot-action-prompt--small") |

## Events

The component dispatches a custom event when clicked:

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)

