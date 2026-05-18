# CLAUDE.md AGENTS.md

This is `AGENTS.md`, `CLAUDE.md` symlinks to this file.

# IMPORTANT!

Guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** Bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

"Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

Test: every changed line should trace to user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**Working if:** fewer unnecessary diffs, fewer rewrites from overcomplication, clarifying questions before implementation.

---

# Technical

Default to using Bun instead of Node.js.

## Commands

```sh
bun install        # install deps
bun run dev        # init + docmd dev server (live reload)
bun run build      # init + docmd build → site/
```

No test suite. CI runs `bun run build` on PRs.

## Architecture

Static docs site built with [`@docmd/core`](https://github.com/nicholasgasior/docmd). Markdown pages in `docs/` → built into `site/` → copied into `server/public/`, served via Cloudflare ASSETS binding.

### vars.json

Central config injected everywhere. In deploy pipeline: symlink to `vars.resolved.json` at repo root. For standalone dev: plain file checked in. Keys: `title`, `org`, `lfsServer`, `githubOrg`, `githubAppHome`, etc.

### Plugins

Both plugins live in `plugins/`, registered in `docmd.config.js`.

**`handlebars-plugin.js`** — `onBeforeParse` hook. Runs Handlebars on every Markdown file before parsing, using `vars.json` as context. Use `{{varName}}` in any `.md` to interpolate. Compile errors print file+line+column and exit 1.

**`custom-plugin.js`** — `onPageReady` hook. Post-processes HTML to inject `vars.title` as `<span class="logo-title">` sibling of logo anchor.

### docmd.config.js

Reads `vars.json` for `title`, `banner.dark`/`banner.light`, `logo.dark`/`logo.light`. Logo uses `banner.*` first, falls back to `logo.*`, omitted if neither set. Registers both plugins by absolute URL (required by docmd). Disables breadcrumbs and footer branding.
