# Vérification des faits externes (chantier C)

Date : 2026-11-05. Statut : conception validée. Suite du chantier A+B (`2026-11-05-amelioration-site-design.md`, livré par la PR #4). Le chantier D (contenu) reste à spécifier.

## Objectif

Aligner les affirmations externes du handbook (réglementation, plateformes, clients e-mail) sur les sources officielles, et garder une trace de ce qui a été vérifié, par qui et quand. Le handbook sert d'abord les clients de getinside : une consigne périmée coûte un flyer refusé ou une campagne mal configurée.

Règles du projet inchangées : le guide de messaging prime, aucun prix, pas de « agence ». Le texte ne tranche aucune question juridique non couverte par une source publique.

## Résultat de la vérification (2026-11-05)

### Confirmé, aucune modification

| Affirmation | Pages | Source |
|---|---|---|
| Triman et Info-tri obligatoires sur les papiers graphiques depuis le 1er janvier 2022 ; tailles minimales 10 mm (standard) et 6 mm (compacte) | `recruit/sponsored-mail/design-guide/legal.md`, glossaire, ressources | Citeo (Info-tri), guide Adelphe Info-tri, ministère de la Transition écologique (FAQ Triman) |
| Prospection par courrier postal fondée sur l'intérêt légitime, avec information préalable et droit d'opposition à chaque sollicitation | `start-here/index.md`, `retain/direct-mail/index.md` | CNIL, « La prospection commerciale par courrier postal » |
| Interdiction de fournir un échantillon sans demande du consommateur, art. L541-15-10 V du code de l'environnement | `recruit/sampling/index.md`, `start-here/index.md`, glossaire | Légifrance, service-public Entreprendre, INC |
| Partnership Ads (Meta), Spark Ads (TikTok), « Autoriser le partenaire à booster » | `recruit/sponsored-social/index.md`, `monetize/sponsored-social/index.md` | Centre d'aide Instagram (« branded content ads are now called partnership ads ») |
| 98 %, 100 %, 86 %, top CAC, top CVR, top revenus | Accueil, hubs | getinside.fr (contrôle de cohérence avec le guide de messaging) |

### À corriger (quatre écarts)

1. **Meta, 20 % de texte.** La règle a été supprimée par Meta en septembre 2020 : plus de pénalité de diffusion, seule reste une recommandation de performance. Pages : `docs/recruit/sponsored-social/index.md:66` et `docs/en/recruit/sponsored-social/index.md:66`.
2. **GIF dans Outlook.** Seuls Outlook 2007 à 2019 (Windows) affichent la première image. Outlook 2021, 2024 et Microsoft 365 animent le GIF, sauf si les animations Windows sont désactivées. Le nouvel Outlook, Outlook sur le web, Mac et mobile animent. Pages : `docs/recruit/display-email/specs.md:37,51,58` et la version EN aux mêmes lignes.
3. **Mention alcool.** La loi (art. L3323-4 CSP) impose « l'abus d'alcool est dangereux pour la santé ». « À consommer avec modération » vient de la recommandation ARPP. Les circulaires commerciales faisant l'objet d'envois nominatifs et celles destinées aux professionnels sont exemptées du message. La publicité autorisée est limitée aux éléments listés à l'art. L3323-4, et les supports autorisés par l'art. L3323-2. Pages : `docs/recruit/sponsored-mail/design-guide/legal.md:59` et la version EN.
4. **Échantillons.** Le texte est exact mais incomplet. Le décret n° 2024-373 du 23 avril 2024 (art. D541-345 et D541-346) a rendu l'interdiction pleinement applicable au 1er juillet 2024. Quand le professionnel communique à distance, la première demande du consommateur autorise les remises successives jusqu'à renonciation. Page : `docs/recruit/sampling/index.md:44` et la version EN. Les résumés (`start-here`, glossaire) ne changent pas.

### Non vérifiable depuis l'extérieur

Règles de getinside ou affirmations sur les prestataires, à valider par l'équipe : QR code minimal de 14 mm, fond perdu 2 mm et zone tranquille 3 mm, grammage 250 à 300 g/m², certifications des imprimeurs (ISO 9001, ISO 14001, Imprim'vert, FSC/PEFC), assemblage par des Entreprises Adaptées. Elles figurent au journal avec le statut « règle getinside, à valider ».

## Changements

### 1. Corrections de contenu (FR et EN, parité stricte)

Rédaction cible, à reprendre dans le plan avec le texte exact :

- **Réseaux sociaux.** La cellule devient une recommandation, par exemple « Peu de texte dans l'image (Meta recommande moins de 20 % de la surface, sans pénalité de diffusion) ». Même sens en EN.
- **Display Email.** Trois lignes réécrites : « Outlook 2007 à 2019 (Windows) n'affiche que la première image ; Outlook 2021, 2024 et Microsoft 365 animent le GIF, sauf si les animations Windows sont désactivées ». La consigne « première image autoportante » est conservée, car une part des destinataires reste sur des versions anciennes ou sans animation. Le tableau de compatibilité (ligne 58) distingue les deux cas.
- **Alcool.** La ligne cite la mention légale, indique que la formule complète « à consommer avec modération » est recommandée par l'ARPP, rappelle que le contenu est limité aux éléments de l'art. L3323-4 et que les envois nominatifs sont exemptés du message, et se termine par « En cas de doute, faites valider votre support par votre service juridique ». Aucune affirmation sur l'autorisation de l'insertion colis pour l'alcool.
- **Échantillons.** Une phrase ajoutée au bloc `::: info Loi AGEC` de la page d'échantillonnage : applicable depuis le 1er juillet 2024 (décret n° 2024-373) ; une première demande exprimée à distance vaut jusqu'à renonciation. Aucune phrase sur la façon dont getinside recueille la demande.

### 2. Journal des sources

Fichier interne, non publié : `superpowers/fact-check/2026-11-05-journal-sources.md`. Tableau avec les colonnes : affirmation, pages (FR et EN), statut (`confirmé`, `corrigé`, `règle getinside, à valider`), source (nom et URL), date du contrôle. Il reprend les trois groupes ci-dessus. Une section « Prochain contrôle » propose une cadence (à chaque évolution réglementaire connue, et au moins tous les six mois) sans automatiser.

## Hors périmètre

- Liens vers les sources dans les pages publiées (choix explicite : journal seul).
- Interprétation juridique nouvelle (insertion colis et alcool, collecte de la demande d'échantillon).
- Vérification des chiffres de campagne et des cas clients, qui relèvent du guide de messaging.
- Toute modification de `config.ts`, du thème ou de `CLAUDE.md`.

## Tests et critères d'acceptation

- `scripts/check-content.sh` passe sur les fichiers modifiés (parité FR/EN, termes interdits).
- `vale` sur les fichiers modifiés : seuls les titres de conteneurs et le frontmatter peuvent rester signalés.
- `npm run docs:build` sans erreur.
- `grep` : plus de « ≤ 20 % » ni de « ≤ 20% » comme règle dans `recruit/sponsored-social` (FR et EN) ; plus de « Outlook (versions bureau) n'affiche que la première image » ni « Outlook (desktop versions) only displays the first image » sans la nuance de version.
- Le journal contient une ligne par affirmation vérifiée, chacune avec URL et date.
- Seuls huit fichiers de `docs/` sont modifiés (quatre sujets, chacun en FR et en EN) : `recruit/sponsored-social/index.md`, `recruit/display-email/specs.md`, `recruit/sponsored-mail/design-guide/legal.md`, `recruit/sampling/index.md` et leurs versions `en/`. Les résumés (`start-here`, glossaire) ne changent pas.

## Risques

- Les règles évoluent : le journal date chaque contrôle, il ne garantit pas l'avenir.
- La nuance sur l'alcool est un résumé de sources publiques, pas un avis juridique ; la formule de renvoi vers le service juridique le dit.
