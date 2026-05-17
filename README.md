# GitHub LFS Server Docs

Companion docs site for onboarding team members to Git, GitHub, and an internal [github-lfs-server](https://github.com/pasha-kuznetsov/github-lfs-server).

Built with [`@docmd/core`](https://github.com/nicholasgasior/docmd).

## Development

```sh
bun install
bun run dev
```

## Build

```sh
bun run build
```

## Configuration

Site variables (org, title, githubHome, etc) live in `vars.json` and are injected into Markdown files via the Handlebars plugin.

Docs source is in `docs/`. Assets (logo, favicon, custom CSS) are in `assets/`.
