---
title: Quick Start
layout: full
---

<style>.toc-sidebar { display: none; }</style>

# Quick Start

Get set up to work with our repositories — installed, logged in, and ready to clone with large files included. It's a one-time setup; once done, Git and LFS handle everything automatically from then on.

::: steps

1. **Install Git tools**

   Install Git, optionally GitHub Desktop, and a credential helper. See the [Tools setup guide](tools/index.md) for step-by-step instructions.

2. **Log in to GitHub and LFS server**

   Log in to GitHub and set `gh` as the cridential helper so Git signs in automatically to GitHub from now on:

   ```sh
   gh auth login
   gh auth setup-git
   ```

   - When asked for your preferred protocol, choose **HTTPS**.
   - When asked whether to authenticate Git with your credentials, choose **Yes**.

   Log in to the LFS Server and set `gh` as the credential helper:

   ```sh
   gh auth login     -h {{lfs.server}}
   gh auth setup-git -h {{lfs.server}}
   ```

   If you installed `git-credential-manager` instead of `gh`, see [`git-credential-manager`](tools/git-credential-manager.md) for the equivalent steps. See [Authentication](auth.md) for full details on both paths.

3. **Configure Git LFS**

   Run the following to configure Git — despite the name, this command doesn't install anything; it sets up the hooks that tell Git to hand LFS-tracked files off to the LFS extension:

   ```sh
   git lfs install
   ```

   If the command fails with "command not found", see [Git LFS](tools/git-lfs.md) for installation steps.

4. **Clone a repository**

   Get the repository URL from GitHub (green **Code** button → **HTTPS** tab), then clone it:

   ::: tabs

   == tab "Terminal"

   ```sh
   git clone <repository-url>
   ```

   LFS files are downloaded automatically.

   == tab "GitHub Desktop"

   Go to **File → Clone Repository**, paste the URL, and choose a local folder.

   :::

   ::: callout info "Complete step 3 before cloning"
   Without `git lfs install`, Git doesn't know about LFS and will check out pointer files instead of the real assets. See [Forgot to run `git lfs install`?](lfs/index.md#forgot-to-run-git-lfs-install) for recovery steps.
   :::

:::
