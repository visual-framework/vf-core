### 2.0.0-alpha.5

* Readme formatting fixes.

### 2.0.0-alpha.4

* Style import fixes for experimental angular support.

### 2.0.0-alpha.3

* Fixes for experimental angular support.

### 2.0.0-alpha.2

* Adds experimental angular support. See README.md for more.

### 2.0.0-alpha.1

* Requires at least `@visual-framework@vf-sass-config@2.6.1`.
* Ensure no colour is set with revised `set-type` mixin.
  * https://github.com/visual-framework/vf-core/pull/1606

### 2.0.0-alpha.0

* removes deprecated code
* turns the primary, secondary, tertiary into actual things - rather than aliases.

#### Migration Instructions

* If you were using the "Outline Primary" variant you should use the "Secondary" variant now.
  * This replaces the classes of vf-button--primary and vf-button--outline with vf-badge--secondary.

### 1.4.4
* Added `link` theme button variant. This variant is similar to link style.

### 1.4.3

* Added react implementation of button
  * https://github.com/visual-framework/vf-core/pull/1416
  * (Experimental) React documentation: https://visual-framework.github.io/vf-react/#/components-showcase

### 1.4.1

* changes any `set-` style functions to cleaner version

### 1.4.0

* Removes variants that are not to be used from the examples available.
* Adds usage documentation.

### 1.3.1

* React: Use react-dom-fragment to return HTML fragments.
  * https://github.com/visual-framework/vf-core/pull/1291

### 1.3.0

* adds react support
  * https://github.com/visual-framework/vf-core/pull/1278

### 1.2.0

* updates spacing design tokens
* requires `v2.0.0` of the `vf-design-tokens` package or newer

### 1.1.2

* adds `webkit-appearance: none;` as needed for Safari browsers as autoprefixer is not doing this

### 1.1.1

* removes the `:hover` text color rule so that it doesn't to white on hover

### 1.1.0

* makes theme variant naming and decisions consistent

### 1.0.4

* makes it work as an include as well as render
* fixes bug with using the button aesthetic as a link

### 1.0.3

* adds :focus styles to vf-button--outline
  - https://github.com/visual-framework/vf-core/pull/857

### 1.0.1

* Button colours corrected for browsers that don't support CSS custom properties (IE)

### 1.0.0 (2019-12-17)

* Initial stable release
