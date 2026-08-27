import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import remarkWideImages from './src/plugins/remark-wide-images.mjs';

export default defineConfig({
  site: 'https://example.com',
  vite: { plugins: [tailwind()] },
  markdown: {
    remarkPlugins: [remarkWideImages],
  },
});
