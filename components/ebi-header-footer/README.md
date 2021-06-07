# EMBL-EBI Header and Footer component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Febi-header-footer.svg)](https://badge.fury.io/js/%40visual-framework%2Febi-header-footer)

## About

Support for using the EMBL-EBI header and footer from the EMBL-EBI VF 1.3.

## Usage

This component provides the minimum amount of legacy CSS to make the header and footer work while avoiding conflicts with other 2.0 styles.

- This component requires the EMBL contentHub loader, which is included in most EMBL VF builds.
- This requires VF 2.0 footer CSS and other styles.
- If you do not currently have VF 2.0 CSS and JS as part of your project, [you can use the CDN JS](https://stable.visual-framework.dev/#cdn).
- This uses the existing `//ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/js/script.js` to load the HTML for the header.
- The EBI VF 1.x will also included a data protection banner, to disable this with 1.4 you can an included an element with `data-protection-message-disable="true"`
  - This will be inserted by default when using the `ebi-header-footer--footer` template.

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
