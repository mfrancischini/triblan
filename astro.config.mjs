// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercelAdapter from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://chencho-dev.vercel.app',
  compressHTML: true,
  output: 'static',
  adapter: vercelAdapter(),
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