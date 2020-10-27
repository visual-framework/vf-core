# Hero component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-hero.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-hero)

## About

The `vf-hero` component is to be used as a visual queue and page header. The `vf-hero` can take a heading, sub-heading, and text content. The text content can also be a link which adds am arrow icon.

## Usage

### CSS Custom Properties

`--vf-hero-bg-image` — this is for the url for the background image. It can either be added, inline if you're writing the HTML, using the `.yml` data source of `vf_hero_image`, or by other needs (a input or upload in WordPress, for example).

`--vf-hero-grid__row--initial` — This is used to represent the heigh of the image and helps calculate the position of the content, depending on the variant you have chosen.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-hero` with this command.

```
$ yarn add --dev @visual-framework/vf-hero
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-hero/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
