# Hero component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-hero.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-hero)

## About

The `vf-hero` component is to be used as a visual queue and page header. As needed, it can take a kicker, heading, sub-heading, text content, and a 'call to action' link.

## Usage

By default the `vf-hero` makes use of the roundels background image. To keep the raw structure of the HTML and CSS the same this is applied using a CSS custom property. The default variant is equivalent to `vf-hero--1200`.

### Hero background images

You can bring your own image to use with the vf-hero.

- Size: recommended image size for a typical hero is 3000 by 1000 pixels.
- Positioning: people and other important imagery should be placed on the right side. The image will, by default, vertically centre and align to the right side.
- Imagery: most of the image should be abstract as to not visually compete with the text in the hero box.
- Text: do not use raster text as part of the image.
- Consult design: the image should be made in consultation with your organisation's design team for brand alignment and input on how best to create it.

### Content

| Content name | Usage                                                                          | `.yml` key           |
| ------------ | ------------------------------------------------------------------------------ | -------------------- |
| Heading      | To be used for the heading of the page.                                                                               | `vf_hero_heading`    |
| Heading HREF | To be used as a 'return to home' link for the micro site. | `vf_hero_heading_href` |
| Subheading   | Optional content to be used along with the Heading for a terse explainer.                                                                               | `vf_hero_subheading` |
| Kicker       | Optional content that helps define the context of overall content of the page. | `vf_hero_kicker`     |
| Text         | Optional content that can help explain the page content in a brief paragraph.                                                                               | `vf_hero_text`       |
| Link Text    | The text for the hero 'call to action' link. Only works if there is associated Link HREF.                                                                                | `vf_hero_link_text`  |
| Link HREF    |  The url that the Link Text would be pointing to and opens in the same browser tab. This only works if there is associated Link Text                                                                              | `vf_hero_link_href`  |
| Spacing      | If added spacing can be any of these values only : 200, 400, 500, 600, 800, 1200, 1600   | 'spacing'


| Content name | `.yml` key           | CSS classname         |
| ------------ | -------------------- | --------------------- |
| Kicker       | `vf_hero_kicker`     | `vf-hero__kicker`     |
| Heading      | `vf_hero_heading`    | `vf-hero__heading`    |
| Heading HREF | `vf_hero_heading_href`    | `vf-hero__heading_link`    |
| Subheading   | `vf_hero_subheading` | `vf-hero__subheading` |
| Text         | `vf_hero_text`       | `vf-hero__text`       |
| Link Text    | `vf_hero_link_text`  | `vf-hero__link`       |
| Link HREF    | `vf_hero_link_href`  | n/a                   |

### CSS Custom Properties

`--vf-hero--bg-image` — this is for the url for the background image. It can either be added, inline if you're writing the HTML, using the `.yml` data source of `vf_hero_image`, or by other needs (a input or upload in WordPress, for example).

`---vf-hero--bg-image-size` — this is to determine the sizing of the background image. As group sites are using the roundel image it needs specific dimensions so that it works. These dimensions are `auto 28.5rem`. We use a fallback here as background images in `vf-hero` should be full bleed by default so the fall back in the CSS is for cover — `var(---vf-hero--bg-image-size, cover)`.

### Internet Explorer support

IE 11 will get the background colour and the "roundels" image. Under the approach of progressive enhancement, IE 11 will not paint a different background image if added.

### EMBL usage

For EMBL sites, the `vf-hero` can take an image (provided by Design) which should be uploaded to [the files site](https://www.embl.org/files) and applied using the custom property available (`--vf-hero--bg-image`).

### Angular

As of version 4.0.0-alpha.0 vf-hero has experimental Angular support.
This package was generated with Angular version 15.2.0 and has been tested on application with Angular version 15.2.0.

1. install `yarn add @visual-framework/vf-hero`
2. import in your app.module
   ```
   import { VfHeroAngularModule } from '@visual-framework/vf-hero/vf-hero.angular';
   @NgModule({
     imports: [VfHeroAngularModule, YourOtherModules],
     ...
   })
   ```
3. can be used as
   ```
   <vf-hero
    [vf_hero_kicker]="'<a href=JavaScript:Void(0);>VF Hamburg</a> | Structural Biology'"
    [vf_hero_heading]="'About the Hentze group!'"
    [vf_hero_heading_href]="'JavaScript:Void(0);'"
    [vf_hero_subheading]="'an example of some ancillary text'"
    [vf_hero_text]="['The Hentze group combines biochemical and <a href=JavaScript:Void(0);>systems–level approaches</a> to investigate the connections between <a href=JavaScript:Void(0);>gene expression</a> and <a href=JavaScript:Void(0);>cell metabolism</a>, and their roles in human disease.']"
    [vf_hero_link_text]="'Learn more'"
    [vf_hero_link_href]="'JavaScript:Void(0);'"
    [vf_hero_image_size]="'auto 28.5rem'">
    </vf-hero>
   ```
4. add to your styles.scss
   ```
   @import '../node_modules/@visual-framework/vf-sass-config/index.scss';
   @import '../node_modules/@visual-framework/vf-box/vf-box.scss';
   @import '../node_modules/@visual-framework/vf-stack/vf-stack.scss';
   @import '../node_modules/@visual-framework/vf-u-fullbleed/vf-u-fullbleed.scss';
   @import '../node_modules/@visual-framework/vf-hero/vf-hero.scss';
   ```
   you should also install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles

Usage:

```
  <vf-hero
  [vf_hero_kicker]="'<a href=JavaScript:Void(0);>VF Hamburg</a> | Structural Biology'"
  [vf_hero_heading]="'About the Hentze group!'"
  [vf_hero_heading_href]="'JavaScript:Void(0);'"
  [vf_hero_subheading]="'an example of some ancillary text'"
  [vf_hero_text]="['The Hentze group combines biochemical and <a href=JavaScript:Void(0);>systems–level approaches</a> to investigate the connections between <a href=JavaScript:Void(0);>gene expression</a> and <a href=JavaScript:Void(0);>cell metabolism</a>, and their roles in human disease.']"
  [vf_hero_link_text]="'Learn more'"
  [vf_hero_link_href]="'JavaScript:Void(0);'"
  [vf_hero_image_size]="'auto 28.5rem'">
  </vf-hero>
```

### React

As of version 4.0.0-alpha.2 vf-hero has experimental React support which has been tested on react version 18.2.0

1. Install `yarn add @visual-framework/vf-hero`
2. Import in the JS file where you want to include this component
   ```
   import VfHero from '@visual-framework/vf-hero/vf-hero.react';

   Make sure you have the jsx support enabled with babel. Alternatively, you can also copy the vf-hero.react.js file from below to your react project and import as per the location.
   ```
3. Can be used as
   ```
   <VfHero
      id="0"
      vf_hero_kicker="<a href=JavaScript:Void(0);>VF Hamburg</a> | Structural Biology"
      vf_hero_heading="About the Hentze group!"
      vf_hero_heading_href="'JavaScript:Void(0);'"
      vf_hero_subheading="an example of some ancillary text"
      vf_hero_text={["The Hentze group combines biochemical and <a href=#>systems–level approaches</a> to investigate the connections between <a href=#>gene expression</a> and <a href=#>cell metabolism</a>, and their roles in human disease."]}
      vf_hero_link_text="Learn more"
      vf_hero_link_href="'JavaScript:Void(0);'"
      vf_hero_image_size="auto 28.5rem"
    />
   ```
4. Styling changes

   You should install [vf-sass-starter](https://stable.visual-framework.dev/components/vf-sass-starter) for the styles and then add below code in your main SCSS file
    ```
    $vf-font-plex-mono-prefix: '~@visual-framework/vf-font-plex-mono/assets';
    $vf-font-plex-sans-prefix: '~@visual-framework/vf-font-plex-sans/assets';

    @import '~@visual-framework/vf-box/vf-box.scss';
    @import '~@visual-framework/vf-stack/vf-stack.scss';
    @import '~@visual-framework/vf-u-fullbleed/vf-u-fullbleed.scss';
    @import '~@visual-framework/vf-hero/vf-hero.scss';
    ```

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-hero` with this command.

```
$ yarn add --dev @visual-framework/vf-hero
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-hero/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
