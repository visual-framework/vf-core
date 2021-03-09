# Form Checkbox component

[![npm version](https://badge.fury.io/js/%40visual-framework%2F.vf-form__item--checkbox.svg)](https://badge.fury.io/js/%40visual-framework%2F.vf-form__item--checkbox)

## About

An input that shows the site visitor if the option is selected or not.

## Usage

Checkboxes can be used when a site visitor to select one or more options from a list in a form.

### When to use the checkbox

USe the `.vf-form__item--checkbox` when you want the site visitor to select 0, 1 or multiple options from the predefined list of checkboxes.

### When not to use the checkbox

Do not use the `.vf-form__item--checkbox` when you need a site visitor to only pick one option from the available selection. For this use case you should use the <a href="vf-form__radio/">vf-radio button</a> component.

### Implementation

A `vf-form__item--checkbox` must be accompanied by a `vf-form__label`.

You can also use the `vf-form__helper` to add some more descriptive, explanitory text under the `vf-form__label`. See the examples for the correct markup.

The `.vf-form__item--checkbox` needs to grouped into a `vf-form__fieldset` and using the `vf-form__label` to help the site visitor understand what they are choosing for.

Generally the `vf-form__fieldset` will use the `vf-stack` layout component to stack the `vf-form__item--checkbox` on top of each other. You can set these to be inline by using the `vf-cluster` layout component as well. See the examples for the correct markup.
## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `.vf-form__item--checkbox` with this command.

```
$ yarn add --dev @visual-framework/vf-form__item--checkbox
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-form__item--checkbox/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
