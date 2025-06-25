## 9. Prompt Component README

```markdown
# Chatbot Prompt Component

Message bubbles for user and assistant messages in the chatbot.

## Usage

```njk
<!-- User message -->
<div class="vf-chatbot-message vf-chatbot-message--user">
  <div class="vf-chatbot-message__avatar">
    <img src="../../assets/vf-chatbot/assets/vf-chatbot--avatar-user.svg" alt="You">
  </div>
  <div class="vf-chatbot-message__content">
    <div class="vf-chatbot-message__content-prompt">
      How do proteins fold?
    </div>
  </div>
</div>

<!-- Assistant message with sources, prompts, and feedback -->
<div class="vf-chatbot-message vf-chatbot-message--assistant">
  <div class="vf-chatbot-message__avatar">
    <img src="../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg" alt="AI Assistant">
  </div>
  <div class="vf-chatbot-message__content">
    <div class="vf-chatbot-message__content-prompt">
      Protein folding is the process by which a protein structure assumes its functional shape...

      <!-- Sources section -->
      <div class="vf-chatbot-sources" data-vf-js-chatbot-sources>
        <h3 class="vf-chatbot-sources__title">Sources</h3>
        <ul class="vf-chatbot-sources__list">
          <li class="vf-chatbot-sources__item">
            <a href="https://example.com/protein-folding" target="_blank" class="vf-chatbot-sources__link">
              Protein Folding Overview
            </a>
          </li>
        </ul>
      </div>

      <!-- Action prompts -->
      <div class="vf-chatbot-action-prompts">
        <div class="vf-chatbot-action-prompts__list">
          <div class="vf-chatbot-action-prompt">
            <a href="#" class="vf-chatbot-action-prompt__link">
              Tell me more about protein structures
            </a>
          </div>
          <div class="vf-chatbot-action-prompt">
            <a href="#" class="vf-chatbot-action-prompt__link">
              What is AlphaFold?
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Feedback controls -->
    <div class="vf-chatbot-feedback" data-vf-js-chatbot-feedback>
      <!-- Feedback content -->
    </div>
  </div>
</div>

<!-- Loading state -->
{% render "@vf-chatbot-shared-components/vf-chatbot-prompt", {
  type: "assistant",
  isLoading: true,
  avatar: {
    src: "../../assets/vf-chatbot/assets/vf-chatbot--icon-16x16-dark-green.svg",
    alt: "AI Assistant",
    name: "AI Assistant"
  }
} %}
````

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)

