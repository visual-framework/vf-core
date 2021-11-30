# Heading component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-heading.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-heading)

## About

For basic heading formatting and sizes.

## Usage

The `vf-heading` component leverages [the design token typography sizes](https://stable.visual-framework.dev/design-tokens/typography/).

This component provides a utility-like functionality and you'll rarely need to directly use this component. When coding a component's Sass, it will typically be better to use the mixins (`@include set-type(text-heading--1);`) than these `vf-heading` classes.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-heading` with this command.

```
$ yarn add --dev @visual-framework/vf-heading
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-heading/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
