# Chatbot Router Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-router.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-router)

## About

A configurable router component for the Visual Framework chatbot that provides:
- Single/Multi-select functionality for different chatbot services
- Searchable dropdown list for 10+ items
- Visual feedback for selected items
- Clear all functionality for multi-select mode
- Configurable through YAML

## Usage

### JavaScript

```js
import { initVFChatbotRouter } from '@visual-framework/vf-chatbot-router/vf-chatbot-router.js';
// Or import directly
// import { initVFChatbotRouter } from '../components/raw/vf-chatbot-router/vf-chatbot-router.js';

// Initialize with config from vf-chatbot-router.config.yml
initVFChatbotRouter();
```

### Configuration (vf-chatbot-router.config.yml)

```yaml
chatbotRoutes:
  multiselect: false  # Set to true for multi-selection mode
  maxMultiSelect: 3   # Maximum items that can be selected in multiselect mode
  showSearch: true    # Show search box if items > 10
  routes:
    - id: general
      title: General Assistant
      description: General purpose AI assistant
      selected: true
    - id: code
      title: Code Assistant
      description: Specialized in code and development
```

### Features

1. Configurable single/multi-select mode
2. Search functionality for large lists (10+ items)
3. Clear visual feedback for selected items
4. Responsive dropdown design
5. Clear all functionality for multi-select mode
6. Chevron indicator for dropdown state

### Dependencies

- @visual-framework/vf-sass-config
