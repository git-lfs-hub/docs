---
title: Why Git & GitHub?
---

# Why Git & GitHub?

::: callout tip
You don't need to understand all of this to get started — the [Quick Start](index.md) covers everything you need to set up.
:::

## The problem: files pile up fast

If you've ever saved files named `logo_v2.ai`, `logo_v3_final.ai`, or `logo_v3_FINAL_FINAL.ai`, you've already run into the problem that version control solves.

Those copies pile up, it becomes hard to know which is the "real" version, and you lose the context of why things changed. If you need to go back to something from last Tuesday, you're digging through folders hoping you saved a copy.

## What is Git?

Git is a version control tool that records every change you save — called a **commit** — along with a timestamp, your name, and a short description of what changed. That history lives in one place, so you never need `_final_v2_REALLY_FINAL` filenames again.

At any point you can:

- See the complete history of a file
- Go back to any previous version
- See exactly what changed between two versions and who changed it

## What does GitHub add?

Git runs locally on your computer. [GitHub]({{github-home}}) is the cloud platform where that history is backed up and shared with your team. With GitHub you can:

- **Back up your work** — your full history is safe even if your laptop dies
- **Collaborate** — teammates can see your changes and you can see theirs, without emailing files back and forth
- **Review changes** — team members can look over each other's work before it becomes part of the main project

## Key concepts

**Repository** — the project folder that Git is tracking. Everything inside it (files, subfolders, full history) lives in the repository. On GitHub, each repository has its own page where you can browse files and see the change history.

**Commit** — a saved snapshot of your changes. Each commit has a short message describing what you did: "updated hero texture", "fixed logo colour". Think of it as a meaningful save point, not an auto-save.

**Branch** — a separate copy of the project where you can make changes without affecting the main version. Branches let you experiment safely. When you're happy with the result, you merge the branch back in.

**Pull request** — a way to propose your branch's changes to the rest of the team. Others can review and comment before the changes are merged. When using GitHub Desktop, pull requests are managed through the GitHub website.
