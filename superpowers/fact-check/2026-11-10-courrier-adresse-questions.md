# Questions ouvertes : courrier adressé (parcours, guide fichier, guide création)

Date : 2026-11-10, mise à jour le 2026-11-12 avec les réponses de l'imprimeur. Fichier interne, non publié. Suite de `2026-11-05-questions-equipe.md`. Spec : `superpowers/specs/2026-11-10-courrier-adresse-design.md`. Sources : deux réunions du 10 novembre, devis de test et présentation de l'imprimeur d'octobre 2026, réponse écrite de l'imprimeur du 12 novembre.

Les tarifs communiqués par l'imprimeur (traitement des adresses, récupération des plis non distribués) ne sont pas reportés ici ni dans les pages. Ils servent à la fiche d'argumentaire interne.

## Réponses de l'imprimeur du 12 novembre, et pages concernées

| Sujet | Ce que l'imprimeur confirme | Publié dans |
|---|---|---|
| Délais | J+9 à J+13 en jours ouvrés (lundi au vendredi, hors jours fériés), à compter de la réception d'un fichier conforme | `index.md`, étape 5 |
| Traitement des adresses | Trois niveaux : mise aux normes postales avec classement des adresses (correcte, corrigée, douteuse, rejetée), dédoublonnage, détection des déménagés. Audit statistique gratuit avant engagement. Traitement effectif payant, appliqué à chaque fichier ou à la demande. **Décision du 12/11 : getinside l'applique systématiquement à chaque fichier.** | `prepare-file.md`, étape 3 ; `index.md`, FAQ et « Pourquoi getinside » |
| Dépôt des fichiers | Serveur sécurisé, un code opération unique par fichier le rattache au modèle de mailing. Modes automatique et manuel. Fichiers non consultables et non téléchargeables, y compris par getinside. | `prepare-file.md`, étape 4 ; `index.md`, FAQ et « Pourquoi getinside » |
| Plis non distribués | Retours dès quelques jours, quasi-totalité environ un mois après. Fichier CSV (identifiant, motif) sur la plateforme, mise à jour hebdomadaire possible. Récupération facturée. | `prepare-file.md`, section dédiée ; `index.md`, FAQ |
| RGPD | Contrat de sous-traitance conforme à l'article 28, traitement inscrit au registre de l'imprimeur, conservation de 48 heures à 15 jours après le dépôt puis suppression | `index.md`, conformité |

## Choix prudents encore présents dans les pages

| Page | Ce qui est publié | Pourquoi prudent |
|---|---|---|
| `retain/direct-mail/index.md`, « Format et production » | A5 250 g sous enveloppe blanche en standard, carte sans enveloppe sur devis | La présentation de l'imprimeur propose aussi la carte seule, moins chère. Standard à confirmer. |
| idem | Volume minimum de 3 500 courriers par campagne ou ensemble de campagnes regroupées | Décision du 10 novembre. Seuil commercial, pas technique : la grille de l'imprimeur démarre à 1 pli. À reconsidérer face à des concurrents qui démarrent à 200 plis. |
| `prepare-file.md`, étape 4 | Getinside transmet à la marque un lien de dépôt sécurisé et un nom de fichier (le code opération). La marque y dépose sa base elle-même. | Décision du 12/11 de Benoît, non confirmée par l'imprimeur : réponse du 12/11 = « pas de dépôt par marque nécessaire ». Le lien est une interface web (confirmé par Benoît le 12/11). À valider : nom de fichier imposé, accès propre à la marque ou lien fourni par getinside. |
| `design-mailing.md` | Studio par défaut, adresse `studio@getinside.fr` | Brief type et délais du studio non documentés. |
| `prepare-file.md`, tableau | Sept outils, liens d'aide officiels | La page Brevo (blocage robots) n'a pas pu être ouverte automatiquement. Salesforce, Splio, Actito, Emarsys, PrestaShop écartés faute de page officielle vérifiable. |

## À confirmer

| # | Question | Page concernée | Interlocuteur | Réponse |
|---|---|---|---|---|
| 1 | Format standard : A5 sous enveloppe blanche, ou carte A5 sans enveloppe ? | index, format | Équipe | |
| 2 | Exception au minimum de 3 500 courriers pour un test ? | index, FAQ | Direction | |
| 3 | Nettoyage systématique (décision du 12/11) : que devient une adresse rejetée ou douteuse (imprimée ou écartée) ? La marque reçoit-elle le classement des adresses ? Le minimum de 3 500 courriers se compte-t-il avant ou après nettoyage ? | prepare-file, étape 3 ; index, format | Imprimeur, direction | |
| 4 | Dépôt par la marque (décision du 12/11) : lien et nom de fichier fournis par getinside. Le lien est une interface web (confirmé). Qui le génère, un lien par marque ou par opération ? Le nom de fichier est-il imposé ? | prepare-file, étape 4 | Imprimeur, plateforme | Réponse du 12/11 : pas de dépôt par marque nécessaire, le code opération suffit. À reconfirmer pour un dépôt par la marque. |
| 5 | Formats de fichier acceptés (XLSX, CSV) | prepare-file | Imprimeur | Non précisé dans la réponse du 12/11. |
| 6 | Déroulé du BAT : qui valide, par quel canal, quels délais | index, design-mailing | Plateforme, studio | |
| 7 | Fichiers de création à fournir (le devis parle de deux PDF), adresse de retour sur l'enveloppe, rapprochement carte et enveloppe | design-mailing | Imprimeur, studio | |
| 8 | Modes de création ouverts aux marques : PDF conforme, modèle à zones personnalisables, éditeur en ligne | design-mailing | Plateforme, studio | |
| 9 | Champs paramétrables : outil, syntaxe, règles de nommage des colonnes | design-mailing | Studio | |
| 10 | QR codes uniques : comment la liste d'URL est reliée aux destinataires, délai, format de retour | design-mailing | Plateforme | |
| 11 | Codes promo uniques : longueur, majuscules, volume, délai | design-mailing | Studio | |
| 12 | Brief type du studio, nombre d'allers-retours, délai de création. Décision du 12/11 : le studio gère une ou plusieurs créations. Combien de versions par campagne, avec quel fichier de rattachement ? | design-mailing | Studio | |
| 13 | Paiement par Wallet à la création d'une campagne : comment, et pour la fidélisation | index, payouts | Plateforme | |
| 14 | Suivi des résultats : ce que la marque voit (scans, achats), rythme, bilan de fin de campagne | index, étape 6 | Plateforme | |
| 15 | RGPD : contrat entre getinside et la marque, rôle de getinside (responsable de traitement ou sous-traitant), choix de la durée de conservation | index, conformité | Juridique | Contrat imprimeur conforme à l'article 28 confirmé le 12/11. |
| 16 | getinside est l'expéditeur de tout le flux. Que doit afficher le courrier pour identifier la marque ? | index, conformité | Juridique | |
| 17 | Un désabonné e-mail peut-il recevoir un courrier ? L'opposition doit-elle être propre au canal postal ? Liste d'opposition à respecter (FEVAD) | prepare-file | Juridique | |
| 18 | Règle de consentement évoquée pour août 2026 par un guide secondaire : à vérifier, non publiée | index, conformité | Juridique | |
| 19 | Norme d'adresse (six lignes, 38 caractères) : source officielle à citer | prepare-file, étape 3 | Imprimeur | La mise aux normes postales est confirmée le 12/11. |
| 20 | Durées de churner : règle relative au cycle d'achat de la marque, à valider | prepare-file, étape 1 | Benoît | |
| 21 | Acquisition : la marque qui diffuse dépose ses contacts chez l'imprimeur. Parcours à valider avant d'en faire une offre | index, section dédiée | Équipe | |
