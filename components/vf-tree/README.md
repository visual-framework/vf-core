# vf-tree Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-tree.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-tree)

A collapsable tree list suited for list displays or deep navigation structures.

There are several paramaters availabl when using the Nunjucks template:

- `expanded: true` Control if the entire tree is expanded/collpased
- `sublist` if an object of `title`s the item will be shown as a group
- `artiveTrail: true` Highlights a tree as an active path and if it is a sublist, opens it

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-tree` with this command.

```
$ yarn add --dev @visual-framework/vf-tree
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-tree/index.scss";
```

_Make sure you import Sass requirements along with the modules._
