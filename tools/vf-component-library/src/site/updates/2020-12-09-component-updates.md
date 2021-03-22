---
title: Summary of recent component updates, release of 2.4.1 CSS, JS rollup
subtitle: This releases prebuilt CSS and JS, and minor features and initial React support. Read on for more.
date: 2020-12-09 18:33:50
version: 2.4.1
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

<br/>

{# macros ---> #}
{% macro notes(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}

### [{{component}}](https://latest.visual-framework.dev/components/{{component}}/) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

{% endmacro %}

{% macro notesTool(component='vf-xxx', componentVersion='9.9.9', commitId='0123456789') %}
<!-- Tools don't have pages in the component library -->

### [{{component}}](https://github.com/visual-framework/vf-core/tree/develop/tools/{{component}}/#readme) <span class="vf-badge">{{ componentVersion }}</span> <a href="https://www.npmjs.com/package/@visual-framework/{{component}}/v/{{componentVersion}}" class="vf-badge">npm</a> <a href="https://github.com/visual-framework/vf-core/commit/{{commitId}}" class="vf-badge">git diff</a>

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

## Initial React support

While full React and Angular support remain goals with an unspecified date on the [VF roadmap]({{ '/about/roadmap' | url }}), we're [trialing](https://github.com/visual-framework/vf-core/pull/1278) an initial approach to support React by wrapping the precompiled Angular templates.

You can see it in use in the example [vf-react project](https://github.com/visual-framework/vf-react).

We've added support for vf-button and vf-card for testing and [feedback](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ).

{{ notesTool("vf-extensions-react", "0.0.1", "3f2d43cae3c22d9700f6cc576ee2f0f5a411b6f9") }}

* Initial release

{{ notes("vf-button", "1.3.0", "3f2d43cae3c22d9700f6cc576ee2f0f5a411b6f9") }}

* adds react support
  * https://github.com/visual-framework/vf-core/pull/1278

{{ notes("vf-card", "2.3.2", "3f2d43cae3c22d9700f6cc576ee2f0f5a411b6f9") }}

* adds prototype react template
  * https://github.com/visual-framework/vf-core/pull/1278

{{ notesTool("vf-component-generator", "1.1.0", "3f2d43cae3c22d9700f6cc576ee2f0f5a411b6f9") }}

* adds _component.react.js template
  * https://github.com/visual-framework/vf-core/pull/1278
* updates _component.js to prepoulate vfComponentName() camel case syntax


## Minor refinements and enhancements

{{ notes("vf-search", "1.2.0", "be2806aa9c356383f12d52a450aaa8351ebd650c") }}

* don't allow inline search box to get too large
* add field for search description

{{ notes("vf-banner", "1.7.0", "f7cdfa2262499e5ac0988272a852c6a42af92077") }}

* Banner dismiss button now defaults to `vf-button--primary` (if a specific button variant has been requested by `vfJsBannerButtonTheme`, it will still be used)

## vf-hero fixes and tweaks

Following the [2.0.0 release of vf-hero]({{ "/updates/2020-11-27-component-updates/" | url }}), we have made several follow on fixes and refinements.

{{ notes("vf-hero", "2.0.5", "fbd2540f2878fcc8de70a7508217f96ab0d748cc") }}

* adds a `flex` property to the SVG so that it's always visible and doesn't get cut off.

{{ notes("vf-hero", "2.0.4", "dcaa96310407ee2e9641862bf777f2ce3e2c20e7") }}

* fixes missing context rule for `hero__text` and `hero__heading--additional`.

{{ notes("vf-hero", "2.0.3", "545bbc9037655edcd5e21a6eb3705134a9e8a9c7") }}

* adds the context options so the component can be used in 11ty with content separation.
* changes `max-content` to `fit-content` so the `__content` element adapts to smaller viewports.
* removes left padding from `--block` variant as it 'looked weird'.
