---
title: Rewriting History
---

# Rewriting History

When a repo already has large files committed directly into Git — including past versions — moving them into LFS means rewriting history. `git lfs migrate import` does this: it moves every matching file into LFS and writes the tracking rules into `.gitattributes`.

::: callout info
This covers onboarding an _existing_ repo. For setting one up from scratch, see [Set up New Repo](../repo-start.md).
:::

::: callout warning "This rewrites history"
Migrating changes every commit that touched the affected files, so commit hashes change. Coordinate with your team first: everyone should push their work, and after you force-push they must re-clone or hard-reset. Don't run this on a repo with open pull requests you can't recreate.
:::

::: steps

1. **Preview what will move**

   ```sh
   git lfs migrate info --everything
   ```

   Shows how much data each file type holds, so you can decide which patterns to include before committing to the rewrite.

2. **Migrate existing files into LFS**

   Use `--everything` to cover all branches and tags:

   ```sh
   git lfs migrate import --everything --include="*.psd,*.mp4"
   ```

   See [Common file types to track](tracking.md#common-file-types-to-track) for which patterns to include.

3. **Point the repo at our LFS server**

   Migration writes `.gitattributes` but not the LFS endpoint. Set it so files go to `{{lfs.server}}` instead of GitHub's LFS, using your repo's `owner/name`, then commit it:

   ```sh
   git config -f .lfsconfig lfs.url https://{{lfs.server}}/<owner>/<repo>
   git add .lfsconfig
   git commit -m "configure LFS server"
   ```

   Because `.lfsconfig` is committed, every teammate inherits the endpoint on clone. See [Set up New Repo](../repo-start.md) for more on this step.

4. **Verify the result**

   ```sh
   git lfs ls-files
   ```

   Lists the files now stored in LFS. Confirm `.gitattributes` was created with your patterns.

5. **Force-push the rewritten history**

   Because history changed, a normal push is rejected — you must force-push:

   ```sh
   git push --force-with-lease --all
   git push --force-with-lease --tags
   ```

   Afterwards, tell your team to re-clone (or `git fetch` + `git reset --hard origin/<branch>`). Their old clones point at the pre-rewrite history.

:::
