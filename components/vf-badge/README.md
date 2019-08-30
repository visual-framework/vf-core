[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-badge.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-badge)

{% render "@vf-badge", {
  href: "https://www.kens-home.com",
  id: "harsh",
  override_class: "override",
  style: ["outline", "pill"],
  text: "alpha",
  theme: "primary"
} %}


## About

The `vf-badge` component is used to label a page, part of a page, or a component. The `vf-badge` component can also be a link using `<a class="vf-badge" href="">badge title</a>`.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-badge` with this command.

```
$ yarn add --dev @visual-framework/vf-badge
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-badge/index.scss";
```

_Make sure you import any requirements along with the modules._

## Usage

If you are using the badge as a link, you must include the relevant url within the `href=""` part of `<a class="vf-badge" href="">badge title</a>`, for example:

```
<a class="vf-badge vf-badge--phases vf-badge--primary" href="">badge title</a>
```
