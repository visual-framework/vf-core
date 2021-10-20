# Favicon component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-favicon.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-favicon)

## About

A template to specify favicons for your site.

## Usage

```
{% raw %}
{% render '@vf-favicon', {
    apple_touch_icon: "../../assets/vf-favicon/assets/apple-touch-icon.png",
    icon_32: "../../assets/vf-favicon/assets/favicon-32x32.png",
    icon_16: "../../assets/vf-favicon/assets/favicon-16x16.png",
    manifest: "../../assets/vf-favicon/assets/site.webmanifest",
    icon_mask: "../../assets/vf-favicon/assets/safari-pinned-tab.svg",
    color_mask: "#ffffff",
    color_msapplication: "#ffffff",
    color_theme: "#ffffff"
} %}
{% endraw %}
```

Yields:

```
{% render '@vf-favicon', {
    apple_touch_icon: "../../assets/vf-favicon/assets/apple-touch-icon.png",
    icon_32: "../../assets/vf-favicon/assets/favicon-32x32.png",
    icon_16: "../../assets/vf-favicon/assets/favicon-16x16.png",
    manifest: "../../assets/vf-favicon/assets/site.webmanifest",
    icon_mask: "../../assets/vf-favicon/assets/safari-pinned-tab.svg",
    color_mask: "#ffffff",
    color_msapplication: "#ffffff",
    color_theme: "#ffffff"
} %}
```

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-favicon` with this command.

```
$ yarn add --dev @visual-framework/vf-favicon
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
