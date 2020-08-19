# vf-search-client-side Component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-search-client-side.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-search-client-side)

This uses Lunr.js to perform a client-side search of a site's content. This is recommended only for sites with a limited number of pages.

It consumes a `.js` file with an object of pages, a la:

```
let searchIndex = {
  "pages": [
    {"id":"0", "title": "Page title", "text": "Body text of page goes here", "tags": "", "url": "/index.html"},
    ...
  ]
};
```

## Building a search index

To generate that JS file, if you're using a vf-eleventy based site, you may also want to make use of the `vf-extensions`'s `gulp-build-search-index.js`:

> `require('./node_modules/\@visual-framework/vf-extensions/utils/gulp-build-search-index.js')(gulp, path, buildDestionation);`

And you should build that search index after updating your html pages, a la:

```
  // build search index after search page is compiled
  gulp.watch(['./build/search/index.html'], gulp.parallel('vf-build-search-index'));
```

## Using search

- You can pass a query to the search page with `?search_query=myQuery`
- The search will live update as the user enters text

## To do

This is an early alpha. More customisation options need to be added, such as:

- passing search paramaters (boost score) to the JS
- customising the output format

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `vf-search-client-side` with this command.

```
$ yarn add --dev @visual-framework/vf-search-client-side
```

## Usage

The source files included are written in [Sass][sass] (`scss`) You can simply point your sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-search-client-side/index.scss";
```

_Make sure you import any requirements along with the modules._
