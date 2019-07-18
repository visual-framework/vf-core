# Componenet Rollup

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-componenet-rollup.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-componenet-rollup)

The `vf-componenet-rollup` compiles component Sass and JS into style.css and scripts.js files, retrospectively.

## Install

You'll likely want to configure this component to include or exclude Sass and JS files, we suggest cloning it to your local `./src/components`.

Get an tarball of this component with:

```
yarn pack @visual-framework/vf-componenet-rollup
```

However for very generic VF projects, this component is also distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-componenet-rollup` with this command.

```
$ yarn add --dev @visual-framework/vf-componenet-rollup
```

## Usage

Unlike other components, you probably won't want to `@import` this. Instead the `vf-core` project will compile this into a style.css and scripts.js.

_Make sure you import any requirements along with the modules._
