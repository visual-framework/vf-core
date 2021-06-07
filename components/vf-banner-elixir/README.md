# ELIXIR Banner

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-banner-elixir.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-banner-elixir)

## About

This should be placed in the footer of sites that are part of the ELIXIR network.

## Usage

This is an early version that is largely a port of [the VF 1.3 ELIXIR Banner](https://www.ebi.ac.uk/style-lab/websites/patterns/banner-elixir.html). While breaking changes are anticipated they are currently not expected.

The development and future direction of this component can be [discussed in issue #1572](https://github.com/visual-framework/vf-core/issues/1572).

### Accessibility

[Add a note if the accessibility of this component has been validated.]

This component targets WCAG 2.1 AA accessibility. Below you can find additional notes on accessibility best practice with this component:

- Add any do's and do nots

You can also read about [the Visual Framework's approach to accessibility](stable.visual-framework.dev/guidance/accessibility/).

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-banner-elixir` with this command.

```
$ yarn add --dev @visual-framework/vf-banner-elixir
```

### JS

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfBannerElixir } from 'vf-banner-elixir/vf-banner-elixir';
// Or import directly
// import { vfBannerElixir } from '../components/raw/vf-banner-elixir/vf-banner-elixir.js';
vfBannerElixir(); // if needed, invoke it
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-banner-elixir/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
