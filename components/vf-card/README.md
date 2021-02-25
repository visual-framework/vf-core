# Card component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-card.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-card)

## About

The `vf-card` component is an element that is used to provide a summary of content on a single subject which can link to a larger resource or page.


## Usage

There are currently two types of card component that can be used for your projects. Each card component requires the additional modifier class to be added into either your `.yml` file or directly into the HTML.

The cards are available in two styled varieties: `bordered` and `striped`. To avoid visual confusion it is recommended to use one variant in a container.

As the `striped` variant makes use of the brand colour it is recommended not to use this when displayed in a container that has a background colour.

A `striped` card must always have a heading (`vf-card__heading`).

### Layout

The `vf-card` should look like it's around the same size as card from an average set of playing cards.

### Content

The `vf-card` can take a variety optional of content:

| Content type | `.njk` / `.yml` variable   | CSS class             | Description |
| ------------ | -------------------------- | --------------------- | ----------- |
| image        | `card_image`               | `vf-card__image`      |             |
| alt text     | `card_image__alt`          |                       |             |
| apect ratio  | `card_custom_aspect_ratio` |                       |             |
| heading      | `card_heading`             | `vf-card__heading`    |             |
| link         | `card_href`                | `vf-card__link`       |             |
| subheading   | `card_subheading`          | `vf-card__subheading` |             |
| text         | `card_text`                | `vf-card__text`       |             |

### CSS Custom Properties

For browsers that support the CSS [`aspect-ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) property we provide the option to stipulate the images aspect ratio in a card using a CSS custom property. By default, if no CSS custom property is set, the aspect ratio is `8 / 4`. This can be set on the individual cards using the nunjucks 'key' in the `.yml` or with the `&#x7B;&#x25;&#x20; render &#x20;&#x25;&#x7D;` api using the variable `card_custom_aspect_ratio`.

```
--vf-card__image--aspect-ratio: 16 / 9;
```

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-card` with this command.

```
$ yarn add --dev @visual-framework/vf-card
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-card/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
