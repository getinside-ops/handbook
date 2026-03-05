import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import path from 'path'

export default withMermaid(
  defineConfig({
    title: 'getinside Handbook',
    description: 'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes et monétiser vos audiences.',
    lang: 'fr-FR',
    base: '/handbook/',
    srcDir: '.',

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

      // Canonical URL (sera surchargé per page)
      ['link', { rel: 'canonical', href: 'https://getinside-ops.github.io/handbook/' }],

      // Open Graph
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'getinside Handbook' }],
      ['meta', { property: 'og:locale', content: 'fr_FR' }],
      ['meta', { property: 'og:image', content: 'https://getinside-ops.github.io/handbook/images/og-image.png' }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],

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
      ['meta', { name: 'ChatGPT-content', content: 'Retail media platform documentation - comprehensive guides for advertisers and e-commerce retailers' }],
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
          },
        },
      },

      nav: [
        { text: '🛍️ Annonceurs', link: '/docs/fr/advertisers/' },
        { text: '📦 Retailers', link: '/docs/fr/publishers/' },
        { text: '❓ FAQ', link: '/docs/fr/faq/' },
        {
          text: 'Accéder au SaaS',
          link: 'https://app.getinside.media/',
          target: '_blank',
        },
      ],

      sidebar: [
        {
          text: 'Découvrir getinside',
          items: [
            { text: 'Introduction', link: '/docs/fr/start-here/' },
            { text: 'Pourquoi ça marche ?', link: '/docs/fr/start-here/why-it-works' },
          ],
        },
        {
          text: '🛍️ Espace Annonceurs',
          items: [
            { text: 'Vue d\'ensemble', link: '/docs/fr/advertisers/' },
            { text: '🚀 Démarrage Rapide', link: '/docs/fr/advertisers/onboarding-quick-start' },
            {
              text: '📦 Insertion Colis',
              collapsed: true,
              items: [
                { text: 'Présentation', link: '/docs/fr/advertisers/sponsored-mail/' },
                {
                  text: 'Guide Design',
                  collapsed: true,
                  items: [
                    { text: 'Introduction', link: '/docs/fr/advertisers/sponsored-mail/design-guide/' },
                    { text: 'Spécifications techniques', link: '/docs/fr/advertisers/sponsored-mail/design-guide/print-specs' },
                    { text: 'Mentions légales', link: '/docs/fr/advertisers/sponsored-mail/design-guide/legal' },
                  ],
                },
              ],
            },
            {
              text: '📧 Emailing Dédié',
              collapsed: true,
              items: [
                { text: 'Présentation', link: '/docs/fr/advertisers/dedicated-email/' },
                { text: 'Brief Annonceur', link: '/docs/fr/advertisers/dedicated-email/1-brief-annonceur' },
                { text: 'Création Distributeur', link: '/docs/fr/advertisers/dedicated-email/2-creation-distributeur' },
                { text: 'Validation & Diffusion', link: '/docs/fr/advertisers/dedicated-email/3-validation-diffusion' },
              ],
            },
            {
              text: '📩 Display Email',
              collapsed: true,
              items: [
                { text: 'Présentation', link: '/docs/fr/advertisers/display-email/' },
                { text: 'Spécifications', link: '/docs/fr/advertisers/display-email/specs' },
                { text: 'Workflow', link: '/docs/fr/advertisers/display-email/workflow' },
              ],
            },
            {
              text: '📱 Social Ads',
              link: '/docs/fr/advertisers/sponsored-social/',
            },
            { text: '🎁 Jeu Concours Co-brandé', link: '/docs/fr/advertisers/co-branded-contest/' },
            { text: 'Service Impression & RSE', link: '/docs/fr/advertisers/printing-services' },
            { text: 'Tarifs Annonceurs', link: '/docs/fr/advertisers/pricing' },
          ],
        },
        {
          text: '📦 Espace Retailers',
          items: [
            { text: 'Vue d\'ensemble', link: '/docs/fr/publishers/' },
            { text: '🚀 Démarrage Rapide', link: '/docs/fr/publishers/onboarding-quick-start' },
            { text: 'Guide de Démarrage Complet', link: '/docs/fr/publishers/onboarding-process' },
            {
              text: '📦 Insertion Colis',
              collapsed: true,
              items: [
                { text: 'Présentation', link: '/docs/fr/publishers/sponsored-mail/' },
                { text: 'Logistique', link: '/docs/fr/publishers/sponsored-mail/logistics' },
                { text: 'Reporting', link: '/docs/fr/publishers/sponsored-mail/reporting' },
              ],
            },
            {
              text: '📧 Emailing Dédié',
              collapsed: true,
              items: [
                { text: 'Présentation', link: '/docs/fr/publishers/dedicated-email/' },
                { text: 'Design', link: '/docs/fr/publishers/dedicated-email/1-design' },
                { text: 'Tracking & Envoi', link: '/docs/fr/publishers/dedicated-email/2-tracking-sending' },
              ],
            },
            {
              text: '📩 Display Email',
              collapsed: true,
              items: [
                { text: 'Présentation', link: '/docs/fr/publishers/display-email/' },
                { text: 'Intégration', link: '/docs/fr/publishers/display-email/integration' },
              ],
            },
            {
              text: '📱 Social Ads',
              collapsed: true,
              items: [
                { text: 'Présentation', link: '/docs/fr/publishers/sponsored-social/' },
                { text: 'Guide', link: '/docs/fr/publishers/sponsored-social/guide' },
              ],
            },
            {
              text: '🎁 Jeu Concours',
              collapsed: true,
              items: [
                { text: 'Présentation', link: '/docs/fr/publishers/co-branded-contest/' },
                { text: 'Guide de Setup', link: '/docs/fr/publishers/co-branded-contest/setup-guide' },
              ],
            },
            { text: '⭐ Score Distributeur', link: '/docs/fr/publishers/score-distributor' },
            { text: 'Audiences & Données', link: '/docs/fr/publishers/audience-setup' },
            { text: 'Paiements & Wallet', link: '/docs/fr/publishers/payouts' },
            { text: "Programme d'Affiliation", link: '/docs/fr/publishers/affiliation' },
            { text: 'Offres & Abonnements', link: '/docs/fr/publishers/pricing' },
          ],
        },
        {
          text: 'FAQ',
          items: [
            { text: 'Vue d\'ensemble', link: '/docs/fr/faq/' },
            { text: '🔧 Problèmes Distributeurs', link: '/docs/fr/faq/troubleshooting-distributors' },
            { text: 'Audiences & Compte', link: '/docs/fr/faq/account-audiences' },
            { text: 'Facturation', link: '/docs/fr/faq/billing' },
            { text: 'Gestion de Campagnes', link: '/docs/fr/faq/campaign-management' },
            { text: 'Logistique & Tech', link: '/docs/fr/faq/logistics-tech' },
          ],
        },
        {
          text: 'Ressources',
          items: [
            { text: 'Vue d\'ensemble', link: '/docs/fr/resources/' },
            { text: 'Études de Cas', link: '/docs/fr/resources/case-studies' },
            { text: 'Bibliothèque', link: '/docs/fr/resources/library' },
            { text: '🎨 Charte Graphique', link: '/docs/fr/resources/brand-tone' },
            { text: 'Studio Créatif', link: '/docs/fr/resources/studio' },
          ],
        },
        { text: 'Glossaire', link: '/docs/fr/glossary' },
      ],

      footer: {
        message:
          'Contact Opérations : <a href="mailto:benoit@getinside.fr">benoit@getinside.fr</a> · Studio : <a href="mailto:studio@getinside.fr">studio@getinside.fr</a>',
        copyright: '© 2024 getinside. Tous droits réservés.',
      },

      editLink: undefined,
      lastUpdated: false,
    },

    mermaid: {
      theme: 'neutral',
    },
  })
)
