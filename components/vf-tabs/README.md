# Tabs component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-tabs.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-tabs)

## About

The ever-useful tabs. This component works best with the included JS, but you can use the CSS styling on other tab implementations, like Bootstrap tabs.

## Usage

These tabs have been made with accessibility in mind, however tabs should be avoided where content structure avoids the need to use tabs.

Nested tabs are also possible, as demonstrated in the example, however this provides further usability challenges and should be strongly avoided.

### Deep linking

A tab can be activated on page load by passing it on the link `#vf-tabs__section-tab_id`

This is the default behaviour and can be deactivated when invoking vfTabs:

```js
// vfTabs(scope, activateDeepLinkOnLoad)
vfTabs(document, false);
```

Note: The deep linking feature is not designed with `vf-location-nearest` compatibility. A `vf-location-nearest` tab may not respect a deep linked hash url.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-tabs` with this command.

```
$ yarn add --dev @visual-framework/vf-tabs
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-tabs/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
