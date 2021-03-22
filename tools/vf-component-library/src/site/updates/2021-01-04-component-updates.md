---
title: Component updates and refinements in 2.4.4
subtitle: This is a refinement release of components that fixes and optimises.
date: 2021-01-04 16:30:50
version: 2.4.4
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

<br/>

{# macros ---> #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

### [{{component}}](https://latest.visual-framework.dev/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

{% endmacro %}

{% macro notesTool(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}
<!-- Tools don't have pages in the component library -->

### [{{component}}](https://github.com/visual-framework/vf-core/tree/develop/tools/{{component}}/#readme) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

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

{#- don't forget to add the latest version to /tools/vf-component-library/src/site/_data/siteConfig.js -#}

</div>
</article><br/>
</section>

## Bug fixes

{{ notes("embl-content-hub-loader", "1.0.8", "56716a36b4cac48d3898936eff4393e10509a5b7") }}

* Fix a bug when vfBanner or vfTabs are not present
  * https://github.com/visual-framework/vf-core/issues/809

## Optimisations

{{ notes("vf-tabs", "1.2.0", "65fad3f6546529ab4bcd9feb5d455b8463b555a0") }}

* Restructures that link between tabs from a sequential relationship to an explicit relationship based off the tab href and panel id.
  * https://github.com/visual-framework/vf-core/issues/1136
* This is a non-breaking change that may be further improved with an optional data-vf-js-tab-id

{{ notesTool("vf-sass-compilation", "1.1.0", "c800ee20dbc7f9d5e2545c0aeee3ac8be16d68b2") }}

* Removes unused `gulp-notify` and `gulp-sourcemaps` dependencies.
  * https://github.com/visual-framework/vf-core/pull/1311
* Remove gulp-cssnano and use builtin dart sass minification.
  * https://github.com/visual-framework/vf-core/pull/1305

{{ notesTool("vf-core", "2.2.15", "7645ffb49d50ca44a202b451aa2dbbb64c474ea5") }}

* Remove gulp-cssnano and use builtin dart sass minification.
  * https://github.com/visual-framework/vf-core/pull/1305
* Write generated CSS sourcemap to output directory.

{{ notesTool("vf-extensions", "1.0.0-rc.1", "77a58364370e3a33a887c1d3110166744481ab28") }}

* Improve Eleventy-Fractal integration to avoid unnecessary Eleventy rebuilds on Sass and JS updates.
  * https://github.com/visual-framework/vf-core/pull/1309


## Fix missing Sass imports

{{ notes("vf-activity-group", "1.0.0-alpha.9", "f60ea064df2a1dd6134c93087aabb703fc70523a") }}

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

{{ notes("vf-font-plex-mono", "1.1.1", "f60ea064df2a1dd6134c93087aabb703fc70523a") }}

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

{{ notes("vf-font-plex-sans", "1.1.1", "f60ea064df2a1dd6134c93087aabb703fc70523a") }}

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

{{ notes("vf-intro", "1.1.1", "f60ea064df2a1dd6134c93087aabb703fc70523a") }}

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

{{ notes("vf-link-list", "1.3.1", "f60ea064df2a1dd6134c93087aabb703fc70523a") }}

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

{{ notes("vf-page-header", "1.1.1", "f60ea064df2a1dd6134c93087aabb703fc70523a") }}

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

{{ notes("vf-section-header", "1.3.1", "f60ea064df2a1dd6134c93087aabb703fc70523a") }}

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

