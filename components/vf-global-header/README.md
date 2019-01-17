[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-global-header.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-global-header)

## About

Note that most users should pull the markup for the header from the EMBL ContentHub with:
```
<link rel="import" href="https://dev.beta.embl.org/api/v1/pattern.html?filter-content-type=article&filter-id=574&pattern=node-body&source=contenthub" data-target="self">
```

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-global-header` with this command.

```
$ npm install --save @visual-framework/vf-global-header
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-global-header/index.scss";
```

_Make sure you import any requirements along with the modules._
