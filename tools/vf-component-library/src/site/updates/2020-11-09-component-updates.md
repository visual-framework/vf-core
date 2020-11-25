---
title: 2.3.3-rc.1 Component updates
subtitle: Minor updates and bug fixes
date: 2020-11-09 12:33:50
version: 2.3.3-rc.1
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

This minor update brings bug fixes and dependency updates.

## Bug fixes

{{ notes('vf-inlay', '2.0.1', 'f9f91eaaa64c20f8dfa4e2b6ffc2b5dab5c99c40') }}

* Bug: fixes typos in Sass introduced in 2.0.0
  * https://github.com/visual-framework/vf-core/pull/1221

{{ notes('vf-component-initialization', '1.1.0', 'ec611413e0b632633e19e12bb70ef8c6b13a593f') }}

* Updates to Fractal 1.5.0 (for our use this is mostly minor bug fixes)
  * https://github.com/visual-framework/vf-core/pull/1183
