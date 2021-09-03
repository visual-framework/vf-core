---
title: Components are part of patterns
subtitle: Think of components as lego blocks you can use to build the look and content of your sites. Think of patterns as assembled packages of behaviour.
intro: At the lower level there are components which are a type of "ingredient" used to assemble into the higher level patterns with richer templates with usability guidance.
date: 2020-12-11 19:33:50
section: building
tags:
  - posts
  - guidance
  - components
layout: layouts/section.njk
templateEngineOverride: njk, md
---

## Type 1: Components

Components are intended for re-use and should be named for what they are; that is:

- vf-box (not "vf-introduction")
- vf-button (not "vf-call-to-action")
- vf-grid (not "vf-wide-layout")
- vf-header (not "vf-big-headline")
- vf-form

This ensures that that a box will always be rectangular-ish pattern on pages,
whereas an "introduction" may be a box today, but become simply large text after a redesign.

When naming components, use something simple and obvious.

### Component types

We use a variation of the atomic design methodology. We use: elements, blocks, and containers.

- `element`: a heading or button
- `block`: a teaser, summary or search form
- `container`: would be a group of summaries

[More about the atomic design concept here](http://bradfrost.com/blog/post/atomic-web-design/#atoms).

### Components have

- Lots of code
  - `CHANGELOG.md`: Notable changes
  - `index.scss`: Used to generate a standalone version of the component's CSS
  - `package.json`: Version information and any required npm dependencies
    - you should avoid npm-requiring other VF components
  - `README.md`: Information on the role and how to use a component
  - `vf-sample.config.yml`: Configuration information about the compony, release status, type of component, variants
  - `vf-sample.njk`: A Nunjuck-based template
  - `vf-sample.scss`: Styling
  - `vf-sample.js`: JavaScript
  - `vf-sample.react.js`: [React wrapper](https://github.com/visual-framework/vf-core/tree/develop/tools/vf-extensions-react#box-component)
  - `Dynamic files made at build time`
    - `_package.variables.scss_`: Variables extracted from package.json that can be used in the Sass, such as a version number
    - `_vf-sample.precompiled.js_`: A compiled version of the Nunjucks template
    - `_vf-sample.css_`: Standalone CSS made from the index.scss
- An HTML code template (Nunjucks)
- Documentation on how to use

## Type 2: Patterns

If your pattern is primarily intended to be used for particular websites or a brand,
give it a name that is attached to the role it performs; that is:

- vf-group-masthead
- vf-registration-form
- vf-start-page

Naming for the role the pattern does allows us to change the future visual structure,
so a "display headline" today may have a black background, but tomorrow might have no background
and be large and italic text.

### Patterns have

- An HTML code template (Nunjucks)
- Documentation on how to use

## Learn more

For further guidance on the distinctions, see: [Patterns ≠ Components](https://medium.com/eightshapes-llc/patterns-components-2ce778cbe4e8) and UK.gov's information on [patterns](https://design-system.service.gov.uk/patterns) vs [components](https://design-system.service.gov.uk/components).

<hr/>

{% include "component-docs.njk" %}
