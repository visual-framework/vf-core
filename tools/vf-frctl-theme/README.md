# VF Fractal Theme

The default web UI theme for the VF 2.0.

Forked (and heavily changed) from the default Fractal Mandelbrot theme, but you
will still find value in the Fractal [documentation](http://fractal.build/guide)
for details on configuration.

## Major differences from Mandelbrot

- Much less CSS, JS
  - Instead we leverage the core VF library
- Exposes components directly to the template layer
  - build the component library with your components `{% "@vf-component" %}`
- Theme layer uses `.njk` instead of `.nunj`

## History

### 0.0.1

Initial release, fork of `@fractal/mandelbrot`
