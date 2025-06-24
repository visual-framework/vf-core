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
