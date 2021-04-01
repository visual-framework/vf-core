---
title: Browser support
subtitle: We focus support on major browsers in use by 95%+ of our audiences, and we ensure the site is navigable and usable by the remaining 5%.
date: 2020-12-11 19:33:50
section: building
tags:
  - posts
  - guidance
layout: layouts/section.njk
templateEngineOverride: njk, md
---

For browser support, aim for content and functionality to be unobstructed on browsers released within the last five years and have JavaScript enabled; this is represents virtually all users of the EMBL sites (in excess of 99.9%).

As intended by the CSS specification, not all browsers, devices, or users render content to look exactly the same. Our aim is to create an accessible and visually consistent design across a broad range of clients, not pixel-perfect designs. Further, we build atop the basic functionality, adding progressive-enhancement features to newer classes of browsers and devices.

## Proactive and reactive support

We classify browsers into two categories:

1. **Proactive support** for modern and mainstream browsers released within the last 3 years and with more than 5% user base of the VF (Chrome, FF, Safari, Chromium Edge, etc.)
    - For these we actively test and where possible strive to write visual regression testing as possible (*note we do not yet have a tool in place, but are experimenting).
2. **Reactive limited support** for legacy and minor browsers older than 3 years or with less than 5% user base (IE 11, pre-Chromium Edge)
    - For these we do not actively monitor but will address support requests as best we can.
    - We also acknowledge that life science services can have specific use cases by institutions. Those use cases can be addressed on a case-by-case basis and the VF will avoid doing anything that actively breaks older browsers.

### Note on Internet Explorer

This browser represents less than 5% of users, but represent more than 95% of our legacy support. For users without special arangements with Microsoft, IE [has been unsupported since 2020](https://www.swyx.io/ie11-eol/).

## Known legacy browser shortcomings

A guiding principle is "The content should be accessible, but that doesn't mean it should look the same." So we know of areas where older browsers are functional but don't look as nice.

### 1. Layout

Older browsers don't support the [CSS Grid layout](https://caniuse.com/#feat=css-grid) and we provide limited fallback support as flexblock

Non-supporting versions for our user base:

Browser | Last unsupported version | Percent
-- | -- | -- | --
Internet Explorer | 11 | 2.79%
Safari | 10 | 0.20%
Edge | 15 | 0.08%
Firefox | 51 | 0.80%
Chrome | 56 | 0.00%
Opera | 43 | 0.01%
Android Webview | 79 | 0.62%

### 2. Colours and imagery

[CSS Custom properties and variables](https://caniuse.com/#feat=css-variables) are used heavily by the Visual Framework for colours and some imagery, older browsers will see fewer colours.

Non-supporting versions for our user base:

Browser | Last unsupported version | Percent
-- | -- | -- | --
Internet Explorer | 11 | 2.79%
Safari | 9.2 | 0.10%
Edge | 15 | 0.08%
Firefox | 30 | 0.01%
Chrome | 48 | 0.00%
Opera | 35 | 0.01%
Android Webview | 79 | 0.62%

## How to support legacy browsers

When developing new components we have tips and methods for suppoting legacy browsers, see [related discussion in GitHub issue #734](https://github.com/visual-framework/vf-core/issues/734)

## Typical usage for the Visual Framework

### Public scientific websites

Here is example usage from a long-standing public-facing scientific institute's website.

Browser | Note | Traffic %
-- | -- | --
Chrome | 63 and older account for less than 1% | 65.73%
Safari | 11 and older account for less than 1% | 11.70
Firefox |  77 and older account for less than 1% | 11.27
Edge (chromium) |   | 3.72
Edge classic |   | 2.11
Android Webview | 83 and older account for less than 0.2%   | 1.37
IE | 8, 9, 10 account for less than 0.1% | 1.59
Opera (desktop) | 69 and older account for less than 0.2%  | 0.74
Samsung | 11 and older account for less than 0.1%  | 0.73
Safari (in-app) | | 0.33

### Representative major scientific service

Browser | Note | Traffic %
-- | -- | --
Chrome |  | 55.96%
Safari |  | 15.21
Firefox |  |  10.66
Edge (chromium and classic)  |   | 5.36
IE | | 4.25
Safari (in-app) | | 2.50
Android Webview |   | 2.40
Samsung |  | 1.63
UC Browser |  | 0.84
Opera (desktop) |  | 0.83
