---
title: 2.3.3-rc.3 Component updates
subtitle: Minor updates and bug fixes
date: 2020-11-16 15:33:50
version: 2.3.3-rc.3
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

{# macros #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

### [{{component}}](https://latest.visual-framework.dev/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

{% endmacro %}

{% macro componentLink(component='vf-xxx') %}[{{component}}](https://latest.visual-framework.dev/components/{{component}}/){% endmacro %}
{# endmacros #}

<div class="vf-box vf-box-theme--tertiary vf-box--easy">
<h3 class="vf-box__heading">
This releases {{version}} to the CDN
</h3>
<div class="vf-box__text">

[`https://assets.emblstatic.net/vf/v{{version}}/css/styles.css`](https://assets.emblstatic.net/vf/v{{version}}/css/styles.css) <br/>
[`https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js`](https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js)

As a reminder, the rollup CSS and JS are compilations of many independently versioned components and is likely to contain changes that may disrupt the look of your site. We advise testing. Even better is to build your own CSS rollup from the npm sources, [you can find a guide here]({{ '/building' | url }}).

{#- don't forget to add the latest version to ./tools/vf-component-library/src/site/_data/siteConfig.js -#}

</div>
</div>

<br/>This minor update brings bug fixes, JS linting, dependency updates and a few minor features.

## Minor features

{{ notes("vf-analytics-google", "1.0.2", "45be4619e4ce49f0ed3106b6c2c04603d265ca10") }}

* Improves link name detection
  * `data-vf-analytics-label` supersedes any derived value calculation
  * image alt text support
* Bug: Issue when tracking image interactions
  * https://github.com/visual-framework/vf-core/issues/887

## Bug fixes

{{ notes("vf-intro", "1.4.2", "c27fa46e01d9826dd9cf9e93d14597bf0dbfb5de") }}

* bug: don't apply styling to `a` elements that have a `.vf-*` class

{{ notes("vf-banner", "1.6.3", "e759f09ad2c649adc4b16e9efb0380da028ff7c7") }}

* Bug: For fixed banners, avoid interpreting numbers as strings and blowing out the page padding

{{ notes("vf-show-more", "1.0.1", "e759f09ad2c649adc4b16e9efb0380da028ff7c7") }}

* Bug: Warning message for "pagerSize" was showing in all scenarios

## JS linting

{{ notes("embl-breadcrumbs-lookup", "1.0.1", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("embl-conditional-edit", "1.0.3", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("embl-content-hub-loader", "1.0.7", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("embl-notifications", "1.0.1", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("vf-analytics-google", "1.0.1", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("vf-banner", "1.6.2", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("vf-location-nearest", "1.0.0", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("vf-search-client-side", "1.0.0", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("vf-show-more", "1.0.0", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("vf-tabs", "1.1.2", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}
{{ notes("vf-tree", "1.0.1", "753f8ff2a1f04bfed18d61e056d4e11e1dd507af") }}

