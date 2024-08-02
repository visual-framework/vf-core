### 2.1.5

* Added : Experimental Angular support for Tabs [Tracking issue](https://github.com/visual-framework/vf-core/issues/2037)

### 2.1.4

* Changelog correction [Tracking issue](https://github.com/visual-framework/vf-core/issues/2035)

### 2.1.3

* Fixed lint errors. [Tracking issue](https://github.com/visual-framework/vf-core/issues/1935)

### 2.1.1

* Dynamically updates the URL based on the active tab
* Adds focus indicator and enables keyboard navigation

### 2.1.0

* Support activation of specific vf-tabs on page load `#vf-tabs__section=tab_id`
* Exposes `vfTabsSwitch` function
* https://github.com/visual-framework/vf-core/issues/1700

### 2.0.3

* Use `set-type` mixin to set margins.
* https://github.com/visual-framework/vf-core/pull/1698

### 2.0.2

* Prevent hijacking of scroll when focusing tabs.
  * https://github.com/visual-framework/vf-core/pull/1696
* Use new interactive colour token.
  * https://github.com/visual-framework/vf-core/issues/1688

### 2.0.1

* Bug: Add missing `@import 'vf-global-variables';` to generate standalone `vf-tabs.css`.
  * https://github.com/visual-framework/vf-core/pull/1581

### 2.0.0

* Updates the styling to match the design direction.
* This is a no-code-change update. It has been marked as visually breaking due to the major design change.
  * https://github.com/visual-framework/vf-core/pull/1551

### 1.2.2

* Conditional support of tab_heading in vf-tabs.njk template.

### 1.2.1

* changes any `set-` style functions to cleaner version

### 1.2.0

* Restructures that link between tabs from a sequential relationship to an explicit relationship based off the tab href and panel id.
  * https://github.com/visual-framework/vf-core/issues/1136
* This is a non-breaking change that may be further improved with an optional data-vf-js-tab-id

### 1.1.2

* JS linting

### 1.1.1

* fixes the space a tab takes to 'max-content'

### 1.1.0

* simplifies the CSS
* makes multilple tabs look slightly nicer on mobile devices

### 1.0.0

* Initial stable release
