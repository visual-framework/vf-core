# Back to top component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-back-to-top.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-back-to-top)

## About

An anchor or JavaScript button to scroll the  user to top of the current page, or to a target element.

## Usage

Only use on component per page, multiple "back to top" links are [not recommended](https://www.nngroup.com/articles/back-to-top).

### Inline variant

The inline variant can be used without JavaScript and placed at the bottom of content or the page.

### Floating variant

The floating variant is recommended for this component, which appears floating at the bottom right of page. It will appear once the user has scrolled down to 100% of the page height. This requires JavaScript to function.


### Angular

As of version 1.0.2 vf-back-to-top has experimental Angular support.
This package was generated with Angular version 18.2.1 with fallback support for 15.2.4 and has been tested on application with Angular version 18.2.1

1. install `yarn add @visual-framework/vf-back-to-top`
2. import in your app.module
   ```
   import { VfBackToTopAngularModule } from '@visual-framework/vf-back-to-top/vf-back-to-top.angular';

   @NgModule({
     imports: [VfBackToTopAngularModule, YourOtherModules],
     ...
   })
   ```
3. JS file inclusion
  * Copy the vf-back-to-top.js (from Assets section below) to your src/assets/vf-back-to-top folder (create new if not already).
  * In the angular.json inside "scripts": [] add the above file reference like -
      "scripts": [
            "src/assets/vf-back-to-top/vf-back-to-top.js"
          ]
      and then add this function call
      ```
      vfBackToTop();
      ```
      where you're importing the the component.
  * Rerun the project if already running.
4. Can be used as
   ```
   <vf-back-to-top [type]="'inline'" [text]="'Top'" [scrollToId]="'top'" [example]="true"></vf-back-to-top>
   <vf-back-to-top [type]="'floating'" [example]="false"></vf-back-to-top>
   ```
5. add to your styles.scss
   ```
   @import '../node_modules/@visual-framework/vf-sass-config/index.scss';
   @import "../node_modules/@visual-framework/vf-back-to-top/vf-back-to-top.scss";
   ```
   you should also install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles

Usage:

```
<vf-back-to-top [type]="'inline'" [text]="'Top'" [scrollToId]="'top'" [example]="true"></vf-back-to-top>
<vf-back-to-top [type]="'floating'" [example]="false"></vf-back-to-top>
```

### React

vf-back-to-top now has React support which has been tested on react version 18.2.0

1. install `yarn add @visual-framework/vf-back-to-top`
2. import in the JS file where you want to include this component
   ```
   import VfBackToTop from '@visual-framework/vf-back-to-top/vf-back-to-top.react';

   Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-back-to-top.react.js file from below to your react project and import as per the location.
   ```
3. can be used as
   ```
   <VfBackToTop type="floating" />
   <VfBackToTop type="inline" text="Top" scrollToId="top" example="true" />
   ```
4. add beloow to your  CSS file
   ```
   @import '~@visual-framework/vf-sass-config/index.scss';
   @import '~@visual-framework/vf-back-to-top/vf-back-to-top.css';
   ```
   you should also install and import  [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles

Usage:

```
<VfBackToTop type="floating" />
```

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-back-to-top` with this command.

```
$ yarn add --dev @visual-framework/vf-back-to-top
```

### JS

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfBackToTop } from 'vf-back-to-top/vf-back-to-top';
// Or import directly
// import { vfBackToTop } from '../components/raw/vf-back-to-top/vf-back-to-top.js';
vfBackToTop(); // invoke it
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-back-to-top/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
