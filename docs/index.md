---
title: Welcome
layout: full
bodyClass: sidebar-collapsed
---

<style>.toc-sidebar { display: none; }</style>
<script>document.body.classList.add('sidebar-collapsed');</script>

::: hero layout:split glow:true

# Version-controlled assets for our whole team.

Code lives on [GitHub]({{github.home}}). Large files — textures, renders, video, and audio — are served from our own LFS server.

::: button "Quick Start" quick-start.md
::: button "Set up New Repo" repo-start.md color:gray

== side

```sh "TLDR;"
# Log in to GitHub
gh auth login
gh auth setup-git

# Log in to the LFS Server
gh auth login     -h {{lfs.server}}
gh auth setup-git -h {{lfs.server}}

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
