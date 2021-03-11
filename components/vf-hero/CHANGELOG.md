### 3.2.0

* adds thinner 'vf-hero--400' variant.
* fixes `vf-hero__content vf-box` sizing padding calculaton for `vf-hero--800` variant.
* makes the maximum width of the `vf-hero__content` wider, but make smaller widths `max-content`.

### 3.1.0

* adds link styles to the `vf-hero__heading`
* updated the documentation to include the `vf-hero__heading_link` details.

### 3.0.1

* changes any `set-` style functions to cleaner version

### 3.0.0

* removes all design variants.
* replaces `vf-hero__heading__additional` with `vf-hero__kicker`.
* makes the call to action link a separate entity as there would be a conflict with `vf-hero__text`.
* adds a little more documentation.

### 2.0.6

* fixed an issue where `vf_hero_href` had no context option for use in `vf-11ty`.

### 2.0.5

* adds a `flex` property to the SVG so that it's always visible and doesn't get cut off.

### 2.0.4

* fixes missing context rule for `hero__text` and `hero__heading--additional`.

### 2.0.3

* adds the context options so the component can be used in 11ty with content seperation.
* changes `max-content` to `fit-content` so the `__content` element adapts to smaller viewports.
* removes left padding from `--block` variant as it 'looked weird'.

### 2.0.2

* adds a width of `max-content` to the `__content` part of the component so short titles don't look silly.

### 2.0.1

* adds the option to add an url to `vf-hero__heading` with nunjucks/yaml.
  * gives the element a classname.

### 2.0.0

* introduces new naming convention for design variants.
  * `--inverted`: that inverts the foreground and background colours
  * `--flush`: pulls the `vf-hero__content` to the bottom of the `vf-hero`.
  * `--offset`: pulls the `vf-hero__content` below the `vf-hero` container.
  * `--centered`: centres the `vf-hero__content` component.
  * `--block`: makes the `vf-hero__content` bleed all the way ot the left of the page.
  * `--striped`: inverts the `vf-hero__text` to that of what's set in `vf-hero__content`.
  * `--800`, `--1200`, and `--1600` spacing variants.
* replaces `vf-hero-theme--` with `vf-hero--` for the `primary`, `secondary`, and `tertiary` variants.
* removes the 'Mortal Kombat' naming convention.
* reduces visible options of the new `vf-hero`.
* older versions (v2) degrade gracefully to the default variant.

### 1.8.0

* deprecates the `--intense` variant.

### 1.7.1

* removes CSS for 'inlayed' design as no longer in use
  * https://github.com/visual-framework/vf-core/pull/1204

### 1.7.0

* makes the padding on `--intense` standardised to our spacing units
* reduces height of all other variants
* currently this is the 'maximum space' the component will get to allow it's content to be readable

### 1.6.0

* adds loading="lazy" to the img element for better performance

### 1.5.0

* makes theme variant naming and decisions consistent

### 1.4.6

* updates max-width of component

### 1.4.5

* adds an if statement for contextual data if applicable

### 1.4.4

* fixes issue with `--intense` variant so parallax image is full width

### 1.4.3

* replaces margin shorthand so it doesn't remove bottom margin when using `--inlay` modifier

### 1.4.2

* fixes an issue with vf-hero--inlay and the background image width

### 1.4.0

* Adds ability to specify height of the image
* Improves leading for text with link icon
* Gives content a max-width to remove need for Media Query
* Makes the positioning of the content depend upon the image height
* small update to documentation

### 1.3.1

* reverts naming convention for background image reference to vf_hero_image
* updates key/value pair and classes for the sub-heading

### 1.3.0

* The vf-hero component snaps to the viewport boundaries on smaller screens
* splits out variants using .yml instead of hard coding
* removes search example
* makes `--extreme` variant match designs

#### 1.2.0

* Removes `--medium` variants
* Introduces `--very-easy` variant
* Pulls all design variants back one
