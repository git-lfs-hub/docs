---
title: "Other: git-credential-manager"
---

# `git-credential-manager`

`git-credential-manager` (GCM) is an alternative credential helper that works for both GitHub.com and our LFS server. Use it if you prefer it over [`gh`](gh-cli.md), or in environments where `gh` isn't available.

## Install

::: tabs

== tab "Windows"

GCM is bundled with [Git for Windows](https://git-scm.com/download/win). If you installed Git using the default options, GCM is already installed.

For a standalone installer, see the [GCM installation guide](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/install.md).

== tab "Mac"

```sh
brew install --cask git-credential-manager
```

== tab "Linux"

Download the `.deb`, `.rpm`, or tarball from the [GCM installation guide](https://github.com/git-ecosystem/git-credential-manager/blob/release/docs/install.md) and follow the instructions there.

:::

## Configure

```sh
git-credential-manager configure
git config --global 'credential.https://{{lfs.server}}.provider' github
```

GCM will prompt you for credentials automatically the first time you run a `git` command that needs them — a browser window will open for you to sign in.
