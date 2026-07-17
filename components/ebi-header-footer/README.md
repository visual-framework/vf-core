# EMBL-EBI Header and Footer component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Febi-header-footer.svg)](https://badge.fury.io/js/%40visual-framework%2Febi-header-footer)

## About

Support for using the EMBL-EBI header and footer in projects that use the Visual Framework 2.0.

> **Upgrade recommended:** If you are using an earlier version of this component, upgrade to **v2.1.4 or later**. Previous versions loaded header and footer HTML from the EMBL ContentHub and depended on the legacy `EBI-Framework/v1.x/script.js` file. Both of those external dependencies have been removed as of v2.1.4.

## What changed in v2.1.4

- **Removed ContentHub HTML loading dependency.** The header and footer HTML is now self-contained in the component templates (`ebi-header-footer--header.njk` and `ebi-header-footer--footer.njk`). No `<link rel="import">` or `data-embl-js-content-hub-loader` attribute is needed.
- **Removed legacy `script.js` dependency.** The component no longer relies on `//ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.x/js/script.js` to bootstrap header or footer behaviour. All required JavaScript (black bar population, global search, data protection banner, external link decorators, announcements) is fully bundled inside `ebi-header-footer.js`.
- **Lighter and faster.** Eliminating two external round-trips (ContentHub API call + legacy script) reduces page load overhead and removes a network failure point.
- **No functional or visual regressions.** The rendered output and interactive behaviour remain identical to previous versions.

## Usage

This component provides the minimum amount of legacy CSS to make the header and footer work while avoiding conflicts with VF 2.0 styles.

- This requires VF 2.0 footer CSS and other styles.
- If you do not currently have VF 2.0 CSS and JS as part of your project, [you can use the CDN JS](https://stable.visual-framework.dev/#cdn).
- The EMBL contentHub loader is **no longer required** as of v2.1.4.
- The legacy `script.js` file from EBI-Framework v1.x is **no longer required** as of v2.1.4.
- The data protection banner is bundled inside the component JS. To disable the built-in VF 1.x cookie banner include an element with `data-protection-message-disable="true"`.
  - This is inserted automatically when using the `ebi-header-footer--footer` template.

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `ebi-header-footer` with this command.

```
$ yarn add --dev @visual-framework/ebi-header-footer
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/ebi-header-footer/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
