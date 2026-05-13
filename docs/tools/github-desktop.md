---
title: GitHub Desktop
---

# GitHub Desktop

GitHub Desktop gives you a visual interface for Git — see your changes, write commit messages, and sync with GitHub without touching a terminal. It is especially recommended for Graphic Artists.

See the [official installation guide](https://desktop.github.com/download/) for full details.

## Install

::: tabs

== tab "Windows"

Download and run the installer from [desktop.github.com/download](https://desktop.github.com/download/).

== tab "Mac"

Download the `.dmg` from [desktop.github.com/download](https://desktop.github.com/download/) and drag GitHub Desktop to your Applications folder.

== tab "Linux"

The official GitHub Desktop app does not support Linux, but there is a well-maintained community fork by [shiftkey](https://github.com/shiftkey/desktop).

The easiest way to install it is via **Flatpak** from [Flathub](https://flathub.org/en/apps/io.github.shiftey.Desktop):

```sh
flatpak install flathub io.github.shiftey.Desktop
```

:::

## Authenticate

GitHub Desktop handles your GitHub.com authentication automatically. On first launch it will prompt you to sign in — follow the in-app prompts.

::: callout warning "LFS server not covered"
GitHub Desktop does not configure credentials for our LFS server at `{{lfs-server}}`. After signing in, complete the setup using either [`gh`](gh-cli.md) (recommended) or [`git-credential-manager`](git-credential-manager.md).
:::
