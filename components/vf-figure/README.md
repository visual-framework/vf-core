# Figure Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-figure.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-figure)

## Usage

The `vf-figure` componet defaults to give the image a maximum width of 100% so that it can be placed inside of a grid (like `vf-grid`) and fill the space of the grid item(s) that have been allocated by its parent.

If you need to specify the width of the component you can use the CSS custom property `--vf-figure__width` which will override the width in the CSS.

The `vf-figure` component also has some alignment class selectors available.

### Class Selectors

- `vf-figure--align`: required to align the component depending on where it is needed. This class also changes the width of the image to `auto` but can still be overriden with `--vf-figure__width`. The class also changes the `display` to `display: table` so that we can confine the `figcaption` inside of the `figure` HTML element without any overflow.
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

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-figure/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
