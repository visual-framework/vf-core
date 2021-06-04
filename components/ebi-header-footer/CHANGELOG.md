### 2.1.0

* Fix readme for proper display in component library docs.
* For ebi-header-footer--footer.njk add context `disable_ebi_1x_cookie_banner` to disable EBI 1.x cookie banner (defaults to true).

### 2.0.3

* Directly load CSS for global header to prevent flashes of non-styled elements.

### 2.0.2

* changes any `set-` style functions to cleaner version

### 2.0.1

* Use VF 1.4 JS to load the HTML for the global header.
* Add documentation and example on disabling the 1.4 data protection banner, as you should use the 2.0 data protection banner from the contentHub.

### 2.0.0

* Adds distinct footer, header templates as the header currently has more legacy dependencies.
* Uses the new 2.0 look and feel footer.
* Uses contentHub to load templates.
* Ensure black bar does not have a margin at the top due to vf-stack.
* https://github.com/visual-framework/vf-core/pull/1316

### 1.0.1

* Adds `webkit-appearance: none;` as needed for Safari browsers as autoprefixer is not doing this.

### 1.0.0

* EBI Header is once again fullbleed after changes in vf-grid-page 2.0.0.

### 1.0.0-beta.2

* Resolves changes in other VF components, spacing, links, etc.
