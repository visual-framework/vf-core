[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-masthead.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-masthead)

## About

## Usage

### Background Colours

By default, the background colour for the masthead is `vf-color--green`. To make this more adaptable for other teams and organisation the Visual Framework uses CSS Custom Properties in order to be able to switch this colour to something more in-keeping with the team wanting to use this component.

The colour values are stored in two CSS custom properties. One for the background colour itself and the other for the text colour.

```css
  --vf-masthead__color--foreround-default: var(--vf-ui-color--white);
  --vf-masthead__color--background-default: var(--vf-color--green);
```

This is set in the components Sass partial but is used in the components HTML inline.

```html
  <div class="vf-masthead" style="
    background-color: var( --vf-masthead__color--background, var(--vf-masthead__color--background-default) );
    color: var( --vf-masthead__color--foreground, var(--vf-masthead__color--foreround-default) );
  ">
```

To override this the changes to `--vf-masthead__color--foreground-default` and `--vf-masthead__color--background-default` need to be applied either after the Sass partial is compiled in your build step or in the HTML on the page using `root`:

```html
<style>
:root {
  --vf-masthead__color--background: none;
  --vf-masthead__color--foreground: #000000;
}
</style>
```

#### notes:

If you are overriding the background or foreground (text) colour make sure you are:

- using a colour from the Visual Framework
- testing to be sure that the contrast ratio meets accessibility guidelines

---

### Background Images

If you wish to use an image instead of a colour for the background of your masthead you will need to define its location as a CSS Custom Property.

```css
--vf-masthead__bg-image: url('path/to/background-image_00EF00.png');
```

#### Image Size

The maximum dimensions for a background image is 1224px wide with a height of 150px. As more and more displays are what we term 'retina' they need to be twice the width and height to look crisp.

Images that are used for mastheads need to have dimensions of 2448px by 300px.

#### Text Colour

When using a background image we have to determine the best text colour to meet the contrast ratio from our accessibility guidelines.

We do this using JavaScript and the background image filename.

In creating the background images for mastheads each image filename needs to have it's most dominate colour added as a hexadecimal code.

```bash
masthead-background-image--00EF00.png
```

The JavaScript looks for this hexidecimal colour code and mathematically works out the correct text colour to use. The CSS custom property `--vf-masthead__color--foreground` is then added as a style block after the `body` tag in the HTML page. It will also add the custom property `--vf-masthead__color--background: none` to remove the background colour.

```html
<style>
:root {
  --vf-masthead__color--background: none;
  --vf-masthead__color--foreground: #00EF00;
}
</style>
```

If JavaScript is disabled, or if it doesn't load with the page. The masthead will default to the background colour.

---

### Browser Support

CSS Custom Properties do not work in older versions of Internet Explorer. We provide a default look for the masthead for these browser which is a white foreground colour (for text) on a green background.

However, this can be overriden if needed using the Sass variables.

<br>

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-masthead` with this command.

```
$ yarn add --dev @visual-framework/vf-masthead
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-masthead/index.scss";
```

_Make sure you import any requirements along with the modules._
