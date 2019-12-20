# vf-explainer Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-explainer.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-explainer)

Life science websites love a bit of jargon and complicated concepts and "explainers" help for terms like: `ORCID`, `transcript isoform`, and `lymphoblastoid cell lines`.

This will likely be similar to "[tooltips](https://www.appcues.com/blog/tooltips)".

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

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-explainer` with this command.

```
$ yarn add --dev @visual-framework/vf-explainer
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-explainer/index.scss";
```

_Make sure you import Sass requirements along with the modules._
