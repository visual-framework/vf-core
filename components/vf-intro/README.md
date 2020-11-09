# Intro component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-intro.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-intro)

## About

The `vf-intro` component is to be used as the main title of a page or section where you need to include some additional text in a larger typeface. The `vf-hero` can take a heading, lede text, and paragraph(s) of text. It can also include a badge on the heading which can be a link.

## Usage

### Use in `vf-eleventy`

To use this component in a `vf-eleventy` project you will need to set the context for the content to pass through from the nunjucks file associated yaml file and include it.

<code>&lcub;% set context == UniqueContextName %&rcub;
<br>
&lcub;% include containers.vf_intro %&rcub;
</code>

**note:** due to how nunjucks handles special characters we have remove the `@` at sign and need to replace the `-` hyphen used for an `_` underscore to `&lcub;% include &rcub;` a component or container. As shown above instead of writing something like `&lcub;% include contaienrs.@vf-intro &rcub;` we need to type `&lcub;% include vf_intro &rcub;`

You may wish to make use of some of your projects side specifc data or content. To do this you will need to set the relevant items of content before you <code>&lcub;% include ... %&rcub;</code> the component. Note: If you also declare this content in the `.yml` file it will take precedence over the inlined code.

For example. If you wanted to make use of your projects `siteConfig` information. You can write out the inclusion of the component in you pages `.njk` file like so:

<code>&lcub;% set context == UniqueContextName %&rcub;
<br>
&lcub;% set vf_intro_heading == siteConfig.siteInformation.short_description %&rcub;
<br>
&lcub;% include containers.intro %&rcub;
</code>

### Content

The `vf-intro` allows for a variet of text.

| content type | variable                | description |
| ------------ | ----------------------- | ----------- |
| text         | `vf_intro_heading`      |             |
| text         | `vf_intro_phase`        |             |
| url          | `vf_intro_heading_href` |             |
| text         | `vf_intro_lede`         |             |
| group        | `vf_intro_text`         |             |
| text         | `intro_text`            |             |

<br/>The `vf-intro_phase`, `vf_intro_heading_href`, `vf_intro_lede`, `vf_intro_text`, and `intro_text` are all optional.

To include `intro_text` you will have to nest and indent the content inside/underneath the `vf_intro_text` in the `.yml` file, like:

```text
vf_intro_text:
  - This is an example of intro text paragraph.
  - This is an example of a second intro text paragraph.
```
## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-profile` with this command.

```
$ yarn add --dev @visual-framework/vf-intro
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-intro/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
