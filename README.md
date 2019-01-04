# Visual Framework 2.0

## What is this?

This framework is designed with the needs of life science websites and services. It goes beyond guidance for tables, graphs, data-heavy typography and focuses on being sane defaults and implements its CSS in a way that won't interfere with your existing patterns that use Bootstrap, Angular, or something else.

The VF 2.0 is extensible, modular and overridable; it's there to help and not get in the way.

- Demo:
  - [Online pattern library](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs)
  - [Changelog](https://github.com/visual-framework/vf-core/blob/develop/docs/changelog/index.md)
- Philosophy:
  - [Aims of the VF 2.0](https://blogs.embl.org/communications/2018/09/12/faster-scientific-websites-through-reusability/)
  - [Principles and Methods](https://dev.beta.embl.org/guidelines/visual-framework/principles-methods/)
- Help out:
  - [Contributing guide](https://github.com/visual-framework/vf-core/blob/develop/CONTRIBUTING.md)
  - [Request a pattern](https://github.com/visual-framework/vf-core/issues/new?template=new-pattern-request.md)
  - [Make a new pattern](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs/docs/guidelines.html)
- Make it your own:
  - [Clone the child theme template](https://github.com/khawkins98/vf-child-playground)

### Why use this?

The Visual Framework address three major needs:

1. ⚗️🌳 Life Sciences: We address common needs for the Life Science websites. The Visual Framework can be easily tailored to niche needs, but out of the box it's pleasant looking, but dry and serious to support focus, clarity and data.
1. 🏚 Compatibility: the Visual Framework is designed to work with other frameworks (both CSS, like Bootstrap, and JS, like React or Angular). We mainly achieve this by:
   - Name spacing all selectors for CSS or JS (`vf-*`)
   - No CSS styling on HTML elements. We only attached to name spaced classes, that is:
      - ✅ `.vf-button {}`
      - 🚫 `.button {}`
      - 🚫 `button {}`
      - 🚫🙊🙉 `div.button {}`
   - 🖕 This necessarily requires a bit more class writing, but it ensures the Visual Framework won't break existing code.
1. 🌕🌜 Use a little or a lot:
   - A lot: The framework (and [child theme template](https://github.com/khawkins98/vf-child-playground)) will generate a monolithic `styles.css` and `script.js` that can be easily included, a la Bootstrap.
   - A little: Instead you can include `.scss` partials or per-pattern `.css` and `.js` files. You can do this through making a [child theme](https://github.com/khawkins98/vf-child-playground) or [npm installs](https://www.npmjs.com/org/visual-framework).
1. ☕️ BYOJS: Bring your own JavaScript. We've included only a minimal amount of JS in patterns and it's fully optional (just remove the JavaScript selectors). So if you'd rather use Angular or Bootstrap for your tabs, the Visual Framework won't get in the way.

### Get started

Here's three ways you can make use of the Visual Framework.

1. 🏎 Utilise the whole, unaltered Framework: include the [CSS, JS and copy a boilerplate](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs/components/render/vf-boilerplate-page)
1. 🚰 [Install a specific pattern from npm](https://www.npmjs.com/org/visual-framework) and include the Sass/JS
1. 🏗 Or customise the framework with [your own Visual Framework child theme](https://github.com/khawkins98/vf-child-playground)

**Should you install/clone this repo?**

Usually: no. Only clone this repo if you wish to further develop the Visual Framework core or contribute a global pattern, otherwise follow one of the bullets above.

### How do I make my own theme or customise patterns?

<a id="childtheme"></a>Unless you want to tweak the core patterns or the build process, there's really little reason to customise this repo. If your desire is to make your own theme or patterns, you should follow a guide on:

1. 🚧 [Set up your own child theme](https://github.com/khawkins98/vf-child-playground), and then:
2. 🎨 [Add your own patterns to the new child theme](https://github.com/khawkins98/vf-child-playground#make-and-edit-patterns; finally:
3. 🍻 Bonus! [Contribute patterns this core Visual Framework](https://github.com/khawkins98/vf-child-playground#contribute-new-patterns-back-to-the-global-vf-core)

### I have an idea or concern!

There are a few ways that we discuss and track ideas:

- ⁉ General: Slack at [embl-vf.slack.com](https://embl-vf.slack.com/messages) for general ideas and discussion
- ⚙️ Technical: [GitHub issues here](https://github.com/visual-framework/vf-ebi/issues) for implementing deeply technical and specific issues, like the Sass build process, browser bugs
- 🏢 E-mail: if you have a sweeping Big Idea™️, e-mail Ken Hawkins <ken.hawkins@embl.de>

### Contributing and branch naming

[See the Contributing and branch naming guide](https://github.com/visual-framework/vf-core/blob/develop/CONTRIBUTING.md)

## Versioning

As not all users of the Visual Framework will be able to update to the very latest and we do not wish to hold others back, we are using a semantic versioning style of releases.

| Major release | Minor release | Note |
| ------------- | ------------- | ---- |
| (Branch)      | (Tag)         | |
| 2.0           | v2.0.0        | Initial release evolving from Compliance theme |
| "             | v2.0.1        | Tagged patch release |
| "             | v2.0.2        | Tagged patch release |
| "             | v2.0.3        | Tagged patch release |
| 2.1           | v2.1.0        | Minor release with possible breaking changes |
| "             | v2.1.1        | Tagged patch release |
| 2.2           | v2.2.0        | Minor release with possible breaking changes |
| 3.0           | v3.0.0        | Major release with many breaking changes|

Difference between major, minor releases:
- Minor releases (.1, .2, .3...) can have breaking changes and any such changes will be detailed and tested.
- Patch releases (0.0.X) will not have changes to code structure or parts and will mainly add features or update visual assets (such as logos or icon fonts).

We support the last two minor releases with bug fixes and branding. New features will only be added to the current and development versions.

Where's version 1.X, you ask? That's the [EMBL-EBI specific Visual Framework](https://github.com/ebiwd/EBI-Framework) from where this concept [originated, and evolved](https://blogs.embl.org/communications/2018/09/12/faster-scientific-websites-through-reusability/).

### Test releases

Testing releases will be identified in their tag, a la: `v2.0-alpha.1`, where `-alpha.1` is the tag. `-alpha`, `-beta` and `-rc` are tag suffixes.

### Alpha development of v2.0

As the Visual Framework is in heavy, active development, we will have many `v2.0.0-alpha.X` releases. With new alphas planned on a monthly basis (last Thursday of each month).

## Local development

### Setting Up

To use the Visual Framework your machine will require some software to be installed to start. [See the SETTINGUP.md guide](https://github.com/visual-framework/vf-core/blob/develop/SETTINGUP.md).

### Installing the Visual Framework

You will need to install this repo onto your machine so that you can update, amend, and and delete patterns to the Visual Framework as required.

1. Clone this repo
    - `git clone https://github.com/visual-framework/vf-ebi.git`
1. Move to the directory
    - `cd visual-framework-tooling-prototype`
1. You probably want the develop branch (or [your new feature branch](https://github.com/visual-framework/vf-core/blob/develop/CONTRIBUTING.md))
    - `git checkout develop`
1. Install [fractal](https://github.com/frctl/fractal) You might need to use `sudo`.
    - `npm i -g @frctl/fractal`
1. Download all the things
    - `npm install`
1. Run a dev build and open in your browser
    - `gulp dev`

## Creating a new component

This codebase includes a folder and file creation tool. It allows you to quickly create all the required files to make a component. It gives you the option to create am element, block, or container.

1. Install Yeoman
   - If you've come this far and you don't have `yo`, you should be able to install it with `npm install -g yo@latest`
   - If you get stuck, [see the official install guide](http://yeoman.io/codelab/setup.html)
2. Create a new component
   - You will need to use the vf-font-monospace-stack `gulp component` and answer the questions when prompted.
       - **Type of component:** We use a variation of the atomic design methodology, [read about the differences here](http://bradfrost.com/blog/post/atomic-web-design/#atoms). We use: elements, blocks, and containers.
           - an element would be a heading, or a button
           - a block would be a teaser, or a search form
           - a container would be a group of teasers
       - **Name of component:** Go for something simple and obvious (todo: we need a guide/documentation on how we name things). Don't worry about namespacing and prefixing, the tooling will take care of this.
       - **NPM package:** If you're making something interesting (probably not an 'element'), then saying 'yes' will allow the component to be shared as an optional part of the framework on NPM.
3. Developing your component
   - Detailed guide to come, but for now edit the new files and develop with `gulp dev`
4. Sharing you component back
   - If you didn't make it an NPM package: Make a pull request?
   - If it is an NPM package: Submit guide here?

## Design Tokens

The [Design Token concept](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421) specifies design (colour, spacing, type) as reusable JSON or YAML that are translated from `.yml` data into `.scss` using [Theo](https://github.com/salesforce-ux/theo#-theo).
