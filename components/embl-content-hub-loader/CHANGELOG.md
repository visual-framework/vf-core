### 1.2.0

* contentHub html responses are nested deep in many layers of divs, so we ensure a default vf--stack applies to grid containers.
* https://github.com/visual-framework/vf-core/pull/1725

### 1.1.1

* Avoid a null variable issue when contentHub returns no results.

### 1.1.0

* adds overrides for more permutations of where the vf-global header lives

### 1.0.9

* Improve JS module import support.
  * https://github.com/visual-framework/vf-core/pull/1476/

### 1.0.8

* Fix a bug when vfBanner or vfTabs are not present
  * https://github.com/visual-framework/vf-core/issues/809

### 1.0.7

* JS linting

### 1.0.6

* invoke `emblContentHubSignalFinished()` even in cases where there was nothing to load

### 1.0.5

* Fix detection of no response from the contentHub for `embl-js-content-hub-loader-no-content` and `embl-js-content-hub-loader-no-content-hide`

### 1.0.4 (2020-03-20)

* adds support to load embl-notifications component

### 1.0.2

* adds features for when no content is returned. Supply "no content found" text or hide a region

### 1.0.1 (2019)

* adds CSS for times when the `*-content-hub-html` is a direct child of `vf-body`

### 1.0.0 (2019-12-17)

* Initial stable release
