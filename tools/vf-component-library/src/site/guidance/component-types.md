---
title: Component types
subtitle: "We use a variation of the atomic design methodology: elements, blocks, and containers."
intro: "In addition to these three <a href='http://bradfrost.com/blog/post/atomic-web-design/#atoms'>atomic concepts</a> you'll also see utilities and layout components."
date: 2021-11-26 19:33:50
section: building
full_width: true
tags:
  - posts
  - guidance
  - components
layout: layouts/section.njk
templateEngineOverride: njk, md
---

<section class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Design tokens",
    "id": "tokens",
    "vf_section__content": [
      ""
    ]
  } %}
  <article class="vf-content">

  All components in the Visual Framework are dependent on [its design tokens](/design-tokens/) that provide colour, typography, spacing and other stylistic decisions as structured data.

  </article>
</section>

<section class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Elements",
    "id": "elements",
    "vf_section__content": [
      ""
    ]
  } %}
  <article class="vf-content">

  Elements are the basic building blocks of the Visual Framework and includes buttons, badges, headings, text, links and so on. Every higher level component is made of these.

  </article>
</section>


<section class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Blocks",
    "id": "blocks",
    "vf_section__content": [
      ""
    ]
  } %}
  <article class="vf-content">

  Utilising elements along with their own styling, blocks begin to make ready-made parts of a page, such as navigation, summary, profiles, card or a search form.

  With these you can begin to imagine a page, but they do not provide structure between blocks.

  </article>
</section>

<section class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Containers",
    "id": "containers",
    "vf_section__content": [
      ""
    ]
  } %}
  <article class="vf-content">

  Moving up from blocks, containers assemble collections of blocks in layout containers that can be stacked to build a page: a hero, banner, intro, video container and so on.

  </article>
</section>

<section class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Utility and layout",
    "id": "utility",
    "vf_section__content": [
      ""
    ]
  } %}
  <article class="vf-content">

  Giving structure and function to the fabric of the page, layout components determine reusable structure in grids, stacking layout and reusable clusters and flags.

  These are supported by utility components (utility classes, smooth scroll, show more) that allow edge customisations and behaviour of the page.

  </article>
</section>

<section class="embl-grid embl-grid--has-centered-content">
  {% render '@vf-section-header', {
    "section_title": "Learn more",
    "id": "more",
    "vf_section__content": [
      ""
    ]
  } %}
  <article class="vf-content">

- [How to make a component](/guidance/creating-components/)
- [Components vs patterns](/guidance/components-and-patterns/)

  </article>
</section>
