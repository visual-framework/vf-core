# Banner component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-banner.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-banner)

## About

Informs visitors about important changes or persistent conditions. Use this component if you need to communicate to visitors in a prominent way. Banners are placed at the top of the page or section they apply to, and below the page or section header.

## Usage

- General notice `vf-banner vf-banner--notice`
- In development services `vf-banner vf-banner--phase`
- Info `vf-banner vf-banner--alert vf-banner--info` <small>This replaces `vf-banner--phase`</small>
- Success `vf-banner vf-banner--alert vf-banner--success`
- Alert `vf-banner vf-banner--alert vf-banner--alert`
- Warning `vf-banner vf-banner--alert vf-banner--warning`

<strong>note:</strong> The `vf-banner--alert` variants include the option to dismiss the banner. This is currently a 'bring your own JavaScript' button. To include a close button in the markup you need to make sure you have the variable `banner__dismissable` set to `true`:

```
banner__dismissable: true
```

### JS Documentation for `--modal` variant

Like all JS-enabled components in the Visual Framework, if you wish to use the bundled JS, you need to include JS data attributes, here is an overview of what the options are for the `vf-banner--modal` variant.

- Enable VF JS:
  - data-vf-js-banner
- Banner type:
  - `dismissible`: standard messaging type
  - `blocking`: full screen
  - `persistent`: no close button
  - data-vf-js-banner-state="name_of_type"
- ESC to close:
  - Only works with `blocking` banner state
  - data-vf-js-banner-esc-close=`"y"`
- Button text:
  - Optional, leaving off will not inject a close button
  - data-vf-js-banner-button-text="Accept and close"
- Button theme:
  - Optional, leaving off will default to the secondary theme.
  - primary, secondary, tertiary themes are available
  - data-vf-js-banner-button-theme="primary"
- Cookies:
  - Both are optional, leaving either off will deactivate cookie storage
  - data-vf-js-banner-cookie-name=`"myServiceName"`
  - data-vf-js-banner-cookie-version=`"0.1"` Incrementing this string will invalidate old cookies.
- Extra buttons:
  - data-vf-js-banner-extra-button=`"<a href='#'>Optional button</a><a target='_blank' href='#'>New tab button</a>">` This HTML string will be converted into VF markup for extra buttons. Optional.
- Message:
  - data-vf-js-banner-modal-text: the `.innerHTML` of this element will be used as the markup for the message itself

### Angular

As of version 2.0.0-alpha.0 vf-banner has experimental Angular support.
This package was generated with Angular version 15.2.0 and has been tested on application with Angular version 15.2.0.

1. Install `yarn add @visual-framework/vf-banner`
2. Import in your app.module
   ```
   import { VfBannerAngularModule } from '@visual-framework/vf-banner/vf-banner.angular';

   @NgModule({
     imports: [VfBannerAngularModule, YourOtherModules],
     ...
   })
   ```
3. Can be used as
   ```
   <vf-banner [banner__variant]="'banner__info'" [banner__dismissible]="true" [banner__message]="'Here is some very, <em>very</em> <a class=\'vf-banner__link\' href=\'#\' onclick=\'return false;\'>important information</a>'"></vf-banner>
   ```

   Possible combinations

    | Variable                  | Options           | Default | Release  | Applicable to banner types |
    | ------------------------- | ----------------- | ------- | -------- | -------------------------- |
    | banner__message           |                   |         |          | 'basic'                    |
    | banner__type              |                   | 'basic' | current  | all types                  |
    |                           | 'inline'          |         | current  |                            |
    |                           | 'fixed'           |         | current  |                            |
    |                           | 'top'             |         | current  |                            |
    | banner__variant           | 'banner__info'    |         |          | 'basic'                    |
    |                           | 'banner__warning' |         |          |                            |
    |                           | 'banner__danger'  |         |          |                            |
    |                           | 'banner__success' |         |          |                            |
    | banner__dismissible       | true, false       | false   |          | 'basic'                    |
    | banner__inline_href       |                   |         |          | 'inline', 'top'            |
    | banner__text              |                   |         |          | 'fixed'                    |
    | data_service_id           |                   |         |          | 'fixed'                    |
    | data_protection_version   |                   |         |          | 'fixed'                    |

4. CSS to be added to your styles.scss
   ```
   @import '../node_modules/@visual-framework/vf-sass-config/index.scss';

   ```
   as per your banner of choice add all or some to your styles.scss
   ```
   @import '../node_modules/@visual-framework/vf-banner/vf-banner.scss';
   @import '../node_modules/@visual-framework/vf-banner/vf-banner--phase.scss';
   @import '../node_modules/@visual-framework/vf-banner/vf-banner--alerts.scss';
   @import '../node_modules/@visual-framework/vf-banner/vf-banner--fixed.scss';
   @import '../node_modules/@visual-framework/vf-banner/vf-banner--gdpr.scss';

   ```
   for the 'fixed' and 'top' banner type additionally add below to styles.scss
   ```
   @import "../node_modules/@visual-framework/vf-badge/vf-badge.scss";
   @import '../node_modules/@visual-framework/vf-button/vf-button.scss';
   @import '../node_modules/@visual-framework/vf-grid/vf-grid.scss';

   ```
   you should also install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles

5. Important note on 'fixed' and 'top' variants for Angular:

   For the 'fixed' and 'top' variant to work properly in Angular we need to make sure we follow the below additional steps
   1. Copy the vf-banner.js (from Assets section below) to your src/assets/vf-banner folder.
   2. Comment or remove the  last line "export { vfBanner };" in this copied file.
   3. In the angular.json inside "scripts": [] add the above file reference like -
        "scripts": [
              "src/assets/vf-banner/vf-banner.js"
            ]
   4. Rerun the project if already running.

  Usage:

  ```
  <vf-banner [banner__variant]="'banner__info'" [banner__dismissible]="true" [banner__message]="'Here is some very, <em>very</em> <a class=\'vf-banner__link\' href=\'#\' onclick=\'return false;\'>important information</a>'"></vf-banner>
  ```

### React

As of version 2.0.0-alpha.2 vf-banner has experimental React support which has been tested on react version 18.2.0

1. Install `yarn add @visual-framework/vf-banner`
2. Import in the JS file where you want to include this component
    ```
    import VfBanner from '@visual-framework/vf-banner/vf-banner.react';

    Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-banner.react.js file from below to your react project and import as per the location.
    ```
3. Can be used as
    ```
    <VfBanner banner__variant="banner__info" banner__dismissible="true" banner__message="Here is some very, <em>very</em> <a class='vf-banner__link' href='#' onclick='return false;'>important information</a>"/>
    ```

   Possible combinations

    | Variable                  | Options           | Default | Release  | Applicable to banner types |
    | ------------------------- | ----------------- | ------- | -------- | -------------------------- |
    | banner__message           |                   |         |          | 'basic'                    |
    | banner__type              |                   | 'basic' | current  | all types                  |
    |                           | 'inline'          |         | current  |                            |
    |                           | 'fixed'           |         | current  |                            |
    |                           | 'top'             |         | current  |                            |
    | banner__variant           | 'banner__info'    |         |          | 'basic'                    |
    |                           | 'banner__warning' |         |          |                            |
    |                           | 'banner__danger'  |         |          |                            |
    |                           | 'banner__success' |         |          |                            |
    | banner__dismissible       | true, false       | false   |          | 'basic'                    |
    | banner__inline_href       |                   |         |          | 'inline', 'top'            |
    | banner__text              |                   |         |          | 'fixed'                    |
    | data_service_id           |                   |         |          | 'fixed'                    |
    | data_protection_version   |                   |         |          | 'fixed'                    |

4. CSS to be added to your styles.scss

    You should install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles and then add below code in your main SCSS file

    ```
    $vf-font-plex-mono-prefix: '~@visual-framework/vf-font-plex-mono/assets';
    $vf-font-plex-sans-prefix: '~@visual-framework/vf-font-plex-sans/assets';

    @import '~@visual-framework/vf-box/vf-box.scss';
    @import '~@visual-framework/vf-stack/vf-stack.scss';
    @import '~@visual-framework/vf-u-fullbleed/vf-u-fullbleed.scss';
    ```

    as per your banner of choice add all or some to your styles.scss

    ```
    @import '~@visual-framework/vf-banner/vf-banner.scss';
    @import '~@visual-framework/vf-banner/vf-banner--phase.scss';
    @import '~@visual-framework/vf-banner/vf-banner--alerts.scss';
    @import '~@visual-framework/vf-banner/vf-banner--gdpr.scss';
    ```
    for the 'fixed' and 'top' banner type additionally add below to styles.scss
    ```
    @import '~@visual-framework/vf-banner/vf-banner--fixed.scss';
    @import "~@visual-framework/vf-badge/vf-badge.scss";
    @import '~@visual-framework/vf-button/vf-button.scss';
    @import '~@visual-framework/vf-grid/vf-grid.scss';
    ```
    Usage:

    ```
    <VfBanner banner__variant="banner__info" banner__dismissible="true" banner__message="Here is some very, <em>very</em> <a class='vf-banner__link' href='#' onclick='return false;'>important information</a>"/>
    ```

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `primer-buttons` with this command.

```
$ yarn add --dev @visual-framework/vf-banner
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-banner/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
