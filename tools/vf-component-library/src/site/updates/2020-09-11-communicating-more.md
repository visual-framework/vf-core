---
title: Updates on Visual Framework component changes
subtitle: The Visual Framework is maturing and we're working to do a better job communicating changes and individual component release notes.
date: 2020-09-11 11:24:50
tags:
  - posts
  - changelog
layout: layouts/post.njk
templateEngineOverride: njk, md
---

Here on [this blog]({{ '/updates' | url }}) you can now expect to find what's new in each release of components.

We've also revised our [publishing procedure](https://github.com/visual-framework/vf-core/blob/develop/PUBLISHING.md) to more frequently ship tagged releases the CDN (a la: `https://assets.emblstatic.net/vf/v2.2.0/css/styles.css`). And we plan to [better document](https://github.com/visual-framework/vf-core/issues/1074) how to find the latest tagged release, and when you should build your own CSS and JS from source.

## Ways to stay updated

- [Join the VF Slack group](https://join.slack.com/t/visual-framework/shared_invite/enQtNDAxNzY0NDg4NTY0LWFhMjEwNGY3ZTk3NWYxNWVjOWQ1ZWE4YjViZmY1YjBkMDQxMTNlNjQ0N2ZiMTQ1ZTZiMGM4NjU5Y2E0MjM3ZGQ)
- Use a CI tool like [Dependabot](https://dependabot.com/) to get automatic pull requests
- [Follow the RSS feed](http://localhost:3003/vf-core/feed.xml)

## How we're (partly) automating blog updates

We're using git to echo all the changes between the last releases with this git command:

`git show -U --raw $(git describe --abbrev=0 --tags $(git rev-list --tags --skip=1  --max-count=1))..$(git describe --abbrev=0 --tags $(git rev-list --tags  --max-count=1)) --raw --output=tools/vf-component-library/src/site/updates/$(date +%F)-component-updates.md -- **/CHANGELOG.md`

It dumps the changes into a time-stamped Markdown file which our [Eleventy-based component library](https://github.com/visual-framework/vf-core/tree/develop/tools/vf-component-library) turns into [a blog post](https://github.com/visual-framework/vf-core/blob/develop/tools/vf-component-library/src/site/updates.njk).

We run this as an aliased command: `yarn run releasenotes`

The file then needs some manual massaging which we plan to further automate in the future:

- Insert templated frontmatter
- Rewrite the git output and link accorignly, in this format:

```

### [vf-summary](https://stable.visual-framework.dev/components/vf-summary/) 1.3.1

    commit [999f4cf9671afab790735150dd21c2040c3968b3](https://github.com/visual-framework/vf-core/commit/999f4cf9671afab790735150dd21c2040c3968b3)

    - adds 'grid-template-areas' CSS for `--has-image` variant so you can use it with a `-thumbnail` class.
```

## Another useful command

This command would output all CHANGELOG.md changes since the most recent tag:

`git show -U --raw $(git describe --tags --abbrev=0 @^)..@ --raw --output=tools/vf-component-library/src/site/updates/$(date +%F).md -- **/CHANGELOG.md`
