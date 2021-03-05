# Form Input component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-form__input.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-form__input)

## About

## Usage

Use these when you need short answers to questions in your form. If you need the user to write more longer pieces of text then make use of `<textarea class="vf-form__textarea"></textarea>`.

Make sure your text inputs have the relevant labels (using `<label class="vf-form__label"></label>`) and helper text (using `<p class="vf-form__helper"></p>`).

If your input is `required` there is also CSS used to style the input box when it is not completed. Make use of the label available if the form is sent to the server for validation (using `<p class="vf-form__label vf-form__label--required">...</p>`).
## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-form__input` with this command.

```
$ yarn add --dev @visual-framework/vf-form__input
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-form__input/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
