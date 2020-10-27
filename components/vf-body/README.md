# Body component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-body.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-body)

## About

The Body component can be used to create a centered layout to add your content. This should be added to the `body` element in the markup.

## Usage

### CSS

```css
.vf-body {
  --vf-body-width: 81.25em;
  display: block;
  margin: 0 auto;
  max-width: 81.25em;
  max-width: var(--vf-body-width, 81.25em);
  padding: 0 1em;
}
```

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-body` with this command.

```
$ yarn add --dev @visual-framework/vf-body
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-body/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)


## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
