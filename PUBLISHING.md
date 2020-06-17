# PUBLISHING

A reference guide on how to do releases of `vf-core` and components. The two are done independently.

## VF Core

This is the parent project. It is the engine that assembles the VF components into a system
and allows for the creation of CSS, JS and usable Nunjucks templates.

See also: [Guide on versions in `vf-core`](https://visual-framework.github.io/vf-welcome/developing/guidelines/versioning/)

1. select the `develop` branch
    - reminder: [we don't use `master`](https://github.com/visual-framework/vf-core/blob/master/README.md)
1. update the version
    - https://docs.npmjs.com/cli/version
    - `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`
1. publish to npm
    - `npm publish`

## Components inside `vf-core`

Components are contained in a [monorepo](https://gomonorepo.org) inside of the `vf-core` project. They are published
to npm with [Lerna](https://github.com/lerna/lerna#about).

See also: [Guide on updating a component versions](https://visual-framework.github.io/vf-welcome/developing/components/updating-a-component/)

### Component pre-release workflow

1. select the `develop` branch
    - reminder: [we don't use `master`](https://github.com/visual-framework/vf-core/blob/master/README.md)
1. see a list of changed packages
    - `lerna changed`
1. test publish
    - `yarn run lerna:test`
1. publish to npm
    - `yarn run lerna:publish`
1. commit and push changes to the `develop` branch
    - commit message in a format of: `Component release YYYYMMDD-01`
1. add a tag
    - `git tag -a components.YYYYMMDD-01 -m 'Snapshot of components for lerna'`
    - Why like this? We do not add tags per individual component version, Lerna needs a named tag to see what has changed. This way we get one tag per release "bundle" avoiding tag spamming in the release history.
1. push the tag
    - `git push origin --tags`

### Appendix of useful Lerna commands

- `lerna ls` list all packages known to lerna
- `lerna ls --since af04cb2a` list all changed packages since a commit (sadly not combinable with lerna publish)
- `lerna diff` all changes since last publish
- `lerna changed` all packages changed
