### 2.1.2

* Dependency update [Tracking issue](https://github.com/visual-framework/vf-core/issues/1647)

### 2.1.1

* Dependency update [Tracking issue](https://github.com/visual-framework/vf-core/issues/1647)

## 2.1.0-alpha.1

* Feature: This adds support for Eleventy v2 and should remain backwards compatible with v1.

## 2.0.0-alpha.3

* Bug fix - Updated search logic to show correct page description in search results
* https://github.com/visual-framework/vf-core/pull/1857

## 2.0.0-alpha.2

* Further revises integration with eleventy-cmd.js to allow more control from gulp.
* https://github.com/visual-framework/vf-core/pull/1721

## 2.0.0-alpha.1

* Support Eleventy 1.0.0 change in how its build process works
  * https://github.com/visual-framework/vf-core/pull/1257
  * https://github.com/11ty/eleventy/releases/tag/v0.12.1

### 1.0.1

* Dependency update.

### 1.0.0

* Bug: in `gulp-build-search-index` ensure `body` is a string for `striptags`.
  * https://github.com/visual-framework/vf-core/pull/1601

### 1.0.0-rc.1

* Updates highlightjs syntax of render and codeblock tags
  * https://github.com/visual-framework/vf-core/pull/1435
  * https://github.com/highlightjs/highlight.js/issues/2277

### 1.0.0-rc.0

* Improve Eleventy-Fractal integration to avoid unnecessary Eleventy rebuilds on Sass and JS updates.
  * https://github.com/visual-framework/vf-core/pull/1309

### 1.0.0-alpha.9

* Update documentation note on pointing to `gulp-build-search-index.js`
* Search indexer now removes html areas wrapped in `class="vf-search-client-side--no-index"`
