### 2.2.0

* Drops custom margin-bottom, you should rely on vf-stack.

### 2.1.2

* Fixes CSS to match stylelint rules.
  * https://github.com/visual-framework/vf-core/pull/1405

### 2.1.1

* changes any `set-` style functions to cleaner version

### 2.1.0

* makes the layout something that can now use 'extends' within nunjucks

### 2.0.4

* fixes issue with `auto` and `1fr` doing the opposite with the sidebar


### 2.0.3

* changes breakpoint for sidebar to be a sidebar from 1024px
* makes the sidebar smaller until it hits 1300px

### 2.0.1

* fixes issue where `embl-grid` didn't allow for more 'main content' items
* fixes issue where `embl-grid--has-sidebar` had it's auto and 1fr backwards

### 2.0.0

* removes unused `--alt` version (use a utility class for background colour)
* adds more space for content in initial (prime) column and sidebar column (if used)
* tidies up CSS by using css custom properties for variants
* removes weird margin that was used beforehand
* takes the hairline out of `--has-sidebar` and gives it it's own modifier class

### 1.0.4

* The one where we make our CSS grid-gaps gaps
  - https://github.com/visual-framework/vf-core/pull/843

### 1.0.2

* `.embl-grid` uses `[main-start]` and `[main-end]` for more reliable positioning of child grids

### 1.0.1

* Uses `--page-grid-gap` custom property for sidebar gap; https://github.com/visual-framework/vf-core/pull/694

### 1.0.0 (2019-12-17)

* Initial stable release
