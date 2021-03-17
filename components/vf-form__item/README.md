# Form Item component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-form__item.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-form__item)

## About

The `vf-form__item` is a wrapping `div` for form inputs.

## Usage

You should use a `vf-form__item` to wrap each form input.

It is used to wrap any of the inputs along with the related `vf-form__label` and also can take the `vf-form__helper` and `vf-form__helper--error` content as well.

The contents of the `vf-form__item` should be coded in a specifc way to match consistency across products. For example, for the `vf-form__input` items it should look like this:

```
<div class="vf-form__item vf-stack">

    <label for="text" class="vf-form__label vf-form__label--required">
        Form Label
        <span class="vf-u-sr-only">this field is required.</span>
        <svg class="vf-icon vf-icon--asterick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>asterick</title>
            <path d="M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z" />
        </svg>
    </label>

    <p class="vf-form__helper">Form helper text</p>

    <input type="text" id="text" class="vf-form__input">

    <p class="vf-form__helper vf-form__helper--error">You have done something wrong.</p>

</div>
```

Each form input in the component library shows how they should be displayed in a `vf-form__item`, and have their own `vf-form__item--` variant.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-form__item` with this command.

```
$ yarn add --dev @visual-framework/vf-form__item
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-form__item/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
