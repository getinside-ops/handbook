# Amélioration du handbook : accessibilité, lecture, fraîcheur

Date : 2026-11-05. Statut : conception validée (chantiers A+B), chantiers C et D à spécifier ensuite.

## Objectif

Le handbook sert d'abord les **clients** de getinside : trouver vite une réponse, créer une campagne sans erreur. Il doit être accessible (WCAG 2.2 AA), agréable à lire et à jour avec ce qui existe en ligne.

**Source de vérité :** le « Guide de messaging - getinside » prime sur getinside.fr. Conséquences : on n'importe pas le terme « agence », ni les ROAS (4,5x+, 10x+), ni la note 4,2/5, ni aucun prix. Les chiffres déjà alignés (98 %, 100 %, 86 %, top CAC, top CVR, top revenus) restent.

## Découpage en chantiers

| Chantier | Contenu | Statut |
|---|---|---|
| A | Accessibilité et lecture (CSS, config) | Spécifié ici |
| B | Repères de fraîcheur | Spécifié ici |
| C | Vérification des faits externes (AGEC, RGPD, Stop Pub, specs d'impression, QR, chiffres) avec journal des sources | À spécifier après A+B |
| D | Contenu : étoffer Fidéliser et Échantillonnage, découper les pages longues, résumés « En bref » | À spécifier après C |

Ordre : A+B (une PR), puis C, puis D. C avant D pour ne pas réécrire sur des faits périmés. Chaque chantier a son plan et sa PR.

## Chantier A : accessibilité et lecture

Déjà en place, à ne pas refaire : mode sombre conforme (menthe sur `#1b1b1f` = 5,85:1), `prefers-reduced-motion`, focus visible sur cartes et boutons, recherche locale, lien « Skip to content », `lang`, titres H1/H2 cohérents, aucune image sans `alt`.

Changements, tous dans `.vitepress/theme/style.css` et `.vitepress/config.ts` :

1. **Vert du texte en mode clair.** `--vp-c-brand-1` passe de `#0aaa8e` (2,94:1 sur blanc) à `#067a66` (5,27:1 sur blanc, 4,98:1 sur `#e8fdf7`, 4,88:1 sur `#f6f6f7`). `--vp-c-brand-2` (survol) est assombri (cible : au moins 6:1 sur blanc, par exemple `#06705c`). `--gi-tint-blue-text` reçoit la même correction. Le menthe vif `#6AE7C8` reste réservé aux fonds, boutons et décors. Le mode sombre n'est pas modifié.
2. **Menu.** Les emojis des entrées de `nav` (FR et EN) sont enveloppés dans `<span aria-hidden="true">`, pour que les lecteurs d'écran n'annoncent que le texte.
3. **Focus clavier global.** Contour `:focus-visible` (2 px, `--vp-c-brand-1`, décalage 2 px) pour les liens et boutons du contenu, du sommaire et de la barre latérale, en plus des composants déjà couverts.
4. **Lecture.** Interligne du texte courant d'au moins 1,6 ; largeur de ligne du contenu autour de 65 à 75 caractères ; cibles tactiles d'au moins 24 px sur mobile pour les éléments de navigation.
5. **Vérification.** Audit axe-core via Playwright (déjà en devDependency) sur : accueil, guide de création, FAQ, glossaire, une page EN ; en clair et en sombre, mobile (375 px) et desktop. Zéro violation de contraste ou de nom accessible attendue ; le résultat est consigné dans la description de la PR. Aucun script d'audit n'est ajouté au dépôt.

## Chantier B : repères de fraîcheur

1. **« Mis à jour le … ».** `lastUpdated: true` dans `themeConfig`, avec `lastUpdated.text` localisé (FR : « Mis à jour le », EN : « Last updated »). La CI est déjà en `fetch-depth: 0` (`.github/workflows/deploy.yml`), donc les dates git sont fiables.
2. **Pied de page.** `themeConfig.footer.message` : contact `bonjour@getinside.fr` (adresse publique de getinside.fr) et `studio@getinside.fr`. L'adresse personnelle `benoit@getinside.fr` est retirée du pied de page. Les autres occurrences dans `docs/` (4) ne sont pas touchées dans ce lot ; elles seront examinées au chantier C.
3. **JSON-LD.** Dans `buildWebPageSchema` et le schéma `WebSite` (`config.ts`), `publisher.url` et `sameAs` pointent vers `https://www.getinside.fr/` au lieu de `getinside.media`. Les liens vers l'application (`app.getinside.media`) ne changent pas.

## Hors périmètre

- Chiffres, vocabulaire et réglementation (chantiers C et D).
- Prix, terme « agence », ROAS : exclus par les règles du projet.
- Changement de police (Garnett reste), changement de hiérarchie du menu.
- Tout script ou outil récurrent de contrôle de fraîcheur.

## Tests et critères d'acceptation

- `npm run docs:build` passe sans erreur (YAML, liens).
- `scripts/check-content.sh` passe sur les fichiers touchés, le cas échéant.
- Contraste texte/fond d'au moins 4,5:1 pour tout texte vert en mode clair, mesuré.
- Navigation clavier : chaque lien et bouton de la page d'accueil et d'une page de guide montre un focus visible.
- Chaque page affiche une date de mise à jour (FR et EN).
- Le pied de page n'affiche plus `benoit@getinside.fr` ; le JSON-LD ne contient plus `getinside.media` comme éditeur.

## Risques

- Un vert plus foncé modifie légèrement l'apparence des liens et accents : il est validé par l'utilisateur (option « AA, vert foncé pour le texte »).
- `lastUpdated` s'appuie sur git ; un commit massif (renommage, reformatage) remettrait toutes les dates à la même valeur. À surveiller, sans traitement particulier.
