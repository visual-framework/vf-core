---
title: Automating our update notifications
subtitle: The Visual Framework 2.0 is maturing and we're working to do a better job communicating release notes.
date: 2020-09-09 11:24:50
tags:
  - posts
  - changelog
layout: layouts/post.njk
---

Here on our blog you can now expect to find what's new in each release of components.

How we've automated it.

## Output all CHANGELOG.md changes since the most recent tag

`git show -U --raw $(git describe --tags --abbrev=0 @^)..@ --raw --output=tools/vf-component-library/src/site/posts/$(date +%F).md -- **/CHANGELOG.md`

## Output all CHANGELOG.md changes since the previous tag

`git show -U --raw $(git describe --abbrev=0 --tags $(git rev-list --tags --skip=1  --max-count=1))..$(git describe --abbrev=0 --tags $(git rev-list --tags  --max-count=1)) --raw --output=tools/vf-component-library/src/site/posts/$(date +%F)-component-updates.md -- **/CHANGELOG.md`


