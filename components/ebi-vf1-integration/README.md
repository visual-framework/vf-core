# Compatibility with EBI-VF 1.x components

[![npm version](https://badge.fury.io/js/%40visual-framework%2Febi-vf1-integration.svg)](https://badge.fury.io/js/%40visual-framework%2Febi-vf1-integration)

## About

Fixes, compatibility and workarounds for sites that use the EBI VF versions 1.1, 1.2, 1.3 or 1.4.

## Usage

Enable its use by:

- `body class="ebi-vf1-integration"`, or
- wrapping a section of html with the class `.ebi-vf1-integration`

## Install

### Option 1

Use the global VF 2.0 CSS along side your existing VF 1.x CSS; see: https://stable.visual-framework.dev/

### Option 2

If you don't want to include all the VF 2.0 CSS, add only the compatibility CSS:

```
https://assets.emblstatic.net/vf/v2.4.15/assets/ebi-vf1-integration/ebi-vf1-integration.css
```

### Option 3

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `ebi-vf1-integration` with this command.

```
$ yarn add --dev @visual-framework/ebi-vf1-integration
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/ebi-vf1-integration/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
