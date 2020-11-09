# JavaScript Polyfill component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-polyfill-js.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-polyfill-js)

## About

This polyfills older browsers JS with things commonly needed in Visual Framework JavaScript (support for [`promises`](https://caniuse.com/#search=promises) is a common need), this is also a general utility template to provide polyfill JS when most commonly needed.

## Usage

This components attempts to gracefully serve the JS to only the browsers that need it by using the [`nomodule` attribute in script tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#Attributes); as MDN web docs puts it: "in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code".

We use polyfill bundling from [Polyfill.io](https://cdn.polyfill.io/v3/url-builder/).

This is is what it looks like:

```js
<script nomodule src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
```

In effect, this provides better support to Internet Explorer and very old versions of Chrome, FireFox and Safari.

### Future plans

In the future we may support passing parameters to the NJK template to load various mixes of polyfills.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-polyfill-js` with this command.

```
$ yarn add --dev @visual-framework/vf-polyfill-js
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-polyfill-js/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
