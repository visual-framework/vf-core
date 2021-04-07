### 1.0.3

* changes any `set-` style functions to cleaner version

### 1.0.2

* adds aria role detection of current page

### 1.0.1

* JS linting

### 1.0.0

* prevent recursive breadcrumb lookup: it can occur for the EMBL taxonomy to have recursive parents, this present direct recursion

### 1.0.0-rc.1

* embl-breadcrumbs-lookup inference uses wrong label
  - https://github.com/visual-framework/vf-core/pull/867

### 1.0.0-beta.5

* Njk template was loading demo `embl-content-meta-properties` that were only needed for an example
  - https://github.com/visual-framework/vf-core/pull/838

### 1.0.0-beta.3

* Better handles non-entries for parent terms
* Better handling of non-entry "none"
* Handles when breadcrumb container is present but no primary term is set
* Cleaner URL generation
* Matches a terms internal names or display names as a last resort

### 1.0.0-beta.2

* Prefers "EMBL.org profile" matches to taxonomy entries
* If no related breadcrumbs are found, the label will be hidden
* Do not display "notSet" as a breadcrumb
* If a non-primairy breadcrumb value is "notSet", a value will be inferred from the primairy breadcrumb's respective who, what or where
* If no match is found a search is performed
* Handle non-26 character names (Spaßß => spass) for URLs
* If no match is found generate a "smart URL" for people
* Switches to use the production contentHub

### 1.0.0-alpha.3 (2019-07-25)

* don't insert a root term as a crumb ([003d88c](https://github.com/visual-framework/vf-core/commit/003d88c))
* embl-grid-and-breadcrumbs ([68676a6](https://github.com/visual-framework/vf-core/commit/68676a6))
* only insert crumb if it respects the original term context of who/what/where ([2159778](https://github.com/visual-framework/vf-core/commit/2159778))
