---
title: 'Other: Personal Access Token'
---

# Personal Access Token

Using a personal access token (PAT) is a last resort for situations where neither `gh` nor GCM is available. For most users, the `gh` setup is the right path.

To generate a token:

1. Go to **GitHub → Settings → Developer settings → Personal access tokens**.
2. Click **Generate new token (classic)**.
3. Give it a descriptive name and set an expiration date.
4. Under **Scopes**, check **repo**.
5. Click **Generate token** and copy it immediately — GitHub will not show it again.

When Git asks for your password, paste the token instead.
