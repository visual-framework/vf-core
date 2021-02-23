### 1.4.1

* changes any `set-` style functions to cleaner version

### 1.4.0

* fixes flexbox fallback grid when there are items on two or more rows
* fixes widths on flexbox fallback grid.

### 1.3.0

* makes the layout something that can now use 'extends' within nunjucks

### 1.1.0

* adds grid row span utility classes

### 1.0.5

* fixes a remaing bug with IE11 where we relied on the calc function
  - https://github.com/visual-framework/vf-core/pull/900

### 1.0.4

* fixes a bug with IE11 where we relied on the calc function inside the flex (which IE11 does not support) in the flexbox fallback grid defined columned classes (.vf-grid__col-2 > * {...) etc)
  - https://github.com/visual-framework/vf-core/pull/882

### 1.0.2

* fixes issue with vf-grid inside vf-body https://github.com/visual-framework/vf-core/pull/802

### 1.0.1

* Removes over-agressive border on 1 column layouts

### 1.0.0

* Initial stable release
