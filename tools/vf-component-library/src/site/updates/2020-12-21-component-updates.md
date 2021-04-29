---
title: Component updates and refinements in 2.4.3
subtitle: This release some polishing to spacing and presentation.
date: 2020-12-21 11:30:50
version: 2.4.3
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

## New features

{{ notes("vf-figure", "2.0.0", "bda929293b0ded234e66cbe67975ca119f16c1a6") }}

* Removed `width: 100%` from the `.vf-figure__image` class.
* Added `display: block` to the `.vf-figure__image` class.
* Removed CSS for the width when the `vf-figure` is using floats.

{{ notes("vf-global-header", "3.1.0", "ddbf0fa3f0189f225fe20dc6d631f6f6885fa752") }}

* updates to expect `vf-stack` on the body.
* removes the backwards compatibility as we're at v3.x.
* tidies up and removes some unrequited CSS.

{{ notes("vf-navigation", "2.2.0", "ddbf0fa3f0189f225fe20dc6d631f6f6885fa752") }}

* removes bottom margin for `--main`.
* replaces padding with margin for `--main`.
* duplicates the top margin for `--main` because sometimes it's out of the `vf-stack` flow.

{{ notes("vf-news-container", "1.0.0-rc.1", "02822d389b69957bb6e4c1c7a38b28717de966a5") }}

* Adds vf-news-container--featured
  * https://github.com/visual-framework/vf-core/issues/1036

## Minor component updates

{{ notes("vf-summary", "1.4.1", "02822d389b69957bb6e4c1c7a38b28717de966a5") }}

* Fix image URL in vf-summary--news-has-image.

{{ notes("vf-component-generator", "1.1.2", "2b963823777fff92ac89ef29a4fc857aab95f32a") }}

* Add changelog style guidance.
  * https://github.com/visual-framework/vf-core/issues/1286
