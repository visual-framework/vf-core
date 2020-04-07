# Content Area Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-content.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-content)

## About

This container adds support for long form content where it may not be practical to assign classes, such as Markdown or WYSIWYG text.

It also makes some adjustments for longer form text, such as vertical spacing and making visited links purple.

This container adds basic support for `p`, `ul`, `hr`, `a` and other core
html elements.

Some components may also add specific support for `.vf-content`


## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-content` with this command.

```
$ yarn add --dev @visual-framework/vf-content
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-content/index.scss";
```

_Make sure you import Sass requirements along with the modules._
