# vf-table Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-table.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-table)

### CSS Class Reference

| Class                | Applies To | Result                                                                 |
| -------------------- | ---------- | ---------------------------------------------------------------------- |
| `vf-table`           | `table`    | Gives initial generic styling to the `table` element and it's children |
| `vf-table--striped`  | `vf-table` | Adds striped rows to the relevant `tr` elements.                       |
| `vf-table--bordered` | `vf-table` | adds a border around all elements                                      |
| `vf-table--compact`  | `vf-table` | Reduces the padding on the heading and cells                           |
| `vf-table--loose`    | `vf-table` | Increases the padding on the heading and cells                         |
|                      |            |                                                                        |

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
