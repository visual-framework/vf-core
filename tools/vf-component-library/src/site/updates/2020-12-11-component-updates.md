---
title: Further React template support, refinements in 2.4.2
subtitle: This release brings no CSS changes and instead follows on this week's initial React support in 2.4.1.
date: 2020-12-11 19:33:50
version: 2.4.2
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

## Improved React support

We've already learned a few things from the [initial React proof-of-concept release]({{'/updates/2020-12-09-component-updates/' | url }}). These updates improve Nunjucks support in React and optimise the build process and documentation.

{{ notesTool("vf-extensions-react", "0.0.2", "f9e59a3c8e499bab780abdc33bf881153b656a3e") }}

* Use react-dom-fragment to return HTML fragments.
  * https://github.com/visual-framework/vf-core/pull/1291
* Removes no longer needed raw-loader
* Add vf-extensions-react.js for common Nunjucks environment
* VF Nunjucks extensions support

{{ notesTool("vf-component-generator", "1.1.1", "f9e59a3c8e499bab780abdc33bf881153b656a3e") }}

* Use react-dom-fragment to return HTML fragments.
  * https://github.com/visual-framework/vf-core/pull/1291

{{ notes("vf-button", "1.3.1", "f9e59a3c8e499bab780abdc33bf881153b656a3e") }}

* React: Use react-dom-fragment to return HTML fragments.
  * https://github.com/visual-framework/vf-core/pull/1291

{{ notes("vf-card", "2.3.3", "f9e59a3c8e499bab780abdc33bf881153b656a3e") }}

* React: Use react-dom-fragment to return HTML fragments.
  * https://github.com/visual-framework/vf-core/pull/1291
