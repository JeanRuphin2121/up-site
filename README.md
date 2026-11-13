# Site Univers des Possibilités

Site vitrine statique. Astro 5 + Tailwind 4, contenu en Markdown, hébergement Cloudflare Workers
(fichiers statiques, voir `wrangler.jsonc`).
Aucune base de données, aucun serveur à administrer : le site est un dossier de fichiers HTML
recalculé à chaque modification du dépôt.

---

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert dist/ comme en production
```

Node 20 ou supérieur.

---

## Où se trouve quoi

| Ce que vous voulez changer | Fichier |
| --- | --- |
| Numéros, e-mail, ville, réseaux sociaux | `src/data/site.ts` (`contact.telephones` pour les numéros) |
| Texte des quatre pôles | `src/data/site.ts`, tableau `poles` |
| Services UP Monture | `src/data/site.ts`, tableau `servicesMonture` |
| Formations établissements / entreprises, métiers verts et bleus | `src/data/site.ts`, `formationsOrganisations` et `metiersVertsBleus` |
| Couleurs, polices, boutons | `src/styles/global.css` |
| Menu de navigation | `src/data/site.ts`, tableau `navigation` |
| Articles d'actualité | `src/content/articles/*.md` |
| Mentions légales | `src/pages/mentions-legales.astro` |
| Image de partage WhatsApp/Facebook | `scripts/gen_partage.py` puis `python3 scripts/gen_partage.py` |

**Règle importante :** un numéro de téléphone ou une adresse ne se modifie qu'à un seul
endroit, `src/data/site.ts`. Toutes les pages y puisent. Ne jamais recopier une valeur en dur
dans une page.

---

## Ce qui reste à renseigner avant la mise en ligne

Chercher `À COMPLÉTER` dans le projet.

1. **Domaine** — `universdespossibilites.com` est imprimé sur les affiches mais **n'est pas
   réservé** (vérifié le 13/11/2026). Le site tourne sur `up-site.gptteamdev.workers.dev`.
   Une fois le domaine acheté et branché (voir plus bas), remplacer l'adresse dans
   `astro.config.mjs` (`site`) et `src/data/site.ts` (`site.url`). Le sitemap et `robots.txt`
   suivent automatiquement.
2. **`src/layouts/Base.astro`** — le jeton Cloudflare Web Analytics, et retirer les commentaires
   autour de la balise `<script>`.
3. **`public/admin/config.yml`** — `site_domain`, une fois la passerelle Netlify créée.
4. **`src/pages/mentions-legales.astro`** — forme juridique, immatriculation (RCCM), adresse
   exacte du siège, responsable de publication.

La clé Web3Forms du formulaire est déjà en place dans `src/data/site.ts`.

---

## Ajouter un pôle ou un nouveau secteur

Le client prévoit de s'étendre (immobilier, agriculture, transport…). Le site est prévu pour :

1. Ajouter une entrée au tableau `poles` de `src/data/site.ts` (`id`, `titre`, `accroche`,
   `intro`, `prestations`, `icone`).
2. Si aucun pictogramme existant ne convient, en ajouter un dans `src/components/Icone.astro`
   (et son nom dans le type `Pole['icone']`).

L'accueil, la page Expertises, le sommaire, le pied de page et la liste déroulante du formulaire
de contact se mettent à jour seuls.

---

## Formulaire de contact

Le site étant statique, le formulaire passe par un service externe : Web3Forms, gratuit
jusqu'à 250 messages par mois, sans compte à créer côté visiteur.

1. Aller sur web3forms.com, saisir l'adresse e-mail de réception.
2. La clé arrive par e-mail.
3. La coller dans `src/data/site.ts`, variable `web3formsKey`.
4. Tester en envoyant un message depuis la page contact en production.

Les messages arrivent directement dans la boîte e-mail indiquée. Rien n'est stocké sur le site.

---

## Mise en ligne sur Cloudflare

Le site est déployé comme un Worker qui sert le dossier `dist/` (`wrangler.jsonc`).

1. Pousser le dépôt sur GitHub.
2. Sur dash.cloudflare.com : **Workers & Pages** → **Create** → **Import a repository**.
3. Build command : `npm run build`. Deploy command : `npx wrangler deploy`.
4. Chaque `git push` sur `main` republie le site automatiquement.

### Domaine personnalisé

1. Réserver `universdespossibilites.com` **au nom du client** (chez Cloudflare Registrar ou un
   autre registrar).
2. Dans le Worker : **Settings** → **Domains & Routes** → ajouter `universdespossibilites.com`
   et `www.universdespossibilites.com`. Le certificat HTTPS est émis automatiquement.
3. Mettre à jour `site` / `site.url` comme indiqué plus haut.

### Mesure d'audience

**Web Analytics** dans le tableau de bord Cloudflare, ajouter le site, copier le jeton dans
`src/layouts/Base.astro`. Cet outil ne dépose pas de cookie : aucun bandeau de consentement
n'est nécessaire, et les mentions légales le disent déjà.

---

## Activer l'espace d'administration (`/admin`)

L'interface permet au client d'écrire ses actualités sans toucher au code. Elle écrit
directement dans le dépôt GitHub, et Cloudflare republie dans la minute.

Decap CMS a besoin d'une passerelle d'authentification GitHub. La plus simple reste Netlify,
utilisé uniquement pour cette authentification — le site, lui, reste sur Cloudflare.

1. Créer un compte Netlify et un site vide.
2. **Site configuration** → **Access & security** → **OAuth** → **Install provider** → GitHub.
3. Créer en parallèle une OAuth App sur GitHub (Settings → Developer settings → OAuth Apps),
   avec comme URL de rappel : `https://api.netlify.com/auth/done`.
4. Reporter Client ID et Client Secret dans Netlify.
5. Dans `public/admin/config.yml`, renseigner `repo` et remplacer `site_domain` par le domaine
   Netlify obtenu.

Le client se connecte ensuite sur `/admin/` avec son compte GitHub. Il faut donc lui créer un
compte GitHub et l'ajouter comme collaborateur du dépôt.

> Si cette étape paraît lourde pour l'usage réel, elle peut être repoussée : le blog fonctionne
> parfaitement avec des fichiers Markdown ajoutés à la main. `/admin` n'a de sens que si le
> client publie régulièrement et seul.

---

## Ce qui n'est volontairement pas dans le site

- **Aucune galerie photo, aucun témoignage.** Les visuels des supports imprimés sont des images
  générées, non des photos réelles d'activité. Publier de fausses références serait un risque de
  crédibilité pour l'entreprise. Ces sections s'ajouteront quand de vraies photos et de vrais
  témoignages signés seront fournis.
- **Aucune mention de tarif.** Rien de communiqué à ce stade.
- **Aucune statistique de type « X personnes accompagnées ».** Aucun chiffre vérifiable fourni.

---

## Accessibilité et performance

Le site est vérifié sur les points suivants : navigation au clavier avec focus visible, lien
d'évitement vers le contenu, contrastes conformes AA, images et icônes décrites, respect de
`prefers-reduced-motion`, mise en page testée jusqu'à 360 px de large.

Aucun script tiers hors mesure d'audience. Les polices sont servies depuis le site lui-même,
sans appel à Google Fonts, ce qui évite un transfert de données vers un tiers.

---

Site conçu par Jean-Ruphin AKA.
