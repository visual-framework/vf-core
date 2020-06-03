# vf-hero Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-hero.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-hero)

## Usage

The `vf-hero` component is to be used as a visual queue and page header. The `vf-hero` can take a heading, sub-heading, and text content. The text content can also be a link which adds am arrow icon.


### CSS Custom Properties

`--vf-hero-bg-image` — this is for the url for the background image. It can either be added, inline if you're writing the HTML, using the `.yml` data source of `vf_hero_image`, or by other needs (a input or upload in WordPress, for example).

`--vf-hero-grid__row--initial` — This is used to represent the heigh of the image and helps calculate the position of the content, depending on the variant you have chosen.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-hero` with this command.

```
$ yarn add --dev @visual-framework/vf-hero
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-hero/index.scss";
```

_Make sure you import Sass requirements along with the modules._
