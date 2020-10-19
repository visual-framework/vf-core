---
title: 2.2.9 Component updates
subtitle: Minor component updates and bug fixes.
date: 2020-10-12 09:10:50
version: 2.2.9
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
{% set commitId = "aba7c129360008218543d96d67d7da78c7f77e34" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- log

---
#}

{% set component = "embl-notifications" %}
{% set componentVersion = "1.0.0" %}
{% set commitId = "aba7c129360008218543d96d67d7da78c7f77e34" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- Check a backup URL for cases of major outages: https://embl-communications.github.io/embl-notifcations-fallback/notifications.js
- [Issue 1150](https://github.com/visual-framework/vf-core/issues/1150)

---

{% set component = "vf-search-client-side" %}
{% set componentVersion = "1.0.0-alpha.3" %}
{% set commitId = "57bffc9240dfcb3833c270f95e464a43dd1dcfc4" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- adds support for `autofocus` on search input
- [Pull request 1147](https://github.com/visual-framework/vf-core/pull/1147)

---


{% set component = "vf-search" %}
{% set componentVersion = "1.1.2" %}
{% set commitId = "57bffc9240dfcb3833c270f95e464a43dd1dcfc4" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- adds support for `autofocus` on search input
- [Pull request 1147](https://github.com/visual-framework/vf-core/pull/1147)

---


{% set component = "vf-design-tokens" %}
{% set componentVersion = "1.3.1" %}
{% set commitId = "22d11e4d2cd6267fa30af98125ad7dbb227b4464" %}

### [{{component}}](https://visual-framework.github.io/vf-core/components/{{component}}/) {{componentVersion}}

commit [{{commitId}}](https://github.com/visual-framework/vf-core/commit/{{commitId}})

- fix display of design token component documentation
- [Pull request 1134](https://github.com/visual-framework/vf-core/pull/1134)

