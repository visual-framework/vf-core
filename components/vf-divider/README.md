[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-divider.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-divider)

## About

The `vf-divider` component creates a horizontal dividing line to help separate content into their own container chunks.

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-divider` with this command.

```
$ npm install --save @visual-framework/vf-divider
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-divider/index.scss";
```

_Make sure you import any requirements along with the modules._

## Usage

The `vf-divider` does not have to be implemented inside it's own grid container and should rely on the parent `vf-body` to fill the width of the page.
