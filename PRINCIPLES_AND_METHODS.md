# EMBL Visual Framework principles and methods

## Principles

The spirit of what we're doing here.

1. Science first
   - Built with the life sciences in mind
2. Evolution
   - We’re just getting started, and we’re planning for the future
3. Clarity
   - We’ll enable clear communication of challenging topics
4. Right choices are easy
   - We provide the better choices as defaults
5. Compatibility and integration
   - We don’t dictate the tech solution. Bring Angular or vanilla. This framework is here to help
6. For you, with you
   - We’re building for the community and we’re asking for your help, directly or indirectly

## Methods

How we're going to do the above. 

### 1. Open development, consultations

- We'll have some sort of regular meetings, discussions with stakeholders to ensure we're addressing the community's needs;
- We'll ensure scientific stakeholders are a part of the decision process;
- We'll welcome pull requests to code; and
- We'll have a Slack workspace (or some type of online support) 
    - [Join our embl-vf.slack.com group here](https://join.slack.com/t/embl-vf/shared_invite/enQtNDAxNzY0NDg4NTY0LTMwOGZhYThiZDE1OGFmYTM0ODgxNTkyZDllNjgyODU4MDgwOTRkZWU4OWY4M2I2OTgwZGMxZDRiOTI4NzVkYTI)

### 2. We flex to organisational needs

The framework is designed to adjust the look and feel according to the parent page's brand layer -- content on the EMBL.org site can look different (but of the same family) to the same content on a research team, service or training page.

### 3. Whole enchelada or modular

You can either use the central CSS+JS, or use NPM and pull in code for each block or container.

### 4. Vanilla first

We'll build our patterns targeting vanilla CSS and JS sites first and then build to support React, Angular, Drupal, Wordpress and any other supported environments. CSS and JS are the standard, and targeting these ensures the most longevity of the code base.

### 5. A shop front and workshop

We'll have a spot for developer (workshop) and a spot that targets a wider audience (workshop). https://github.com/visual-framework/vf-core-tooling-prototype/issues/10

### 6. Atomic-style design

Instead of the atomic names, we're using the spirit and calling them `elements` > `blocks` > `containers` > `page`. We believe this is more understanable and will be less contentious in a scientific enviorment.

- Elements are:
    - a heading
    - a paragraph
    - an images
- Blocks are made of Elements to create:
    - a 'teaser', et al.
- Containers are made of Blocks to create:
    - a layout of three teasers
- Pages are made of Containers

### 7. CSS naming conventions

#### Element-classed naming

The `element` > `blocks` > `containers` are reflected in CSS names, so `.button` is `.e-button`, and that's combined with name-sapcing, see the next point:

#### Name-spaced CSS classes

Combined with element-classed naming, we're name-spacing with `embl`, so `.e-button` is `.embl-e-button`. This ensures styles won't conflict with framework X, and allows other groups to namespace their element, i.e. `.uniprot-e-button`.

#### No styles on the element

We won't apply CSS to `ul` and `h1` elements, but `embl-e-heading-xl` and `embl-e-list embl-e-list--unordered`. 

This is more verbose, but ensures we only engage with HTML elements that developers want us to -- so we can play nice with CSS/JS framework X. It also seperates semantic structure from visual style.

#### Linting

We'll have recommended (S)CSS  (and JS?) linting setups -- the specifics are still under discussion: https://github.com/visual-framework/vf-core-tooling-prototype/issues/11

### 8. Browser support

We'll support IE11 and the latest two versions of other major browsers. Beyond those we aim for graceful degradation. 
