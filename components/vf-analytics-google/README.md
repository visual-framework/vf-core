# Google Analytics enhancements component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-analytics-google.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-analytics-google)

Supplementary behaviour (primarily JavaScript) to ease tracking with Google Analytics.

This component will grow over time with additional event tracking behaviours.

## Usage

### User actions

This component tracks three types of user engagement as actions in Google Analytics:

1. General clicks in the browser as "UI" category
2. Downloads of files as "Downloads" `zip|exe|pdf|doc*|xls*|ppt*|mp3|txt|fasta`
3. Emails links as "Email" `mailto:`

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

- `vfGaIndicateLoaded()` Awaits and checks to see if Google Analytics client side JS has loaded. If it does, sets `<body data-vf-google-analytics-loaded='true'>`
- `vfGaIndicateUnloaded` Utility method to invalidate prior GA check `<body data-vf-google-analytics-loaded='false'>`
- `vfGaTrackInteraction()` can be used to directly track events if you wish to use your own event handler
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
import { vfGaIndicateLoaded } from 'vf-analytics-google/vf-analytics-google';
// Or import directly
// import { vfGaIndicateLoaded } from '../components/raw/vf-analytics-google/vf-analytics-google.js';
vfGaIndicateLoaded();
```

### Sass/CSS installation

- There is currently no Sass/css needed for this component.
