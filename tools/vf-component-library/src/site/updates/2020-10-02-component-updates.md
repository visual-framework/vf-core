---
title: 2.2.8 Component updates
subtitle: Minor component updates and bug fixes.
date: 2020-10-02 09:33:50
version: 2.2.8
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

This releases {{version}} to the CDN:

- [https://assets.emblstatic.net/vf/v{{version}}/css/styles.css](https://assets.emblstatic.net/vf/v{{version}}/css/styles.css)
- [https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js](https://assets.emblstatic.net/vf/v{{version}}/scripts/scripts.js)

---


{#
{% set component = "vf-XXXX" %}
{% set componentVersion = "XXX" %}
{% set commitId = "XXXXX" %}

### [{{component}}](https://stable.visual-framework.dev/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- log

---
#}


{% set component = "vf-section-header" %}
{% set componentVersion = "1.2.2" %}
{% set commitId = "3f8cb25d7edbbaed3df40724175160122a469e79" %}

### [{{component}}](https://stable.visual-framework.dev/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

* adds `id` for anchor support

---


{% set component = "vf-analytics-google" %}
{% set componentVersion = "1.0.0-rc.4" %}
{% set commitId = "bcb793e7dfa498635624c9430922210372a7a5ba" %}

### [{{component}}](https://stable.visual-framework.dev/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

* improve `vfGaLogMessage()` to note type of event being tracked
  * https://github.com/visual-framework/vf-core/pull/1141
