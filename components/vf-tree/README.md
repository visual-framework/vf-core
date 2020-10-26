# vf-tree Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-tree.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-tree)

## About

A collapsable tree list suited for list displays or deep navigation structures.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-tree` with this command.

```
$ yarn add --dev @visual-framework/vf-tree
```

## Usage

There are several paramaters availabl when using the Nunjucks template:

- `expanded: true` Control if the entire tree is expanded/collpased
- `sublist` if an object of `title`s the item will be shown as a group
- `artiveTrail: true` Highlights a tree as an active path and if it is a sublist, opens it

## Sass/CSS

The source files included are written in [Sass][sass] (`scss`) Point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-tree/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)
