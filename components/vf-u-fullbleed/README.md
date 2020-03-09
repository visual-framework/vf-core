# Full Bleed Utility

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-u-fullbleed.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-u-fullbleed)

## About

This utility class allows you to make a container take the full width of the viewport available but keep the content set to the maximum width of the grid.

As we should be relying on `vf-grid`, `embl-grid`, or a container to make sure the content is centered with a maximum width of `76.5em` we use the `::before` pseudo element to allow the background colour to 'bleed out' and fill any space avaiable.

For this to work you need to make sure that the parent element you place the class `.vf-u-fullbleed` has to have a background colour.

This can be done either by:

- using a container component that has a defined background colour.
- using a background colour utility class.

For example:
```
<section class="vf-content | embl-grid embl-grid--has-centered-content | vf-u-fullbleed | vf-u-background-color--blue">
  ...
</section>
```

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-u-fullbleed` with this command.

```
$ yarn add --dev @visual-framework/vf-u-fullbleed
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-u-fullbleed/index.scss";
```

_Make sure you import Sass requirements along with the modules._
