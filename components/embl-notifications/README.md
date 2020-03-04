# EMBL Notifications component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-notifications.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-notifications)

Fetches notifications from the EMBL contentHub and will display them, if a matching URL is found.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `embl-notifications` with this command.

```
$ yarn add --dev @visual-framework/embl-notifications
```

## Usage

Add this to your `./components/vf-component-rollup/scripts.js`:

```js
import { vfEmblNotification } from 'embl-notifications/embl-notifications';
emblNotifications(); // invoke it
```


