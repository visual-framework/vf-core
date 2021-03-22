# Hero component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-hero.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-hero)

## About

The `vf-hero` component is to be used as a visual queue and page header. The `vf-hero` can take a kicker, heading, sub-heading, text content, and a 'call to action' link as needed.

## Usage

By default the `vf-hero` makes use of the roundels bacground image. To keep the raw struture of the HTML and CSS the same this is applied using a CSS custom property.

The `vf-hero` can take an image (provided by Design) which should be uploaded to [the files site](https://www.embl.org/files) and applied using the custom property available (`--vf-hero--bg-image`).

IE 11 will get the background colour and the roundels image, it will not paint a different background image if added. This is progressive enhancement.
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
