# EMBL Conditional Edit Links component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-conditional-edit.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-conditional-edit)

## About

Edit and configuration buttons often point to separate domain where the login stat of a user cannot be known, so this is a simple JavaScript method to enable links that point to edit and configuration pages.

## Usage

Currently supported methods:
- URL param: `?embl-conditional-edit=enabled` or `?embl-conditional-edit=1`
- CSS cascaded: `embl-coditional-edit__enabled .embl-conditional-edit { display: unset; }`

Note: this method is not about hiding the a URL from a user being able to see the link, rather it simply hides or shows a link based off a parameter.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `primer-buttons` with this command.

```
$ yarn add --dev @visual-framework/embl-conditional-edit
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/embl-conditional-edit/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
