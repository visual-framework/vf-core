# Sass Config and templates

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-config.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-config)

## About

Mixins, functions and variables to power all `vf-core` components. If you're using a Visual Framework component it's a near-certainty that you'll need this component.

## Usage

Note: these utilise `vf-design-tokens`

### Functions

### set-color.scss

`set-color($color-name)`

### map-deep-get.scss

`map-deep-get($map, $keys)`

### set-layer.scss

`set-layer($layer)`

### string-replace.scss

`str-replace($name, $number)`

Slice off the first amount($number) of characters from the $name value passed. Primarily used to replace the start of variables for the utility class generation.

### vf-functions.scss

Rollup of all functions.

---

### Mixins

### blockquote.scss

Reusable styling for html blockquote elements.

`@include blockquote;`

### button.scss

Reusable styling for button elements

`@include vf-button;`

### divider.scss

Reusable styling for divider elements and styling

`@include vf-divider;`

### figure.scss

Reusable styling for figures with optional caption styling

`@include figure($has-caption: true);`

### helpers.scss

Nothing, yet.

### links.scss

Styling for links.

`@include inline-link(
  $vf-link--color: $vf-link--color,
  $vf-link--hover-color: $vf-link--hover-color,
  $vf-link--visited-color: $vf-link--visited-color,
  $vf-include-normalisations: $vf-include-normalisations);`

`@include button-link(
  $vf-link--color: $vf-link--color,
  $vf-link--hover-color: $vf-link--hover-color,
  $vf-link--visited-color: $vf-link--visited-color);`

`button-link--ghost(
  $vf-link--color: $vf-link--color,
  $vf-link--hover-color: $vf-link--hover-color,
  $vf-link--visited-color: $vf-link--visited-color);`

### lists.scss

Styling for list types

`@include($classname: optional-classname-to-usm, $type: null, unordered, ordered or inline);`

### margin.scss

Margin, recommended to use with sizing maps

`@include margin--block(bottom, map-get($vf-spacing-map, vf-spacing--500));`

- `margin-block`: specify one value for bottom and top, top or bottom
- `margin-all`: specify one value for left or right, left or right
- `margin`: specify all or a value for each

### padding.scss

Padding, recommended to use with sizing maps

`@include padding--block(bottom, map-get($vf-spacing-map, vf-spacing--500));`

- `padding-block`: specify one value for bottom and top, top or bottom
- `padding-all`: specify one value for left or right, left or right
- `padding`: specify all or a value for each

### text-color.scss

**Currently not used**. Intelligently pick if white or black should be used as a contrasting colour

### typography.scss

Generate correct font information when included into an element.
Recommended to use with typography and sizing maps

`@include set-type(text-body--3, $global-font-family, $custom-margin-bottom: vf-spacing--500, $color: secondary)`

Color setting can be turned off by passing `$color: ignore`.

### utility--color.scss

Generate lists of values in design token maps. Intended for use by the `vf-utility-classes` component

### utility--slide.scss

A non-jitter causing way to slide elements up/down on hover.

`@include vf-slide-on-hover($shift-distance, $direction:up);`

### utility--spacing.scss

Generate lists of values in design token maps. Intended for use by the `vf-utility-classes` component

### utility--typography.scss

Generate lists of values in design token maps. Intended for use by the `vf-utility-classes` component

### vf-mixins.scss

Rollup of all mixins.

### vf-utility-mixins.scss

Rollup of all utility mixins.

### vf-disabled.scss

For disable link elements, actions
@include vf-disabled($vf-link--disabled-color);

---

### Variables

### vf-global-custom-properties.scss

Native CSS properties, currently limited to document spacing.

### vf-global-variables.scss

Global Sass variable defaults for the high-level page look of typography, page width,
deprecated component text, if normalisations should be included.

### vf-variables.scss

Rollup of global Sass variables.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-sass-config` and its dependencies with this command.

```
$ yarn add --dev @visual-framework/vf-sass-config @visual-framework/vf-design-tokens
```

You might also find the the [vf-sass-starter](https://stable.visual-framework.dev/components/detail/vf-sass-starter.html) a useful starting point for setting up a customised Sass build.

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import 'vf-global-variables';
@import 'vf-variables';
@import 'vf-functions';
@import 'vf-mixins';
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
