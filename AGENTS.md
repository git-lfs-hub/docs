# AGENTS.md

Default to using Bun instead of Node.js.

## Commands

```sh
bun install        # install deps
bun run dev        # docmd dev server (live reload)
bun run build      # docmd build → site/
```

No test suite. CI runs `bun run build` on PRs.

## Architecture

Static docs site built with [`@docmd/core`](https://github.com/nicholasgasior/docmd). Markdown pages in `docs/` → built into `site/` → copied into `server/public/`, served via Cloudflare ASSETS binding.

### vars.json

Central config injected everywhere. In deploy pipeline: symlink to `vars.json` at the deploy root (created by `bun run config` via `config/cli.sh`). For standalone dev: plain file checked in. Keys: `title`, `org`, `lfsServer`, `githubOrg`, `githubAppHome`, etc.

### Plugins

Both plugins live in `plugins/`, registered in `docmd.config.js`.

**`handlebars-plugin.js`** — `onBeforeParse` hook. Runs Handlebars on every Markdown file before parsing, using `vars.json` as context. Use `{{varName}}` in any `.md` to interpolate. Compile errors print file+line+column and exit 1.

**`custom-plugin.js`** — `onPageReady` hook. Post-processes HTML to inject `vars.title` as `<span class="logo-title">` sibling of logo anchor.

### docmd.config.js

Reads `vars.json` for `title`, `banner.dark`/`banner.light`, `logo.dark`/`logo.light`. Logo uses `banner.*` first, falls back to `logo.*`, omitted if neither set. Registers both plugins by absolute URL (required by docmd). Disables breadcrumbs and footer branding.
