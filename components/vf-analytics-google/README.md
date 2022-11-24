# Google Analytics Enhancements component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-analytics-google.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-analytics-google)

## About

Supplementary behaviour (primarily JavaScript) to ease tracking with Google Analytics.

## Usage

### GA4

As of 1.1.0-rc.0 this contains gtag and GA4 support. The basics of vf-analytics-google are plug-and-play, but to get the full value out if you need to add (currently) 4 "custom definitions":

1. `event_category`
2. `event_type`
3. `page_container`
4. `vf_analytics`

[You can see a screenshot of the configuration here](https://user-images.githubusercontent.com/928100/193329800-4c750a70-1d77-4623-ba00-87db4d608511.png) and here is Google's documentation on [adding the custom dimensions to your GA4 property](https://support.google.com/analytics/answer/10075209?hl=en#new-custom-dimension) (this step is not needed in a UA property).

For more info see issue [#1428](https://github.com/visual-framework/vf-core/issues/1428)

### User actions

This component tracks three types of user engagement as actions in Google Analytics:

1. General clicks in the browser as "UI" category
  - standard elements like `a` `button` `details`
  - form elements like `input` `select` `textarea` `label`
2. Downloads of files as "Downloads" `zip|exe|pdf|doc*|xls*|ppt*|mp3|txt|fasta`
3. Emails links as "Email" `mailto:`
4. External links as "External links"

Explicit labels can be provided with data attributes:

- `data-vf-analytics-label="A special label"`

### Meta tags

Track dimensions:

```html
<meta name="vf:page-type" content="category;pageTypeHere">
```

For GA4 users, be sure to set this when using `vfGaIndicateLoaded()`:

```js
  vfGa4MeasurementId: "G-YOUR-GA4-ID-if_using_gtag"
```

And [add the custom dimension to your property](https://support.google.com/analytics/answer/10075209?hl=en#new-custom-dimension).


### Page region tracking

You can track the region of the page where an event occurs:

```html
<div data-vf-google-analytics-region="main-content-area-OR-SOME-OTHER-NAME">
  <a href="//www.example.com">My link here</a>
</div>
```

Notes:
- region names should not be repeated on the same page
- nested regions are currently not fully supported

### Not intended for use with Google Tag Manager

You should not use `vf-analytics-google` with Google Tag Manager. The combination makes `vf-analytics-google` unreliable and often leads to race conditions where the gtag tracking may fail to work. This is not an issue with this code, rather it is consistent with most of my reading on best practice. It is summed up well at https://measureschool.com/google-tag-manager-vs-global-site-tag/

> Both these tools utilize some common resources that can lead to conflict in some cases. For example, the data layer is one such resource that is used by both tools. Therefore, it is important to be careful while adding both of them together. You will also need to test the implementation of tools by checking whether the correct data is sent to these tools. Overall, the process is doable but complicated. That’s why I would recommend not to install them together on the same page.

That is: if you want to use Google Tag Manager, you should use that for your events. If you want to use gtag.js + custom JS, then vf-google-analytics is good for you. This code will provide particular value if you need a consistent way to collect event data across many websites, which is what we're after.

### Verbose logging

`<body data-vf-google-analytics-verbose="true">`

### JavaScript

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfGaIndicateLoaded } from 'vf-analytics-google/vf-analytics-google';
// Or import directly
// import { vfGaIndicateLoaded } from '../components/raw/vf-analytics-google/vf-analytics-google.js';

let vfGaTrackOptions = {
  vfGaTrackPageLoad: true,
  vfGa4MeasurementId: "G-YOUR-GA4-ID-if_using_gtag"
  vfGaTrackNetwork: {
    serviceProvider: 'dimension2',
    networkDomain: 'dimension3',
    networkType: 'dimension4'
  }
};
vfGaIndicateLoaded(vfGaTrackOptions);
```

In parallel, you need to load and initialize the Google Analytics script you use (analytics.js or gtag.js).
`vfGaIndicateLoaded()` is the primary function and awaits and checks to see if Google Analytics script has loaded. If it does, sets `<body data-vf-google-analytics-loaded='true'>`

#### Options

`vfGaIndicateLoaded()` accepts these options for object `vfGaTrackOptions`:

- Do not track the page load: `vfGaTrackOptions.vfGaTrackPageLoad` (defaults to true).
  - If you set to false, the function will _not_ track the initial page view. Useful if you track the initial page view with JavaScript in your HTML.
- Track the users network: `vfGaTrackOptions.vfGaTrackNetwork`
  - As of February 2020 Google Analytics no longer tracks the network name of visitors
  - A 3rd party tool enables this, follow the setup guide at https://ipmeta.io/instructions
    - note there is no need to load https://ipmeta.io/plugin.js, this component includes it for you
  - After configuring your property in Google Analytics, add the configuration below

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

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-analytics-google` with this command.

```
$ yarn add --dev @visual-framework/vf-analytics-google
```

### Sass/CSS

- There is currently no Sass/css needed for this component.

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
