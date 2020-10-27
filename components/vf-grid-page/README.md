# Grid Page Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-grid-page.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-grid-page)

<h2>This component has been <span style="color: rgb(228, 0, 70);">deprecated</span>. Please use the <a class="vf-link" href="https://www.npmjs.com/package/@visual-framework/vf-body">new `vf-body` component</a>.</h2>

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-grid-page` with this command.

```
$ yarn add --dev @visual-framework/vf-grid-page
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-grid-page/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)


To start with the page has a simple 3 column grid. The second grid item has a maximum width of 1300 pixels. The two outer grid columns fill the rest of the space to create a centred layout.

The code for this layout is for the `<body class="vf-body">` tag so that the direct children inherit the grid columns.

##### CSS

```css
.vf-body {
  display: grid;
  grid-template-columns:
    [full-start]
      minmax(1.25em, 1fr)
      [main-start]
        minmax(0, 81.25em) // 1300px
      [main-end]
      minmax(1.25em, 1fr)
    [full-end];
}
```

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
