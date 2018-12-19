# Visual Framework 2.0

## What is this?

This project helps ensure brand consistency and the easy use of modern web design best practices -- such as responsive design, iterative maintenance cycles, and UX-tested patterns. It also does so with particular consideration for life science content: guidance for tables, graphs, data-heavy typography.

- [Visual Framework 2.0 introduction](https://dev.beta.embl.org/guidelines/visual-framework/)
- [Online pattern library](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs)
- [About the aims of the VF 2.0](https://blogs.embl.org/communications/2018/09/12/faster-scientific-websites-through-reusability/)
- [Principles and Methods](https://dev.beta.embl.org/guidelines/visual-framework/principles-methods/)
- [Changelog](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs/docs/changelog.html)
- [Contributing guide](https://github.com/visual-framework/vf-core/blob/develop/CONTRIBUTING.md) and [pattern development](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs/docs/guidelines.html)

### How do I use this?

Include the [CSS, JS, copy a boilerplate](https://dev.beta.embl.org/guidelines/visual-framework/analytics/), or build your own `vf-child` theme (documentation to come).

### Do I need to install this repo?

This is repo is only needed for those wanting to develop or customise the Visual Framework 2.0. If you want to use the VF on your site, have a look [at the boilerplate source](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs/components/render/vf-boilerplate-page.html) and [pattern library](https://dev.beta.embl.org/guidelines/visual-framework/dev-docs/).

### I have an idea or concern!

There are three ways that we discuss and track ideas:

- General: Slack at [embl-vf.slack.com](https://embl-vf.slack.com/messages) for general ideas and discussion
- Technical: [GitHub issues here](https://github.com/visual-framework/vf-ebi/issues) for implementing deeply technical and specific issues, like the Sass build process, browser bugs

Why use three things? Because there is no one tool that's good for all problems and all types of stakeholders.

### Contributing and branch naming

[See the Contributing guide](https://github.com/visual-framework/vf-core/blob/develop/CONTRIBUTING.md)

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
