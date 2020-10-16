# Google Analytics enhancements component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-analytics-google.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-analytics-google)

Supplementary behaviour (primarily JavaScript) to ease tracking with Google Analytics.

## Usage

This component will grow over time with additional event tracking behaviours.

### Meta tags

Track dimensions:

```html
<meta name="vf:page-type" content="category;pageTypeHere">
```

How to add dimension to your property?

- https://developers.google.com/analytics/devguides/collection/analyticsjs/custom-dims-mets
- https://support.google.com/analytics/answer/2709829?hl=en

### Region tracking

You can track the region of the page a link is in:

```html
<div data-vf-google-analytics-region="main-content-area-OR-SOME-OTHER-NAME">
  <a href="//www.example.com">My link here</a>
</div>
```

Notes:
- region names should not be repeated on the same page
- nested regions are currently not fully supported

### Verbose logging

`<body data-vf-google-analytics-verbose="true">`

### JavaScript

#### vfGaIndicateLoaded()

Awaits and checks to see if Google Analytics client side JS has loaded. If it does, sets `<body data-vf-google-analytics-loaded='true'>`

#### Options

`vfGaIndicateLoaded()` accepts these options for object `vfGaTrackOptions`:

- Do not track the page load: `vfGaTrackOptions.vfGaTrackPageLoad` (defaults to true).
  - If you set to false, the function will _not_ track the initial page view. Useful if you track the initial page view with JavaScript in your HTML.
- Track the users network: `vfGaTrackOptions.vfGaTrackNetwork`
  - As of February 2020 Google Analytics no longer tracks the network name of visitors
  - A 3rd party tool enables this, follow the setup guide at https://ipmeta.io/instructions
    - note there is no need to load https://ipmeta.io/plugin.js, this component includes it for you
  - After configuring your property in Google Analytics, add the configuration below

Example:

```js
let vfGaTrackOptions = {
  vfGaTrackPageLoad: true,
  vfGaTrackNetwork: {
    serviceProvider: 'dimension2',
    networkDomain: 'dimension3',
    networkType: 'dimension4'
  }
};
vfGaIndicateLoaded(vfGaTrackOptions);
```

#### vfGaIndicateUnloaded()

Utility method to invalidate prior GA check `<body data-vf-google-analytics-loaded='false'>`

#### vfGaTrackInteraction()

Can be used to directly track events if you wish to use your own event handler.

```js
/**
 * This code tracks the user's clicks in various parts of the site and logs them as GA events.
 *
 * Dev note:
 * add class verbose-analytics to your body for a readout to console on clicks.
 *
 * @param {element} actedOnItem
 * @param {string} customEventName Event action
 * @example
 * jQuery(".analytics-content-footer").on('mousedown', 'a, button', function(e) {
 *   vfGaTrackInteraction(e.target,'Content footer');
 * });
 * /
```

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-analytics-google` with this command.

```
$ yarn add --dev @visual-framework/vf-analytics-google
```

### Javascript installation

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
let vfGaTrackOptions = {
  vfGaTrackPageLoad: true
};
import { vfGaIndicateLoaded } from 'vf-analytics-google/vf-analytics-google';
// Or import directly
// import { vfGaIndicateLoaded } from '../components/raw/vf-analytics-google/vf-analytics-google.js';
vfGaIndicateLoaded(vfGaTrackOptions);
```

### Sass/CSS installation

- There is currently no Sass/css needed for this component.
