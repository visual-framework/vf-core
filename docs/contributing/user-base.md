---
title: User base
label: User base of the Visual Framework
order: 200
isIndex: true
---

The Visual Framework core ('vf-core') is not intended for direct consumption into
websites, rather it's a component library that can be consumed and extended
to build design systems.

Our target audience sits in three layers:

1. Lower-level developers
    - needs: build a design system for orgs that work with life science info
    - interface: docs, code, command line utils
2. Maintainers of design systems
    - need to: add a vf-core pattern to an existing vf-core compatible system
    - primary interface: npm, online docs
3. Those curious/learning/evaluating the VF
    - need to: understand what vf-core is
    - primary interface: the static site, GitHub readme, examples of orgs using the VF

What's not above: people building a site using generic VF-core CSS, JS and HTML
patterns. If there is demand for that, we may in the future provide a `vf-standard`,
but that has yet to be fully considered.
