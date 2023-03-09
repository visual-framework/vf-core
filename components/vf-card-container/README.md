# Card component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-card-container.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-card-container)

## About

A multi-column container for `vf-card`.

## Usage

### Section header

- Use one card container for all cards that belong to the same section.
- Always include [a vf-section header](https://stable.visual-framework.dev/components/vf-section-header/index.html) to the card container. This ensures that your page will not have [skipped headings](https://www.w3.org/WAI/tutorials/page-structure/headings/#heading-ranks) between the cards and the preceding content outside the container.
-  If you do not want the section header to be visible, you can hide it by passing `hidden` as true (hidden: true) inside the `container_section__header` section in card container config.yml setting. This value (true) applies the class `vf-u-sr-only` (for screen reader only) to the section header and hides it. See the [example with the hidden header below](#examples).
- Hiding the heading can only be applied to a section header that is not a link (i.e. [the default variant](https://stable.visual-framework.dev/components/vf-section-header/index.html#vf-section-header--default)). Section headers that act as links should not be hidden because when users navigate with the keyboard the header is selected as a link but it will not be visible to them.

### Card container background
- Use a white background for both [striped (green) cards](https://stable.visual-framework.dev/components/vf-card/#vf-card--striped) and [bordered (white) cards](https://stable.visual-framework.dev/components/vf-card/#vf-card--bordered).
- `vf-u-background-color-ui--grey--light` (which is called 'Gray lightest' in [the equivalent WP block](https://stable.visual-framework.dev/wordpress/blocks/container-block/)) may be used as an alternative background of bordered (white) cards, especially when the section header is hidden and there is no text between the section header and the cards. 

### Columns

The containier defaults to three columns (the recommended number of image-based cards per row). However if text-only cards are being used, a 4-column variant is supported `cards_per_row: 4` which appends CSS class `vf-card-container__col-4`.

### CSS Custom Properties

The `vf-card` component allows for a CSS custom property to be set to define the `aspect-ratio` of the card image. This can be set per card, but with the `vf-card-container` you should aim for consistency across the `vf-card`s it is displaying. Therefore we can pass the `aspect-ratio` value from this component and it will cascade through the CSS onto the cards. This is encapsulated to this container, which allows you to set different `aspect-ratio` values for different containers as needed.

To set the `aspect-ratio` you will need to set the `card_custom_aspect_ratio` key/value pair in the `.yml` or the `{#{% render %}#}` api of the `vf-card-container` as needed.

### Accessibility

This component targets WCAG 2.1 AA accessibility.

### Pages that use this component

The [Meet our people page](https://www.ebi.ac.uk/about/jobs/meet-our-people) at the EMBL-EBI site includes examples of the card container that [pass the basic contrast tests for accessibility](https://wave.webaim.org/report#/https://www.ebi.ac.uk/about/jobs/meet-our-people#).

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
