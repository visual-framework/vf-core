# EMBL Conditional Edit Links component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-conditional-edit.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-conditional-edit)

## About

Edit and configuration buttons often point to separate domain where the login stat of a user cannot be known, so this is a simple JavaScript method to enable links that point to edit and configuration pages.

Currently supported methods:
- URL param: `?embl-conditional-edit=enabled` or `?embl-conditional-edit=1`
- CSS cascaded: `embl-coditional-edit__enabled .embl-conditional-edit { display: unset; }`

Note: this method is not about hiding the a URL from a user being able to see the link, rather it simply hides or shows a link based off a parameter.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-buttons` with this command.

```
$ npm install --save @visual-framework/embl-conditional-edit
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/embl-conditional-edit/index.scss";
```

_Make sure you import any requirements along with the modules._
