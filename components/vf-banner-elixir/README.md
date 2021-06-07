# ELIXIR Banner

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-banner-elixir.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-banner-elixir)

## About

This should be placed in the footer of sites that are part of the ELIXIR network.

## Usage

This is an early version that is largely a port of [the VF 1.3 ELIXIR Banner](https://www.ebi.ac.uk/style-lab/websites/patterns/banner-elixir.html) with some notable changes:

- The data option prefixes have changed to match VF 2 practice `data-name` is now `data-vf-banner-elixir-name`, and similarly for the other options.
- The multiple background colour options (green, orange, blue) have been dropped as they were poorly used and often presented colour-contrast accessibility issues.

### Options

- `data-vf-banner-elixir-logo="optional"`
    - this value is optional, the banner will default to use the ELIXIR kitemark. Passing `CDR` will use the [ELIXIR Core Data Resource mark](https://elixir-europe.org/platforms/data/core-data-resources).
- `data-vf-banner-elixir-name="Your Service Name"`
    - " is part of the ELIXIR infrastructure" will be appended
- `data-vf-banner-elixir-description="text here"`
    - set the text in the small line of text to explain your relationship with ELIXIR
- `data-vf-banner-elixir-link="https://url"`
    - by default the banner will point to a page at www.elixir-europe.org. If you would prefer to link to a custom page explaining your relationship with ELXIR, add the full URL here

The development and future direction of this component can be [discussed in issue #1572](https://github.com/visual-framework/vf-core/issues/1572). While breaking changes are anticipated they are currently not expected.

This component leverages the Sass/CSS of `vf-banner`, so it should also be installed.

### Accessibility

This component targets WCAG 2.1 AA accessibility.

You can also read about [the Visual Framework's approach to accessibility](https://stable.visual-framework.dev/guidance/accessibility/).

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-banner-elixir` and the supporting `vf-banner` with this command.

```
$ yarn add --dev @visual-framework/vf-banner-elixir @visual-framework/vf-banner
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
@import 'vf-banner/vf-banner.scss';
@import "@visual-framework/vf-banner-elixir/vf-banner-elixir.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
