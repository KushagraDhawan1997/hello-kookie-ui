# Release process

> This is a work-in-progress document and will be updated as we refine our release process.

## Publishing

We manually publish the package to npm as of now.

### Changelog

This is currently done manually. PRs that fix bugs or add features should include an addition to `packages/kookie-ui/changelog.md` under a new version heading. The actual release version may differ, so be sure to double check this at publish time.

### Steps

1. Merge the PR
2. Pull from `main` branch
3. `pnpm i` to make sure you have the latest deps
4. Update the version in `packages/kookie-ui/package.json` and ensure the changelog is up to date
5. Submit a PR with the version bump and changelog updates, merge when ready
6. `cd packages/kookie-ui && pnpm build && npm publish`
7. Create a GitHub release with the new version, and copy the changelog notes to the release description

## Release strategy

We track versions during the pull request process. As features are added, modified or improved it's important to keep track of these via versioning.

### Tracking version changes

This is currently done manually. PRs that fix bugs or add features should include an addition to `packages/radix-ui-themes/changelog.md` under a new version heading. The actual release version may differ, so be sure to double check this at publish time.

### Publishing a stable release

1. Checkout latest `main`
2. Run `pnpm clean && pnpm i && pnpm build:pkg`
3. Run `pnpm lint` and ensure there are no errors
4. Update the version in `packages/radix-ui-themes/package.json` and ensure the changelog is up to date
5. Run `pnpm publish -r` to publish the new version

- If publishing a pre-release version, use `pnpm publish -r --tag <tag>`, where `<tag>` is the pre-release tag (e.g. `alpha`, `beta`, `rc`)

## Updating documentation

Our documentation is in a [separate repository](https://github.com/radix-ui/website) and updating it is a three step process:

1. Write and update the [change log](https://github.com/radix-ui/website/blob/main/data/themes/docs/overview/releases.mdx)
2. Bump package version/s and create / update the pages for each version change
3. Perform documentation updates and remove live demos from previous versions
