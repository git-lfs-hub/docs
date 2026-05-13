---
title: File Locking
---

# File Locking

## The problem

Code files can usually be merged automatically — Git is smart enough to combine two people's changes to the same script. Binary files cannot. If two people edit the same `.psd` and both push their changes, one person's work will be overwritten.

LFS locking solves this by letting you claim exclusive edit rights on a file before you open it. Think of it like checking out a physical file from a cabinet: only one person can have it at a time, while everyone else can still see the last version.

## Marking a file type as lockable

Add the `--lockable` flag when tracking a file type. This makes all files of that type **read-only on disk by default** — you must explicitly lock a file to make it writable, which prevents accidental edits without locking first.

```sh
git lfs track "*.psd" --lockable
git add .gitattributes
git commit -m "mark PSD files as lockable"
git push
```

## Locking a file before you edit it

```sh
git lfs lock path/to/character.psd
```

The file becomes writable on your machine. Other team members will see it as locked when they run `git lfs locks`, and their Git will warn them if they try to edit it.

::: callout tip "Make this a habit"
Lock the file first, then open it in your application. Unlock as soon as you've pushed your changes. This keeps team members from stepping on each other's work.
:::

## Seeing who has what locked

```sh
git lfs locks
```

## Unlocking after you've committed and pushed

```sh
git lfs unlock path/to/character.psd
```

## Force-unlocking (admin / emergency use only)

If a team member has locked a file and is unavailable, an administrator can remove the lock:

```sh
git lfs unlock --force path/to/character.psd
```

::: callout warning
Force-unlocking someone else's lock may cause them to lose unsaved work. Always try to confirm with the person first.
:::
