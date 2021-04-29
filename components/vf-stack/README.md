# Stack component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-stack.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-stack)

## About

This can be used to set the flow of child components.

## Usage

Some (and soon all) `vf-core` components will come without any margin spacing (this is to avoid adding margins where it is not needed).

You can add the `vf-stack` class name to existing containers (like `vf-content`) or containers you create yourself in your codebase.

Note: `vf-grid` (1.0.0) and `embl-grid` (2.0.1) now automaticaly add gaps to their child elements as needed. So you should not use `vf-stack` alongside these.

### Variants

We use CSS custom properties to control this vertical rhythm. For browsers that do not support CSS custom properties (IE 11) we provide a default value of `1rem` so that child components get some spacing. This value is overriden by browsers that understand CSS custom properties.

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
