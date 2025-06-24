# Chatbot Feedback component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-feedback.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-chatbot-feedback)

## About

A feedback component for the Visual Framework chatbot that allows users to:
- Provide thumbs up/down feedback on responses
- Select specific feedback options based on their response
- Add custom comments
- See success/error states with closeable banners

## Usage

```njk
{% render "@vf-chatbot-shared-components/vf-chatbot-feedback", {
  responseId: "response-123"
} %}

<!-- OR for specific variants -->
{% render "@vf-chatbot-shared-components/vf-chatbot-feedback--positive" %}
{% render "@vf-chatbot-shared-components/vf-chatbot-feedback--negative" %}
````

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
