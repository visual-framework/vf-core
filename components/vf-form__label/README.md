# Form Label component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-form__label.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-form__label)

## About

The `vf-form__label` represents a related caption for a form item.

## Usage

All form items need to include a label (using `<label class="vf-fprm__label"></label>`).

These should be as short as possible. If you need to include more details use helper text (using `<p class="vf-form__helper"></p>`).

If your input is required use the component `<p class="vf-form__label vf-form__label--required">...</p>`.

A `vf-form__input` that is used for search does not require a `vf-form__label` but must include descrtiptive `placeholder` text on the input.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-form__label` with this command.

```
$ yarn add --dev @visual-framework/vf-form__label
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-form__label/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
