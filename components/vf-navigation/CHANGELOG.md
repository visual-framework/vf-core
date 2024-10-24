### 5.0.3

* Changelog correction [Tracking issue](https://github.com/visual-framework/vf-core/issues/2035)

### 5.0.2

* Fixed lint errors. [Tracking issue](https://github.com/visual-framework/vf-core/issues/1935)

### 5.0.0

* Version change

### 5.0.0-rc.1

* Removed: Attribute `data-vf-js-navigation-on-this-page-link` for vf-navigation--on-this-page
* Changed: Improved accuracy of vf-navigation--on-this-page scrollspy, use existing attribute to get navigation links
* Changed: Improve scrolling into an element when clicking a link of vf-navigation--on-this-page, take into account margin/padding

### 4.0.0-rc.1 [YANKED]

* Make vf-navigation--on-this-page more dynamic and reactive with `data-vf-js-navigation-on-this-page-link`.

### 3.0.0-rc.2

* Fixed bug where the `vf-navigation` component was getting overlapped by other components.
* https://github.com/visual-framework/vf-core/issues/1755


### 3.0.0-rc.1

* Give vf-navigation--on-this-page a bigger bottom margin on desktop as vf-u-fullbleed eats a bit of bottom margin by its nature.
* https://github.com/visual-framework/vf-core/pull/1732

### 3.0.0-rc.0

* Introduces `vf-navigation--on-this-page`.
* Removes `vf-navigation--additional`.
* https://github.com/visual-framework/vf-core/issues/1623

### 3.0.0-beta.2

* Minor README.md update.

### 3.0.0-beta.1

* Re-release of 3.0.0-beta.0 to fix garbled version number.
* Fixes a broken Sass file reference.
  * https://github.com/visual-framework/vf-core/issues/1469

### 3.0.0-beta.0

* deprecated the `--additional` variant.
* removes `--main` and `--global` Sass files, incorporating them into the base stylesheet.
* tidies up quite a bit of CSS.
* makes use of `vf-cluster` for layout in the markup.
* adds some documentation.

### 2.2.2

* Fixes CSS to match stylelint rules.
  * https://github.com/visual-framework/vf-core/pull/1405

### 2.2.1

* changes any `set-` style functions to cleaner version

### 2.2.0

* removes bottom margin for `--main`.
* replaces padding with margin for `--main`.
* duplicates the top margin for `--main` because sometimes it's out of the `vf-stack` flow.

### 2.1.0

* fixes a bug with the `--additional` variant.
* introduces `njk`/`yml` variable look up to determine classnames to use:
  * adds `vf-cluster` only to `--main` variant.
  * replaces `--additional` CSS for full bleed background with `vf-u-fullbleed` class.

### 2.0.0

* increases font size for `--main`.
* removes all variants of `--main`.
* adds `vf-cluster` to the component for responsive layout
* adds `aria-current="page"` rule and CSS to denote the current page.
* adds `:hover` to links.

### 1.2.5

* updates max-width of component variants

### 1.2.4

* updates max-width of component

### 1.2.3

* adds `margin-left: auto` for when we want flexbox to push the navigation to the right
* swaps `margin-right` for `margin-left` for spacing
* removes duplicate `text-decoration`

### 1.2.1

* makes navigation wrap on mobile
* adjusts spacing values to match

### 1.2.0

* Removes `--medium` variants
* Introduces `--very-easy` variant
* Pulls all design variants back one

### 1.0.0

* Initial stable release
