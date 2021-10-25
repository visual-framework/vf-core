---
title: Announcing rollup release 2.4.8
subtitle: Clarity on extending React support, style linting and a minor fix to vf-card.
date: 2021-03-05 16:26:29
version: 2.4.8
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

{%- import "component-release-links.njk" as releaseLinks -%}

This week's release of components is minor and continue to focus on optimisation.

Our next releases will likely contain [important changes on vf-form elements](https://github.com/visual-framework/vf-core/pull/1408) that will greatly improve the look and usability. We also [expect vf-masthead to be formally deprecated](https://github.com/visual-framework/vf-core/pull/1406).

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

### Continuing work on React support

We've given further consideration on how to best support React. We'll use a dual approach, providing full true React components for complex VF components. For less interactive components we'll continue to consume the precompiled Nunjucks templates.

{{ releaseLinks.notesTool("vf-extensions-react", "0.0.3", "57b76f040149e75e68a9926f1e68edfc646c45a7") }}

* Update readme with refined approach to VF-React support.
  * https://github.com/visual-framework/vf-core/issues/1401
* Fix npm version badge.

---

### Minor visual fix

<img class="vf-figure__image" alt="misaligned text" src="https://user-images.githubusercontent.com/928100/109184416-45cca400-778f-11eb-9f49-895676232e72.png" />

{{ releaseLinks.notes("vf-card", "2.5.2", "6b597ab28fddf3d7dfa9369ecd2316004e14c038") }}

* adds `align-items: start;` to the card so all child align when in a card container.
  * https://github.com/visual-framework/vf-core/issues/1395

---

### Minor CSS error linting and configuration

We're working to revitalize our CSS linter and as part of that we needed to update the stylelinter configuration to remove false positives. We also needed to fix a number of small CSS inconsistencies that had been introduced. A number of components were updated in [pull request #1405](https://github.com/visual-framework/vf-core/pull/1405).

- [embl-grid](https://latest.visual-framework.dev/components/embl-grid/)
- [vf-card](https://latest.visual-framework.dev/components/vf-card/)
- [vf-embed](https://latest.visual-framework.dev/components/vf-embed/)
- [vf-form](https://latest.visual-framework.dev/components/vf-form/vf-form__checkbox/)
- [vf-form](https://latest.visual-framework.dev/components/vf-form/vf-form__radio/)
- [vf-intro](https://latest.visual-framework.dev/components/vf-intro/)
- [vf-masthead](https://latest.visual-framework.dev/components/vf-masthead/)
- [vf-navigation](https://latest.visual-framework.dev/components/vf-navigation/)
- [vf-news](https://latest.visual-framework.dev/components/vf-news-container/)
- [vf-pagination](https://latest.visual-framework.dev/components/vf-pagination/)
- [vf-search](https://latest.visual-framework.dev/components/vf-search-client-side/)

