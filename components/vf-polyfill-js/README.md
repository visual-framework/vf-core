# VF JavaScript Polyfill Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-polyfill-js.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-polyfill-js)

This polyfills older browsers JS with things commonly needed in Visual Framework JavaScript (support for [`promises`](https://caniuse.com/#search=promises) is a common need), this is also a general utility template to provide polyfill JS when most commonly needed.

This components attempts to gracefully serve the JS to only the browsers that need it by using the [`nomodule` attribute in script tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#Attributes); as MDN web docs puts it: "in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code".

We use polyfill bundling from [Polyfill.io](https://cdn.polyfill.io/v3/url-builder/).

This is is what it looks like:

```js
<script nomodule src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
```

In effect, this provides better support to Internet Explorer and very old versions of Chrome, FireFox and Safari.

## Future plans

In the future we may support passing parameters to the NJK template to load various mixes of polyfills. 

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-polyfill-js` with this command.

```
$ yarn add --dev @visual-framework/vf-polyfill-js
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-polyfill-js/index.scss";
```

_Make sure you import Sass requirements along with the modules._
