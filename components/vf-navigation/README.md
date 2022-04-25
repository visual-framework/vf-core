# Navigation component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-navigation.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-navigation)

## About

The `vf-navigation` component is a horizontal list of links to key pages of the website.

## Usage

### Global navigation variant

This variant of the `vf-navigation` is to be used as part of the `vf-global-header` to give a few 'quick links' that will be on every page.

### Main navigation variant

This variant of the `vf-navigation` can be used to link to sections of the site, or part of the site the parent section.

This is typically placed below the `vf-hero` component but can be also found below the `vf-global-header`.

There should be only one use of `vf-navigation--main` on a page.

### On this page navigation variant

The `vfNavigationOnThisPage` JavaScript adds a quality-of-life improvement by automatically activating sections as the user scrolls them into view on the page. This sticky element allows users to quickly jump between sections on longer pages.

- There should be only one use of `vf-navigation--on-this-page` on a page.
- Anchor targets need an element id: `id="container-1"`. This can be added to any item on the page, but would most logically be added to a `vf-grid`, `embl-grid` or `vf-section-header` element.
- Ensure `data-vf-js-navigation-on-this-page-container="true"` is present on `.vf-navigation__list`.
- Ensure each anchor link has a `data-vf-js-navigation-on-this-page-link`.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-navigation` with this command.

```
$ yarn add --dev @visual-framework/vf-navigation
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-navigation/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

### JavaScript

If using the `vf-navigation--on-this-page` variant, you should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfNavigationOnThisPage } from "vf-navigation/vf-navigation.js";
// Or import directly
// import { vfGaIndicateLoaded } from '../components/raw/vf-navigation/vf-navigation.js';

vfNavigationOnThisPage();
```

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
