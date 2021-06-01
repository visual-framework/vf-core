---
title: "Components: versioning interoperability"
subtitle: Each Visual Framework component carries its own semantic versioning.
date: 2020-12-11 19:33:50
section: building
tags:
  - posts
  - guidance
  - components
layout: layouts/section.njk
templateEngineOverride: njk, md
---

While it may seem odd at first, not all components are on the same major version. You'll find that you might use `vf-button@1.2.3` with `vf-card@2.2.2`.

- `vf-core​@2.1.2` might use `vf-button​@1.0.1` and `vf-component-x​@8.2.1`
- `vf-button@1.0.1` might require `vf-link@3.0.1` or newer

We recommend using the latest version of each component, [you can update your components with `yarn upgrade-interactive --latest`](https://stable.visual-framework.dev/troubleshooting/).

Here's what the usage of [semantic versioning](https://docs.npmjs.com/about-semantic-versioning) means for the Visual Framework:

- All components are compatible with with `vf-core`, some components may require a minimum version of `vf-core`
- If `vf-core` has a breaking change it will be updated a full version (`v2.0` → `v3.0`), and components may also need to be updated
- [Yarn](https://yarnpkg.com/lang/en/) is used for package management
- Minimum versions of dependencies are specified in project's `package.json`
- Components also use semantic versioning
- Components may also require minimum versions of other components

Think of it like your computer's operating system, just because you update Windows 10 doesn't always mean your Firefox version needs to change.

## Where to get the latest version

Versions of `vf-core` and components are published to npm; [see the Visual Framework building guide]({{ '/building/' | url }}).

## What does this mean for component support?

Components should specify if they only support specific versions of `vf-core` or require other specific versions of patterns.

Other notes and tips on components:

- should use a [semantic versioning](https://semver.org/) style of releases
- must work with `vf-core v2.x`, but a component may specify a minimum required minor version of vf-core
- may indicate any required versions of peer-components in your component's README.md.
    - `vf-component-x`@`2.1.2` requires `vf-component-y`@`^8.1.0`
- can live as part of the `vf-core` [monorepo](https://www.toptal.com/front-end/guide-to-monorepos/)
    - Interested in adding a component? [Get in touch](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ) or [make an issue](https://github.com/visual-framework/vf-core/issues/new/choose)
- read more about [component versioning in this issue](https://github.com/visual-framework/vf-core/issues/119)

## Release notes

Release notes are published to [the Updates blog]({{ '/updates' | url }}) and include notes from the associated `CHANGELOG.md` files in the release.

## Where's version 1 of `vf-core`?

Where's version 1.x, you ask? That's the [EMBL-EBI specific Visual Framework](https://github.com/ebiwd/EBI-Framework) from where this concept [originated, and evolved](https://blogs.embl.org/communications/2018/09/12/faster-scientific-websites-through-reusability/).

## Test releases

Testing releases will be identified in their tag, a la: `v2.0-alpha.1`, where `-alpha.1` is the tag. `-alpha`, `-beta` and `-rc` are tag suffixes.

<hr/>

{% include "component-docs.njk" %}
