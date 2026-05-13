---
title: Git
---

# Git

Git is the version control tool that everything else builds on. It tracks every change to every file, so you can always go back to an earlier version, see who changed what, and collaborate without overwriting each other's work.

::: callout tip "Already installing GitHub Desktop?"
GitHub Desktop includes its own copy of Git, so you can skip this page if you're installing it.
:::

## Install

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

::: callout info "Configure Git LFS after installing"
After installing Git, run this to set up [LFS](git-lfs.md) hooks Git needs to handle large files.
```sh
git lfs install
```
:::

## Configure your identity

Git stamps every commit with your name and email. Set them once after installing:

```sh
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

::: callout info
Use the same email address as your GitHub account so your commits are linked to your profile.
:::

## Verify

```sh
git --version
```

Any output of the form `git version 2.x.x` means Git is installed and on your PATH.
