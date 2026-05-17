---
title: GitHub CLI
---

# `gh` CLI

`gh` is the GitHub CLI and the recommended way to authenticate to both GitHub and our LFS server. See [`git-credential-manager`](git-credential-manager.md) for an alternative.

## Install

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

For other distributions see the [installation guide](https://github.com/cli/cli/blob/trunk/docs/install_linux.md).

:::

## Authenticate to GitHub

Run the following and follow the prompts. When asked for your preferred protocol, choose **HTTPS**. When asked whether to authenticate Git with your credentials, choose **Yes**.

```sh
gh auth login
```

::: callout tip "GitHub Desktop users"
GitHub Desktop has its own sign-in separate from `gh`. You still need to run this command so that `gh` itself can authenticate to GitHub.
:::

## Configure credentials for the LFS server

This registers `gh` as the credential helper for both GitHub.com and our LFS server:

```sh
gh auth setup-git
gh auth setup-git -h {{lfsServer}}
```
