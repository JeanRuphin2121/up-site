import type { APIRoute } from 'astro';

/**
 * Généré à partir de `site` (astro.config.mjs) : l'adresse du sitemap suit
 * automatiquement le domaine, il n'y a rien à modifier ici.
 */
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *
Allow: /
Disallow: /admin/

Sitemap: ${new URL('sitemap-index.xml', site)}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
