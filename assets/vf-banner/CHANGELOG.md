### 1.3.1

- dependency bump

### 1.2.2

- updates max-width of component

### 1.2.1

- Adds !default to all Sass variables for easier overrideing
- gives the banner a better look in IE11

### 1.2.0

- Makes the alert style banner the default .njk
- puts the style of alert banner as a prop from yaml/nunjucks
- removes hardcoded variants of alert banners
- fixes hover colour of `vf-banner__button`.

### 1.1.0

- Adds option to determine button theme using data attributes.
- Allows for existing banners to still use the secondary theme.

### 1.0.6

- Adds underline on links using `.vf-banner__link`
- Resolves IE11 bug assigning classes

### 1.0.5

- Add alert `--alert` and `--warning` banners
- Placeholder close button for interactiviy (bring your own JavaScript)
- `vf-banner--phase` is on its way to deprecation, use `vf-banner--info` instead

### 1.0.4

- Makes use of `vf-banner__text`
- Use of `vf-text` is deprecated

### 1.0.2

- Links in text areas of banners regain an underline.

### 1.0.0 (2019-12-17)

- Initial stable release

### 1.0.1

- Removed default spacing of `vf-text` components inside.
- Removes overriding variant CSS that removes padding, as it breaks the GDPR banner.
- The spacing inside the component is now dictated by the component.
- Adds a top and bottom margin for spacing of the `--phase` variant.
