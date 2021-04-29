---
title: Component updates and refinements in 2.4.5
subtitle: This release contains a number of fixes and refinements, particularly for vf-form.
date: 2021-01-15 13:30:50
version: 2.4.5
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

In this set of updates you'll find that vf-form has improved UX, vf-grid works better in Internet Explorer 11 and much more. Read on.

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

## Legacy browser support

{{ notes("vf-grid", "1.4.0", "a656c25307a78aabd06e678798730a37915f42fe") }}

* fixes flexbox fallback grid when there are items on two or more rows.
* fixes widths on flexbox fallback grid.

## Form improvements

In [PR 1228](https://github.com/visual-framework/vf-core/pull/1228/) a number of enhancements were made the vf-form user experience and visuals.

While many vf-form child components update to a full 2.0.0 release, updating should be fairly straightforward — mostly involving updates to spacing using vf-stack.

{{ notes("vf-form__form__checkbox", "2.0.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Changes hover/focus interaction.
* Adds inline example.

{{ notes("vf-form__core", "1.1.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Updates example to use stack.
* Includes example of inline radios.

{{ notes("vf-form__helper", "2.0.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Makes the font size larger.
* Changes the red to use the red from the EMBL palette.

{{ notes("vf-form__input", "2.0.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Changes styling of the inputs.
* Changes order of form helpers, error messages, etc.
* Updates example .njk to use stack.

{{ notes("vf-form__item", "2.0.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Changes styling of the inputs.
* Updates CSS to use vf-stack.

{{ notes("vf-form__label", "2.0.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Changes required SVG fill color to red.
* Makes the required SVG half the relative size of the text.

{{ notes("vf-form__radio", "2.0.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Changes hover/focus interaction.
* Adds inline example.

{{ notes("vf-form__select", "2.0.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Adds vf-stack in example code.
* Changes some of the styling to match inputs.

{{ notes("vf-form__textarea", "2.0.0", "59dc0dbf8147adc0d630670e68adc9a577134f86") }}

* Adds vf-stack in example code.
* Changes some of the styling to match inputs.

## Bug fixes and improvements

{{ notes("vf-video-teaser", "2.0.0", "254071224dce4c1c903efb0ab651947a78243526") }}

* Uses `vf-stack` to space component.
* Adds `if` statement for the heading.
* Makes it possible to have more than one teaser.
* Makes the link the whole 'item' like `vf-card`.

{{ notes("vf-section-header", "1.3.2", "91b40e8d2fb2df8cd10b09ef250120e4f1f7ce57") }}

* Removes an extra `}` in the Nunjucks template that was corrupting the html.
* Better handle whitespace.
* https://github.com/visual-framework/vf-core/pull/1317

{{ notes("ebi-header-footer", "2.0.0", "6e32826d24bc9fa10368f6d70dd46ad7208abcd4") }}

* Ensure black bar does not have a margin at the top due to vf-stack.

{{ notes("vf-intro", "1.4.5", "c684e4c125906685ca2e1471170458fe87b57c73") }}

* Move the example content into a default variant to stop it printing out when using `render`.

{{ notes("vf-intro", "1.4.4", "ecac2ec1d0d3c7684b049113649c54db3caa458e") }}

* Fixes a missing vf_intro_subheading vf-intro.njk's context.
* Fixes README.md invalid example syntax.
* https://github.com/visual-framework/vf-core/pull/1326

{{ notes("ebi-header-footer", "2.0.0", "27052e301552b3d175615851e708c827d9364391") }}

* Adds distinct footer, header templates as the header currently has more legacy dependencies.
* Uses the new 2.0 look and feel footer.
* Uses contentHub to load templates.
* https://github.com/visual-framework/vf-core/pull/1316
