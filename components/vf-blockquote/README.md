# Blockquote component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-blockquote.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-blockquote)

## About

The `vf-blockquote` highlights a section that is quoted from an external source.

## Usage

The `vf-blockquote` should be used to highlight texts from external sources like quotes and testimonials. It should be used for more than decorative purposes, ensuring that the text being quoted is relevant to the content of the page and adds value to the content. This component is not optimised for mobile devices.

It should not be confused with a pull quote which highlights a section of text from the same source/page.

Quotes should be as concise as possible. The impact of the blockquote is diminished when it has long texts as this overwhelms the reader.

Provide proper attribution such as the name, source and relevant information to give credibility to the quote. The component allows you to add the image of the person, the name (Which can be linked to a profile or source page) and other attribution details.

The blockquote is designed to be used on a white background, it is advisable to avoid using it on backgrounds with gradients, images or other colours. If the background colour is changed, ensure the contrast ratio between the texts and the background meet accessibility standards.


### When to use

- Quoting external sources such as individuals, experts, publications etc.
- Testimonials and feedback can be highlighted using the `vf-blockquote`.

### When not to use

- Self-quoting or usage as a pull quote should be avoided in the context of the page/content. This component should not be used to highlight a portion of text from the same content.
- `Vf-blockquotes` should not be used solely for decorative purposes, ensuring that the quoted text adds value to the content.

### Accessibility

- This component targets WCAG 2.1 AA accessibility.

### Angular

As of version 1.2.1 vf-blockquote has experimental Angular support.
This package was generated with Angular version 15.2.0 and has been tested on application with Angular version 15.2.0.

1. Install `yarn add @visual-framework/vf-blockquote`
2. Import in your app.module
   ```
   import { VfBlockquoteAngularModule } from '@visual-framework/vf-blockquote/vf-blockquote.angular';

   @NgModule({
     imports: [VfBlockquoteAngularModule, YourOtherModules],
     ...
   })
   ```
3. Can be used as
   ```
   <vf-blockquote [blockquote_text]="'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”'" [blockquote_author]="'Marion Burton'" [blockquote_author_imageurl]="'./assets/vf-icon--avatar.svg'"  [blockquote_author_href]="'#'" [blockquote_author_details]="'Title and other details'"/>
   ```
4. Styling changes

   In angular.json add the following in architect -> build -> options -> assets:
    ```
    {
      "glob": "**/*",
      "input": "./node_modules/@visual-framework/vf-font-plex-mono/assets/IBM-Plex-Mono",
      "output": "./assets/fonts/IBM-Plex-Mono"
    },
    {
      "glob": "**/*",
      "input": "./node_modules/@visual-framework/vf-font-plex-sans/assets/IBM-Plex-Sans",
      "output": "./assets/fonts/IBM-Plex-Sans"
    }
    ```
    You should install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles  and then add below code in your main SCSS file.
    ```
    $vf-font-plex-mono-prefix: '/assets/fonts';
    $vf-font-plex-sans-prefix: '/assets/fonts';
    @import '../node_modules/@visual-framework//vf-sass-starter/index.scss';
    @import "../node_modules/@visual-framework/vf-text/vf-text.scss";
    @import "../node_modules/@visual-framework/vf-profile/vf-profile.scss";
    @import '../node_modules/@visual-framework/vf-blockquote/vf-blockquote.scss';
   ```

5. Usage:

    ```
    <vf-blockquote [blockquote_text]="'“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”'" [blockquote_author]="'Marion Burton'" [blockquote_author_imageurl]="'./assets/vf-icon--avatar.svg'"  [blockquote_author_href]="'#'" [blockquote_author_details]="'Title and other details'"/>
    ```

### React

As of version 1.2.1 vf-blockquote has experimental React support which has been tested on react version 18.2.0

1. Install `yarn add @visual-framework/vf-blockquote`
2. Import in the JS file where you want to include this component
   ```
   import VfBlockquote from '@visual-framework/vf-blockquote/vf-blockquote.react';

   Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-blockquote.react.js file from below to your react project and import as per the location.
   ```
3. Can be used as
   ```
   <VfBlockquote blockquote_text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”" blockquote_author="Marion Burton" blockquote_author_imageurl="vf-icon--avatar.svg" blockquote_author_href="#" blockquote_author_details="Title and other details"/>
   ```
4. Styling changes

   You should install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles and then add below code in your main SCSS file
    ```
    $vf-font-plex-mono-prefix: '~@visual-framework/vf-font-plex-mono/assets';
    $vf-font-plex-sans-prefix: '~@visual-framework/vf-font-plex-sans/assets';

    @import '~@visual-framework//vf-sass-starter/index.scss';
    @import "~@visual-framework/vf-profile/vf-profile.scss";
    @import "~@visual-framework/vf-text/vf-text.scss";
    @import '~@visual-framework/vf-blockquote/vf-blockquote.scss';
    ```

5. Usage:

    ```
    <VfBlockquote blockquote_text="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.”" blockquote_author="Marion Burton" blockquote_author_imageurl="vf-icon--avatar.svg" blockquote_author_href="#" blockquote_author_details="Title and other details"/>
    ```

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-blockquote` with this command.

```
$ yarn add --dev @visual-framework/vf-blockquote
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-blockquote/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
