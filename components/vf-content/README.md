[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-content.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-content)

## About

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-content` with this command.

```
$ npm install --save @visual-framework/vf-content
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-content/index.scss";
```

_Make sure you import any requirements along with the modules._


Use this container to get simple support for narrative content where it is not
practical to assign classes, such as Markdown or WYSIWYG text.

This container adds basic support for `p`, `ul`, `hr`, `a` and other core
html elements. Some patterns may also add specific support for `.vf-content`
