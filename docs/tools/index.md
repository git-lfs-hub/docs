---
title: Overview
---

# Tools

Git and a credential helper are required. GitHub Desktop is optional — recommended for Graphic Artists, skip it if you prefer the terminal.

## Git

Git is the version control tool that everything else builds on.

::: callout tip "Already installing GitHub Desktop?"
GitHub Desktop includes its own copy of Git, so you can skip this step if you're installing it below.
:::

::: tabs

== tab "Windows"

Download and run the installer from [git-scm.com](https://git-scm.com/download/win). The default options work well for most users.

Or, if you have [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/):

```sh
winget install Git.Git
```

== tab "Mac"

Install via [Homebrew](https://brew.sh):

```sh
brew install git
```

Or download the installer from [git-scm.com](https://git-scm.com/download/mac).

== tab "Linux"

**Debian / Ubuntu:**

```sh
sudo apt install git
```

**Fedora / RHEL:**

```sh
sudo dnf install git
```

:::

Git LFS is usually bundled with Git. If `git lfs install` fails with "command not found", see [Git LFS](git-lfs.md) for installation steps.

[More about Git →](git.md)

## GitHub Desktop _(optional)_

A visual Git client. Recommended for Graphic Artists or anyone who prefers not to use the terminal. See the [official installation guide](https://desktop.github.com/download/) for full details.

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

::: callout warning "GitHub Desktop doesn't cover everything"
GitHub Desktop handles your GitHub.com sign-in automatically, but it cannot configure credentials for our LFS server. You still need to complete the authentication steps in the [Quick Start](../index.md).
:::

[More about GitHub Desktop →](github-desktop.md)

## Credential helper

A credential helper is needed to authenticate to our LFS server at `{{lfs.server}}`. We recommend `gh` (the GitHub CLI) — it's the simplest path. `git-credential-manager` works too; see [`git-credential-manager`](git-credential-manager.md) for that setup.

**Recommended: `gh`**

::: tabs

== tab "Windows"

```sh
winget install GitHub.cli
```

Or download the installer from [cli.github.com](https://cli.github.com).

== tab "Mac"

```sh
brew install gh
```

== tab "Linux"

**Debian / Ubuntu:**

```sh
sudo apt install gh
```

**Fedora / RHEL:**

```sh
sudo dnf install gh
```

For other distributions, see the [installation guide](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

:::

[More about `gh` →](gh-cli.md)
