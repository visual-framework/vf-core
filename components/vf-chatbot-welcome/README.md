## 12. Welcome Component README

```markdown
# Chatbot Welcome Component

<h2 class="vf-u-type--lead">
<span class="vf-badge vf-badge--primary vf-badge--phases">Alpha</span>
</h2>

Initial welcome screen for the chatbot, displaying a greeting and suggested questions.

## Usage

```njk
{% render "@vf-chatbot-shared-components/vf-chatbot-welcome", {
  welcome_title: "AI Assistant",
  welcome_description: "Welcome! I'm here to help",
  welcome_message: "Ask me anything about our services, research, or support."
} %}
```

import { VFChatbotWelcome } from "./vf-chatbot-welcome.js";

const welcomeElement = document.querySelector('[data-vf-js-chatbot-welcome]');
const welcome = new VFChatbotWelcome(welcomeElement);

// Initialize and load suggestion prompts
await welcome.init({
  suggestionsUrl: "../../assets/custom-suggestions.json"
});
````markdown
<div class="vf-chatbot-welcome" data-vf-js-chatbot-welcome>
  <div class="vf-chatbot-welcome__content">
    <div class="vf-chatbot-welcome__logo">
      <img src="../../assets/vf-chatbot/assets/vf-chatbot--icon-80x80-dark-green.svg" alt="AI Assistant">
    </div>
    <h3 class="vf-chatbot-welcome__title">AI Assistant</h3>
    <p class="vf-chatbot-welcome__description">Welcome! I'm here to help</p>
    <p class="vf-chatbot-welcome__message">Ask me anything about our services, research, or support.</p>

    <div class="vf-chatbot-welcome__suggestions">
      <h4 class="vf-chatbot-welcome__suggestions-title">Try asking me</h4>
      <div class="vf-chatbot-welcome__suggestions-grid">
        <!-- Suggestions will be populated here -->
        <div class="vf-chatbot-welcome__suggestion" data-vf-js-suggestion>
          <a href="#" class="vf-chatbot-welcome__suggestion-link">
            What services do you offer?
          </a>
        </div>
        <div class="vf-chatbot-welcome__suggestion" data-vf-js-suggestion>
          <a href="#" class="vf-chatbot-welcome__suggestion-link">
            How can I get support?
          </a>
        </div>
        <div class="vf-chatbot-welcome__suggestion" data-vf-js-suggestion>
          <a href="#" class="vf-chatbot-welcome__suggestion-link">
            Tell me about your research
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize welcome component
    const welcomeElement = document.querySelector('[data-vf-js-chatbot-welcome]');
    const welcome = new VFChatbotWelcome(welcomeElement);
    welcome.init({
      suggestionsUrl: "../../assets/custom-suggestions.json"
    });

    // Listen for suggestion clicks
    welcomeElement.addEventListener('vf-chatbot-welcome:suggestion-click', function(event) {
      console.log('Suggestion clicked:', event.detail.question);
    });
  });
</script>
````

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
