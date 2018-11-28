# Visual Framework 2.0

- [Setting Up](#Setting-Up)

## What is this?

This project helps ensure brand consistency and the easy use of modern web design best practices -- such as responsive design, iterative maintenance cycles, and UX-tested patterns. It also does so with particular consideration for life science content: guidance for tables, graphs, data-heavy typography.

### Can I find an updated version on the web?

When we release an update to the Visual Framework to the master is compiled and [the pattern library is published to embl.org/guidelines/visual-framework/dev-docs](dev.beta.embl.org/guidelines/visual-framework/dev-docs).

### Do I need to install this?

This is meant for those wanting to develop or customise the Visual Framework. If you're building a basic integration with vanilla HTML, Angular, React, Wordpress or Drupal, see the integration guides [LINK TO BE MADE].

### I have an idea or concern!

There are three ways that we discuss and track ideas:

- General: Slack at [embl-vf.slack.com](https://embl-vf.slack.com/messages) for general ideas and discussion
- Creative: [Trello](https://trello.com/b/TpdoWYC5/visual-framework-20) for conceptual things like new design patterns and approaches to CSS standards and HTML guidelines
- Technical: [GitHub issues here](https://github.com/visual-framework/vf-ebi/issues) for implementing deeply technical and specific issues, like the Sass build process, browser bugs

Why use three things? Because there is no one tool that's good for all problems and all types of stakeholders.

## Versioning

As not all users of the Visual Framework will be able to update to the very latest and we do not wish to hold others back, we are using a semantic versioning style of releases.

| Major release | Minor release | Note |
| ------------- | ------------- | ---- |
| (Branch)      | (Tag)         | |
| 2.0           | v2.0.0            | Initial release evolving from Compliance theme |
| "             | v2.0.1            | Tagged minor release |
| "             | v2.0.2            | Tagged minor release |
| "             | v2.0.3            | Tagged minor release |
| 2.1           | v2.1.0            | Documented, breaking release |
| "             | v2.1.1            | Tagged minor release |
| 2.2           | v2.2.0            | Documented, breaking release |

Difference between major, minor releases:
- Major releases (.1, .2, .3...) can have breaking changes and any such changes will be detailed and tested.
- Minor releases (0.0.X) will not have changes to code structure or parts and will mainly add features or update visual assets (such as logos or icon fonts).

We support the last two major releases with bug fixes and branding. New features will only be added to the current and development versions.

Where's version 1.X, you ask? That's the [EMBL-EBI Visual Framework](https://github.com/ebiwd/EBI-Framework) from where this concept [originated, and evolved](https://blogs.embl.org/communications/2018/09/12/faster-scientific-websites-through-reusability/).

### Versioning of patterns

Pattern versions follow the major releases for compatibility. That is:

- All patterns for `v2.0` should be comptabile with eachother;
- It is not intended to use a `vf-pattern:2.1.x` pattern with `vf-core:2.0.x`; and
- Minor versions of packages should generally be inter-compatible to use `vf-pattern-a:2.0.12` with `vf-pattern-b:2.0.2`

### Test releases
Testing releases will be identified in their tag, a la: `v2.0-alpha.1`, where `-alpha.1` is the tag. `-alpha`, `-beta` and `-rc` are tag suffixes.

### Alpha development of v2.0

As the Visual Framework is in heavy, active development, we will have many `v2.0.0-alpha.X` releases. With new alphas planned on a weekly basis (Fridays).

## Setting Up

To use the Visual Framework your machine will require some software to be installed to start.

The software you will need is:

  - Node.js
  - Gulp

You can check to see if you have these installed in the command line by entering the name of the package with -v afterwards, for example.

```
$ node -v

$ gulp -v
```

If either of these throw an error in your command line application then you will need to install them.

### To install Node

The easiest way to download and install Node is via the official [downloads page](https://nodejs.org/download/) where you can download the correct version for your operating system.

### To install Gulp

Once you have Node install you can easily install the Gulp task manager by entering the following command into your command line application:

```
npm install gulpjs/gulp-cli -g
```

## Installing the Visual Framework

You will need to install this repo onto your machine so that you can update, amend, and and delete patterns to the Visual Framework as required.

#### 1. Clone this repo

```
git clone https://github.com/visual-framework/vf-ebi.git

cd visual-framework-tooling-prototype
```

#### 2. Install [fractal](https://github.com/frctl/fractal)

You might need to use `sudo`.

```
npm i -g @frctl/fractal
```

#### 3. Download all the things

```
npm install
```

#### 4. Run a dev build

You're now setup to run the visual framework's component library, run a dev build:

```
gulp dev
```

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
