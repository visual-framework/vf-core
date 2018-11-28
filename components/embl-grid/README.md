# EMBL Layout Containers and Grids

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-grid.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-grid)

## About

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `embl-grid` with this command.

```
$ npm install --save @visual-framework/embl-grid
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/embl-grid/index.scss";
```

_Make sure you import any requirements along with the modules._

<style>
.pattern-library-notes .embl-grid > * {
  background-color: rgb(41, 141, 211);
}
</style>

The EMBL Layout System is applied to the Container patterns. It is an asymmetrical grid of four columns. There are 3 layout options.

All EMBL Layouts are single column until the viewport is 768px or more. EMBL Layouts have two classes. One to define the grid area and where it is in the Page Grid another to determine what columns there are available.

### Usage

The CSS classnames available should be used on their own on a Container or added to a Containers exisitng classname declaration in the HTML.

A EMBL Layout should only be applied to Containers. For Blocks you should use the [Visual Framework Grid System]({{ path '/docs/grids/grid-system' }}).

If the EMBL Layout System is being added to a Container that has a classname we separate the classes in the HTML with a `|`.

```html
<section class="vf-intro | embl-grid embl-grid--with-sidebar"> ... </section>
```

### Initial EMBL Layout Setup

To set up a Container so that it uses the EMBL Layout System we need to include the initial class of `.embl-grid`

###### HTML
```html
<section class="embl-grid">...</section>
```
###### Example
<section class="embl-grid">
  <p>1</p>
</section>

As the EMBL Layout System is used on Containers we cannot know what Blocks will be used. We make use of the child combinatier `>`, the universal selector `*` and the `nth-child()` pseudo-class to target the Blocks.

### An EMBL Layout with Label and Sidebar


###### HTML
```html
<section class="embl-grid embl-grid--labeled-with-sidebar"> ... </section>
```
###### Example
<section class="embl-grid embl-grid--labeled-with-sidebar">
  <p>1</p>
  <p>2</p>
  <p>3</p>
</section>


### An EMBL Layout with Sidebar


###### HTML
```html
<section class="embl-grid embl-grid--with-sidebar"> ... </section>
```

###### Example
<section class="embl-grid embl-grid--with-sidebar">
  <p>1</p>
  <p>2</p>
</section>

---

#### An EMBL Layout with Label

###### HTML
```html
<section class="embl-grid embl-grid--with-label"> ... </section>
```

###### Example
<section class="embl-grid embl-grid--with-label">
  <p>1</p>
  <p>2</p>
</section>
