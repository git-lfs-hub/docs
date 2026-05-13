---
title: Welcome
---

# Welcome to {{title}}

We host all of our code and creative assets on [GitHub]({{github-home}}). Large files — textures, renders, video, audio, and other binaries — are stored using **Git LFS** (Large File Storage), served from our own LFS server at `{{lfs-server}}`. The Quick Start below gets you set up from scratch.

::: callout info "Why Git & GitHub?"
Git tracks every change to every file, so you can always go back to an earlier version, see who changed what, and collaborate without overwriting each other's work. GitHub is the cloud platform we use to host those repositories. [Learn more →](why-git.md)
:::

::: callout info "Why LFS?"
Git works best with text files. Large binary files — images, video, 3D assets — bloat a repository and make it slow to download. LFS keeps those files on a dedicated server and stores only a small pointer inside Git, so the repository stays fast. [Learn more →](why-git-lfs.md)
:::

## Quick Start

::: steps

1. **Install Git**

   Git is the version control tool that everything else builds on. You need it even if you plan to use GitHub Desktop.

   ::: callout tip "Already installing GitHub Desktop?"
   GitHub Desktop includes its own copy of Git. If you're going to install it in Step 2, you can skip this step.
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

2. **Install GitHub Desktop** _(recommended for Graphic Artists — optional for Engineers)_

   GitHub Desktop gives you a visual interface for Git: see your changes, write commit messages, and sync with GitHub without touching a terminal. See the [official installation guide](https://desktop.github.com/download/) for full details.

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
   GitHub Desktop handles your GitHub.com sign-in automatically, but it cannot configure credentials for our LFS server. You still need to complete Steps 3–5 below.
   :::

3. **Install a credential helper**

   A credential helper is needed to authenticate to our LFS server at `{{lfs-server}}`. We recommend `gh` (the GitHub CLI) — it's the simplest path. `git-credential-manager` works too; see [`git-credential-manager`](tools/git-credential-manager.md) for that setup.

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

4. **Authenticate `gh` to GitHub**

   Run the following and follow the prompts. When asked for your preferred protocol, choose **HTTPS**. When asked whether to authenticate Git with your credentials, choose **Yes**.

   ```sh
   gh auth login
   ```

   ::: callout tip "GitHub Desktop users"
   GitHub Desktop has its own sign-in separate from `gh`. You still need to run this command so that `gh` itself — and the LFS server setup in Step 5 — can authenticate.
   :::

5. **Configure credentials for the LFS server**

   Required for everyone. If you installed `gh`:

   ```sh
   gh auth setup-git
   gh auth setup-git -h {{lfs-server}}
   ```

   If you installed `git-credential-manager` instead, see [`git-credential-manager`](tools/git-credential-manager.md) for the equivalent steps.

6. **Clone a repository**

   Get the repository URL from GitHub (green **Code** button → **HTTPS** tab), then clone it:

   ::: tabs

   == tab "Terminal"

   ```sh
   git clone <repository-url>
   ```

   LFS files are downloaded automatically.

   == tab "GitHub Desktop"

   Go to **File → Clone Repository**, paste the URL, and choose a local folder.

   :::

:::
