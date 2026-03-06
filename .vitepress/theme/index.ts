import DefaultTheme from 'vitepress/theme'
import './style.css'
import { useRoute } from 'vitepress'
import { h, onMounted } from 'vue'
import NotFound from './components/NotFound.vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'not-found': () => h(NotFound),
  }),
  setup() {
    const route = useRoute()

    onMounted(() => {
      // Injecter Schema.org JSON-LD et mettre à jour OpenGraph
      const page = route.data
      if (page) {
        injectSchemaOrg(page)
        updateOpenGraph(page)
      }
    })
  },
}

function updateOpenGraph(page: any) {
  const { title, description, image, frontmatter } = page
  const pageTitle = frontmatter?.title || title || 'getinside Handbook'
  const pageDescription = frontmatter?.description || description || 'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes retail media et monétiser vos audiences.'
  const pageImage = frontmatter?.image || image || 'https://getinside-ops.github.io/handbook/images/og-image.png'
  const relUrl = page.relativePath.replace(/\.md$/, '').replace(/\/index$/, '/').replace(/^index$/, '')
  const pageUrl = `https://getinside-ops.github.io/handbook/${relUrl}`

  // Mettre à jour OG Title
  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (!ogTitle) {
    ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    document.head.appendChild(ogTitle)
  }
  ogTitle.setAttribute('content', pageTitle)

  // Mettre à jour OG Description
  let ogDesc = document.querySelector('meta[property="og:description"]')
  if (!ogDesc) {
    ogDesc = document.createElement('meta')
    ogDesc.setAttribute('property', 'og:description')
    document.head.appendChild(ogDesc)
  }
  ogDesc.setAttribute('content', pageDescription)

  // Mettre à jour OG Image
  let ogImage = document.querySelector('meta[property="og:image"]')
  if (!ogImage) {
    ogImage = document.createElement('meta')
    ogImage.setAttribute('property', 'og:image')
    document.head.appendChild(ogImage)
  }
  ogImage.setAttribute('content', pageImage)

  // Mettre à jour Canonical
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', pageUrl)

  // Hreflang alternate links
  const isEnglish = page.relativePath.startsWith('en/')
  const toUrl = (rel: string) => {
    const p = rel.replace(/\.md$/, '').replace(/\/index$/, '/').replace(/^index$/, '')
    return `https://getinside-ops.github.io/handbook/${p}`
  }
  const frRelative = page.relativePath.replace(/^en\//, '')
  const enRelative = isEnglish ? page.relativePath : `en/${page.relativePath}`

  setHreflang('fr', toUrl(frRelative))
  setHreflang('en', toUrl(enRelative))
  setHreflang('x-default', toUrl(frRelative))

  // Mettre à jour la description meta
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    document.head.appendChild(metaDesc)
  }
  metaDesc.setAttribute('content', pageDescription)
}

function setHreflang(lang: string, href: string) {
  let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'alternate')
    link.setAttribute('hreflang', lang)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

function injectSchemaOrg(page: any) {
  const { frontmatter, title } = page
  const pageTitle = frontmatter?.title || title || 'getinside Handbook'
  const pageDescription = frontmatter?.description || 'Guides opérationnels pour retail media'
  const relUrl = page.relativePath.replace(/\.md$/, '').replace(/\/index$/, '/').replace(/^index$/, '')
  const pageUrl = `https://getinside-ops.github.io/handbook/${relUrl}`
  const pageImage = frontmatter?.image || 'https://getinside-ops.github.io/handbook/images/og-image.png'
  const keywords = frontmatter?.keywords || []

  // Supprimer l'ancien schéma
  const oldScript = document.querySelector('script[data-schema="main"]')
  if (oldScript) oldScript.remove()

  // Créer le nouveau schéma
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    image: {
      '@type': 'ImageObject',
      url: pageImage,
      width: 1200,
      height: 630,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'getinside Handbook',
      url: 'https://getinside-ops.github.io/handbook/',
      sameAs: ['https://www.getinside.media/'],
    },
    publisher: {
      '@type': 'Organization',
      name: 'getinside',
      alternateName: 'getinside Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://getinside-ops.github.io/handbook/images/logo-getinside.svg',
      },
      url: 'https://www.getinside.media/',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: generateBreadcrumbs(page.relativePath),
    },
  }

  if (keywords.length > 0) {
    schema.keywords = keywords.join(', ')
  }

  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-schema', 'main')
  script.textContent = JSON.stringify(schema, null, 2)
  document.head.appendChild(script)
}
function generateBreadcrumbs(relativePath: string) {
  const parts = relativePath.split('/').filter(Boolean)
  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Handbook',
      item: 'https://getinside-ops.github.io/handbook/',
    },
  ]

  let currentPath = 'https://getinside-ops.github.io/handbook/'
  parts.forEach((part, index) => {
    if (part.endsWith('.md')) {
      const name = part.replace('.md', '').replace(/-/g, ' ')
      breadcrumbs.push({
        '@type': 'ListItem',
        position: index + 2,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        item: currentPath + part.replace('.md', ''),
      })
    } else {
      currentPath += part + '/'
      breadcrumbs.push({
        '@type': 'ListItem',
        position: index + 2,
        name: part.charAt(0).toUpperCase() + part.slice(1),
        item: currentPath,
      })
    }
  })

  return breadcrumbs
}
