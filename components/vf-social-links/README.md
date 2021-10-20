# Social Links component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-social-links.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-social-links)

## About

Links to social services.

## Usage

### Variants Available

- `vf-social-links--outline` this removes the background and gives a border around each icon square.
- `dark-mode` if this is insdie a component that has `dark-mode` theeme then the colours swap.

### SVG

You will need to make sure the SVG code below is added somewhere in your HTML (preferably at the top).

```
<svg aria-hidden="true" display="none" class="vf-icon-collection vf-icon-collection--social">
  <defs>
    <g id="vf-social--linkedin">
      <rect xmlns="http://www.w3.org/2000/svg" width="5" height="14" x="2" y="8.5" rx=".5" ry=".5"/><ellipse xmlns="http://www.w3.org/2000/svg" cx="4.48" cy="4" rx="2.48" ry="2.5"/><path xmlns="http://www.w3.org/2000/svg" d="M18.5,22.5h3A.5.5,0,0,0,22,22V13.6C22,9.83,19.87,8,16.89,8a4.21,4.21,0,0,0-3.17,1.27A.41.41,0,0,1,13,9a.5.5,0,0,0-.5-.5h-3A.5.5,0,0,0,9,9V22a.5.5,0,0,0,.5.5h3A.5.5,0,0,0,13,22V14.5a2.5,2.5,0,0,1,5,0V22A.5.5,0,0,0,18.5,22.5Z"/>
    </g>
    <g id="vf-social--facebook">
      <path xmlns="http://www.w3.org/2000/svg" d="m18.14 7.17a.5.5 0 0 0 -.37-.17h-3.77v-1.41c0-.28.06-.6.51-.6h3a.44.44 0 0 0 .35-.15.5.5 0 0 0 .14-.34v-4a.5.5 0 0 0 -.5-.5h-4.33c-4.8 0-5.17 4.1-5.17 5.35v1.65h-2.5a.5.5 0 0 0 -.5.5v4a.5.5 0 0 0 .5.5h2.5v11.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-11.5h3.35a.5.5 0 0 0 .5-.45l.42-4a.5.5 0 0 0 -.13-.38z"/>
    </g>
    <g id="vf-social--twitter">
      <path xmlns="http://www.w3.org/2000/svg" d="M23.32,6.44a.5.5,0,0,0-.2-.87l-.79-.2A.5.5,0,0,1,22,4.67l.44-.89a.5.5,0,0,0-.58-.7l-2,.56a.5.5,0,0,1-.44-.08,5,5,0,0,0-3-1,5,5,0,0,0-5,5v.36a.25.25,0,0,1-.22.25c-2.81.33-5.5-1.1-8.4-4.44a.51.51,0,0,0-.51-.15A.5.5,0,0,0,2,4a7.58,7.58,0,0,0,.46,4.92.25.25,0,0,1-.26.36L1.08,9.06a.5.5,0,0,0-.57.59,5.15,5.15,0,0,0,2.37,3.78.25.25,0,0,1,0,.45l-.53.21a.5.5,0,0,0-.26.69,4.36,4.36,0,0,0,3.2,2.48.25.25,0,0,1,0,.47A10.94,10.94,0,0,1,1,18.56a.5.5,0,0,0-.2,1,20.06,20.06,0,0,0,8.14,1.93,12.58,12.58,0,0,0,7-2A12.5,12.5,0,0,0,21.5,9.06V8.19a.5.5,0,0,1,.18-.38Z"/>
    </g>
    <g id="vf-social--youtube">
      <path xmlns="http://www.w3.org/2000/svg" d="M20.06,3.5H3.94A3.94,3.94,0,0,0,0,7.44v9.12A3.94,3.94,0,0,0,3.94,20.5H20.06A3.94,3.94,0,0,0,24,16.56V7.44A3.94,3.94,0,0,0,20.06,3.5ZM16.54,12,9.77,16.36A.5.5,0,0,1,9,15.94V7.28a.5.5,0,0,1,.77-.42l6.77,4.33a.5.5,0,0,1,0,.84Z"/>
    </g>
    <g id="vf-social--instagram">
      <path xmlns="http://www.w3.org/2000/svg" d="M17.5,0H6.5A6.51,6.51,0,0,0,0,6.5v11A6.51,6.51,0,0,0,6.5,24h11A6.51,6.51,0,0,0,24,17.5V6.5A6.51,6.51,0,0,0,17.5,0ZM12,17.5A5.5,5.5,0,1,1,17.5,12,5.5,5.5,0,0,1,12,17.5Zm6.5-11A1.5,1.5,0,1,1,20,5,1.5,1.5,0,0,1,18.5,6.5Z"/>
    </g>
  </defs>
</svg>
```

This is in leiu of an icon system for you to pull things in automatically.

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-social-links` with this command.

```
$ yarn add --dev @visual-framework/vf-social-links
```

### JS

If your component uses JS:

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfcomponentName } from 'vf-social-links/vf-social-links';
// Or import directly
// import { vfcomponentName } from '../components/raw/vf-social-links/vf-social-links.js';
vfcomponentName(); // if needed, invoke it
```

### Sass/CSS

If your component uses Sass:

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-social-links/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
