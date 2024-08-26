# Logo component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-logo.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-logo)

## About

A simple component to add the Visual Framework logo to a page. You'll likely want to use this one as a template to add your own logo.

## Usage

This component allows you to add the vf-logo on your page. It can also serve as a template to add your own logo if it has a similar layout and design to the vf-logo. Before using it, ensure that your logo usage guidance and design layout do not conflict with the component.

Considering that texts in logo’s are classified as [essential](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text#dfn-essential), there are [no contrast requirements](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) for adding a logo. However, where possible, make sure the logo is clearly visible against the background colour.

### Useful links

* [Design resources - EMBL](https://www.embl.org/internal-information/communications/design-resources/#vf-tabs__section-logos)
* [Contrast (Minimum) (Level AA) - WCAG 2.1 Understanding Docs](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
* [Images of Text (Level AA) - WCAG 2.1 Understanding Docs](https://www.w3.org/WAI/WCAG21/Understanding/images-of-text#dfn-essential)

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-logo` with this command.

```
$ yarn add --dev @visual-framework/vf-logo
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-logo/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
