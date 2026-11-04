import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import path from 'path'

const config: any = withMermaid(
  defineConfig({
    title: 'getinside Handbook',
    description: 'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.',
    base: '/handbook/',
    srcDir: 'docs',

    locales: {
      root: {
        label: 'Français',
        lang: 'fr-FR',
      },
      en: {
        label: 'English',
        lang: 'en-US',
        link: '/en/',
        themeConfig: {
          nav: [
            { text: '🎯 Recruit', link: '/en/recruit/' },
            { text: '💌 Retain', link: '/en/retain/' },
            { text: '📦 Monetize', link: '/en/monetize/' },
            { text: '❓ FAQ', link: '/en/faq/' },
            { text: 'Access SaaS', link: 'https://app.getinside.media/', target: '_blank' },
          ],
        },
      },
    },

    vite: {
      publicDir: path.resolve(__dirname, '../assets'),
    },

    vue: {
      template: {
        transformAssetUrls: {
          video: [],
          source: [],
          use: [],
        },
      },
    },

    head: [
      // Fonts
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', rel: 'stylesheet' }],

      // SEO & Robots
      ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
      ['meta', { name: 'googlebot', content: 'index, follow' }],
      ['meta', { name: 'bingbot', content: 'index, follow' }],
      ['meta', { name: 'google-site-verification', content: 'rYXnBrdfxUincgWiLZ2bJS8FYbU_vo3sYDa3eXMnM4Q' }],
      ['meta', { name: 'algolia-site-verification', content: '8EFEF07F817F26A7' }],

      // Canonical URL (surchargé per page)
      ['link', { rel: 'canonical', href: 'https://getinside-ops.github.io/handbook/' }],

      // Open Graph
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'getinside Handbook' }],
      ['meta', { property: 'og:title', content: 'getinside Handbook - Guides & Specs' }],
      ['meta', { property: 'og:description', content: 'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.' }],
      ['meta', { property: 'og:locale', content: 'fr_FR' }],
      ['meta', { property: 'og:image', content: 'https://getinside-ops.github.io/handbook/images/og-image.png' }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],

      // Microsoft Clarity
      [
        'script',
        { type: 'text/javascript' },
        `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "vrgbgu1sgz");`
      ],

      // Twitter Card
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:site', content: '@getinsideMedia' }],

      // Mobile
      ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],

      // Author & Verification
      ['meta', { name: 'author', content: 'getinside' }],
      ['meta', { name: 'publisher', content: 'getinside' }],

      // LLM-specific
      ['meta', { name: 'ChatGPT-content', content: 'getinside documentation - parcel and direct mail marketing: guides to recruit, retain and monetize with parcel inserts and direct mail' }],
    ],

    themeConfig: {
      logo: { src: '/images/logo-getinside.svg', alt: 'getinside' },
      siteTitle: false,

      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
                modal: {
                  noResultsText: 'Aucun résultat pour',
                  resetButtonTitle: 'Réinitialiser',
                  footer: {
                    selectText: 'pour sélectionner',
                    navigateText: 'pour naviguer',
                    closeText: 'pour fermer',
                  },
                },
              },
            },
            en: {
              translations: {
                button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
                modal: {
                  noResultsText: 'No results for',
                  resetButtonTitle: 'Reset',
                  footer: {
                    selectText: 'to select',
                    navigateText: 'to navigate',
                    closeText: 'to close',
                  },
                },
              },
            },
          },
        },
      },

      nav: [
        { text: '🎯 Recruter', link: '/recruit/' },
        { text: '💌 Fidéliser', link: '/retain/' },
        { text: '📦 Monétiser', link: '/monetize/' },
        { text: '❓ FAQ', link: '/faq/' },
        { text: 'Accéder au SaaS', link: 'https://app.getinside.media/', target: '_blank' },
      ], sidebar: {
        '/': [
          {
            text: 'Découvrir getinside',
            items: [
              { text: 'Introduction', link: '/start-here/' },
              { text: 'Pourquoi ça marche ?', link: '/start-here/why-it-works' },
            ],
          },
          {
            text: 'Recruter',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/recruit/' },
              { text: 'Démarrage Rapide', link: '/recruit/onboarding-quick-start' },
              {
                text: 'Insertion colis',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/recruit/sponsored-mail/' },
                  {
                    text: 'Guide Design',
                    collapsed: true,
                    items: [
                      { text: 'Introduction', link: '/recruit/sponsored-mail/design-guide/' },
                      { text: 'Spécifications techniques', link: '/recruit/sponsored-mail/design-guide/print-specs' },
                      { text: 'Mentions légales', link: '/recruit/sponsored-mail/design-guide/legal' },
                    ],
                  },
                ],
              },
              { text: 'Échantillonnage', link: '/recruit/sampling/' },
              {
                text: 'Autres formats',
                collapsed: true,
                items: [
                  {
                    text: 'Emailing Dédié',
                    collapsed: true,
                    items: [
                      { text: 'Présentation', link: '/recruit/dedicated-email/' },
                      { text: 'Brief', link: '/recruit/dedicated-email/1-brief' },
                      { text: 'Création', link: '/recruit/dedicated-email/2-creation' },
                      { text: 'Validation & Diffusion', link: '/recruit/dedicated-email/3-validation-diffusion' },
                    ],
                  },
                  {
                    text: 'Display Email',
                    collapsed: true,
                    items: [
                      { text: 'Présentation', link: '/recruit/display-email/' },
                      { text: 'Spécifications', link: '/recruit/display-email/specs' },
                      { text: 'Workflow', link: '/recruit/display-email/workflow' },
                    ],
                  },
                  { text: 'Social Ads', link: '/recruit/sponsored-social/' },
                  { text: 'Jeu Concours', link: '/recruit/co-branded-contest/' },
                ],
              },
              { text: 'Service Impression & RSE', link: '/recruit/printing-services' },
            ],
          },
          {
            text: 'Fidéliser',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/retain/' },
              { text: 'Courrier adressé', link: '/retain/direct-mail/' },
            ],
          },
          {
            text: 'Monétiser',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/monetize/' },
              { text: 'Démarrage Rapide', link: '/monetize/onboarding-quick-start' },
              { text: 'Guide de Démarrage Complet', link: '/monetize/onboarding-process' },
              {
                text: 'Insertion colis',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/monetize/sponsored-mail/' },
                  { text: 'Logistique', link: '/monetize/sponsored-mail/logistics' },
                  { text: 'Reporting', link: '/monetize/sponsored-mail/reporting' },
                ],
              },
              {
                text: 'Autres formats',
                collapsed: true,
                items: [
                  {
                    text: 'Emailing Dédié',
                    collapsed: true,
                    items: [
                      { text: 'Présentation', link: '/monetize/dedicated-email/' },
                      { text: 'Design', link: '/monetize/dedicated-email/1-design' },
                      { text: 'Tracking & Envoi', link: '/monetize/dedicated-email/2-tracking-sending' },
                    ],
                  },
                  {
                    text: 'Display Email',
                    collapsed: true,
                    items: [
                      { text: 'Présentation', link: '/monetize/display-email/' },
                      { text: 'Intégration', link: '/monetize/display-email/integration' },
                    ],
                  },
                  { text: 'Social Ads', link: '/monetize/sponsored-social/' },
                  { text: 'Jeu Concours', link: '/monetize/co-branded-contest/' },
                ],
              },
              {
                text: 'Gestion & Revenus',
                collapsed: true,
                items: [
                  { text: 'Score Distributeur', link: '/monetize/score-distributor' },
                  { text: 'Audiences & Données', link: '/monetize/audience-setup' },
                  { text: 'Paiements & Wallet', link: '/monetize/payouts' },
                  { text: "Programme d'Affiliation", link: '/monetize/affiliation' },
                ],
              },
            ],
          },
          {
            text: 'FAQ',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/faq/' },
              { text: 'Résolution de problèmes', link: '/faq/troubleshooting-distributors' },
              { text: 'Audiences & Compte', link: '/faq/account-audiences' },
              { text: 'Facturation', link: '/faq/billing' },
              { text: 'Gestion de Campagnes', link: '/faq/campaign-management' },
              { text: 'Logistique & Tech', link: '/faq/logistics-tech' },
            ],
          },
          {
            text: 'Ressources',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/resources/' },
              { text: 'Études de Cas', link: '/resources/case-studies' },
              { text: 'Bibliothèque', link: '/resources/library' },
              { text: 'Studio Créatif', link: '/resources/studio' },
            ],
          },
          { text: 'Glossaire', link: '/glossary' },
        ],
        '/en/': [
          {
            text: 'Discover getinside',
            items: [
              { text: 'Introduction', link: '/en/start-here/' },
              { text: 'Why It Works', link: '/en/start-here/why-it-works' },
            ],
          },
          {
            text: 'Recruit',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/recruit/' },
              { text: 'Quick Start', link: '/en/recruit/onboarding-quick-start' },
              {
                text: 'Parcel Inserts',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/en/recruit/sponsored-mail/' },
                  {
                    text: 'Design Guide',
                    collapsed: true,
                    items: [
                      { text: 'Introduction', link: '/en/recruit/sponsored-mail/design-guide/' },
                      { text: 'Print Specs', link: '/en/recruit/sponsored-mail/design-guide/print-specs' },
                      { text: 'Legal', link: '/en/recruit/sponsored-mail/design-guide/legal' },
                    ],
                  },
                ],
              },
              { text: 'Sampling', link: '/en/recruit/sampling/' },
              {
                text: 'Other Formats',
                collapsed: true,
                items: [
                  {
                    text: 'Dedicated Email',
                    collapsed: true,
                    items: [
                      { text: 'Overview', link: '/en/recruit/dedicated-email/' },
                      { text: 'Brief', link: '/en/recruit/dedicated-email/1-brief' },
                      { text: 'Creation', link: '/en/recruit/dedicated-email/2-creation' },
                      { text: 'Validation & Delivery', link: '/en/recruit/dedicated-email/3-validation-diffusion' },
                    ],
                  },
                  {
                    text: 'Display Email',
                    collapsed: true,
                    items: [
                      { text: 'Overview', link: '/en/recruit/display-email/' },
                      { text: 'Specs', link: '/en/recruit/display-email/specs' },
                      { text: 'Workflow', link: '/en/recruit/display-email/workflow' },
                    ],
                  },
                  { text: 'Social Ads', link: '/en/recruit/sponsored-social/' },
                  { text: 'Co-branded Contest', link: '/en/recruit/co-branded-contest/' },
                ],
              },
              { text: 'Printing & CSR Services', link: '/en/recruit/printing-services' },
            ],
          },
          {
            text: 'Retain',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/retain/' },
              { text: 'Direct Mail', link: '/en/retain/direct-mail/' },
            ],
          },
          {
            text: 'Monetize',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/monetize/' },
              { text: 'Quick Start', link: '/en/monetize/onboarding-quick-start' },
              { text: 'Full Onboarding Guide', link: '/en/monetize/onboarding-process' },
              {
                text: 'Parcel Inserts',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/en/monetize/sponsored-mail/' },
                  { text: 'Logistics', link: '/en/monetize/sponsored-mail/logistics' },
                  { text: 'Reporting', link: '/en/monetize/sponsored-mail/reporting' },
                ],
              },
              {
                text: 'Other Formats',
                collapsed: true,
                items: [
                  {
                    text: 'Dedicated Email',
                    collapsed: true,
                    items: [
                      { text: 'Overview', link: '/en/monetize/dedicated-email/' },
                      { text: 'Design', link: '/en/monetize/dedicated-email/1-design' },
                      { text: 'Tracking & Sending', link: '/en/monetize/dedicated-email/2-tracking-sending' },
                    ],
                  },
                  {
                    text: 'Display Email',
                    collapsed: true,
                    items: [
                      { text: 'Overview', link: '/en/monetize/display-email/' },
                      { text: 'Integration', link: '/en/monetize/display-email/integration' },
                    ],
                  },
                  { text: 'Social Ads', link: '/en/monetize/sponsored-social/' },
                  { text: 'Co-branded Contest', link: '/en/monetize/co-branded-contest/' },
                ],
              },
              {
                text: 'Management & Revenue',
                collapsed: true,
                items: [
                  { text: 'Distributor Score', link: '/en/monetize/score-distributor' },
                  { text: 'Audiences & Data', link: '/en/monetize/audience-setup' },
                  { text: 'Payments & Wallet', link: '/en/monetize/payouts' },
                  { text: 'Affiliation Program', link: '/en/monetize/affiliation' },
                ],
              },
            ],
          },
          {
            text: 'FAQ',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/faq/' },
              { text: 'Troubleshooting', link: '/en/faq/troubleshooting-distributors' },
              { text: 'Audiences & Account', link: '/en/faq/account-audiences' },
              { text: 'Billing', link: '/en/faq/billing' },
              { text: 'Campaign Management', link: '/en/faq/campaign-management' },
              { text: 'Logistics & Tech', link: '/en/faq/logistics-tech' },
            ],
          },
          {
            text: 'Resources',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/resources/' },
              { text: 'Case Studies', link: '/en/resources/case-studies' },
              { text: 'Library', link: '/en/resources/library' },
              { text: 'Creative Studio', link: '/en/resources/studio' },
            ],
          },
          { text: 'Glossary', link: '/en/glossary' },
        ],
      },

      footer: {
        message:
          'Contact Opérations : <a href="mailto:benoit@getinside.fr">benoit@getinside.fr</a> · Studio : <a href="mailto:studio@getinside.fr">studio@getinside.fr</a>',
        copyright: '© 2026 getinside. Tous droits réservés.',
      },

      editLink: undefined,
    },

    mermaid: {
      theme: 'neutral',
    },

    // transformHead pour injecter les balises SEO en SSR
    async transformHead({ pageData }) {
      const { frontmatter, title, relativePath } = pageData
      const pageTitle = frontmatter.title || title || 'getinside Handbook'
      const pageDescription = frontmatter.description || 'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.'
      const pageImage = frontmatter.image || 'https://getinside-ops.github.io/handbook/images/og-image.png'
      const relUrl = relativePath.replace(/\.md$/, '').replace(/\/index$/, '/').replace(/^index$/, '')
      const pageUrl = `https://getinside-ops.github.io/handbook/${relUrl}`

      return [
        ['meta', { property: 'og:title', content: pageTitle }],
        ['meta', { property: 'og:description', content: pageDescription }],
        ['meta', { property: 'og:image', content: pageImage }],
        ['meta', { property: 'og:url', content: pageUrl }],
        ['link', { rel: 'canonical', href: pageUrl }],
        ['meta', { name: 'description', content: pageDescription }],
        // AI & LLM specific
        ['meta', { name: 'citation_title', content: pageTitle }],
        ['meta', { name: 'citation_author', content: 'getinside' }],
        ['meta', { name: 'dc.title', content: pageTitle }],
        ['meta', { name: 'dc.description', content: pageDescription }],
      ]
    },
  })
)

if (!config.locales) config.locales = {}
if (!config.locales.en) config.locales.en = { label: 'English', lang: 'en-US', link: '/en/' }
config.locales.en.themeConfig = {
  nav: [
    { text: '🎯 Recruit', link: '/en/recruit/' },
    { text: '💌 Retain', link: '/en/retain/' },
    { text: '📦 Monetize', link: '/en/monetize/' },
    { text: '❓ FAQ', link: '/en/faq/' },
    { text: 'Access SaaS', link: 'https://app.getinside.media/', target: '_blank' },
  ],
}

export default config
