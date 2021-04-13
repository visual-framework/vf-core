---
title: Accessibility guidelines
subtitle: Users with a visual, motor or cognitive impairment are far from rare.
intro: Starting guidance on how to make your web site and Visual Framework components more accessible.
date: 2021-04-09 19:33:50
section: building
tags:
  - posts
  - guidance
layout: layouts/section.njk
templateEngineOverride: njk, md
---

## Reality <a id="reality"></a>

It can seem easy to believe that users with an impairment are rare, but [they are common](https://www.powermapper.com/blog/website-accessibility-disability-statistics/):

- Dyslexia is measured between 20% to 35%,
- A form of color blindness is 8% of men,
- 7% of working age adults have a severe dexterity difficulty,
- ... there are also common hearing and learning disabilities.

So when we think about making a quality website, we should focus beyond technical performance metrics, bugs and good looks. The standard of quality also includes the sometime imperceptible usability issues.

For Visual Framework sites we recommend the WCAG 2.1 AA level. This is both the legal level [required by the European Union](https://www.deque.com/blog/eu-web-accessibility-compliance-and-legislation/) (and other national governments) and it is a level that should impose a reasonable amount of effort on develop and design; the Digital Accessibility Centre [summarizes](https://digitalaccessibilitycentre.org/index.php/blog/20-diary/187-the-icing-on-the-cake-the-difference-between-aa-and-aaa-compliance): “AA is accepted as a very good commitment to accessibility”.

### Sidebar: what-a-cag? <a id="sidebar"></a>

Read at all on web accessibility and you'll see: "[WCAG](https://www.w3.org/TR/WCAG20/)", "AA" and "AAA". The Web Content Accessibility Guidelines [is set of widely recognised recommendations](https://tetralogical.com/articles/wcag-primer/) for making websites and apps accessible to people with disabilities.

## An accessible start <a id="start"></a>

This is not a topic we can fully cover in 1000 words, so how can you get started?

1. Good: Use an automated testing tool
2. Better: Refer to checklists
3. Best: Real human testing

### Automated tools

- [WAVE](https://wave.webaim.org/report#/http://stable.visual-framework.dev/), the Web Accessibility Evaluation Tool, is a free service and [browser extension](https://wave.webaim.org/extension/) to find common errors.
- [Accessibility Insights](https://accessibilityinsights.io/en/) is a desktop, mobile integration and browser extension from Microsoft.

You can find many more at [The Accessibility Project](https://www.a11yproject.com/resources/#tools).

Automated online tools and browser extensions can help immensely, but they are not everything. We need also spend time familiarising ourselves with the challenges and techniques.

### Checklist

In addition to lots of good advice, The Accessibility Project [has a comprehensive checklist](https://www.a11yproject.com/checklist/).

### Real humans

When working with your UX colleagues (or doing your own UX planning and testing) spend time trying to recruit testers and participants who have impairments. Or turn on your screen reader

## In conclusion ... <a id="conclusion"></a>

- Anticipate the needs of these users and test for them with tools
- Include users in your testing
- Let users get in touch: be sure to have a contact address for feedback on bugs and problems

And remember it's about more than colour: Often discussed is the AA and AAA accessibility of colour contrast but accessibility is equally about type size, spacing and if text can be read aloud.

## Related <a id="related"></a>

- [Gov.uk: Understanding accessibility requirements for public sector bodies](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)

- [Gov.uk: Dos and don'ts on designing for accessibility](https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/)
