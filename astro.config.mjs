// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ⚠️ À REMPLACER par le domaine définitif une fois la mise en ligne faite.
  // Sert à générer les URL absolues (partages sociaux, sitemap).
  site: 'https://www.universdespossibilites.com',
  // Génère sitemap-index.xml, déclaré dans public/robots.txt.
  integrations: [sitemap({ filter: (page) => !page.includes('/admin') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
