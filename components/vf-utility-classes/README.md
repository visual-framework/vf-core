# Utility Classes

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-utility-classes.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-utility-classes)

## About

Utility Classes provide the building blocks for layout and handle a range common use cases that help us avoid writing custom styles. When we need to add some margin or padding, rather than adding a new selector specific to that use case, we can use utilities. This helps us reduce the number of unique property-value pairs, and helps us keep more consistent styles across the site.

## Usage

- Utility Classes are designed to do one job well and one job only, are immutable, and on occasion are an acceptable approach to overriding component styles.
- Utility Classes should clearly describe the job they do.
- Utility Classes are to be namespaced with `vf-u-`

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-utility-classes` with this command.

```
$ yarn add --dev @visual-framework/vf-utility-classes
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-utility-classes/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
