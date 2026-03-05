# ✅ SEO Validation Checklist

Utilisez cette checklist pour valider les optimisations SEO après déploiement.

---

## 🔍 Vérifications Techniques

### **Robots.txt**

- [ ] Accessible : `https://anthropics.github.io/handbook/robots.txt`
- [ ] Contient `Allow: /handbook/`
- [ ] Autorise GPTBot
- [ ] Autorise Claude-Web
- [ ] Autorise Googlebot
- [ ] Pointe vers sitemap : `Sitemap: https://anthropics.github.io/handbook/sitemap.xml`

**Quick Test:**
```bash
curl https://anthropics.github.io/handbook/robots.txt | grep -i "GPTBot"
# Doit retourner : Allow: /handbook/
```

---

### **Sitemap XML**

- [ ] Accessible : `https://anthropics.github.io/handbook/sitemap.xml`
- [ ] Commence par `<?xml version="1.0"?>`
- [ ] Contient `<urlset>` tag
- [ ] Minimum 50 URLs listées
- [ ] Chaque URL a `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`

**Quick Test:**
```bash
curl https://anthropics.github.io/handbook/sitemap.xml | grep -c "<url>"
# Doit retourner : 50+
```

---

### **OpenGraph Metadata**

Vérifier 1 page principale pour chaque section :

#### **start-here/index.md**

```bash
curl https://anthropics.github.io/handbook/docs/fr/start-here/ | grep -E "og:title|og:description|og:image"
```

Doit contenir :
- [ ] `og:title` avec mots-clés (retail media, getinside)
- [ ] `og:description` (120-160 chars)
- [ ] `og:image` avec URL valide
- [ ] `og:type` = website
- [ ] `og:url` = canonical URL

#### **advertisers/index.md**

```bash
curl https://anthropics.github.io/handbook/docs/fr/advertisers/ | grep "og:"
```

- [ ] `og:title` contient "Annonceurs"
- [ ] `og:description` unique à cette page

#### **publishers/index.md**

```bash
curl https://anthropics.github.io/handbook/docs/fr/publishers/ | grep "og:"
```

- [ ] `og:title` contient "Retailers"
- [ ] `og:description` unique à cette page

---

### **Meta Description**

```bash
curl https://anthropics.github.io/handbook/docs/fr/start-here/ | grep '<meta name="description"'
```

Doit avoir :
- [ ] `<meta name="description" content="[texte 120-160 chars]">`
- [ ] Texte unique par page
- [ ] Contient call-to-action ou valeur principale

---

### **Canonical URLs**

Vérifier sur chaque page :

```bash
curl https://anthropics.github.io/handbook/docs/fr/start-here/ | grep 'rel="canonical"'
```

Doit retourner :
- [ ] `<link rel="canonical" href="https://anthropics.github.io/handbook/docs/fr/start-here/">`

**Tester plusieurs pages :**
```bash
# On start-here/index.md
curl https://anthropics.github.io/handbook/docs/fr/start-here/ | grep canonical

# On why-it-works.md
curl https://anthropics.github.io/handbook/docs/fr/start-here/why-it-works | grep canonical

# On advertisers/index.md
curl https://anthropics.github.io/handbook/docs/fr/advertisers/ | grep canonical
```

---

### **Schema.org JSON-LD**

```bash
curl https://anthropics.github.io/handbook/docs/fr/start-here/ | grep -A 15 'application/ld+json'
```

Doit contenir :
- [ ] `"@context": "https://schema.org"`
- [ ] `"@type": "WebPage"`
- [ ] `"name": "[page title]"`
- [ ] `"description": "[page description]"`
- [ ] `"url": "[canonical URL]"`
- [ ] `"image": { "@type": "ImageObject", "url": "..." }`
- [ ] `"isPartOf": { "@type": "WebSite", "name": "getinside Handbook" }`

---

### **Robots Meta Tag**

```bash
curl https://anthropics.github.io/handbook/docs/fr/start-here/ | grep '<meta name="robots"'
```

Doit contenir :
- [ ] `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">`

---

## 📋 Vérifications de Contenu

### **Frontmatter Metadata**

Vérifier que les pages principales ont un frontmatter complet :

- [ ] **start-here/index.md**
  - title: "Découvrir getinside - Plateforme Retail Media"
  - description: (120-160 chars)
  - keywords: (5-8 mots-clés)
  - image: /images/...

- [ ] **start-here/why-it-works.md**
  - title: "Comment fonctionne le Retail Media - getinside"
  - description: (120-160 chars)
  - keywords: matching contextuel, endorsed advertising, etc.

- [ ] **advertisers/index.md**
  - title: "Plateforme Publicitaire Retail Media pour Annonceurs"
  - description: (120-160 chars)

- [ ] **publishers/index.md**
  - title: "Monétisation E-commerce - Plateforme Retail Media"
  - description: (120-160 chars)

- [ ] **faq/index.md**
  - title: "FAQ Retail Media - getinside"
  - description: (120-160 chars)

- [ ] **resources/index.md**
  - title: "Ressources & Outils Retail Media - getinside"
  - description: (120-160 chars)

---

### **Contenu SEO**

Vérifier que le contenu contient les mots-clés strategiques :

#### **start-here/index.md**
- [ ] Contient "retail media" (au moins 3x)
- [ ] Contient "getinside" (au moins 5x)
- [ ] Contient "monétisation" ou "monétiser"
- [ ] Contient "colis" ou "email"
- [ ] Contient "+250 retailers" ou "+500 annonceurs"
- [ ] Contient "65-70% margin"

#### **start-here/why-it-works.md**
- [ ] Contient "matching contextuel"
- [ ] Contient "endorsed" ou "endorsement"
- [ ] Contient "trust transfer"
- [ ] Contient "retailer" et "consommateur"
- [ ] Contient exemples concrets (épicurien, sportif, etc.)

#### **advertisers/index.md**
- [ ] Contient "annonceurs" ou "brands"
- [ ] Contient "+250 retailers"
- [ ] Contient formats ad (insertion colis, email, social)
- [ ] Contient "acquisition" ou "customers"

#### **publishers/index.md**
- [ ] Contient "retailers" ou "e-commerçants"
- [ ] Contient "monétisation"
- [ ] Contient "+500 annonceurs"
- [ ] Contient "Wallet" ou "revenue"

---

### **Internal Linking**

Vérifier qu'il y a des liens entre pages connexes :

- [ ] start-here/index.md → advertisers + publishers
- [ ] start-here/why-it-works.md → advertisers, publishers, faq
- [ ] advertisers/index.md → chaque format ad (sponsored-mail, dedicated-email, etc.)
- [ ] publishers/index.md → chaque levier (insertion-colis, emailing, etc.)
- [ ] faq/index.md → pages principales de sujets couverts

---

## 🌐 Vérifications Google Search Console

### **Si accès disponible :**

- [ ] Sitemap soumis : https://anthropics.github.io/handbook/sitemap.xml
- [ ] Robots.txt visible et valide
- [ ] Aucune erreur d'exploration (4xx, 5xx)
- [ ] Couverture d'indexation : 50+ pages
- [ ] Pas de problèmes de mobile-friendliness
- [ ] Pas d'alertes de sécurité

---

## 📱 Vérifications OpenGraph (Partages Sociaux)

### **Twitter Card Test**

Utiliser https://cards-dev.twitter.com/validator

Vérifier :
- [ ] Card valide
- [ ] Title s'affiche
- [ ] Description visible
- [ ] Image s'affiche correctement

### **Facebook Sharing Debugger**

Utiliser https://developers.facebook.com/tools/debug/

Vérifier :
- [ ] og:title correct
- [ ] og:description correct
- [ ] og:image s'affiche
- [ ] og:url est canonique

### **Discord / Slack Preview**

Partager un lien dans Discord/Slack :
- [ ] Titre affiche correctement
- [ ] Description visible
- [ ] Image visible en preview

---

## 🤖 Vérifications LLM (Manuel)

### **Teste dans ChatGPT, Claude, Gemini :**

- [ ] Demander : "What is getinside?" → LLM cite getinside comme retail media platform
- [ ] Demander : "How to monetize e-commerce packages?" → getinside mentionné dans réponse
- [ ] Demander : "Best retail media platforms" → getinside dans résultats
- [ ] Demander : "What is endorsed advertising?" → getinside cité

**Note** : Ces changements peuvent prendre 2-4 semaines après déploiement, car les modèles LLM utilisent des données antérieures.

---

## 🔧 Vérifications Techniques Avancées

### **Lighthouse Audit** (si possible)

```bash
# Vérifier SEO score dans Lighthouse
# Au moins 90/100 requis
```

Vérifier :
- [ ] SEO score ≥ 90
- [ ] Pas de broken internal links
- [ ] Images optimisées
- [ ] Mobile-friendly

### **Mobile Responsiveness**

- [ ] Pages affichent bien sur mobile
- [ ] Texte lisible (pas de zoom requis)
- [ ] Buttons cliquables facilement
- [ ] Images responsive

---

## 📊 Métriques de Baseline (À Noter)

À documenter comme "baseline" pour comparaison future :

- [ ] Date de mesure : ___________
- [ ] Nombre URLs indexées (Google Search Console) : ___________
- [ ] Trafic organique mensuel (GA4) : ___________
- [ ] CTR moyen depuis recherche organique : ___________
- [ ] Position moyenne (classement) : ___________
- [ ] Top 10 pages par trafic organique :
  1. _____________________
  2. _____________________
  3. _____________________

Comparer tous les 3 mois pour mesurer l'impact.

---

## ✅ Checklist Final

Avant considérer le déploiement comme "complet" :

- [ ] Tous les checks robots.txt/sitemap passent
- [ ] Au moins 5/6 pages principales ont frontmatter complet
- [ ] OpenGraph meta tags vérifiés sur 3+ pages
- [ ] Canonical URLs valides partout
- [ ] Schema.org JSON-LD présent et valide
- [ ] Contenu SEO optimisé (mots-clés intégrés)
- [ ] Internal linking en place
- [ ] Pas d'erreurs 404 sur liens internes
- [ ] Mobile responsiveness confirmé
- [ ] Baseline metrics documentée

---

## 🐛 Troubleshooting

### **Sitemap.xml manquant**

```bash
# Vérifier que le script s'est exécuté après build
npm run docs:build

# Vérifier que le fichier existe
ls -lah .vitepress/dist/sitemap.xml

# Si manquant : exécuter manuellement
node scripts/generate-sitemap.js
```

### **OG Tags non présents**

```bash
# Vérifier que le theme/index.ts est chargé
# Vérifier frontmatter dans les fichiers .md
# Faire un hard refresh du navigateur (Cmd+Shift+R ou Ctrl+Shift+F5)
```

### **Schema.org invalide**

Utiliser https://schema.org/validator pour checker :

```bash
curl https://anthropics.github.io/handbook/docs/fr/start-here/ | \
  grep -A 20 'application/ld+json' | \
  # Copier-coller dans Schema Validator
```

---

## 📞 Support

Pour questions ou problèmes :

- [ ] Consulter `.vitepress/SEO-GUIDELINES.md`
- [ ] Vérifier `SEO-IMPLEMENTATION-SUMMARY.md`
- [ ] Checker `seo-keywords.md` pour stratégie mots-clés

---

**Status** : ⏳ En attente de vérification post-déploiement

*Généré : Mars 2026*
