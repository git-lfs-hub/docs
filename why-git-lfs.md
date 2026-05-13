---
title: Why Git LFS?
---

# Why Git LFS?

## The problem with large files in Git

Git is very good at tracking changes in text files — code, configuration, scripts. For text, Git can store just the *difference* between two versions, which is extremely compact.

Binary files are different. A `.psd` or `.blend` file can't be meaningfully "diffed" — every save is a completely new copy. If you commit a 200 MB texture ten times, Git stores all ten copies: 2 GB of history, just for that one file. Multiply that across a whole team and a whole project, and repositories become very slow to clone and painful to work with.

## The solution: Git LFS

**LFS** stands for **Large File Storage**. Instead of storing large files inside the Git repository, LFS uploads them to a dedicated file server and puts a tiny text pointer in their place:

```
version https://git-lfs.github.com/spec/v1
oid sha256:4d7a214614ab2935c943f9e0ff69d22eadbb8f32b1258daaa5e2ca24d17e2393
size 200000000
```

That pointer is just a few bytes. The repository stays lean no matter how many versions of a large file the team saves.

When you clone the repository or switch branches, LFS automatically downloads the actual files from the file server in the background. From your perspective, nothing changes — the files are just there.

## {{org}}'s LFS server

We run our own LFS server at `{{lfs-server}}`. All large assets are stored there. You authenticate to it using `gh` — see the [Quick Start](index.md) for setup, or [`gh` CLI](tools/gh-cli.md) if you need to re-authenticate.

::: callout tip
Once you complete the one-time setup, LFS is completely transparent to your daily workflow. You commit, push, and pull exactly as you always would — LFS handles the large files automatically in the background.
:::
