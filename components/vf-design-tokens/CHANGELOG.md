### 3.6.3

* Fix documentation for sassFunction interactive-color
* https://github.com/visual-framework/vf-core/pull/1711

### 3.6.2

* Add `interactive-color` tokens.
  * https://github.com/visual-framework/vf-core/issues/1688

### 3.6.1

* Introduces new z-index token for overlays.

### 3.6.0

* Accessibility: Set primary text to off-black.
* Developer tools: add `sassFunction` and `sassMap` information to token meta information.
* Reduce `text-body--1` to 28px (was 32px) in size based on design input and feedback.
* https://github.com/visual-framework/vf-core/issues/1587

### 3.5.0

* Generate json for theme colours.
* Display theme colours in component library.
* Deprecates old primary, secondary, tertiary themes in favour of vf-color__brand and interactive, text colours.
* Remove extraneous `$` prefix in spacing sass variable token (this only affected a double `$$` in generated documentation).

### 3.4.1

* Adds a gulp command vf-design-tokens alias for developers who easily forget.

### 3.4.0

* introduces neutral colours stack Design Tokens.
* adds deprecation notices to relevant Design Tokens, to be remove in next major version release.

### 3.3.0

* removes unused link colours

### 3.2.0

* reduces the maximum layout width token

### 3.1.0

* adds `--1600` (`4rem`) spacing token.

### 3.0.0

* We're moving the documentation to the `vf-component-library`
  - https://stable.visual-framework.dev/design-tokens/
* removes all `.njk` documentation files
* hides from Fractal
* removes any other files no longer needed

### 2.1.0

* update documentation pages for all design tokens used to make use of updated CSS

### 2.0.0

* updates all spacing variables to use numbers for sizing

### 1.3.1

* fix display of design token component documentation
  - https://github.com/visual-framework/vf-core/pull/1134

### 1.3.0

* adds z-index values for `vf-box` component

### 1.2.1

* dependency bump

### 1.2.0

* adds themed design tokens
* creates theme variants documentation page
* creates theme variant maps, sass variables, css custom properties

### 1.1.0

* Adds some basic layout (width) tokens

### 1.0.5

* Updates the z-index to separate any banner or hero from banner

### 1.0.4

* Swaps `--vf-ui-color--grey` and `--vf-ui-color--grey--light` which had been inverted
* `vf-link--visited-color` now defaults to grey, visited purple states are now overrides and default for long-form `vf-content`

### 1.0.2 (2020-01-24)

* Improves visited link colour
* Adds inverted colours for use atop dark backgrounds

### 1.0.1 (2019-12-18)

* Update npm dependencies

### 1.0.0 (2019-12-17)

* Initial stable release
