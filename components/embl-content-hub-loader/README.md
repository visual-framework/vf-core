# EMBL ContentHub Loader component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-content-hub-loader.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-content-hub-loader)

## About

Use this component to remotely load markup and content from the central EMBL ContentHub, this particular component allows reuse and distribution of content ranging articles to navigation elements (such as a global footer).

Currently this is done as HTML imports (see the code example) + some JS. In the future other methods will be support (such as JSON).

### Supported patterns 

See the [introductory text on the contentHub](https://content.embl.org/).

### Standard HTML import

Load a content and pattern through the contentHub:

```html
<link rel="import" href="https://www.embl.org/api/v1/pattern.html?filter-content-type=article&filter-id=580&pattern=node-body&source=contenthub" data-target="self" data-embl-js-content-hub-loader>
```

### Options

There are optional features specified by data attributes, looks like:

```html
<link rel="import" href="https://www.embl.org/api/v1/pattern.html?source=contenthub&pattern=embl-person-publications&limit=100&sort-field-value[changed]=DESC&orcid=0000-0002-2524-5026&source=contenthub" data-target="publications-block" data-embl-js-content-hub-loader-no-content="No publications were found." data-embl-js-content-hub-loader-no-content-hide=".publications-container" data-embl-js-content-hub-loader>
```

Breakdown:

- `data-target="publications-block"`: pass the class of an element to insert text into
- `data-embl-js-content-hub-loader-no-content="No publications were found."`: String to use if no results found, can also pass `true` to use default no match text
- `data-embl-js-content-hub-loader-no-content-hide=".publications-container"`: If no results, hide an element that matches this selector selector 
- `data-inject-class="vf-grid vf-grid__col-2" data-inject-class-target="ul"`: Inject class(es) to a an element inside the returned content


## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `primer-buttons` with this command.

```
$ yarn add --dev @visual-framework/embl-content-hub-loader
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/embl-content-hub-loader/index.scss";
```

_Make sure you import Sass requirements along with the modules._
