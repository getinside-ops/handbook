/**
 * Plugin SEO VitePress
 * Injecte Schema.org JSON-LD et métadonnées OpenGraph par page
 */

export function useHeadSEO(site, page) {
  if (!page || !page.data) return;

  const { title, description, image, keywords } = page.data;
  const pageTitle = title ? `${title} | getinside Handbook` : 'getinside Handbook';
  const pageDescription = description || 'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes retail media et monétiser vos audiences.';
  const pageImage = image || 'https://anthropics.github.io/handbook/images/og-image.png';
  const pageUrl = `https://anthropics.github.io${page.path}`;

  // Met à jour les métadonnées OpenGraph
  if (typeof window !== 'undefined' && document) {
    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', pageTitle);

    // OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', pageDescription);

    // OG Image
    let ogImage = document.querySelector('meta[property="og:image"]');
    if (!ogImage) {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      document.head.appendChild(ogImage);
    }
    ogImage.setAttribute('content', pageImage);

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', pageUrl);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // Schema.org JSON-LD
    injectSchemaOrg(pageTitle, pageDescription, pageUrl, pageImage, keywords);
  }
}

function injectSchemaOrg(title, description, url, image, keywords) {
  if (typeof document === 'undefined') return;

  // Supprimer les anciens schémas
  const oldScript = document.querySelector('script[data-schema="main"]');
  if (oldScript) oldScript.remove();

  // Créer le nouveau schéma
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'getinside Handbook',
      url: 'https://anthropics.github.io/handbook/',
      sameAs: [
        'https://www.getinside.media/',
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: 'getinside',
      logo: {
        '@type': 'ImageObject',
        url: 'https://anthropics.github.io/handbook/images/logo-getinside.svg',
      },
      url: 'https://www.getinside.media/',
    },
    author: {
      '@type': 'Organization',
      name: 'getinside',
    },
  };

  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(', ');
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema', 'main');
  script.textContent = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}
