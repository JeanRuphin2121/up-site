/**
 * Source unique de vérité pour tout le contenu structurel du site.
 * Si un numéro, un e-mail ou une accroche change, il se change ICI et nulle part ailleurs.
 *
 * Les valeurs proviennent des kakémonos et affiches officiels fournis par le client,
 * complétés par ses messages du 13/11/2026 (troisième numéro, e-mail confirmé).
 */

export const site = {
  nom: 'Univers des Possibilités',
  sigle: 'UP',
  baseline: 'Votre avenir, notre accompagnement',
  signature: 'Believe in light',
  promesse: 'Suivi · Accompagnement · Satisfaction',
  description:
    "Univers des Possibilités accompagne les personnes et les organisations en Côte d'Ivoire : formation, insertion professionnelle, actions sociales et intermédiation commerciale.",
  /**
   * Adresse publique actuelle du site. À remplacer, ainsi que `site` dans astro.config.mjs,
   * le jour où universdespossibilites.com sera réellement réservé et branché.
   */
  url: 'https://up-site.gptteamdev.workers.dev',
};

export type Telephone = { affiche: string; brut: string; libelle: string };

/** Tous les numéros, dans l'ordre d'affichage (page contact, pied de page). */
const telephones: Telephone[] = [
  { affiche: '+225 07 78 34 70 54', brut: '+2250778347054', libelle: 'Ligne principale et WhatsApp' },
  { affiche: '+225 01 01 86 24 85', brut: '+2250101862485', libelle: 'Second numéro' },
  { affiche: '+225 05 64 79 74 64', brut: '+2250564797464', libelle: 'Troisième numéro' },
];

export const contact = {
  telephones,
  /** Numéro principal — celui des boutons d'appel, présent sur tous les supports. */
  telPrincipal: telephones[0].affiche,
  telPrincipalBrut: telephones[0].brut,
  /** Numéro utilisé par le bouton WhatsApp flottant (format international sans signes). */
  whatsapp: '2250778347054',
  email: 'universdespossibilites7@gmail.com',
  ville: "Abidjan, Côte d'Ivoire",

  reseaux: {
    facebook: '',
    linkedin: '',
    instagram: '',
  },
};

/** Clé Web3Forms pour le formulaire de contact. Voir README, section « Formulaire ». */
export const web3formsKey = 'b3e74d70-87d9-42f1-915d-3584f171bc0c';

export type Pole = {
  id: string;
  titre: string;
  accroche: string;
  intro: string;
  prestations: string[];
  icone: 'education' | 'insertion' | 'social' | 'commerce';
};

/**
 * Les quatre pôles du kakémono. Les accroches sont reprises mot pour mot
 * du support imprimé, les intros et prestations sont rédigées à partir de celles-ci.
 */
export const poles: Pole[] = [
  {
    id: 'education-formation',
    titre: 'Éducation et formation',
    accroche: "Former, enseigner, transmettre les clés du savoir et de l'autonomie.",
    intro:
      "Nous accompagnons élèves, étudiants et adultes qui veulent progresser, reprendre des études ou acquérir une compétence nouvelle. L'objectif n'est jamais le diplôme seul : c'est l'autonomie durable de la personne formée.",
    prestations: [
      'Cours de soutien et accompagnement scolaire',
      'Formations pratiques pour adultes en reconversion',
      'Ateliers de méthodologie et de préparation aux examens',
      'Orientation et construction de parcours',
    ],
    icone: 'education',
  },
  {
    id: 'insertion-professionnelle',
    titre: 'Insertion professionnelle',
    accroche: 'Le travail est une bénédiction, et chaque main trouve sa place dans le plan divin.',
    intro:
      "Trouver un emploi ne se résume pas à envoyer des candidatures. Nous travaillons le projet, les outils et la posture, puis nous accompagnons jusqu'à la prise de poste.",
    prestations: [
      'Rédaction de CV et de lettres de motivation',
      "Préparation aux entretiens d'embauche",
      'Mise en relation avec des employeurs partenaires',
      'Suivi personnalisé après la prise de poste',
    ],
    icone: 'insertion',
  },
  {
    id: 'actions-sociales',
    titre: 'Actions sociales et sensibilisation',
    accroche: "Aimer son prochain, c'est tendre la main sans attendre en retour.",
    intro:
      "Nous menons des actions de terrain auprès des populations vulnérables et des campagnes de sensibilisation sur les sujets qui touchent directement le quotidien des familles.",
    prestations: [
      'Distributions solidaires et aide aux familles',
      'Campagnes de sensibilisation communautaire',
      'Accompagnement des personnes en situation de précarité',
      'Mobilisation de bénévoles et de partenaires locaux',
    ],
    icone: 'social',
  },
  {
    id: 'intermediation-commerciale',
    titre: 'Intermédiation commerciale',
    accroche: "Servir avec intégrité, c'est commercer avec le cœur et non seulement avec les gains.",
    intro:
      "Nous mettons en relation acheteurs et fournisseurs, et nous sécurisons les échanges de bout en bout. La confiance prime sur le volume : nous ne recommandons que ce que nous avons vérifié.",
    prestations: [
      'Mise en relation acheteurs et fournisseurs',
      "Recherche et vérification de fournisseurs",
      'Accompagnement des démarches commerciales',
      'Suivi des commandes et des livraisons',
    ],
    icone: 'commerce',
  },
];

export type ServiceMonture = {
  titre: string;
  accroche: string;
  details: string[];
  icone: 'entretien' | 'monture' | 'reseau' | 'recyclage';
};

/** Les trois services du kakémono UP Monture, plus la réparation présentée sur l'affiche « métiers verts et bleus ». */
export const servicesMonture: ServiceMonture[] = [
  {
    titre: 'Nettoyage et entretien à domicile',
    accroche: 'Nous venons à vous, chez vous ou sur votre lieu de travail.',
    details: [
      'Service à domicile, pour les particuliers comme pour les entreprises',
      'Clarté visuelle immédiate après le passage',
      'Nettoyage en profondeur de la monture, pas seulement des verres',
    ],
    icone: 'entretien',
  },
  {
    titre: 'Montures tendance',
    accroche: 'Une belle monture pour révéler la clarté du regard.',
    details: [
      'Modèles pour hommes, femmes et enfants',
      'Conseil personnalisé selon la forme du visage',
      'Essayage possible lors du passage à domicile',
    ],
    icone: 'monture',
  },
  {
    titre: 'Mise en relation avec des professionnels agréés',
    accroche: "Pour tout ce qui relève de la vue, nous vous orientons vers les bonnes personnes.",
    details: [
      'Opticiens agréés pour les verres correcteurs',
      'Ophtalmologistes pour les consultations et bilans',
      'Prise de contact facilitée et suivi du rendez-vous',
    ],
    icone: 'reseau',
  },
  {
    titre: 'Réparation et recyclage',
    accroche: 'Donnez une seconde vie à vos lunettes.',
    details: [
      'Réparation de vos lunettes',
      'Recyclage des montures usagées',
      "Un service d'économie circulaire innovant, porté par Univers des Possibilités",
    ],
    icone: 'recyclage',
  },
];

/**
 * Mention obligatoire, reprise telle quelle du kakémono.
 * NE PAS MODIFIER sans validation : elle délimite l'activité autorisée.
 */
export const mentionMonture =
  "UP Monture ne propose ni consultation ni vente de verres correcteurs. Nous vous mettons en relation avec des professionnels agréés (opticiens, ophtalmologistes).";

export type Programme = {
  titre: string;
  description: string;
};

/**
 * Affiche « Formation d'excellence pour établissements et entreprises ».
 * Répond au pôle « changement de mentalité » évoqué par le client :
 * il est traité comme une offre de formation, pas comme un cinquième pôle.
 */
export const formationsOrganisations = {
  titre: "Formation d'excellence pour établissements et entreprises",
  accroche: 'Transformer les mentalités, élever les compétences.',
  modules: [
    {
      titre: 'Management éducatif de pointe',
      description: "Former les leaders de demain : chefs d'établissement, directeurs des études.",
    },
    {
      titre: 'Pédagogie et encadrement de qualité',
      description: 'Outils et stratégies pour enseignants et encadreurs, au service des élèves.',
    },
    {
      titre: 'Leadership et transformation organisationnelle',
      description:
        "Renforcer la culture d'entreprise, la performance et l'agilité des équipes dirigeantes.",
    },
    {
      titre: 'Réflexion profonde et débats sociétaux',
      description:
        "Aborder les questions complexes et les tabous qui freinent la société, pour une éducation de qualité.",
    },
  ] satisfies Programme[],
};

/** Affiche « Votre avenir se construit dans les métiers verts et bleus ». */
export const metiersVertsBleus = {
  titre: 'Les métiers verts et bleus',
  accroche: "Votre avenir se construit dans les métiers d'avenir.",
  programmes: [
    {
      titre: 'Formation économie verte',
      description:
        'Énergies renouvelables, éco-construction, gestion durable des ressources : se préparer aux métiers du futur.',
    },
    {
      titre: 'Emplois aquatiques durables',
      description:
        "Économie bleue : pêche durable, aquaculture et valorisation des ressources de l'eau.",
    },
    {
      titre: 'Coaching carrière jeunesse',
      description:
        'Orientation personnalisée, insertion professionnelle et mentorat pour les jeunes.',
    },
  ] satisfies Programme[],
};

export const navigation = [
  { href: '/', label: 'Accueil' },
  { href: '/expertises/', label: 'Expertises' },
  { href: '/up-monture/', label: 'UP Monture' },
  { href: '/blog/', label: 'Actualités' },
  { href: '/contact/', label: 'Contact' },
];
