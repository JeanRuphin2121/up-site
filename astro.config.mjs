// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Adresse réellement en ligne. Sert à générer les URL absolues (partages sociaux, sitemap,
  // robots.txt). universdespossibilites.com n'est pas encore réservé (vérifié le 13/11/2026) :
  // le jour où il l'est et qu'il est branché sur Cloudflare, remplacer ici ET dans
  // src/data/site.ts (site.url).
  site: 'https://up-site.gptteamdev.workers.dev',
  // Génère sitemap-index.xml, déclaré dans public/robots.txt.
  integrations: [sitemap({ filter: (page) => !page.includes('/admin') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
