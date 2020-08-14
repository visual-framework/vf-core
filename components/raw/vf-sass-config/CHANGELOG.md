# Change Log

## 1.2.0

* creates mixin for grid column and row gap
* Restores the ability to have local design tokens by not requiring a npm-installed vf-design-tokens.
  * https://github.com/visual-framework/vf-core/pull/1009

## 1.1.2

* Changes filepaths so they're relative where needed

## 1.1.1

* Adds missing global custom properties

## 1.1.0

* Adds the relative paths to @import for files rather for when the index.scss is used in other projects
* Adds stylelint dis/enabled wrapper so it doesn't shout about design tokens
* Adds @visual-framework/vf-design-tokens as a dependency

## 1.0.3

* Breakpoint map was missing from vf-variables.scss

## 1.0.1 (2020-01-24)

* Tweaks link mixin, adds `@mixin inline-link--dark-mode`

## 1.0.0 (2019-12-17)

* Initial stable release
