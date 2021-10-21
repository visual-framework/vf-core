# Divider component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-divider.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-divider)

## About

The `vf-divider` component creates a horizontal dividing rule that can help separate containers of content or content inside of their containers.

## Usage

The `vf-divider` component will be the width of if's container. So inside of `<body>` of your page it will be a maximum of 1300px.

```
<body class="vf-body | vf-stack vf-stack--400">
  <hr class="vf-divider">
</body>
```

If you wish to have your `vf-divider` fit the whole width of the screen you can add the `vf-u-fullbleed` utility class along side it:

```
<hr class="vf-divider | vf-u-fullbleed">
```

This fills the width of the viewport but gives a inline (left and right) margin.

You can customise the inline (left and right) margin if you wish by using the CSS custom property `--context-margin--inline` on the element:

```
<hr class="vf-divider | vf-u-fullbleed" style="--context-margin--inline: 2rem;">
```

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-divider` with this command.

```
$ yarn add --dev @visual-framework/vf-divider
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-divider/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
