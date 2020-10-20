---
title: 2.3.0 Component updates
subtitle: Revamped spacing methods, imrpoved analytics tracking, JS linting and many fixes and tweaks.
date: 2020-10-20 10:10:50
version: 2.3.0
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

{# macros #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

{% endmacro %}


{% macro componentLink(component='vf-xxx') %}[{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/){% endmacro %}
{# endmacros #}


<div class="vf-box vf-box-theme--quaternary vf-box--normal">
<h3 class="vf-box__heading">
This releases {{version}} to the CDN
</h3>
<div class="vf-box__text">

- [https://assets.emblstatic.net/vf/v{{version}}/css/styles.css](https://assets.emblstatic.net/vf/v{{version}}/css/styles.css)
- [https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js](https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js)

As a reminder, the rollup CSS and JS are compilations of many independently versioned components and is likely to contain changes that may disrupt the look of your site. We advise testing. Even better is to build your own CSS rollup from the npm sources, [you can find a guide here]({{ '/building' | url }}).

</div>
</div>

## Components with breaking changes

{{ notes('vf-design-tokens', '2.0.0', 'e7e09d66c3f4d6e2d2fe0624abf02301073121ca') }}

- updates all spacing variables to use numbers for sizing.

_(A detailed migration update will be published shortly and link to from here.)_

The following components have also been updated and now require `vf-design-tokens` 2.0.0.

- {{ componentLink('vf-banner') }} 1.6.0
- {{ componentLink('vf-box') }} 2.1.0
- {{ componentLink('vf-button') }} 1.2.0
- {{ componentLink('vf-code-example') }} 1.1.0
- {{ componentLink('vf-content') }} 1.3.0
- {{ componentLink('vf-details') }} 1.1.0
- {{ componentLink('vf-form__fieldset') }} 1.1.0
- {{ componentLink('vf-form__label') }} 1.2.0
- {{ componentLink('vf-form__legend') }} 1.1.0
- {{ componentLink('vf-link-list') }} 1.2.0
- {{ componentLink('vf-logo') }} 1.4.0
- {{ componentLink('vf-masthead') }} 1.2.0
- {{ componentLink('vf-page-header') }} 1.1.0
- {{ componentLink('vf-sass-config') }} 2.1.0
- {{ componentLink('vf-section-header') }} 1.3.0

{{ notes('vf-utility-classes', '2.0.0', 'e7e09d66c3f4d6e2d2fe0624abf02301073121ca') }}

- all utility classes that make use of spacing tokens now use numerical naming.
- updates documentation pages, as needed.
- requires `v2.0.0` of the `vf-design-tokens` package or newer.

{{ notes('vf-divider', '2.0.0', '5633dab3799e320e51e23b786eadf25ffe2723e2') }}

- removes the `grid-column: 1 / -1;` rule
- moves the margin into the `@mixin` available in `vf-sass-config`.
- adds `--vf-divider--margin-block-end` custom property to allow the overriding the block end margin as needed.

{{ notes('vf-sass-config', '2.0.0', '5633dab3799e320e51e23b786eadf25ffe2723e2') }}

- removes the inline margin from the component.
- adds the block end margin an creates a Sass variable for `$margin--block-end`.
- adds `width: 100%;` as it was defaulting to `width: auto;`.

## New components

{{ notes('vf-cluster', '0.0.1', 'a1ba072647a89f61ce093e1db0ebabb004816882') }}

- Initital launch of the component. It is useable but the documentation needs refining.

## Major new features

{{ notes('vf-stack', '1.2.0', 'a1ba072647a89f61ce093e1db0ebabb004816882') }}

- now uses Nunjucks 'blocks' so we can use this layout more programatically.
- hides the defauly Nunjcuks file as it renders what looks like a blank page (because it's waiting for the block content).
- creates separate Nunjucks files to display variants in Fractal.
- updates naming conventions of variables available.
  - introduces `stack__spacing__custom` which will replace `custom_spacing_property` in the `2.0.0` component release.

{{ notes('vf-analytics-google', '1.0.0-rc.6', '41817a91dbb81a60bf4ea2bb72a9c082544c695c') }}

* Track form element interactions
  * https://github.com/visual-framework/vf-core/issues/1161
* Explicit labels can be provided with data attributes: `data-vf-analytics-label="A special label"`
* Code linting
* Avoid logging clicks on non-interactive elements (white space, standard text)
* Reduce likelihood of logging multiple events
* `vfGaIndicateLoaded()` now accepts the options object `vfGaTrackOptions`
* with property `vfGaTrackPageLoad`. `vfGaTrackOptions.vfGaTrackPageLoad` defaults to true. If you set to false, the function will _not_ track the initial page view. Useful if you track the initial page view with JavaScript in your HTML.
  * https://github.com/visual-framework/vf-core/issues/1116
* Track the users network: `vfGaTrackOptions.vfGaTrackNetwork`. As of February 2020 Google Analytics no longer tracks the network name of visitors. A 3rd party tool enables this, follow the setup guide at https://ipmeta.io/instructions (note there is no need to load https://ipmeta.io/plugin.js, this component includes it for you)
  * https://github.com/visual-framework/vf-core/issues/968
* `analyticsTrackInteraction()` is now namespaced

{{ notes('vf-core', '2.2.7', '2c06958d69ea3664e9426952b6550e7fa7d24646') }}

- adds ESLint task and config
  - https://github.com/visual-framework/vf-core/issues/1143
- adds `buildTimeStamp` to `componentInfo` component sass map
  - https://github.com/visual-framework/vf-core/issues/974

{{ notes('vf-hero', '1.7.0', 'b3a7f4398fc1d9ec83291ddda72f78196a6408ee') }}

- makes the padding on `--intense` standardised to our spacing units
- reduces height of all other variants
- currently this is the 'maximum space' the component will get to allow it's content to be readable.

## Bug fixes

{{ notes('vf-component-initialization', '1.0.1', 'bc7aae5f4d394bb907d39e4adfb471da248de474') }}

* Pin dependencies to avoid issue with Fractal bootstrap
  * https://github.com/visual-framework/vf-core/pull/1170

{{ notes('vf-banner', '1.5.1', 'dd4cd070ef0a2eb0b368132629defbe0ee95c0dc') }}

- removes leftover `console.log`

## Minor updates

{{ notes('vf-grid', '1.3.0', 'a1ba072647a89f61ce093e1db0ebabb004816882') }}

- makes the layout something that can now use 'extends' within nunjucks

{{ notes('embl-grid', '2.1.0', 'a1ba072647a89f61ce093e1db0ebabb004816882') }}

- makes the layout something that can now use 'extends' within nunjucks

{{ notes('vf-sass-compilation', '1.0.2', '2c06958d69ea3664e9426952b6550e7fa7d24646') }}

- adds ESLint task and config
  - https://github.com/visual-framework/vf-core/issues/1143

{{ notes('vf-componenet-rollup', '1.2.1', '2b719c9b3fa1f8ab0fe59bfb28076a6d79575596') }}

* adds `buildTimeStamp` from `componentInfo` to Sass template
  * https://github.com/visual-framework/vf-core/issues/974

{{ notes('vf-componenet-generator', '1.0.3', '2b719c9b3fa1f8ab0fe59bfb28076a6d79575596') }}

* adds `buildTimeStamp` from `componentInfo` to Sass template
  * https://github.com/visual-framework/vf-core/issues/974

{{ notes('vf-u-fullbleed', '1.2.0', '5633dab3799e320e51e23b786eadf25ffe2723e2') }}

- adds a CSS custom property for when a component with `vf-u-fullbleed` needs inline margins.

