# Utility Classes

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-utility-classes.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-utility-classes)

## About

Utility Classes provide the building blocks for layout and handle a range common use cases that help us avoid writing custom styles. When we need to add some margin or padding, rather than adding a new selector specific to that use case, we can use utilities. This helps us reduce the number of unique property-value pairs, and helps us keep more consistent styles across the site.

- Utility Classes are designed to do one job well and one job only, are immutable, and on occasion are an acceptable approach to overriding component styles.
- Utility Classes should clearly describe the job they do.
- Utility Classes are to be namespaced with `vf-u-`



## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-utility-classes` with this command.

```
$ yarn add --dev @visual-framework/vf-utility-classes
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-utility-classes/index.scss";
```

_Make sure you import Sass requirements along with the modules._
