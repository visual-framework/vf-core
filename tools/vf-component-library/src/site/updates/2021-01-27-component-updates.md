---
title: Component updates and refinements in 2.4.6
subtitle: This release contains a number of fixes and refinements.
date: 2021-01-27 11:26:29
version: 2.4.6
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

In this set of updates you'll find that the `vf-body` is slightly smaller to tie it with our spacing scale, and a bug fix for `vf-hero` integration with `vf-eleventy`.

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

## 📄 Page format improvement

 {{ notes("vf-body", "1.1.0", "e601faef4c0b434e67dcdbe37ea459260a2724d3") }}


* Makes the max-width a factor of 16px.
* adds box-sizing so that the padding doesn't effect the max-width.
* includes a fix for when a `vf-body` is (for some reason) nested inside another `vf-body`

{{ notes("vf-design-tokens", "3.2.0", "e601faef4c0b434e67dcdbe37ea459260a2724d3") }}

 * reduces the maximum layout width token

{{ notes("vf-sass-config", "2.4.0", "e601faef4c0b434e67dcdbe37ea459260a2724d3") }}

* updates the `$global-page-max-width` variable so that it's consistent with the page width across components - set to `80rem`

* Use VF 1.4 JS to load the HTML for the global header.
* Add documentation and example on disabling the 1.4 data protection banner, as you should use the 2.0 data protection banner from the contentHub.

## 🐞 Bug fixes

{{ notes("vf-hero", "2.0.6", "e601faef4c0b434e67dcdbe37ea459260a2724d3") }}

* fixed an issue where `vf_hero_href` had no context option for use in `vf-11ty`.
