# EMBL Content Meta Properties

[![npm version](https://badge.fury.io/js/%40visual-framework%embl-content-meta-properties.svg)](https://badge.fury.io/js/%40visual-framework%embl-content-meta-properties)

## About

These meta tags describe the role of page within the EMBL information architecture.

These consist of:

- Content descriptors
    - `embl:who` the people, groups and teams involved
    - `embl:what` the activities covered
    - `embl:where` at which EMBL sites the content applies
    - `embl:active` which of the above three facets is most important for this content
- Content role:
    - `embl:utility` if content is task and work based or if is meant to inspire
    - `embl:reach` if content is externally (public) or internally focused (those that work at EMBL)
- Page infromation:
    - `embl:maintainer` the contact person or group responsible for the page
    - `embl:last-review` the last time the page was reviewed or updated
    - `embl:review-cycle` how long in days before the page should be checked
    - `embl:expiry` if there is a fixed point in time when the page is no longer relevant

These tags should be placed in your `<head>`.

## Why do they matter?

1. Ensures future quality of content
2. Will be programatically queried by other patterns to offer contextually-appropriate content and navigation
3. Can affect the look and feel of content

## Installation and Implementation

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `embl-content-meta-properties` with this command.

```
$ yarn add --dev @visual-framework/embl-content-meta-properties
```

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/embl-grid/index.scss";
```

_Make sure you import any requirements along with the modules._
