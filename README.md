# Git LFS Hub — docs

[![CI][ci-badge]][gh-wf-href]
[![CodeQL][codeql-badge]][codeql-href]
[![Socket][socket-badge]][socket-href]
[![License][license-badge]][license-href]

The end-user documentation site that ships alongside every [Git LFS Hub](https://github.com/git-lfs-hub) deployment — installing Git LFS, configuring remotes, day-to-day push/pull. Built with [`@docmd/core`](https://github.com/nicholasgasior/docmd), served via the Worker's `ASSETS` binding so onboarding new contributors is a single URL.

For the bigger picture (what the stack does, the deploy flow, the other repos) see the [org overview](https://github.com/git-lfs-hub).

## Setup and Deployment

To stand up an instance, start at [git-lfs-hub/deploy](https://github.com/git-lfs-hub/deploy) — it builds this site into `server/public/` as part of the deploy pipeline. Use this repo directly only if you want to edit or build the docs in isolation (see [Standalone development](#standalone-development) below).

## Architecture

- **`docs/`** — Markdown source pages.
- **`assets/`** — Logo, favicon, custom CSS.
- **`plugins/`** — `handlebars-plugin.js` injects `vars.json` values into Markdown; `custom-plugin.js` adds site-specific transforms.
- **`docmd.config.js`** — Site config (title, theme, logo); reads from `vars.json`.
- **`vars.json`** — Symlinked from `vars.json` at the deploy root (linked by `bun run config`).
- **`site/`** — Build output; copied into `server/public/` and served via the Worker's `ASSETS` binding.

## Development

### Deploy repo pipeline

In **[git-lfs-hub/deploy](https://github.com/git-lfs-hub/deploy)**, `bun run config` (`turbo //#config`) writes `vars.json` at the deploy root, symlinks `docs/vars.json` to it, and rsyncs `assets/` into `docs/assets/`. Use `turbo dev` or `turbo build` at the monorepo root so docs stay aligned with rendered config — `@git-lfs-hub/docs#build` depends on `//#config`, so rendering runs automatically.

### Standalone development

Use this when you work from **[git-lfs-hub/docs](https://github.com/git-lfs-hub/docs)** only (no deploy checkout). Keep a real `vars.json` in the docs root (the values docmd and the Handlebars plugin need) — not the symlink the deploy pipeline creates. Then:

```sh
bun install
bun run dev       # docmd dev (live reload)
bun run build     # docmd build → site/
```

### Standalone deployment

`bun run build` produces static files under `site/`. Publish that folder to any static host you control. To ship docs *inside* the LFS Worker (ASSETS), use the deploy monorepo: `turbo build` copies `site/` into `server/public/` before `turbo deploy`.

[ci-badge]: https://badgen.net/github/checks/git-lfs-hub/docs/main?icon=markdown&label=CI
[gh-wf-href]: https://github.com/git-lfs-hub/docs/actions/workflows/main.yml?query=branch%3Amain

[codeql-badge]: https://github.com/git-lfs-hub/docs/actions/workflows/github-code-scanning/codeql/badge.svg
[codeql-href]: https://github.com/git-lfs-hub/docs/actions/workflows/github-code-scanning/codeql?query=branch%3Amain

[socket-badge]: https://badgen.net/static/Socket/report/blue?icon=socket
[socket-href]: https://socket.dev/dashboard/org/git-lfs-hub/repo/@git-lfs-hub/docs

[license-badge]: https://badgen.net/github/license/git-lfs-hub/docs
[license-href]: LICENSE.md
