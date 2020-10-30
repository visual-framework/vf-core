# EBI Header and Footer component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Febi-header-footer.svg)](https://badge.fury.io/js/%40visual-framework%2Febi-header-footer)

This provides support for using the EBI header and footer from the EBI VF 1.3. It provides the minimum ammount of legacy CSS to make the header and footer work while avoiding conflicts with other 2.0 styles.

### Note

This component is not included in the default `vf-component-rollup` and will not be found in the default `styles.css`. You can add it to your local build or use `https://dev.assets.emblstatic.net/vf/develop/assets/ebi-header-footer/ebi-header-footer.css`

## Roadmap

- Version 1: Uses the existing `//ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/js/script.js` to load the HTML for the header and footer. As such the component will use mostly legacy CSS from the existing v1.3 EBI VF.
- Version 2: Rewrite the EBI header and footer in v2.0 HTML and pull from the contentHub, then we can drop the legacy CSS and use "pure" v2.0 CSS.
    - We can't yet do this as v1.3 is still the stable and supported solution for EBI sites, we will need to move a majority of sites to VF 2.0 before we can drop `v1.3/js/script.js`

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
