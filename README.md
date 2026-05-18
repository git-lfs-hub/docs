# Git LFS Hub Docs

Companion docs site for onboarding team members to Git, GitHub, and an internal [git-lfs-hub/server](https://github.com/git-lfs-hub/server). Built with [`@docmd/core`](https://github.com/nicholasgasior/docmd).

## Setup and Deployment

See [git-lfs-hub/deploy](https://github.com/git-lfs-hub/deploy).

## Architecture

| Path | Purpose |
|------|---------|
| `docs/` | Markdown source pages |
| `assets/` | Logo, favicon, custom CSS |
| `plugins/` | `handlebars-plugin.js` — injects `vars.json` values into Markdown; `custom-plugin.js` — site-specific transforms |
| `docmd.config.js` | Site config (title, theme, logo) — reads from `vars.json` |
| `vars.json` | Symlinked from `vars.resolved.json` at the deploy root |
| `site/` | Build output — copied into `server/public/` and served via the Worker's ASSETS binding |

## Development

### Deploy repo pipeline

In **git-lfs-hub/deploy**, `turbo init` writes `vars.resolved.json`; `sync-docs` links it to `docs/vars.json`. Use `turbo dev` or `turbo build` at the monorepo root so docs stay aligned with rendered config.

### Standalone development

Use this when you work from **git-lfs-hub/docs** only (no deploy checkout). Keep a real `vars.json` in the docs root (the values docmd and the Handlebars plugin need)—not a symlink to `vars.resolved.json`. Then:

```sh
bun install
bun run dev       # docmd dev (live reload)
bun run build     # docmd build → site/
```

### Standalone deployment

`bun run build` produces static files under `site/`. Publish that folder to any static host you control. To ship docs *inside* the LFS Worker (ASSETS), use the deploy monorepo: `turbo build` copies `site/` into `server/public/` before `turbo deploy`.
