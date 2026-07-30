// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
site: 'https://mfrancischini.github.io',
  compressHTML: true,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/components')
  })],
});