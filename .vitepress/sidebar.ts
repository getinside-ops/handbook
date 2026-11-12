// Source unique des sidebars FR et EN : une sidebar par parcours (clé = préfixe d'URL),
// 2 niveaux maximum (groupe > entrée). Les pages plus profondes (sous-pages de guides
// et de formats) sont liées depuis leur page de présentation. Vérifié par
// `node scripts/check-sidebar.ts`.

type Dot = 'colis' | 'courrier' | 'echantillon'
type Locale = 'fr' | 'en'

interface Node {
  fr: string
  en: string
  link?: string
  items?: Node[]
  collapsed?: boolean
  ico?: string // nom d'icône lucide, devant le libellé
  dot?: Dot // pastille de la couleur du canal, devant le libellé
}

export interface Item {
  text: string
  link?: string
  items?: Item[]
  collapsed?: boolean
}

const link = (fr: string, en: string, to: string): Node => ({ fr, en, link: to })
const overview = (to: string): Node => link("Vue d'ensemble", 'Overview', to)
const intro = (to: string): Node => link('Présentation', 'Overview', to)

const discover: Node[] = [
  {
    fr: 'Découvrir getinside',
    en: 'Discover getinside',
    ico: 'book-open',
    items: [
      link('Introduction', 'Introduction', '/start-here/'),
      link('Pourquoi ça marche ?', 'Why It Works', '/start-here/why-it-works'),
    ],
  },
  { fr: 'Glossaire', en: 'Glossary', link: '/glossary' },
]

const recruit: Node[] = [
  {
    fr: 'Démarrer',
    en: 'Get started',
    ico: 'rocket',
    items: [
      overview('/recruit/'),
      link('Démarrage rapide', 'Quick Start', '/recruit/onboarding-quick-start'),
      link('Comparer les formats', 'Compare Formats', '/recruit/compare-formats'),
      link('Suivi & Mesure', 'Analytics & Tracking', '/recruit/analytics'),
    ],
  },
  {
    fr: 'Insertion colis',
    en: 'Parcel Inserts',
    dot: 'colis',
    items: [
      intro('/recruit/sponsored-mail/'),
      link('Guide de création', 'Design Guide', '/recruit/sponsored-mail/design-guide/'),
    ],
  },
  { fr: 'Échantillonnage', en: 'Sampling', dot: 'echantillon', link: '/recruit/sampling/' },
  {
    fr: 'Autres formats',
    en: 'Other Formats',
    ico: 'layers',
    collapsed: true,
    items: [
      link('Emailing Dédié', 'Dedicated Email', '/recruit/dedicated-email/'),
      link('Display Email', 'Display Email', '/recruit/display-email/'),
      link('Social Ads', 'Social Ads', '/recruit/sponsored-social/'),
      link('Bundles', 'Bundles', '/recruit/bundles'),
    ],
  },
  { fr: 'Service Impression & RSE', en: 'Printing & CSR Services', ico: 'printer', link: '/recruit/printing-services' },
]

const retain: Node[] = [
  { fr: "Vue d'ensemble", en: 'Overview', ico: 'mail-open', link: '/retain/' },
  {
    fr: 'Courrier adressé',
    en: 'Direct Mail',
    dot: 'courrier',
    items: [
      intro('/retain/direct-mail/'),
      link('Préparer votre fichier', 'Prepare your file', '/retain/direct-mail/prepare-file'),
      link('Concevoir votre courrier', 'Design your mailing', '/retain/direct-mail/design-mailing'),
    ],
  },
]

const monetize: Node[] = [
  {
    fr: 'Démarrer',
    en: 'Get started',
    ico: 'rocket',
    items: [
      overview('/monetize/'),
      link('Démarrage rapide', 'Quick Start', '/monetize/onboarding-quick-start'),
      link('Guide de démarrage complet', 'Full Onboarding Guide', '/monetize/onboarding-process'),
    ],
  },
  {
    fr: 'Insertion colis',
    en: 'Parcel Inserts',
    dot: 'colis',
    items: [
      intro('/monetize/sponsored-mail/'),
      link('Logistique', 'Logistics', '/monetize/sponsored-mail/logistics'),
      link('Reporting', 'Reporting', '/monetize/sponsored-mail/reporting'),
    ],
  },
  {
    fr: 'Autres formats',
    en: 'Other Formats',
    ico: 'layers',
    collapsed: true,
    items: [
      link('Emailing Dédié', 'Dedicated Email', '/monetize/dedicated-email/'),
      link('Display Email', 'Display Email', '/monetize/display-email/'),
      link('Social Ads', 'Social Ads', '/monetize/sponsored-social/'),
      link('Bundles', 'Bundles', '/monetize/bundles'),
    ],
  },
  {
    fr: 'Gestion & Revenus',
    en: 'Management & Revenue',
    ico: 'wallet',
    items: [
      link('Audiences & Données', 'Audiences & Data', '/monetize/audience-setup'),
      link('Paiements & Wallet', 'Payments & Wallet', '/monetize/payouts'),
      link("Programme d'affiliation", 'Affiliation Program', '/monetize/affiliation'),
    ],
  },
]

const faq: Node[] = [
  {
    fr: 'FAQ',
    en: 'FAQ',
    ico: 'circle-help',
    items: [
      overview('/faq/'),
      link('Résolution de problèmes : Recruter', 'Troubleshooting: Recruit', '/faq/troubleshooting-recruit'),
      link('Résolution de problèmes : Monétiser', 'Troubleshooting: Monetize', '/faq/troubleshooting-monetize'),
      link('Audiences & Compte', 'Audiences & Account', '/faq/account-audiences'),
      link('Facturation', 'Billing', '/faq/billing'),
      link('Gestion de Campagnes', 'Campaign Management', '/faq/campaign-management'),
      link('Logistique & Tech', 'Logistics & Tech', '/faq/logistics-tech'),
    ],
  },
]

const resources: Node[] = [
  {
    fr: 'Ressources',
    en: 'Resources',
    ico: 'palette',
    items: [
      overview('/resources/'),
      link('Études de Cas', 'Case Studies', '/resources/case-studies'),
      link('Bibliothèque', 'Library', '/resources/library'),
      link('Studio Créatif', 'Creative Studio', '/resources/studio'),
    ],
  },
]

/** Préfixe d'URL (sans langue) -> arbre. Le glossaire partage l'arbre « Découvrir ». */
const SECTIONS: Record<string, Node[]> = {
  '/start-here/': discover,
  '/glossary': discover,
  '/recruit/': recruit,
  '/retain/': retain,
  '/monetize/': monetize,
  '/faq/': faq,
  '/resources/': resources,
}

/** `icon(name)` renvoie le SVG inline d'une icône lucide (cf. config.ts). */
export function buildSidebar(icon: (name: string) => string): Record<string, Item[]> {
  const render = (n: Node, l: Locale): Item => {
    const deco = n.ico ? icon(n.ico) : n.dot ? `<span class="gi-dot gi-dot--${n.dot}" aria-hidden="true"></span>` : ''
    const item: Item = { text: deco + n[l] }
    if (n.link) item.link = (l === 'en' ? '/en' : '') + n.link
    if (n.items) {
      item.items = n.items.map((c) => render(c, l))
      if (n.collapsed) item.collapsed = true
    }
    return item
  }
  const out: Record<string, Item[]> = {}
  for (const l of ['fr', 'en'] as const) {
    for (const [prefix, nodes] of Object.entries(SECTIONS)) {
      out[(l === 'en' ? '/en' : '') + prefix] = nodes.map((n) => render(n, l))
    }
  }
  return out
}
