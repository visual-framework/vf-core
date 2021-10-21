### 1.5.0

This deprecates vf-link-list as many components are either widely unused or only seldom used — for the components that aren't yet used much we also have major revisions coming and we wish to discourage use of components that are about to be overhauled.

* Links List Default: use vf-list + vf-heading
* Links List no heading: use vf-list
* Links List Tight: use vf-list  (we may add a vf-list--tight variant subject to demand)
* Links List Very Easy: see above
* Links List Easy: to be overhauled as vf-navigation--on-page
* Links List Has Images: use vf-summary--has-image or vf-flag--middle

Additionally there has been a confusion between when to use vf-list and vf-link-list that we're want to address.

https://github.com/visual-framework/vf-core/issues/1649

### 1.4.0

* Requires at least `@visual-framework@vf-sass-config@2.6.1`.
* Use design tokens for colors, by using mixins for `text-color`  and `link-color`.
  * https://github.com/visual-framework/vf-core/pull/1606

### 1.3.4

* changes any `set-` style functions to cleaner version

### 1.3.1

* Resolve issue of missing import in index.scss
  * https://github.com/visual-framework/vf-core/pull/1306

### 1.3.0

* makes the `vf-links__heading` optional.

### 1.2.0

* updates spacing design tokens
* requires `v2.0.0` of the `vf-design-tokens` package or newer

### 1.1.1

* fixes issue where the SVG icon was not appearing with vf-links__list--easy

### 1.1.0

* adds an if statement so context data can be passed through
* refactors have `vf-badge` is used so that it can take context data rather than just render

### 1.0.3

* adds ability to drop in a `vf-badge` component after a link in `--has-images` variety

### 1.0.2

* Captilisation of `On this page` and `In this section`
* Fix spelling of `vf-icon__arrow--down`

### 1.0.1

* Add `vf-links--tight`
* Add `vf-links__list--easy`

### 1.0.0

* Initial stable release
