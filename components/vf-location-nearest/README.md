# Nearest location component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-location-nearest.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-location-nearest)

## Usage

From a list of lat and long, this will use the browser geolcation API to select the nearest. It also provides a manual selection fallback and override.

This component is purely JavaScript and relies on other components to provide UI and to consume the detected region.

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-location-nearest` with this command.

```
$ yarn add --dev @visual-framework/vf-location-nearest
```

## JS

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfLocationNearest } from 'vf-location-nearest/vf-location-nearest';
// Or import directly
// import { vfLocationNearest } from '../components/raw/vf-location-nearest/vf-location-nearest.js';

// Configure an object of your locations to detect
// You should do this in your central JS (scripts.js) as appropriate
let vfLocationNearestLocations = {
  // supply a default in case of geodetect failures
  default: {
    name: "Heidelberg",
    latlon: "49.40768, 8.69079" // lat then lon
  },
  barcelona: {
    name: "Barcelona",
    latlon: "0.40768, 0.69079"
  },
  ...
  }
}
// Bootstrap location detection
vfLocationNearest(vfLocationNearestLocations);
```

### JS Data attributes

All are optional

- `data-vf-js-location-nearest-name` element will receive the name of the current location
- `data-vf-js-location-nearest-override-widget` element will be populated with an override widget (vf-form select list)
- `data-vf-js-location-nearest-activation-target="{locationId}"` will receive clicks on location change. This is a simple method to activate diverse elements.

## Sass/CSS

If your component uses Sass:

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-location-nearest/index.scss";
```

_Make sure you import Sass requirements along with the modules._

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
