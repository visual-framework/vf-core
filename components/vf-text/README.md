# Text component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-text.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-text)

## About

For basic text formatting and sizes.

## Usage

[EMBL’s primary corporate typeface](https://www.embl.org/guidelines/design/design-guidelines/typeface/) is IBM Plex Sans. Subdomains should use the same font except for cases where they have a different brand guideline.

The vf-text component leverages [the design token typography sizes](https://stable.visual-framework.dev/design-tokens/typography/).

The default font size for paragraphs is 19px. 

Apply tokens, such as `vf-text-body--1` to change the size and other stylistic elements of the default body text.

This component provides utility-like functionality and you'll rarely need to directly use this component. When coding a component's Sass, it will typically be better to use the mixins (`@include set-type(text-body--1);`) than these
`vf-text` classes.

### How to use

* Align a body of text to the left, this make it easier to read.
* `Large body text` - The large body text variant is used for lead paragraphs and blockquotes.
* `Default body text` - The default paragraph font size is 19px.
* `Small body text` - Text smaller than 16px is defined as part of certain vf components. Avoid using this for standalone paragraph text because it can be too small to read.
* For optimal readability avoid using body texts below 12 px.

### How not to use

* Do not justify (Align a body of text to both the left and right) a body of text as this causes readability issues
* Do not use other typefaces in the Subdomains unless for cases with different brand guidelines.
* Avoid using all caps, as this makes it harder for a reader to identify words by shapes.
* Do not underline texts unless they are links.

### Related documentation

For more information on text please consult the following documents:
* [Align texts on one side | W3C](https://www.w3.org/TR/WCAG20-TECHS/G169.html)
* [Design for readability | Harvard University](https://accessibility.huit.harvard.edu/design-readability)
* [Readability | Cambridge brand resources](https://www.cam.ac.uk/brand-resources/guidelines/typography-and-colour/readability)
* [Typography | GOV.UK  Design System](https://design-system.service.gov.uk/styles/paragraphs/)

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-text` with this command.

```
$ yarn add --dev @visual-framework/vf-text
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-text/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
