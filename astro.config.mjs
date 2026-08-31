import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import remarkWideImages from './src/plugins/remark-wide-images.mjs';

export default defineConfig({
  site: 'https://susanta.top',

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [tailwind()],
  },

  markdown: {
    remarkPlugins: [remarkWideImages],
  },
});
