# Table component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-table.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-table)

## About

Ever useful for presentation of tabular information and data — never to be used for layout.

## Usage

### CSS Class Reference

| Class                | Applies To | Result                                                                 |
| -------------------- | ---------- | ---------------------------------------------------------------------- |
| `vf-table`           | `table`    | Gives initial generic styling to the `table` element and it's children |
| `vf-table--striped`  | `vf-table` | Adds striped rows to the relevant `tr` elements.                       |
| `vf-table--bordered` | `vf-table` | adds a border around all elements                                      |
| `vf-table--compact`  | `vf-table` | Reduces the padding on the heading and cells                           |
| `vf-table--loose`    | `vf-table` | Increases the padding on the heading and cells                         |

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-table` with this command.

```
$ yarn add --dev @visual-framework/vf-table
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-table/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
