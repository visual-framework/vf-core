### 3.2.2

* Added: Attribute ‘hidden’ to container_section__header in config and accordingly it adds ‘vf-u-sr-only’ css class to hide section header, this to fix component accessibility
* Added: Added condition to components.njk to show example section for type=container
* Changed: vf-u-background-color--grey--lightest to vf-u-background-color-ui--white to apply white background
* https://github.com/visual-framework/vf-core/pull/1851

### 3.2.1

* Uses vf-stack for spacing to apply to elements immediately before or after vf-card-container.
* Removes spacing between fullbleed card containers and fullbleed items (footers, heroes)
* https://github.com/visual-framework/vf-core/pull/1698

### 3.2.0

* Fix README formatting.
* Halves vertical spacing between `vf-section-header` and vf-cards.
* Refines container vertical by using `--page-grid-gap)`.
* Adds 4 column card support for when cards have no imagery.

### 3.1.2

* Updates example to use content of different lengths.

### 3.1.1

* fixes issue in README that made fractal fail to load the container example.

### 3.1.0

* adds ability to define the `aspect-ratio` of the `vf-card` child components
* moves the `default` context data in the `.yml` file to a `variant` to allow easier use of `{#{% include %}#}`.

### 3.0.2

* update card sizes to make 3 columns
* adds `--vf-card-container__grid--size--overide` CSS custom property in CSS
* adds `--vf-card-container__grid--size--overide` as .yml option

### 3.0.1

* updates max-width of component

### 3.0.0-alpha.1

* makes `vf-section-header` work as a subcomponent
* changes async for a for loop
* adds contextual data changes if context is passed

### 2.0.0

* makes better use of using .yml for data rather than having to inline it in a `vf-card`
* better default spacing

### 1.0.0-alpha.2

* Tweaks layout centring

### 1.0.0-alpha.1 (2020-01-28)

* Corrects YAML template usage

### 1.0.0-alpha.0 (2020-01-24)

* Initial release
