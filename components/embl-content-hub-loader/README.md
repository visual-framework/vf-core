# EMBL ContentHub Loader component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-content-hub-loader.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-content-hub-loader)

Use this component to remotely load markup and content from the central EMBL ContentHub, this particular component allows reuse and distribution of content ranging articles to navigation elements (such as a global footer).

Currently this is done as HTML imports (see the code example) + some JS. In the future other methods will be support (such as JSON).

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-buttons` with this command.

```
$ npm install --save @visual-framework/embl-content-hub-loader
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/embl-content-hub-loader/index.scss";
```

_Make sure you import any requirements along with the modules._
