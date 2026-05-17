---
title: Welcome
layout: full
bodyClass: sidebar-collapsed
# noStyle: true
# components:
#   meta: true
#   favicon: true
#   css: true
#   menubar: true    # Use the site's top navigation
#   scripts: true    # Enable interactive components
#   mainScripts: true
---

<style>.toc-sidebar { display: none; }</style>
<script>document.body.classList.add('sidebar-collapsed');</script>

::: hero layout:split glow:true
# Version-controlled assets for our whole team.
Code lives on [GitHub]({{githubHome}}). Large files — textures, renders, video, and audio — are served from our own LFS server.

::: button "Quick Start" #quick-start color:blue

== side

```sh "TLDR;"
# Log in
gh auth login
gh auth setup-git
gh auth setup-git -h {{lfsServer}}

# Enable LFS
git lfs install

# Clone — LFS files included automatically
git clone <repository-url>
```
:::

::: grids
::: grid
::: card "Why Git?" icon:github
Full version history for every file. Roll back anything, see who changed what, and collaborate without conflicts.

[Learn more](why-git.md)
:::
:::
::: grid
::: card "Why LFS?" icon:hard-drive
Large binaries bloat Git and slow it down. LFS stores them on a dedicated server, only keeping a pointer in the repo.

[Learn more](why-git-lfs.md)
:::
:::
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
   gh auth setup-git -h {{lfsServer}}
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
