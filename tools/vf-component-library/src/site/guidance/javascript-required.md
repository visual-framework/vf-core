---
title: "JavaScript: mitigating broken experiences"
subtitle: If JavaScript fails, some tips on how you can ensure users can still complete their task.
intro: Many projects may use solutions (React, Angular or similar) or use Visual Framework components that require JavaScript to function but there are many costs.
date: 2021-05-19 19:33:50
section: building
tags:
  - posts
  - guidance
layout: layouts/section.njk
templateEngineOverride: njk, md
---

Before using a JavaScript-powered solution, the product team should ask themselves:

1. What are the benefits for the project and user of using a JavaScript solution?
     - Examples: Improved interactivity and state management or specific features.
2. What are the downsides?
    - Examples: Increased page size, computer requirements, technical complexity, SEO complexity.
3.  What recourse do users have when JavaScript fails, is disabled or an older browser is used?
    - See also: [Browser support guidance](https://stable.visual-framework.dev/guidance/browser-support/)
    - The VF supports browsers released within the last five years and have JavaScript enabled.
    - [Pre-rendering your JavaScript application](https://duckduckgo.com/?q=prerendering+javascript+frameworks) may have many benefits.

You should only use JavaScript frameworks when a high level of interactivity is needed and provide robust text or fallback functionality and make use of [the JavaScript error template](/patterns/error-pages/).

Further reading: [Gov.uk provides additional reasoning](https://www.gov.uk/service-manual/technology/using-progressive-enhancement#do-not-assume-users-turn-off-css-or-javascript) on why you should not assume your JavaScript application works for all users.
