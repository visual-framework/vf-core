---
title: 2.3.3 Component updates
subtitle: Minor updates and bug fixes
date: 2020-11-24 08:33:50
version: 2.3.3
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

<br/>This minor update brings bug fixes, and a few minor features. It also incorporates improvements from the 2.3.3 release candidates, all of which reflect minor improvements.

- [2.3.3-rc.3 Component updates]({{ '/updates/2020-11-16-component-updates' | url }})
- [2.3.3-rc.1 Component updates]({{ '/updates/2020-11-09-component-updates' | url }})

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

## Minor features

{{ notes("vf-analytics-google", "1.0.3", "af8a35dd794aa9eea72c47ca3b783628611db299") }}

* Add the vfGaTrackInteraction function to the exported members of vf-analytics-google.
  * https://github.com/visual-framework/vf-core/issues/1248

{{ notes("vf-hero", "1.8.0", "33dd9b0c8f9ddf643804b0f5d3d960c6c640d06a") }}

* removes the JavaScript for the `--intense` version due to an issue in Safari 14 and iOS
  * https://github.com/visual-framework/vf-core/pull/1241

## Bug fixes

{{ notes("vf-core", "2.2.12", "bbf00234d6d776233fa70bd28692abbbb0ac7446") }}

* bug: issue where the compiled css location would be incorrectly output in some scenarios
  * https://github.com/visual-framework/vf-core/pull/1245
