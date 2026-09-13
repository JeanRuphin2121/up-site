import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Les articles sont de simples fichiers Markdown dans src/content/articles/.
 * Le client les crée depuis l'interface d'administration (/admin), qui écrit
 * directement dans ce dossier via Git.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    auteur: z.string().default('Univers des Possibilités'),
    /** Passer à true pour retirer l'article du site sans le supprimer. */
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { articles };
