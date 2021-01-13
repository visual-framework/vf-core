---
title: 2.3.1 Component updates
subtitle: Minor component updates and bug fixes
date: 2020-10-27 11:20:50
version: 2.3.1
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

{# macros #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

### [{{component}}](https://stable.visual-framework.dev/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

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

{{ notes('vf-intro', '1.4.1', '70fef1893115bf5144398a920ef8c87444d05600') }}

- adds the option to have a nicer styled 'sub-heading'
- introduces the use of `vf-stack` to layout out the vertical stacking of the content
- use `--vf-stack-margin--custom` to align things as required
- removes use of `embl-grid` and lets `vf-intro` roll it's own

{{ notes('embl-logo', '1.0.5', '19c8e14599fa93ec52c4b5c85c1320248357b7a5') }}

- makes a reduction in size for the logos `--extreme` version from 96px to 48px

{{ notes('vf-design-tokens', '3.0.0', 'ea7ebdcdb3aa3bb1ba649e1e1b11a96f36a3e3b4') }}

* We're moving the documentation to the `vf-component-library`
    * https://stable.visual-framework.dev/design-tokens/
* removes all `.njk` documentation files
* hides from Fractal
* removes any other files no longer needed
* update documentation pages for all design tokens used to make use of updated CSS

{{ notes('vf-component-library', '1.0.12', 'ea7ebdcdb3aa3bb1ba649e1e1b11a96f36a3e3b4') }}

* design token documenation now lives in the component libary

## Bug fixes

{{ notes('vf-code-example', '1.2.0', 'a8ffe6e29e8baa8010560a0da6112c448c51f16b') }}

* correct display of `vf-content pre` and `vf-code-example__pre` to:
  * not line break every element
  * correct padding (sass property map name)

{{ notes('vf-core', '2.2.9', '574dae9cf1696a8e90141a932419219a12b8f50a') }}

* fix: avoid build failure on missing .eslintrc.js config in child projects
    * https://github.com/visual-framework/vf-core/pull/1178

## Minor updates

{{ notes('vf-breadcrumbs', '1.0.5', '19c8e14599fa93ec52c4b5c85c1320248357b7a5') }}

- removes the bottom margin
- increases the top margin

{{ notes('vf-global-header', '3.0.1', '19c8e14599fa93ec52c4b5c85c1320248357b7a5') }}

- removes padding
- adds top margin for layout

{{ notes('vf-header', '1.0.3', '19c8e14599fa93ec52c4b5c85c1320248357b7a5') }}

- removes negative margin bottom when `vf-global-header` is a child of `vf-header`

{{ notes('vf-box', '2.2.0', 'aeecb084157102995b9708dea25dc89b85d0f962') }}

- adds internal padding option back

{{ notes('vf-cluster', '2.0.0', 'aeecb084157102995b9708dea25dc89b85d0f962') }}

- replaces all spacing / sizing values with new tokens naming convention

{{ notes('vf-no-js', '1.0.1', 'a8ffe6e29e8baa8010560a0da6112c448c51f16b') }}

* Classify as a utility component

{{ notes('vf-component-generator', '1.0.3', 'a8ffe6e29e8baa8010560a0da6112c448c51f16b') }}

* improve README template

{{ notes('vf-badge', '1.2.1', 'a8ffe6e29e8baa8010560a0da6112c448c51f16b') }}

* README cleanup

{{ notes('vf-u-fullbleed', '1.2.1', 'a8ffe6e29e8baa8010560a0da6112c448c51f16b') }}

* README cleanup

