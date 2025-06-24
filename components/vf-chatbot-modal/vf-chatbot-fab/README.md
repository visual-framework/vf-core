## 4. FAB Component README

```markdown
# Chatbot Floating Action Button

A floating action button (FAB) that triggers the chatbot modal.

## Usage

```njk
<!-- Add the FAB -->
<div class="vf-chatbot-fab" data-vf-js-chatbot-fab>
  <div class="vf-chatbot-fab__icon">
    <img src="../../assets/vf-chatbot/assets/vf-chatbot--icon-24x24-white.svg" alt="Open chat">
  </div>
</div>

<!-- Add the modal -->
<div class="vf-chatbot-modal" data-vf-js-chatbot-modal></div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Initialize components in the right order
    const modalInstances = window.initVFChatbotModal();
    const fabInstances = window.initVFChatbotFab();

    // Optional: Programmatically control the FAB
    setTimeout(() => {
      fabInstances[0].open(); // Auto-open after delay
    }, 5000);
  });
</script>
```

## Initialize

```js
// Initialize
const fabInstances = window.initVFChatbotFab();

// Access instance methods
fabInstances[0].open(); // Open the associated modal
fabInstances[0].close(); // Close the associated modal
fabInstances[0].toggleModal(); // Toggle the modal state
```

## Styles

```css
.vf-chatbot-fab {
  --vf-chatbot-fab-size: 50px;                  /* Size of the button */
  --vf-chatbot-fab-color: var(--vf-color--green); /* Background color */
  --vf-chatbot-fab-position-bottom: 20px;       /* Position from bottom */
  --vf-chatbot-fab-position-right: 20px;        /* Position from right */
}
```

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
