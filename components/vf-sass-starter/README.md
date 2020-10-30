# Sass Starter Utility component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-starter.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-starter)

## About

This Package is to get your project up and running with the minimum Sass files and dependencies you may require.

## Usage

This component's `index.scss` file will import the Design Tokens, the Sass variables, mixins, functions to get you started as well as importing the CSS Utility Classes, the Utilities, and the Font CSS for IBM Plex Mono and IBM Plex Sans.

If you do not require this you can create your own @imports removing what you want from this list:

```
// Import Sass Variables, Mixins, and Functions from @visual-framework/vf-sass-config
@import 'vf-sass-config/index.scss';

// Include all Utility Classes from @visual-framework/vf-utility-classes
@import 'vf-sass-config/mixins/vf-utility-mixins.scss';
@import 'vf-utility-classes/vf-utility-classes.scss';

// Include all SCSS Utilities from @visual-framework/vf-sass-utilities
@import 'vf-sass-utilities/vf-sass-utilities.scss';

// Include the relevant IBM Plex typefaces
@import 'vf-font-plex-mono/vf-font-plex-mono.scss';
@import 'vf-font-plex-sans/vf-font-plex-sans.scss';
```

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-sass-starter` and its dependencies with this command.

```
$ yarn add --dev @visual-framework/vf-sass-starter @visual-framework/vf-design-tokens @visual-framework/vf-font-plex-mono @visual-framework/vf-font-plex-sans @visual-framework/vf-sass-config @visual-framework/vf-sass-utilities @visual-framework/vf-utility-classes
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-sass-starter/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
