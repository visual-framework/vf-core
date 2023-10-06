# Breadcrumbs component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-breadcrumbs.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-breadcrumbs)

## About

The `vf-breadcrumb` component is a navigational item that can identify to the site visitor their location on the website. They are a visual representation of the site's heirachy.

## Usage

The `vf-breadcrumb` component should follow the `vf-global-header` in the page layout.

Each link in the component is separated by a `>` chevron. The page you are on should display an 'active' state in the breadcrumbs which is bold with no underline.

Ensure that the complete navigational path is displayed in the breadcrumbs on the desktop, exceptions can be made in the case where the related items component is used with the breadcrumbs, in this case it should list no more than three items, including the current page.

### Related breadcrumbs

The "Related" variant allows you to indicate related items as additional navigation to the page the site visitor is on. They should be placed inside the `vf-breadcrumbs` `<nav>` element and be a seperate unordered list.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-breadcrumbs` with this command.

```
$ yarn add --dev @visual-framework/vf-breadcrumbs
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-breadcrumbs/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
