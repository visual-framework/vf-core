# Stack component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-stack.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-stack)

## About

This sets the vertical spacing of child components.

## Usage

Most `vf-core` components come without any margin spacing to avoid adding margins where not needed. Instead vertical spacing is controlled by `vf-stack`.

Where vertical spacing is required withing a component, the `vf-stack` class name to existing containers (like `vf-hero`) or containers you create yourself in your codebase.

### Variants

We use CSS custom properties to control this vertical rhythm. For browsers that do not support CSS custom properties (IE 11) we provide a default value of `1rem` so that child components get some spacing. This value is overridden by browsers that understand CSS custom properties.

| variant name | description                                        |
| ------------ | -------------------------------------------------- |
| 200           | gives the vertical rhythm equal spacing of `.5rem`   |
| 400           | gives the vertical rhythm equal spacing of `1rem` |
| 500          | gives the vertical rhythm equal spacing of `1.25rem`   |
| 600          | gives the vertical rhythm equal spacing of `1.5rem`   |
| 800          | gives the vertical rhythm equal spacing of `2rem`   |
| 1200          | gives the vertical rhythm equal spacing of `3rem`   |
| 1600          | gives the vertical rhythm equal spacing of `4rem`   |

Even though the `vf-stack` layout has a default spacing design token applied as a CSS custom property fallback it is good practice in the system to declare the `vf-stack` spacing class name in your projects.

❌ `<div class="vf-stack">...</div>`

✅ `<div class="vf-stack vf-stack--400">...</div>`

As we are using CSS custom properties we can also use a custom value by creating the custom property `--vf-stack-margin--custom` either in your stylesheet, or in your HTML.

```
<div class="vf-stack vf-stack--custom" style="--vf-stack-margin--custom: 3em;">
  <div class="vf-box vf-box--normal vf-box-theme--primary">...</div>
  <div class="vf-box vf-box--normal vf-box-theme--primary">...</div>
  <div class="vf-box vf-box--normal vf-box-theme--primary">...</div>
</div>
```

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-stack` with this command.

```
$ yarn add --dev @visual-framework/vf-stack
```

### Sass/CSS

If your component uses Sass:

The source files included are written in [Sass](https://sass-lang.com/) (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-stack/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)


## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
