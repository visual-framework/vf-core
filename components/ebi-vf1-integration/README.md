# Compatibility with EBI-VF 1.x Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Febi-vf1-integration.svg)](https://badge.fury.io/js/%40visual-framework%2Febi-vf1-integration)

## todo: add this to vf-core components as we'll want to use this in many places

This adds fixes, compatibility and workarounds for sites that use the EBI VF versions 1.1, 1.2 or 1.3.

Enable its use by:

- `body class="ebi-vf1-integration"`, or
- wrapping a section of html with the class `.ebi-vf1-integration`

## Install

### Option 1

Use the global VF 2.0 CSS along side your existing VF 1.x CSS; see: https://dev.beta.embl.org/guidelines/design/patterns/

### Option 2

If you don't want to include all the VF 2.0 CSS, add only the compatibility CSS:

```
https://dev.assets.emblstatic.net/embl-design-system/develop/assets/ebi-vf1-integration/ebi-vf1-integration.css
```

### Option 3

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `ebi-vf1-integration` with this command.

```
$ yarn add --dev @visual-framework/ebi-vf1-integration
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/ebi-vf1-integration/index.scss";
```

_Make sure you import Sass requirements along with the modules._
