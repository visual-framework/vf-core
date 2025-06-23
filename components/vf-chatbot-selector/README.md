## 10. Selector Component README

```markdown
# Chatbot Selector Component

A configurable router component for the Visual Framework chatbot that provides:
- Single/Multi-select functionality for different chatbot services
- Searchable dropdown list for 10+ items
- Visual feedback for selected items
- Clear all functionality for multi-select mode
- Configurable through YAML

## Usage

```njk
{% render "@vf-chatbot-shared-components/vf-chatbot-selector", {
  chatbotRoutes: {
    multiSelect: true,
    maxMultiSelect: 3,
    showSearch: true,
    showSearchThreshold: 5,
    showAllServices: true,
    showAllServicesSelected: true,
    routes: "../../assets/vf-chatbot/assets/vf-chatbot-selector-services.json",
    placeholder: "Select services",
    title: "Services"
  }
} %}
```

```js
import { initVFChatbotSelector } from "./vf-chatbot-selector.js";

// Initialize
const selector = initVFChatbotSelector(document.querySelector('[data-vf-js-chatbot-selector]'));

// Listen for selection changes
document.querySelector('[data-vf-js-chatbot-selector]').addEventListener('routeselection', function(event) {
  console.log('Selected routes:', event.detail.selectedItems);
});
```

```json
[
  {
    "id": "service1",
    "title": "General AI Assistant",
    "subtitle": "General purpose assistant",
    "icon": "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg"
  },
  {
    "id": "service2",
    "title": "Protein Analysis",
    "subtitle": "Specialized in protein structures",
    "icon": "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-blue.svg"
  }
]
```

<!-- Single select -->
<div class="vf-chatbot-selector" data-vf-js-chatbot-selector>
  <div class="vf-chatbot-selector__title">
    <img src="../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg" alt="Services">
    <div class="vf-chatbot-selector__title-content">
      <span class="vf-chatbot-selector__main-text">Services</span>
      <span class="vf-chatbot-selector__arrow">
        <svg width="10" height="6" viewBox="0 0 10 6">
          <path d="M1 1l4 4 4-4" stroke="currentColor" fill="none" stroke-width="2"/>
        </svg>
      </span>
    </div>
  </div>

  <div class="vf-chatbot-selector__dropdown">
    <!-- Search input appears if showSearch is true -->
    <div class="vf-chatbot-selector__search">
      <input type="text" placeholder="Search services..." class="vf-chatbot-selector__search-input">
    </div>

    <!-- Options list -->
    <div class="vf-chatbot-selector__options">
      <!-- Options will be populated here -->
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Configure and initialize the selector
    const selectorElement = document.querySelector('[data-vf-js-chatbot-selector]');
    selectorElement.dataset.vfJsChatbotSelectorConfig = JSON.stringify({
      multiSelect: true,
      showSearch: true,
      routes: [
        {
          "id": "service1",
          "title": "General AI Assistant",
          "subtitle": "General purpose assistant",
          "icon": "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg"
        },
        {
          "id": "service2",
          "title": "Protein Analysis",
          "subtitle": "Specialized in protein structures",
          "icon": "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-blue.svg"
        }
      ]
    });

    const selector = initVFChatbotSelector(selectorElement);

    // Listen for selection changes
    selectorElement.addEventListener('routeselection', function(event) {
      console.log('Selected routes:', event.detail.selectedItems);
    });
  });
</script>

### Features

1. Configurable single/multi-select mode
2. Search functionality for large lists (10+ items)
3. Clear visual feedback for selected items
4. Responsive dropdown design
5. Clear all functionality for multi-select mode
6. Chevron indicator for dropdown state

### Dependencies

- @visual-framework/vf-sass-config


## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-box` with this command.

```
$ yarn add --dev @visual-framework/vf-box
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-box/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)

