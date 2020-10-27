# Form Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-form.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-form)

## Usage

#### `vf-form__input`

Use these when you need short answers to questions in your form. If you need the user to write more longer pieces of text then make use of `<textarea class="vf-form__textarea"></textarea>`.

Make sure your text inputs have the relevant labels (using `<label class="vf-fprm__label"></label>`) and helper text (using `<p class="vf-form__helper"></p>`).

If your input is `required` there is also CSS used to style the input box when it is not completed. Make use of the label available if the form is sent to the server for validation (using `<p class="vf-form__label vf-form__label--required">...</p>`).

#### `vf-form__label`

All form items need to include a label (using `<label class="vf-fprm__label"></label>`).

These should be as short as possible. If you need to include more details use helper text (using `<p class="vf-form__helper"></p>`).

If your input is required use the component `<p class="vf-form__label vf-form__label--required">...</p>`.


#### `vf-form__helper`

If you need to include more descriptive explanations of what the input requires make use of the component `<span class="vf-form__helper"></span>` where you can add more text.

If your form is has any type of validation (either on the client or server) you can make use of `vf-form__helper--error` to help with inputs that do not have the correct content.

#### `vf-form__fieldset`

Use the component `vf-form__fieldset` when there is a relationship betweent form inputs. This maybe a group of text inputs or a group of checkboxes or radio inputs. Or a variation of all.

The first HTML element that needs to be inside of `<fieldset class="vf-form__fieldset">` needs to be a `legend` - `<legend class="vf-form__legend">Describing the group</legend>`

---

More documentation is to follow.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-form` with this command.

```
$ yarn add --dev @visual-framework/vf-form
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-form__core/vf-form__core.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
