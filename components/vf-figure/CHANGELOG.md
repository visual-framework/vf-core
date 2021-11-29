### 2.0.1

* Support passed context.
* https://github.com/visual-framework/vf-core/issues/1509

### 2.0.0

* Removed `width: 100%` from the `.vf-figure__image` class.
* Added `display: block` to the `.vf-figure__image` class.
* Removed CSS for the width when the `vf-figure` is using floats.

### 1.3.0

* adds loading="lazy" to the img element for better performance

### 1.2.0

* Changes structure of nunjuck to add the ability to make use of props
* Changes class selector naming from `float` to `align`
* Adds a `align-centered` variant
* Adds `--vf-figure__width` as a CSS Custom Property that can be overriden
* Adds some documentation

### 1.1.0

* Adds vf-figure--float (-inline-start and -inline-end) variants

### 1.0.0-beta.2

* removes the `| path` from the njk template which made it non-usable outside of Fractal
