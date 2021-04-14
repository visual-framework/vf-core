# Back to top component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-back-to-top.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-back-to-top)

"Back to top" visual framework component

## About

This component appears on page (usually on right bottom) once user scrolls down to 100% of the page height.
It allows users to click on a button labelled "Back to top" or similar, and take user to top of page.

## Usage

Its recommended that use floating variant of this component, which appears at the bottom right of page.
If you need an inline variant, only use on link - multiple "back to top" links are [not usable](https://www.nngroup.com/articles/back-to-top).

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-back-to-top` with this command.

```
$ yarn add --dev @visual-framework/vf-back-to-top
```

### JS

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfBackToTop } from 'vf-back-to-top/vf-back-to-top';
// Or import directly
// import { vfcomponentName } from '../components/raw/vf-back-to-top/vf-back-to-top.js';
vfBackToTop(); // invoke it
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-back-to-top/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
