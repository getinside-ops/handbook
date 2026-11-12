import DefaultTheme from 'vitepress/theme'
import './style.css'
import './ds-tokens.css'
import './ds-markdown.css'
import './ds-components.css'
import { useRoute } from 'vitepress'
import { h, onMounted } from 'vue'
import NotFound from './components/NotFound.vue'
import PrintButton from './components/PrintButton.vue'
import GiHero from './components/GiHero.vue'
import GiAccentTitle from './components/GiAccentTitle.vue'
import GiLinkCard from './components/GiLinkCard.vue'
import GiStat from './components/GiStat.vue'
import GiSchema from './components/GiSchema.vue'
import GiFlow from './components/GiFlow.vue'
import GiPelican from './components/GiPelican.vue'
import GiIcon from './components/GiIcon.vue'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'not-found': () => h(NotFound),
    'doc-before': () => h(PrintButton),
  }),
  enhanceApp({ app }) {
    app.component('GiHero', GiHero)
    app.component('GiAccentTitle', GiAccentTitle)
    app.component('GiLinkCard', GiLinkCard)
    app.component('GiStat', GiStat)
    app.component('GiSchema', GiSchema)
    app.component('GiFlow', GiFlow)
    app.component('GiPelican', GiPelican)
    app.component('GiIcon', GiIcon)
  },
  setup() {
    const route = useRoute()

    onMounted(() => {
      // Le Schema.org JSON-LD (WebPage/Breadcrumb) est rendu en SSR via
      // transformHead (config.ts). Ici on ne met à jour que l'OpenGraph et les
      // liens canonical/hreflang lors des navigations SPA.
      const page = route.data
      if (page) {
        updateOpenGraph(page)
      }
    })
  },
}

function updateOpenGraph(page: any) {
  const { title, description, image, frontmatter } = page
  const pageTitle = frontmatter?.title || title || 'getinside Handbook'
  const pageDescription = frontmatter?.description || description || 'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.'
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
