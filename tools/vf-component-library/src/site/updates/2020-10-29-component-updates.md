---
title: 2.3.1 RC.1 Component updates
subtitle: Minor component updates and bug fixes
date: 2020-10-29 18:00:50
version: 2.3.1-rc.1
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

{# macros #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

### [{{component}}](https://stable.visual-framework.dev/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>




{% endmacro %}

{% macro componentLink(component='vf-xxx') %}[{{component}}](https://stable.visual-framework.dev/components/{{component}}/){% endmacro %}
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

## New features

{{ notes('vf-navigation', '2.0.0', 'a7b32d1741cbc522ddfd97a9d21615bd9069c5c9') }}

* increases font size for `--main`.
* removes all variants of `--main`.
* adds `vf-cluster` to the component for responsive layout
* adds `aria-current="page"` rule and CSS to denote the current page.
* adds `:hover` to links.

{{ notes('vf-masthead', '2.0.0', '7da5e8e9679bd0e4a4656616a6c5eb1349e36202') }}

* updates how `njk` and `yml` variables are named and work.
* tidied up how JavaScript decides on text colour from image.
* renamed `h2` classnames so they're not so specific to its content.
* removes redundant form search CSS
* updated documentation

## Bug fixes

{{ notes('vf-analytics-google', '1.0.0-rc.7', '390cf9d053b8446874ce74d9232835eec721ae57') }}

* Add label to the list of ancestors to look for
  * https://github.com/visual-framework/vf-core/issues/1198
