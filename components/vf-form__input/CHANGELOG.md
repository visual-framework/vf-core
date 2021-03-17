### 3.0.0-alpha.1

* reworks the inputs to make more use of nunjucks
* restyles the inputs to match latest design direction
* adds better documentation
* adds a live search input variant

### 2.0.1

* changes any `set-` style functions to cleaner version

### 2.0.0

* Changes styling of the inputs.
* Changes order of form helpers, error messages, etc.
* Updates example .njk to use stack.
* https://github.com/visual-framework/vf-core/pull/1228/

### 1.1.0

* adds `type="search"` form input
* styles the cancel button so it uses our icon set and is bigger than user agent default

### 1.0.1

* adds `webkit-appearance: none;` as needed for Safari browsers as autoprefixer is not doing this

### 1.0.0

* removes `vf-u-sr-only` as not needed with removal of floatLabel.js
* adds invalid input example
* updates disabled styles
* reduces internal padding of the input box

### 1.0.0-alpha.10

* Revert "Make vf-form subpatterns workable"
  * https://github.com/visual-framework/vf-core/commit/706953b6fcfbbd1965d17b2ca082432af90ab752
