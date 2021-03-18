# The Flag Layout Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-flag.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-flag)

## About

The `vf-flag` layout component is for when you need an image, icon, or other media and text next to each other.

## Usage

The `vf-flag` should, ideally, be used as part of a component with existing components for the media item and body area.

You should use the `vf-flag` layout component when you need to display a media item (avatar, image, logo) next to or after text.

The 'Flag Object', originally created by [Harry Roberts](https://csswizardry.com/2013/05/the-flag-object/) is based on the work [Nicole Sullivan](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) did in creating the 'Media Object'.

The `vf-flag` allows you to determine the vertical alignment of the media and body.

As the layout component is relatively new there are now specific guidelines for when to use or not use the variants of this layout. Simply _be consistent_.

| variant name | description                                                           |
| ------------ | --------------------------------------------------------------------- |
| top          | aligns the media item and body to the top of the layout               |
| middle       | aligns the media item and body to the middle of the layout            |
| bottom       | aligns the media item and body to the bottom of the layout            |
| reversed     | switches the inline spacing *                                          |
| 200          | defines the spacing between the media item and body item as `.5rem`   |
| 400          | defines the spacing between the media item and body item as `1rem`    |
| 500          | defines the spacing between the media item and body item as `1.25rem` |
| 600          | defines the spacing between the media item and body item as `1.5rem`  |
| 800          | defines the spacing between the media item and body item as `2rem`    |
| 1200         | defines the spacing between the media item and body item as `3rem`    |
| 1600         | defines the spacing between the media item and body item as `4rem`    |

<sup>*</sup> The content for this variant needs to be switched so the media item follows the body
## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-flag` with this command.

```
$ yarn add --dev @visual-framework/vf-flag
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-flag/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
