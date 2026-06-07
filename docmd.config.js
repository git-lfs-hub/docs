import { defineConfig } from '@docmd/core';

import vars from './vars.json' with { type: 'json' };

const handlebarsPlugin = new URL('./plugins/handlebars-plugin.ts', import.meta.url).href;
const customPlugin = new URL('./plugins/custom-plugin.ts', import.meta.url).href;

export default defineConfig({
  plugins: {
    [handlebarsPlugin]: {},
    [customPlugin]: {},
  },
  title: vars.title,
  theme: {
    customCss: ['assets/custom.css'],
  },
  favicon: 'assets/favicon.png',
  logo: (() => {
    const pick = (v, k) => (typeof v === 'string' ? v : v?.[k]);
    const dark = pick(vars.banner, 'dark') || pick(vars.logo, 'dark');
    const light = pick(vars.banner, 'light') || pick(vars.logo, 'light');
    if (!dark && !light) return undefined;
    return {
      dark: dark ? `assets/${dark}` : undefined,
      light: light ? `assets/${light}` : undefined,
      href: '/',
      alt: '{{title}} Logo',
      // height: "32px",
    };
  })(),
  layout: {
    breadcrumbs: false,
    footer: {
      branding: false,
    },
  },
});
