# Sass Config functions

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-config.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-config)

Mixins, functions and variables to power all `vf-core` components.

Note: these utilise the `vf-design-tokens`

## Functions

- _set-color.scss
- map-deep-get.scss
- set-layer.scss
- string-replace.scss
- vf-functions.scss

## Mixins

- _blockquote.scss
- _button.scss
- _divider.scss
- _figure.scss
- _helpers.scss
- _links.scss
- _lists.scss
- _margin.scss
- _padding.scss
- _text-color.scss
- _typography.scss
- _utility--color.scss
- _utility--slide.scss
- _utility--spacing.scss
- _utility--typography.scss
- _vf-mixins.scss
- _vf-utility-mixins.scss
- vf-disabled.scss

## Variables

- _vf-variables.shame.scss
- vf-global-custom-properties.scss
- vf-global-variables.scss
- vf-variables.scss

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-sass-config` with this command.

```
$ yarn add --dev @visual-framework/vf-sass-config
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import 'vf-global-variables';
@import 'vf-variables';
@import 'vf-functions';
@import 'vf-mixins';
```

_Make sure you import any requirements along with the modules._
