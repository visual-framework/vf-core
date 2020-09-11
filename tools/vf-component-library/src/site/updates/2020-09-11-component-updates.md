---
title: 2.2.1 Component updates
subtitle: Minor component updates and bug fixes.
date: 2020-09-11 20:24:50
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

This releases 2.2.1 to the CDN:

- https://assets.emblstatic.net/vf/v2.2.1/css/styles.css
- https://assets.emblstatic.net/vf/v2.2.1/scripts/scripts.js

### [embl-grid](https://visual-framework.github.io/vf-core/components/embl-grid/) 2.0.4

commit [697e93b8d6f375cb8293eb20dc8eec750f765a90](https://github.com/visual-framework/vf-core/commit/697e93b8d6f375cb8293eb20dc8eec750f765a90)

```
- fixes issue with `auto` and `1fr` doing the opposite with the sidebar.
```

### [embl-breadcrumbs-lookup](https://visual-framework.github.io/vf-core/components/embl-breadcrumbs-lookup/) 1.0.0

commit [bc838b989cd538be42da34fd56ada27dd37f67f9](https://github.com/visual-framework/vf-core/commit/bc838b989cd538be42da34fd56ada27dd37f67f9)

```
- prevent recursive breadcrumb lookup: it can occur for the EMBL taxonomy to have recursive parents, this present direct recursion
```

### [vf-component-library](https://visual-framework.github.io/vf-core/components/vf-component-library/) 1.0.7

commit [28421a0e94d929a0458c9d86129b854df99a7fea](https://github.com/visual-framework/vf-core/commit/28421a0e94d929a0458c9d86129b854df99a7fea)

```
- adds updates blog
```
