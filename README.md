# Visual Framework 2.0

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-core.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-core) ![Chat for support on Discord](https://discordapp.com/api/guilds/596668639004983296/widget.png?style=shield) [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/EMBL/EMBL-Visual-Framework)

The Visual Framework (VF) is designed with the needs of life science websites and services. It goes beyond guidance for tables, graphs, data-heavy typography and focuses on being sane defaults and implements its CSS in a way that won't interfere with your existing components that use Bootstrap, Angular, or something else.

The VF 2.0 enables consistency and portability, it is extensible, modular and overridable; here to help and not get in the way.

---

**👋 Downloading or cloning this repo? 🛑**

Most won't need to clone this repo. Do so if you only wish to develop the architecture of the Visual Framework core or contribute a global component, otherwise [use one of the boilerpates or install a component directly](https://visual-framework.github.io/vf-welcome/).

---

<img src="README/intro_image.jpg" alt="Image of columns representing a metaphor for the VF Core" />

*Much like an arch-based design of a cistern, the `vf-core` supports complex systems with a flexible space inside. Even if `vf-arch` wasn’t a very good name. (For those that didn’t guess it, this is a photo of the Basilica Cistern; [Image by Clint on Flickr](https://www.flickr.com/photos/amberandclint/4086669134/in/photolist-7e8fmE-nGAs7L-5ANpRm-bbDtk2-8fW4a-eZi5N3-5RRtw5-3KvouK-6K6fLC-48S7Tv-m1BVz9-77ZEvU-58GPp8-6ygYZw-5ANs87-5ANp2Q-48S9K6-gr8bps-evst93-7Vyo1U-evpjTg-e1EWNm-dUwmxf-q4ZFUa-auYW6V-7fFJXo-bstDTF-euKd7K-e9LAh3-5zSVSn-evpkb8-dtp995-5k2ATs-aj5HWY-8jbFnQ-MGp6W-57mU2S-bAKj6C-djW5iW-HVYU44-buCcrw-e6JLkQ-djW4bp-7DHGCa-av2Auo-28gPqDR-ea68SD-48S8hT-btjZH8-48W95A/))*

# The Visual Framework Core: What it is and why it matters

For the past year the [small](https://github.com/visual-framework/vf-core/people?affiliation=ALL) Visual Framework team continued developing more-compatible and sane-defaults tooling for life science websites; here I introduce the Visual Framework Core (VF Core).

---

### Not familiar with the Visual Framework?

If you’re new to the Visual Framework concept and why it matters for life science websites: think of it as a Bootstrap but architected for flexibility. The Visual Framework is highly modular for compatibility allowing for non-breaking use alongside other frameworks, like Bootstrap. So you can use components made elsewhere without breaking your site. [More about the Visual Framework approach here](https://blogs.embl.org/communications/2018/09/12/faster-scientific-websites-through-reusability/).

---

The VF Core is one part of that effort and — as the name suggests — is at the heart of all Visual Framework-based tools. The VF Core establishes an architecture of extendable components and builds CSS, JS and other image-style assets.

In short: The VF Core is a base to build systems.

<img src="README/diagram.svg" alt="Schematic of VF Core" />

*Here’s how the column metaphor from the earlier photo translates as a schematic of relationships for the VF Core system.*

## Making use of the VF Core

The VF Core is a pre-assembled manufacturing line for your websites and design systems. It takes in Visual Framework components and gives compiled CSS, JS and templates.

For most developers it’s best to `npm install`* VF Core and connect it to VF components or use a pre-rolled boilerplate. (* We actually recommend `yarn` for the Visual Framework, but `npm` is better known so we’ve used it for this article.)

In late July we entered the beta phase for `vf-core`, and so we’re ready for others to begin making use of it — and here’s a few ways you might do so:

- **Add VF components using npm** Status: RC<br/>
  Pull VF components directly into your existing tooling at `some-kind-of-sample-site`. This approach gets you a components Sass, JS, template and any other assets and lets you build what you need.
  -  `yarn add @visual-framework/vf-sass-config @visual-framework/vf-inlay`
- **A pre-made boilerplate using VF components** Status: BETA<br/>
  Uses the performant [11ty](#link) as a static site generator to build sites with VF components. This approach pre-integrates the VF Core, giving you easy access to component assets and a rollup build process to generate compiled CSS and JS.
  -  [`vf-eleventy`](https://github.com/visual-framework/vf-eleventy): `yarn create @visual-framework/vf-eleventy your-new-site-name`
- **Build a design system using VF components** Status: ALPHA<br/>
  Extends`vf-eleventy`to document your design system, create+document components, patterns and boilerplates. You can also generate static CSS and JS assets for simple use elsewhere in vanilla HTML+CSS+JS pages.
  -  [`vf-demo-design-system`](https://github.com/visual-framework/vf-demo-design-system): `yarn create @visual-framework/vf-eleventy your-new-site-name vf-demo-design-system`
- **WordPress theme** Status: PRE-ALPHA PROOF OF CONCEPT<br/>
  Build a WordPress site using VF components. We don’t have code that’s ready to share yer, but this is on our ideas and tools plans.
- **React boilerplate** Status: PRE-ALPHA PROOF OF CONCEPT<br/>
  A demonstration React-based project using VF components.

## FAQ

### Is VF Core just a Bootstrap with a different theme?

No. VF Core is an architecture to build extensible components that contain CSS/Sass, JS, Nunjuck templates, and image assets. You could use the VF Core to make a Bootstrap-style framework.   

### I’m a small research team, should I use VF Core?

Yes, utilise the Visual Framework system with one of the above listed approaches.

### Does it have a specific look and feel?

No. It has a default look out of the box, but it is fully customisable by altering the [Design Tokens](https://github.com/visual-framework/vf-core/tree/develop/components/vf-design-tokens/src).

### Is it really ready for use today?

Stable for your non-production development. We're in a beta phase and things are still subject to change, but there should be few breaking changes and we'll offer guidance on updating between betas. 

### Shouldn’t I just use Bootstrap or Solution X?

No, but yes … do both.

This question is more about the general approach of the Visual Framework architecture, but the VF Core is designed to address common issues with component portability in the life science space …
and use bootstrap too

## What’s next

Efforts in the next few months will be extending and stabilising the above projects and further stabilising [`vf-core`](#link-to-beta.2-issues).

---

## Have opinions, ideas, concerns or want to get involved? 

There are a few ways that we discuss and track ideas:

- ⁉ General: [Chat us](https://discord.gg/XHAvkUX) for general ideas and discussion
- ⚙️ Technical: [GitHub issues here](https://github.com/visual-framework/vf-core/issues) for implementing deeply technical and specific issues, like the Sass build process, browser bugs
- 🏢 E-mail: if you have a sweeping Big Idea™️, e-mail Ken Hawkins <ken.hawkins@embl.de>

## 🚧 ✍ Developing, contributing

<a id="get-started"></a> [See the contributing guide](https://visual-framework.github.io/vf-welcome/documentation/#getting-started)
