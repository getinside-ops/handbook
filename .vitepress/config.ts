import { defineConfig } from 'vitepress'
import path from 'path'

const SITE = 'https://getinside-ops.github.io/handbook'

/**
 * Construit le JSON-LD WebPage + BreadcrumbList en SSR (rendu statique).
 * Auparavant injecté côté client uniquement (theme/index.ts) — donc invisible
 * pour les crawlers sans JS. Émis ici à la build pour être indexable.
 */
function buildWebPageSchema(pageData: any) {
  const { frontmatter, title, relativePath } = pageData
  const pageTitle = frontmatter.title || title || 'getinside Handbook'
  const pageDescription = frontmatter.description || 'Guides opérationnels pour retail media'
  const relUrl = relativePath.replace(/\.md$/, '').replace(/\/index$/, '/').replace(/^index$/, '')
  const pageUrl = `${SITE}/${relUrl}`
  const pageImage = frontmatter.image || `${SITE}/images/og-image.png`

  // Fil d'ariane à partir du chemin (le segment feuille utilise le vrai titre)
  const parts = relUrl.replace(/\/$/, '').split('/').filter(Boolean)
  const itemListElement: any[] = [
    { '@type': 'ListItem', position: 1, name: 'Handbook', item: `${SITE}/` },
  ]
  let acc = `${SITE}/`
  parts.forEach((part: string, idx: number) => {
    acc += part + '/'
    const isLeaf = idx === parts.length - 1
    const name = isLeaf
      ? pageTitle
      : part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ')
    itemListElement.push({
      '@type': 'ListItem',
      position: idx + 2,
      name,
      item: acc.replace(/\/$/, isLeaf ? '' : '/'),
    })
  })

  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    image: { '@type': 'ImageObject', url: pageImage, width: 1200, height: 630 },
    isPartOf: {
      '@type': 'WebSite',
      name: 'getinside Handbook',
      url: `${SITE}/`,
      sameAs: ['https://www.getinside.media/'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'getinside',
      alternateName: 'getinside Media',
      logo: { '@type': 'ImageObject', url: `${SITE}/images/logo-getinside.svg` },
      url: 'https://www.getinside.media/',
    },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement },
  }
  if (Array.isArray(frontmatter.keywords) && frontmatter.keywords.length) {
    schema.keywords = frontmatter.keywords.join(', ')
  }
  return schema
}

const config: any = defineConfig({
    title: 'getinside Handbook',
    description: 'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes et monétiser vos audiences.',
    base: '/handbook/',
    srcDir: 'docs',
    cleanUrls: true,

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
            { text: '🛍️ Advertisers', link: '/en/advertisers/' },
            { text: '📦 Retailers', link: '/en/publishers/' },
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
      // Favicon & PWA icons
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/handbook/images/gi-keyvisual.svg' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/handbook/images/icons/favicon-32.png' }],
      ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/handbook/images/icons/favicon-16.png' }],
      ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/handbook/images/icons/apple-touch-icon.png' }],
      ['link', { rel: 'manifest', href: '/handbook/site.webmanifest' }],
      ['meta', { name: 'theme-color', content: '#0aaa8e' }],

      // Fonts
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap', rel: 'stylesheet' }],

      // SEO & Robots
      ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
      ['meta', { name: 'googlebot', content: 'index, follow' }],
      ['meta', { name: 'bingbot', content: 'index, follow' }],
      ['meta', { name: 'google-site-verification', content: 'rYXnBrdfxUincgWiLZ2bJS8FYbU_vo3sYDa3eXMnM4Q' }],

      // Canonical URL (surchargé per page)
      ['link', { rel: 'canonical', href: 'https://getinside-ops.github.io/handbook/' }],

      // Open Graph
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'getinside Handbook' }],
      ['meta', { property: 'og:title', content: 'getinside Handbook - Guides & Specs' }],
      ['meta', { property: 'og:description', content: 'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes et monétiser vos audiences.' }],
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
      ['meta', { name: 'ChatGPT-content', content: 'Retail media platform documentation - comprehensive guides for advertisers and e-commerce retailers' }],

      // WebSite schema statique (SSR) pour que Google affiche le bon nom de site
      ['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'getinside Handbook',
        alternateName: 'getinside',
        url: 'https://getinside-ops.github.io/handbook/',
        description: 'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes retail media et monétiser vos audiences.',
        publisher: {
          '@type': 'Organization',
          name: 'getinside',
          url: 'https://www.getinside.media/',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://getinside-ops.github.io/handbook/?search={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      })],
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
        { text: '🛍️ Annonceurs', link: '/advertisers/' },
        { text: '📦 Retailers', link: '/publishers/' },
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
            text: 'Espace Annonceurs',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/advertisers/' },
              { text: 'Démarrage Rapide', link: '/advertisers/onboarding-quick-start' },
              { text: 'Comparer les formats', link: '/advertisers/compare-formats' },
              { text: 'Suivi & Mesure', link: '/advertisers/analytics' },
              {
                text: 'Insertion Colis',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/advertisers/sponsored-mail/' },
                  {
                    text: 'Guide Design',
                    collapsed: true,
                    items: [
                      { text: 'Introduction', link: '/advertisers/sponsored-mail/design-guide/' },
                      { text: 'Spécifications techniques', link: '/advertisers/sponsored-mail/design-guide/print-specs' },
                      { text: 'Mentions légales', link: '/advertisers/sponsored-mail/design-guide/legal' },
                    ],
                  },
                ],
              },
              {
                text: 'Emailing Dédié',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/advertisers/dedicated-email/' },
                  { text: 'Brief Annonceur', link: '/advertisers/dedicated-email/1-brief-annonceur' },
                  { text: 'Création Distributeur', link: '/advertisers/dedicated-email/2-creation-distributeur' },
                  { text: 'Liste d\'exclusion', link: '/advertisers/dedicated-email/exclusion-list' },
                  { text: 'Validation & Diffusion', link: '/advertisers/dedicated-email/3-validation-diffusion' },
                ],
              },
              {
                text: 'Display Email',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/advertisers/display-email/' },
                  { text: 'Spécifications', link: '/advertisers/display-email/specs' },
                  { text: 'Workflow', link: '/advertisers/display-email/workflow' },
                ],
              },
              {
                text: 'Social Ads',
                link: '/advertisers/sponsored-social/',
              },
              { text: 'Bundles', link: '/advertisers/bundles' },
              { text: 'Service Impression & RSE', link: '/advertisers/printing-services' },
              { text: 'Tarifs Annonceurs', link: '/advertisers/pricing' },
            ],
          },
          {
            text: 'Espace Retailers',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/publishers/' },
              { text: 'Démarrage Rapide', link: '/publishers/onboarding-quick-start' },
              { text: 'Guide de Démarrage Complet', link: '/publishers/onboarding-process' },
              {
                text: 'Insertion Colis',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/publishers/sponsored-mail/' },
                  { text: 'Logistique', link: '/publishers/sponsored-mail/logistics' },
                  { text: 'Reporting', link: '/publishers/sponsored-mail/reporting' },
                ],
              },
              {
                text: 'Emailing Dédié',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/publishers/dedicated-email/' },
                  { text: 'Design', link: '/publishers/dedicated-email/1-design' },
                  { text: 'Liste d\'exclusion', link: '/publishers/dedicated-email/exclusion-list' },
                  { text: 'Tracking & Envoi', link: '/publishers/dedicated-email/2-tracking-sending' },
                ],
              },
              {
                text: 'Display Email',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/publishers/display-email/' },
                  { text: 'Intégration', link: '/publishers/display-email/integration' },
                ],
              },
              {
                text: 'Social Ads',
                link: '/publishers/sponsored-social/',
              },
              { text: 'Bundles', link: '/publishers/bundles' },
              {
                text: 'Gestion & Revenus',
                collapsed: true,
                items: [
                  { text: 'Score Distributeur', link: '/publishers/score-distributor' },
                  { text: 'Audiences & Données', link: '/publishers/audience-setup' },
                  { text: 'Paiements & Wallet', link: '/publishers/payouts' },
                  { text: "Programme d'Affiliation", link: '/publishers/affiliation' },
                ],
              },
            ],
          },
          {
            text: 'FAQ',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/faq/' },
              { text: 'Problèmes Distributeurs', link: '/faq/troubleshooting-distributors' },
              { text: 'Problèmes Annonceurs', link: '/faq/troubleshooting-advertisers' },
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
            text: 'Advertisers',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/advertisers/' },
              { text: 'Quick Start', link: '/en/advertisers/onboarding-quick-start' },
              { text: 'Compare Formats', link: '/en/advertisers/compare-formats' },
              { text: 'Analytics & Tracking', link: '/en/advertisers/analytics' },
              {
                text: 'Parcel Inserts',
                collapsed: true,
                items: [
                  { text: 'Presentation', link: '/en/advertisers/sponsored-mail/' },
                  {
                    text: 'Design Guide',
                    collapsed: true,
                    items: [
                      { text: 'Introduction', link: '/en/advertisers/sponsored-mail/design-guide/' },
                      { text: 'Print Specs', link: '/en/advertisers/sponsored-mail/design-guide/print-specs' },
                      { text: 'Legal', link: '/en/advertisers/sponsored-mail/design-guide/legal' },
                    ],
                  },
                ],
              },
              {
                text: 'Dedicated Email',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/en/advertisers/dedicated-email/' },
                  { text: 'Advertiser Brief', link: '/en/advertisers/dedicated-email/1-brief-annonceur' },
                  { text: 'Retailer Creation', link: '/en/advertisers/dedicated-email/2-creation-distributeur' },
                  { text: 'Exclusion List', link: '/en/advertisers/dedicated-email/exclusion-list' },
                  { text: 'Validation & Delivery', link: '/en/advertisers/dedicated-email/3-validation-diffusion' },
                ],
              },
              {
                text: 'Display Email',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/en/advertisers/display-email/' },
                  { text: 'Specs', link: '/en/advertisers/display-email/specs' },
                  { text: 'Workflow', link: '/en/advertisers/display-email/workflow' },
                ],
              },
              { text: 'Social Ads', link: '/en/advertisers/sponsored-social/' },
              { text: 'Bundles', link: '/en/advertisers/bundles' },
              { text: 'Printing & CSR Services', link: '/en/advertisers/printing-services' },
              { text: 'Advertiser Pricing', link: '/en/advertisers/pricing' },
            ],
          },
          {
            text: 'Retailers',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/publishers/' },
              { text: 'Quick Start', link: '/en/publishers/onboarding-quick-start' },
              { text: 'Full Onboarding Guide', link: '/en/publishers/onboarding-process' },
              {
                text: 'Parcel Inserts',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/en/publishers/sponsored-mail/' },
                  { text: 'Logistics', link: '/en/publishers/sponsored-mail/logistics' },
                  { text: 'Reporting', link: '/en/publishers/sponsored-mail/reporting' },
                ],
              },
              {
                text: 'Dedicated Email',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/en/publishers/dedicated-email/' },
                  { text: 'Design', link: '/en/publishers/dedicated-email/1-design' },
                  { text: 'Exclusion list', link: '/en/publishers/dedicated-email/exclusion-list' },
                  { text: 'Tracking & Sending', link: '/en/publishers/dedicated-email/2-tracking-sending' },
                ],
              },
              {
                text: 'Display Email',
                collapsed: true,
                items: [
                  { text: 'Overview', link: '/en/publishers/display-email/' },
                  { text: 'Integration', link: '/en/publishers/display-email/integration' },
                ],
              },
              { text: 'Social Ads', link: '/en/publishers/sponsored-social/' },
              { text: 'Bundles', link: '/en/publishers/bundles' },
              {
                text: 'Management & Revenue',
                collapsed: true,
                items: [
                  { text: 'Retailer Score', link: '/en/publishers/score-distributor' },
                  { text: 'Audiences & Data', link: '/en/publishers/audience-setup' },
                  { text: 'Payments & Wallet', link: '/en/publishers/payouts' },
                  { text: 'Affiliation Program', link: '/en/publishers/affiliation' },
                ],
              },
            ],
          },
          {
            text: 'FAQ',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/en/faq/' },
              { text: 'Retailer Issues', link: '/en/faq/troubleshooting-distributors' },
              { text: 'Advertiser Issues', link: '/en/faq/troubleshooting-advertisers' },
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

    // transformHead pour injecter les balises SEO en SSR
    async transformHead({ pageData }) {
      const { frontmatter, title, relativePath } = pageData
      const pageTitle = frontmatter.title || title || 'getinside Handbook'
      const pageDescription = frontmatter.description || 'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes retail media et monétiser vos audiences.'
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
        // Schema.org WebPage + BreadcrumbList (SSR, indexable sans JS)
        ['script', { type: 'application/ld+json' }, JSON.stringify(buildWebPageSchema(pageData))],
      ]
    },
})

export default config
