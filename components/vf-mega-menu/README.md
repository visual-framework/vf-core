👋 Hi component author, you've read the docs, right?

- [What's a component](https://stable.visual-framework.dev/developing/components/what-is-a-component/)
- [Updating, versioning a component](https://stable.visual-framework.dev/guidance/versioning-and-component-interoperability/)
- [Sass and CSS guidelines](https://stable.visual-framework.dev/developing/guidelines/css/)
- [Theming and variant guidance - TO COME](#tocome)
- [JavaScript guidelines](https://stable.visual-framework.dev/developing/guidelines/javascript/)
- [Making your first Pull Request](https://stable.visual-framework.dev/developing/getting-started/pull-requests/)
- [More development guidance](https://stable.visual-framework.dev/developing/)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)

---

# vf-mega-menu component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-mega-menu.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-mega-menu)

## About

[A one-sentence introduction to your project]

## Usage

[The dos and don'ts of using this component. Can be many paragraphs and subheadings.]

### Accessibility

[Add a note if the accessibility of this component has been validated.]

This component targets WCAG 2.1 AA accessibility. Below you can find additional notes on accessibility best practice with this component:

- Add any do's and do nots

You can also read about [the Visual Framework's approach to accessibility](https://stable.visual-framework.dev/guidance/accessibility/).

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-mega-menu` with this command.

```
$ yarn add --dev @visual-framework/vf-mega-menu
```

### JS

[If your component uses JS]

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfComponentName } from 'vf-mega-menu/vf-mega-menu';
// Or import directly
// import { vfComponentName } from '../components/raw/vf-mega-menu/vf-mega-menu.js';
vfComponentName(); // if needed, invoke it
```

### Sass/CSS

[If your component uses Sass]

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-mega-menu/vf-mega-menu.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
