# PUBLISHING

A reference guide on how to do releases of `vf-core` and components. See also: [Guide on versions in `vf-core`](https://visual-framework.github.io/vf-welcome/developing/guidelines/versioning/)


Components and the `vf-core` build process are contained in a [monorepo](https://gomonorepo.org) inside of the `vf-core`
project. They are published to npm with [Lerna](https://github.com/lerna/lerna#about).

See also: [Guide on updating a component versions](https://visual-framework.github.io/vf-welcome/developing/components/updating-a-component/)

## Component pre-release workflow

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

## Cosmetic tagged releases

Releases can also be tagged for the full project (i.e. `v2.2.0`) these do not affect the project's availability on npm but will trigger a tagged release to the CDN (https://dev.assets.emblstatic.net/vf/v2.1.0/css/styles.css)

1. Ensure all components have been released to npm with Lerna (`lerna changed`)
1. select the `develop` branch
    - reminder: [we don't use `master`](https://github.com/visual-framework/vf-core/blob/master/README.md)
1. update the version
    - https://docs.npmjs.com/cli/version
    - `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]`
1. publish to npm
    - `npm publish`
1. tag a release on GitHub
    - https://github.com/visual-framework/vf-core/releases

## Appendix of useful Lerna commands

- `lerna ls` list all packages known to lerna
- `lerna ls --since af04cb2a` list all changed packages since a commit (sadly not combinable with lerna publish)
- `lerna diff` all changes since last publish
- `lerna changed` all packages changed
