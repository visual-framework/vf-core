# Tree component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-tree.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-tree)

## About

A collapsable tree list suited for list displays or deep navigation structures.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-tree` with this command.

```
$ yarn add --dev @visual-framework/vf-tree
```

## Usage

There are several paramaters availabl when using the Nunjucks template:

- `expanded: true` Control if the entire tree is expanded/collpased
- `sublist` if an object of `title`s the item will be shown as a group
- `artiveTrail: true` Highlights a tree as an active path and if it is a sublist, opens it

You can see this component in action in the EMBL-EBI online tutorials, e.g. [A guide to bioinformatics][https://www.ebi.ac.uk/training/online/courses/a-guide-to/introduction/].

## Sass/CSS

The source files included are written in [Sass][sass] (`scss`) Point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-tree/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
