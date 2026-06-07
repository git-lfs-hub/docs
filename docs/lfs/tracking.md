---
title: Tracking Files
---

# Tracking Files

LFS works by tracking file patterns in a `.gitattributes` file at the root of your repository. Any file matching a tracked pattern is automatically stored in LFS instead of directly in Git.

::: callout tip "Track by pattern, not by file"
Always track a file _type_ (e.g., `*.psd`) rather than a specific file. Any new file of that type is then automatically handled by LFS — no one has to remember to do anything special.
:::

## Setting up tracking for a file type

::: steps

1. **Run `git lfs track` with the file pattern**

   ```sh
   git lfs track "*.psd"
   ```

   This creates or updates `.gitattributes` at the root of your repository, adding a line that tells Git to route matching files through LFS.

2. **Stage `.gitattributes`**

   ```sh
   git add .gitattributes
   ```

3. **Commit and push**

   ```sh
   git commit -m "track PSD files with LFS"
   git push
   ```

   Once this is pushed, every team member's Git will automatically use LFS for files matching that pattern — they don't need to do anything.

:::

## Checking what's currently tracked

```sh
git lfs track
```

Lists all the patterns currently configured for LFS in the repository.

## Common file types to track

| Type              | Extensions                                             |
| ----------------- | ------------------------------------------------------ |
| Images & textures | `.psd`, `.ai`, `.png`, `.jpg`, `.tiff`, `.exr`, `.hdr` |
| 3D & animation    | `.blend`, `.fbx`, `.obj`, `.ma`, `.mb`, `.abc`         |
| Video             | `.mp4`, `.mov`, `.avi`, `.mkv`                         |
| Audio             | `.wav`, `.aiff`, `.flac`, `.mp3`                       |
| Archives & builds | `.zip`, `.7z`, `.rar`, `.exe`, `.dmg`                  |
