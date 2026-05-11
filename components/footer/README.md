# Footer component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-footer.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-footer)

## About

The footer is a component positioned at the bottom of a page that provides access to supporting navigation, brand identity, and regulatory information.

## Usage

### Description

The footer marks the end of the page experience. It reinforces brand presence, helps users discover supporting links, and provides access to required legal and compliance information. While it complements primary navigation, it should not duplicate or replace core page content. Its structure and scale vary by context from modular configurations to simplified variations for focused experiences.

### When to use this component?

Use the footer when the page provides a complete experience and users may benefit from secondary navigation or supporting information.

Here are some cases where the footer provides value:

- The experience extends beyond a single interaction and requires familiar structural anchors.
- Users may reach the end of the page seeking additional options or clarification.
- Support pathways should remain available without competing with primary actions.
- Social engagement should be accessible without interfering with the main content structure.
- The page represents a natural end point where related links can guide next steps.
- Regulatory or compliance requirements demand persistent access.
- Brand identity and organisational representation standards apply.

### When not to use this component?

The footer should be omitted when:

- Users are completing a focused workflow that benefits from minimal navigation.
- The page exists within an embedded or constrained environment.
- The layout requires a minimal footprint.
- A modal, micro-interaction, or contained workflow does not represent a full-page experience.

### Deciding what to use

| Variant | Description |
| --- | --- |
| [Modular](../vf-footer)  | Use when footer sections need to be customised |
| [EMBL_EBI header-footer](../ebi-header-footer) | Use the EMBL-EBI corporate variant for organisational or self-contained experiences |
| [Minimal](../vf-minimal-footer) | Use when only essential brand and legal information is needed |

### Themes

The footer is available in two colour schemes: light and dark, to establish clear visual distinction from page content.

Apply the light scheme when the page background uses colour or tone, and the dark scheme when the background is white or near-white. This intentional contrast ensures users can clearly identify where the main content concludes and the footer begins.

### Usability and content guidance

Curate your footer. Footer links should direct users to relevant content that addresses common questions or needs. While disclaimers and legal content may be necessary, aim to keep them concise and avoid unnecessary clutter.

The footer does not need to mirror the header. Link organisation in the footer may differ from top-level header navigation, particularly when the header contains more extensive navigation options than the footer can accommodate.

### Collaboration

The collaborations section provides standardised patterns for displaying varying levels of partnerships and collaborations. The display format adapts based on the number of collaborators.

### Accessibility

This component targets WCAG 2.1 AA accessibility standard.

-   **Links provide direct location description [Manual testing required]:** Ensure link text is descriptive and not ambiguous. WCAG A 2.4.4 Link purpose (in context)

-   **Keyboard navigation:** All links and interactive elements are keyboard accessible

-   **Focus indicators:** Clear visual focus states meet 3:1 contrast requirements

-   **Touch targets:** All clickable elements meet the minimum 44×44 pixel touch target size on mobile and tablet

-   **Colour contrast:** Text and link colours have been tested against both light and dark backgrounds

-   **Screen readers:** Semantic HTML and ARIA labels ensure footer content is properly announced

-   **Responsive design:** Footer adapts appropriately across mobile (600px), tablet (768px) and desktop (1154px) breakpoints

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `footer` with this command.

```
$ yarn add --dev @visual-framework/footer
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/footer/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
