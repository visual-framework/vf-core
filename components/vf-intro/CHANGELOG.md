### 1.5.0

* Remove `vf-badge--phases` after upstream removal in vf-badge@2.0.0
  * https://github.com/visual-framework/vf-core/pull/1546
* Improve placement of `.vf-intro__heading--has-tag .vf-badge` to facilitate assorted widths and multiline headings

### 1.4.7

* Fixes CSS to match stylelint rules.
  * https://github.com/visual-framework/vf-core/pull/1405

### 1.4.6

* Add support for anchor `id` attribute.

### 1.4.5

* Move the example content into a default variant to stop it printing out when using `render ..`.

### 1.4.4

* Fixes a missing vf_intro_subheading vf-intro.njk's context.
* Fixes README.md invalid example syntax.
* https://github.com/visual-framework/vf-core/pull/1326

### 1.4.3

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306


### 1.4.2

* bug: don't apply styling to `a` elements that have a `.vf-*` class

### 1.4.1

* added `column-gap` as this was missed

### 1.4.0

* adds the option to have a nicer styled 'sub-heading'
* introduces the use of `vf-stack` to layout out the vertical stacking of the content
* use `--vf-stack-margin--custom` to align things as required
* removes use of `embl-grid` and lets `vf-intro` roll it's own

### 1.3.2

* resets the custom property used for `gap` in `embl-grid` so it only worries about the column gap

### 1.3.1

* updates max-width of component

### 1.3.0

* adds ability for `vf-badge` to be customised with it's variants
* allows for fallbacks so older versions will still work
* removes old way of doing `vf-badge` from demo code
* makes `vf-lede` work

### 1.2.0

* wraps all content except heading in if statement
* changes how badges are implemented inside an if statement

### 1.1.0

* adds if statement to pass context data through to component
* improves documentation

### 1.0.2

* Simplify grid

### 1.0.0

* Initial stable release
