👋 Hi component authour, you've read the docs, right?

- [What's a component](https://visual-framework.github.io/vf-welcome/developing/components/what-is-a-component/)
- [Updating, versioning a component](https://visual-framework.github.io/vf-welcome/developing/components/updating-a-component/)
- [Sass and CSS guidelines](https://visual-framework.github.io/vf-welcome/developing/guidelines/css/)
- [Themeing and variant guidance - TO COME](#tocome)
- [JavaScript guidelines](https://visual-framework.github.io/vf-welcome/developing/guidelines/javascript/)
- [Making your first Pull Request](https://visual-framework.github.io/vf-welcome/developing/getting-started/pull-requests/)
- [More development guidance](https://visual-framework.github.io/vf-welcome/developing/)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)

---

# <%= componentName %> Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2F<%= componentName %>.svg)](https://badge.fury.io/js/%40visual-framework%2F<%= componentName %>)

## Usage

The dos and don'ts of using this component.

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `<%= componentName %>` with this command.

```
$ yarn add --dev @visual-framework/<%= componentName %>
```

## JS

If your component uses JS:

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfcomponentName } from '<%= componentName %>/<%= componentName %>';
// Or import directly
// import { vfcomponentName } from '../components/raw/<%= componentName %>/<%= componentName %>.js';
vfcomponentName(); // if needed, invoke it
```

## Sass/CSS

If your component uses Sass:

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/<%= componentName %>/index.scss";
```

_Make sure you import Sass requirements along with the modules._

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
