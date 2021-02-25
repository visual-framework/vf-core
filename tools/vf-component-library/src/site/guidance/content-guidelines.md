---
title: Content guidelines
subtitle: Unique to the web are certain types of content that support user interaction.
intro: On this page we've compiled a list of many of the top do-s and don't-s.
date: 2021-02-24 19:33:50
section: building
tags:
  - posts
  - guidance
layout: layouts/section.njk
---

### Read more and click here <a id="read-more"></a>

It's common to see phrases like "read more" and "click here" at the end of a section or container. These typically provide sub-optimal user experiences and lower conversion rates. It's better to add links within the content itself.

[GOV.UK advises](https://www.gov.uk/guidance/content-design/links):

> When writing a link, make it descriptive and front-load it with relevant terms instead of using something generic like ‘click here’ or ‘more’. Generic links do not make sense out of context or tell users where a link will take them. They also do not work for people using screen readers, who often scan through lists of links to navigate a page. It’s important the links are descriptive so they make sense in isolation.

<br/>Nielsen Norman Group [has further guidance on how linking to content](https://www.nngroup.com/articles/learn-more-links/).

The issue of "read more" links [has come up several times within VF discussions](https://github.com/visual-framework/vf-core/issues/1287) and we've found that reducing redundant links is both better for user experience and saves on page size.

### Decorative icons vs illustrations <a id="icons"></a>

Icons are very popular within the Visual Framework v1 as they provided a convenient and easy way to decorate content. However they come at a cost in performance and, more importantly, clarity.

When an icon is not paired with text it must be able to convey meaning, and "universal" icons are rare. So icons are not a replacement for text links and often result in the use of more space.

Icons should be viewed as illustrations and not shorthand for text and labels, so we typically recommend going without icons when possible.

Nielsen Norman Group has [further guidance on the usability and best practices when using icons](https://www.nngroup.com/articles/icon-usability/).

The Visual Framework is planning [a more robust approach for decorative iconography later in 2021](https://github.com/visual-framework/vf-core/discussions/1388).

### Opening content in new tabs <a id="tabs"></a>

The web allows for links to target a new tab or window when opening. The [recommended default (and what most users want)](https://www.nngroup.com/articles/new-browser-windows-and-tabs/) is to _not_ open in a new browser tab.

Before setting links to open in new tabs, you should consider (and, if possible, observe) if a user's task benefits by opening in a new window.

Example: you might open a link in a new windows if a user is filling in a long form and clicks on a "help" link. The user probably does not want to be taken away from their partly completed form.

If you do open links in new tabs, you should try to label it as such: [I'm an example (opens in a new tab)](#)

### White space <a id="white-space"></a>

The Visual Framework is not just about providing "generic" good defaults, we consider what would be good defaults for users navigating the usually complex topics on life science websites. A major priority is to make site as easy-to-use as possible and that often means reducing their [cognitive load](https://www.invisionapp.com/design-defined/cognitive-load/).

White space is critical to helping users navigate complex information. The extra spacing [provides room for orientation and eases the ability to read](https://www.caktusgroup.com/blog/2017/10/30/white-space-explained).
