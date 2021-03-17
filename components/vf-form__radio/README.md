# Form Radio component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-form__radio.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-form__radio)

## About

An input that that allows the site visitor to select only one option in a group.

## Usage

The `vf-form__radio` can be used when a site visitor has a choice of options but can only pick one.

### When to use

Use a group of `vf-form__radio` when you have a set of options for the site visitor but you only want them to be able to pick one.

### When not to use

Do not use the `vf-form__radio` when you only want the site visitor to pick one option from the options. For this use case you should only used the <a href="vf-form__radio/">vf-radio button</a> component.

### Implementation

A `vf-form__radio` must be accompanied by a `vf-form__label` inside a `vf-form__item` with the `vf-form__item--radii` variant.

You can also use the `vf-form__helper` to add some more descriptive, explanitory text under the `vf-form__label`. See the examples for the correct markup.

The `.vf-form__radio` needs to grouped into a `vf-form__fieldset` and using the `vf-form__label` to help the site visitor understand what they are choosing for.

Generally the `vf-form__fieldset` will use the `vf-stack` layout component to stack the `vf-form__radio` on top of each other. You can set these to be inline by using the `vf-cluster` layout component as well. See the examples for the correct markup.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-form__radio` with this command.

```
$ yarn add --dev @visual-framework/vf-form__radio
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-form__radio/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
