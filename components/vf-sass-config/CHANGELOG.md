### 1.4.3

- adds `webkit-appearance: none;` as needed for Safari browsers as autoprefixer is not doing this.

### 1.4.2

- updates the `$global-page-max-width` variable so that it's consistent with the page width across components - set to `81.25rem`.

### 1.4.0

- creates supporting Sass files for new theming design tokens to be used.

### 1.3.0

- adds a width css custom property for `vf-body` component.
- reorganises the order variables are used.

### 1.2.0

- creates mixin for grid column and row gap
- Restores the ability to have local design tokens by not requiring a npm-installed vf-design-tokens.
  - https://github.com/visual-framework/vf-core/pull/1009

### 1.1.2

- Changes filepaths so they're relative where needed

### 1.1.1

- Adds missing global custom properties

### 1.1.0

- Adds the relative paths to @import for files rather for when the index.scss is used in other projects
- Adds stylelint dis/enabled wrapper so it doesn't shout about design tokens
- Adds @visual-framework/vf-design-tokens as a dependency

### 1.0.3

- Breakpoint map was missing from vf-variables.scss

### 1.0.1

- Tweaks link mixin, adds `@mixin inline-link--dark-mode`

### 1.0.0

- Initial stable release
