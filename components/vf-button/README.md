# Button component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-button.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-button)

## About

Buttons are clickable elements that trigger an action. They can communicate calls to action, are visually prominent, and allow users to interact with the pages in various ways.

## Usage

test changes
The `vf-button` component can be used with forms on a page but can also be used as a prominent 'call to action' link that goes to another page with more information.

### When To Use

A site visitor generally would expect a button to submit data or take action, and if used as a link to navigate to another page.

Each form on a page should only have one primary button, any remaining buttons should use the secondary (outline primary) button.

As the `vf-button` is relatively large to add to its visual dominence, depending on the context you may wish to use the `vf-button--small` variant.

#### Alignment

As a general rule, the `vf-button` should be left aligned on the page and when used inside as part of a larger component. When used in conjuction with a single form input, like a search input, the `vf-button` needs to be inline with the input and to the right of it. When a `vf-button` is used in a banner it needs to follow the content and be right aligned.

### When Not To Use

If using the `vf-button` as a link do not use it to link to content on the same page. This is where something like the <a href="/components/vf-link-list/#vf-link-list--easy">`vf-link-list`</a> component should be used.

### Label

The button text should be short and clear. Depending on the action of the button it should use agreed microcopy<sup>*</sup>.

<sup>*</sup>to be done.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-button` with this command.

```
$ yarn add --dev @visual-framework/vf-button
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-button/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
