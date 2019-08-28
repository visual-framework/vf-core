# EMBL Grid Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-grid.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-grid)

## About

The EMBL Layout System is applied to the Container components. It is an asymmetrical grid of four columns. There are 3 layout options.

All EMBL Layouts are single column until the viewport is 768px or more. EMBL Layouts have two classes. One to define the grid area and where it is in the Page Grid another to determine what columns there are available.

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `embl-grid` with this command.

```
$ yarn add --dev @visual-framework/embl-grid
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/embl-grid/index.scss";
```

_Make sure you import any requirements along with the modules._

## Usage

The CSS classnames available should be used on their own on a Container or added to a Containers existing classname declaration in the HTML.

A EMBL Layout should only be applied to Containers. For Blocks you should use the [Visual Framework Grid System]({{ '/docs/grids/grid-system' | path }}).

If the EMBL Layout System is being added to a Container that has a classname we separate the classes in the HTML with a `|`.
