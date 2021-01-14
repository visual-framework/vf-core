# Figure component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-figure.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-figure)

## About

The `vf-figure` component can be used to display and caption diagrams, illustrations, photos, etc. This is to be used as a 'single' item of content that if it was removed from the page or have its position moved in the DOM it would not affect the pages other content.

## Usage

The `vf-figure` component can be used within any existing Visual Framework layout component. The size of the `vf-figure` is dictated by the size of the image rather and responds to the browser viewport if the viewport is smaller. The `vf-figure` component also has some alignment class selectors available which can float or centre the component in and around the other content on the page.

### Class Selectors

- `vf-figure--align`: required to align the component depending on where it is needed. The class also changes the `display` to `display: table` so that we can confine the `figcaption` inside of the `figure` HTML element without any overflow.
- `vf-figure--align-inline-start`: This class adds `float: left;`.
- `vf-figure--align-inline-end`: This class adds `float: right;`.
- `vf-figure--align-inline-centered`: This class adds `margin: 0 auto;`.

### Nunjucks Props

To avoid any mistyping, forgetfulness, and to aid in future proofing the component. We are using 'pseudo props' in nunjucks to determine which CSS selectors to use. All props do nothing unless included in your data for the component.

#### Props available

- `vf_figure__align_inline_start`: if set to true (`vf_figure__align_inline_start: true`) it will apply the class selectors `vf-figure--align vf-figure--align-inline-start` to `vf-figure`.
- `vf_figure__align_inline_end`: if set to true (`vf_figure__align_inline_end: true`) it will apply the class selectors `vf-figure--align vf-figure--align-inline-end` to `vf-figure`.
- `vf_figure__align_inline_centered`: if set to true (`vf_figure__align_inline_centered: true`) it will apply the class selectors `vf-figure--align vf-figure--align-inline-centered` to `vf-figure`.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-figure` with this command.

```
$ yarn add --dev @visual-framework/vf-figure
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-figure/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
