### 2.6.0

* Changes mixin `set-type` to use the primary colour (off black) by default
* Adds functions and imports for:
  * `vf-color__text.custom-properties.scss`
  * `vf-color__buttons.custom-properties.scss`
  * `vf-color__brand.custom-properties.scss`
* Prepare to deprecate `vf-themes.custom-properties.scss`

### 2.5.4

* Darken and increase figure text size
  * https://github.com/visual-framework/vf-core/issues/1582

### 2.5.3

* Adds `mixins/vf-utility-mixins.scss` to index.scss
* Fixes a broken variable reference.
  * https://github.com/visual-framework/vf-core/issues/1469

### 2.5.2

* Fix key name in `vf-color--neutral` lookup.
  * https://github.com/visual-framework/vf-core/pull/1460

### 2.5.1

* adds neutral colours in the custom variables import file

### 2.5.0

* adds neutral colour tokens function `neutral(Nn)`
### 2.4.1

* changes any `set-` style functions to cleaner version
* fixes issue now link color disabled no longer exists

### 2.4.0

* updates the `$global-page-max-width` variable so that it's consistent with the page width across components - set to `80rem`

### 2.3.1

* fixes bug in --page-grid-gap printing Sass function in CSS

### 2.3.0

* introduces a `space` Sass function to save the keystrokes.
  * instead of typeing `map-get($vf-spacing-map, vf-spacing--400)` you can write `spacing(400)` for the same result.
* I've added this terse naming of the function for `set-color` and `set-ui-color` to be something like `color(green)` instead of `set-color(vf-color--green)`. The old way still works.
* fixes import order of `vf-global-custom-properties.scss`
  * https://github.com/visual-framework/vf-core/pull/1263

### 2.2.1

* fixes bug where `--page-grid-gap` wasn't getting it's correct spacing unit because the Sass `map-get` was not interpolated.

### 2.2.0

* updates `--page-grid-gap` for larger viewports to `2rem` instead of `1.5rem`.
* updates the `embl-grid` small column size from `238px` to `16rem`.

### 2.1.0

* replaces spacing design tokens

### 2.0.0

* removes the inline margin from the component
* adds the block end margin an creates a Sass variable for `$margin--block-end`
* adds `width: 100%;` as it was defaulting to `width: auto;`

### 1.4.3

* adds `webkit-appearance: none;` as needed for Safari browsers as autoprefixer is not doing this

### 1.4.2

* updates the `$global-page-max-width` variable so that it's consistent with the page width across components - set to `81.25rem`

### 1.4.0

* creates supporting Sass files for new theming design tokens to be used

### 1.3.0

* adds a width css custom property for `vf-body` component
* reorganises the order variables are used

### 1.2.0

* creates mixin for grid column and row gap
* Restores the ability to have local design tokens by not requiring a npm-installed vf-design-tokens
  * https://github.com/visual-framework/vf-core/pull/1009

### 1.1.2

* Changes filepaths so they're relative where needed

### 1.1.1

* Adds missing global custom properties

### 1.1.0

* Adds the relative paths to @import for files rather for when the index.scss is used in other projects
* Adds stylelint dis/enabled wrapper so it doesn't shout about design tokens
* Adds @visual-framework/vf-design-tokens as a dependency

### 1.0.3

* Breakpoint map was missing from vf-variables.scss

### 1.0.1

* Tweaks link mixin, adds `@mixin inline-link--dark-mode`

### 1.0.0

* Initial stable release
