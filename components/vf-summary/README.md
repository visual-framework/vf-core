# Summary component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-summary.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-summary)

## About

Summaries in the form of text, headlines and often imagery for a range of types of content, including: articles, jobs, news and people profiles.

<h3>The <code>vf-summary--profile</code> component has been <span style="color: rgb(228, 0, 70);">deprecated</span>. Please use the <a class="vf-link" href="/components/detail/vf-profile"><code>vf-profile</code></a> component.</h3>

## Usage

### Publications Summary

The `vf-summary--publication` can be nested inside a vf-box where it takes the vf-box colours.

If the `vf-summary__author` list is truncated to a certain number of authors you will need to add vf-u-text--et-al to the `<p>` - `<p class="vf-summary__author | vf-u-text--et-al">` - for it to add et al to the end of the list.

At times you might want to use an image for purely decorative reasons. For example an abstract graphic to go alongside the text then you should label, if using nunjcuks and yaml, `summary__image_alt: decorative`. This will make sure the image `alt` text is empty (`alt=""`) and add `role="presentation"` to the `img` element.

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-summary` with this command.

```
$ yarn add --dev @visual-framework/vf-summary
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-summary/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
