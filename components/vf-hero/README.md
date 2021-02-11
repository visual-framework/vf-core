# Hero component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-hero.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-hero)

## About

The `vf-hero` component is to be used as a visual queue and page header. The `vf-hero` can take a kicker, heading, sub-heading, and text content. The text content (`vf-hero__text`) can also be a 'call to action' link which adds the arrow icon.

## Usage

By default the `vf-hero` makes use of the roundels bacground image. To keep the raw struture of the HTML and CSS the same this is applied using a CSS custom property. IE 11 will get the background colour still, but no image. This is progressive enhancement.

The `vf-hero` can take an image (provided by Design) which should be uploaded to [the files site](https://www.embl.org/files) and applied using the custom property available (`--vf-hero--bg-image`).
### Content

- `vf-hero__kicker`:
- `vf-hero__heading`:
- `vf-hero__subheading`:



The basic HTML structure is:

```
<section class="vf-hero | vf-u-fullbleed">

  <div class="vf-hero__content | vf-box | vf-stack vf-stack--400 ">

    <p class="vf-hero__kicker">Structural Biology</p>

    <h2 class="vf-hero__heading">About the Hentze group!</h2>

    <p class="vf-hero__subheading">an example of some ancillary text</p>

    <p class="vf-hero__text">The Hentze group combines biochemical and <a href="#">systems–level approaches</a> to investigate the connections between <a href="#">gene expression</a> and <a href="#">cell metabolism</a>, and their roles in human disease.</p>

  </div>

</section>
```




### CSS Custom Properties

`--vf-hero--bg-image` — this is for the url for the background image. It can either be added, inline if you're writing the HTML, using the `.yml` data source of `vf_hero_image`, or by other needs (a input or upload in WordPress, for example).

`---vf-hero--bg-image-size` — this is to determine the sizing of the background image. As group sites are using the roundel image it needs specific dimensions so that it works. These dimensions are `auto 28.5rem`. We use a fallback here as background images in `vf-hero` should be full bleed by default so the fall back in the CSS is for cover — `var(---vf-hero--bg-image-size, cover)`. For

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
