### 1.8.0

* removes the JavaScript for the `--intense` version.

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
