# Questions ouvertes : courrier adressé (parcours, guide fichier, guide création)

Date : 2026-11-10. Fichier interne, non publié. Suite de `2026-11-05-questions-equipe.md`. Spec : `superpowers/specs/2026-11-10-courrier-adresse-design.md`. Sources : deux réunions du 10 novembre, devis de test et présentation de l'imprimeur d'octobre 2026.

## Choix prudents faits dans les pages publiées

À revoir dès que la réponse correspondante arrive.

| Page | Ce qui est publié | Pourquoi prudent |
|---|---|---|
| `retain/direct-mail/index.md`, étape 5 | « 9 à 13 jours ouvrés entre la réception du fichier validé et la boîte aux lettres » | Décision du 10 novembre : traiter J+9 à J+13 de la présentation de l'imprimeur comme des jours ouvrés. L'ancienne mention (7 jours ouvrés) la contredisait. À ajuster si la réponse est plus courte. |
| idem, « Format et production » | A5 250 g sous enveloppe blanche en standard, carte sans enveloppe sur devis | La présentation de l'imprimeur propose aussi la carte seule, moins chère. Standard à confirmer. |
| idem | Volume minimum de 3 500 courriers par campagne ou ensemble de campagnes regroupées | Décision du 10 novembre. Seuil commercial, pas technique : la grille de l'imprimeur démarre à 1 pli. À reconsidérer face à des concurrents qui démarrent à 200 plis. |
| `prepare-file.md`, étape 4 | « Canal sécurisé vers notre partenaire d'impression », sans promesse que getinside ne voit pas les données | Le schéma de l'imprimeur montre un dépôt « de GetInside ». |
| `design-mailing.md` | Studio par défaut, adresse `studio@getinside.fr` | Brief type et délais du studio non documentés. |
| `prepare-file.md`, tableau | Sept outils, liens d'aide officiels | Les pages Brevo (blocage robots) n'ont pas pu être ouvertes automatiquement. Salesforce, Splio, Actito, Emarsys, PrestaShop écartés faute de page officielle vérifiable. |

## À confirmer

| # | Question | Page concernée | Interlocuteur | Réponse |
|---|---|---|---|---|
| 1 | Délai publié : 9 à 13 jours ouvrés depuis la réception du fichier validé (hypothèse de travail). Confirmer jours ouvrés ou calendaires, et le point de départ (fichier ou BAT). | index, étape 5 | Imprimeur | |
| 2 | Format standard : A5 sous enveloppe blanche, ou carte A5 sans enveloppe ? | index, format | Équipe | |
| 3 | Seuil publié : 3 500 courriers par campagne ou ensemble de campagnes regroupées. Une exception est-elle possible pour un test ? | index, FAQ | Direction | |
| 4 | Contrôles et normalisation de la plateforme de l'imprimeur : doublons, adresses incomplètes, code postal et commune ? Option de nettoyage ? | prepare-file | Imprimeur | |
| 5 | Dépôt du fichier : qui dépose, comment, et getinside voit-il les données ? | prepare-file, étape 4 | Imprimeur, plateforme | |
| 6 | Formats de fichier acceptés (XLSX, CSV) | prepare-file | Imprimeur | |
| 7 | Plis non distribués : forme et délai du retour | prepare-file, index | Imprimeur | |
| 8 | Déroulé du BAT : qui valide, par quel canal, quels délais | index, design-mailing | Plateforme, studio | |
| 9 | Fichiers à fournir (le devis parle de deux PDF), adresse de retour sur l'enveloppe, rapprochement carte et enveloppe | design-mailing | Imprimeur, studio | |
| 10 | Modes de création ouverts aux marques : PDF conforme, modèle à zones personnalisables, éditeur en ligne | design-mailing | Plateforme, studio | |
| 11 | Champs paramétrables : outil, syntaxe, règles de nommage des colonnes | design-mailing | Studio | |
| 12 | QR codes uniques : comment la liste d'URL est reliée aux destinataires, délai, format de retour | design-mailing | Plateforme | |
| 13 | Codes promo uniques : longueur, majuscules, volume, délai | design-mailing | Studio | |
| 14 | Brief type du studio, nombre d'allers-retours, délai de création | design-mailing | Studio | |
| 15 | Paiement par Wallet à la création d'une campagne : comment, et pour la fidélisation | index, payouts | Plateforme | |
| 16 | Suivi des résultats : ce que la marque voit (scans, achats), rythme, bilan de fin de campagne | index, étape 6 | Plateforme | |
| 17 | RGPD : contrat de sous-traitance avec l'imprimeur, durée de conservation du fichier, rôle de getinside | index, conformité | Juridique | |
| 18 | getinside est l'expéditeur de tout le flux. Que doit afficher le courrier pour identifier la marque ? | index, conformité | Juridique | |
| 19 | Un désabonné e-mail peut-il recevoir un courrier ? L'opposition doit-elle être propre au canal postal ? Liste d'opposition à respecter (FEVAD) | prepare-file | Juridique | |
| 20 | Règle de consentement évoquée pour août 2026 par un guide secondaire : à vérifier, non publiée | index, conformité | Juridique | |
| 21 | Norme d'adresse (six lignes, 38 caractères) : source officielle à citer | prepare-file, étape 3 | Imprimeur | |
| 22 | Durées de churner : règle relative au cycle d'achat de la marque, à valider | prepare-file, étape 1 | Benoît | |
| 23 | Acquisition : la marque qui diffuse envoie ses contacts à l'imprimeur. Parcours à valider avant d'en faire une offre | index, section dédiée | Équipe | |
