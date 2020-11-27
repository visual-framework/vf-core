### 2.3.1

* issue with margin-bottom still in place when using `vf-stack` with `vf-card__content`.

### 2.3.0

* adds new `--bordered` and `--striped` design variants.
* added `vf-stack` to the `vf-card__content` element to determine spacing.
* allows for the lack of `vf-stack` for older components.
* started the deprecation of the 'Mortal Kombat' variants, initally by hiding them in vf-core.
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
