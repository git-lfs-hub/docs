import vars from '../vars.json' with { type: 'json' };

export const plugin = {
  name: 'custom',
  version: '1.0.0',
  capabilities: ['build'],
} as const;

export function onPageReady(page: { html: string }): void {
  if (vars.banner) return;
  page.html = page.html.replace(
    /(<a [^>]*class="logo-link"[^>]*>[\s\S]*?<\/a>)/,
    `$1<span class="logo-title">${vars.title}</span>`,
  );
}
