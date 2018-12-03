[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-link-list.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-link-list)

## About

The Links List pattern is a robust list group that can be used in a variety of grid layouts.

It can have a title `<h3 class="vf-links__heading">Example Title</h3>`.

In each list item you can have:

A link `<a class="vf-links__link" href="">Example Link</a>`.

It can make use of the Tags pattern `<span class="vf-tag">Example Tag</span>`.

It can include meta information `<p class="vf-links__meta">Example Meta</p>`.

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-link-list` with this command.

```
$ npm install --save @visual-framework/vf-link-list
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-link-list/index.scss";
```

_Make sure you import any requirements along with the modules._
