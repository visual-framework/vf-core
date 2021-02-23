### 2.3.1

* changes any `set-` style functions to cleaner version

### 2.3.0

* updates font size for title/heading
* makes sure the text is black inside the `--easy` variant.

### 2.2.0

* adds internal padding option back

### 2.1.0

* updates spacing design tokens
* requires `v2.0.0` of the `vf-design-tokens` package or newer

### 2.0.2

* fixes bug with `-link` variant by adding position relative to `vf-box`
* adds `| safe` to `vf-box__text` variable so that HTML can be parsed through

### 2.0.1

* margin reset on `.vf-box :last-child` now has more specificity as `.vf-box > :last-child`

### 2.0.0

* removed bottom margin from component. You should now make use of `vf-stack` in a parent element to create vertical spacing between multiple components
* made the `vf-box__title` the link rather than the whole component, using ::after pseudo element so the whole of `vf-box` is clickable
* added some more examples (easy primay with link, normal primary with link, normal primary with link with text link)
* removed 'default' component `.yml` data
* removed `box` from `.yml` and `.njk` for setting context as it was an additional step
* adds `variant` and `theme` options to replace `vf-box__modifier` (`vf-box__modifier` will be removed in `v3,0`)
* removes previously deprecated variants `vf-box--inlay` and `vf-box--factoid`

### 1.1.1

* fixes issue with links in `vf-box__text` being visited and purple

### 1.1.0

* makes theme variant naming and decisions consistent

### 1.0.3

* handle `a` elments inside the text in old WP posts

### 1.0.2 (2020-03-20)

* Flattens Nunjucks template variables for more portability https://github.com/visual-framework/vf-core/pull/805

### 1.0.1

* Removes `--medium` variants
* Introduces `--very-easy` variant
* Pulls all design variants back one
* Deprecates `vf-box--inlay` and `vf-box--factoid`
* Introduces component–level theming variants

### 1.0.0 (2019-12-17)

* Initial stable release
