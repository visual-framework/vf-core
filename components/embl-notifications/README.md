# EMBL Notifications component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-notifications.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-notifications)

Fetches notifications from the EMBL contentHub URL of https://www.embl.org/api/v1/notifications?_format=json&source=contenthub and will display them, if a matching URL is found.

## About

Utility component for the EMBL site to serve as a backup for cases of major outages. Use [`vf-banner`](/components/vf-banner/) instead of this component for normal notifications.

## Usage

This will also check a backup URL for cases of major outages.

- Fallback URL: https://embl-communications.github.io/embl-notifcations-fallback/notifications.js
- Fallabck repo: https://github.com/embl-communications/embl-notifcations-fallback

### Possible features not currently planned:

- Only show if a wrapping element has `data-vf-js-embl-notifications`
- Also load messages from EBI's existing announcement JS at https://ebi.emblstatic.net/announcements.js
- Use the vf-banner precompiled njk template to render output
- Test for better support on non-VF 2.0 sites

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `embl-notifications` with this command.

```
$ yarn add --dev @visual-framework/embl-notifications
```

### Sass/CSS

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

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
