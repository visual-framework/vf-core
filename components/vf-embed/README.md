# vf-embed Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-embed.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-embed)

## Usage

The `vf-embed` component can currently give two different aspect ratios by adding a class variant. You can also define a max-width for the embed if needed.

Aspect Ratios available are 16x9 and 4x3.

### Class Variants

- `vf-embed--16x9` for embedable content that is has an aspect ratio of 16x9.
- `vf-embed--4x3` for embedable content that is has an aspect ratio of 4x3.

### Max Width

You can also set a max width for the `vf-emded`. If you do this in the nunjucks file with the key of `maxWidth:` the nunjucks template will output an inline style onto the `vf-embed`. You can add this however fits best your product (in the `:root`, in a stylesheet, etc).

If you do not set a `maxWidth` value then the component is set to a maximum width of `100%``.

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-embed` with this command.

```
$ yarn add --dev @visual-framework/vf-embed
```

## JS

If your component uses JS:

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfcomponentName } from 'vf-embed/vf-embed';
// Or import directly
// import { vfcomponentName } from '../components/raw/vf-embed/vf-embed.js';
vfcomponentName(); // if needed, invoke it
```

## Sass/CSS

If your component uses Sass:

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-embed/index.scss";
```

_Make sure you import Sass requirements along with the modules._

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
