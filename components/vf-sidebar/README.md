No# vf-sidebar component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-sidebar.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-sidebar)

## About

The `vf-sidebar` is a media query—less layout component that will alter the layout from inline to block depending on set parameters.

## Usage

You can apply the `vf-sidebar` layout when you have two columns of content with one (if needed) being smaller than the other. When the browser width is small enough so that the 'main' content does not have enough space to be inline with the 'sidebar' it will make both pieces of content act and look like 'block' elements, stacked on top of each other.

By default the width of the main content is set at `50%` but can be changed with the CSS custom property `--vf-sidebar-main-width` which, if using nunjucks can be changed with the yaml key `sidebar__main_content_width`.

### Class Names

| Class Name          | description                                                                                                       | usage                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `vf-sidebar`        | The layout components default Class                                                                               | needs to be used once on instances of the `vf-sidebar` layout component |
| `vf-sidebar--start` | Expects the first child element to be the smallest                                                                |                                                                         |
| `vf-sidebar--end`   | Expects the last child element to be the smallest                                                                 |                                                                         |
| `vf-sidebar--Nn`    | Determines the spacing of the layout when the components are inline or stacked (`Nn` refers to the spacing value) |                                                                         |

### CSS Custom Properties

| CSS Custom Property     | Description                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| --vf-sidebar-main-width | can be used inline on the parent to determine when the layout changes. It sets a minimum width on the larger child element |
| --vf-sidebar-spacing    | sets the spacing between the two child elements. This is set using a class name `vf-sidebar--Nn`                           |

### Nunjucks and Yaml Key/Value Pairs
| `nunjucjs`/`yaml` key       | `nunjucjs`/`yaml` value | description                                                                                                                                                               |
| --------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sidebar__position           | left                    | use when the smallest width content (sidebar) is on the left or at the start                                                                                              |
| sidebar__position           | start                   | use when the smallest width content (sidebar) is on the start or at the left                                                                                              |
| sidebar__position           | right                   | use when the smallest width content (sidebar) is on the right or at the end                                                                                               |
| sidebar__position           | end                     | use when the smallest width content (sidebar) is on the end or at the right                                                                                               |
| sidebar__spacing            | 200                     | gives the space of .5rem between the two child elements                                                                                                                   |
| sidebar__spacing            | 400                     | gives the space of 1rem between the two child elements                                                                                                                    |
| sidebar__spacing            | 600                     | gives the space of 1.5rem between the two child elements                                                                                                                  |
| sidebar__spacing            | 800                     | gives the space of 2rem between the two child elements                                                                                                                    |
| sidebar__spacing            | 1200                    | gives the space of 3rem between the two child elements                                                                                                                    |
| sidebar__spacing            | 1600                    | gives the space of 4rem between the two child elements                                                                                                                    |
| sidebar__main_content_width | Nn%                     | sets the CSS custom property `--vf-sidebar-main-width` on the `vf-sibebar` parent which sets the maximum space the larger width content needs to be before switching from an inline layout to a block layout. This is set in the CSS as 50% by default |

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-sidebar` with this command.

```
$ yarn add --dev @visual-framework/vf-sidebar
```

### JS

[If your component uses JS]

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfcomponentName } from 'vf-sidebar/vf-sidebar';
// Or import directly
// import { vfcomponentName } from '../components/raw/vf-sidebar/vf-sidebar.js';
vfcomponentName(); // if needed, invoke it
```

### Sass/CSS

[If your component uses Sass]

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-sidebar/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
