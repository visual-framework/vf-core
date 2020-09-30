---
title: 2.2.7 Component updates
subtitle: Minor component updates and bug fixes.
date: 2020-09-30 13:24:50
version: 2.2.7
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

This releases {{version}} to the CDN:

- [https://assets.emblstatic.net/vf/v{{version}}/css/styles.css](https://assets.emblstatic.net/vf/v{{version}}/css/styles.css)
- [https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js](https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js)

---

{% set component = "vf-banner" %}
{% set componentVersion = "1.5.0" %}
{% set commitId = "5f4f29e0b5566dbbcc73ff28d99e4f430a14e926" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- centralises logic to "close" a banner
- adds padding to the document to accomodate a fixed-position banner so it won't hide content
  - https://github.com/visual-framework/vf-core/issues/1119

{% set component = "vf-analytics-google" %}
{% set componentVersion = "1.0.0-rc.3" %}
{% set commitId = "140a20e6f1e9a32c14958bb5b26358d480a349cc" %}



### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

* documentation cleanup
* `analyticsTrackInteraction()` is now namespaced as `vfGaTrackInteraction()`
* `vfGaTrackInteraction()` now documented for direct usage
* Fix console verbose logging: if set to false it would pass
  * https://github.com/visual-framework/vf-core/issues/1131


{% set component = "vf-card" %}
{% set componentVersion = "2.2.0" %}
{% set commitId = "788277969ff44528842d85147f5b1e1c05326b9b" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- adds a slight box shadow to all card variants to denote that it's something on the page, not 'of the page'.
- updates the hover box shadow so that it fits with the new box shadow on all cards.




{% set component = "vf-form__input" %}
{% set componentVersion = "1.1.0" %}
{% set commitId = "af8e0a1461033a5ad7a6a7cb673914da2315ba82" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- adds `type="search"` form input.
- styles the cancel button so it uses our icon set and is bigger than user agent default.




{% set component = "vf-button" %}
{% set componentVersion = "1.1.1" %}
{% set commitId = "fb54a3462a003219f00859c9c8a111a4edce997c" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- adds `webkit-appearance: none;` as needed for Safari browsers as autoprefixer is not doing this.




{% set component = "vf-form__input" %}
{% set componentVersion = "1.0.1" %}
{% set commitId = "fb54a3462a003219f00859c9c8a111a4edce997c" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- adds `webkit-appearance: none;` as needed for Safari browsers as autoprefixer is not doing this.




{% set component = "vf-form__select" %}
{% set componentVersion = "1.0.1" %}
{% set commitId = "fb54a3462a003219f00859c9c8a111a4edce997c" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- adds `webkit-appearance: none;` as needed for Safari browsers as autoprefixer is not doing this.




{% set component = "vf-search-client-side" %}
{% set componentVersion = "1.0.0-alpha.2" %}
{% set commitId = "dd4ab4a1073999340eb445877a5f5af9b6903745" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

* Improve documentation

