---
title: Authenticate
---

# Authentication

Before you can push changes or download LFS files, your tools need to know who you are.

::: callout info "LFS server authentication"
GitHub Desktop alone cannot configure credentials for our LFS server at `{{lfs-server}}`. You need either `gh` (recommended) or `git-credential-manager` to complete that setup.
:::

Choose your setup path:

- [GitHub Desktop](tools/github-desktop.md) — visual Git client, recommended for Graphic Artists
- [`gh` CLI](tools/gh-cli.md) — recommended credential helper for the LFS server
- [`git-credential-manager`](tools/git-credential-manager.md) — alternative credential helper
