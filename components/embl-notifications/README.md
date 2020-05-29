# EMBL Notifications component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-notifications.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-notifications)

Fetches notifications from the EMBL contentHub and will display them, if a matching URL is found.

## Possible features not currently planned:

- Only show if a wrapping element has `data-vf-js-embl-notifications`
- Also load messages from EBI's existing announcement JS at https://ebi.emblstatic.net/announcements.js
- Use the vf-banner precompiled njk template to render output
- Test for better support on non-VF 2.0 sites

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `embl-notifications` with this command.

```
$ yarn add --dev @visual-framework/embl-notifications
```

## Usage

Add this to your `./components/vf-component-rollup/scripts.js`:

```js
import { emblNotifications } from 'embl-notifications/embl-notifications';
// if you use embl-content-hub-loader, it will automatically invoke emblNotifications
// emblNotifications(); // invoke embl notifications
```

You can masquerade as another page or URL for adhoc use cases or testing:

```js
// emblNotifications(currentHost = 'www.embl.org', currentPath = 'my/test/path`);
emblNotifications('www.embl.org','/')
```
