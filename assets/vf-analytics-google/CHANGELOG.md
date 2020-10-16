### 1.0.0-rc.5

* `vfGaIndicateLoaded()` now accepts the options object `vfGaTrackOptions` with property `vfGaTrackPageLoad`. `vfGaTrackOptions.vfGaTrackPageLoad` default to true. If you set to false, the function will _not_ track the initial page view. Useful if you track the initial page view with JavaScript in your HTML.

### 1.0.0-rc.4

* improve `vfGaLogMessage()` to note type of event being tracked
  * https://github.com/visual-framework/vf-core/pull/1141

### 1.0.0-rc.3

* documentation cleanup
* `analyticsTrackInteraction()` is now namespaced as `vfGaTrackInteraction()`
* `vfGaTrackInteraction()` now documented for direct usage
* Fix console verbose logging: if set to any value it would pass
  * https://github.com/visual-framework/vf-core/issues/1131

### 1.0.0-rc.2

* more robust fallback handling of image-based links

### 1.0.0-rc.1

* https://github.com/visual-framework/vf-core/issues/1059
* fixes typo `data-vf-google-analytics-region` from `data-vf-google-anlaytics-region`
  * 🚨 this may be breaking for some users of alpha.1
* extend scope to more than "a" tags
* better detect areas where the event is fired
* capture events that ignore "Click" events
* captures more file types (txt,fasta)

### 1.0.0-alpha.1

* https://github.com/visual-framework/vf-core/issues/963
* Track the name of the link clicked
* Track the region of the link clicked (global nav, masthead, hero, main content, footer, etc)
* Track file type (PDF, DOC, etc)

### 1.0.0-alpha.0

* Initial release