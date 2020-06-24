# Banner Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-banner.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-banner)

## Reflecting status

- General notice `vf-banner vf-banner--notice`
- In development services `vf-banner vf-banner--phase`
- Info `vf-banner vf-banner--alert vf-banner--info` <small>This replaces `vf-banner--phase`</small>
- Success `vf-banner vf-banner--alert vf-banner--success`
- Alert `vf-banner vf-banner--alert vf-banner--alert`
- Warning `vf-banner vf-banner--alert vf-banner--warning`

<strong>note:</strong> The `vf-banner--alert` variants include the option to dismiss the banner. This is currently a 'bring your own JavaScript' button.

## JS Documentation for `--modal` variant

Like all JS-enabled components in the Visual Framework, if you wish to use the bundled JS, you need to include JS data attributes, here is an overview of what the options are for the `vf-banner--modal` variant.

- Enable VF JS:
  - data-vf-js-banner
- Banner type:
  - `dismissible`: standard messaging type
  - `blocking`: full screen
  - `persistent`: no close button
  - data-vf-js-banner-state="name_of_type"
- ESC to close:
  - Only works with `blocking` banner state
  - data-vf-js-banner-esc-close=`"y"`
- Button text:
  - Optional, leaving off will not incekt a close button
  - data-vf-js-banner-button-text="Accept and close"
- Button theme:
  - Optional, leaving off will default to the secondary theme.
  - primary, secondary, tertiary themes are available
  - data-vf-js-banner-button-theme="primary"
- Cookies:
  - Both are optional, leaving either off will deactivate cookie storage
  - data-vf-js-banner-cookie-name=`"myServiceName"`
  - data-vf-js-banner-cookie-version=`"0.1"` Incrementing this string will invalidate old cookies.
- Extra buttons:
  - data-vf-js-banner-extra-button=`"<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>">` This HTML string will be converted into VF markup for extra buttons. Optional.
- Message:
  - data-vf-js-banner-modal-text: the `.innerHTML` of this element will be used as the markup for the message itself



## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-buttons` with this command.

```
$ yarn add --dev @visual-framework/vf-banner
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-banner/index.scss";
```

_Make sure you import Sass requirements along with the modules._
