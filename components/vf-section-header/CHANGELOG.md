### 1.5.5

* fix: Changed the hidden header code to show a header without a link. If not hidden then it'd show as usual.

### 1.5.4

* feat: Added hidden field (optional) to address accessibility issues for H2 tags

### 1.5.3

* Bug: following 1.5.2, ensures that links are always style correctly.

### 1.5.2

* Accessibility: When section header is a link, it should still be wrapped an `h2`
  * https://github.com/visual-framework/vf-core/issues/1683
* Whitespace control

### 1.5.1

* Fixes the vertical centering of the svg arrow on vf-section-header. Also aligns better with the Figma design kit.
  * https://github.com/visual-framework/vf-core/pull/1562

### 1.5.0

* makes if possible to use HTML in the section header text.

### 1.4.0

* changes value of SVG to use `em`s so it scales with the typeface size.
* makes the hover effect consistent with new `vf-card`s
* makes the positioning match the baseline of the text

### 1.3.2

* Removes an extra `}` in the Nunjucks template that was corrupting the html.
* Better handle whitespace.
* https://github.com/visual-framework/vf-core/pull/1317

### 1.3.1

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

### 1.3.0

* updates spacing design tokens
* requires `v2.0.0` of the `vf-design-tokens` package or newer

### 1.2.2

* adds `id` for anchor support

### 1.2.1

* makes the `--is-link` variant use CSS grid so the arrow SVG icon is always to the top, right of the text

### 1.2.0

* Adds nunjucks if statement for adding context if component used as sub-component

### 1.1.1

* SVG is a visual queue: adds aria-role="hidden" to the SVG in the component so screen readers don't announce it
  https://github.com/visual-framework/vf-core/pull/873

### 1.1.0

* adds ability for section header to have sub-heading and text
* :visited styles so they're blue
* removes cursor: pointer and display: block from --is-link
* moves transform out of todo
* fixes transition-property to animation works
* adds last-of-type to vf-section-header__text to remove any margin

### 1.0.3

* Increase spacing between header link and arrow icon

### 1.0.1

* Resolves bug in passing links to template

### 1.0.1

* Adds support for headers as links

### 1.0.0

* Initial stable release
