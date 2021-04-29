---
title: User base of the Visual Framework code
subtitle: This project is designed to be used by organisations with experienced developers delivery life science websites.
date: 2020-12-11 19:33:50
section: building
tags:
  - posts
  - guidance
layout: layouts/section.njk
templateEngineOverride: njk, md
---

The Visual Framework core ('vf-core') is not intended for direct consumption into
websites, rather it's a component library that should be installed as an npm and
Sass dependency to build design systems.

## Common needs

For all supported audiences, we work to address shared needs:

1. Reusable, structured CSS and JS
1. CSS and JS that runs with and alongside other major tools (Foundation, Bootstrap and from the JS side Angular, React)
1. A component library
1. Sane defaults for new websites
1. Make a "look and feel" more consistent
1. Provide versioned upgrades
1. Easily add your own patterns, tweak existing patterns
1. No fixed look (doesn't have to look like any specific organisation, such as EMBL)

## Audience types

Our target audience sits in three layers:

1. Maintainers of design systems for life science websites
    - needs:
       - create a design system that utilises the `vf-core`
       - add a vf-core component to an existing vf-core compatible system
    - primary interface:
       - npm
       - online docs
1. Lower-level developers
    - needs: build a design system for orgs that work with life science info
    - primary interface:
         - docs
         - code
         - command line utils
1. Those curious/learning/evaluating the Visual Framework
    - needs: understand what vf-core is
    - [component library and documentation](https://github.com/visual-framework/vf-core)
    - examples of organisations using `vf-core`

What's not above: people building a site using generic VF-core CSS, JS and HTML
components. That's currently not a use-case we encourage or see the need for beyond
as a demonstrative design system.
