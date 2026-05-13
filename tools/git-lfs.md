---
title: Git LFS
---

# Git LFS

Git LFS stores large binary files outside the repository, keeping clones fast. After installing Git, run the following to configure it — despite the name, this command doesn't install anything; it sets up the hooks that tell Git to hand LFS-tracked files off to the LFS extension:

```sh
git lfs install
```

## If `git lfs install` fails

Git LFS is usually bundled with Git or installed automatically by your package manager. If the command above fails with a "command not found" error, install it manually:

::: tabs

== tab "Windows"

Download and run the installer from [git-lfs.com](https://git-lfs.com). Or, with [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/):

```sh
winget install GitHub.GitLFS
```

== tab "Mac"

```sh
brew install git-lfs
```

== tab "Linux"

**Debian / Ubuntu:**
```sh
sudo apt install git-lfs
```

**Fedora / RHEL:**
```sh
sudo dnf install git-lfs
```

:::

Then re-run:

```sh
git lfs install
```
