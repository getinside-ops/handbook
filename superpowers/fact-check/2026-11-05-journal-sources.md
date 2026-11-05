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
| Mécanisme de recueil de la demande préalable pour l'échantillonnage | `recruit/sampling/index.md` | réponse de l'équipe (2026-11-05) : getinside ne recueille pas la demande, elle relève de la marque qui diffuse l'échantillon ; intégré au handbook, validation juridique à faire |

## Prochain contrôle

À chaque évolution réglementaire connue (AGEC, REP papiers, Evin, doctrine CNIL) et au moins tous les six mois. Priorités : recouper les trois lignes « secondaire » sur les pages officielles Meta et TikTok, puis les spécifications de formats.
