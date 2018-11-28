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


<style>
.pattern-library-notes .vf-grid > * {
  background-color: rgb(141, 191, 226)
}
</style>



### Visual Framework Grid (auto layout)


###### HTML
```html
<div class="vf-grid"> ... </div>
```

###### Example

  <div class="vf-grid">
    <p>1</p>
  </div>


  <div class="vf-grid">
    <p>1</p>
    <p>2</p>
  </div>


  <div class="vf-grid">
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>


  <div class="vf-grid">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
  </div>


  <div class="vf-grid">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
  </div>


  <div class="vf-grid">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
  </div>


### Visual Framework Grid (defined columns)

If you have Blocks that need to be laid out on both X and Y axis you will need to add the `modifier` classes.

###### HTML
```html
<div class="vf-grid vf-grid__col-2"> ... </div>
```
###### Example

  <div class="vf-grid vf-grid__col-2">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
  </div>



###### HTML
```html
<div class="vf-grid vf-grid__col-3"> ... </div>
```
###### Example

  <div class="vf-grid vf-grid__col-3">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
  </div>


###### HTML
```html
<div class="vf-grid vf-grid__col-4"> ... </div>
```
###### Example

  <div class="vf-grid vf-grid__col-4">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
  </div>


###### HTML
```html
<div class="vf-grid vf-grid__col-5"> ... </div>
```
###### Example

  <div class="vf-grid vf-grid__col-5">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
  </div>


###### HTML
```html
<div class="vf-grid vf-grid__col-6"> ... </div>
```
###### Example

  <div class="vf-grid vf-grid__col-6">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>10</p>
    <p>11</p>
    <p>12</p>
  </div>
