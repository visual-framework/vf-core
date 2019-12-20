# vf-table Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-table.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-table)

Tables are everywhere and we provide a variety of implementations depending on need:

- Generic: basic styling with no special functionality
- Striped: with striped rows
- Borderless: no borders
- Compact: tighter spacing
- Responsive:
   - Scroll: on overflow it will scroll left-to-right
   - Stack: on overflow stack cells

This is a draft component, it is not yet functional. Background on the implementation, goals and work plan [can be found in the issue](https://github.com/visual-framework/vf-core/issues/235). Inspiration may be drawn from [Bootstrap tables](https://getbootstrap.com/docs/4.4/content/tables/).

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-table` with this command.

```
$ yarn add --dev @visual-framework/vf-table
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-table/index.scss";
```

_Make sure you import Sass requirements along with the modules._
