# Box Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-box.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-box)

## About

The `vf-box` container is an element to be used when ...

## Options

### Is Link

If you require the `vf-box` to link to a page you can do this by:

- changing the `<div>` to an `<a href="">`.
- adding `vf-box--is-link` to the classes being used.
- if you are using `.njk` you only need to add a `box_href` to the data.

### Design Variants

There are currently two Design variants available. To add the appropriate level of design you can add a component–level class:

- `vf-box--easy`
- `vf-box--normal`

### Themes

**note:** you need a design variant set at the page (todo), container (todo), or component level to make use of the themes available to avoid any potential conflicts with code or unexpected results

The `vf-box` component allows for global and component–level theming so that it is customisable to your needs.

To make use of the component–level theming you will need to add a theme classname to the component.

The theme classnames available are:

- `vf-box-theme--primary`
- `vf-box-theme--secondary`
- `vf-box-theme--tertiary`
- `vf-box-theme--quaternary`
- `vf-box-theme--quinary`

### Deprecated Variants

Since `v1.1.0` the following components are considered depracted and should not be used in new projects:

- `vf-box--inlay`
- `vf-box--factoid`

To update your existing usage of these variants to use the component–level theming you can swap:

- `vf-box--inlay` for `vf-box--normal vf-box-theme--quinary`
- `vf-box--factoid` for `vf-box--normail vf-box-theme--primary`

### Accessibility

**Do not** use the themes `vf-box-theme--qauternary` or `vf-box-theme--quinary` with the design variant `vf-box--easy` as they do not conform to WCAG colour contrast ratio specifications.



## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-box` with this command.

```
$ yarn add --dev @visual-framework/vf-box
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-box/index.scss";
```

_Make sure you import Sass requirements along with the modules._
