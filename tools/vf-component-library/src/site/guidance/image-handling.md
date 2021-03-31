---
title: Image handling best practice
subtitle: It's best to not let CSS do the image cropping.
date: 2020-12-11 19:33:50
section: building
tags:
  - posts
  - guidance
layout: layouts/section.njk
templateEngineOverride: njk, md
---

<br/>

Resize your images manually, or have your CMS or image proxy do the cropping.

- The Visual Framework CSS will try to handle incorrectly sized or wrong aspect ratio image as a 'fallback'.
- Consider adding width and height to [help the layout engine in browsers](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

This is a work in progress, see [#1230](https://github.com/visual-framework/vf-core/issues/1230)
