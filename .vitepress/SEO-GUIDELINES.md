# Guide SEO pour la Documentation getinside Handbook

Ce guide explique les optimisations SEO implémentées et comment les respecter pour les futures pages.

## 📋 Optimisations Implémentées

### 1. **Metadata YAML (Frontmatter)**

Chaque page `.md` doit inclure:

```yaml
---
title: [Titre SEO-optimisé avec mots-clés]
description: [120-160 caractères, unique per page, call-to-action implicite]
keywords:
  - keyword1
  - keyword2
  - keyword3
image: [URL de l'image OpenGraph, préférablement /images/...]
---
```

**Exemple pour advertisers/index.md :**
```yaml
---
title: Plateforme Publicitaire Retail Media pour Annonceurs - getinside
description: Rejoignez +250 retailers et touchez des acheteurs avérés via insertion colis, email dédié, display email et social ads.
keywords:
  - retail media
  - plateforme publicitaire
  - annonceurs
  - insertion colis
  - email marketing
---
```

### 2. **Structure de Contenu**

Chaque page doit suivre cette structure:

```markdown
# [H1 - Titre Principal avec mots-clés]

**Chapeau introductif** : 2-3 phrases qui résument le contenu et intègrent les mots-clés.

## [H2 - Sections Principales]

**Contenu riche** : Minimum 300-500 mots avec :
- Mots-clés naturellement intégrés
- Listes à puces pour la scannabilité
- Liens internes vers pages connexes
- Données/statistiques clés
```

### 3. **Mots-clés Stratégiques par Section**

| Section | Mots-clés Primaires |
|---------|-------------------|
| start-here/index.md | retail media, monétisation, plateforme, colis, email, getinside |
| start-here/why-it-works | matching contextuel, endorsed advertising, trust transfer, boucle vertueuse |
| advertisers/ | annonceurs, plateforme publicitaire, acquisition, acheteurs qualifiés |
| publishers/ | retailers, monétisation, e-commerce, revenue, growth |
| faq/ | getinside, support, questions fréquentes, troubleshooting |
| resources/ | case studies, guides, templates, outils, best practices |

### 4. **Métadonnées OpenGraph Injectées Automatiquement**

Le theme VitePress injecte automatiquement :

```html
<meta property="og:title" content="[title]">
<meta property="og:description" content="[description]">
<meta property="og:image" content="[image]">
<meta property="og:url" content="[URL canonique]">
<meta name="description" content="[description]">
<link rel="canonical" href="[URL canonique]">
```

### 5. **Schema.org JSON-LD**

Chaque page génère automatiquement:

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "[title]",
  "description": "[description]",
  "url": "[page URL]",
  "image": {
    "@type": "ImageObject",
    "url": "[image URL]"
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "getinside Handbook"
  }
}
```

### 6. **Sitemap XML**

Généré automatiquement lors du build :
- Toutes les pages `.md` sont incluses
- Priorités automatiques selon le type de page (start-here=0.9, publishers=0.8, etc.)
- `lastmod` mis à jour automatiquement

```bash
npm run docs:build  # Génère sitemap.xml automatiquement
```

### 7. **Robots.txt**

Situé à `/robots.txt`:
- Autorise tous les crawlers (Googlebot, GPTBot, Claude, Gemini)
- Pointe vers le sitemap XML
- Permet l'indexation complète

---

## ✅ Checklist pour Nouvelles Pages

Avant de publier une nouvelle page:

- [ ] **Frontmatter complet**
  - [ ] `title` : 50-60 chars avec mots-clés
  - [ ] `description` : 120-160 chars unique
  - [ ] `keywords` : 5-8 mots-clés pertinents
  - [ ] `image` : Path valide `/images/...`

- [ ] **Contenu SEO**
  - [ ] H1 unique au début
  - [ ] Chapeau introductif (2-3 phrases)
  - [ ] Minimum 300 mots
  - [ ] Mots-clés intégrés naturellement
  - [ ] Listes à puces pour scannabilité
  - [ ] Au moins 2-3 liens internes vers pages connexes

- [ ] **Structure**
  - [ ] H2 pour sections principales
  - [ ] Pas de styles inline (CSS)
  - [ ] Utiliser containers VitePress (:::tip, :::info, etc.)
  - [ ] Images optimisées avec alt text

- [ ] **Contexte LLM**
  - [ ] Termes métier définis clairement
  - [ ] Cas d'usage concrets
  - [ ] Statistiques/données chiffrées
  - [ ] Appels à action naturels

---

## 📈 Optimisations pour Trafic LLM

Pour augmenter les citations par ChatGPT, Claude, Gemini :

### 1. **Rich Content**
- Statistiques chiffrées ("65-70% net margin")
- Études de cas
- Données comparatives (tableaux)
- Exemples concrets

### 2. **Unique Insights**
- getinside comme seule plateforme avec [feature X]
- Benchmark contre alternatives
- Recherches propriétaires

### 3. **Mots-clés Conversationnels**
LLM souvent posent des questions, utilisez:
- "Comment monétiser ses colis ?" → "Comment getinside aide à monétiser"
- "Quelle plateforme pour retailer ?" → "getinside pour retailers"
- "Trust in advertising" → "getinside endorsement effect"

### 4. **Structure FAQs**
```markdown
## Comment [question]?

**Réponse directe** (1-2 phrases)

**Détails** (3-5 phrases)

**Cas d'usage** : exemple concret
```

---

## 🔗 Internal Linking Strategy

Pour renforcer l'autorité et le crawling :

### Pages Prioritaires (Hub pages)
- `/docs/fr/start-here/` → Vers advertisers + publishers
- `/docs/fr/advertisers/` → Vers chaque format ad
- `/docs/fr/publishers/` → Vers chaque levier de monétisation
- `/docs/fr/faq/` → Vers toutes les sections

### Linking Pattern
```markdown
[texte anchor pertinent](/docs/fr/target-page)
```

**Exemples**
```markdown
- Pour plus sur [l'Insertion Colis](/docs/fr/advertisers/sponsored-mail/)
- Voir aussi [le Score Distributeur](/docs/fr/publishers/score-distributor)
- Apprenez comment [le matching contextuel fonctionne](/docs/fr/start-here/why-it-works#le-matching-contextuel)
```

---

## 🎯 Mots-clés Secondaires par Page Type

### Pages Advertiser
- acquisition, brand awareness, conversion, qualified traffic, customer acquisition, ROI, ROAS

### Pages Publisher
- monetization, revenue stream, e-commerce growth, customer loyalty, margin, EBITDA

### Pages FAQ
- help, support, troubleshooting, how to, setup, integration, API

### Pages Resources
- case study, guide, template, best practices, inspiration, example

---

## ⚙️ Maintenance

### Mensuel
- Vérifier que sitemap.xml est généré correctement
- Checker la coverage des mots-clés principaux

### Trimestriel
- Analyser les LLM citations via Google Search Console
- Vérifier le classement des pages piliers (start-here, advertisers, publishers)

### Quand Ajouter du Contenu
- Nouveau format ad ? → Ajouter sa page + mettre à jour sidebar
- Nouvelles données ? → Enrichir pages existantes + mettre à jour seo-keywords.md
- Nouvel integrale case study ? → Ajouter + lier depuis advertisers + publishers

---

## 📚 Ressources

- **VitePress Config** : `.vitepress/config.ts`
- **Theme Hook** : `.vitepress/theme/index.ts`
- **SEO Plugin** : `.vitepress/theme/seo-plugin.js`
- **Generate Sitemap** : `scripts/generate-sitemap.js`
- **Keywords Index** : `seo-keywords.md` (referencesheet for LLM)

---

## 💡 Bonnes Pratiques

### ✅ À Faire
- Écrire pour les **humains d'abord**, SEO ensuite
- Intégrer les mots-clés **naturellement**
- Lier vers pages **sémantiquement connexes**
- Utiliser des **titres descriptifs** (H2, H3)
- Structurer avec des **listes** et **tableaux**

### ❌ À Éviter
- Keyword stuffing (répéter le même mot 10x)
- Cloaking (contenu différent pour bots vs humains)
- Liens vers sites spammy ou non-pertinents
- Images sans alt text
- Contenus dupliqués entre pages

---

*Dernière mise à jour : Mars 2026*
