---
title: Recent releases, 2.4.0 CSS, JS rollup release
subtitle: New versions of vf-card, vf-hero and minor updates and bug fixes
date: 2020-11-27 18:33:50
version: 2.4.0
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

<br/>This release of the prebuilt CSS and JS includes two major new versions of the `vf-hero` and `vf-card` components along with other optimisations and bug fixes. Read on for details.

{# macros ---> #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

### [{{component}}](https://latest.visual-framework.dev/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

{% endmacro %}

{% macro componentLink(component='vf-xxx') %}[{{component}}](https://latest.visual-framework.dev/components/{{component}}/){% endmacro %}
{# endmacros ---/ #}

<section class="vf-u-fullbleed vf-u-background-color-ui--grey--light"><br/>
<article class="vf-box vf-box-theme--primary vf-box--easy">
<h3 class="vf-box__heading">
This releases {{version}} to the CDN
</h3>
<div class="vf-box__text">

[`https://assets.emblstatic.net/vf/v{{version}}/css/styles.css`](https://assets.emblstatic.net/vf/v{{version}}/css/styles.css) <br/>
[`https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js`](https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js)

As a reminder, the rollup CSS and JS are compilations of many independently versioned components and is likely to contain changes that may disrupt the look of your site. We advise testing. Even better is to build your own CSS rollup from the npm sources, [you can find a guide here]({{ '/building' | url }}).

{#- don't forget to add the latest version to ./tools/vf-component-library/src/site/_data/siteConfig.js -#}

</div>
</article><br/>
</section>

## Major refinements and breaking changes


{{ notes("vf-hero", "2.0.0", "88512583efb2b577a1f15a9426d667b9ecdf560a") }}

<figure class="vf-figure">
  <img class="vf-figure__image" src="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/vf-hero-before-after.jpg" alt="vf-hero before and after" loading="lazy">
  <figcaption class="vf-figure__caption">After on the left. The vf-hero has been tightened up. The syntax and behaviour have also been matured.</figcaption>
</figure>

* introduces new naming convention for design variants
  * `--inverted`: that inverts the foreground and background colours
  * `--flush`: pulls the `vf-hero__content` to the bottom of the `vf-hero`
  * `--offset`: pulls the `vf-hero__content` below the `vf-hero` container
  * `--centered`: centres the `vf-hero__content` component
  * `--block`: makes the `vf-hero__content` bleed all the way ot the left of the page
  * `--striped`: inverts the `vf-hero__text` to that of what's set in `vf-hero__content`
  * `--800`, `--1200`, and `--1600` spacing variants
* replaces `vf-hero-theme--` with `vf-hero--` for the `primary`, `secondary`, and `tertiary` variants
* removes the 'Mortal Kombat' naming convention
* reduces visible options of the new `vf-hero`
* older versions degrade gracefully to the default variant
* deprecates the `--intense` variant

<a href="https://github.com/visual-framework/vf-core/pull/1219" class="vf-button vf-button--primary vf-button--sm">Discussion and PR</a> <a href="{{'/components/vf-hero' | url }}" class="vf-button vf-button--tertiary vf-button--sm">See the component</a>


{{ notes("vf-card", "2.3.0", "65e9dcd51f800dbb5d82ca971289ca3e95ccadf6") }}

<figure class="vf-figure">
  <img class="vf-figure__image" src="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/vf-card-before-after.jpg" alt="vf-card before and after" loading="lazy">
  <figcaption class="vf-figure__caption">After on the left. Similar to the vf-hero update, vf-card has been visually tightened up but without a breaking change. .</figcaption>
</figure>

* adds new `--bordered` and `--striped` design variants
* added `vf-stack` to the `vf-card__content` element to determine spacing
* allows for the lack of `vf-stack` for older components
* started the deprecation of the 'Mortal Kombat' variants, initially by hiding them in vf-core
* introduced `newTheme` so the 'Mortal Kombat' variants can live side-by-side with news versions for now
  * the `newTheme` moves us back to the 'primary' being the embl green, the secondary the embl blue, etc
  * we now remove the `-theme` part of the css class moving forward as it's cleaner, easier to read, and states the same thing without it
* created theme variants of the new design variants (these are hidden, and should not be used)

<a href="https://github.com/visual-framework/vf-core/pull/1255" class="vf-button vf-button--primary vf-button--sm">Discussion and PR</a> <a href="{{'/components/vf-card' | url }}" class="vf-button vf-button--tertiary vf-button--sm">See the component</a>


### vf-frctl-theme <span class="vf-badge">deprecated</span> <a href="https://github.com/visual-framework/vf-core/commit/a6e14b2643c6434e75dc339d1f99fec3c7ea90ff" class="vf-badge">git diff</a>

<figure class="vf-figure">
  <img class="vf-figure__image" src="https://acxngcvroo.cloudimg.io/v7/https://www.embl.org/files/wp-content/uploads/vf-back-to-fractal-theme.jpg" alt="back to fractal's default theme" loading="lazy">
  <figcaption class="vf-figure__caption">We're now using the default Fractal theme for development.</figcaption>
</figure>

When developing directly in `./tools/vf-core` running `gulp vf-dev` will start the [Fractal](https://fractal.build/) component library interface. Previously this was also the public-facing website for the Visual Framework, however we now use this 11ty-based website.

So the `vf-frctl-theme` had become an ongoing technical debt without much upside. It has now been deprecated and running `gulp vf-dev` will use Fractal's default Mandlebrot theme.

<a href="https://github.com/visual-framework/vf-core/pull/1262" class="vf-button vf-button--primary vf-button--sm">Discussion and PR</a>

## Minor features

{{ notes("vf-sass-config", "2.3.0", "4fade0dd5fe521cc6d6be99b49ec3158aae83bee") }}

* introduces a `space` Sass function to save the keystrokes
  * instead of typing `map-get($vf-spacing-map, vf-spacing--400)` you can write `spacing(400)` for the same result
  * https://github.com/visual-framework/vf-core/pull/1258
* I've added this terse naming of the function for `set-color` and `set-ui-color` to be something like `color(green)` instead of `set-color(vf-color--green)`. The old way still works
* fixes import order of `vf-global-custom-properties.scss`
  * https://github.com/visual-framework/vf-core/pull/1263

{{ notes("vf-show-more", "1.1.0", "e2f2e5e7bb4dc396d19f7f1e1694f792280f1337") }}

* drops dynamic css stylesheet in favour of a specific `.vf-show-more__item-overflow` class
* support more than one vf-show-more on a page
  * https://github.com/visual-framework/vf-core/issues/1243

{{ notes("vf-design-tokens", "3.1.0", "88512583efb2b577a1f15a9426d667b9ecdf560a") }}

* adds `--1600` (`4rem`) spacing token

{{ notes("vf-summary", "1.4.0", "34c61bd716f5d9817199885f4beec9799dd5c6f0") }}

* makes the title of summary a little larger
* reduces margin a little on news
* removes the padding from events

{{ notes("vf-box", "2.3.0", "f6f5c05d249d8ff226955ca610cfd770188e32d5") }}

* updates font size for title/heading
* makes sure the text is black inside the `--easy` variant

## Bug fixes

{{ notes("vf-u-fullbleed", "1.2.2", "88512583efb2b577a1f15a9426d667b9ecdf560a") }}

* adds fallbacks for CSS that relied on CSS custom properties

{{ notes("embl-breadcrumbs-lookup", "1.0.2", "c7aabc7e1327081ada2bf4165d519c199fddec18") }}

* adds aria role detection of current page

{{ notes("vf-breadcrumbs", "2.0.1", "c7aabc7e1327081ada2bf4165d519c199fddec18") }}

* removes `>` from related crumbs

{{ notes("vf-sass-config", "2.3.1", "9ed8f53f331a3cc577fa1df905191ca226ab5b52") }}

* fixes bug in --page-grid-gap printing Sass function in CSS

{{ notes("vf-hero", "2.0.1", "dce6a149d97918538dc9a233bc9acf657bb86302") }}

* adds the option to add an url to `vf-hero__heading` with nunjucks/yaml
  * gives the element a classname

{{ notes("vf-hero", "2.0.2", "c0a6a36028320148cb9d4e475158dd955ef921e0") }}

* adds a width of `max-content` to the `__content` part of the component so short titles don't look silly

{{ notes("vf-card", "2.3.1", "88d26e9cc28b191acb1315e63485a0ed9d7c63f0") }}

* issue with margin-bottom still in place when using `vf-stack` with `vf-card__content`



