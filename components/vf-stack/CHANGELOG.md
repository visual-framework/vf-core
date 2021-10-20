### 3.0.0

* With `vf-stack` more consistently adopted we remove `!important` and `vf-u-fullbleed` override. Some spacing regressions are possible.
* Sets a null vf-stack at the lowest CSS specificity.

### 2.1.2

* vf-stack no longer applies between a `vf-hero` and `vf-u-fullbleed`.
* Gives more margin-top to `vf-u-fullbleed` after most items.

### 2.1.1

* adds usage guideline for include the default `vf-stack` and the size variant.

### 2.1.0

* adds more options: `200`,`500`,`1200`, and `1600` vertical spaces.

### 2.0.1

* changes any `set-` style functions to cleaner version

### 2.0.0

* replaces all spacing / sizing values with new tokens naming convention

### 1.2.0

* now uses Nunjucks 'blocks' so we can use this layout more programmatically
* hides the default Nunjucks file as it renders what looks like a blank page (because it's waiting for the block content)
* creates separate Nunjucks files to display variants in Fractal
* updates naming conventions of variables available
  * introduces `stack__spacing__custom` which will replace `custom_spacing_property` in the `2.0.0` component release

### 1.1.1

* dependency bumps

### 1.0.0-alpha.1

* Adds example if statement for setting context
