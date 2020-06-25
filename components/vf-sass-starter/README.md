👋 Hi component authour, you've read the docs, right?

- [What's a component](https://visual-framework.github.io/vf-welcome/developing/components/what-is-a-component/)
- [Updating, versioning a component](https://visual-framework.github.io/vf-welcome/developing/components/updating-a-component/)
- [Sass and CSS guidelines](https://visual-framework.github.io/vf-welcome/developing/guidelines/css/)
- [Themeing and variant guidance - TO COME](#tocome)
- [JavaScript guidelines](https://visual-framework.github.io/vf-welcome/developing/guidelines/javascript/)
- [Making your first Pull Request](https://visual-framework.github.io/vf-welcome/developing/getting-started/pull-requests/)
- [More development guidance](https://visual-framework.github.io/vf-welcome/developing/)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)

---

# vf-sass-starter Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-starter.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-sass-starter)

## Usage

This Package is to get your project up and running with the minimum Sass files and dependencies you may require.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install `vf-sass-starter` and its dependencies with this command.

```
$ yarn add --dev @visual-framework/vf-sass-starter @visual-framework/vf-design-tokens @visual-framework/vf-font-plex-mono @visual-framework/vf-font-plex-sans @visual-framework/vf-sass-config @visual-framework/vf-sass-utilities @visual-framework/vf-utility-classes
```

## Sass

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-sass-starter/index.scss";
```

The above `index.scss` file will import the Design Tokens, the Sass variables, mixins, functions to get you started as well as importing the CSS Utility Classes, the Utilities, and the Font CSS for IBM Plex Mono and IBM Plex Sans.

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

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
