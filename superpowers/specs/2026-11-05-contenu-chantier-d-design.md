# Contenu (chantier D) : étoffer Fidéliser et Échantillonnage, résumés « En bref »

Date : 2026-11-05. Statut : conception validée. Suite des chantiers A+B (PR #4) et C (PR #5, `2026-11-05-verification-faits-externes-design.md`).

## Objectif

Rendre les pages Fidéliser, Courrier adressé et Échantillonnage aussi utiles que la page Insertion colis, et aider le lecteur à s'orienter dans les guides longs. Le handbook sert d'abord les clients de getinside.

**Principe : on n'écrit que ce que les sources soutiennent.** Les documents Drive consultés (guide de messaging du 30 octobre, deck « design system » du 3 novembre) décrivent le positionnement et les preuves, pas le déroulé opérationnel. Les trous vont dans un fichier de questions pour l'équipe, pas dans les pages.

Règles du projet inchangées : le guide de messaging prime, aucun prix, pas de « agence », une seule sorte de marque (« la marque »). Phrases d'au plus 20 mots, pas de tiret cadratin, pas de vocabulaire Vale `AIVocab` (« essentiel », « permet de », « levier de croissance », etc.).

## Sources autorisées

| Source | Usage |
|---|---|
| Guide de messaging (Drive, version du 30 octobre 2026) | Verbatims, deux leviers Fidéliser, preuves 98 %, 100 %, 86 %, top CVR 6 %, formule de délégation |
| Deck « design system » (Drive, 3 novembre 2026) | Cas clients déjà repris dans `resources/case-studies.md` |
| getinside.fr, pages Fidéliser et Échantillonnage | Trame de parcours uniquement (choisir, configurer, suivre) ; à confirmer par l'équipe, voir la liste de questions |
| CNIL, « La prospection commerciale par courrier postal » (vérifiée au chantier C) | Règles d'information et d'opposition |
| Contenu actuel du handbook | Résumés « En bref » |

**Exclus** (non confirmés par le guide) : ROAS 4,5x+ et 10x+, note 4,2/5, « 98 % contre 30 % », « 8 % d'engagement », « 17 jours », les quatre leviers du site (événements de vie, réactivation, réachat, parrainage), « agence », tarifs, simulateur, essai gratuit. Écart noté : le deck affiche « TOP CAC 2,06 € » alors que le guide et getinside.fr donnent 1,21 € ; le handbook garde 1,21 € (le guide prime) et la question est posée à l'équipe.

## Changements

### 1. Fidéliser (`docs/retain/index.md`, environ 350 mots)

Conserver l'introduction, les deux cartes et les liens existants. Ajouter :

- **Comment ça marche** : quatre étapes `gi-step`.
  1. Choisissez votre audience : vos clients connus, dont ceux qui n'ouvrent plus vos e-mails.
  2. Choisissez le canal : courrier adressé, ou offre dans le colis que vous livrez.
  3. Configurez la campagne : personnalisez la création et le message, ou confiez la campagne à l'équipe, qui gère la production, le contrôle qualité et la livraison.
  4. Suivez les résultats : scans et achats générés, campagne après campagne, depuis la plateforme.
- **Pourquoi ça marche** : 98 % de délivrabilité, 100 % d'attention, top CVR 6 % (mêmes formulations que la page Courrier adressé, sans les répéter mot pour mot).

### 2. Courrier adressé (`docs/retain/direct-mail/index.md`, environ 450 mots)

Conserver l'existant. Ajouter :

- **Ce qu'il vous faut** : un fichier clients avec adresse postale. Les inactifs e-mail sont la cible naturelle. Aucune précision de format, de champs ou de volume (voir questions).
- **Comment ça marche** : les quatre mêmes étapes, adaptées au courrier adressé, sans détail de délai.
- **Conformité** (remplace la ligne actuelle) : RGPD fondé sur l'intérêt légitime ; les personnes sont informées à la collecte de leur adresse et peuvent s'opposer simplement et gratuitement, à la collecte et à chaque envoi ; la trace des oppositions se conserve (la CNIL recommande au moins 3 ans). Source : CNIL, vérifiée au chantier C.
- Un lien vers `resources/case-studies` pour la preuve (cas Fidéliser déjà présent dans cette page).

### 3. Échantillonnage (`docs/recruit/sampling/index.md`, environ 400 mots)

Conserver l'existant (résultats, bloc AGEC). Ajouter une section **Comment ça marche** en trois étapes :

1. Choisissez le produit : un échantillon représentatif, en format découverte.
2. Il accompagne une commande : dans les commandes de marques affinitaires, ou lors d'un événement affinitaire, avec un flyer qui porte votre offre.
3. Le client le teste, puis passe commande, par exemple grâce à l'offre promotionnelle du flyer.

Et une phrase de mesure : un QR code ou un code unique relie l'échantillon à l'achat (formulation de getinside.fr, à confirmer par l'équipe).

### 4. Résumés « En bref » (quatre pages longues, FR et EN)

Un encadré `::: tip En bref` de 3 à 4 puces, placé juste après le H1 (ou après le paragraphe d'introduction s'il existe), qui résume le contenu **existant** de la page sans fait nouveau :

- `docs/recruit/sponsored-mail/design-guide/best-practices.md` (Anatomie d'un flyer)
- `docs/recruit/sponsored-mail/design-guide/index.md` (introduction du guide de création)
- `docs/monetize/onboarding-process.md` (guide de démarrage Monétiser)
- `docs/recruit/sustainability.md` (Service Impression & RSE)

Exclus volontairement : FAQ, glossaire, cas clients et spécifications techniques d'impression (pages de consultation, où l'on cherche une réponse précise plutôt qu'on ne lit de bout en bout).

### 5. Fichier de questions pour l'équipe

`superpowers/fact-check/2026-11-05-questions-equipe.md`. Une question par ligne, avec la page concernée et ce qui bloque :

- définition d'un « client inactif e-mail » (durée, critère) ;
- fichier clients : champs, format, volume minimum, mode de dépôt ;
- courrier adressé : formats, personnalisation, délais de production et d'envoi, qui imprime et poste ;
- échantillons : formats et poids acceptés, qui expédie, comment la demande préalable du consommateur est recueillie, suivi ;
- confirmation des étapes inspirées de getinside.fr ;
- validation des quatre leviers du site et des chiffres « 98 % contre 30 % » et « 8 % d'engagement » avant tout usage ;
- écart TOP CAC 2,06 € (deck) contre 1,21 € (guide et site).

### Parité FR/EN

Chaque page est modifiée en FR et en EN dans le même commit, avec la même structure. Aucune nouvelle page, donc aucun changement de `config.ts`, de sidebar, de redirections ni de sitemap.

## Hors périmètre

- Découpage des pages longues (URL, redirections, sidebar, parité) : écarté. Le sommaire « On this page » existe déjà.
- Contenu opérationnel non sourcé (délais, formats, volumes, fichiers, expédition).
- Prix, plans, essai gratuit, « agence », ICP et concurrents du guide.
- Thème, menu, accessibilité (chantiers A+B terminés).

## Tests et critères d'acceptation

- `scripts/check-content.sh` sur les fichiers modifiés : parité FR/EN et termes bannis.
- Vale sur les fichiers modifiés (FR et EN) : seules des alertes sur frontmatter et titres de conteneurs tolérées.
- Audit H1 : `for f in $(find docs -name "*.md" -not -path "*/superpowers/*"); do if ! grep -q "^# " "$f" && ! grep -q "^layout:" "$f"; then echo "MISSING H1: $f"; fi; done` ne renvoie rien.
- `npm run docs:build` sans erreur.
- `grep -riE "agence|agency|ROAS|4,2|30 % contre|8 % d'engagement|17 jours" ` sur les fichiers modifiés : aucune occurrence nouvelle.
- Seuls les fichiers prévus sont modifiés : 6 fichiers pour les trois pages étoffées (FR et EN), 8 pour les résumés, plus le fichier de questions.
- Les pages étoffées restent dans les cibles du guide de style (300 à 450 mots pour une vue d'ensemble).

## Risques

- Les étapes inspirées de getinside.fr restent à confirmer par l'équipe : elles sont formulées au niveau du parcours, sans détail opérationnel, pour limiter le risque d'erreur.
- Un résumé « En bref » peut diverger du texte si la page change : à relire lors des prochaines modifications de ces pages.
