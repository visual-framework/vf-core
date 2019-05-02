# vf-componenet-rollup Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-componenet-rollup.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-componenet-rollup)

The `vf-componenet-rollup` compiles component Sass and JS into style.css and scripts.js files, retrospectively.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-componenet-rollup` with this command.

```
$ npm install --save @visual-framework/vf-componenet-rollup
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-componenet-rollup/index.scss";
```

_Make sure you import any requirements along with the modules._
