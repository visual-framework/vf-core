# vf-embed Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-embed.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-embed)

## Usage

The `vf-embed` component can currently give two different aspect ratios by adding a class variant. You can also define a max-width for the embed if needed.


### Nunjucks Props

To avoid any mistyping, forgetfulness, and to aid in future proofing the component. We are using 'pseudo props' in nunjucks to determine which CSS selectors to use. All props do nothing unless included in your data for the component.

#### Props available


- `vf_embed_max_width`: required a number and CSS unit to give `vf-embed` as maximum width. This number is applied to the CSS custom property `--vf-embed-max-width`.
- `vf_embed_variant_16x9`: if set to true (`vf_embed_variant_16x9: true`) it will apply the class selector `vf-embed--16x9` to `vf-embed`.
- `vf_embed_variant_4x3`: if set to true (`vf_embed_variant_4x3: true`) it will apply the class selector `vf-embed--4x3` to `vf-embed`.
- `vf_embed_variant_custom`: if set to true ('vf_embed_variant_custom: true') it will apply the class selector `vf-embed--custom-ratio` to `vf-embed`. When this is applied the two CSS custom properties `--vf-embed-custom-ratio-x` and `--vf-embed-custom-ratio-y` can be used to define the X and Y ratio.


### Aspect Ratios

Aspect Ratios available are 16x9 and 4x3 or one defined using CSS custom properties.

#### Class Variants

- `vf-embed--16x9` for embedable content that is has an aspect ratio of 16x9.
- `vf-embed--4x3` for embedable content that is has an aspect ratio of 4x3.
- `vf-embed--custom-ratio` for embedable content that requires a unique aspect ratio.


#### Custom Ratios

If you use `vf-embed--custom-ratio` you will need to set the X and Y ratio using CSS Custom Properties.

The CSS Custom Properties available when using `vf-embed--custom-ratio` are:

- `--vf-embed-custom-ratio-x` for the X value.
- `--vf-embed-custom-ratio-y` for the Y value.

For example. If you need an aspect ratio of 11x6 your HTML output could look like:

```
<div class="vf-embed vf-embed--custom-ratio" style="--vf-embed-custom-ratio-x: 11; --vf-embed-custom-ratio-y: 6">
  <!-- embedded content goes here -->
</div>
```

### Max Width

You can also set a max width for the `vf-emded`. If you do this in the nunjucks file with the key of `maxWidth:` the nunjucks template will output an inline style onto the `vf-embed`. You can add this however fits best your product (in the `:root`, in a stylesheet, etc).

If you do not set a `--vf-embed-max-width` value then the component is set to a maximum width of `100%`.

For example. If you need a `vf-embed` with the aspect ratio of 16x9 but with a maximum width of 400px your HTML out could look like:

```
<div class="vf-embed vf-embed--16x9" style="--vf-embed-max-width: 400px">
  <!-- embedded content goes here -->
</div>
```

## Install

This repository is distributed with [npm][https://www.npmjs.com/]. After [installing npm][https://www.npmjs.com/get-npm] and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-embed` with this command.

```
$ yarn add --dev @visual-framework/vf-embed
```

## JS

If your component uses JS:

You should import this component in `./components/vf-component-rollup/scripts.js` or your other JS process:

```js
import { vfcomponentName } from 'vf-embed/vf-embed';
// Or import directly
// import { vfcomponentName } from '../components/raw/vf-embed/vf-embed.js';
vfcomponentName(); // if needed, invoke it
```

## Sass/CSS

If your component uses Sass:

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-embed/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
