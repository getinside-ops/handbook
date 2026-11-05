# Vérification des faits externes (chantier C) : plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal :** Corriger quatre affirmations externes du handbook (Meta, GIF Outlook, mention alcool, échantillons AGEC), en FR et en EN, et consigner dans un journal interne les sources vérifiées.

**Architecture :** Édition de huit fichiers Markdown de `docs/` (quatre sujets, chacun en FR et en EN, paires strictement parallèles) et création d'un fichier de journal hors `docs/`. Aucun code, aucun changement de thème ni de configuration.

**Tech Stack :** VitePress 1.6.4 (Markdown, conteneurs `:::`), `scripts/check-content.sh`, Vale (`.vale.ini`), Node 24.

**Spec :** `superpowers/specs/2026-11-05-verification-faits-externes-design.md`

---

## Règles pour tout le plan

- Se placer dans le worktree : `/Users/benoitprentout/github repos/handbook/.claude/worktrees/site-improvement-f2f8de`, branche `docs/verification-faits-externes` (déjà créée, ne pas en changer).
- `git add` des fichiers nommés uniquement (jamais `git add .` ni `-A`). Ne jamais committer `.vitepress/dist`.
- Messages de commit en français, style conventionnel du dépôt (`docs: ...`), terminés par :
  `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`
- **Parité FR/EN :** chaque correction FR a sa version EN dans le même commit. Un commit = un sujet = deux fichiers.
- **Vocabulaire :** pas de « annonceur », « distributeur », « marques du réseau », « publisher », « retail media », « asile colis », « e-commerçant ». Pas de prix. Pas de tiret cadratin `—` (Vale `EmDash`). Éviter « essentiel », « crucial », « permet de ». Le frontmatter YAML n'est pas modifié.
- Ne pas modifier d'autres fichiers de `docs/` que les huit listés dans la structure ci-dessous.

## Structure des fichiers

| Fichier | Action |
|---|---|
| `docs/recruit/sponsored-social/index.md` et `docs/en/recruit/sponsored-social/index.md` | Modifier (ligne 66) |
| `docs/recruit/display-email/specs.md` et `docs/en/recruit/display-email/specs.md` | Modifier (lignes 37, 51, 57-58) |
| `docs/recruit/sponsored-mail/design-guide/legal.md` et `docs/en/recruit/sponsored-mail/design-guide/legal.md` | Modifier (ligne 59, ajout d'un bloc après le tableau) |
| `docs/recruit/sampling/index.md` et `docs/en/recruit/sampling/index.md` | Modifier (bloc `::: info`, ligne 43-45) |
| `superpowers/fact-check/2026-11-05-journal-sources.md` | Créer |

---

### Task 1 : Meta, la règle des 20 % de texte n'existe plus

**Files :**
- Modify : `docs/recruit/sponsored-social/index.md:66`
- Modify : `docs/en/recruit/sponsored-social/index.md:66`

- [ ] **Step 1 : Vérifier l'état initial**

Run : `grep -n "20 ?%" docs/recruit/sponsored-social/index.md docs/en/recruit/sponsored-social/index.md`
Expected : deux lignes, FR `Texte ≤ 20 % de la surface` et EN `Text ≤ 20% of surface area`, toutes deux à la ligne 66.

- [ ] **Step 2 : Remplacer la ligne FR**

Dans `docs/recruit/sponsored-social/index.md`, remplacer :

```markdown
| **Image Feed** | 4:5, 1080 × 1350 px | Texte ≤ 20 % de la surface |
```

par :

```markdown
| **Image Feed** | 4:5, 1080 × 1350 px | Peu de texte dans l'image : Meta recommande moins de 20 % de la surface (meilleures performances, sans pénalité de diffusion) |
```

- [ ] **Step 3 : Remplacer la ligne EN**

Dans `docs/en/recruit/sponsored-social/index.md`, remplacer :

```markdown
| **Feed image** | 4:5, 1080 × 1350 px | Text ≤ 20% of surface area |
```

par :

```markdown
| **Feed image** | 4:5, 1080 × 1350 px | Keep image text light: Meta recommends under 20% of the surface (better performance, no delivery penalty) |
```

- [ ] **Step 4 : Vérifier**

Run : `grep -n "≤ 20" docs/recruit/sponsored-social/index.md docs/en/recruit/sponsored-social/index.md; scripts/check-content.sh docs/recruit/sponsored-social/index.md docs/en/recruit/sponsored-social/index.md`
Expected : le `grep` ne renvoie rien ; `check-content.sh` affiche `OK`.

- [ ] **Step 5 : Commit**

```bash
git add docs/recruit/sponsored-social/index.md docs/en/recruit/sponsored-social/index.md
git commit -m "$(cat <<'EOF'
docs(social): le texte limité à 20 % est une recommandation Meta, plus une règle (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2 : GIF animés dans Outlook, nuance par version

**Files :**
- Modify : `docs/recruit/display-email/specs.md` (lignes 37, 51, 57-58)
- Modify : `docs/en/recruit/display-email/specs.md` (mêmes lignes)

- [ ] **Step 1 : Vérifier l'état initial**

Run : `grep -nE "Outlook" docs/recruit/display-email/specs.md docs/en/recruit/display-email/specs.md`
Expected : les lignes 15, 37, 51, 57 (si présentes), 58 dans chaque fichier. La ligne 15 (liste générale des clients mail) ne change pas.

- [ ] **Step 2 : FR, bloc d'avertissement (ligne 37)**

Remplacer :

```markdown
Les GIFs animés sont acceptés, mais **Outlook (versions bureau) n'affiche que la première image**.
```

par :

```markdown
Les GIFs animés sont acceptés, mais **Outlook 2007 à 2019 (Windows) n'affiche que la première image**. Outlook 2021, 2024 et Microsoft 365 animent le GIF, sauf si les animations Windows sont désactivées.
```

- [ ] **Step 3 : FR, consigne « première frame autoportante » (ligne 51)**

Remplacer :

```markdown
- **Première frame autoportante** : elle doit fonctionner seule, puisque Outlook ne lit que celle-ci.
```

par :

```markdown
- **Première frame autoportante** : elle doit fonctionner seule, puisque certains destinataires (Outlook 2007 à 2019, animations désactivées) ne voient que celle-ci.
```

- [ ] **Step 4 : FR, tableau de compatibilité (lignes 57-58)**

Remplacer :

```markdown
| Gmail, Apple Mail, Yahoo, mobiles iOS/Android | Animation complète |
| Outlook (bureau, Windows) | Première frame uniquement |
```

par :

```markdown
| Gmail, Apple Mail, Yahoo, mobiles iOS/Android, Outlook (web, Mac, mobile, nouvel Outlook) | Animation complète |
| Outlook 2021, 2024 et Microsoft 365 (Windows) | Animation complète, sauf animations Windows désactivées (première frame uniquement) |
| Outlook 2007 à 2019 (Windows) | Première frame uniquement |
```

- [ ] **Step 5 : EN, bloc d'avertissement (ligne 37)**

Remplacer :

```markdown
Animated GIFs are accepted, but **Outlook (desktop versions) only displays the first image**.
```

par :

```markdown
Animated GIFs are accepted, but **Outlook 2007 to 2019 (Windows) only displays the first image**. Outlook 2021, 2024 and Microsoft 365 play the GIF, unless Windows animations are turned off.
```

- [ ] **Step 6 : EN, consigne (ligne 51)**

Remplacer :

```markdown
- **Self-contained first frame**: it must work on its own, since Outlook only reads that one.
```

par :

```markdown
- **Self-contained first frame**: it must work on its own, since some recipients (Outlook 2007 to 2019, animations turned off) only see that one.
```

- [ ] **Step 7 : EN, tableau (lignes 57-58)**

Remplacer :

```markdown
| Gmail, Apple Mail, Yahoo, iOS/Android mobile | Full animation |
| Outlook (desktop, Windows) | First frame only |
```

par :

```markdown
| Gmail, Apple Mail, Yahoo, iOS/Android mobile, Outlook (web, Mac, mobile, new Outlook) | Full animation |
| Outlook 2021, 2024 and Microsoft 365 (Windows) | Full animation, unless Windows animations are turned off (first frame only) |
| Outlook 2007 to 2019 (Windows) | First frame only |
```

- [ ] **Step 8 : Vérifier**

Run :
```bash
grep -nE "Outlook \(versions bureau\)|Outlook \(desktop versions\)|Outlook \(bureau, Windows\)|Outlook \(desktop, Windows\)|Outlook ne lit que|Outlook only reads" docs/recruit/display-email/specs.md docs/en/recruit/display-email/specs.md
scripts/check-content.sh docs/recruit/display-email/specs.md docs/en/recruit/display-email/specs.md
```
Expected : le `grep` ne renvoie rien ; `check-content.sh` affiche `OK`.

- [ ] **Step 9 : Commit**

```bash
git add docs/recruit/display-email/specs.md docs/en/recruit/display-email/specs.md
git commit -m "$(cat <<'EOF'
docs(display-email): GIF animés dans Outlook, nuance par version (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3 : Mention alcool, la loi et la recommandation ARPP

**Files :**
- Modify : `docs/recruit/sponsored-mail/design-guide/legal.md` (ligne 59 et insertion après la ligne 66)
- Modify : `docs/en/recruit/sponsored-mail/design-guide/legal.md` (mêmes emplacements)

La ligne « Alcool » est dans le tableau « Mentions Sectorielles ». Le tableau se termine par la ligne « Assurance », suivie d'une ligne vide puis du bloc `:::tip En cas de doute` (FR) / son équivalent EN.

- [ ] **Step 1 : Vérifier l'état initial**

Run : `grep -n "Alcool\|Alcohol\|En cas de doute\|In case of doubt\|If in doubt" docs/recruit/sponsored-mail/design-guide/legal.md docs/en/recruit/sponsored-mail/design-guide/legal.md`
Expected : la ligne du tableau à 59 dans chaque fichier, et le titre du bloc `:::tip` à la ligne 68. Noter le titre exact du bloc EN (il sert de repère pour l'insertion).

- [ ] **Step 2 : FR, ligne du tableau**

Remplacer :

```markdown
| 🍷 **Alcool** | *"L'abus d'alcool est dangereux pour la santé, à consommer avec modération."* + Interdiction de ciblage des mineurs | Loi Evin, art. L3323-4 |
```

par :

```markdown
| 🍷 **Alcool** | *"L'abus d'alcool est dangereux pour la santé."* + Interdiction de ciblage des mineurs (précisions ci-dessous) | Loi Evin, art. L3323-2 et L3323-4 CSP |
```

- [ ] **Step 3 : FR, bloc de précisions**

Insérer, entre la ligne du tableau « Assurance » et la ligne vide qui précède `:::tip En cas de doute`, c'est-à-dire après une ligne vide qui suit le tableau :

```markdown

::: info Alcool : précisions
La mention légale est « L'abus d'alcool est dangereux pour la santé ». La suite « à consommer avec modération » est la formule recommandée par l'ARPP. La publicité pour l'alcool est limitée aux éléments listés à l'article L3323-4 du code de la santé publique, et à certains supports (article L3323-2). Les circulaires commerciales faisant l'objet d'envois nominatifs sont dispensées du message sanitaire par la loi. Sur un flyer inséré dans un colis, gardez-le. En cas de doute, faites valider votre support par votre service juridique.
:::
```

Le résultat doit être : ligne « Assurance », ligne vide, le bloc `::: info Alcool : précisions` ... `:::`, ligne vide, puis `:::tip En cas de doute`.

- [ ] **Step 4 : EN, ligne du tableau**

Remplacer :

```markdown
| 🍷 **Alcohol** | *"L'abus d'alcool est dangereux pour la santé, à consommer avec modération."* (Alcohol abuse is dangerous for health, consume with moderation) + Ban on targeting minors | Evin Law, art. L3323-4 |
```

par :

```markdown
| 🍷 **Alcohol** | *"L'abus d'alcool est dangereux pour la santé."* (Alcohol abuse is dangerous for health) + Ban on targeting minors (details below) | Evin Law, art. L3323-2 and L3323-4 CSP |
```

(Si le texte exact de la ligne EN diffère légèrement dans le fichier, la remplacer en entier par cette version.)

- [ ] **Step 5 : EN, bloc de précisions**

Insérer au même endroit que le Step 3 (après le tableau, avant le bloc `:::tip` relevé au Step 1) :

```markdown

::: info Alcohol: details
The legal notice is "L'abus d'alcool est dangereux pour la santé" (alcohol abuse is dangerous for health). The addition "à consommer avec modération" (consume in moderation) is the wording recommended by the ARPP. Alcohol advertising is limited to the items listed in article L3323-4 of the French Public Health Code, and to certain media (article L3323-2). Commercial circulars sent as named mailings are exempt from the health message by law. On a flyer inserted in a parcel, keep it. If in doubt, have your material validated by your legal department.
:::
```

- [ ] **Step 6 : Vérifier**

Run :
```bash
grep -n "à consommer avec modération" docs/recruit/sponsored-mail/design-guide/legal.md docs/en/recruit/sponsored-mail/design-guide/legal.md
scripts/check-content.sh docs/recruit/sponsored-mail/design-guide/legal.md docs/en/recruit/sponsored-mail/design-guide/legal.md
```
Expected : `grep` : une seule occurrence par fichier, dans le bloc de précisions (plus dans le tableau) ; `check-content.sh` : `OK`. Vérifier visuellement que le bloc est bien entre le tableau et le `:::tip` (`sed -n 56,75p` sur chaque fichier).

- [ ] **Step 7 : Commit**

```bash
git add docs/recruit/sponsored-mail/design-guide/legal.md docs/en/recruit/sponsored-mail/design-guide/legal.md
git commit -m "$(cat <<'EOF'
docs(legal): mention alcool, loi et recommandation ARPP distinguées (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4 : Échantillons, décret du 23 avril 2024

**Files :**
- Modify : `docs/recruit/sampling/index.md:43-45`
- Modify : `docs/en/recruit/sampling/index.md:43-45`

- [ ] **Step 1 : FR**

Remplacer :

```markdown
::: info Loi AGEC
L'échantillon est remis sur demande préalable du consommateur (art. L541-15-10 du code de l'environnement).
:::
```

par :

```markdown
::: info Loi AGEC
L'échantillon est remis sur demande préalable du consommateur (art. L541-15-10 du code de l'environnement). L'interdiction est pleinement applicable depuis le 1er juillet 2024 (décret n° 2024-373 du 23 avril 2024, art. D541-345 et D541-346). Quand la demande est exprimée à distance, la première demande du consommateur vaut pour les remises suivantes, jusqu'à ce qu'il y renonce.
:::
```

- [ ] **Step 2 : EN**

Remplacer :

```markdown
::: info AGEC law
Samples are provided only at the consumer's prior request (Art. L541-15-10 of the French Environmental Code).
:::
```

par :

```markdown
::: info AGEC law
Samples are provided only at the consumer's prior request (Art. L541-15-10 of the French Environmental Code). The ban has applied in full since July 1, 2024 (Decree No. 2024-373 of April 23, 2024, Art. D541-345 and D541-346). When the request is made remotely, the consumer's first request covers the following deliveries until they opt out.
:::
```

- [ ] **Step 3 : Vérifier**

Run : `grep -n "2024-373" docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md; scripts/check-content.sh docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md`
Expected : une occurrence par fichier ; `OK`. Les résumés `docs/start-here/index.md`, `docs/glossary.md` (et EN) ne sont pas modifiés : `git diff --stat -- docs/start-here docs/glossary.md docs/en/start-here docs/en/glossary.md` est vide.

- [ ] **Step 4 : Commit**

```bash
git add docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md
git commit -m "$(cat <<'EOF'
docs(sampling): loi AGEC, décret du 23 avril 2024 et demande à distance (FR/EN)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5 : Journal des sources

**Files :**
- Create : `superpowers/fact-check/2026-11-05-journal-sources.md`

- [ ] **Step 1 : Créer le fichier avec ce contenu**

```markdown
# Journal des sources : faits externes du handbook

Contrôle du 2026-11-05. Fichier interne, non publié (hors `docs/`). Chantier C, spec `superpowers/specs/2026-11-05-verification-faits-externes-design.md`.

Statuts : `confirmé` (aucune modification), `corrigé` (page modifiée dans ce chantier), `règle getinside, à valider` (non vérifiable depuis une source publique). La colonne « Source » indique si la source est primaire (texte officiel, éditeur de la plateforme) ou secondaire (relais d'une annonce officielle).

## Réglementation

| Affirmation | Pages (FR, miroir EN) | Statut | Source (type) | Contrôlé le |
|---|---|---|---|---|
| Interdiction de fournir un échantillon sans demande du consommateur (art. L541-15-10, V du code de l'environnement) | `recruit/sampling/index.md`, `start-here/index.md`, `glossary.md` | confirmé | Légifrance, <https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041568974> (primaire) | 2026-11-05 |
| Application pleine depuis le 1er juillet 2024 (décret n° 2024-373 du 23 avril 2024, art. D541-345 et D541-346) ; première demande à distance valable jusqu'à renonciation | `recruit/sampling/index.md` | corrigé | Service-public Entreprendre, <https://entreprendre.service-public.gouv.fr/vosdroits/F38125> et <https://entreprendre.service-public.gouv.fr/actualites/A17359> (primaire) ; INC, <https://www.inc-conso.fr/content/echantillons-de-produits-pour-les-obtenir-demandez-les> (primaire) | 2026-11-05 |
| Triman et Info-tri obligatoires sur les papiers graphiques depuis le 1er janvier 2022 | `recruit/sponsored-mail/design-guide/legal.md`, `glossary.md`, `resources/library.md` | confirmé | Citeo, <https://www.citeo.com/communication-responsable/info-tri/> ; ministère de la Transition écologique, FAQ Triman, <https://www.ecologie.gouv.fr/sites/default/files/documents/FAQ%20Triman%20et%20frises.pdf> (primaires) | 2026-11-05 |
| Tailles minimales Triman : 10 mm (standard), 6 mm (compacte) | `recruit/sponsored-mail/design-guide/legal.md` | confirmé | Guide Info-tri Adelphe, <https://www.adelphe.fr/wp-content/uploads/2026/03/adelphe_guide_info-tri_fr.pdf> (primaire) | 2026-11-05 |
| Prospection par courrier postal : intérêt légitime, information préalable, droit d'opposition à chaque sollicitation | `start-here/index.md`, `retain/direct-mail/index.md` | confirmé | CNIL, <https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-postal> (primaire) | 2026-11-05 |
| Transmission de données à des partenaires pour prospection postale : information et opposition simple et gratuite | non cité dans les pages | confirmé (pour mémoire) | CNIL, <http://cnil.fr/fr/la-prospection-vers-les-particuliers-b-c-quelles-regles-pour-transmettre-des-donnees-des-partenaires> (primaire) | 2026-11-05 |
| Message sanitaire alcool : « l'abus d'alcool est dangereux pour la santé » (art. L3323-4 CSP) ; envois nominatifs et circulaires professionnelles dispensés ; contenu limité aux éléments de L3323-4 ; supports limités par L3323-2 | `recruit/sponsored-mail/design-guide/legal.md` | corrigé | Légifrance, chapitre III, <https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006072665/LEGISCTA000006171199/2021-07-01/> ; MILDECA, <https://www.drogues.gouv.fr/en-matiere-dalcool> (primaires) | 2026-11-05 |
| « …, à consommer avec modération » : formule recommandée par l'ARPP, pas texte de loi | `recruit/sponsored-mail/design-guide/legal.md` | corrigé | ARPP, Recommandation Alcool, <https://www.arpp.org/nous-consulter/regles/regles-de-deontologie/alcool/> (primaire) | 2026-11-05 |

Point ouvert, non tranché dans le handbook : l'article L3323-2 limite les supports autorisés pour la publicité sur l'alcool. L'application à l'insertion colis par une marque qui n'est pas productrice n'est pas couverte par une source publique consultée. Question à poser à un juriste avant toute affirmation.

## Plateformes

| Affirmation | Pages | Statut | Source (type) | Contrôlé le |
|---|---|---|---|---|
| La règle des 20 % de texte dans l'image a été supprimée par Meta (septembre 2020) ; reste une recommandation de performance | `recruit/sponsored-social/index.md` | corrigé | Adzooma, <https://adzooma.com/blog/facebook-advertising-removes-20-text-rule-on-images/> (secondaire, cite l'annonce Meta). À recouper sur le Centre d'aide Meta « À propos du texte dans les images publicitaires » | 2026-11-05 |
| Les « branded content ads » s'appellent « partnership ads » ; option « Allow brand partner to boost » | `recruit/sponsored-social/index.md`, `monetize/sponsored-social/index.md` | confirmé | Centre d'aide Instagram (miroir), <https://my.workplace.com/help/instagram/1022082264667994> (primaire, hôte miroir) | 2026-11-05 |
| Spark Ads TikTok : code d'autorisation publicitaire, durée de validité réglable | `recruit/sponsored-social/index.md`, `monetize/sponsored-social/index.md` | confirmé | Nowfluence, <https://www.nowfluence.co/research/influencer-ad-guide> (secondaire). À recouper sur l'aide TikTok for Business | 2026-11-05 |
| Formats 9:16 (1080 × 1920) et 4:5 (1080 × 1350) | `recruit/sponsored-social/index.md` | non recoupé | Aucune source officielle consultée ; à vérifier sur les spécifications Meta et TikTok | |
| Outlook 2007 à 2019 n'affichent que la première image d'un GIF ; Outlook 2021, 2024 et Microsoft 365 animent sauf animations Windows désactivées ; nouvel Outlook, web, Mac, mobile animent | `recruit/display-email/specs.md` | corrigé | Microsoft Support, <https://support.microsoft.com/en-us/outlook/the-animated-graphic-in-my-e-mail-message-doesn-t-work> (primaire) ; Mailjet, <https://documentation.mailjet.com/hc/en-us/articles/38816577432475-Outlook-rendering-issues> et Really Good Emails, <https://reallygoodemails.com/school/blog/classic-vs-new-outlook-rendering-changes> (secondaires) | 2026-11-05 |

## Chiffres de marque

| Affirmation | Pages | Statut | Source (type) | Contrôlé le |
|---|---|---|---|---|
| 98 %, 100 %, 86 % des décisions d'achat au domicile, +500 marques, top CAC 1,21 €, top CVR 6 %, top revenus +215 K€ par an | Accueil, hubs, `start-here/index.md` | confirmé | getinside.fr, <https://www.getinside.fr/> (primaire, cohérence avec le guide de messaging) | 2026-11-05 |
| ROAS 4,5x+ et 10x+, note 4,2/5, « agence » | non repris | hors périmètre | getinside.fr. Le guide de messaging prime : ces éléments ne sont pas importés | 2026-11-05 |

## Règles getinside à valider par l'équipe

Non vérifiables depuis l'extérieur. À confirmer par l'équipe ou les prestataires avant toute publication ou révision.

| Affirmation | Pages | Statut |
|---|---|---|
| QR code minimal 14 × 14 mm (A6) | `recruit/sponsored-mail/design-guide/print-specs.md`, `best-practices.md` | règle getinside, à valider |
| Fond perdu 2 mm, zone tranquille 3 mm, grammage 250 à 300 g/m², PDF/X-4 | `recruit/sponsored-mail/design-guide/print-specs.md` | règle getinside, à valider |
| Imprimeurs certifiés ISO 9001, ISO 14001, Imprim'vert ; papier FSC/PEFC ; encres végétales | `recruit/sustainability.md`, `recruit/printing-services.md`, `faq/logistics-tech.md` | règle getinside, à valider |
| Assemblage manuel par des Entreprises Adaptées | `faq/logistics-tech.md` | règle getinside, à valider |
| Mécanisme de recueil de la demande préalable pour l'échantillonnage | `recruit/sampling/index.md` | non décrit dans le handbook, à documenter par l'équipe |

## Prochain contrôle

À chaque évolution réglementaire connue (AGEC, REP papiers, Evin, doctrine CNIL) et au moins tous les six mois. Priorités : recouper les trois lignes « secondaire » sur les pages officielles Meta et TikTok, puis les spécifications de formats.
```

- [ ] **Step 2 : Vérifier**

Run : `grep -c "^|" superpowers/fact-check/2026-11-05-journal-sources.md; grep -n "TBD\|TODO" superpowers/fact-check/2026-11-05-journal-sources.md`
Expected : un nombre de lignes de tableau supérieur à 25 ; aucune ligne `TBD`/`TODO`.

- [ ] **Step 3 : Commit**

```bash
git add superpowers/fact-check/2026-11-05-journal-sources.md
git commit -m "$(cat <<'EOF'
docs(fact-check): journal des sources des faits externes (2026-11-05)

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 6 : Vérification finale

- [ ] **Step 1 : Parité et termes bannis sur les huit fichiers**

Run :
```bash
scripts/check-content.sh \
  docs/recruit/sponsored-social/index.md docs/en/recruit/sponsored-social/index.md \
  docs/recruit/display-email/specs.md docs/en/recruit/display-email/specs.md \
  docs/recruit/sponsored-mail/design-guide/legal.md docs/en/recruit/sponsored-mail/design-guide/legal.md \
  docs/recruit/sampling/index.md docs/en/recruit/sampling/index.md
```
Expected : `OK`.

- [ ] **Step 2 : Vale sur les huit fichiers**

Run :
```bash
vale --output=JSON docs/recruit/sponsored-social/index.md docs/recruit/display-email/specs.md docs/recruit/sponsored-mail/design-guide/legal.md docs/recruit/sampling/index.md docs/en/recruit/sponsored-social/index.md docs/en/recruit/display-email/specs.md docs/en/recruit/sponsored-mail/design-guide/legal.md docs/en/recruit/sampling/index.md | python3 -c "
import json,sys
d=json.load(sys.stdin)
for f,v in d.items():
    for a in v: print(f, a['Line'], a['Check'], a['Message'][:80])
print(sum(len(v) for v in d.values()), 'alertes')"
```
Expected : seules des alertes sur le frontmatter (lignes 2 et 3) ou des titres de conteneurs (`::: info Alcool : précisions`) ; aucune alerte `EmDash` ni `AIVocabFR`/`AIVocabEN` dans les phrases ajoutées. Toute alerte `SentenceLength` sur une phrase ajoutée est à noter dans le rapport (avertissement, pas bloquant). Si une alerte `EmDash` ou `AIVocab` apparaît dans une phrase ajoutée, reformuler la phrase.

- [ ] **Step 3 : Build**

Run : `npm run docs:build`
Expected : sortie terminée sans erreur (pas de `error` ni d'erreur YAML). Contrôle rapide du HTML produit :
```bash
grep -c "2024-373" .vitepress/dist/recruit/sampling/index.html .vitepress/dist/en/recruit/sampling/index.html
grep -c "Outlook 2007" .vitepress/dist/recruit/display-email/specs.html .vitepress/dist/en/recruit/display-email/specs.html
```
Expected : au moins `1` par fichier.

- [ ] **Step 4 : Greps de non-régression**

Run :
```bash
grep -rnE "≤ 20 ?%" docs/recruit/sponsored-social docs/en/recruit/sponsored-social
grep -rnE "Outlook \(versions bureau\)|Outlook \(desktop versions\)" docs
git diff --stat main...HEAD -- docs
```
Expected : les deux `grep` ne renvoient rien ; le `diff --stat` ne liste que les huit fichiers prévus.

- [ ] **Step 5 : État du dépôt**

Run : `git status --short; git log --oneline main..HEAD`
Expected : `git status` vide ; sept commits depuis `main` : la spec, le plan, les quatre commits de contenu (Tasks 1 à 4) et le journal (Task 5).
