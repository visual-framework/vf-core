## 11. Sources Component README

```markdown
# Chatbot Sources Component

Citation links component for chatbot responses, displaying reference sources for information.

## Usage

```njk
{% render "@vf-chatbot-shared-components/vf-chatbot-sources", {
  sources: [
    { url: "https://example.com/article1", title: "Detailed Article on Topic" },
    { url: "https://example.com/paper2", title: "Research Paper" }
  ]
} %}
```

<div class="vf-chatbot-sources" data-vf-js-chatbot-sources>
  <h3 class="vf-chatbot-sources__title">Sources</h3>
  <ul class="vf-chatbot-sources__list">
    <li class="vf-chatbot-sources__item">
      <a href="https://example.com/article1" target="_blank" class="vf-chatbot-sources__link">
        Detailed Article on Topic
      </a>
    </li>
    <li class="vf-chatbot-sources__item">
      <a href="https://example.com/paper2" target="_blank" class="vf-chatbot-sources__link">
        Research Paper
      </a>
    </li>
  </ul>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Example of dynamically adding sources
    const sources = [
      { url: "https://example.com/article1", title: "Detailed Article on Topic" },
      { url: "https://example.com/paper2", title: "Research Paper" }
    ];

    const sourcesElement = document.querySelector('[data-vf-js-chatbot-sources]');
    initVFChatbotSources(sourcesElement, sources);
  });
</script>

<template id="sources-template">
  {% render "@vf-chatbot-shared-components/vf-chatbot-sources", {
    sources: []
  } %}
</template>

<template id="source-item-template">
  <li class="vf-chatbot-sources__item">
    <a href="#" target="_blank" class="vf-chatbot-sources__link"></a>
  </li>
</template>
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
