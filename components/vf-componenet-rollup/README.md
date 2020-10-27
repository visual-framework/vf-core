# Component Rollup component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-componenet-rollup.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-componenet-rollup)

## About

The `vf-componenet-rollup` compiles component Sass and JS into style.css and scripts.js files, retrospectively.

## Install

You'll likely want to configure this component to include or exclude Sass and JS files, we suggest cloning it to your local `./src/components`.

Get an tarball of this component with:

```
yarn pack @visual-framework/vf-componenet-rollup
```

However for very generic VF projects, this component is also distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-componenet-rollup` with this command.

```
$ yarn add --dev @visual-framework/vf-componenet-rollup
```

### Sass/CSS

Unlike other components, you probably won't want to `@import` this. Instead the `vf-core` project will compile this into a style.css and scripts.js.

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
