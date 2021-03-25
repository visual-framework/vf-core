# Form Input component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-form__input.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-form__input)

## About

The `vf-form__input` is a text field that allows the site visitor to enter text data.

## Usage

Use the `vf-form__input` when you need the site visitor to enter text data as part of filling out a larger `vf-form`.

### When to use

Use the `vf-form__input` when a site visitor has to input text data.

Use the `vf-form__input` with a `type` attribute of `search` for a search input.

Use the `vf-form__input` with a `type` attribute of `password` for a password input.

Use the `vf-form__input--filter` with a `type` attribute of `search` for an interactive 'type ahead' search input.

### When not to use

Use these when you need short answers to questions in your form. If you need the user to write more longer pieces of text then make use of `<textarea class="vf-form__textarea"></textarea>`.
#### `vf-form__input--filter`:

* This variant is only to be used when there is some sort of autocomplete / typeahead filtering needed when searching.
* This is not to be used in place of the normal input and button because it's more 'visually appealing'.
## Implementation

The `vf-form__input` allow the site visitor to enter text data in a structured format.

Make sure your text inputs have the relevant labels (using `<label class="vf-form__label"></label>`) and, if needed, helper text (using `<p class="vf-form__helper"></p>`).

If you are using a `vf-form__input` with the `type` attribute as `search` you do not need to use a `vf-form__label` and can make use of the HTML `placeholder` attribute to provide a short descriptive piece of text that will be displayed within the `vf-form__input`.

If your input is `required` there is also CSS used to style the input box when it is not completed. Make use of the label available if the form is sent to the server for validation (using `<p class="vf-form__label vf-form__label--required">...</p>`).

Group your `vf-form__input`s using a `vf-form__fieldset` with a relevant lable if appropriate.

Due to how browsers handle the `reqiured` attribute in HTML, a form that has this attribute but is empty often becomes automatically `invalid`. To stop this but have the ability to show that a form field is 'invalid' we can use the modifier class `vf-form__input--is-invalid`.
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
