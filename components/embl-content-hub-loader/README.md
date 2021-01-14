# EMBL ContentHub Loader component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fembl-content-hub-loader.svg)](https://badge.fury.io/js/%40visual-framework%2Fembl-content-hub-loader)

## About

Use this component to remotely load markup and content from the central EMBL ContentHub, this particular component allows reuse and distribution of content ranging articles to navigation elements (such as a global footer).

## Usage

Currently this is done as HTML imports (see the code example) + some JS. In the future other methods will be support (such as JSON).

### Integrations

After loading from contentHub, this component will also invoke these functions on child content:

- `vf-banner/vf-banner`
- `vf-tabs/vf-tabs`
- `embl-conditional-edit/embl-conditional-edit`
- `embl-notifications/embl-notifications`

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

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install), you can install with this command.
```
$ yarn add --dev @visual-framework/embl-content-hub-loader
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/embl-content-hub-loader/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
