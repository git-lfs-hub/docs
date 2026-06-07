---
title: "Other: Personal Access Token"
---

# Personal Access Token

Using a personal access token (PAT) is a last resort for situations where neither `gh` nor GCM is available. For most users, the `gh` setup is the right path.

GitHub offers two kinds of token. **Fine-grained** tokens are scoped to specific repositories and are the recommended choice. **Classic** tokens are simpler but grant broad access to everything your account can reach.

Either kind works the same way once created — see [Using the token](#using-the-token) below.

::: tabs

== tab "Fine-grained (recommended)"

::: steps

1. **Open the GitHub tokens page**

   Navigate to [Profile Settings](https://github.com/settings/profile) → Developer settings → Personal access tokens → [Fine-grained tokens](https://github.com/settings/personal-access-tokens)

   Then click **[Generate new token](https://github.com/settings/personal-access-tokens/new)**

2. **Name and expiration**

   Give it a descriptive name and set an expiration date (or **No expiration**).

3. **Resource owner**

   Select **{{github.org}}**.

4. **Repository access**

   Select **All repositories** or choose _Only select repositories_ and pick the ones you need.

5. **Permissions**

   Under **Add permissions**, set **Contents** to **Read and write**. This covers both Git and LFS access. (Metadata is granted read-only automatically.)

6. **Generate**

   Click **Generate token**, then **copy and save it right away** — store it in a password manager. GitHub shows the token only once; if you lose it you have to generate a new one.

:::

== tab "Classic"

::: steps

1. **Open the Tokens (classic) page**

   Navigate to [Profile Settings](https://github.com/settings/profile) → Developer settings → Personal access tokens → [Tokens (classic)](https://github.com/settings/tokens)

   Then click **[Generate new token (classic)](https://github.com/settings/tokens/new)**

2. **Name and expiration**

   Give it a descriptive name and set an expiration date (or **No expiration**).

3. **Scopes**

   Under **Scopes**, check **repo**.

4. **Generate**

   Click **Generate token**, then **copy and save it right away** — store it in a password manager. GitHub shows the token only once; if you lose it you have to generate a new one.

:::

:::

## Using the token

The token replaces your password. When Git prompts you, enter your GitHub username and paste the **token as the password** — for both GitHub.com and our LFS server at `{{lfs.server}}`.

You'll be prompted separately for each host the first time. To avoid re-entering it on every push, let Git remember it:

```sh
git config --global credential.helper store
```

This saves the token to `~/.git-credentials` in plain text. Acceptable on a personal machine; on a shared one, prefer `gh` or [`git-credential-manager`](git-credential-manager.md) instead, which store it securely.

::: callout warning "Token expiry"
If you set an expiration, Git will start failing to authenticate once the token lapses. Generate a new one and update your saved credentials — delete the old line from `~/.git-credentials` (or clear it from your credential helper) so Git prompts for the new token.
:::
