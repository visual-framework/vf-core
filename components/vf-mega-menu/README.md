# Mega menu component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-mega-menu.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-mega-menu)

## About

Paired with a good understanding of a site's information architecture and user journey, the mega menu can empower quick shortcut-style access to popular areas.

## Usage

The mega menu should be seen as a empowering but optional feature. While a mega menu may allow a user to quickly move to a sub-section of a website, or laterally move from one silo to another, that empowering ability should be viewed as an optional user journey.

Some users may fail to notice the mega menu by scrolling past it, be on a mobile device where the menu behaves differently, or the JavaScript-based feature may fail to load making the mega menu inaccessible.

A user journey should always be possible without the mega menu's content.

It is recommended to put your mega menu links at the `vf-global-header` level.

### Caveats

1. The mega menu currently is not designed to work on mobile
2. In principle any content can be inserted into a mega menu
3. Using more than one mega menu on a page is likely to confuse and overwhelm users
4. A mega menu is not a substitute for a good information architecture

### Accessibility

This component targets WCAG 2.1 AA accessibility.

Hiding critical or essintal information in a mega menu is harmful to users.

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-mega-menu` with this command.

```
$ yarn add --dev @visual-framework/vf-mega-menu
```

### JS

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfComponentName } from 'vf-mega-menu/vf-mega-menu';
// Or import directly
// import { vfComponentName } from '../components/raw/vf-mega-menu/vf-mega-menu.js';
vfComponentName(); // if needed, invoke it
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-mega-menu/vf-mega-menu.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
