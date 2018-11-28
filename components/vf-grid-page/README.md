# The Page Grid

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-grid-page.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-grid-page)

## About

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-grid-page` with this command.

```
$ npm install --save @visual-framework/vf-grid-page
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-grid-page/index.scss";
```

_Make sure you import any requirements along with the modules._


To start with the page has a simple 3 column grid. The second grid item has a maximum width of 1300 pixels. The two outer grid columns fill the rest of the space to create a centred layout.

The code for this layout is for the `<body class="vf-body">` tag so that the direct children inherit the grid columns.
##### CSS
```css
.vf-body {
  display: grid;
  grid-template-columns:
    [full-start]
      minmax(1.25em, 1fr)
      [main-start]
        minmax(0, 81.25em) // 1300px
      [main-end]
      minmax(1.25em, 1fr)
    [full-end];
}
```
