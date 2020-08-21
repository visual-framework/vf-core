# EMBL Breadcrumbs Lookup Component

## About

This requires and builds atop the `vf-breadcrumbs` and
`embl-content-meta-properties` components for EMBL pages.

This component reads meta properties and then performs a lookup to the EMBL contentHub.
Returned are appropriate primary and secondary breadcrumbs.

Notes:

- If a non-primairy breadcrumb value is "notSet", a value will be inferred from the primairy breadcrumb's respective who, what or where
- Matching is performed on internal names first, display names second.
    - UUID matching is still to be implemented
- If no URL for a term is found a search link will be generated
- If no primairy facet is provided, no breadcrumbs will be generated