# Explainer component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-explainer.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-explainer)

## About

Life science websites love a bit of jargon and complicated concepts and "explainers" help for terms like: `ORCID`, `transcript isoform`, and `lymphoblastoid cell lines`.

## Usage

This will likely be similar to "[tooltips](https://www.appcues.com/blog/tooltips)" or "[foldable info tabs](https://www.ebi.ac.uk/style-lab/websites/patterns/foldable-info-tabs.html)".

Conceptual code:

```html
<span aria-describedby="whatis-orcid">ORCID</span>

<div id="whatis-orcid" class="vf-explainer">
 <dfn class="vf-explainer--dfn">ORCID</dfn> is a unique identifier for researchers to distinguish themselves, and make it easier to find specific work;
 <a href="https://orcid.org" target="_blank" class="vf-explainer__link">learn more</a>
</div>
```

This is a draft component, it is not yet functional. Background on the implementation, goals and work plan [can be found in the issue](https://github.com/visual-framework/vf-core/issues/314).

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-explainer` with this command.

```
$ yarn add --dev @visual-framework/vf-explainer
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-explainer/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://visual-framework.github.io/vf-core/building/) or the [`vf-sass-starter`](https://visual-framework.github.io/vf-core/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
