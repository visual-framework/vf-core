---
title: Deprecating patterns
label: Deprecating patterns
order: 200
isIndex: true
---

Inevitably, code will be replaced and improved and patterns will need to be marked as deprecated so:

1. Developers know to stop using the pattern; and
1. Aren't removed so existing sites continue to function

## How to deprecate

In the pattern folder:

1. In `pattern-name.config.yml` add:
    - `status: deprecated`
    - `pattern-type: deprecated`  
1. In `pattern-name.scss` wrapp the sass with:
    - `html:not(.vf-disable-deprecated) {`
1. Update `README.md` with:
    - why the pattern has been deprecated
    - what pattern(s) developers should instead use

## Need to deprecate just one variant in a pattern

The exact process by which to do this is still being decided, but for now:

1. Add a note to the `--variant.hbs`
1. Wrap the relevant css in `html:not(.vf-disable-deprecated) {`
1. Hide the variant tab in `.config.yml`:
```
variants:
  - name: deprecated-variant
    hidden: true
```
