# EMBL Breadcrumbs Lookup component

## About

This requires and builds atop the `vf-breadcrumbs` and
`embl-content-meta-properties` components for EMBL pages.

## Usage

This component reads meta properties and then performs a lookup to the EMBL contentHub.
Returned are appropriate primary and secondary breadcrumbs.

Notes:

- If a non-primary breadcrumb value is "notSet", a value will be inferred from the primary breadcrumb's respective who, what or where
- Matching is performed on internal names first, display names second.
    - UUID matching is still to be implemented
- If no URL for a term is found a search link will be generated
- If no primary facet is provided, no breadcrumbs will be generated

## Help

- [Read the Visual Framework troubleshooting](https://stable.visual-framework.dev/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
