# Contenu (chantier D) : plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal :** Étoffer les pages Fidéliser, Courrier adressé et Échantillonnage avec du contenu sourcé, ajouter quatre résumés « En bref » aux guides longs, et livrer la liste de questions pour l'équipe.

**Architecture :** Édition de 14 fichiers Markdown de `docs/` (sept paires FR/EN strictement parallèles) et création d'un fichier de questions hors `docs/`. Aucun code, aucune nouvelle page, aucun changement de `config.ts`, de sidebar ni de redirections.

**Tech Stack :** VitePress 1.6.4 (Markdown, conteneurs `:::`, composants HTML `gi-step`), `scripts/check-content.sh`, Vale (`.vale.ini`), Node 24.

**Spec :** `superpowers/specs/2026-11-05-contenu-chantier-d-design.md`

---

## Règles pour tout le plan

- Répertoire de travail : `/Users/benoitprentout/github repos/handbook/.claude/worktrees/site-improvement-f2f8de`, branche `docs/contenu-chantier-d` (déjà créée, ne pas en changer).
- `git add` des fichiers nommés uniquement (jamais `git add .` ni `-A`). Ne jamais committer `.vitepress/dist`.
- Messages de commit en français, style conventionnel (`docs: ...`), terminés par :
  `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`
- **Parité FR/EN :** chaque modification FR a sa version EN dans le même commit.
- **Vocabulaire :** aucune occurrence de « annonceur », « distributeur », « marques du réseau », « publisher », « advertiser », « distributor », « network brands », « retail media », « asile colis », « e-commerçant », « agence », « agency ». Aucun prix, plan ni ROAS. Pas de tiret cadratin `—` (Vale `EmDash`). Éviter « essentiel », « crucial », « permet de », « véritables », « au cœur de ». Phrases d'au plus 20 mots.
- Ne pas modifier le frontmatter YAML des pages. Les titres de conteneurs (`::: tip En bref`) ne sont pas signalés par Vale.
- **Ne rien ajouter qui ne figure pas dans ce plan.** Si une donnée manque (délai, format, volume), on ne l'invente pas : elle va dans le fichier de questions (Task 5).
- Composant d'étape, tel que défini par le projet (le dernier numéro d'un bloc porte la classe `done`) :

```html
<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Titre</h3>
    <p>Texte.</p>
  </div>
</div>
```

## Structure des fichiers

| Fichier | Action |
|---|---|
| `docs/retain/index.md` et `docs/en/retain/index.md` | Modifier |
| `docs/retain/direct-mail/index.md` et `docs/en/retain/direct-mail/index.md` | Modifier |
| `docs/recruit/sampling/index.md` et `docs/en/recruit/sampling/index.md` | Modifier |
| `docs/recruit/sponsored-mail/design-guide/best-practices.md` et version `en/` | Modifier (résumé) |
| `docs/recruit/sponsored-mail/design-guide/index.md` et version `en/` | Modifier (résumé) |
| `docs/monetize/onboarding-process.md` et version `en/` | Modifier (résumé) |
| `docs/recruit/sustainability.md` et version `en/` | Modifier (résumé) |
| `superpowers/fact-check/2026-11-05-questions-equipe.md` | Créer |

---

### Task 1 : Page Fidéliser (hub)

**Files :**
- Modify : `docs/retain/index.md`
- Modify : `docs/en/retain/index.md`

La section actuelle « Comment ça marche » ne contient que les deux cartes de leviers : on la renomme, puis on ajoute les étapes et les preuves avant « Par où commencer ».

- [ ] **Step 1 : État initial**

Run : `grep -n "^## " docs/retain/index.md docs/en/retain/index.md`
Expected : FR `Comment ça marche`, `Par où commencer`, `Services & ressources` ; EN `How it works`, `Where to start`, `Services & resources`.

- [ ] **Step 2 : FR, renommer la section des leviers**

Remplacer (`docs/retain/index.md`) :

```markdown
## Comment ça marche

<div class="gi-value-grid">
```

par :

```markdown
## Deux leviers de fidélisation

<div class="gi-value-grid">
```

- [ ] **Step 3 : FR, ajouter étapes et preuves avant « Par où commencer »**

Remplacer la ligne `## Par où commencer` par le bloc suivant suivi de cette même ligne :

```markdown
## Comment ça marche

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Choisissez votre audience</h3>
    <p>Vos clients connus, et en priorité ceux qui n'ouvrent plus vos e-mails.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Choisissez le canal</h3>
    <p>Un courrier adressé à ces clients, ou une offre dédiée glissée dans chaque colis que vous livrez.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Configurez la campagne</h3>
    <p>Personnalisez la création et le message, ou confiez la campagne à notre équipe : elle gère la production, le contrôle qualité et la livraison.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">4</div>
  <div class="gi-step-body">
    <h3>Suivez les résultats</h3>
    <p>Les scans et les achats générés se suivent campagne après campagne, depuis la plateforme.</p>
  </div>
</div>

## Pourquoi ça marche

- **98 % de délivrabilité, 100 % d'attention :** on ouvre son courrier et ses colis, même quand on n'ouvre plus vos e-mails.
- **86 % des décisions d'achat se prennent au domicile :** votre offre arrive là où elles se discutent.

## Par où commencer
```

- [ ] **Step 4 : EN, renommer la section des leviers**

Remplacer (`docs/en/retain/index.md`) :

```markdown
## How it works

<div class="gi-value-grid">
```

par :

```markdown
## Two retention levers

<div class="gi-value-grid">
```

- [ ] **Step 5 : EN, ajouter étapes et preuves avant « Where to start »**

Remplacer la ligne `## Where to start` par le bloc suivant suivi de cette même ligne :

```markdown
## How it works

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Choose your audience</h3>
    <p>Your known customers, starting with those who no longer open your emails.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Choose the channel</h3>
    <p>A piece of direct mail addressed to those customers, or a dedicated offer slipped into every parcel you ship.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Set up the campaign</h3>
    <p>Customize the creative and the message, or hand the campaign to our team: it handles production, quality control and delivery.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">4</div>
  <div class="gi-step-body">
    <h3>Track the results</h3>
    <p>Scans and the purchases they generate are tracked campaign after campaign, from the platform.</p>
  </div>
</div>

## Why it works

- **98% deliverability, 100% attention:** people open their mail and their parcels, even when they no longer open your emails.
- **86% of purchase decisions are made at home:** your offer arrives where they are discussed.

## Where to start
```

- [ ] **Step 6 : Vérifier**

Run :
```bash
grep -n "^## " docs/retain/index.md docs/en/retain/index.md
wc -w docs/retain/index.md docs/en/retain/index.md
scripts/check-content.sh docs/retain/index.md docs/en/retain/index.md
```
Expected : FR `Deux leviers de fidélisation`, `Comment ça marche`, `Pourquoi ça marche`, `Par où commencer`, `Services & ressources` ; EN `Two retention levers`, `How it works`, `Why it works`, `Where to start`, `Services & resources` ; 300 à 450 mots (frontmatter compris, tolérance 480) ; `OK`.

- [ ] **Step 7 : Commit**

```bash
git add docs/retain/index.md docs/en/retain/index.md
git commit -m "$(cat <<'EOF'
docs(retain): parcours en quatre étapes et preuves sur la page Fidéliser (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2 : Page Courrier adressé

**Files :**
- Modify : `docs/retain/direct-mail/index.md`
- Modify : `docs/en/retain/direct-mail/index.md`

Ordre final des sections : Deux leviers, encadré « Résultat constaté », **Ce qu'il vous faut**, **Comment ça marche**, Pourquoi ça marche, Conformité (étoffée).

- [ ] **Step 1 : FR, insérer « Ce qu'il vous faut » et « Comment ça marche » avant « Pourquoi ça marche »**

Remplacer la ligne `## Pourquoi ça marche` par le bloc suivant suivi de cette même ligne :

```markdown
## Ce qu'il vous faut

Un fichier clients avec l'adresse postale de chaque client. Les clients inactifs par e-mail sont la cible naturelle du courrier adressé.

## Comment ça marche

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Ciblez vos inactifs</h3>
    <p>Identifiez dans votre base les clients qui n'ouvrent plus vos e-mails.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Créez votre courrier</h3>
    <p>Rédigez une offre dédiée et personnalisez le message : chaque courrier est adressé nommément au client.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Lancez la campagne</h3>
    <p>Pilotez-la depuis la plateforme, ou confiez-la à notre équipe, qui gère la production, le contrôle qualité et la livraison.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">4</div>
  <div class="gi-step-body">
    <h3>Suivez les résultats</h3>
    <p>Suivez les scans et les achats générés, campagne après campagne.</p>
  </div>
</div>

## Pourquoi ça marche
```

- [ ] **Step 2 : FR, étoffer la conformité**

Remplacer :

```markdown
RGPD fondé sur l'intérêt légitime, avec droit d'opposition mentionné sur chaque envoi.
```

par :

```markdown
RGPD fondé sur l'intérêt légitime, avec droit d'opposition mentionné sur chaque envoi. D'après la CNIL :

- Les personnes sont informées, au moment où leur adresse postale est collectée, qu'elle servira à de la prospection.
- Elles peuvent s'y opposer simplement et gratuitement, à la collecte et à chaque envoi.
- La trace des oppositions se conserve : la CNIL recommande au moins 3 ans.
```

- [ ] **Step 3 : EN, insérer « What you need » et « How it works » avant « Why it works »**

Remplacer la ligne `## Why it works` par le bloc suivant suivi de cette même ligne :

```markdown
## What you need

A customer file with each customer's postal address. Customers inactive by email are the natural target for direct mail.

## How it works

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Target your inactive customers</h3>
    <p>Identify in your database the customers who no longer open your emails.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Create your mailing</h3>
    <p>Write a dedicated offer and personalize the message: each piece of mail is addressed to the customer by name.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Launch the campaign</h3>
    <p>Run it from the platform, or hand it to our team, which handles production, quality control and delivery.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">4</div>
  <div class="gi-step-body">
    <h3>Track the results</h3>
    <p>Follow the scans and the purchases they generate, campaign after campaign.</p>
  </div>
</div>

## Why it works
```

- [ ] **Step 4 : EN, étoffer la conformité**

Remplacer :

```markdown
GDPR processing based on legitimate interest, with the right to object stated on every mailing.
```

par :

```markdown
GDPR processing based on legitimate interest, with the right to object stated on every mailing. According to the CNIL, the French data protection authority:

- People are told, when their postal address is collected, that it will be used for marketing.
- They can object simply and free of charge, at collection and on every mailing.
- Keep a record of objections: the CNIL recommends keeping it for at least 3 years.
```

- [ ] **Step 5 : Vérifier**

Run :
```bash
grep -n "^## " docs/retain/direct-mail/index.md docs/en/retain/direct-mail/index.md
wc -w docs/retain/direct-mail/index.md docs/en/retain/direct-mail/index.md
scripts/check-content.sh docs/retain/direct-mail/index.md docs/en/retain/direct-mail/index.md
```
Expected : FR `Deux leviers de fidélisation`, `Ce qu'il vous faut`, `Comment ça marche`, `Pourquoi ça marche`, `Conformité` ; EN `Two retention levers`, `What you need`, `How it works`, `Why it works`, `Compliance` ; 400 à 500 mots (frontmatter compris) ; `OK`.

- [ ] **Step 6 : Commit**

```bash
git add docs/retain/direct-mail/index.md docs/en/retain/direct-mail/index.md
git commit -m "$(cat <<'EOF'
docs(retain): courrier adressé, parcours, prérequis et conformité CNIL (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3 : Page Échantillonnage

**Files :**
- Modify : `docs/recruit/sampling/index.md`
- Modify : `docs/en/recruit/sampling/index.md`

- [ ] **Step 1 : FR, insérer « Comment ça marche » avant « Exemples de résultats »**

Remplacer la ligne `## Exemples de résultats` par le bloc suivant suivi de cette même ligne :

```markdown
## Comment ça marche

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Choisissez le produit</h3>
    <p>Un échantillon représentatif de votre produit, en format découverte.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Il accompagne une commande</h3>
    <p>Il est glissé dans les commandes de marques affinitaires, ou remis lors d'un événement affinitaire, avec un flyer qui porte votre offre selon la campagne.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">3</div>
  <div class="gi-step-body">
    <h3>Le client le teste</h3>
    <p>Il essaie le produit chez lui, puis passe commande, par exemple grâce à l'offre promotionnelle du flyer.</p>
  </div>
</div>

**Mesure :** un QR code ou un code unique relie l'échantillon à l'achat.

## Exemples de résultats
```

- [ ] **Step 2 : EN, insérer « How it works » avant « Example results »**

Remplacer la ligne `## Example results` par le bloc suivant suivi de cette même ligne :

```markdown
## How it works

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Choose the product</h3>
    <p>A representative sample of your product, in a trial size.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>It goes with an order</h3>
    <p>It is slipped into the orders of affinity brands, or handed out at an affinity event, with a flyer carrying your offer depending on the campaign.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">3</div>
  <div class="gi-step-body">
    <h3>The customer tries it</h3>
    <p>They try the product at home, then place an order, for example thanks to the promotional offer on the flyer.</p>
  </div>
</div>

**Measurement:** a QR code or a unique code links the sample to the purchase.

## Example results
```

- [ ] **Step 3 : Vérifier**

Run :
```bash
grep -n "^## " docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md
wc -w docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md
scripts/check-content.sh docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md
```
Expected : FR `Pour quelles marques ?`, `Comment ça marche`, `Exemples de résultats`, `Conformité` ; EN `Which brands?`, `How it works`, `Example results`, `Compliance` ; 350 à 450 mots (frontmatter compris, tolérance 480) ; `OK`. Le bloc `::: info Loi AGEC` du chantier C est intact.

- [ ] **Step 4 : Commit**

```bash
git add docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md
git commit -m "$(cat <<'EOF'
docs(sampling): parcours en trois étapes et mesure sur la page Échantillonnage (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4 : Résumés « En bref » sur quatre guides longs

**Files :** huit fichiers (voir la table de structure). Chaque résumé est un encadré `::: tip En bref` (FR) ou `::: tip In short` (EN), séparé du reste par une ligne vide avant et après, de 4 puces qui résument **uniquement** le contenu existant de la page.

**Gabarit de l'encadré (FR) :**

```markdown
::: tip En bref
- Puce 1.
- Puce 2.
- Puce 3.
- Puce 4.
:::
```

- [ ] **Step 1 : Anatomie d'un flyer, FR** (`docs/recruit/sponsored-mail/design-guide/best-practices.md`)

Avant de modifier : `grep -n "^---$" docs/recruit/sponsored-mail/design-guide/best-practices.md | head -3` ; la première ligne `---` après le H1 (ligne 16) précède `## La hiérarchie du message`. Remplacer :

```markdown
---

## La hiérarchie du message
```

par :

```markdown
::: tip En bref
- Le lecteur balaie le flyer en Z : accroche bénéfice, promesse, preuve, offre, puis une seule action, le QR code, en bas à droite.
- Le recto convainc, le verso rassure et informe. Peu d'éléments, un seul point focal.
- Les mentions légales sont regroupées en un bloc compact (6 pt, 5 pt au minimum). La landing page reprend exactement l'offre et charge en moins de 3 secondes sur mobile.
- Testez une seule variable à la fois et renouvelez la création environ chaque trimestre.
:::

---

## La hiérarchie du message
```

(Le bloc `---` qui suit le résumé est conservé : le résumé s'insère avant le séparateur existant, après le paragraphe d'introduction.)

- [ ] **Step 2 : Anatomie d'un flyer, EN** (`docs/en/recruit/sponsored-mail/design-guide/best-practices.md`)

Remplacer :

```markdown
---

## The message hierarchy
```

par :

```markdown
::: tip In short
- Readers scan the flyer in a Z: benefit hook, promise, proof, offer, then a single call to action, the QR code, at the bottom right.
- The front convinces, the back reassures and informs. Keep few elements and a single focal point.
- Group the legal notices in one compact block (6 pt, 5 pt at minimum). The landing page repeats the offer exactly and loads in under 3 seconds on mobile.
- Test one variable at a time and refresh the creative about every quarter.
:::

---

## The message hierarchy
```

- [ ] **Step 3 : Guide de conception, FR** (`docs/recruit/sponsored-mail/design-guide/index.md`)

Remplacer la ligne `:::warning Validation obligatoire` par le bloc suivant (avec ligne vide entre l'encadré et la ligne d'origine) :

```markdown
::: tip En bref
- Quatre étapes : stratégie, création, légal, puis BAT soumis sur la plateforme et validé par getinside avant toute impression.
- Six mécaniques possibles (promotion, drive to store, contenu, jeux, drive to app, feedback), toutes avec un QR code comme point d'entrée.
- L'offre décide : une valeur monétaire plutôt qu'un pourcentage, valable au moins 3 mois, avec un code promo unique par marque qui diffuse.
- Le scan se fait sur smartphone : landing page responsive, rapide et simple. QR code de 14 × 14 mm au minimum.
:::

:::warning Validation obligatoire
```

- [ ] **Step 4 : Guide de conception, EN** (`docs/en/recruit/sponsored-mail/design-guide/index.md`)

Remplacer la ligne `:::warning Mandatory validation` par :

```markdown
::: tip In short
- Four steps: strategy, creative, legal, then a digital proof (BAT) submitted on the platform and validated by getinside before any printing.
- Six mechanics are available (promotion, drive to store, content, games, drive to app, feedback), all with a QR code as the entry point.
- The offer decides: a monetary value rather than a percentage, valid for at least 3 months, with a unique promo code for each brand that distributes the flyer.
- Scanning happens on a smartphone: the landing page must be responsive, fast and simple. The QR code is at least 14 × 14 mm.
:::

:::warning Mandatory validation
```

Avant de commiter, vérifier dans chaque page que les faits du résumé y figurent bien (six mécaniques, 3 mois, 14 × 14 mm, code promo unique par marque qui diffuse) : `grep -n "14 × 14\|3 mois\|3 months" docs/recruit/sponsored-mail/design-guide/index.md docs/en/recruit/sponsored-mail/design-guide/index.md`. Si un fait manque ou diffère, corriger la puce pour coller au texte de la page.

- [ ] **Step 5 : Onboarding Monétiser, FR** (`docs/monetize/onboarding-process.md`)

Remplacer la ligne `## Phase 1 : Configuration et Activation` par :

```markdown
::: tip En bref
- Trois phases : configuration et activation (démo, logistique, audiences, call de contrôle), gestion des campagnes, puis accélération.
- Répondez à toute proposition de campagne sous 48 heures ouvrées : le silence vaut refus tacite et entraîne une pénalité contractuelle. Négociez plutôt que de refuser.
- Vos données clients restent les vôtres : getinside agit comme tiers de confiance et n'y accède pas directement.
- Vous gardez un droit de veto, dans les limites décrites en bas de page.
:::

## Phase 1 : Configuration et Activation
```

- [ ] **Step 6 : Onboarding Monétiser, EN** (`docs/en/monetize/onboarding-process.md`)

Remplacer la ligne `## Phase 1: Configuration and Activation` par :

```markdown
::: tip In short
- Three phases: configuration and activation (demo, logistics, audiences, review call), campaign management, then acceleration.
- Answer every campaign proposal within 48 business hours: silence counts as a tacit refusal and triggers a contractual penalty. Negotiate rather than refuse.
- Your customer data stays yours: getinside acts as a trusted third party and has no direct access to it.
- You keep a right of veto, within the limits described at the bottom of the page.
:::

## Phase 1: Configuration and Activation
```

Vérifier que le texte de chaque page contient bien ces faits : `grep -nE "48" docs/monetize/onboarding-process.md docs/en/monetize/onboarding-process.md`.

- [ ] **Step 7 : RSE, FR** (`docs/recruit/sustainability.md`)

La page commence par le H1, un paragraphe, puis `<div class="gi-cert-row">`. Vérifier d'abord : `grep -c 'class="gi-cert-row"' docs/recruit/sustainability.md` doit afficher `1`. Remplacer la ligne `<div class="gi-cert-row">` par :

```markdown
::: tip En bref
- L'insert voyage dans un colis déjà expédié : aucune enveloppe ni tournée de distribution en plus.
- Les volumes sont calés sur les prévisions de diffusion : on imprime ce qui sera distribué.
- Impression en France, sur papier certifié FSC/PEFC et encres végétales, dans des ateliers Imprim'Vert et ISO 14001.
- Trois réglages réduisent encore l'impact : le format (A6 plutôt qu'A5), le QR code dynamique et le papier recyclé sur devis.
:::

<div class="gi-cert-row">
```

- [ ] **Step 8 : RSE, EN** (`docs/en/recruit/sustainability.md`)

Vérifier `grep -c 'class="gi-cert-row"' docs/en/recruit/sustainability.md` = `1`, puis remplacer `<div class="gi-cert-row">` par :

```markdown
::: tip In short
- The insert travels in a parcel that is already shipped: no extra envelope, no extra delivery round.
- Volumes are based on delivery forecasts: only what will be distributed is printed.
- Printed in France on FSC/PEFC-certified paper with vegetable-based inks, in Imprim'Vert and ISO 14001 workshops.
- Three settings cut the impact further: the format (A6 rather than A5), the dynamic QR code, and recycled paper on quote.
:::

<div class="gi-cert-row">
```

- [ ] **Step 9 : Vérifier**

Run :
```bash
F=(docs/recruit/sponsored-mail/design-guide/best-practices.md docs/en/recruit/sponsored-mail/design-guide/best-practices.md docs/recruit/sponsored-mail/design-guide/index.md docs/en/recruit/sponsored-mail/design-guide/index.md docs/monetize/onboarding-process.md docs/en/monetize/onboarding-process.md docs/recruit/sustainability.md docs/en/recruit/sustainability.md)
grep -c "^::: tip En bref\|^::: tip In short" "${F[@]}"
scripts/check-content.sh "${F[@]}"
```
Expected : `1` pour chacun des huit fichiers ; `OK`. Ouvrir une page avec `npm run docs:dev` n'est pas requis ; le rendu des conteneurs est contrôlé par le build à la Task 6.

- [ ] **Step 10 : Commit**

```bash
git add docs/recruit/sponsored-mail/design-guide/best-practices.md docs/en/recruit/sponsored-mail/design-guide/best-practices.md docs/recruit/sponsored-mail/design-guide/index.md docs/en/recruit/sponsored-mail/design-guide/index.md docs/monetize/onboarding-process.md docs/en/monetize/onboarding-process.md docs/recruit/sustainability.md docs/en/recruit/sustainability.md
git commit -m "$(cat <<'EOF'
docs: résumés En bref en tête de quatre guides longs (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5 : Fichier de questions pour l'équipe

**Files :**
- Create : `superpowers/fact-check/2026-11-05-questions-equipe.md`

- [ ] **Step 1 : Créer le fichier avec ce contenu**

```markdown
# Questions ouvertes pour l'équipe : chantier D

Date : 2026-11-05. Fichier interne, non publié. Ces points bloquent l'étoffement des pages Fidéliser, Courrier adressé et Échantillonnage au-delà de ce que le guide de messaging, le deck et la CNIL soutiennent. Réponses attendues de l'équipe, à reporter dans la colonne « Réponse ».

## À renseigner pour compléter les pages

| # | Question | Page concernée | Ce que la réponse débloque | Réponse |
|---|---|---|---|---|
| 1 | Qu'est-ce qu'un « client inactif e-mail » (durée sans ouverture, critère exact) ? | `retain/index.md`, `retain/direct-mail/index.md` | Une définition claire de la cible | |
| 2 | Fichier clients : champs obligatoires, format, volume minimum, mode de dépôt ? | `retain/direct-mail/index.md` | Une section « Préparer votre fichier » | |
| 3 | Courrier adressé : formats disponibles, niveau de personnalisation, qui imprime et poste ? | `retain/direct-mail/index.md` | Une section « Formats » | |
| 4 | Courrier adressé : délais de production et d'envoi (de la validation à la boîte aux lettres) ? | `retain/direct-mail/index.md` | Un calendrier type | |
| 5 | Échantillons : formats et poids acceptés, contraintes d'assemblage ? | `recruit/sampling/index.md` | Une section « Spécifications » | |
| 6 | Échantillons : qui expédie, et quand ? | `recruit/sampling/index.md` | Une section « Logistique » | |
| 7 | Échantillons : comment la demande préalable du consommateur est-elle recueillie ? | `recruit/sampling/index.md`, `start-here/index.md` | Une explication de la conformité AGEC côté getinside | |
| 8 | Les étapes de parcours (choisir, configurer, suivre) inspirées de getinside.fr correspondent-elles au parcours réel dans la plateforme ? | `retain/index.md`, `retain/direct-mail/index.md`, `recruit/sampling/index.md` | Validation, ou correction, des trois blocs « Comment ça marche » | |
| 9 | La mesure d'un échantillon se fait-elle bien par QR code ou code unique ? | `recruit/sampling/index.md` | Validation de la phrase « Mesure » | |

## À valider avant tout usage

| # | Sujet | Contexte | Décision attendue |
|---|---|---|---|
| 10 | Les quatre leviers du site (événements de vie, réactivation, réachat, parrainage) | getinside.fr les affiche pour Fidéliser ; le guide de messaging ne valide que deux leviers (réactivation, up-sell colis) et note « ICP Fidéliser : en cours » | Les adopter dans le handbook, ou rester sur deux leviers |
| 11 | Chiffres « 98 % contre 30 % pour l'e-mail », « 8 % d'engagement contre moins de 1 % », « 17 jours » | Présents sur getinside.fr, absents du guide de messaging | Les intégrer dans le guide, puis dans le handbook, ou les écarter |
| 12 | TOP CAC pour Recruter : 2,06 € (deck « design system » du 3 novembre) contre 1,21 € (guide de messaging du 30 octobre et getinside.fr) | Le handbook affiche 1,21 € | Confirmer la bonne valeur et corriger le document en tort |
| 13 | Le terme « agence » et la « délégation de campagne » | getinside.fr utilise « Notre agence » ; le guide dit « à clarifier avec l'équipe » ; le handbook dit « confiez vos campagnes à notre équipe » | Trancher le vocabulaire public |
```

- [ ] **Step 2 : Vérifier**

Run : `grep -c "^| [0-9]" superpowers/fact-check/2026-11-05-questions-equipe.md`
Expected : `13`.

- [ ] **Step 3 : Commit**

```bash
git add superpowers/fact-check/2026-11-05-questions-equipe.md
git commit -m "$(cat <<'EOF'
docs(fact-check): questions ouvertes pour l'équipe (chantier D)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 6 : Vérification finale

- [ ] **Step 1 : Parité et termes bannis sur les quatorze fichiers**

Run :
```bash
F=(docs/retain/index.md docs/en/retain/index.md docs/retain/direct-mail/index.md docs/en/retain/direct-mail/index.md docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md docs/recruit/sponsored-mail/design-guide/best-practices.md docs/en/recruit/sponsored-mail/design-guide/best-practices.md docs/recruit/sponsored-mail/design-guide/index.md docs/en/recruit/sponsored-mail/design-guide/index.md docs/monetize/onboarding-process.md docs/en/monetize/onboarding-process.md docs/recruit/sustainability.md docs/en/recruit/sustainability.md)
scripts/check-content.sh "${F[@]}"
```
Expected : `OK`. (Sous zsh, utiliser un tableau comme ci-dessus ; une variable simple ne se découpe pas.)

- [ ] **Step 2 : Vale**

Run :
```bash
vale --output=JSON "${F[@]}" | python3 -c "
import json,sys
d=json.load(sys.stdin)
for f,v in d.items():
    for a in v: print(f.replace('docs/',''), a['Line'], a['Check'], a['Message'][:70])
print(sum(len(v) for v in d.values()), 'alertes')"
```
Expected : 0 alerte sur les lignes ajoutées (les alertes préexistantes sur frontmatter et titres de conteneurs sont tolérées). Toute alerte sur une phrase ajoutée (`EmDash`, `AIVocab*`) se corrige par reformulation ; une alerte `SentenceLength` sur une phrase ajoutée se corrige aussi si la phrase dépasse 20 mots.

- [ ] **Step 3 : Audit H1 et exclusions**

Run :
```bash
for f in $(find docs -name "*.md" -not -path "*/superpowers/*"); do if ! grep -q "^# " "$f" && ! grep -q "^layout:" "$f"; then echo "MISSING H1: $f"; fi; done
git diff origin/main...HEAD -U0 -- docs | grep '^+' | grep -vE '^\+\+\+' | grep -iE "agence|agency|ROAS|4,2|30 % contre|8 % d'engagement|17 jours|€|euro" || echo "aucune exclusion"
```
Expected : aucun `MISSING H1` ; `aucune exclusion`. Si une ligne ajoutée contient une de ces chaînes, la corriger.

- [ ] **Step 4 : Build**

Run : `npm run docs:build > /tmp/d-build.log 2>&1; echo "exit $?"; grep -ci "error" /tmp/d-build.log; tail -2 /tmp/d-build.log`
Expected : `exit 0`, `0`, et « rendering pages... ». Contrôle du HTML produit : `grep -c "En bref" .vitepress/dist/recruit/sponsored-mail/design-guide/best-practices.html` affiche au moins `1`, et `grep -c "In short" .vitepress/dist/en/recruit/sustainability.html` au moins `1`.

- [ ] **Step 5 : Fichiers modifiés et mots**

Run :
```bash
git diff --name-only origin/main...HEAD -- docs
wc -w docs/retain/index.md docs/retain/direct-mail/index.md docs/recruit/sampling/index.md
git status --short
```
Expected : exactement les 14 fichiers de `docs/` de la table de structure ; mots FR entre 300 et 500 pour les trois pages ; `git status` vide.
