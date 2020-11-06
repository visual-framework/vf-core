---
title: 2.3.2 Component updates
subtitle: Minor component updates and bug fixes
date: 2020-11-06 16:00:50
version: 2.3.2
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

{# macros #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

{% endmacro %}

{% macro componentLink(component='vf-xxx') %}[{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/){% endmacro %}
{# endmacros #}

<div class="vf-box vf-box-theme--tertiary vf-box--easy">
<h3 class="vf-box__heading">
This releases {{version}} to the CDN
</h3>
<div class="vf-box__text">

[`https://assets.emblstatic.net/vf/v{{version}}/css/styles.css`](https://assets.emblstatic.net/vf/v{{version}}/css/styles.css) <br/>
[`https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js`](https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js)

As a reminder, the rollup CSS and JS are compilations of many independently versioned components and is likely to contain changes that may disrupt the look of your site. We advise testing. Even better is to build your own CSS rollup from the npm sources, [you can find a guide here]({{ '/building' | url }}).

{#- don't forget to add the latest version to /Users/khawkins/Documents/GitHub/vf-core/tools/vf-component-library/src/site/_data/siteConfig.js -#}

</div>
</div>

This minor update releases more minor component updates that focus on improving visual consistency, eliminating bugs, optimisations and adding minor features.

## New features

{{ notes('vf-google-analytics', '1.0.0', '28b02cf799a1a9b563eeccaf7178927241a37ae7') }}

* Stable release
* Use the more robust "beacon" logging, when available
  * https://developers.google.com/analytics/devguides/collection/analyticsjs/sending-hits
* Feature: track outbound/external links
  * https://github.com/visual-framework/vf-core/issues/1210

{{ notes('vf-link-list', '1.3.0', '72e1bc5ef2c6a264bea9ac3e5caf8960ee2c0570') }}

* makes the `vf-links__heading` optional.

{{ notes('vf-breadcrumbs', '2.0.0', '214848e63cb449d0341bffa7eea8d07bee882dda') }}

* adds `aria-current="location"` to be used for the last item in `vf-breadcrumbs`
* replaces CSS to style `aria-current="location"` and not `:last-of-type`.
* adds text-shadow to `aria-current="location"` to show text a little bolder.

{{ notes('vf-sass-config', '2.2.0', '4e7cada4ca7b91c88dcc30ab2d03810b2f5e3198') }}

* updates `--page-grid-gap` for larger viewports to `2rem` instead of `1.5rem`.
* updates the `embl-grid` small column size from `238px` to `16rem`.

{{ notes('vf-navigation', '2.1.0', 'ac75e1b0ebd426a021f98baa48b11d627360fcfc') }}

* fixes a bug with the `--additional` variant.
* introduces `njk`/`yml` variable look up to determine classnames to use:
  * adds `vf-cluster` only to `--main` variant.
  * replaces `--additional` CSS for full bleed background with `vf-u-fullbleed` class.

## Deprecation

{{ notes('vf-inlay', '2.0.0', '8d47b787638c3a1798c77118d1e7601955aa5ff5') }}

* Deprecated for `vf-grid` or `embl-grid` layouts and classnames.
  * https://github.com/visual-framework/vf-core/pull/1204

## Bug fixes

{{ notes('vf-card', '2.2.1', '456dc6b7b13e0a89d02c7373a37b1a05a757b0dd') }}

* fixes a hover issue if the card has a link and is the `--easy` variant.

{{ notes('vf-cluster', '1.0.1', 'bfad2833663103de15d4414702250faab4bc819c') }}

* fixes a bug where we overspecified the spacing custom property which affected left alignment of `--600` and `--800` variants.

{{ notes('vf-sass-config', '2.2.1', '0d3be66c76fa3738389614bfb8c02ab5b5054e8c') }}

* fixes bug where `--page-grid-gap` wasn't getting it's correct spacing unit because the Sass `map-get` was not interpolated.

{{ notes('vf-hero', '1.7.1', '8d47b787638c3a1798c77118d1e7601955aa5ff5') }}

* removes CSS for 'inlayed' design as no longer in use
  * https://github.com/visual-framework/vf-core/pull/1204

{{ notes('vf-banner', '1.6.1', '8d47b787638c3a1798c77118d1e7601955aa5ff5') }}

* removes CSS for 'inlayed' design as no longer in use
  * https://github.com/visual-framework/vf-core/pull/1204

{{ notes('vf-header', '1.0.4', '8d47b787638c3a1798c77118d1e7601955aa5ff5') }}

* removes CSS for 'inlayed' design as no longer in use
  * https://github.com/visual-framework/vf-core/pull/1204

{{ notes('vf-sass-starter', '0.1.12', '08a1eb84898ff9375239b3893cf50a8e3ca92d40') }}

* dependency bump

{{ notes('embl-logo', '1.1.0', 'e737529a04c99846f5b15544152567aaecbd6064') }}

* removes some unneeded CSS.
* makes the maximum height 3rem (48px).
* makes the logo responsive.
* deprecates `--extreme`.

{{ notes('vf-logo', '1.5.0', 'e737529a04c99846f5b15544152567aaecbd6064') }}

* removes some unneeded CSS.
* deprecates `--extreme` variation.
* makes the maximum height of the logo 3rem (48px).
