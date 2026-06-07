---
title: Set up New Repo
layout: full
---

<style>.toc-sidebar { display: none; }</style>

# Set up New Repo

Get a repository storing large files on our LFS server. Set up tracking before adding files, so every large file is routed to LFS from the first commit.

::: callout info "Complete the Quick Start first"
This assumes you've already logged in and run `git lfs install` on your machine. If not, do the [Quick Start](quick-start.md) first.
:::

::: steps

1. **Get the repository**

   Clone it, then move into the folder:

   ```sh
   git clone <repository-url>
   cd <repository-name>
   ```

   Don't have a repo yet? Create one on [GitHub]({{github.home}}) (**New repository**), then copy its URL from the green **Code** button → **HTTPS** tab.

2. **Point the repo at our LFS server**

   This is what sends large files to `{{lfs.server}}` instead of GitHub's LFS. Write the endpoint into `.lfsconfig`, using your repo's `owner/name`:

   ```sh
   git config -f .lfsconfig lfs.url \
       https://{{lfs.server}}/<owner>/<repo>
   ```

   Because `.lfsconfig` is committed (step 4), every teammate inherits the endpoint on clone — no one configures it by hand.

3. **Track your file types with LFS**

   Tell LFS which file _types_ to store, by pattern — not individual files. Any future file of that type is then handled automatically:

   ```sh
   git lfs track "*.psd"
   git lfs track "*.mp4"
   ```

   This creates a `.gitattributes` file at the repo root. See [Common file types to track](lfs/tracking.md#common-file-types-to-track) for a starting list.

   ::: callout tip "Track before you add"
   Set up tracking _before_ committing any large files. Files already committed to Git stay there — moving them into LFS means [rewriting history](lfs/rewrite-history.md).
   :::

4. **Commit `.lfsconfig` and `.gitattributes`**

   ```sh
   git add .lfsconfig .gitattributes
   git commit -m "configure LFS server and tracking"
   ```

   Committing these is what makes the setup shared — every teammate's Git picks up the endpoint and tracking rules on clone, with nothing else to set up.

5. **Add your assets and push**

   Drop your files in, then commit and push as usual. Matching files go to LFS automatically:

   ```sh
   git add .
   git commit -m "add assets"
   git push
   ```

   ::: callout tip "Check what's tracked"
   Run `git lfs track` to list the patterns currently configured, or `git lfs ls-files` to see which files are stored in LFS.
   :::

:::

See [Tracking Files](lfs/tracking.md) for more on patterns and [Locking](lfs/locking.md) for coordinating edits to files that can't be merged.
