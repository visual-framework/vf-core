# Footer component

[![npm version](https://badge.fury.io/js/%40visual-framework%2Fvf-footer.svg)](https://badge.fury.io/js/%40visual-framework%2Fvf-footer)

## About

The vf-footer is a flexible footer component that allows websites to configure different modules based on their specific needs whilst maintaining consistent branding.

## Usage

### Description

The vf-footer provides a flexible and structured approach to footer configuration. It allows configuration of specific sections and adjustment of text content as needed, while maintaining consistent layout, accessibility compliance, and brand identity.

### What does 'modular' mean?

Modular in the context of the vf-footer refers to the ability to enable or disable sections and customise text within them. It does not mean you can change the order of sections. The visual sequence is fixed to maintain consistency and meet accessibility requirements. If your service requires a different section order, please contact the Visual Framework team to discuss your use case.
<br>

### Configurable sections

| Element | Usage | Notes |
| --- | --- | --- |
| Collaborations | Display partner, funder or collaborator logos | Optional |
| Custom logo | Highlight the specific branding | Optional |
| Mission statement | Provide context about the service or organisation | Optional |
| Custom links | Use website specific navigation organised by category. If custom navigation is not required, it is recommended to use the Minimal footer component instead | Required |
| Contact details | Contact details are flexible and can accommodate short or long text formats. All contact methods can be linked as needed, with the option to direct users to a dedicated contact page. | Optional |
| Social media | Link to relevant social channels | Optional |
| Utility | The bottom section contains links such as Terms of use, copyright and other utility links | Optional. Uses the same legal section structure as the modular footer pattern for consistency. |

<br>

### When to use

Use the VF-Modular footer when your website requires:

-   To display social media channels
-   Service-specific navigation or utility links
-   Needs to display its own logo and mission statement
-   Requires a flexible footer structure that can evolve
-   Where there is a need to show collaboration with multiple partners

### When not to use

The Visual Framework offers other footer variants that may better suit other use cases:

-   If your site only needs basic branding, essential links, and legal information without service-specific navigation or social media, use Minimal footer instead
-   If your site requires full EMBL-EBI institutional presence with parent navigation across all major organisational sections it is recommended to use the EMBL_EBI header-footer
<br>

### Deciding what to use

| Variant | Description |
| --- | --- |
| [Modular](../vf-footer)  | Use when footer sections need to be customised |
| [Minimal](../vf-minimal-footer) | Use when only essential brand and legal information is needed |
| [EMBL_EBI header-footer](../ebi-header-footer) | Use the EMBL-EBI corporate variant for organisational or self-contained experiences |

<br>

### Collaboration section variants

The collaborations section provides standardised patterns for displaying varying levels of partnerships and collaborations. The display format adapts based on the number of collaborators.

The Collaborations section renders its own top green border. Remove the footer's default top margin line to prevent duplication.

#### Logos display (1 - 6 partners)

When you have between 1 and 6 partners, display their logos horizontally across the section.

-   Uses a 6-column grid at desktop breakpoint (1154px+)
-   One logo per column
-   Maximum logo dimensions: 174px width and 64x height
-   Logos centred within their column
-   Scale down logos proportionally if they exceed maximum dimensions
-   For best image resolution, svg usage is recommended

#### Partners links in columns (1 - 9 partners)

When you have between 1 and 9 partners, you need to display their names as text links.

-   3-column layout on desktop
-   Partner names displayed as clickable links
-   Text aligned left within each column

#### Categorised summary (10+ partners)

When you have 10 or more partners, synthesise them into categories with summary numbers and a "See all collaborators" link.

-   Optional partnership statement describing the nature of collaborations
-   Summary categories displayed as numbers with labels (e.g., "35 Data partners", "4 Supporting funders")
-   "See all collaborators" link that directs to a dedicated page listing all partners
-   Placeholder text can be customisable
<br>

### Choosing the right collaboration variant

| Variant | Nº of partners | Usage |
| --- | --- | --- |
| Logo display | 1 - 6 | Provides strong visual recognition for each partner |
| Text links in columns | 1 - 9 | Maintains readability whilst accommodating more partners |
| Categorised summary | 10+ | Prevents footer from becoming overwhelming; directs users to dedicated page |

<br>

### Terms of Use (ToU)

Guidelines for domains requiring both Organisation-wide and Service-specific Terms

When a domain requires both organisation-wide Terms of Use and service-specific Terms of Use, teams should create a single dedicated page that clearly presents both sets of terms together. This consolidated approach ensures users can easily understand which terms apply to their specific use case while maintaining a single, clear ToU link in the footer. This prevents confusion from multiple links with similar names and provides a better user experience.

#### Cookie banner pattern

Avoid including ToU in cookie banners. Terms of Use should remain permanently visible in the footer rather than in a dismissible cookie consent banner. Cookie banners are temporary and can be dismissed by users, removing access to critical legal information. By keeping ToU in the footer, users can always access this information whenever needed, regardless of their cookie consent choices.

### Themes

The footer is available in two colour schemes: light and dark, to establish clear visual distinction from page content.

Apply the light scheme when the page background uses colour or tone, and the dark scheme when the background is white or near-white. This intentional contrast ensures users can clearly identify where the main content concludes and the footer begins.

### Responsiveness

The component is designed to adapt seamlessly across different screen sizes. The layout of the custom links section wraps 2 column grids on tablet (Breaking point 768px) and 1 column on mobile (breaking point 600px). Spacing, readability, and target touch size are optimised for accessibility and ease of use.

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

This component is distributed with npm. After [installing npm](https://www.npmjs.com/get-npm), you can install the `vf-footer` with this command.

```
$ yarn add --dev @visual-framework/vf-footer
```

### Sass/CSS

The source files included are written in [Sass](http://sass-lang.com)(`scss`). You can point your Sass `include-path` at your `node_modules` directory and import it like this.

```
@import "@visual-framework/vf-footer/index.scss";
```

Make sure you import Sass requirements along with the modules. You can use a [project boilerplate](https://stable.visual-framework.dev/building/) or the [`vf-sass-starter`](https://stable.visual-framework.dev/components/vf-sass-starter/)

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
