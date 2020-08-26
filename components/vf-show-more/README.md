# vf-show-more Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-show-more.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-show-more)

## Usage

This is designed to work with client-side pre-loaded HTML.

- `data-vf-js-show-more` The containing element, does not have to be a direct parent
- `data-vf-js-show-more-pager-size=3` The number of items to show on first page load
- `class="vf-show-more--item"` Items to be shown hidden (display done with CSS)
- `data-vf-js-show-more-button` The button to show more
- `data-vf-js-show-more-button-less` The button to show less, optional

### An overview of the HTML strcuture

A condensed example.

```html
<section data-vf-js-show-more data-vf-js-show-more-pager-size="3" class="vf-show-more">
  <a href="#" class="vf-box | vf-show-more--item">
    <p class="vf-box__text">I'm item number 1</p>
  </a>

  <button class="vf-button | vf-show-more--button" data-vf-js-show-more-button>Show more</button>
  <button class="vf-button | vf-show-more--button-less" data-vf-js-show-more-button-less>Show less</button>
</section>
```


## Future development

- Pager support

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-show-more` with this command.

```
$ yarn add --dev @visual-framework/vf-show-more
```

## JS

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfcomponentName } from 'vf-show-more/vf-show-more';
// Or import directly
// import { vfcomponentName } from '../components/raw/vf-show-more/vf-show-more.js';
vfcomponentName(); // if needed, invoke it
```

## Sass/CSS

If your component uses Sass:

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-show-more/index.scss";
```

_Make sure you import Sass requirements along with the modules._

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
