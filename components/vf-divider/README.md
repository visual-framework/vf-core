# Divider Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-divider.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-divider)

## About

The `vf-divider` component creates a horizontal dividing rule that can help separate containers of content or content inside of their containers.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-divider` with this command.

```
$ yarn add --dev @visual-framework/vf-divider
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-divider/index.scss";
```

_Make sure you import Sass requirements along with the modules._

## Usage

The `vf-divider` component will be the width of if's container. So inside of `<body>` of your page it will be a maximum of 1300px.

```
<body class="vf-body">
  <hr class="vf-divider">
</body>
```

If you wish to have your `vf-divider` fit the whole width of the screen you can add the `vf-u-fullbleed` utility class along side it:

```
<hr class="vf-divider | vf-u-fullbleed">
```

This fills the width of the viewport but gives a inline (left and right) margin.

You can customise the inline (left and right) margin if you wish by using the CSS custom property `--context-margin--inline` on the element:

```
<hr class="vf-divider | vf-u-fullbleed" style="--context-margin--inline: 2rem;">
```
