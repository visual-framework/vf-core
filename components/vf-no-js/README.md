# No JS Component

## About

Include this snippet directly in your `<head>` along with adding class `.vf-no-js` to your `<html>` (`<html class="vf-no-js">`).

## Usage

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

## Help

- [Read the Visual Framework troubleshooting](https://visual-framework.github.io/vf-welcome/troubleshooting/)
- [Open a ticket](https://github.com/visual-framework/vf-core/issues)
- [Chat on Slack](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
