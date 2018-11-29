# The Visual Framework Grid System

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-grid.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-grid)

## About

As we cannot guarantee the Blocks within the a Micro Grid and make use of the child combinator `>` and the universal selector `*` to target them.

A Simple Grid is written to go from single column, to two column, to their respective column count depending on the size of the viewport.

You can define the number of columns with a modifier class.

***Do Not Use*** with any component that uses the `<table>` HTML element as this breaks built-in browser accessibility for screen readers etc.

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-grid` with this command.

```
$ npm install --save @visual-framework/vf-grid
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-grid/index.scss";
```

_Make sure you import any requirements along with the modules._



### Visual Framework Grid (auto layout)


###### HTML
```html
<div class="vf-grid"> ... </div>
```

---

### Visual Framework Grid (defined columns)

If you have Blocks that need to be laid out on both X and Y axis you will need to add the `modifier` classes.

###### HTML
```html
<div class="vf-grid vf-grid__col-2"> ... </div>
```
