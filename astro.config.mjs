// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // WICHTIG: Muss mit site.url in src/config/site.ts übereinstimmen.
  site: 'https://www.wa-clean.de',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});