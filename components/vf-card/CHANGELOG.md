### 2.6.0

* Requires at least `@visual-framework@vf-sass-config@2.6.1`.
* Use design tokens for text colours.
  * https://github.com/visual-framework/vf-core/pull/1606

### 2.5.9

* Bug: correct a missing space in Nunjucks template.
  * https://github.com/visual-framework/vf-core/pull/1603

### 2.5.8

* Documentation: clarity on using card vs summary components.
  * https://github.com/visual-framework/vf-core/issues/1592

### 2.5.7

* Fixes the vertical centering of the svg arrow on vf-card titles. Also aligns better with the Figma design kit.
  * https://github.com/visual-framework/vf-core/pull/1562

### 2.5.6

* Fixes issue with modifiers
  * https://github.com/visual-framework/vf-core/issues/1523

### 2.5.5

* corrects colouring of visited link in heading on striped variant.

### 2.5.4

* adds `word-break: break-word;` to text so the text won't exceed the box model.

### 2.5.3

* Corrects fix in 2.5.2 by using `align-content: start;`.
  * https://github.com/visual-framework/vf-core/issues/1395#issuecomment-801232527

### 2.5.2

* adds `align-items: start;` to the card so all child align when in a card container.
* Fixes CSS to match stylelint rules.
  * https://github.com/visual-framework/vf-core/pull/1405

### 2.5.1

* fixes issue with HTML Entities and the README when running fractal.

### 2.5.0

* changes any `set-` style functions to cleaner version
* fixes issue with `vf-card__image` height in Safari.
* removes `grid-template-rows` as it's difficult to define now cards do not have to have images.
* adds a `--vf-card__image--aspect-ratio` CSS custom property to help with the initial image height.
* updates documentation to replace 'title' with 'heading' so it matches CSS classname.

### 2.4.0

* creates option to for a subheading
* creates option for a card with no image
* adds a svg icon similar to `vf-section-header` when the heading has a link
* adds documentation
* adds more examples for the variants available depending on the content
* hides all variants that should not be used.

### 2.3.3

* React: Use react-dom-fragment to return HTML fragments.
  * https://github.com/visual-framework/vf-core/pull/1291

### 2.3.2

* adds prototype react template
  * https://github.com/visual-framework/vf-core/pull/1278

### 2.3.1

* issue with margin-bottom still in place when using `vf-stack` with `vf-card__content`.

### 2.3.0

* adds new `--bordered` and `--striped` design variants.
* added `vf-stack` to the `vf-card__content` element to determine spacing.
* allows for the lack of `vf-stack` for older components.
* started the deprecation of the 'Mortal Kombat' variants, initially by hiding them in vf-core.
* introduced `newTheme` so the 'Mortal Kombat' variants can live side-by-side with news versions for now.
  * the `newTheme` moves us back to the 'primary' being the embl green, the secondary the embl blue, etc.
  * we now remove the `-theme` part of the css class moving forward as it's cleaner, easier to read, and states the same thing without it.
* created theme variants of the new design variants (these are hidden, and should not be used).

### 2.2.1

* fixes a hover issue if the card has a link and is the `--easy` variant.

### 2.2.0

* adds a slight box shadow to all card variants to denote that it's something on the page, not 'of the page'
* updates the hover box shadow so that it fits with the new box shadow on all cards

### 2.1.2

* fixes issue with `vf-card__image` height in safari
* adds `object-position: center` for image
* adds loading="lazy" to the img element for better performance

### 2.1.1

* adds alt text to examples
* conditional display of `card_title`

### 2.1.0

* makes theme variant naming and decisions consistent

### 2.0.0

* gives title option to have a link that fills 'card'
* makes links in text have a higher z-index than the whole card link
* fundamental .yml and .njk changes


### 1.0.4 (2020-03-20)

* Flattens Nunjucks template variables for more portability https://github.com/visual-framework/vf-core/pull/805

### 1.0.3

* Removes `--medium` variants
* Introduces `--very-easy` variant
* Pulls all design variants back one

### 1.0.2 (2020-01-28)

* Corrects YAML template usage and NJK template

### 1.0.1 (2020-01-24)

* Improves layout and design support

### 1.0.0 (2019-12-17)

* Initial stable release
