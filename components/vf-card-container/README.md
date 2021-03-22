# Card component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-card-container.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-card-container)

## About

A three-column container for `vf-card`.

### CSS Custom Properties

The `vf-card` component allows for a CSS custom property to be set to define the `aspect-ratio` of the card image. This can be set per card, but with the `vf-card-container` you should aim for consistency across the `vf-card`s it is displaying. Therefore we can pass the `aspect-ratio` value from this component and it will cascade through the CSS onto the cards. This is encapsulated to this container, which allows you to set different `aspect-ratio` values for different containers as needed.

To set the `aspect-ratio` you will need to set the `card_custom_aspect_ratio` key/value pair in the `.yml` or the `&#x7B;&#x25;&#x20; render &#x20;&#x25;&#x7D;`   api of the `vf-card-container as needed.
## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-card-container` with this command.

```
$ yarn add --dev @visual-framework/vf-card-container
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-card-container/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
