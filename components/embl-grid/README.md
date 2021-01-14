# EMBL Grid component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-grid.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-grid)

## About

The EMBL Layout System is applied to the Container components. It is an asymmetrical grid of four columns. There are 3 layout options.

## Usage

All EMBL Layouts are single column until the viewport reaches "tablet" size. EMBL Layouts have two classes. One to define the grid area and where it is in the Page Grid another to determine what columns there are available.

The CSS classnames available should be used on their own on a Container or added to a Containers existing classname declaration in the HTML.

A EMBL Layout should only be applied to Containers. For Blocks you should use `vf-grid`.

If the EMBL Layout System is being added to a Container that has a classname we separate the classes in the HTML with a `|`.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `embl-grid` with this command.

```
$ yarn add --dev @visual-framework/embl-grid
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/embl-grid/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
