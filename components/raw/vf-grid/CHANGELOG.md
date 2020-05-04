# Change Log

## 1.0.5 (2020-05-01)

* fixes a remaing bug with IE11 where we relied on the calc function
  * https://github.com/visual-framework/vf-core/pull/900

## 1.0.4 (2020-04-22)

* fixes a bug with IE11 where we relied on the calc function inside the flex (which IE11 does not support) in the flexbox fallback grid defined columned classes (.vf-grid__col-2 > * {...) etc).
  * https://github.com/visual-framework/vf-core/pull/882

## 1.0.2 (2020-03-20)

* fixes issue with vf-grid inside vf-body https://github.com/visual-framework/vf-core/pull/802

## 1.0.1 (2020-01-24)

* Removes over-agressive border on 1 column layouts

## 1.0.0 (2019-12-17)

* Initial stable release
