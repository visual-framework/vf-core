# No JS Pattern
Include this snippet directly in your `<head>` along with adding class `.vf-no-js` to your `<html>` (`<html class="vf-no-js">`).


If JS is enabled in a user's browser, `.vf-no-js` will be swapped to `.vf-js`.

This method allows using CSS to conditionally show content.

```css
.vf-no-js .js-is-not-on {
  /* SHOW block that says you need js to use this site */
}
.vf-js .js-is-not-on {
  /* HIDE block that says you need js to use this site */
}
```
