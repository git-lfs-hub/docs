---
title: Overview
---

# Working with LFS

Git LFS stores large binary files outside the repository, keeping clones fast and history lean. See [Tracking Files](tracking.md) to set up which file types go through LFS, and [File Locking](locking.md) to prevent conflicts when editing binary assets.

## Checking LFS status

```sh
git lfs status
```

Shows which LFS-tracked files have local changes that haven't been committed yet.

## Pulling LFS files

LFS files download automatically when you clone or pull. If you find a file that looks like a small text file (an LFS "pointer") instead of the real asset, run:

```sh
git lfs pull
```

## Migrating existing large files to LFS

If a large file was committed to the repository *before* LFS tracking was configured, the full file is still sitting in Git's history. That history needs to be rewritten to clean it up.

Migration rewrites repository history, which affects every team member. This is an Engineer-level task — see the [`git lfs migrate` documentation](https://github.com/git-lfs/git-lfs/blob/main/docs/man/git-lfs-migrate.adoc) for details.
