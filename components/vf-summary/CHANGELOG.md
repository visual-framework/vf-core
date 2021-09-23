### 1.6.0

* Removes support for styling of `vf-summary` inside of `vf-box`. (this is no longer encouraged)
* Adds support for conditional display of `vf-summary__text`.

### 1.5.1

* Documentation: clarity on using card vs summary components.
  * https://github.com/visual-framework/vf-core/issues/1592

### 1.5.0

* adds individual context yml/njk code per file.

### 1.4.2

* Removes the import for `vf-links.variables.scss` as it is not needed.

* changes any `set-` style functions to cleaner version
### 1.4.1

* Fix image URL in vf-summary--news-has-image.

### 1.4.0

* makes the title of summary a little larger
* reduces margin a little on news
* removes the padding from events

### 1.3.1

* adds 'grid-template-areas' CSS for `--has-image` variant so you can use it with a `-thumbnail` class

### 1.3.0

* adds loading="lazy" to the img element for better performance

### 1.2.0

* makes theme variant naming and decisions consistent

### 1.1.0

* Deprecated the `vf-summary--profile` component, you should now use `vf-profile`

### 1.0.4

* A fix for Chrome as it displays avatar defaults as a squished circle. Replaces 100% to auto within heigh rule

### 1.0.3

* fixes the size of avatars to be consistnet
* adds word-break: break-all for long emails

### 1.0.2

* adds vf-summary--event, vf-summary--easy

### 1.0.1

* Job summary uses link as outline

### 1.0.0

* Initial stable release
