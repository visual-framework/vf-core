---
title: Image handling best practice
subtitle: It's best to not let CSS do the image cropping.
intro: A checklist of several common steps to make your images function best.
date: 2020-12-11 19:33:50
section: building
tags:
  - posts
  - guidance
layout: layouts/section.njk
templateEngineOverride: njk, md
---

- Resize your images manually, or have your CMS or image proxy do the cropping.
- The Visual Framework CSS will try to handle incorrectly sized or wrong aspect ratio image as a 'fallback'.
- Consider adding width and height to [help the layout engine in browsers](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).
- Be sure to use appropriate `alt` text for accessibility.
    - Also consult [the accessibility guidelines](/guidance/accessibility/)
- Use the correct image compression format (JPEG for photographs, PNG for vector or logo-style reduced colour count images).
    - If you have artwork, you may want to use and SVG instead.
- Optimise for file size.
- If your image has a caption, you probably want to use the [`vf-figure`](/components/vf-figure/).
