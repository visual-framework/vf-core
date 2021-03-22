---
title: Component updates and refinements in 2.4.7
subtitle: This release continues a focus on refinement and documentation. We're also making steady progress on a major roadmap features.
date: 2021-02-25 16:26:29
version: 2.4.7
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

This our first release in nearly a month due to some issues with an internal technical tool.

### Work on [roadmap goals](https://github.com/visual-framework/vf-core/milestones)

- A design kit is being actively developed by a new team member, so [we've added a new "design kit" section](/design-kit).
- The Visual Framework's [design principles have been added](/design-principles).
- Unique to the web are certain types of content that support user interaction, we've begun documenting how to use "read more", icons, white space and more. We're grouping this common advice in [a web content guide](/guidance/content-guidelines).
- We continue to work on page-level examples and boilerplates [in the patterns section](/patterns).

### High level changes

- Updated colour function name: the Sass colour function no longer requires the `set-` prefix and can be used as `background-color: color(color-grey-darkest);` [Git diff](https://github.com/visual-framework/vf-core/commit/7fe2f4f2293813026ebc15f85b216ce1eaf186e3)
- Major improvements to vf-hero and vf-card (scroll down for more)

{# macros ---> #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

#### [{{component}}](https://latest.visual-framework.dev/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

{% endmacro %}

{% macro notesTool(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}
<!-- Tools don't have pages in the component library -->

#### [{{component}}](https://github.com/visual-framework/vf-core/tree/develop/tools/{{component}}/#readme) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

{% endmacro %}


{% macro componentLink(component='vf-xxx') %}[{{component}}](https://latest.visual-framework.dev/components/{{component}}/){% endmacro %}
{# endmacros ---/ #}

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

### Card improvements

`vf-card` is one of the more popular components. It is now more flexible (both for image sizes and text content) and better indicates linked content.

{{ notes("vf-card", "2.5.1", "788f5d07be71970aa4e280947d2996271007f9eb") }}

* fixes issue with HTML Entities and the README when running fractal.

{{ notes("vf-card", "2.5.0", "e3a42bf26cf910eeec42e75aefe31479e98329f7") }}

* fixes issue with `vf-card__image` height in Safari.
* removes `grid-template-rows` as it's difficult to define now cards do not have to have images.
* adds a `--vf-card__image--aspect-ratio` CSS custom property to help with the initial image height.

{{ notes("vf-card", "2.4.1", "3bbf1cba9e34a2a4d91c7acc18d087c253427704") }}

* fixes issue with `vf-card__image` height in Safari
* updates documentation to replace 'title' with 'heading' so it matches CSS classname.

{{ notes("vf-card", "2.4.0", "7f700c67653fc3a1a8a8c52e06c2f2981a64b074") }}

* creates option to for a subheading
* creates option for a card with no image
* adds a svg icon similar to `vf-section-header` when the heading has a link
* adds documentation
* adds more examples for the variants available depending on the content
* hides all variants that should not be used.

{{ notes("vf-card-container", "3.1.1", "4d6028782396958d5d32273a41ee412f3d0241ad") }}

* adds ability to define the `aspect-ratio` of the `vf-card` child components
* moves the `default` context data in the `.yml` file to a `variant` to allow easier use of `include`.
* fixes issue in README that made fractal fail to load the container example.

### Hero improvements

Also popular is `vf-hero` which has been refined and documentation simplified to provide clearer choices.

{{ notes("vf-hero", "3.1.0", "4f7dc4b5842dc601822846b995aca813d348d131") }}

* adds link styles to the `vf-hero__heading`
* updated the documentation to include the `vf-hero__heading_link` details.

{{ notes("vf-hero", "3.0.0", "8c0c02ddded9ed8b45c1b652b6df72c106e2b1a0") }}

* removes all design variants.
* replaces `vf-hero__heading__additional` with `vf-hero__kicker`.
* makes the call to action link a separate entity as there would be a conflict with `vf-hero__text`.
* adds a little more documentation.

### Small refinements, fixes and documentation

{{ notes("vf-logo", "1.5.1", "a8162ee10e2e1dc47e04b3e0ef8d41b64e59d3b4") }}

* Makes logo larger only when using extreme variant.

{{ notesTool("vf-sass-config", "2.4.1", "9a4dfc2f47a8f0db4084b9870a1fe9d808be4668") }}

* Fixes issue now that link color disabled no longer exists.

{{ notes("vf-content", "1.4.1", "788f5d07be71970aa4e280947d2996271007f9eb") }}

* Removes the 'dark mode' CSS for links - as it's not implemented.

{{ notes("vf-design-tokens", "3.3.0", "788f5d07be71970aa4e280947d2996271007f9eb") }}

* removes unused link colours

{{ notes("vf-link", "2.0.0", "788f5d07be71970aa4e280947d2996271007f9eb") }}

* removes secondary link colours, as this is more often defined by the parent component.
* removes the 'dark mode' styles as these are not being used.

{{ notes("vf-summary", "1.4.1", "788f5d07be71970aa4e280947d2996271007f9eb") }}

* Removes the import for `vf-links.variables.scss` as it is not needed.

{{ notes("vf-form__fieldset", "1.1.1", "bf5574334cd5c6368670ef2f5058e28b03ce325b") }}

* style fieldset label as a heading 5

{{ notes("vf-form__item", "2.0.1", "bf5574334cd5c6368670ef2f5058e28b03ce325b") }}

* Add support for vf-form__select as inline element.

{{ notes("vf-form__radio", "2.0.1", "bf5574334cd5c6368670ef2f5058e28b03ce325b") }}

* improve horizontal layout of radio with flexbox

{{ notes("vf-pagination", "1.0.0-rc.2", "bf5574334cd5c6368670ef2f5058e28b03ce325b") }}

* right align pagination options

{{ notes("vf-intro", "1.4.6", "65d7b5783bf59e246529a6d27e5c52721b4e5364") }}

* Add support for anchor `id` attribute.

{{ notes("vf-intro", "1.4.6", "dcc2c68f47e79b8222216f73b63efb99ceb49b71") }}

* Move the example content into a default variant to stop it printing out when using `render`

{{ notes("vf-blockquote", "1.1.0", "3ab118768682b3daec6163d948deef9398cd38de") }}

* removes `--pullquote` variant as it was never properly finalised and implemented.

{{ notes("vf-content", "1.4.0", "1453d8bb510877c8c1b588589171f77748ab1ce6") }}

* adds top margin override for first item inside of `vf-content`

{{ notes("vf-section-header", "1.4.0", "7b97a4c989f9f30a9843447cb55696e56d6acd39") }}

* changes value of SVG to use `em`s so it scales with the typeface size.
* makes the hover effect consistent with new `vf-card`s
* makes the positioning match the baseline of the text

{{ notes("vf-button", "1.4.0", "c07a66205cdfa2fa2f4d2f39f1a0004d3149732b") }}

* Removes variants that are not to be used from the examples available.
* Adds usage documentation.

{{ notes("vf-breadcrumbs", "2.0.2", "da4f5609c2d3bfff99aa7a88890a5ae658351ea5") }}

* Adds a little more documentation.

{{ notes("ebi-vf1-integration", "1.0.5", "09b1c4659eaf07933c12edbb236090323d928bc6") }}

* Handle text color on vf-button--outline.
* https://github.com/visual-framework/vf-core/pull/1336
