# Repositionnement du handbook — plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Aligner le handbook (FR + EN) sur le nouveau messaging getinside en 3 phases : pages d'entrée, pages canaux, nettoyage des tarifs.

**Architecture:** Site VitePress statique (`srcDir: docs`). Contenu markdown bilingue (`docs/` en FR, `docs/en/` en EN, même arborescence). Sidebar et nav sont déclarées à la main dans `.vitepress/config.ts`. Un script de contrôle (`scripts/check-content.sh`) fait office de test : parité FR/EN et termes à bannir.

**Tech Stack:** VitePress 1.x, markdown, YAML frontmatter, blocs HTML `gi-*` (voir `CLAUDE.md`), bash.

**Spec :** `superpowers/specs/2026-11-03-repositionnement-messaging-design.md`

**Branche :** `docs/repositionnement-messaging`

**Règles transverses (à relire avant chaque tâche) :**
- Chaque page a un frontmatter `title`, `description`, `keywords` (liste). Pas de « Retail Media », « asile colis », « e-commerçants », « e-retailers », « 250+ », « 300+ annonceurs », « 950+ » dans les pages touchées.
- Aucun tarif, commission ou palier de reversement. Les CAC et revenus de cas clients restent (ce sont des résultats, pas des tarifs).
- FR et EN sont modifiés dans la même tâche, avec la même structure.
- Vocabulaire : « marques du réseau » (côté monétisation), « annonceurs » (côté recrutement), « Insertion colis », « Courrier adressé », « Échantillonnage ».
- Les commandes `grep` excluent `.vitepress/dist` et `.vitepress/cache` (build output ignoré par git).

---

## Fichiers

**Créés**
- `scripts/check-content.sh` : parité FR/EN + termes bannis sur une liste de fichiers.
- `docs/advertisers/direct-mail/index.md`, `docs/en/advertisers/direct-mail/index.md` : canal courrier adressé.
- `docs/advertisers/sampling/index.md`, `docs/en/advertisers/sampling/index.md` : canal échantillonnage.

**Modifiés (phase 1)**
- `docs/index.md`, `docs/en/index.md`
- `docs/start-here/index.md`, `docs/en/start-here/index.md`
- `docs/start-here/why-it-works.md`, `docs/en/start-here/why-it-works.md`
- `docs/advertisers/index.md`, `docs/en/advertisers/index.md`
- `docs/publishers/index.md`, `docs/en/publishers/index.md`
- `docs/glossary.md`, `docs/en/glossary.md`
- `docs/resources/case-studies.md`, `docs/en/resources/case-studies.md`
- `docs/resources/index.md`, `docs/en/resources/index.md`
- `docs/faq/index.md`, `docs/en/faq/index.md`
- `.vitepress/config.ts` (description, balises meta, nav), `.vitepress/theme/index.ts` (descriptions de repli)

**Modifiés (phase 2)**
- `.vitepress/config.ts` (sidebar FR et EN)
- `docs/advertisers/sponsored-mail/index.md`, `docs/en/advertisers/sponsored-mail/index.md`
- `docs/publishers/sponsored-mail/index.md`, `docs/en/publishers/sponsored-mail/index.md`

**Modifiés / supprimés (phase 3)**
- Supprimés : `docs/advertisers/pricing.md`, `docs/publishers/pricing.md`, `docs/en/advertisers/pricing.md`, `docs/en/publishers/pricing.md`
- Tarifs retirés : voir Task 11.
- `README.md`, `seo-keywords.md`, `.vitepress/SEO-GUIDELINES.md` : vocabulaire.

---

## Phase 0 — Outil de contrôle

### Task 0: Script de contrôle

**Files:**
- Create: `scripts/check-content.sh`

- [ ] **Step 1: Écrire le script**

```bash
#!/usr/bin/env bash
# Usage: scripts/check-content.sh [fichier.md ...]
# Sans argument : parité FR/EN seulement.
# Avec arguments : parité + termes bannis dans ces fichiers.
set -uo pipefail
cd "$(dirname "$0")/.."
fail=0

fr=$(cd docs && find . -name '*.md' -not -path './en/*' -not -name '404.md' | sort)
en=$(cd docs/en && find . -name '*.md' | sort)
if ! diff_out=$(comm -3 <(echo "$fr") <(echo "$en")) || [ -n "$diff_out" ]; then
  echo "PARITE FR/EN KO (colonne 1 = FR seul, colonne 2 = EN seul) :"
  echo "$diff_out"
  fail=1
fi

BANNED='250\+|300\+ annonceurs|300\+ active advertisers|950\+|[Rr]etail [Mm]edia|asile colis|e-commerçants|e-retailers'
for f in "$@"; do
  if grep -nE "$BANNED" "$f"; then
    echo "TERME BANNI dans $f"
    fail=1
  fi
done

[ "$fail" -eq 0 ] && echo "OK"
exit "$fail"
```

- [ ] **Step 2: Le rendre exécutable et vérifier la base de départ**

Run: `chmod +x scripts/check-content.sh && scripts/check-content.sh docs/index.md; echo "exit=$?"`
Expected: la parité est OK (le script ignore `404.md`) et `docs/index.md` remonte des hits (`250+`, `950+`, `Retail Media`), puis `exit=1`. C'est l'état « test rouge » avant la phase 1.

- [ ] **Step 3: Commit**

```bash
git add scripts/check-content.sh
git commit -m "chore: script de contrôle parité FR/EN et termes bannis

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

## Phase 1 — Pages d'entrée

### Task 1: Accueil FR et EN

**Files:**
- Modify: `docs/index.md` (remplacer tout le fichier)
- Modify: `docs/en/index.md` (remplacer tout le fichier)

- [ ] **Step 1: Remplacer `docs/index.md`**

```markdown
---
title: getinside Handbook
layout: home
description: Solution marketing par le colis et le courrier adressé à l'ère agentique. Recrutez, fidélisez et monétisez vos clients avec getinside.
keywords:
  - marketing par le colis
  - courrier adressé
  - insertion colis
  - échantillonnage
  - acquisition client
  - fidélisation client
  - monétisation
  - getinside

hero:
  name: "getinside"
  text: "Le marketing qui touche."
  tagline: "Recrutez, fidélisez et monétisez vos clients avec le colis et le courrier adressé."
  image:
    src: /images/gi-keyvisual.svg
    alt: getinside
  actions:
    - theme: brand
      text: Démarrer ici
      link: /start-here/

features:
  - icon: 🎯
    title: Recruter
    details: Touchez vos futurs clients à travers les marques qu'ils consomment déjà, en délivrant vos campagnes auprès d'audiences affinitaires. Avec un budget média, ou en échange. Top CAC : 1,21 €.
    link: /advertisers/
  - icon: 💌
    title: Fidéliser
    details: Retrouvez par courrier adressé ceux qui n'ouvrent plus vos e-mails, et transformez chaque colis que vous livrez en levier de rachat immédiat. Top CVR constaté : 6 %.
    link: /advertisers/direct-mail/
  - icon: 📦
    title: Monétiser
    details: Délivrez des campagnes de partenaires qui enrichissent l'expérience d'achat de vos clients, et générez des revenus pour financer votre acquisition. Top revenus : +215 K€ par an.
    link: /publishers/
  - icon: 🛠️
    title: Une solution tout-en-un, pilotée par l'IA
    details: Ciblage IA et data, modélisation d'audiences similaires, automation complète. +500 marques se développent déjà avec getinside, de la DNVB à la plus grande enseigne.
    link: /start-here/why-it-works
---
```

- [ ] **Step 2: Remplacer `docs/en/index.md`**

```markdown
---
title: getinside Handbook
layout: home
description: Parcel and direct mail marketing solution for the agentic era. Recruit, retain and monetise your customers with getinside.
keywords:
  - parcel marketing
  - direct mail
  - parcel inserts
  - sampling
  - customer acquisition
  - customer retention
  - monetisation
  - getinside

hero:
  name: "getinside"
  text: "Marketing that touches."
  tagline: "Recruit, retain and monetise your customers with parcels and direct mail."
  image:
    src: /images/gi-keyvisual.svg
    alt: getinside
  actions:
    - theme: brand
      text: Start Here
      link: /en/start-here/

features:
  - icon: 🎯
    title: Recruit
    details: Reach your future customers through the brands they already buy from, by delivering your campaigns to affinity audiences. With a media budget, or through an exchange. Best CAC&#58; €1.21.
    link: /en/advertisers/
  - icon: 💌
    title: Retain
    details: Reach the customers who no longer open your emails through direct mail, and turn every parcel you ship into an immediate repurchase lever. Best observed CVR&#58; 6%.
    link: /en/advertisers/direct-mail/
  - icon: 📦
    title: Monetise
    details: Deliver partner campaigns that enrich your customers' shopping experience, and generate revenue to fund your acquisition. Top revenue&#58; €215K+ per year.
    link: /en/publishers/
  - icon: 🛠️
    title: An all-in-one solution, powered by AI
    details: AI and data targeting, lookalike modelling, full automation. 500+ brands are already growing with getinside, from DNVBs to the largest retailers.
    link: /en/start-here/why-it-works
---
```

- [ ] **Step 3: Vérifier**

Run: `scripts/check-content.sh docs/index.md docs/en/index.md`
Expected: `OK`

- [ ] **Step 4: Commit**

```bash
git add docs/index.md docs/en/index.md
git commit -m "docs: nouvel accueil FR/EN (Recruter, Fidéliser, Monétiser)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

### Task 2: Start-here (introduction)

**Files:**
- Modify: `docs/start-here/index.md` (remplacer tout le fichier)
- Modify: `docs/en/start-here/index.md` (remplacer tout le fichier)

- [ ] **Step 1: Remplacer `docs/start-here/index.md`**

````markdown
---
title: Découvrir getinside - Le marketing par le colis et le courrier adressé
description: getinside est la solution marketing par le colis et le courrier adressé qui délivre des offres et des échantillons jusqu'au domicile des consommateurs. Recruter, fidéliser, monétiser.
keywords:
  - marketing par le colis
  - courrier adressé
  - insertion colis
  - échantillonnage
  - acquisition client
  - fidélisation client
  - monétisation
  - getinside
image: /images/gi-keyvisual.svg
---

# Le marketing qui touche

**getinside** est la solution marketing par le colis et le courrier adressé qui délivre des offres et des échantillons jusqu'au domicile des consommateurs, là où les décisions d'achat se prennent. **+500 marques** se développent déjà avec la solution.

---

## Pourquoi ?

Vos canaux digitaux saturent. Vos coûts d'acquisition augmentent. Vos clients ne vous considèrent plus.

Délivrez des campagnes marketing qui touchent les consommateurs, jusqu'à leur domicile, là où les décisions d'achat se prennent.

| Chiffre | Argument |
| :--- | :--- |
| **98 %** de délivrabilité | Tout le monde ouvre ses colis, sa boîte aux lettres ou prend en main un échantillon reçu, même ceux qui ne vous considèrent plus. |
| **100 %** d'attention | Des canaux qui demandent un acte physique génèrent l'attention : on ouvre, on touche, on regarde. |
| **86 %** des décisions d'achat se prennent au domicile | Le lieu où les offres sont évaluées, discutées, et même testées lorsqu'il s'agit d'un échantillon. |

---

## Trois usages

<div class="gi-format-grid">
  <a href="/handbook/advertisers/" class="gi-format-card">
    <span class="gi-format-card-icon">🎯</span>
    <span class="gi-format-card-title">Recruter</span>
    <p class="gi-format-card-desc">Touchez vos futurs clients à travers les marques qu'ils consomment déjà. Avec un budget média, ou en échange : vous diffusez leurs offres dans vos colis, elles diffusent la vôtre dans les leurs.</p>
  </a>
  <a href="/handbook/advertisers/direct-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">💌</span>
    <span class="gi-format-card-title">Fidéliser</span>
    <p class="gi-format-card-desc">Retrouvez par courrier adressé ceux qui n'ouvrent plus vos e-mails, et transformez chaque colis que vous livrez en levier de rachat immédiat.</p>
  </a>
  <a href="/handbook/publishers/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Monétiser</span>
    <p class="gi-format-card-desc">Délivrez des campagnes de partenaires qui enrichissent l'expérience d'achat de vos clients, et générez des revenus pour financer votre acquisition.</p>
  </a>
</div>

::: tip L'échange n'est pas un quatrième usage
C'est une manière de recruter sans achat média : vous exposez votre audience de clients à des marques affinitaires et accédez en retour à la leur. Chaque marque garde ses clients, tout en recrutant.
:::

---

## Trois canaux de diffusion

| Canal | Définition |
| :--- | :--- |
| **Insertion colis** | Un support est inséré dans le colis du client ou emporté avec sa commande. |
| **Courrier adressé** | Un support imprimé adressé nommément au client, dans sa boîte aux lettres. |
| **Échantillonnage** | Un échantillon offert pour faire tester, sentir ou toucher votre produit. |

<div class="gi-format-grid">
  <a href="/handbook/advertisers/sponsored-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Insertion colis</span>
    <p class="gi-format-card-desc">Votre offre dans le colis d'une marque affinitaire.</p>
  </a>
  <a href="/handbook/advertisers/direct-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">✉️</span>
    <span class="gi-format-card-title">Courrier adressé</span>
    <p class="gi-format-card-desc">Un courrier nominatif dans la boîte aux lettres.</p>
  </a>
  <a href="/handbook/advertisers/sampling/" class="gi-format-card">
    <span class="gi-format-card-icon">🧴</span>
    <span class="gi-format-card-title">Échantillonnage</span>
    <p class="gi-format-card-desc">Faites tester, sentir ou toucher votre produit.</p>
  </a>
</div>

---

## Une solution tech tout-en-un

Grâce à l'IA, identifiez les audiences à adresser et automatisez vos campagnes d'acquisition et de fidélisation en toute simplicité.

- **Ciblage IA & Data :** identifiez et touchez directement vos futurs clients. Activez votre audience et adressez celle des marques qui rassemblent vos futurs clients.
- **Modélisation d'audiences similaires :** trouvez vos futurs meilleurs clients grâce à une modélisation sur mesure basée sur les caractéristiques et les données transactionnelles de vos clients, croisées aux données propriétaires de la solution.
- **Automation complète :** lancez, gérez et suivez vos performances sans effort, ou confiez vos campagnes à notre équipe.

---

## Le contrôle reste à la marque

Chaque marque valide les marques et les offres diffusées auprès de ses clients. Nous mesurons et optimisons la performance de chaque campagne.

::: info Conformité
**RGPD** fondé sur l'intérêt légitime, avec droit d'opposition mentionné sur chaque envoi. **Loi AGEC** : échantillon remis sur demande préalable du consommateur (art. L541-15-10 du code de l'environnement).
:::

---

::: info Prêt à démarrer ?

- **Recruter ou fidéliser** : [Espace Annonceurs](/advertisers/)
- **Monétiser vos colis** : [Espace marques du réseau](/publishers/)

[Discuter de mon projet →](mailto:studio@getinside.com)

:::
````

Note : les liens `href` en HTML brut doivent inclure le `base` (`/handbook/`), comme les images (`/handbook/images/...` dans `case-studies.md`). Les liens markdown `[...](/advertisers/)` n'en ont pas besoin.

- [ ] **Step 2: Remplacer `docs/en/start-here/index.md`**

````markdown
---
title: Discover getinside - Parcel and direct mail marketing
description: getinside is the parcel and direct mail marketing solution that delivers offers and samples right to consumers' homes. Recruit, retain, monetise.
keywords:
  - parcel marketing
  - direct mail
  - parcel inserts
  - sampling
  - customer acquisition
  - customer retention
  - monetisation
  - getinside
image: /images/gi-keyvisual.svg
---

# Marketing that touches

**getinside** is the parcel and direct mail marketing solution that delivers offers and samples right to consumers' homes, where purchase decisions are made. **500+ brands** are already growing with the solution.

---

## Why?

Your digital channels are saturated. Your acquisition costs are rising. Your customers no longer notice you.

Deliver marketing campaigns that touch consumers, right to their homes, where purchase decisions are made.

| Figure | Argument |
| :--- | :--- |
| **98%** deliverability | Everyone opens their parcels and their mailbox, or picks up a sample they receive, even those who no longer notice you. |
| **100%** attention | Channels that require a physical action generate attention: people open, touch, look. |
| **86%** of purchase decisions are made at home | The place where offers are assessed, discussed, and even tried out when it comes to a sample. |

---

## Three use cases

<div class="gi-format-grid">
  <a href="/handbook/en/advertisers/" class="gi-format-card">
    <span class="gi-format-card-icon">🎯</span>
    <span class="gi-format-card-title">Recruit</span>
    <p class="gi-format-card-desc">Reach your future customers through the brands they already buy from. With a media budget, or through an exchange: you carry their offers in your parcels, they carry yours in theirs.</p>
  </a>
  <a href="/handbook/en/advertisers/direct-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">💌</span>
    <span class="gi-format-card-title">Retain</span>
    <p class="gi-format-card-desc">Reach the customers who no longer open your emails through direct mail, and turn every parcel you ship into an immediate repurchase lever.</p>
  </a>
  <a href="/handbook/en/publishers/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Monetise</span>
    <p class="gi-format-card-desc">Deliver partner campaigns that enrich your customers' shopping experience, and generate revenue to fund your acquisition.</p>
  </a>
</div>

::: tip Exchange is not a fourth use case
It is a way to recruit without buying media: you expose your customer audience to affinity brands and get access to theirs in return. Each brand keeps its customers while recruiting new ones.
:::

---

## Three distribution channels

| Channel | Definition |
| :--- | :--- |
| **Parcel inserts** | A printed piece is placed in the customer's parcel or handed over with their order. |
| **Direct mail** | A printed piece addressed to the customer by name, delivered to their mailbox. |
| **Sampling** | A free sample so people can try, smell or touch your product. |

<div class="gi-format-grid">
  <a href="/handbook/en/advertisers/sponsored-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Parcel inserts</span>
    <p class="gi-format-card-desc">Your offer in the parcel of an affinity brand.</p>
  </a>
  <a href="/handbook/en/advertisers/direct-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">✉️</span>
    <span class="gi-format-card-title">Direct mail</span>
    <p class="gi-format-card-desc">A named letter in the mailbox.</p>
  </a>
  <a href="/handbook/en/advertisers/sampling/" class="gi-format-card">
    <span class="gi-format-card-icon">🧴</span>
    <span class="gi-format-card-title">Sampling</span>
    <p class="gi-format-card-desc">Let people try, smell or touch your product.</p>
  </a>
</div>

---

## An all-in-one tech solution

With AI, identify the audiences to target and automate your acquisition and loyalty campaigns with ease.

- **AI & data targeting:** identify and reach your future customers directly. Activate your own audience and reach the audiences of brands that gather your future customers.
- **Lookalike modelling:** find your best future customers through custom modelling based on your customers' characteristics and transaction data, combined with the solution's proprietary data.
- **Full automation:** launch, manage and track your performance effortlessly, or hand your campaigns over to our team.

---

## The brand stays in control

Each brand approves the brands and offers shown to its customers. We measure and optimise the performance of every campaign.

::: info Compliance
**GDPR** processing based on legitimate interest, with the right to object stated on every mailing. **AGEC law**: samples provided only at the consumer's prior request (Art. L541-15-10 of the French Environmental Code).
:::

---

::: info Ready to start?

- **Recruit or retain**: [Advertiser area](/en/advertisers/)
- **Monetise your parcels**: [Network brand area](/en/publishers/)

[Discuss my project →](mailto:studio@getinside.com)

:::
````

- [ ] **Step 3: Vérifier**

Run: `scripts/check-content.sh docs/start-here/index.md docs/en/start-here/index.md`
Expected: `OK`

- [ ] **Step 4: Commit**

```bash
git add docs/start-here/index.md docs/en/start-here/index.md
git commit -m "docs: start-here FR/EN réécrit sur le nouveau messaging

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

> Les pages `direct-mail` et `sampling` visées par ces liens sont créées en Task 8 : `npm run docs:build` ne passera qu'à partir de la Task 8. Les contrôles de la phase 1 se limitent donc au script (Task 7 relance le build complet après création des pages, voir note de la Task 7).

### Task 3: « Comment ça fonctionne » (why-it-works)

**Files:**
- Modify: `docs/start-here/why-it-works.md` (remplacer tout le fichier)
- Modify: `docs/en/start-here/why-it-works.md` (remplacer tout le fichier)

- [ ] **Step 1: Remplacer `docs/start-here/why-it-works.md`**

````markdown
---
title: Comment fonctionne getinside
description: Comprenez le fonctionnement de getinside : un réseau de marques de confiance, un ciblage IA et un Wallet qui transforme vos revenus en nouveaux clients.
keywords:
  - fonctionnement getinside
  - réseau de marques
  - audiences affinitaires
  - modélisation d'audiences similaires
  - échange d'audiences
  - wallet
  - insertion colis
  - getinside
image: /images/gi-keyvisual.svg
---

# Comment ça fonctionne ?

**getinside** relie des marques qui ont la confiance et l'attention de leurs consommateurs. Chaque marque peut **recruter** de nouveaux clients, **fidéliser** les siens et **monétiser** son audience, avec le colis, le courrier adressé et l'échantillonnage.

| Acteur | Action | Flux |
| :--- | :--- | :--- |
| 📦 **Marque du réseau** | Envoie des colis et du courrier à ses clients | Inventaire disponible |
| ⚡ **Plateforme** | Cible les audiences affinitaires grâce à l'IA | Mise en relation |
| 📢 **Annonceur** | Diffuse son offre ou son échantillon auprès de ces audiences | Campagnes délivrées |
| 💰 **Wallet** | Les revenus créditent le Wallet de la marque | Financement de ses propres campagnes |

## Le transfert de confiance

Le point commun entre un colis et un courrier adressé d'une marque :

- **La relation client :** le consommateur a déjà acheté.
- **La crédibilité :** il fait confiance à la marque qui lui livre.
- **L'attention :** il ouvre son colis, sa boîte aux lettres, il touche l'échantillon.

::: tip Un réseau exclusif de marques de confiance
Des marques qui ont la confiance et l'attention de leurs consommateurs, et qui recommandent vos offres. **Le contrôle reste à la marque** : chacune valide les marques et les offres diffusées auprès de ses clients.
:::

## Recruter : deux modes

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Achat média</strong>
    <p>Vous diffusez votre offre ou votre échantillon auprès des audiences de marques affinitaires, avec un budget de campagne.</p>
  </div>
  <div class="gi-value-card">
    <strong>Échange</strong>
    <p>Sans achat média : chaque marque diffuse l'offre de l'autre dans ses colis et garde ses clients.</p>
  </div>
</div>

L'IA sert à cibler les marques affinitaires grâce à la **modélisation d'audiences similaires** : un modèle sur mesure basé sur les caractéristiques et les données transactionnelles de vos clients, croisées aux données propriétaires de la solution (historique des campagnes déjà délivrées).

## Monétiser : le cycle du Wallet

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>1. Diffusez des campagnes</strong>
    <p>Délivrez les offres d'autres marques à votre audience.</p>
  </div>
  <div class="gi-value-card">
    <strong>2. Générez des revenus</strong>
    <p>Votre Wallet dédié est crédité automatiquement.</p>
  </div>
  <div class="gi-value-card">
    <strong>3. Financez vos campagnes</strong>
    <p>Réinvestissez vos revenus pour recruter, ou retirez-les.</p>
  </div>
</div>

::: info Les fonctionnalités pour commercialiser votre offre média
- **Répondre aux demandes des annonceurs :** recevez directement des propositions de campagnes.
- **Prospecter les annonceurs :** adressez-leur vos propres propositions.
- **Collaborer avec vos partenaires :** hébergez l'ensemble de vos annonceurs partenaires et opérez tout depuis une seule solution.
:::

## Fidéliser : retrouver ceux qui n'ouvrent plus vos e-mails

Vos clients n'ouvrent plus vos e-mails, mais ils ouvrent toujours leurs courriers et leurs colis.

- **Réactivation par courrier adressé :** ciblez efficacement les inactifs e-mail en boîte aux lettres.
- **Up-sell colis :** insérez une offre dédiée dans chaque colis livré pour déclencher de nouveaux achats.

## L'expertise getinside

| 🚫 Sans getinside | ✅ Avec getinside |
| :--- | :--- |
| Négocier avec chaque marque une par une. | Un seul partenaire, 3 canaux. |
| Gérer production, impression et routage. | Production, contrôle qualité et livraison de bout en bout, fidèles à votre image de marque. |
| Reporting éparpillé. | Performance mesurée et optimisée pour chaque campagne. |

## La qualité comme moteur de croissance

::: warning ⭐ Le Score Distributeur : votre clé d'accès

Chaque marque du réseau reçoit un **Score Distributeur** (1-5 étoiles) basé sur **7 critères clés** : respect des délais, qualité de tracking, taux d'erreur, conformité RGPD, taux de réclamations, intégration API et réactivité.

Ce score détermine votre **visibilité dans le moteur de recherche de la plateforme** et votre accès prioritaire aux campagnes premium.

:::

::: tip Prêt à activer votre croissance ?

Que vous souhaitiez recruter, fidéliser ou monétiser vos clients, getinside est conçu pour vous.

[Discuter de mon projet](mailto:studio@getinside.com)

:::
````

- [ ] **Step 2: Remplacer `docs/en/start-here/why-it-works.md`**

````markdown
---
title: How getinside works
description: Understand how getinside works: a network of trusted brands, AI targeting and a Wallet that turns your revenue into new customers.
keywords:
  - how getinside works
  - brand network
  - affinity audiences
  - lookalike modelling
  - audience exchange
  - wallet
  - parcel inserts
  - getinside
image: /images/gi-keyvisual.svg
---

# How does it work?

**getinside** connects brands that have their consumers' trust and attention. Each brand can **recruit** new customers, **retain** its own and **monetise** its audience, with parcels, direct mail and sampling.

| Player | Action | Flow |
| :--- | :--- | :--- |
| 📦 **Network brand** | Ships parcels and mail to its customers | Available inventory |
| ⚡ **Platform** | Targets affinity audiences with AI | Matching |
| 📢 **Advertiser** | Delivers its offer or sample to those audiences | Campaigns delivered |
| 💰 **Wallet** | Revenue is credited to the brand's Wallet | Funds its own campaigns |

## The transfer of trust

What a parcel and a direct mail piece from a brand have in common:

- **The customer relationship:** the consumer has already bought.
- **Credibility:** they trust the brand that delivers to them.
- **Attention:** they open their parcel and their mailbox, they touch the sample.

::: tip An exclusive network of trusted brands
Brands that have their consumers' trust and attention, and that recommend your offers. **The brand stays in control**: each one approves the brands and offers shown to its customers.
:::

## Recruit: two modes

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Media buying</strong>
    <p>You deliver your offer or sample to the audiences of affinity brands, with a campaign budget.</p>
  </div>
  <div class="gi-value-card">
    <strong>Exchange</strong>
    <p>No media spend: each brand carries the other's offer in its parcels and keeps its own customers.</p>
  </div>
</div>

AI is used to target affinity brands through **lookalike modelling**: custom modelling based on your customers' characteristics and transaction data, combined with the solution's proprietary data (history of campaigns already delivered).

## Monetise: the Wallet cycle

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>1. Deliver campaigns</strong>
    <p>Deliver other brands' offers to your audience.</p>
  </div>
  <div class="gi-value-card">
    <strong>2. Generate revenue</strong>
    <p>Your dedicated Wallet is credited automatically.</p>
  </div>
  <div class="gi-value-card">
    <strong>3. Fund your campaigns</strong>
    <p>Reinvest your revenue to recruit, or withdraw it.</p>
  </div>
</div>

::: info Features to sell your media offer
- **Respond to advertiser requests:** receive campaign proposals directly.
- **Prospect advertisers:** send them your own proposals.
- **Collaborate with your partners:** host all your partner advertisers and run everything from a single solution.
:::

## Retain: reach customers who no longer open your emails

Your customers no longer open your emails, but they still open their mail and their parcels.

- **Reactivation by direct mail:** effectively target email-inactive customers in their mailbox.
- **Parcel upsell:** insert a dedicated offer in every parcel shipped to trigger new purchases.

## The getinside expertise

| 🚫 Without getinside | ✅ With getinside |
| :--- | :--- |
| Negotiating with each brand one by one. | One partner, 3 channels. |
| Managing production, printing and routing. | Production, quality control and delivery end to end, true to your brand image. |
| Scattered reporting. | Performance measured and optimised for every campaign. |

## Quality as a growth engine

::: warning ⭐ The Retailer Score: your access key

Each network brand receives a **Retailer Score** (1-5 stars) based on **7 key criteria**: on-time delivery, tracking quality, error rate, GDPR compliance, complaint rate, API integration and responsiveness.

This score determines your **visibility in the platform's search engine** and your priority access to premium campaigns.

:::

::: tip Ready to activate your growth?

Whether you want to recruit, retain or monetise your customers, getinside is built for you.

[Discuss my project](mailto:studio@getinside.com)

:::
````

- [ ] **Step 3: Vérifier**

Run: `scripts/check-content.sh docs/start-here/why-it-works.md docs/en/start-here/why-it-works.md`
Expected: `OK`

- [ ] **Step 4: Commit**

```bash
git add docs/start-here/why-it-works.md docs/en/start-here/why-it-works.md
git commit -m "docs: why-it-works FR/EN réécrit (réseau, échange, Wallet)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

### Task 4: Hubs annonceurs et marques du réseau

**Files:**
- Modify: `docs/advertisers/index.md`, `docs/en/advertisers/index.md` (remplacer tout le fichier)
- Modify: `docs/publishers/index.md`, `docs/en/publishers/index.md` (remplacer tout le fichier)

- [ ] **Step 1: Remplacer `docs/advertisers/index.md`**

```markdown
---
title: Espace Annonceurs - Recruter et fidéliser avec getinside
description: Recrutez vos futurs clients auprès d'audiences affinitaires et fidélisez les vôtres par le colis, le courrier adressé et l'échantillonnage.
keywords:
  - annonceurs
  - recruter des clients
  - fidéliser des clients
  - insertion colis
  - courrier adressé
  - échantillonnage
  - getinside
image: /images/gi-keyvisual.svg
---

# Espace Annonceurs

<p class="gi-page-intro">Recrutez vos futurs clients à travers les marques qu'ils consomment déjà, et retrouvez ceux qui n'ouvrent plus vos e-mails.</p>

<div class="gi-quick-links">
  <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary">Créer une campagne →</a>
</div>

## Deux usages

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>🎯 Recruter</strong>
    <p>Touchez vos futurs clients en délivrant vos campagnes auprès d'audiences de marques affinitaires, avec un budget média ou en échange. Top CAC : 1,21 €.</p>
  </div>
  <div class="gi-value-card">
    <strong>💌 Fidéliser</strong>
    <p>Retrouvez par courrier adressé les clients qui n'ouvrent plus vos e-mails, et insérez une offre dédiée dans chaque colis livré. Top CVR constaté : 6 %.</p>
  </div>
</div>

## Canaux de diffusion

<div class="gi-format-grid">
  <a href="sponsored-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Insertion colis</span>
    <p class="gi-format-card-desc">Un support inséré dans le colis du client ou emporté avec sa commande.</p>
  </a>
  <a href="direct-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">✉️</span>
    <span class="gi-format-card-title">Courrier adressé</span>
    <p class="gi-format-card-desc">Un support imprimé adressé nommément au client, dans sa boîte aux lettres.</p>
  </a>
  <a href="sampling/" class="gi-format-card">
    <span class="gi-format-card-icon">🧴</span>
    <span class="gi-format-card-title">Échantillonnage</span>
    <p class="gi-format-card-desc">Un échantillon offert pour faire tester, sentir ou toucher votre produit.</p>
  </a>
</div>

## Autres formats

<div class="gi-format-grid">
  <a href="dedicated-email/" class="gi-format-card">
    <span class="gi-format-card-icon">📧</span>
    <span class="gi-format-card-title">Emailing dédié</span>
    <p class="gi-format-card-desc">Un e-mail rédigé par la marque du réseau, avec son endorsement.</p>
  </a>
  <a href="display-email/" class="gi-format-card">
    <span class="gi-format-card-icon">🖼️</span>
    <span class="gi-format-card-title">Encart newsletter</span>
    <p class="gi-format-card-desc">Une bannière non intrusive dans les newsletters partenaires.</p>
  </a>
  <a href="sponsored-social/" class="gi-format-card">
    <span class="gi-format-card-icon">📱</span>
    <span class="gi-format-card-title">Social Ads</span>
    <p class="gi-format-card-desc">Partnership Ads sur les comptes sociaux des marques partenaires. Sur demande.</p>
  </a>
  <a href="co-branded-contest/" class="gi-format-card">
    <span class="gi-format-card-icon">🎁</span>
    <span class="gi-format-card-title">Jeu concours</span>
    <p class="gi-format-card-desc">Des leads opt-in qualifiés grâce à un jeu co-brandé.</p>
  </a>
</div>

## Services & ressources

<div class="gi-quick-links">
  <a href="printing-services" class="btn btn-outline">🖨️ Impression & Logistique</a>
  <a href="/handbook/resources/case-studies" class="btn btn-outline">🚀 Cas clients</a>
</div>
```

- [ ] **Step 2: Remplacer `docs/en/advertisers/index.md`**

```markdown
---
title: Advertiser Area - Recruit and retain with getinside
description: Recruit your future customers from affinity audiences and retain your own through parcels, direct mail and sampling.
keywords:
  - advertisers
  - recruit customers
  - retain customers
  - parcel inserts
  - direct mail
  - sampling
  - getinside
image: /images/gi-keyvisual.svg
---

# Advertiser Area

<p class="gi-page-intro">Recruit your future customers through the brands they already buy from, and reach the customers who no longer open your emails.</p>

<div class="gi-quick-links">
  <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary">Create a campaign →</a>
</div>

## Two use cases

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>🎯 Recruit</strong>
    <p>Reach your future customers by delivering your campaigns to the audiences of affinity brands, with a media budget or through an exchange. Best CAC: €1.21.</p>
  </div>
  <div class="gi-value-card">
    <strong>💌 Retain</strong>
    <p>Reach email-inactive customers through direct mail, and insert a dedicated offer in every parcel shipped. Best observed CVR: 6%.</p>
  </div>
</div>

## Distribution channels

<div class="gi-format-grid">
  <a href="sponsored-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Parcel inserts</span>
    <p class="gi-format-card-desc">A printed piece placed in the customer's parcel or handed over with their order.</p>
  </a>
  <a href="direct-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">✉️</span>
    <span class="gi-format-card-title">Direct mail</span>
    <p class="gi-format-card-desc">A printed piece addressed to the customer by name, delivered to their mailbox.</p>
  </a>
  <a href="sampling/" class="gi-format-card">
    <span class="gi-format-card-icon">🧴</span>
    <span class="gi-format-card-title">Sampling</span>
    <p class="gi-format-card-desc">A free sample so people can try, smell or touch your product.</p>
  </a>
</div>

## Other formats

<div class="gi-format-grid">
  <a href="dedicated-email/" class="gi-format-card">
    <span class="gi-format-card-icon">📧</span>
    <span class="gi-format-card-title">Dedicated email</span>
    <p class="gi-format-card-desc">An email written by the network brand, with its endorsement.</p>
  </a>
  <a href="display-email/" class="gi-format-card">
    <span class="gi-format-card-icon">🖼️</span>
    <span class="gi-format-card-title">Newsletter banner</span>
    <p class="gi-format-card-desc">A non-intrusive banner in partner newsletters.</p>
  </a>
  <a href="sponsored-social/" class="gi-format-card">
    <span class="gi-format-card-icon">📱</span>
    <span class="gi-format-card-title">Social Ads</span>
    <p class="gi-format-card-desc">Partnership Ads on partner brands' social accounts. On request.</p>
  </a>
  <a href="co-branded-contest/" class="gi-format-card">
    <span class="gi-format-card-icon">🎁</span>
    <span class="gi-format-card-title">Contest</span>
    <p class="gi-format-card-desc">Qualified opt-in leads through a co-branded contest.</p>
  </a>
</div>

## Services & resources

<div class="gi-quick-links">
  <a href="printing-services" class="btn btn-outline">🖨️ Printing & Logistics</a>
  <a href="/handbook/en/resources/case-studies" class="btn btn-outline">🚀 Case studies</a>
</div>
```

- [ ] **Step 3: Remplacer `docs/publishers/index.md`**

```markdown
---
title: Espace marques du réseau - Monétiser avec getinside
description: Délivrez des campagnes de partenaires à vos clients, générez des revenus et financez votre acquisition grâce au Wallet getinside.
keywords:
  - monétisation
  - marques du réseau
  - wallet
  - échange d'audiences
  - insertion colis
  - revenus additionnels
  - getinside
image: /images/gi-keyvisual.svg
---

# Espace marques du réseau

<p class="gi-page-intro">Délivrez des campagnes de partenaires qui enrichissent l'expérience d'achat de vos clients, et générez des revenus pour financer votre acquisition. Vous pouvez aussi échanger vos audiences avec d'autres marques, sans achat média.</p>

<div class="gi-quick-links">
  <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary">Accéder à mon espace →</a>
</div>

## Configuration & démarrage

<div class="gi-nav-list">
  <a href="onboarding-process" class="gi-nav-card">
    <span class="gi-nav-card-icon">🚀</span>
    <div class="gi-nav-card-body">
      <p class="gi-nav-card-title">Guide de démarrage</p>
      <p class="gi-nav-card-desc">Comprendre les 3 piliers : Activation, Trade Marketing et Prospection.</p>
    </div>
    <span class="gi-nav-card-arrow">→</span>
  </a>
  <a href="audience-setup" class="gi-nav-card">
    <span class="gi-nav-card-icon">🎯</span>
    <div class="gi-nav-card-body">
      <p class="gi-nav-card-title">Audience & Score</p>
      <p class="gi-nav-card-desc">Comment remplir votre fiche pour être visible et optimiser votre Score Distributeur.</p>
    </div>
    <span class="gi-nav-card-arrow">→</span>
  </a>
  <a href="affiliation" class="gi-nav-card">
    <span class="gi-nav-card-icon">🤝</span>
    <div class="gi-nav-card-body">
      <p class="gi-nav-card-title">Affiliation</p>
      <p class="gi-nav-card-desc">Invitez des partenaires dans le réseau.</p>
    </div>
    <span class="gi-nav-card-arrow">→</span>
  </a>
</div>

## Ce que vous pouvez faire

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Répondre aux briefs des annonceurs</strong>
    <p>Recevez des propositions de campagnes, proposez vos conditions, période, canaux et performances estimées, et validez ensemble.</p>
  </div>
  <div class="gi-value-card">
    <strong>Échanger vos audiences</strong>
    <p>Vous vous accordez sur un échange de visibilité avec une autre marque du réseau, sans transaction financière.</p>
  </div>
  <div class="gi-value-card">
    <strong>Financer votre acquisition</strong>
    <p>Vos revenus créditent votre Wallet : réinvestissez-les dans vos propres campagnes ou retirez-les.</p>
  </div>
  <div class="gi-value-card">
    <strong>Héberger vos partenaires</strong>
    <p>Intégrez vos annonceurs historiques et opérez tout depuis une seule solution.</p>
  </div>
</div>

## Canal & opérations

<div class="gi-format-grid">
  <a href="sponsored-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Insertion colis</span>
    <p class="gi-format-card-desc">Réception, insertion et déclaration hebdomadaire.</p>
  </a>
</div>

## Autres formats

<div class="gi-format-grid">
  <a href="dedicated-email/" class="gi-format-card">
    <span class="gi-format-card-icon">📧</span>
    <span class="gi-format-card-title">Emailing dédié</span>
    <p class="gi-format-card-desc">Création co-brandée, endorsement et tracking.</p>
  </a>
  <a href="display-email/" class="gi-format-card">
    <span class="gi-format-card-icon">🖼️</span>
    <span class="gi-format-card-title">Encart newsletter</span>
    <p class="gi-format-card-desc">Zéro production. Intégration de la bannière en quelques minutes.</p>
  </a>
  <a href="sponsored-social/" class="gi-format-card">
    <span class="gi-format-card-icon">📱</span>
    <span class="gi-format-card-title">Social Ads</span>
    <p class="gi-format-card-desc">Partnership Ads : l'annonceur finance la diffusion de vos posts.</p>
  </a>
  <a href="co-branded-contest/" class="gi-format-card">
    <span class="gi-format-card-icon">🎁</span>
    <span class="gi-format-card-title">Jeu concours</span>
    <p class="gi-format-card-desc">L'annonceur fournit les lots et la page co-brandée.</p>
  </a>
</div>

## Finance & admin

<div class="gi-format-grid">
  <a href="payouts" class="gi-format-card">
    <span class="gi-format-card-icon">💸</span>
    <span class="gi-format-card-title">Paiements & Wallet</span>
    <p class="gi-format-card-desc">Wallet, retraits et réinvestissement.</p>
  </a>
  <a href="affiliation" class="gi-format-card">
    <span class="gi-format-card-icon">🤝</span>
    <span class="gi-format-card-title">Affiliation</span>
    <p class="gi-format-card-desc">Parrainez des marques dans le réseau.</p>
  </a>
</div>
```

- [ ] **Step 4: Remplacer `docs/en/publishers/index.md`**

```markdown
---
title: Network Brand Area - Monetise with getinside
description: Deliver partner campaigns to your customers, generate revenue and fund your acquisition with the getinside Wallet.
keywords:
  - monetisation
  - network brands
  - wallet
  - audience exchange
  - parcel inserts
  - additional revenue
  - getinside
image: /images/gi-keyvisual.svg
---

# Network Brand Area

<p class="gi-page-intro">Deliver partner campaigns that enrich your customers' shopping experience, and generate revenue to fund your acquisition. You can also exchange audiences with other brands, with no media spend.</p>

<div class="gi-quick-links">
  <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary">Go to my workspace →</a>
</div>

## Setup & getting started

<div class="gi-nav-list">
  <a href="onboarding-process" class="gi-nav-card">
    <span class="gi-nav-card-icon">🚀</span>
    <div class="gi-nav-card-body">
      <p class="gi-nav-card-title">Getting started guide</p>
      <p class="gi-nav-card-desc">Understand the 3 pillars: Activation, Trade Marketing and Prospecting.</p>
    </div>
    <span class="gi-nav-card-arrow">→</span>
  </a>
  <a href="audience-setup" class="gi-nav-card">
    <span class="gi-nav-card-icon">🎯</span>
    <div class="gi-nav-card-body">
      <p class="gi-nav-card-title">Audience & Score</p>
      <p class="gi-nav-card-desc">How to fill in your profile to be visible and optimise your Retailer Score.</p>
    </div>
    <span class="gi-nav-card-arrow">→</span>
  </a>
  <a href="affiliation" class="gi-nav-card">
    <span class="gi-nav-card-icon">🤝</span>
    <div class="gi-nav-card-body">
      <p class="gi-nav-card-title">Affiliation</p>
      <p class="gi-nav-card-desc">Invite partners into the network.</p>
    </div>
    <span class="gi-nav-card-arrow">→</span>
  </a>
</div>

## What you can do

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Respond to advertiser briefs</strong>
    <p>Receive campaign proposals, set your terms, period, channels and estimated performance, and approve together.</p>
  </div>
  <div class="gi-value-card">
    <strong>Exchange your audiences</strong>
    <p>Agree on a visibility exchange with another network brand, with no financial transaction.</p>
  </div>
  <div class="gi-value-card">
    <strong>Fund your acquisition</strong>
    <p>Your revenue credits your Wallet: reinvest it in your own campaigns or withdraw it.</p>
  </div>
  <div class="gi-value-card">
    <strong>Host your partners</strong>
    <p>Bring in your historical advertisers and run everything from a single solution.</p>
  </div>
</div>

## Channel & operations

<div class="gi-format-grid">
  <a href="sponsored-mail/" class="gi-format-card">
    <span class="gi-format-card-icon">📦</span>
    <span class="gi-format-card-title">Parcel inserts</span>
    <p class="gi-format-card-desc">Reception, insertion and weekly declaration.</p>
  </a>
</div>

## Other formats

<div class="gi-format-grid">
  <a href="dedicated-email/" class="gi-format-card">
    <span class="gi-format-card-icon">📧</span>
    <span class="gi-format-card-title">Dedicated email</span>
    <p class="gi-format-card-desc">Co-branded creation, endorsement and tracking.</p>
  </a>
  <a href="display-email/" class="gi-format-card">
    <span class="gi-format-card-icon">🖼️</span>
    <span class="gi-format-card-title">Newsletter banner</span>
    <p class="gi-format-card-desc">No production. Banner integration in a few minutes.</p>
  </a>
  <a href="sponsored-social/" class="gi-format-card">
    <span class="gi-format-card-icon">📱</span>
    <span class="gi-format-card-title">Social Ads</span>
    <p class="gi-format-card-desc">Partnership Ads: the advertiser funds the distribution of your posts.</p>
  </a>
  <a href="co-branded-contest/" class="gi-format-card">
    <span class="gi-format-card-icon">🎁</span>
    <span class="gi-format-card-title">Contest</span>
    <p class="gi-format-card-desc">The advertiser provides the prizes and the co-branded page.</p>
  </a>
</div>

## Finance & admin

<div class="gi-format-grid">
  <a href="payouts" class="gi-format-card">
    <span class="gi-format-card-icon">💸</span>
    <span class="gi-format-card-title">Payments & Wallet</span>
    <p class="gi-format-card-desc">Wallet, withdrawals and reinvestment.</p>
  </a>
  <a href="affiliation" class="gi-format-card">
    <span class="gi-format-card-icon">🤝</span>
    <span class="gi-format-card-title">Affiliation</span>
    <p class="gi-format-card-desc">Refer brands into the network.</p>
  </a>
</div>
```

- [ ] **Step 5: Vérifier**

Run: `scripts/check-content.sh docs/advertisers/index.md docs/en/advertisers/index.md docs/publishers/index.md docs/en/publishers/index.md`
Expected: `OK`

- [ ] **Step 6: Commit**

```bash
git add docs/advertisers/index.md docs/en/advertisers/index.md docs/publishers/index.md docs/en/publishers/index.md
git commit -m "docs: hubs annonceurs et marques du réseau (usages, canaux, autres formats)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

### Task 5: Glossaire, FAQ index, Ressources index

**Files:**
- Modify: `docs/glossary.md`, `docs/en/glossary.md`
- Modify: `docs/faq/index.md`, `docs/en/faq/index.md`
- Modify: `docs/resources/index.md`, `docs/en/resources/index.md`

- [ ] **Step 1: Lister les occurrences à remplacer**

Run: `grep -nE "[Rr]etail [Mm]edia" docs/glossary.md docs/en/glossary.md docs/faq/index.md docs/en/faq/index.md docs/resources/index.md docs/en/resources/index.md`
Expected: 2 lignes par glossaire, 2 par `faq/index.md`, 3 par `resources/index.md` (FR et EN).

- [ ] **Step 2: Glossaire FR — titre et définition**

Dans `docs/glossary.md`, remplacer la ligne 5 `# Glossaire du Retail Media` par `# Glossaire`.

Remplacer le bloc de l'entrée « Retail Media » (autour de la ligne 107) : lire d'abord `sed -n 100,115p docs/glossary.md`, puis remplacer l'entrée `<dt>Retail Media</dt>` et son `<dd>` par :

```html
  <dt>Réseau de marques</dt>
  <dd>Ensemble de marques de confiance qui délivrent les campagnes de partenaires à leurs clients, et dont chacune valide les marques et les offres diffusées auprès de ses clients.</dd>
```

L'entrée doit rester à sa place alphabétique : si « Réseau » n'est pas sous la lettre R, la déplacer sous `<h2 id="r">`.

Ajouter sous la lettre appropriée ces entrées (créer la section `<h2 id="x">` et le lien `<a href="#x">X</a>` dans `gi-alpha-nav` si la lettre n'existe pas) :

```html
  <dt>Courrier adressé</dt>
  <dd>Support imprimé adressé nommément au client, dans sa boîte aux lettres.</dd>
  <dt>Échantillonnage</dt>
  <dd>Échantillon offert pour faire tester, sentir ou toucher un produit. Remis sur demande préalable du consommateur (loi AGEC).</dd>
  <dt>Échange d'audiences</dt>
  <dd>Accord entre deux marques du réseau : chacune diffuse l'offre de l'autre dans ses colis, sans achat média, et garde ses clients.</dd>
  <dt>Wallet</dt>
  <dd>Portefeuille d'une marque du réseau, crédité par les campagnes qu'elle délivre. Les revenus financent ses propres campagnes ou peuvent être retirés.</dd>
```

Note : le glossaire a déjà des entrées « Insertion Colis (Sponsored Mail) » et « Wallet » éventuelles. Avant d'ajouter, lancer `grep -n "Wallet\|Courrier\|Échantillon" docs/glossary.md` et fusionner avec l'entrée existante au lieu de dupliquer.

- [ ] **Step 3: Glossaire EN**

Même opération dans `docs/en/glossary.md` : titre `# Glossary`, entrée « Network of brands », et entrées :

```html
  <dt>Direct mail</dt>
  <dd>A printed piece addressed to the customer by name, delivered to their mailbox.</dd>
  <dt>Sampling</dt>
  <dd>A free sample so people can try, smell or touch a product. Provided only at the consumer's prior request (AGEC law).</dd>
  <dt>Audience exchange</dt>
  <dd>Agreement between two network brands: each carries the other's offer in its parcels, with no media spend, and keeps its own customers.</dd>
  <dt>Wallet</dt>
  <dd>A network brand's wallet, credited by the campaigns it delivers. Revenue funds its own campaigns or can be withdrawn.</dd>
```

- [ ] **Step 4: FAQ index et Ressources index (FR)**

Dans `docs/faq/index.md`, frontmatter :
- `title: FAQ - getinside`
- `description: Réponses aux questions fréquentes sur getinside : logistique, tracking, campagnes, audiences, Wallet et intégration technique.`
- remplacer le mot-clé `retail media FAQ` par `FAQ getinside` et `facturation` par `wallet`.

Dans `docs/resources/index.md`, frontmatter :
- `title: Ressources & outils - getinside`
- `description: Téléchargez nos guides, cas clients, templates et ressources créatives pour optimiser vos campagnes de marketing par le colis et le courrier adressé.`
- remplacer `ressources retail media` par `ressources marketing par le colis`.
Lire d'abord `sed -n 1,30p docs/resources/index.md` et supprimer toute autre occurrence de « Retail Media » dans le corps en la remplaçant par « getinside ».

- [ ] **Step 5: FAQ index et Ressources index (EN)**

Mêmes changements dans `docs/en/faq/index.md` (`title: FAQ - getinside`, `description: Answers to frequently asked questions about getinside: logistics, tracking, campaigns, audiences, Wallet and technical integration.`, mot-clé `FAQ getinside`) et `docs/en/resources/index.md` (`title: Resources & tools - getinside`, `description: Download our guides, case studies, templates and creative resources to optimise your parcel and direct mail marketing campaigns.`, mot-clé `parcel marketing resources`).

- [ ] **Step 6: Vérifier**

Run: `scripts/check-content.sh docs/glossary.md docs/en/glossary.md docs/faq/index.md docs/en/faq/index.md docs/resources/index.md docs/en/resources/index.md`
Expected: `OK`

- [ ] **Step 7: Commit**

```bash
git add docs/glossary.md docs/en/glossary.md docs/faq/index.md docs/en/faq/index.md docs/resources/index.md docs/en/resources/index.md
git commit -m "docs: glossaire, FAQ et ressources alignés sur le nouveau vocabulaire

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

### Task 6: Cas clients

**Files:**
- Modify: `docs/resources/case-studies.md`
- Modify: `docs/en/resources/case-studies.md`

Les cas existants (Avène, Nocibé, HelloFresh…) restent. On ajoute en tête une section « Cas clients getinside » avec les cas des decks, en `gi-value-grid` (texte seul, pas d'images à produire).

- [ ] **Step 1: FR — insérer avant la section `## 📧 Dedicated Email (Exemples Live)`**

```markdown
## 🎯 Résultats par usage

### Recruter

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Colis · Auto-Moto, Famille Enfant Bébé</strong>
    <p>12 % de taux de conversion · 1 053 nouveaux clients · CAC 3,5 €.</p>
    <p><em>« L'activation d'audiences est un excellent levier pour atteindre des segments jusqu'ici inexploités. »</em> Marina Lépine, Responsable marketing</p>
  </div>
  <div class="gi-value-card">
    <strong>Colis · Cadeaux et événements</strong>
    <p>3,12 % de taux de conversion · 5 766 nouveaux clients · CAC 4,5 €, en ligne et en magasin.</p>
    <p><em>« Une campagne omnicanale qui a su réconcilier le on et le off line. »</em></p>
  </div>
  <div class="gi-value-card">
    <strong>Colis · Alimentation et boissons</strong>
    <p>27 000 personnes touchées · 44 % de taux de conversion.</p>
    <p><em>« Une campagne intelligente. »</em> Marie Rassat, Senior Marketing & Communication Manager</p>
  </div>
  <div class="gi-value-card">
    <strong>Colis · Alimentation</strong>
    <p>2,5 % de taux de conversion · 768 nouveaux clients · CAC 10 €.</p>
    <p><em>« Une campagne à fort impact qui fait connaître la marque auprès d'une cible présentant de fortes affinités avec l'audience de Japhy. »</em> Lucie Prevot, Influence Partnership Manager</p>
  </div>
</div>

### Échantillonner

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Échantillon · Beauté, Santé & Bien-être</strong>
    <p>30 000 échantillons distribués · 65 000 contacts touchés.</p>
    <p><em>« Une campagne clé en main pour notre activation produit. »</em> Sophie Bouyssie, E-commerce Activation Manager</p>
  </div>
  <div class="gi-value-card">
    <strong>Échantillon · Alimentation</strong>
    <p>30 000 échantillons et flyers distribués · 80 000 contacts touchés.</p>
    <p><em>« Une vraie expérience de découverte produit dans un moment clé du parcours client et qui permet l'incitation à l'achat via une offre promotionnelle. »</em></p>
  </div>
  <div class="gi-value-card">
    <strong>Échantillon · Sport et activités extérieures</strong>
    <p>13 000 échantillons et flyers distribués · 50 000 contacts touchés, lors d'un événement affinitaire.</p>
    <p><em>« Une prise de parole au plus près de notre cible, au cœur d'un événement fédérateur. »</em> Charlotte Desrumaux, Marketing manager</p>
  </div>
</div>

### Fidéliser

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Courrier adressé · Réactivation</strong>
    <p>Réactivation d'anciens clients avec une offre dédiée : 6,12 % de taux de conversion.</p>
  </div>
</div>

### Monétiser

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Budget média autofinancé</strong>
    <p>90 % des revenus réinvestis dans les campagnes d'acquisition · +60 K€ de revenus générés en moins d'un an.</p>
  </div>
  <div class="gi-value-card">
    <strong>Nouvelle source de revenus récurrente</strong>
    <p>+200 K€ de revenus générés en un an · +30 campagnes diffusées par an.</p>
  </div>
  <div class="gi-value-card">
    <strong>Valeur maximisée par campagne</strong>
    <p>+375 % d'augmentation du panier moyen par campagne · +50 K€ de revenus générés depuis l'intégration.</p>
  </div>
</div>

---

```

Vérifier au préalable que « 6,12 % » est bien le chiffre du deck pour le courrier adressé : la source indique « 6, 12% taux de conversion ». Si le doute persiste, écrire « 6 % » (TOP CVR du guide) et le signaler dans la description de PR.

- [ ] **Step 2: EN — même section dans `docs/en/resources/case-studies.md`, avant la section des exemples live**

Lire d'abord `grep -n "^## " docs/en/resources/case-studies.md` pour repérer le premier `##` et insérer juste avant. Contenu :

```markdown
## 🎯 Results by use case

### Recruit

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Parcel · Auto-Moto, Family Kids & Baby</strong>
    <p>12% conversion rate · 1,053 new customers · CAC €3.5.</p>
    <p><em>"Audience activation is an excellent lever to reach segments that were untapped until now."</em> Marina Lépine, Marketing Manager</p>
  </div>
  <div class="gi-value-card">
    <strong>Parcel · Gifts and events</strong>
    <p>3.12% conversion rate · 5,766 new customers · CAC €4.5, online and in store.</p>
    <p><em>"An omnichannel campaign that managed to reconcile online and offline."</em></p>
  </div>
  <div class="gi-value-card">
    <strong>Parcel · Food and beverages</strong>
    <p>27,000 people reached · 44% conversion rate.</p>
    <p><em>"A smart campaign."</em> Marie Rassat, Senior Marketing & Communication Manager</p>
  </div>
  <div class="gi-value-card">
    <strong>Parcel · Food</strong>
    <p>2.5% conversion rate · 768 new customers · CAC €10.</p>
    <p><em>"A high-impact campaign that puts the brand in front of a target with strong affinities with Japhy's audience."</em> Lucie Prevot, Influence Partnership Manager</p>
  </div>
</div>

### Sample

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Sample · Beauty, Health & Wellness</strong>
    <p>30,000 samples distributed · 65,000 contacts reached.</p>
    <p><em>"A turnkey campaign for our product activation."</em> Sophie Bouyssie, E-commerce Activation Manager</p>
  </div>
  <div class="gi-value-card">
    <strong>Sample · Food</strong>
    <p>30,000 samples and flyers distributed · 80,000 contacts reached.</p>
    <p><em>"A real product discovery experience at a key moment of the customer journey, which encourages purchase through a promotional offer."</em></p>
  </div>
  <div class="gi-value-card">
    <strong>Sample · Sports and outdoor activities</strong>
    <p>13,000 samples and flyers distributed · 50,000 contacts reached, at an affinity event.</p>
    <p><em>"Speaking as close as possible to our target, at the heart of a unifying event."</em> Charlotte Desrumaux, Marketing manager</p>
  </div>
</div>

### Retain

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Direct mail · Reactivation</strong>
    <p>Reactivation of former customers with a dedicated offer: 6.12% conversion rate.</p>
  </div>
</div>

### Monetise

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Self-funded media budget</strong>
    <p>90% of revenue reinvested in acquisition campaigns · €60K+ revenue generated in under a year.</p>
  </div>
  <div class="gi-value-card">
    <strong>New recurring revenue source</strong>
    <p>€200K+ revenue generated in one year · 30+ campaigns delivered per year.</p>
  </div>
  <div class="gi-value-card">
    <strong>Maximised value per campaign</strong>
    <p>+375% average basket per campaign · €50K+ revenue generated since integration.</p>
  </div>
</div>

---

```

- [ ] **Step 3: Vérifier**

Run: `scripts/check-content.sh docs/resources/case-studies.md docs/en/resources/case-studies.md`
Expected: `OK`

- [ ] **Step 4: Commit**

```bash
git add docs/resources/case-studies.md docs/en/resources/case-studies.md
git commit -m "docs: cas clients des decks (Recruter, Échantillonner, Fidéliser, Monétiser)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

### Task 7: Configuration du site (description, meta, nav, thème)

**Files:**
- Modify: `.vitepress/config.ts` (lignes 8, 22–23, 26–27, 91 et 103–104 environ)
- Modify: `.vitepress/theme/index.ts` (lignes 29 et 107)

- [ ] **Step 1: `config.ts` — description et meta**

Remplacer :

```ts
    description: 'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes et monétiser vos audiences.',
```
par :
```ts
    description: 'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.',
```

Remplacer la balise `og:description` :
```ts
      ['meta', { property: 'og:description', content: 'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.' }],
```

Remplacer la balise `ChatGPT-content` :
```ts
      ['meta', { name: 'ChatGPT-content', content: 'getinside documentation - parcel and direct mail marketing: guides for advertisers and network brands' }],
```

- [ ] **Step 2: `config.ts` — nav FR et EN**

Dans `locales.en.themeConfig.nav` : `{ text: '📦 Retailers', link: '/en/publishers/' }` devient `{ text: '📦 Network brands', link: '/en/publishers/' }`.

Dans `themeConfig.nav` (FR) : `{ text: '📦 Retailers', link: '/publishers/' }` devient `{ text: '📦 Marques du réseau', link: '/publishers/' }`.

- [ ] **Step 3: `theme/index.ts`**

Ligne 29 : remplacer `'Guides opérationnels, spécifications techniques et processus pour piloter vos campagnes retail media et monétiser vos audiences.'` par `'Guides opérationnels, spécifications techniques et processus pour recruter, fidéliser et monétiser vos clients avec le colis et le courrier adressé.'`

Ligne 107 : remplacer `'Guides opérationnels pour retail media'` par `'Guides opérationnels pour le marketing par le colis et le courrier adressé'`.

- [ ] **Step 4: Vérifier qu'il ne reste rien dans la config**

Run: `grep -nEi "retail media|retailers" .vitepress/config.ts .vitepress/theme/index.ts`
Expected: aucune ligne, sauf éventuellement des libellés `Retailer Score` et `Retailer Issues` côté EN de la sidebar (traités en Task 9).

- [ ] **Step 5: Build complet (les pages courrier adressé et échantillonnage n'existent pas encore)**

Les liens `/advertisers/direct-mail/` et `/advertisers/sampling/` sont créés en Task 8. Faire donc **Task 8 avant** de lancer `npm run docs:build`. Si le build est lancé trop tôt, VitePress signale `Found dead link /advertisers/direct-mail/`, ce qui est attendu.

- [ ] **Step 6: Commit**

```bash
git add .vitepress/config.ts .vitepress/theme/index.ts
git commit -m "chore: description, meta et nav alignées sur le nouveau messaging

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

## Phase 2 — Pages canaux

### Task 8: Pages Courrier adressé et Échantillonnage

**Files:**
- Create: `docs/advertisers/direct-mail/index.md`, `docs/en/advertisers/direct-mail/index.md`
- Create: `docs/advertisers/sampling/index.md`, `docs/en/advertisers/sampling/index.md`

- [ ] **Step 1: Créer `docs/advertisers/direct-mail/index.md`**

```markdown
---
title: Courrier adressé - Fidéliser vos clients avec getinside
description: Retrouvez par courrier adressé ceux qui n'ouvrent plus vos e-mails. Un support imprimé adressé nommément au client, dans sa boîte aux lettres.
keywords:
  - courrier adressé
  - réactivation client
  - fidélisation client
  - inactifs e-mail
  - up-sell colis
  - getinside
image: /images/gi-keyvisual.svg
---

# Courrier adressé

Un support imprimé adressé nommément au client, dans sa boîte aux lettres.

Vos clients n'ouvrent plus vos e-mails, mais ils ouvrent toujours leurs courriers et leurs colis.

## Deux leviers de fidélisation

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Réactivation par courrier adressé</strong>
    <p>Ciblez efficacement les inactifs e-mail en boîte aux lettres, avec une offre dédiée.</p>
  </div>
  <div class="gi-value-card">
    <strong>Up-sell colis</strong>
    <p>Insérez une offre dédiée dans chaque colis livré pour déclencher de nouveaux achats. Voir l'<a href="../sponsored-mail/">insertion colis</a>.</p>
  </div>
</div>

::: tip Résultat constaté
**Top CVR : 6 %** pour Fidéliser. Une campagne de réactivation par courrier adressé a atteint 6,12 % de taux de conversion.
:::

## Pourquoi ça marche

- **98 % de délivrabilité :** tout le monde ouvre sa boîte aux lettres, même ceux qui ne vous considèrent plus.
- **100 % d'attention :** un canal qui demande un acte physique génère l'attention.

## Conformité

RGPD fondé sur l'intérêt légitime, avec droit d'opposition mentionné sur chaque envoi.

<div class="gi-quick-links">
  <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary">Créer une campagne →</a>
  <a href="/handbook/resources/case-studies" class="btn btn-outline">🚀 Cas clients</a>
</div>
```

- [ ] **Step 2: Créer `docs/en/advertisers/direct-mail/index.md`**

```markdown
---
title: Direct mail - Retain your customers with getinside
description: Reach the customers who no longer open your emails through direct mail. A printed piece addressed to the customer by name, delivered to their mailbox.
keywords:
  - direct mail
  - customer reactivation
  - customer retention
  - email-inactive customers
  - parcel upsell
  - getinside
image: /images/gi-keyvisual.svg
---

# Direct mail

A printed piece addressed to the customer by name, delivered to their mailbox.

Your customers no longer open your emails, but they still open their mail and their parcels.

## Two retention levers

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Reactivation by direct mail</strong>
    <p>Effectively target email-inactive customers in their mailbox, with a dedicated offer.</p>
  </div>
  <div class="gi-value-card">
    <strong>Parcel upsell</strong>
    <p>Insert a dedicated offer in every parcel shipped to trigger new purchases. See <a href="../sponsored-mail/">parcel inserts</a>.</p>
  </div>
</div>

::: tip Observed result
**Best CVR: 6%** for Retain. A reactivation campaign by direct mail reached a 6.12% conversion rate.
:::

## Why it works

- **98% deliverability:** everyone opens their mailbox, even those who no longer notice you.
- **100% attention:** a channel that requires a physical action generates attention.

## Compliance

GDPR processing based on legitimate interest, with the right to object stated on every mailing.

<div class="gi-quick-links">
  <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary">Create a campaign →</a>
  <a href="/handbook/en/resources/case-studies" class="btn btn-outline">🚀 Case studies</a>
</div>
```

- [ ] **Step 3: Créer `docs/advertisers/sampling/index.md`**

```markdown
---
title: Échantillonnage - Faire tester votre produit avec getinside
description: Un échantillon offert pour faire tester, sentir ou toucher votre produit, délivré dans les commandes de marques affinitaires ou lors d'un événement.
keywords:
  - échantillonnage
  - échantillon produit
  - découverte produit
  - audiences affinitaires
  - loi AGEC
  - getinside
image: /images/gi-keyvisual.svg
---

# Échantillonnage

Un échantillon offert pour faire tester, sentir ou toucher votre produit.

Créez une première expérience sensorielle en diffusant vos échantillons dans les commandes de marques affinitaires, ou lors d'un événement affinitaire. Un site e-commerce n'est pas nécessaire.

## Pour quelles marques ?

Marques qui ont un produit à faire tester. Verticales les plus adaptées : Alimentation & Boissons ; Beauté, Santé & Bien-être ; Animaux.

## Exemples de résultats

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Beauté, Santé & Bien-être</strong>
    <p>30 000 échantillons distribués · 65 000 contacts touchés.</p>
  </div>
  <div class="gi-value-card">
    <strong>Alimentation</strong>
    <p>30 000 échantillons et flyers distribués · 80 000 contacts touchés.</p>
  </div>
  <div class="gi-value-card">
    <strong>Sport et activités extérieures</strong>
    <p>13 000 échantillons et flyers distribués · 50 000 contacts touchés lors d'un événement affinitaire.</p>
  </div>
</div>

## Conformité

::: info Loi AGEC
L'échantillon est remis sur demande préalable du consommateur (art. L541-15-10 du code de l'environnement).
:::

<div class="gi-quick-links">
  <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary">Créer une campagne →</a>
  <a href="/handbook/resources/case-studies" class="btn btn-outline">🚀 Cas clients</a>
</div>
```

- [ ] **Step 4: Créer `docs/en/advertisers/sampling/index.md`**

```markdown
---
title: Sampling - Let people try your product with getinside
description: A free sample so people can try, smell or touch your product, delivered in the orders of affinity brands or at an affinity event.
keywords:
  - sampling
  - product sample
  - product discovery
  - affinity audiences
  - AGEC law
  - getinside
image: /images/gi-keyvisual.svg
---

# Sampling

A free sample so people can try, smell or touch your product.

Create a first sensory experience by delivering your samples in the orders of affinity brands, or at an affinity event. An e-commerce site is not required.

## Which brands?

Brands with a product to sample. Best-suited verticals: Food & Beverages; Beauty, Health & Wellness; Pets.

## Example results

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Beauty, Health & Wellness</strong>
    <p>30,000 samples distributed · 65,000 contacts reached.</p>
  </div>
  <div class="gi-value-card">
    <strong>Food</strong>
    <p>30,000 samples and flyers distributed · 80,000 contacts reached.</p>
  </div>
  <div class="gi-value-card">
    <strong>Sports and outdoor activities</strong>
    <p>13,000 samples and flyers distributed · 50,000 contacts reached at an affinity event.</p>
  </div>
</div>

## Compliance

::: info AGEC law
Samples are provided only at the consumer's prior request (Art. L541-15-10 of the French Environmental Code).
:::

<div class="gi-quick-links">
  <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary">Create a campaign →</a>
  <a href="/handbook/en/resources/case-studies" class="btn btn-outline">🚀 Case studies</a>
</div>
```

- [ ] **Step 5: Vérifier le contenu**

Run: `scripts/check-content.sh docs/advertisers/direct-mail/index.md docs/en/advertisers/direct-mail/index.md docs/advertisers/sampling/index.md docs/en/advertisers/sampling/index.md`
Expected: `OK` (la parité FR/EN inclut les 2 nouveaux couples).

- [ ] **Step 6: Build**

Run: `npm run docs:build 2>&1 | tail -15`
Expected: `build complete` sans `dead link`. Les liens HTML bruts `/handbook/...` ne sont pas vérifiés par VitePress : les tester à l'étape suivante.

- [ ] **Step 7: Contrôler les liens HTML bruts dans le build**

Run:
```bash
for p in advertisers/direct-mail advertisers/sampling advertisers/sponsored-mail resources/case-studies; do test -f ".vitepress/dist/$p/index.html" -o -f ".vitepress/dist/$p.html" && echo "OK $p" || echo "MANQUE $p"; done
```
Expected: 4 lignes `OK`.

- [ ] **Step 8: Commit**

```bash
git add docs/advertisers/direct-mail docs/en/advertisers/direct-mail docs/advertisers/sampling docs/en/advertisers/sampling
git commit -m "docs: pages courrier adressé et échantillonnage (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

### Task 9: Sidebar (autres formats en secondaire)

**Files:**
- Modify: `.vitepress/config.ts` (blocs `sidebar['/']` et `sidebar['/en/']`)

- [ ] **Step 1: Sidebar FR — section annonceurs**

Remplacer la section `text: 'Espace Annonceurs'` par :

```ts
          {
            text: 'Espace Annonceurs',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/advertisers/' },
              { text: 'Démarrage Rapide', link: '/advertisers/onboarding-quick-start' },
              {
                text: 'Insertion colis',
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
              { text: 'Courrier adressé', link: '/advertisers/direct-mail/' },
              { text: 'Échantillonnage', link: '/advertisers/sampling/' },
              {
                text: 'Autres formats',
                collapsed: true,
                items: [
                  {
                    text: 'Emailing Dédié',
                    collapsed: true,
                    items: [
                      { text: 'Présentation', link: '/advertisers/dedicated-email/' },
                      { text: 'Brief Annonceur', link: '/advertisers/dedicated-email/1-brief-annonceur' },
                      { text: 'Création Distributeur', link: '/advertisers/dedicated-email/2-creation-distributeur' },
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
                  { text: 'Social Ads', link: '/advertisers/sponsored-social/' },
                  { text: 'Jeu Concours', link: '/advertisers/co-branded-contest/' },
                ],
              },
              { text: 'Service Impression & RSE', link: '/advertisers/printing-services' },
            ],
          },
```

- [ ] **Step 2: Sidebar FR — section marques du réseau**

Remplacer `text: 'Espace Retailers'` par la section suivante (les liens `pricing` disparaissent, les autres formats sont regroupés) :

```ts
          {
            text: 'Espace Marques du réseau',
            collapsed: true,
            items: [
              { text: 'Vue d\'ensemble', link: '/publishers/' },
              { text: 'Démarrage Rapide', link: '/publishers/onboarding-quick-start' },
              { text: 'Guide de Démarrage Complet', link: '/publishers/onboarding-process' },
              {
                text: 'Insertion colis',
                collapsed: true,
                items: [
                  { text: 'Présentation', link: '/publishers/sponsored-mail/' },
                  { text: 'Logistique', link: '/publishers/sponsored-mail/logistics' },
                  { text: 'Reporting', link: '/publishers/sponsored-mail/reporting' },
                ],
              },
              {
                text: 'Autres formats',
                collapsed: true,
                items: [
                  {
                    text: 'Emailing Dédié',
                    collapsed: true,
                    items: [
                      { text: 'Présentation', link: '/publishers/dedicated-email/' },
                      { text: 'Design', link: '/publishers/dedicated-email/1-design' },
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
                  { text: 'Social Ads', link: '/publishers/sponsored-social/' },
                  { text: 'Jeu Concours', link: '/publishers/co-branded-contest/' },
                ],
              },
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
```

- [ ] **Step 3: Sidebar EN — mêmes changements**

Section advertisers EN : mêmes blocs avec les libellés `Overview`, `Quick Start`, `Parcel Inserts` (`Presentation`, `Design Guide` → `Introduction`, `Print Specs`, `Legal`), puis `{ text: 'Direct Mail', link: '/en/advertisers/direct-mail/' }`, `{ text: 'Sampling', link: '/en/advertisers/sampling/' }`, puis le groupe `Other Formats` contenant `Dedicated Email` (`Overview`, `Advertiser Brief`, `Retailer Creation`, `Validation & Delivery`), `Display Email` (`Overview`, `Specs`, `Workflow`), `Social Ads`, `Co-branded Contest`, puis `Printing & CSR Services`. Tous les liens préfixés `/en/`, sans `pricing`.

Section publishers EN : intitulé `Network Brands`, `Overview`, `Quick Start`, `Full Onboarding Guide`, `Parcel Inserts` (`Overview`, `Logistics`, `Reporting`), groupe `Other Formats` (`Dedicated Email` : `Overview`, `Design`, `Tracking & Sending` ; `Display Email` : `Overview`, `Integration` ; `Social Ads` ; `Co-branded Contest`), puis `Management & Revenue` : `Retailer Score` → `Network Brand Score`, `Audiences & Data`, `Payments & Wallet`, `Affiliation Program`. Pas de `Offers & Subscriptions`.

Le libellé « Retailer Issues » de la FAQ EN (`/en/faq/troubleshooting-distributors`) devient `Network Brand Issues`.

- [ ] **Step 4: Vérifier**

Run: `grep -n "pricing" .vitepress/config.ts; npm run docs:build 2>&1 | tail -8`
Expected: `grep` ne renvoie rien ; `build complete` sans `dead link`.

- [ ] **Step 5: Commit**

```bash
git add .vitepress/config.ts
git commit -m "chore: sidebar FR/EN avec canaux principaux et autres formats

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

### Task 10: Pages insertion colis (annonceurs et marques du réseau)

**Files:**
- Modify: `docs/advertisers/sponsored-mail/index.md`, `docs/en/advertisers/sponsored-mail/index.md`
- Modify: `docs/publishers/sponsored-mail/index.md`, `docs/en/publishers/sponsored-mail/index.md`

- [ ] **Step 1: Lire les 4 pages**

Run: `cat docs/advertisers/sponsored-mail/index.md docs/publishers/sponsored-mail/index.md`
Repérer : le frontmatter, l'introduction, les phrases citant « +250 », « e-commerçants », « Retail Media », « 100% de taux d'ouverture/lecture » et tout montant.

- [ ] **Step 2: Annonceurs FR — frontmatter, introduction, étape 1**

Frontmatter (la page n'en a pas, d'après `CLAUDE.md` il est obligatoire) :

```yaml
---
title: Insertion colis - Recruter avec getinside
description: Insérez votre offre dans le colis du client d'une marque affinitaire, ou emportez-la avec sa commande. Recrutez vos futurs clients là où les décisions d'achat se prennent.
keywords:
  - insertion colis
  - recruter des clients
  - audiences affinitaires
  - flyer
  - échantillon
  - getinside
---
```

Titre : `# Insertion colis`. Introduction : « Un support est inséré dans le colis du client ou emporté avec sa commande. Glissez votre offre (flyer, carte, échantillon) dans les colis de marques affinitaires, et touchez vos futurs clients là où les décisions d'achat se prennent. »

Étape 1 : remplacer « Parcourez le réseau de +250 e-commerçants partenaires » par « Parcourez le réseau de marques partenaires (+300 audiences agrégées) ».

- [ ] **Step 3: Annonceurs EN**

Mêmes changements dans `docs/en/advertisers/sponsored-mail/index.md` : title `Parcel inserts - Recruit with getinside`, description `Insert your offer in the parcel of an affinity brand's customer, or hand it over with their order. Recruit your future customers where purchase decisions are made.`, titre `# Parcel inserts`, intro « A printed piece is placed in the customer's parcel or handed over with their order. Slip your offer (flyer, card, sample) into the parcels of affinity brands, and reach your future customers where purchase decisions are made. », étape 1 « Browse the network of partner brands (300+ aggregated audiences) ».

- [ ] **Step 4: Marques du réseau FR et EN**

Dans `docs/publishers/sponsored-mail/index.md` et `docs/en/publishers/sponsored-mail/index.md` : titre FR `# Insertion colis`, EN `# Parcel inserts` ; remplacer « e-commerçant(s) » par « marque(s) du réseau » (EN : « e-retailer(s) » → « network brand(s) ») ; retirer toute mention de « Retail Media » ; mettre à jour le frontmatter (`title`, `description`, `keywords`) dans le même esprit que l'étape 2, côté monétisation (« Monétisez vos colis en délivrant des campagnes de partenaires »).

- [ ] **Step 5: Vérifier**

Run: `scripts/check-content.sh docs/advertisers/sponsored-mail/index.md docs/en/advertisers/sponsored-mail/index.md docs/publishers/sponsored-mail/index.md docs/en/publishers/sponsored-mail/index.md && npm run docs:build 2>&1 | tail -5`
Expected: `OK`, puis `build complete`.

- [ ] **Step 6: Commit**

```bash
git add docs/advertisers/sponsored-mail/index.md docs/en/advertisers/sponsored-mail/index.md docs/publishers/sponsored-mail/index.md docs/en/publishers/sponsored-mail/index.md
git commit -m "docs: pages insertion colis alignées sur le nouveau vocabulaire

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

## Phase 3 — Nettoyage

### Task 11: Suppression des pages pricing et retrait des tarifs

**Files:**
- Delete: `docs/advertisers/pricing.md`, `docs/publishers/pricing.md`, `docs/en/advertisers/pricing.md`, `docs/en/publishers/pricing.md`
- Modify (liens vers pricing) : `docs/advertisers/onboarding-quick-start.md:84`, `docs/en/advertisers/onboarding-quick-start.md:84`, `docs/publishers/payouts.md:46`, `docs/en/publishers/payouts.md:46`
- Modify (tarifs à retirer, FR et EN) : `docs/publishers/payouts.md`, `docs/publishers/onboarding-process.md`, `docs/publishers/affiliation.md`, `docs/faq/troubleshooting-distributors.md`, `docs/faq/billing.md`, `docs/faq/logistics-tech.md`, `docs/faq/account-audiences.md`, `docs/faq/campaign-management.md`, `docs/advertisers/printing-services.md`, `docs/advertisers/onboarding-quick-start.md`, `docs/advertisers/sponsored-mail/index.md`, `docs/advertisers/sponsored-mail/design-guide/index.md`, `docs/advertisers/sponsored-mail/design-guide/legal.md`, `docs/advertisers/dedicated-email/index.md`, `docs/advertisers/dedicated-email/1-brief-annonceur.md`, `docs/advertisers/dedicated-email/2-creation-distributeur.md`, `docs/advertisers/display-email/index.md`, `docs/advertisers/sponsored-social/index.md`, `docs/advertisers/co-branded-contest/index.md`, `docs/publishers/display-email/index.md`, `docs/publishers/dedicated-email/1-design.md`, `docs/publishers/co-branded-contest/index.md`, `docs/publishers/audience-setup.md`, `docs/resources/studio.md`, `docs/resources/library.md`, `docs/glossary.md`, et leurs équivalents sous `docs/en/`.

- [ ] **Step 1: Supprimer les 4 pages pricing**

```bash
git rm docs/advertisers/pricing.md docs/publishers/pricing.md docs/en/advertisers/pricing.md docs/en/publishers/pricing.md
```

- [ ] **Step 2: Retirer les liens vers pricing (build rouge attendu)**

Run: `npm run docs:build 2>&1 | grep -i "dead link"`
Expected: les liens vers `/advertisers/pricing`, `/publishers/pricing` (et EN) dans `onboarding-quick-start.md` et `payouts.md`. Pour chacun :
- `docs/advertisers/onboarding-quick-start.md:84` et son EN : supprimer la ligne `- [Pricing & Offres](/advertisers/pricing) — tarifs et niveaux de service` (EN : `- [Pricing & Offers](/en/advertisers/pricing) — rates and service levels`).
- `docs/publishers/payouts.md:46` et son EN : supprimer la phrase finale « ... ou consultez la [page Pricing](...) » en gardant le début de la phrase (« Vérifiez sur votre espace compte → Abonnement. »).

- [ ] **Step 3: Inventaire des tarifs restants**

Run :
```bash
grep -rnE "€ ?HT|€/|€ par|[0-9] ?€|[0-9] ?%|commission|[Aa]bonnement|[Ss]ubscription|Starter|Managed|[Pp]alier|frais de plateforme|platform fee|[Pp]ricing|[Tt]arif" docs --include='*.md' | grep -vE "docs/(en/)?resources/case-studies.md|docs/(en/)?(advertisers|publishers|start-here)/index.md|docs/(en/)?index.md|docs/(en/)?advertisers/(direct-mail|sampling)/"
```
Expected : une liste de lignes. Elle contient des montants à retirer et des faux positifs à garder (pourcentages de performance, tailles d'impression, « € » dans une mention légale de lot, etc.).

- [ ] **Step 2 bis: Règle de tri**

Pour chaque ligne de la liste :
- **Retirer** si elle indique un prix, une commission, un taux de frais, un palier de reversement, un montant d'abonnement ou de forfait (ex. « 12 % du budget », « 550 € HT par création », « 65 % de taux de reversement », « Starter / Plateforme / Managed »). Supprimer la phrase, la ligne de liste ou la ligne de tableau ; si c'est un tableau entier ou une section dédiée (« Frais », « Offres »), supprimer la section et son entrée de sommaire. Remplacer par rien, ou par « Contactez l'équipe pour connaître les conditions. » seulement si la phrase supprimée laissait une question sans réponse dans une FAQ.
- **Garder** si c'est un résultat de campagne (CAC, CVR, taux de conversion, revenus générés), une spécification technique (grammage, format), ou un montant de lot d'un jeu concours.

Traiter fichier par fichier, FR puis EN du même fichier, en suivant l'ordre de la liste « Files » de cette tâche.

- [ ] **Step 4: Vérifier qu'il ne reste plus de tarif**

Run: relancer la commande de l'étape 3.
Expected : il ne reste que des lignes à conserver, que l'on relit une à une dans le terminal. Toute ligne douteuse est listée dans la description de la PR pour arbitrage.

- [ ] **Step 5: Build et parité**

Run: `scripts/check-content.sh && npm run docs:build 2>&1 | tail -8`
Expected: `OK` puis `build complete` sans `dead link`.

- [ ] **Step 6: Commit**

```bash
git add -A docs
git commit -m "docs: suppression des pages tarifs et retrait des montants (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

### Task 12: Vocabulaire résiduel et fichiers SEO

**Files:**
- Modify: pages restantes contenant les termes bannis (liste produite à l'étape 1)
- Modify: `README.md`, `seo-keywords.md`, `.vitepress/SEO-GUIDELINES.md`

- [ ] **Step 1: Lister ce qui reste**

Run: `scripts/check-content.sh $(git ls-files 'docs/*.md' 'docs/**/*.md')`
Expected: des lignes `TERME BANNI` pour les pages non encore reprises (par exemple `docs/resources/studio.md` : « notre équipe d'experts Retail Media », `docs/faq/logistics-tech.md` : « En Retail Media, les données clients… », `docs/publishers/sponsored-social/index.md`, mot-clé `retail media`).

- [ ] **Step 2: Corriger chaque occurrence**

Règles de remplacement :
- « notre équipe d'experts Retail Media » → « notre équipe d'experts getinside » ; « Expertise Retail Media » → « Expertise getinside ».
- « En Retail Media, les données clients sont un actif First Party » → « Les données clients sont un actif First Party ».
- Mot-clé `retail media` dans un frontmatter → retirer la ligne, ou la remplacer par `marketing par le colis`.
- « e-commerçants » / « e-retailers » → « marques du réseau » / « network brands » quand il s'agit de ceux qui monétisent, « marques » sinon.
- Entrée de glossaire « Distributeur (Publisher/Retailer) » : garder le terme « Distributeur » (utilisé par le Score Distributeur) et retirer « Retailer » de l'intitulé.

- [ ] **Step 3: Fichiers racine**

- `README.md` : première citation `the Retail Media SaaS platform` → `the parcel and direct mail marketing solution`. `Advertisers (Brands) and Publishers (E-retailers)` → `Advertisers (Brands) and Network brands`. Retirer « Pricing » de la ligne `advertisers/` de l'arborescence.
- `seo-keywords.md` : retirer les compétiteurs Retail Media (Criteo, Amazon, etc.), remplacer la section « Retail Media » par « Marketing par le colis et le courrier adressé » (définition du guide, mots-clés : insertion colis, courrier adressé, échantillonnage, recruter, fidéliser, monétiser) et la ligne « getinside : Plateforme européenne… +250 retailers et +500 annonceurs » par « getinside : +500 marques se développent avec la solution ». Retirer tout montant.
- `.vitepress/SEO-GUIDELINES.md` : remplacer les 3 mentions « retail media » par « marketing par le colis et le courrier adressé » (lire d'abord `grep -n -i "retail media" .vitepress/SEO-GUIDELINES.md`).

- [ ] **Step 4: Vérification finale**

Run:
```bash
scripts/check-content.sh $(git ls-files 'docs/*.md' 'docs/**/*.md')
grep -rnEi "retail media|asile colis|250\+|950\+" README.md seo-keywords.md .vitepress/config.ts .vitepress/theme .vitepress/SEO-GUIDELINES.md
npm run docs:build 2>&1 | tail -8
```
Expected: `OK` ; aucune ligne pour le `grep` ; `build complete` sans `dead link`.

- [ ] **Step 5: Relecture du rendu**

Run: `npm run docs:preview` puis ouvrir `http://localhost:4173/handbook/` et `http://localhost:4173/handbook/en/`. Vérifier : accueil (hero, 4 cartes), start-here (3 cartes d'usage, 3 cartes de canaux, liens fonctionnels), hubs annonceurs et marques du réseau, nouvelle sidebar (« Autres formats » repliée), pages courrier adressé et échantillonnage.
Expected: aucun lien cassé, aucune page « Tarifs ».

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "docs: vocabulaire résiduel, README et fichiers SEO alignés

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>"
```

---

## Auto-relecture du plan contre la spec

| Exigence de la spec | Tâche |
| :--- | :--- |
| Accueil et start-here repositionnés | Tasks 1, 2, 3 |
| Hubs annonceurs / marques du réseau | Task 4 |
| Glossaire, cas clients, FAQ index | Tasks 5, 6 |
| 2 nouvelles pages canaux + insertion colis reformulée | Tasks 8, 10 |
| Autres formats regroupés, sidebar FR/EN | Task 9 |
| Config, meta, SEO | Tasks 7, 12 |
| Aucun tarif, pages pricing supprimées | Task 11 |
| TOP CAC 1,21 €, anciens chiffres remplacés | Tasks 1, 4, 5 (`check-content.sh`), 12 |
| Parité FR/EN | `scripts/check-content.sh` à chaque tâche |
| ICP, concurrence, « Agency », essai 30 jours, simulateur exclus | Aucune tâche ne les reprend |
| `score-distributor` non modifié (hors tarifs) | Task 11 seulement |

Points à arbitrer par la personne qui relit :
- Le libellé « Marques du réseau » remplace « Retailers » dans la nav et la sidebar (le guide parle de « marques du réseau »).
- Le chiffre « 6,12 % » du courrier adressé vient d'un deck dont la ligne est ambiguë (« 6, 12% ») ; la Task 6 prévoit de retomber sur « 6 % » si besoin.
