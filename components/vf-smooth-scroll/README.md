# Smooth scroll utility component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-smooth-scroll.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-smooth-scroll)

## About

This enables smooth scrolling when a user clicks on anchor links or other in-page scrolling is triggered.

## Usage

This is an opt-in behaviour that is activated by putting the `vf-smooth-scroll` class on a parent element — a good place would be at `<html class="vf-smooth-scroll">` (note: it probably won't work if you add it your `<body>` element).

Not that as of November 2021, CSS-based smooth scrolling [is still not support by Safari on Mac OS or iOS](https://caniuse.com/css-scroll-behavior).

### Accessibility

This component targets WCAG 2.1 AA accessibility.

Generally this improves accessibility by smooth scrolling between content, for some scenarios the behaviour may become distracting.

Note that smooth scrolling is disabled if a user has flagged `prefers-reduced-motion`.

You can also read about [the Visual Framework's approach to accessibility](https://stable.visual-framework.dev/guidance/accessibility/).

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-smooth-scroll` with this command.

```
$ yarn add --dev @visual-framework/vf-smooth-scroll
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-smooth-scroll/vf-smooth-scroll.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
