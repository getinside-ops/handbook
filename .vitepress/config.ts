import { defineConfig } from 'vitepress'
import path from 'path'
import fs from 'fs'
import { buildSidebar } from './sidebar'

const SITE = 'https://getinside-ops.github.io/handbook'
/** Pictogramme Lucide inline (16 px, trait currentColor) pour les libellés HTML du menu. */
function icon(name: string): string {
  const svg = fs.readFileSync(path.resolve(__dirname, '../node_modules/lucide-static/icons', `${name}.svg`), 'utf8')
  return svg
    .replace(/<!--[\s\S]*?-->/, '')
    .replace(/class="[^"]*"/, 'class="gi-nav-ico"')
    .replace(/width="24"/, 'width="16"')
    .replace(/height="24"/, 'height="16"')
    .replace('<svg', '<svg aria-hidden="true"')
    .replace(/\s+/g, ' ')
    .trim()
}

const ORG_SAMEAS = ['https://www.getinside.fr/', 'https://x.com/getinsideMedia']

/**
 * Construit le JSON-LD WebPage + BreadcrumbList en SSR (rendu statique).
 * Auparavant injecté côté client uniquement (theme/index.ts) — donc invisible
 * pour les crawlers sans JS. Émis ici à la build pour être indexable.
 */
function buildWebPageSchema(pageData: any) {
  const { frontmatter, title, relativePath } = pageData
  const pageTitle = frontmatter.title || title || 'getinside Handbook'
  const pageDescription = frontmatter.description || 'Guides opérationnels pour le marketing par le colis et le courrier adressé'
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
      sameAs: ['https://www.getinside.fr/'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'getinside',
      alternateName: 'getinside Media',
      logo: { '@type': 'ImageObject', url: `${SITE}/images/logo-getinside.svg` },
      url: 'https://www.getinside.fr/',
      slogan: 'Le marketing qui touche',
      sameAs: ORG_SAMEAS,
    },
    breadcrumb: { '@type': 'BreadcrumbList', itemListElement },
  }
  schema.inLanguage = relativePath.startsWith('en/') ? 'en-US' : 'fr-FR'
  if (pageData.lastUpdated) schema.dateModified = new Date(pageData.lastUpdated).toISOString()
  if (Array.isArray(frontmatter.keywords) && frontmatter.keywords.length) {
    schema.keywords = frontmatter.keywords.join(', ')
  }
  return schema
}

const config: any = defineConfig({
    title: 'getinside Handbook',
    description: 'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.',
    base: '/handbook/',
    srcDir: 'docs',
    cleanUrls: true,
    lastUpdated: true,
    appearance: false,

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
          lastUpdated: {
            text: 'Last updated',
            formatOptions: { dateStyle: 'long', forceLocale: true },
          },
          nav: [
            { text: icon('target') + ' Recruit', link: '/en/recruit/' },
            { text: icon('mail-open') + ' Retain', link: '/en/retain/' },
            { text: icon('package') + ' Monetize', link: '/en/monetize/' },
            { text: icon('circle-help') + ' FAQ', link: '/en/faq/' },
            { text: 'Access the solution', link: 'https://app.getinside.media/', target: '_blank' },
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
      ['meta', { name: 'theme-color', content: '#fcf758' }],

      // Fonts (auto-hébergées)
      ['link', { rel: 'preload', href: '/handbook/fonts/BricolageGrotesque-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' }],

      // SEO & Robots
      ['meta', { name: 'google-site-verification', content: 'rYXnBrdfxUincgWiLZ2bJS8FYbU_vo3sYDa3eXMnM4Q' }],

      // Open Graph
      ['meta', { property: 'og:site_name', content: 'getinside Handbook' }],
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

      // WebSite schema statique (SSR) pour que Google affiche le bon nom de site
      ['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'getinside Handbook',
        alternateName: 'getinside',
        url: 'https://getinside-ops.github.io/handbook/',
        description: 'Guides opérationnels pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.',
        publisher: {
          '@type': 'Organization',
          name: 'getinside',
          url: 'https://www.getinside.fr/',
          slogan: 'Le marketing qui touche',
          sameAs: ORG_SAMEAS,
        },
      })],
    ],

    themeConfig: {
      logo: { src: '/images/logo-getinside.svg', alt: 'getinside' },
      siteTitle: false,
      lastUpdated: {
        text: 'Mis à jour le',
        formatOptions: { dateStyle: 'long', forceLocale: true },
      },

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
        { text: icon('target') + ' Recruter', link: '/recruit/' },
        { text: icon('mail-open') + ' Fidéliser', link: '/retain/' },
        { text: icon('package') + ' Monétiser', link: '/monetize/' },
        { text: icon('circle-help') + ' FAQ', link: '/faq/' },
        { text: 'Accéder à la solution', link: 'https://app.getinside.media/', target: '_blank' },
      ],
      sidebar: buildSidebar(icon),

      footer: {
        message:
          'Contact : <a href="mailto:bonjour@getinside.fr">bonjour@getinside.fr</a> · Studio : <a href="mailto:studio@getinside.fr">studio@getinside.fr</a>',
        copyright: '© 2026 getinside. Tous droits réservés.',
      },

      editLink: undefined,
    },

    // transformHead pour injecter les balises SEO en SSR
    async transformHead({ pageData }) {
      const { frontmatter, title, relativePath } = pageData
      const pageTitle = frontmatter.title || title || 'getinside Handbook'
      const pageDescription = frontmatter.description || 'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.'
      const pageImage = frontmatter.image || 'https://getinside-ops.github.io/handbook/images/og-image.png'
      const relUrl = relativePath.replace(/\.md$/, '').replace(/\/index$/, '/').replace(/^index$/, '')
      const pageUrl = `https://getinside-ops.github.io/handbook/${relUrl}`

      const isEn = relativePath.startsWith('en/')
      const isHome = relUrl === '' || relUrl === 'en/'
      const frRel = relativePath.replace(/^en\//, '')
      const enRel = isEn ? relativePath : `en/${relativePath}`
      const urlOf = (rel: string) => `${SITE}/${rel.replace(/\.md$/, '').replace(/\/index$/, '/').replace(/^index$/, '')}`
      const hasEn = fs.existsSync(path.resolve(__dirname, '../docs', enRel))
      const is404 = relativePath === '404.md'
      // hreflang en SSR (auparavant client-only, donc invisible aux crawlers)
      const hreflang: any[] = hasEn
        ? [
            ['link', { rel: 'alternate', hreflang: 'fr', href: urlOf(frRel) }],
            ['link', { rel: 'alternate', hreflang: 'en', href: urlOf(enRel) }],
            ['link', { rel: 'alternate', hreflang: 'x-default', href: urlOf(frRel) }],
          ]
        : []

      return [
        ['meta', { name: 'robots', content: is404 ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
        ...hreflang,
        // Version Markdown brute de la page (générée au build), lisible par les agents IA
        ...(is404 ? [] : [['link', { rel: 'alternate', type: 'text/markdown', href: `${SITE}/${relativePath}` }]]),
        ['meta', { property: 'og:type', content: isHome ? 'website' : 'article' }],
        ['meta', { property: 'og:locale', content: isEn ? 'en_US' : 'fr_FR' }],
        ...(hasEn ? [['meta', { property: 'og:locale:alternate', content: isEn ? 'fr_FR' : 'en_US' }]] : []),
        ...(pageData.lastUpdated ? [['meta', { property: 'article:modified_time', content: new Date(pageData.lastUpdated).toISOString() }]] : []),
        ['meta', { name: 'twitter:title', content: pageTitle }],
        ['meta', { name: 'twitter:description', content: pageDescription }],
        ['meta', { name: 'twitter:image', content: pageImage }],
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
