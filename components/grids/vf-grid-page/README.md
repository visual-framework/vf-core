# The Page Grid

To start with the page has a simple 3 column grid. The second grid item has a maximum width of 1300 pixels. The two outer grid columns fill the rest of the space to create a centred layout.

The code for this layout is for the `<body class="vf-body">` tag so that the direct children inherit the grid columns.
##### CSS
```css
.vf-body {
  display: grid;
  grid-template-columns:
    [full-start]
      minmax(1.25em, 1fr)
      [main-start]
        minmax(0, 81.25em) // 1300px
      [main-end]
      minmax(1.25em, 1fr)
    [full-end];
}
```
