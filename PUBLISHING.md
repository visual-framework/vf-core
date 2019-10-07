# PUBLISHING

A guide on how to do release of `vf-core` and components. The two are done independently.

## VF Core

This is the parent project. It is the engine that assembles the VF components into a system 
and allows for the creation of CSS, JS and usable Nunjucks templates.

See also: [Guide on versions in `vf-core`](https://visual-framework.github.io/vf-welcome/developing/guidelines/versioning/)

1. Make a new branch
    - `releases/vf-core-<newversions>`
1. Update the version 
    - https://docs.npmjs.com/cli/version
    - `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]` 
1. Create a PR on GitHub
1. Merge to develop (or master, once we go stable)
1. Publish to npm
    - `npm publish`

## Components inside `vf-core`

Components are contained in a [monorepo](https://gomonorepo.org) inside of the `vf-core` project. They are published
to npm with [Lerna](https://github.com/lerna/lerna#about). 

See also: [Guide on updating a component versions](https://visual-framework.github.io/vf-welcome/developing/components/updating-a-component/)

While we do not add tags as part of the "release" for component, Lerna needs a named tag to function.

### Component release workflow

1. See a list of changed packages
    - `lerna changed`
1. Test publish 
    - `lerna publish --no-git-tag-version --conventional-commits --no-push --skip-npm prerelease `
    - Afterward, reset your branch `git reset --hard`
1. Then publish to npm
    - `lerna publish --no-git-tag-version --conventional-commits --no-push prerelease`
    - You'll probably have lost your local git changes, so: reset your branch `git reset --hard`
    - `lerna publish --no-git-tag-version --conventional-commits --no-push --skip-npm prerelease`
    - verify no tags added: `git tag`
1. push your changes to develop with commit message in a format of: `Component release 20190930-01`
1. add a tag `git tag -a components.YYYYMMDD-01 -m 'Snapshot of components for lerna'`
1. push the tag `git push origin --tags`

### Appendix of useful Lerna commands

- `lerna ls` list all packages known to lerna
- `lerna ls --since af04cb2a` list all changed packages since a commit (sadly not combinable with lerna publish)
- `lerna diff` all changes since last publish
- `lerna changed` all packages changed


