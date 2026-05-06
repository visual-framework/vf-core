# Footer component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-minimal-footer.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-minimal-footer)

## About

The EMBL-EBI-minimal-footer provides a consistent approach to displaying our brand image, essential links and legal information at the bottom of our service pages.

## Usage
### Description

This footer is designed to display branding and essential content within the EMBL-EBI ecosystem without overwhelming the user experience. This approach ensures a clear and consistent representation of the EMBL-EBI identity across services and websites, and provides a structured pattern for communicating partnerships and collaborations.

### When to use

-   Across EMBL-EBI platforms and organisational digital properties, particularly recommended for service pages within the ebi.ac.uk domain

-   Where the EBML-EBI branding, essential links and legal information are required

-   For task oriented pages such as payment pages or registration pages

-   Where there is a need to show collaboration with multiple partners

### When not to use

-   In cases where the footer needs to reflect the service site's navigation

-   Where the social media channels are to be added

For cases like this we recommend using the Modular variant which offers more flexibility.

### Deciding what to use

| Variant | Examples | Description |
| --- | --- | --- |
| [Modular](../vf-footer) | VF-footer | Use when footer sections need to be customised |
| EMBL-EBI Corporate Variant | [EMBL_EBI header-footer](../ebi-header-footer) | Use the EMBL-EBI corporate variant for organisational or self-contained experiences |
|  | [Minimal](../vf-minimal-footer) | Use when only essential brand and legal information is needed |

### Collaboration section variants

The collaborations section provides standardised patterns for displaying varying levels of partnerships and collaborations. The display format adapts based on the number of collaborators.

The Collaborations section renders its own top green border. Remove the footer's default top margin line to prevent duplication.

Logos display (1 - 6 partners)

When you have between 1 and 6 partners, display their logos horizontally across the section.

-   Uses a 6-column grid at desktop breakpoint (1154px+)

-   One logo per column

-   Maximum logo dimensions: 174px width and 64x height

-   Logos centred within their column

-   Scale down logos proportionally if they exceed maximum dimensions

-   For best image resolution, svg usage is recommended

Partners links in columns (1 - 9 partners)

When you have between 1 and 9 partners, you need to display their names as text links.

-   3-column layout on desktop 

-   Partner names displayed as clickable links

-   Text aligned left within each column

Categorised summary (10+ partners)

When you have 10 or more partners, synthesise them into categories with summary numbers and a "See all collaborators" link.

-   Optional partnership statement describing the nature of collaborations

-   Summary categories displayed as numbers with labels (e.g., "35 Data partners", "4 Supporting funders")

-   "See all collaborators" link that directs to a dedicated page listing all partners

-   Placeholder text can be customisable

### Choosing the right collaboration variant

| Variant | Nº of partners | Usage |
| --- | --- | --- |
| Logo display | 1 - 6 | Provides strong visual recognition for each partner |
| Text links in columns | 1 - 9 | Maintains readability whilst accommodating more partners |
| Categorised summary | 10+ | Prevents footer from becoming overwhelming; directs users to dedicated page |

### Usability and content guidance

The content in the footer is designed to clearly describe the relationship between the services and EMBL-EBI. The footer has clear link labels and descriptions such as: "[Name of resource] is developed and maintained by EMBL-EBI, a world leader in biological data resources", for other use cases of descriptions, contact the Comms team via this email comms@ebi.ac.uk for support with appropriate wording.

The content in the minimal footer variant is standardised to ensure consistency across our services.

| Element | Required | Notes |
| --- | --- | --- |
| EMBL-EBI logo | Yes | The logo should not be altered on the services page |
| Description | Yes | The content should reflect the relationship between the service and EMBL-EBI |
| Utility & legal links | Yes | Bottom bar with Terms of use, EMBL-EBI affiliation and copyright. These links should be retained. |
| Collaborators | No | This can be added for acknowledgment of collaborators |

### Terms of Use (ToU)

Guidelines for domains requiring both Organisation-wide and Service-specific Terms

When a domain requires both organisation-wide Terms of Use and service-specific Terms of Use, teams should create a single dedicated page that clearly presents both sets of terms together. This consolidated approach ensures users can easily understand which terms apply to their specific use case while maintaining a single, clear ToU link in the footer. This prevents confusion from multiple links with similar names and provides a better user experience.

Cookie banner pattern

Avoid including ToU in cookie banners. Terms of Use should remain permanently visible in the footer rather than in a dismissible cookie consent banner. Cookie banners are temporary and can be dismissed by users, removing access to critical legal information. By keeping ToU in the footer, users can always access this information whenever needed, regardless of their cookie consent choices.

### Themes

The footer is available in two colour schemes: light and dark, to establish clear visual distinction from page content.

Apply the  light scheme when the page background uses colour or tone, and the dark scheme when the background is white or near-white. This intentional contrast ensures users can clearly identify where the main content concludes and the footer begins.

### Responsiveness

The elements wrap across the tablet and mobile breaking points while ensuring spacing, readability and target touch size are optimised for accessibility and ease of use.

### Accessibility

This component targets WCAG 2.1 AA accessibility standard.

-   Links provide direct location description [Manual testing required]: Ensure link text is descriptive and not ambiguous. WCAG A 2.4.4 Link purpose (in context)

-   Keyboard navigation: All links and interactive elements are keyboard accessible

-   Focus indicators: Clear visual focus states meet 3:1 contrast requirements

-   Touch targets: All clickable elements meet the minimum 44×44 pixel touch target size on mobile and tablet

-   Colour contrast: Text and link colours have been tested against both light and dark backgrounds

-   Screen readers: Semantic HTML and ARIA labels ensure footer content is properly announced

-   Responsive design: Footer adapts appropriately across mobile (600px), tablet (768px) and desktop (1154px) breakpoints

## Install

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-minimal-footer` with this command.

```
$ yarn add --dev @visual-framework/vf-minimal-footer
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-minimal-footer/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
