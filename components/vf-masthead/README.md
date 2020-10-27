# Masthead Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-masthead.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-masthead)

## About

### Background Colours

By Default, the `vf-masthead` is white text on a black background except if it is the title block variant where the text will be black on a white background with an overall black background.

This can be effected by either having a global theme class applied to a parent (usually on `body`) where the colours determined by the theme name will cascade into this component. The other way is to apply a component specific class that effects the colours.

Theme Variants available are:

- `vf-masthead-theme--primary`
- `vf-masthead-theme--secondary`
- `vf-masthead-theme--tertiary`

There is also a variant that allows for a background image - `vf-masthead--has-image` as well as a variant that allows for the text to be in a block of white (with the text being black) - `vf-masthead--with-title-block`.

#### notes:

If you are overriding the background or foreground (text) colour make sure you are:

- using a colour from the Visual Framework
- testing to be sure that the contrast ratio meets accessibility guidelines

---

#### Background Image Size

The maximum dimensions for a background image is 1224px wide with a height of 150px. As more and more displays are what we term 'retina' they need to be twice the width and height to look crisp.

Images that are used for mastheads need to have dimensions of 2448px by 300px.

#### Text Colour

When using a background image we have to determine the best text colour to meet the contrast ratio from our accessibility guidelines.

We do this using JavaScript and the background image filename.

In creating the background images for mastheads each image filename needs to have it's most dominate colour added as a hexadecimal code.

```bash
masthead-background-image--00EF00.png
```
<br>

The JavaScript looks for this hexidecimal colour code and mathematically works out the correct text colour to use. The CSS custom property `--local-theme-fg-color` is then applied in the style tag of the component.

```html
<style>
<div
  class="vf-masthead vf-masthead--has-image"
  style="background-image: var(--vf-masthead__bg-image);
         --local-theme-fg-color:#FFFFFF;"
  data-vf-js-masthead=""
>
</style>
```

If JavaScript is disabled, or if it doesn't load with the page. The masthead will default to the background colour.

---

### Browser Support

CSS Custom Properties do not work in older versions of Internet Explorer. We provide a default look for the masthead for these browser which is a white foreground colour (for text) on a green background.

However, this can be overriden if needed using the Sass variables.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-masthead` with this command.

```
$ yarn add --dev @visual-framework/vf-masthead
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-masthead/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
