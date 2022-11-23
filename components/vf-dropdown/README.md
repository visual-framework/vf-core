# Dropdown component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-dropdown.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-dropdown)

## About

A dropdown component that can be used in navigation menus.

## Usage

Supports click trigger to open. User can select menu item or click outside menu to close it. When menu is open, outside clicks will be captured by menu.

Currently, usage intended with navigation menu. Component is based on the [Example Disclosure Navigation Menu][https://www.w3.org/WAI/ARIA/apg/example-index/disclosure/disclosure-navigation.html#ex_label] of the ARIA Authoring Practices Guide (APG).

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-dropdown` with this command.

```
$ yarn add --dev @visual-framework/vf-dropdown
```

### JS

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfDropdown } from 'vf-dropdown/vf-dropdown';
// Or import directly
// import { vfDropdown } from '../components/raw/vf-dropdown/vf-dropdown.js';
vfDropdown(); // invoke it
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-dropdown/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
