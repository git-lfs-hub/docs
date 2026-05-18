---
title: Authenticate
---

# Authentication

Before you can push changes or download LFS files, your tools need to know who you are. You need to authenticate to two places:

- **GitHub.com** — for repository access
- **Our LFS server** at `{{lfs.server}}` — for large file downloads

::: callout info "GitHub Desktop users"
GitHub Desktop handles your GitHub.com sign-in automatically, but it cannot configure credentials for the LFS server. You still need to complete the steps below.
:::

## Using `gh` (recommended)

### Log in to GitHub

Run the following and follow the prompts. When asked for your preferred protocol, choose **HTTPS**. When asked whether to authenticate Git with your credentials, choose **Yes**.

```sh
gh auth login
```

### Configure credentials for the LFS server

This registers `gh` as the credential helper for both GitHub.com and our LFS server:

```sh
gh auth setup-git
gh auth setup-git -h {{lfs.server}}
```

You will not be prompted for credentials again — `gh` handles them automatically from this point on.

## Using `git-credential-manager`

`git-credential-manager` is an alternative if you prefer it over `gh` or are in an environment where `gh` isn't available. See [`git-credential-manager`](tools/git-credential-manager.md) for the equivalent steps.
