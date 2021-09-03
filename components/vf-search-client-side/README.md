# Client-side Search component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-search-client-side.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-search-client-side)

## About

This uses Lunr.js to perform a client-side search of a site's content.

## Usage

This approach is recommended only for sites with a limited number of pages (around 500 or fewer), otherwise the client side search index can become many megabytes in size.

If your site is in a subdirectory or has other requirements, you specify any required prefix to your search URL with `data-vf-search-client-side-destination-prefix="https://myprefix"`.

### Warning: Early alpha, lot's of "to do"s

This is an early alpha. More customisation options need to be added, such as:

- passing search parameters (boost score) to the JS
- customising the output format
- NJK template has hardcoded paths for vf-core

### Supplying a search index

This consumes a `.js` file with a `searchIndex` object of pages, a la:

```json
let searchIndex = {
  "pages": [
    {"id":"0", "title": "Page title", "text": "Body text of page goes here", "tags": "", "url": "/index.html"},
    ...
  ]
};
```

To make this index, you can utilise the ability of [`vf-extension` to generate a search index](https://github.com/visual-framework/vf-core/blob/develop/tools/vf-extensions/gulp-tasks/gulp-build-search-index.js).

1. Making an index

To generate that JS file, if you're using a vf-eleventy based site, you may also want to make use of the `vf-extensions`'s `gulp-build-search-index.js`:

> `require('./node_modules/\@visual-framework/vf-extensions/utils/gulp-build-search-index.js')(gulp, path, buildDestionation);`

2. Dependencies

If you use that JS you'll also need some npm dependencies:

`yarn add strip-js striptags node-html-parser`

3. Tell gulp to make the index

And you should build that search index after updating your html pages, a la:

```
  // build search index after search page is compiled
  gulp.watch(['./build/search/index.html'], gulp.parallel('vf-build-search-index'));

  // And for your `build` task
  gulp.task('build', gulp.series(
    ...
    'eleventy:build',
    'vf-build-search-index',
    ...
  ));

  // And for your `dev` task
  gulp.task('dev', gulp.series(
    ...
    'eleventy:build',
    'vf-build-search-index',
    ...
  ));
```

### Using search

- You can pass a query to the search page with `?search_query=myQuery`
- The search will live update as the user enters text
- You can enable `autofocus` on the search element, but should only do so if most users intend to search on the page

## Install

This repository is distributed with [npm](https://www.npmjs.com/). After [installing npm](https://nodejs.org/), you can install `vf-search-client-side` with this command.

```
$ yarn add --dev @visual-framework/vf-search-client-side
```

### Sass/CSS

The style files included are written in [Sass](https://sass-lang.com/). If you're using a VF-core project, you can import it like this:

```
@import "@visual-framework/vf-search-client-side/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
