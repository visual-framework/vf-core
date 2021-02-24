### 1.7.1

* changes any `set-` style functions to cleaner version

### 1.7.0

* Banner dismiss button now defaults to `vf-button--primary` (if a specific button variant has been requested by `vfJsBannerButtonTheme`, it will still be used)

### 1.6.3

* Bug: For fixed banners, avoid interpretting numbers as strings and blowing out the page padding

### 1.6.2

* JS linting

### 1.6.1

* removes CSS for 'inlayed' design as no longer in use
  * https://github.com/visual-framework/vf-core/pull/1204

### 1.6.0

* updates spacing design tokens
* requires `v2.0.0` of the `vf-design-tokens` package or newer
* removes leftover `console.log`

### 1.5.0

* centralises logic to "close" a banner
* adds padding to the document to accomodate a fixed-position banner so it won't hide content
  - https://github.com/visual-framework/vf-core/issues/1119

### 1.4.0

* removes inline padding on `vf-banner` class
* replaces inline padding on `vf-banner__content` class
* removes inline padding from `vf-banner__content` if parent has `vf-u-fullbleed` class

### 1.2.3

* updates max-width of component

### 1.2.2

* updates max-width of component

### 1.2.1

* Adds !default to all Sass variables for easier overrideing
* gives the banner a better look in IE11

### 1.2.0

* Makes the alert style banner the default .njk
* puts the style of alert banner as a prop from yaml/nunjucks
* removes hardcoded variants of alert banners
* fixes hover colour of `vf-banner__button`

### 1.1.0

* Adds option to determine button theme using data attributes
* Allows for existing banners to still use the secondary theme

### 1.0.6

* Adds underline on links using `.vf-banner__link`
* Resolves IE11 bug assigning classes

### 1.0.5

* Add alert `--alert` and `--warning` banners
* Placeholder close button for interactiviy (bring your own JavaScript)
* `vf-banner--phase` is on its way to deprecation, use `vf-banner--info` instead

### 1.0.4

* Makes use of `vf-banner__text`
* Use of `vf-text` is deprecated

### 1.0.2

* Links in text areas of banners regain an underline

### 1.0.0 (2019-12-17)

* Initial stable release

### 1.0.1

* Removed default spacing of `vf-text` components inside
* Removes overriding variant CSS that removes padding, as it breaks the GDPR banner
* The spacing inside the component is now dictated by the component
* Adds a top and bottom margin for spacing of the `--phase` variant
