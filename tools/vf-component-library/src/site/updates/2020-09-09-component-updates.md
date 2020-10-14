---
title: Component updates
subtitle: Minor component updates and bug fixes.
date: 2020-09-09 12:24:50
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

### [vf-content](https://visual-framework.github.io/vf-core/components/vf-content/) 1.2.2

commit [ce06ca359f3cad01c5db46e4e04c67c5cf71fcb0](https://github.com/visual-framework/vf-core/commit/ce06ca359f3cad01c5db46e4e04c67c5cf71fcb0)

```bash
- dependency bump
```

### vf-component-library 1.0.6

commit [8590c2ad02f26328d489228a4f6f39a11aebb913](https://github.com/visual-framework/vf-core/commit/8590c2ad02f26328d489228a4f6f39a11aebb913)

```bash
- begin to make more pattern/boilerplate guidance
- minor templating updates
```

### [vf-search](https://visual-framework.github.io/vf-core/components/vf-search/) 1.2.2

commit [ac13156044ea6101e8f947a905aede597757e346](https://github.com/visual-framework/vf-core/commit/ac13156044ea6101e8f947a905aede597757e346)

```bash
- adds support for default search value
```

### [vf-box](https://visual-framework.github.io/vf-core/components/vf-box/) 2.0.2 and 2.0.1

commit [8074046d63b28d4e2031d8dfdaca9e78c9a27f60](https://github.com/visual-framework/vf-core/commit/8074046d63b28d4e2031d8dfdaca9e78c9a27f60)

```bash
- fixes bug with `-link` variant by adding position relative to `vf-box`
- adds `| safe` to `vf-box__text` variable so that HTML can be parsed through.
- margin reset on `.vf-box :last-child` now has more specificity as `.vf-box > :last-child`
```
