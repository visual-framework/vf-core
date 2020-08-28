# Body Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-body.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-body)

## About

The Body component can be used to create a centered layout to add your content. This should be added to the `body` element in the markup.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-body` with this command.

```
$ yarn add --dev @visual-framework/vf-body
```


The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-body/index.scss";
```

_Make sure you import Sass requirements along with the modules._


### CSS

```css
.vf-body {
  --vf-body-width: 81.25em;
  display: block;
  margin: 0 auto;
  max-width: 81.25em;
  max-width: var(--vf-body-width, 81.25em);
  padding: 0 1em;
}
```
