# Amélioration du site, chantiers A+B (accessibilité, lecture, fraîcheur) : plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal :** Rendre le handbook conforme WCAG 2.2 AA (contraste, focus, libellés), améliorer la lecture, et afficher la fraîcheur de chaque page, avec un pied de page et un JSON-LD alignés sur getinside.fr.

**Architecture :** Modifications limitées à `.vitepress/theme/style.css` (tokens de couleur, focus, largeur de ligne) et `.vitepress/config.ts` (nav, `lastUpdated`, pied de page, JSON-LD). Aucun fichier de contenu `docs/` n'est modifié. Les vérifications passent par deux scripts Playwright jetables (non committés) : audit axe-core et test clavier/largeur de ligne.

**Tech Stack :** VitePress 1.6.4, Playwright ^1.60 (déjà en devDependency), axe-core 4.10.2 chargé depuis cdnjs à l'exécution (rien à installer), Node 24.

**Spec :** `superpowers/specs/2026-11-05-amelioration-site-design.md`

---

## Règles pour tout le plan

- Se placer dans le worktree : `/Users/benoitprentout/github repos/handbook/.claude/worktrees/site-improvement-f2f8de` (ne pas `cd` ailleurs).
- Les deux scripts jetables s'appellent `axe-audit.tmp.mjs` et `ui-check.tmp.mjs` et vivent à la racine du dépôt. **Ne jamais les `git add`.** Toujours `git add` des fichiers nommés (jamais `git add .` ni `-A`). Ils sont supprimés à la Task 9.
- Messages de commit en français, style conventionnel du dépôt, avec la ligne finale :
  `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`
- Pas de prix, pas de « agence », pas de ROAS : aucun texte de contenu n'est touché ici.

## Structure des fichiers

| Fichier | Rôle | Action |
|---|---|---|
| `.vitepress/theme/style.css` | Tokens de couleur AA (clair), focus global, largeur de ligne | Modifier |
| `.vitepress/config.ts` | Nav sans emoji lu, `lastUpdated`, pied de page, JSON-LD | Modifier |
| `CLAUDE.md` | Règle « ne jamais utiliser `#0aaa8e` en texte » | Modifier (une ligne) |
| `axe-audit.tmp.mjs` | Audit axe, jetable | Créer puis supprimer |
| `ui-check.tmp.mjs` | Focus clavier + largeur de ligne, jetable | Créer puis supprimer |

---

### Task 0 : Outils de vérification et mesure de référence

**Files :**
- Create (non committé) : `axe-audit.tmp.mjs`, `ui-check.tmp.mjs`

- [ ] **Step 1 : Créer `axe-audit.tmp.mjs`**

```js
// Jetable : ne pas committer. Usage : BASE=http://localhost:5173/handbook node axe-audit.tmp.mjs
import { chromium } from 'playwright'

const BASE = process.env.BASE || 'http://localhost:5173/handbook'
const PAGES = [
  '/',
  '/recruit/sponsored-mail/design-guide/best-practices',
  '/faq/',
  '/glossary',
  '/en/recruit/',
]
const AXE = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js'
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']

const browser = await chromium.launch()
let total = 0
for (const theme of ['light', 'dark']) {
  for (const [name, viewport] of [
    ['desktop', { width: 1280, height: 800 }],
    ['mobile', { width: 375, height: 812 }],
  ]) {
    const ctx = await browser.newContext({ viewport })
    await ctx.addInitScript((t) => localStorage.setItem('vitepress-theme-appearance', t), theme)
    const page = await ctx.newPage()
    for (const p of PAGES) {
      await page.goto(BASE + p, { waitUntil: 'networkidle' })
      await page.addScriptTag({ url: AXE })
      const res = await page.evaluate((tags) => axe.run(document, { runOnly: { type: 'tag', values: tags } }), TAGS)
      for (const v of res.violations) {
        total += v.nodes.length
        console.log(`${theme}/${name} ${p} ${v.id} x${v.nodes.length} ex: ${v.nodes[0].target.join(' ')}`)
      }
    }
    await ctx.close()
  }
}
console.log(`TOTAL violation nodes: ${total}`)
await browser.close()
process.exit(total ? 1 : 0)
```

- [ ] **Step 2 : Créer `ui-check.tmp.mjs`**

```js
// Jetable : ne pas committer. Usage : BASE=http://localhost:5173/handbook node ui-check.tmp.mjs
import { chromium } from 'playwright'

const BASE = process.env.BASE || 'http://localhost:5173/handbook'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
let bad = 0

// 1. Focus clavier : chaque élément focalisé au Tab doit avoir un contour visible
for (const path of ['/', '/recruit/sponsored-mail/design-guide/best-practices']) {
  await page.goto(BASE + path, { waitUntil: 'networkidle' })
  for (let i = 0; i < 14; i++) {
    await page.keyboard.press('Tab')
    const [tag, label, style, width] = await page.evaluate(() => {
      const e = document.activeElement
      const s = getComputedStyle(e)
      return [e.tagName, (e.innerText || e.getAttribute('aria-label') || '').trim().slice(0, 24), s.outlineStyle, s.outlineWidth]
    })
    const ok = label.startsWith('Skip to content') || (style === 'solid' && parseFloat(width) >= 2)
    if (!ok) bad++
    console.log(`${ok ? 'ok ' : 'KO '} ${path} #${i + 1} ${tag} "${label}" outline=${style} ${width}`)
  }
}

// 2. Largeur de ligne : caractères moyens par ligne du premier paragraphe de contenu
await page.goto(BASE + '/recruit/sponsored-mail/design-guide/best-practices', { waitUntil: 'networkidle' })
const chars = await page.evaluate(() => {
  const p = document.querySelector('.vp-doc > div > p')
  const cs = getComputedStyle(p)
  const c = document.createElement('canvas').getContext('2d')
  c.font = `${cs.fontSize} ${cs.fontFamily}`
  const sample = 'le consommateur ne lit pas votre flyer, il le balaie.'
  const avg = c.measureText(sample).width / sample.length
  return Math.round(p.getBoundingClientRect().width / avg)
})
const lineOk = chars >= 65 && chars <= 80
if (!lineOk) bad++
console.log(`${lineOk ? 'ok ' : 'KO '} caractères par ligne ≈ ${chars} (cible 65 à 80)`)

await browser.close()
process.exit(bad ? 1 : 0)
```

- [ ] **Step 3 : Lancer le serveur de dev en arrière-plan**

Run : `npm run docs:dev -- --port 5173` (en arrière-plan), puis attendre qu'il réponde :
`curl -s -o /dev/null -w "%{http_code}\n" http://localhost:5173/handbook/`
Expected : `200`

- [ ] **Step 4 : Mesure de référence**

Run : `node axe-audit.tmp.mjs; node ui-check.tmp.mjs`
Expected : `axe-audit` échoue (exit 1) avec des violations `color-contrast` en `light/*` (liens et accents verts) et `TOTAL violation nodes: N` avec N > 0 ; `ui-check` affiche plusieurs `KO` (focus ou largeur de ligne). **Noter N et la liste des identifiants de règles** : ils servent de référence pour la description de la PR. Si `chromium.launch()` échoue pour binaire manquant : `npx playwright install chromium`, puis relancer.

- [ ] **Step 5 : Pas de commit** (scripts jetables, aucun fichier suivi modifié). Vérifier : `git status --short` n'affiche que `?? axe-audit.tmp.mjs` et `?? ui-check.tmp.mjs`.

---

### Task 1 : Tokens de couleur AA en mode clair

**Files :**
- Modify : `.vitepress/theme/style.css:42-44` (brand), `:78` (tint-blue-text), `:81` (tint-green-text), `:84` (tint-yellow-text)
- Modify : `CLAUDE.md` (section Core files, une ligne)

Valeurs retenues (rapport de contraste calculé) : `#067a66` = 5,27:1 sur blanc, 4,98:1 sur `#e8fdf7` ; `#06705c` = 6,03:1 sur blanc ; texte vert des blocs `#047857` = 5,24:1 sur `#f0fdf4` (au lieu de 3,60) ; texte jaune des blocs `#b45309` = 4,90:1 sur le fond jaune (au lieu de 3,11). Le mode sombre (`.dark`, lignes 93+) n'est pas modifié.

- [ ] **Step 1 : Remplacer le vert de marque (lignes 41-44)**

Remplacer :

```css
  --vp-c-brand-1: #0aaa8e;
  /* mint-dark — legible on white */
  --vp-c-brand-2: #08937b;
  /* mint-darker */
```

par :

```css
  --vp-c-brand-1: #067a66;
  /* teal AA — 5,27:1 sur blanc, pour tout texte. Le menthe vif reste #6AE7C8 (fonds, décors) */
  --vp-c-brand-2: #06705c;
  /* teal AA foncé — survol, 6,03:1 sur blanc */
```

- [ ] **Step 2 : Remplacer les teintes de texte des blocs (lignes 78, 81, 84)**

```css
  --gi-tint-blue-text: #067a66;
```
```css
  --gi-tint-green-text: #047857;
```
```css
  --gi-tint-yellow-text: #b45309;
```

(chacune à la place de la valeur existante : `#0aaa8e`, `#059669`, `#d97706`.)

- [ ] **Step 3 : Chercher d'autres occurrences en dur de l'ancien vert**

Run : `grep -rn "0aaa8e\|08937b" .vitepress/theme docs assets/images/*.svg 2>/dev/null`
Expected : seule la ligne de commentaire du bloc « 25. SEARCH » (`style.css`, environ ligne 1688, texte « #0aaa8e in light »). Mettre ce commentaire à jour : `#0aaa8e` → `#067a66`. Si une autre occurrence apparaît dans `docs/` ou un composant, remplacer `#0aaa8e` par `var(--vp-c-brand-1)` quand c'est du texte, sinon la laisser (décor).
Ne pas toucher `config.ts` : `theme-color` `#0aaa8e` est la couleur de la barre du navigateur mobile, pas du texte.

- [ ] **Step 4 : Documenter la règle dans `CLAUDE.md`**

Dans la liste « Core files », à la suite de la ligne `.vitepress/theme/style.css`, la remplacer par :

```
- `.vitepress/theme/style.css` — All brand tokens (`--gi-*`) and custom component styles. Light-mode text green is `#067a66` (AA); never use the vivid mint `#6AE7C8` or the old `#0aaa8e` for text on white (contrast < 4.5:1).
```

- [ ] **Step 5 : Vérifier le contraste calculé**

Run :
```bash
python3 - <<'E'
def L(h):
    h=h.lstrip('#'); c=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    c=[x/12.92 if x<=0.03928 else ((x+0.055)/1.055)**2.4 for x in c]
    return 0.2126*c[0]+0.7152*c[1]+0.0722*c[2]
def cr(a,b):
    x,y=sorted([L(a),L(b)],reverse=True); return round((x+0.05)/(y+0.05),2)
for fg,bg in [('#067a66','#ffffff'),('#067a66','#e8fdf7'),('#067a66','#f6f6f7'),('#06705c','#ffffff'),('#047857','#f0fdf4'),('#b45309','#fefee1'),('#ffffff','#067a66')]:
    print(fg,bg,cr(fg,bg)); assert cr(fg,bg)>=4.5
E
```
Expected : sept lignes, toutes ≥ 4.5, aucun `AssertionError`.

- [ ] **Step 6 : Relancer l'audit axe**

Run : `node axe-audit.tmp.mjs`
Expected : plus aucune violation `color-contrast` sur les pages `light/*`. Il peut rester d'autres règles (par exemple `target-size`) : elles sont traitées en Task 5. Si un `color-contrast` persiste, lire la cible (`ex:`) et corriger le token ou la règle concernée avec la table de la Task 5, Step 2.

- [ ] **Step 7 : Commit**

```bash
git add .vitepress/theme/style.css CLAUDE.md
git commit -m "$(cat <<'EOF'
fix(theme): contraste AA du vert de texte en mode clair

brand-1 #0aaa8e (2,94:1) -> #067a66 (5,27:1), brand-2 -> #06705c,
textes vert/jaune des blocs corriges. Le menthe vif reste pour les fonds.

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2 : Menu sans emoji pour les lecteurs d'écran

**Files :**
- Modify : `.vitepress/config.ts:85-88` (nav EN), `:234-237` (nav FR)

VitePress affiche `nav[].text` avec `v-html` (`VPNavBarMenuLink.vue`), donc un `<span>` est interprété.

- [ ] **Step 1 : Modifier la nav EN (lignes 85-88)**

```ts
            { text: '<span aria-hidden="true">🎯</span> Recruit', link: '/en/recruit/' },
            { text: '<span aria-hidden="true">💌</span> Retain', link: '/en/retain/' },
            { text: '<span aria-hidden="true">📦</span> Monetize', link: '/en/monetize/' },
            { text: '<span aria-hidden="true">❓</span> FAQ', link: '/en/faq/' },
```

- [ ] **Step 2 : Modifier la nav FR (lignes 234-237)**

```ts
        { text: '<span aria-hidden="true">🎯</span> Recruter', link: '/recruit/' },
        { text: '<span aria-hidden="true">💌</span> Fidéliser', link: '/retain/' },
        { text: '<span aria-hidden="true">📦</span> Monétiser', link: '/monetize/' },
        { text: '<span aria-hidden="true">❓</span> FAQ', link: '/faq/' },
```

- [ ] **Step 3 : Vérifier le nom accessible dans le navigateur**

Run (serveur de dev actif) :
```bash
node --input-type=module -e "
import { chromium } from 'playwright'
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 800 } })
await p.goto('http://localhost:5173/handbook/', { waitUntil: 'networkidle' })
const out = await p.evaluate(() => [...document.querySelectorAll('.VPNavBarMenuLink')].map(a => ({ text: a.textContent.trim(), hidden: !!a.querySelector('span[aria-hidden=\"true\"]') })))
console.log(JSON.stringify(out)); await b.close()"
```
Expected : quatre entrées, chacune avec `"hidden":true`, par exemple `{"text":"🎯 Recruter","hidden":true}`. Vérifier visuellement que le menu s'affiche comme avant (emoji + texte sur une ligne).

- [ ] **Step 4 : Commit**

```bash
git add .vitepress/config.ts
git commit -m "$(cat <<'EOF'
fix(a11y): emojis du menu masques aux lecteurs d'ecran (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3 : Focus clavier global

**Files :**
- Modify : `.vitepress/theme/style.css` (ajouter une section à la fin du fichier)

- [ ] **Step 1 : Vérifier l'échec**

Run : `node ui-check.tmp.mjs`
Expected : plusieurs `KO ... outline=auto 1px` (contour par défaut du navigateur, non `solid` 2 px) dans la partie focus clavier.

- [ ] **Step 2 : Ajouter la section en fin de `style.css`**

```css

/* ============================================================
   26. FOCUS VISIBLE GLOBAL — WCAG 2.4.7 / 2.4.11
   Contour net pour tout élément interactif au clavier :
   liens du contenu, barre latérale, sommaire, nav, pied de page,
   boutons, <summary>. Les règles par composant (section 20b)
   gardent leur propre rendu.
   ============================================================ */
a:focus-visible,
button:focus-visible,
summary:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 2px;
}
```

- [ ] **Step 3 : Vérifier la réussite**

Run : `node ui-check.tmp.mjs`
Expected : toutes les lignes de la partie focus sont `ok` (outline `solid` et largeur `2px`, sauf le lien « Skip to content » qui a son propre style non nul). La ligne « caractères par ligne » peut encore être `KO` (Task 4).

- [ ] **Step 4 : Commit**

```bash
git add .vitepress/theme/style.css
git commit -m "$(cat <<'EOF'
feat(a11y): contour de focus clavier global

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4 : Largeur de ligne

**Files :**
- Modify : `.vitepress/theme/style.css` (juste après la règle `.vp-doc p, .vp-doc li, .vp-doc blockquote` des lignes 186-191)

Le texte courant fait 14 px dans une colonne de 688 px, soit environ 95 caractères par ligne. On borne les blocs de premier niveau pour viser 65 à 80 caractères. L'interligne est déjà à 1,6 (lignes 190, 195) : rien à changer.

- [ ] **Step 1 : Ajouter la règle après la ligne 191**

```css

/* Largeur de ligne confortable : 62ch ≈ 70 caractères moyens.
   Limité aux blocs de premier niveau pour ne pas rétrécir tableaux,
   encadrés ni cartes. */
.vp-doc > div > :is(p, ul, ol) {
  max-width: 62ch;
}
```

- [ ] **Step 2 : Vérifier**

Run : `node ui-check.tmp.mjs`
Expected : `ok  caractères par ligne ≈ 7x (cible 65 à 80)` et exit code 0. Si la valeur est hors cible, ajuster `62ch` (± 4ch) et relancer. Prendre une capture de la page de guide pour contrôler à l'œil que listes et encadrés restent alignés :
`node --input-type=module -e "import { chromium } from 'playwright'; const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); await p.goto('http://localhost:5173/handbook/recruit/sponsored-mail/design-guide/best-practices', { waitUntil: 'networkidle' }); await p.screenshot({ path: '.playwright-mcp/lecture-apres.png' }); await b.close()"`
puis ouvrir `.playwright-mcp/lecture-apres.png`.

- [ ] **Step 3 : Commit**

```bash
git add .vitepress/theme/style.css
git commit -m "$(cat <<'EOF'
feat(theme): largeur de ligne du texte courant bornee a 62ch

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5 : Violations axe résiduelles (cibles tactiles et autres)

**Files :**
- Modify : `.vitepress/theme/style.css` (uniquement selon la sortie de l'audit)

- [ ] **Step 1 : Lancer l'audit complet**

Run : `node axe-audit.tmp.mjs`
Expected : soit `TOTAL violation nodes: 0` (passer directement au Step 4), soit une liste de lignes `thème/viewport page règle xN ex: sélecteur`.

- [ ] **Step 2 : Corriger chaque règle restante avec la table suivante**

| Règle axe | Correction (ajouter en fin de `style.css`, section « 27. CORRECTIONS AXE ») |
|---|---|
| `color-contrast` dans un bloc teinté | Remplacer la couleur du token concerné par une valeur ≥ 4,5:1 mesurée avec le script Python de la Task 1, Step 5 (en `.dark`, éclaircir ; en clair, assombrir). |
| `target-size` (mobile) | `@media (max-width: 768px) { <sélecteur de ex:> { display: inline-block; min-height: 24px; min-width: 24px; } }` en remplaçant `<sélecteur de ex:>` par le sélecteur affiché par l'audit. |
| `link-name`, `button-name`, `aria-*` sur un composant du thème | Ajouter `aria-label` dans `config.ts` si c'est un champ de config (par exemple `themeConfig.outline`, `langMenuLabel`) ; sinon noter la règle dans la description de la PR (composant interne VitePress, hors périmètre). |
| `nested-interactive` sur `.item[role="button"]` de la barre latérale (groupes repliables VitePress, 100 nœuds en référence, clair et sombre) | Composant interne du thème par défaut (`VPSidebarItem`), hors périmètre : ne pas le surcharger. Noter la règle et le nombre de nœuds dans la PR comme exception connue et proposer un chantier de suivi. |
| `scrollable-region-focusable` sur un bloc de code ou un tableau | `tabindex="0"` impossible en Markdown : noter dans la PR, hors périmètre. |

Après chaque correction, relancer `node axe-audit.tmp.mjs`.

- [ ] **Step 3 : Vérifier**

Run : `node axe-audit.tmp.mjs`
Expected : `TOTAL violation nodes: 0`, exit code 0, ou uniquement des violations documentées dans la table comme « hors périmètre » (les lister dans la PR).

- [ ] **Step 4 : Commit (seulement si `style.css` ou `config.ts` a changé)**

```bash
git add .vitepress/theme/style.css .vitepress/config.ts
git commit -m "$(cat <<'EOF'
fix(a11y): corrections des violations axe residuelles

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 6 : « Mis à jour le » sur chaque page

**Files :**
- Modify : `.vitepress/config.ts` (config racine : ajouter `lastUpdated: true` ; `themeConfig` : bloc `lastUpdated` ; locale `en.themeConfig` : bloc `lastUpdated`)

VitePress 1.6.4 : `lastUpdated: true` est une clé racine (lue via `git log`). Le texte se règle avec `themeConfig.lastUpdated.text`. Les locales fusionnent en profondeur avec le `themeConfig` racine (français par défaut).

- [ ] **Step 1 : Activer `lastUpdated`**

Dans `const config: any = defineConfig({`, juste après `cleanUrls: true,`, ajouter :

```ts
    lastUpdated: true,
```

- [ ] **Step 2 : Textes FR (racine) et EN (locale)**

Dans `themeConfig: {` (racine), juste après `siteTitle: false,`, ajouter :

```ts
      lastUpdated: {
        text: 'Mis à jour le',
        formatOptions: { dateStyle: 'long' },
      },
```

Dans `locales.en.themeConfig`, juste avant `nav: [`, ajouter :

```ts
          lastUpdated: { text: 'Last updated' },
```

- [ ] **Step 3 : Construire et vérifier le rendu SSR**

Run : `npm run docs:build`
Expected : build terminé sans erreur.

Run :
```bash
grep -c "VPLastUpdated" .vitepress/dist/recruit/index.html .vitepress/dist/en/recruit/index.html
grep -o "Mis à jour le[^<]*" .vitepress/dist/recruit/index.html | head -1
grep -o "Last updated[^<]*" .vitepress/dist/en/recruit/index.html | head -1
```
Expected : compteurs ≥ 1 pour les deux fichiers ; `Mis à jour le` pour FR, `Last updated` pour EN. La date elle-même est écrite côté client : la vérifier dans le navigateur au Step 4.

- [ ] **Step 4 : Vérifier la date affichée**

Run : `npx vitepress preview --port 4173` (arrière-plan), puis :
```bash
node --input-type=module -e "
import { chromium } from 'playwright'
const b = await chromium.launch(); const p = await b.newPage()
for (const u of ['recruit/', 'en/recruit/']) {
  await p.goto('http://localhost:4173/handbook/' + u, { waitUntil: 'networkidle' })
  console.log(u, '->', (await p.locator('.VPLastUpdated').innerText()).trim())
}
await b.close()"
```
Expected : `recruit/ -> Mis à jour le: 5 novembre 2026` (ou une date réelle de dernier commit, au format long français) et `en/recruit/ -> Last updated: November 5, 2026` (format long anglais). Arrêter le serveur de preview ensuite.

- [ ] **Step 5 : Commit**

```bash
git add .vitepress/config.ts
git commit -m "$(cat <<'EOF'
feat(theme): date de derniere mise a jour sur chaque page (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 7 : Pied de page avec le contact public

**Files :**
- Modify : `.vitepress/config.ts:544-548` (bloc `footer`)

- [ ] **Step 1 : Remplacer le message du pied de page**

Remplacer :

```ts
        message:
          'Contact Opérations : <a href="mailto:benoit@getinside.fr">benoit@getinside.fr</a> · Studio : <a href="mailto:studio@getinside.fr">studio@getinside.fr</a>',
```

par :

```ts
        message:
          'Contact : <a href="mailto:bonjour@getinside.fr">bonjour@getinside.fr</a> · Studio : <a href="mailto:studio@getinside.fr">studio@getinside.fr</a>',
```

(« Contact » sans l'adjectif, pour rester valable en FR et EN.)

- [ ] **Step 2 : Vérifier (build à la Task 8, Step 3)**

Après le build de la Task 8 : `grep -c "benoit@getinside.fr" .vitepress/dist/index.html` doit afficher `0` et `grep -c "bonjour@getinside.fr" .vitepress/dist/index.html` doit afficher `1` ou plus.

- [ ] **Step 3 : Commit**

```bash
git add .vitepress/config.ts
git commit -m "$(cat <<'EOF'
fix(footer): contact public bonjour@ a la place de l'adresse personnelle

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 8 : JSON-LD aligné sur getinside.fr

**Files :**
- Modify : `.vitepress/config.ts` lignes 50, 57 (`buildWebPageSchema`) et 180 (schéma `WebSite` dans `head`)

Les trois occurrences de `https://www.getinside.media/` deviennent `https://www.getinside.fr/`. Les liens `app.getinside.media` (nav, contenu) ne changent pas.

- [ ] **Step 1 : Remplacer les trois occurrences**

Ligne 50 : `sameAs: ['https://www.getinside.media/'],` → `sameAs: ['https://www.getinside.fr/'],`
Ligne 57 : `url: 'https://www.getinside.media/',` → `url: 'https://www.getinside.fr/',`
Ligne 180 : `url: 'https://www.getinside.media/',` → `url: 'https://www.getinside.fr/',`

Contrôle : `grep -n "www.getinside.media" .vitepress/config.ts` ne doit plus rien afficher.

- [ ] **Step 2 : Construire**

Run : `npm run docs:build`
Expected : build terminé sans erreur (sitemap, données structurées, llms.txt et redirections générés).

- [ ] **Step 3 : Vérifier le HTML produit**

Run :
```bash
grep -c "www.getinside.media" .vitepress/dist/index.html .vitepress/dist/recruit/index.html
grep -o '"publisher":{[^}]*}' .vitepress/dist/recruit/index.html | head -2
grep -c "benoit@getinside.fr" .vitepress/dist/index.html
grep -c "bonjour@getinside.fr" .vitepress/dist/index.html
```
Expected : `0` pour les deux premiers fichiers ; le `publisher` montre `"url":"https://www.getinside.fr/"` ; `0` pour `benoit@` ; ≥ 1 pour `bonjour@`.

- [ ] **Step 4 : Commit**

```bash
git add .vitepress/config.ts
git commit -m "$(cat <<'EOF'
fix(seo): editeur du JSON-LD pointe vers getinside.fr

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 9 : Vérification finale et nettoyage

**Files :**
- Delete : `axe-audit.tmp.mjs`, `ui-check.tmp.mjs`

- [ ] **Step 1 : Audit final sur le site construit**

Run : `npx vitepress preview --port 4173` (arrière-plan), puis :
`BASE=http://localhost:4173/handbook node axe-audit.tmp.mjs; BASE=http://localhost:4173/handbook node ui-check.tmp.mjs`
Expected : `TOTAL violation nodes: 0` (ou uniquement les exceptions documentées de la Task 5), et `ui-check` sans `KO`, exit code 0.

- [ ] **Step 2 : Contrôle visuel clair/sombre/mobile**

Capturer l'accueil et la page de guide en clair et en sombre, desktop et mobile (375 px), en réutilisant le one-liner de la Task 4 avec `localStorage['vitepress-theme-appearance']` réglé à `light` ou `dark`, et vérifier à l'œil : liens lisibles, boutons d'accueil inchangés (menthe vif, texte sombre), mode sombre identique à l'avant.

- [ ] **Step 3 : Contrôles du dépôt**

Run :
```bash
for f in $(find docs -name "*.md" -not -path "*/superpowers/*"); do if ! grep -q "^# " "$f" && ! grep -q "^layout:" "$f"; then echo "MISSING H1: $f"; fi; done
git status --short
```
Expected : aucun `MISSING H1` ; `git status` n'affiche que `?? axe-audit.tmp.mjs`, `?? ui-check.tmp.mjs` (et éventuellement `.playwright-mcp/`, déjà ignoré). Aucun fichier de `docs/` modifié : `git diff main --stat -- docs` est vide.

- [ ] **Step 4 : Arrêter les serveurs et supprimer les scripts jetables**

Arrêter les serveurs de dev et de preview, puis :
```bash
rm -f axe-audit.tmp.mjs ui-check.tmp.mjs
git status --short
```
Expected : sortie vide.

- [ ] **Step 5 : Récapitulatif pour la PR**

Préparer la description de PR : mesure de référence (Task 0 : N violations et règles) contre mesure finale (0), liste des commits, exceptions documentées de la Task 5, et captures avant/après de la page de guide. Utiliser ensuite `superpowers:finishing-a-development-branch` pour choisir entre PR et merge.
