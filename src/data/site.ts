/**
 * Source unique de vérité pour tout le contenu structurel du site.
 * Si un numéro, un e-mail ou une accroche change, il se change ICI et nulle part ailleurs.
 *
 * Les valeurs proviennent des deux kakémonos officiels fournis par le client.
 */

export const site = {
  nom: 'Univers des Possibilités',
  sigle: 'UP',
  baseline: 'Votre avenir, notre accompagnement',
  signature: 'Believe in light',
  promesse: 'Suivi · Accompagnement · Satisfaction',
  description:
    "Univers des Possibilités accompagne les personnes et les organisations en Côte d'Ivoire : formation, insertion professionnelle, actions sociales et intermédiation commerciale.",
  url: 'https://www.universdespossibilites.com',
};

export const contact = {
  /** Numéro principal — celui affiché sur les deux kakémonos. */
  telPrincipal: '+225 07 78 34 70 54',
  telPrincipalBrut: '+2250778347054',
  /** Second numéro, affiché sur le kakémono des quatre pôles. */
  telSecondaire: '+225 01 01 86 24 85',
  telSecondaireBrut: '+2250101862485',
  /** Numéro utilisé par le bouton WhatsApp flottant (format international sans signes). */
  whatsapp: '2250778347054',
  email: 'universdespossibilites@gmail.com',
  /** ⚠️ À compléter si le client possède des comptes. Laisser vide masque le lien. */
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
  icone: 'entretien' | 'monture' | 'reseau';
};

/** Les trois services du kakémono UP Monture. */
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
];

/**
 * Mention obligatoire, reprise telle quelle du kakémono.
 * NE PAS MODIFIER sans validation : elle délimite l'activité autorisée.
 */
export const mentionMonture =
  "UP Monture ne propose ni consultation ni vente de verres correcteurs. Nous vous mettons en relation avec des professionnels agréés (opticiens, ophtalmologistes).";

export const navigation = [
  { href: '/', label: 'Accueil' },
  { href: '/expertises/', label: 'Expertises' },
  { href: '/up-monture/', label: 'UP Monture' },
  { href: '/blog/', label: 'Actualités' },
  { href: '/contact/', label: 'Contact' },
];
