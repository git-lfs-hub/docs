---
title: Welcome
---

# Welcome to {{title}}

We host all of our code and creative assets on [GitHub]({{github-home}}). Large files — textures, renders, video, audio, and other binaries — are stored using **Git LFS** (Large File Storage), served from our own LFS server at `{{lfs-server}}`. The Quick Start below gets you set up from scratch.

::: callout info "Why Git & GitHub?"
Git tracks every change to every file, so you can always go back to an earlier version, see who changed what, and collaborate without overwriting each other's work. GitHub is the cloud platform we use to host those repositories. [Learn more →](why-git.md)
:::

::: callout info "Why LFS?"
Git works best with text files. Large binary files — images, video, 3D assets — bloat a repository and make it slow to download. LFS keeps those files on a dedicated server and stores only a small pointer inside Git, so the repository stays fast. [Learn more →](why-git-lfs.md)
:::

## Quick Start

::: steps

1. **Install Git tools**

   Install Git, optionally GitHub Desktop, and a credential helper. See the [Tools setup guide](tools/index.md) for step-by-step instructions.

2. **Log in to GitHub and LFS server**

   Run the following and follow the prompts. When asked for your preferred protocol, choose **HTTPS**. When asked whether to authenticate Git with your credentials, choose **Yes**.

   ```sh
   gh auth login
   ```

   Then register `gh` as the credential helper so Git signs in automatically to both GitHub and the LFS server from now on:

   ```sh
   gh auth setup-git
   gh auth setup-git -h {{lfs-server}}
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

   ::: callout warning "Complete step 3 before cloning"
   Without `git lfs install`, Git doesn't know about LFS and will check out pointer files instead of the real assets. See [Forgot to run `git lfs install`?](lfs/index.md#forgot-to-run-git-lfs-install) for recovery steps.
   :::

:::
