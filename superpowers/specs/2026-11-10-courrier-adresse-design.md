# Courrier adressé : parcours, guide fichier et guide création

Date : 2026-11-10. Statut : conception en attente de relecture. Suite du chantier D (`2026-11-05-contenu-chantier-d-design.md`).

## Contexte

Deux réunions du 10 novembre (point tarification avec les leads Sales, puis point de suivi à deux) montrent que l'équipe commerciale ne maîtrise pas le courrier adressé. Les blocages : quel fichier demander à une marque, comment il circule, quel format est vendu, quel volume minimum, comment présenter l'offre. Le handbook doit servir de support de référence.

## Objectif

Donner à l'équipe, et aux marques qu'elle accompagne, un process clair du courrier adressé : cible, fichier, création, validation, production, suivi. Le contenu reste conforme aux règles du handbook.

## Décisions de cadrage

| Sujet | Décision |
|---|---|
| Public du contenu | Handbook public, sans prix. La grille tarifaire, la marge et le script de pitch ne sont pas dans cette livraison. |
| Périmètre | Fidéliser sur base propre en détail. Acquisition en aperçu court, présentée comme non standard. |
| Format standard | A5, 250 g/m², sous enveloppe blanche sans fenêtre, adresse imprimée dessus. Carte postale, enveloppe aux couleurs de la marque et autres formats passent « sur devis ». |
| Structure | La page Courrier adressé (parcours) plus deux guides : fichier et création. Trois pages en FR et en EN. |
| Connexion CRM | Aucune API pour l'instant. Le guide fichier explique l'export outil par outil, avec liens officiels. |
| Cible | Les « churners » : la marque doit savoir les isoler dans son outil avant d'exporter. Le guide fichier couvre la sélection, pas seulement l'export. |
| Argumentaire | Section « Pourquoi getinside » sur la page, sans prix et sans comparaison nominative. L'argument prix face aux prestataires spécialisés reste hors handbook (fiche interne). |
| Wallet | Une marque peut financer son courrier adressé avec le solde de son Wallet (revenus des campagnes qu'elle diffuse). Mentionné sur la page et sur la page Paiements. |
| QR codes uniques | Option, pas une obligation : un QR code par destinataire est possible, sinon un QR code par campagne. |
| Création | Confiée par défaut au studio getinside. Le guide explique aussi la création côté marque : champs paramétrables, QR codes uniques (liste d'URL fournie par getinside), codes promo uniques (créés par la marque). |

## Inspiration : présentation d'un acteur du courrier adressé

Lecture du site d'un acteur américain du courrier adressé (à ne jamais citer dans le handbook). Il ne publie ni durée d'inactivité, ni QR code, ni BAT. On reprend sa façon de présenter l'offre, pas ses chiffres.

| On reprend | Où dans les pages |
|---|---|
| Une cible formulée comme un problème : les clients qu'on n'arrive plus à joindre par e-mail | Intro de la page (déjà proche) |
| Un profil de marque adapté : base clients établie, flux e-mail en place | Nouvelle section « Pour qui » sur la page |
| Une liste des outils connectés, pour rassurer sur le fichier | Tableau des outils du guide fichier |
| Une mesure par groupe témoin : un échantillon de la base ne reçoit pas le courrier, on compare les achats | Étape 6 de la page, et exclusion du groupe témoin à l'étape export du guide fichier |
| Des cas d'usage par secteur | Hors périmètre. Les cas clients existants suffisent. |

On ne reprend pas : le nom, l'essai gratuit, les délais de mise en ligne annoncés, les cas d'usage hors réactivation (paniers abandonnés), la création offerte. Le guide de messaging ne valide que la réactivation et l'up-sell colis.

Ce que getinside a en plus et qu'il faut mettre en avant : QR code et code promo uniques par destinataire (suivi nominatif), BAT, studio de création.

## Concurrent direct : un prestataire français de courrier adressé

Une marque partenaire de l'insertion colis a confié à ce prestataire un courrier adressé à ses churners. Lecture de son site (à ne jamais citer dans le handbook, ni ses prix).

| Ce qu'il propose | Conséquence pour getinside |
|---|---|
| Création : deux propositions graphiques, deux allers-retours, BAT validé en ligne | Le studio doit être présenté au même niveau. Brief et nombre d'allers-retours à préciser (fait 14). |
| Contrôle et nettoyage du fichier d'adresses : doublons, lignes inutilisables, normalisation postale | getinside ne retravaille pas les données. Le guide fichier donne donc la liste de contrôle que la marque applique elle-même. |
| QR code sur chaque courrier, scans en ligne, rapport à J+30. QR code nominatif réservé à sa formule haute. | Le suivi nominatif n'est pas un avantage distinctif. Il se présente comme un standard de la catégorie. |
| Page d'arrivée du QR code et courrier de relance, dans sa formule haute | Page d'arrivée : renvoi vers le guide post-scan existant. La relance reste hors périmètre. |
| Démarrage à partir de 200 plis, devis unique | Point faible de getinside : volume minimum bien plus élevé. Voir fait 19. |
| Aucun lien avec un circuit de financement ni avec d'autres canaux | Différenciation réelle : Wallet, réseau de marques, un seul partenaire pour trois canaux. |

Ce que ce prestataire ne publie pas non plus : délais de production, RGPD, liste d'opposition, plis non distribués. Les pages getinside peuvent donc être plus complètes que la concurrence sur la conformité.

## Exclusions (règles du projet)

- Aucun nom d'imprimeur, de concurrent ou de collaborateur.
- Aucun prix, marge, tarif de référence, coût par mille ou benchmark de coût.
- Aucun contenu des échanges internes (tensions, prévisions, autres dossiers).
- Vocabulaire : « la marque », jamais annonceur, distributeur, retailer. Pas de « agence ».
- Seul chiffre de résultat repris : top CVR 6 % (déjà publié).

## Livrables

### 1. `docs/retain/direct-mail/index.md` (et miroir EN) : le parcours

Conserver l'intro, la carte « Résultat constaté » et la section Conformité. Ajouter une section « Pour qui » : les marques qui ont une base clients établie et des relances e-mail en place, dont une partie n'ouvre plus rien. Ajouter ensuite une section « Pourquoi getinside », ton du tableau « Sans getinside / Avec getinside » de `start-here/why-it-works.md`, qui répond à la question « pourquoi pas un prestataire de courrier adressé seul ? » :

- **Wallet** : les revenus que la marque génère en diffusant les campagnes d'autres marques financent ses courriers. Un prestataire d'impression ne propose pas ce circuit. C'est l'argument le plus distinctif.
- **Un seul partenaire, trois canaux** : insertion colis, courrier adressé, échantillonnage, depuis la même plateforme (formulation déjà publiée).
- **De bout en bout** : studio de création, BAT, production en France, contrôle qualité, livraison. Argument de catégorie, pas distinctif : il rassure, il ne départage pas.
- **Suivi nominatif** : code promo et QR code uniques en option. Également de catégorie, à présenter comme attendu et non comme avantage.
- **Volumes mutualisés** : les campagnes se regroupent pour atteindre des volumes accessibles (formulation déjà publiée sur la page Impression, sans chiffre).
- **Données protégées** : getinside n'accède pas au fichier clients, transmis directement au partenaire d'impression.
- **Des clients qu'on n'atteint plus, puis de nouveaux** : la marque réactive sa base, et peut ensuite recruter via les audiences d'autres marques.

Aucun prix, aucune comparaison nominative, aucune affirmation sur ce que font les autres prestataires, pas de mot « agence ». Remplacer « Comment ça marche » par six étapes :

1. **Ciblez vos inactifs** : base propre, client qui n'ouvre plus les newsletters et n'achète plus.
2. **Préparez votre fichier** : sélection des churners puis export, renvoi vers le guide fichier.
3. **Concevez votre courrier** : le studio getinside s'en charge par défaut. Vous pouvez aussi le faire vous-même, renvoi vers le guide création.
4. **Validez le BAT** : la marque valide l'épreuve, avec ses vraies données, avant impression.
5. **Impression et envoi** : délai à corriger : la page publiée dit 7 jours ouvrés, la présentation de l'imprimeur donne J+9 en envoi à tarif optimisé et J+9 à J+13 en envoi programmé, J étant la réception du fichier (fait 8). Les volumes sont mutualisés par semaine entre campagnes. Une campagne démarre à partir de 3 500 courriers, ou se regroupe avec d'autres.
6. **Suivez les résultats** : en option, code promo et QR code uniques par destinataire. Le suivi est alors plus fin que pour l'insertion colis. Pour mesurer l'effet réel, la marque garde un groupe témoin qui ne reçoit pas le courrier et compare les achats.

Remplacer la section « Format et délais » : format standard A5 sous enveloppe blanche, production en France, papier FSC/PEFC, délai à corriger (fait 8). Ajouter :

- **Acquisition, en bref** : la marque qui diffuse envoie ses contacts directement à l'imprimeur. getinside ne voit pas les données. Ce n'est pas encore une offre standard.
- **FAQ** (`::: details`) : pourquoi un volume minimum, pourquoi une enveloppe blanche, qui voit mes données, peut-on personnaliser l'enveloppe.

### 2. `docs/retain/direct-mail/prepare-file.md` (et miroir EN) : préparer votre fichier

- **Ce qu'il faut** : un fichier tableur XLSX ou CSV, prêt à imprimer, un contact par ligne. Champs : civilité, prénom, nom, adresse postale complète, plus les champs de personnalisation de la campagne (dont le code promo unique, voir le guide création). getinside ne nettoie ni ne complète les données.
- **Prérequis** : l'adresse postale doit figurer dans votre outil. Un outil d'e-mailing qui ne la stocke pas se complète avec l'export clients de la boutique en ligne.
- **Contrôler votre fichier** : getinside ne nettoie pas les données, la marque vérifie avant d'exporter. Liste de contrôle : doublons retirés (même personne, même adresse), lignes sans adresse complète écartées, civilités et majuscules homogènes, code postal cohérent avec la commune, une colonne par information. Format d'adresse postale usuel : six lignes au plus, 38 caractères par ligne, à confirmer sur une source officielle avant publication (fait 17). La page indique comment repérer les doublons dans un tableur.
- **Sélectionner vos churners** : un churner est un client qui n'ouvre plus vos e-mails et n'achète plus (définition déjà publiée). On le repère en croisant deux critères.
  1. Inactivité e-mail : aucune ouverture ni clic sur une période choisie. Donnée portée par l'outil d'e-mailing.
  2. Absence d'achat sur une période choisie. Donnée portée par la boutique en ligne ou le CRM. Si les deux données sont dans deux outils, on croise les deux exports sur l'adresse e-mail.

  À exclure : les clients qui ont acheté récemment, les personnes opposées à la prospection postale, les adresses incomplètes.

  Durées : aucun chiffre figé. Règle de lecture donnée à la marque : un churner n'a rien acheté depuis plus longtemps que son délai habituel entre deux achats, et n'a plus ouvert d'e-mail depuis plusieurs envois consécutifs. Une marque de consommables se fixe une période courte, une marque de produits durables une période longue.
- **Groupe témoin** : avant l'export, la marque met de côté un échantillon aléatoire de churners qui ne recevra pas le courrier. Elle compare ensuite les achats des deux groupes. Taille de l'échantillon non précisée dans les pages.
- **Exporter depuis votre outil** : tableau avec, par outil, comment isoler les churners (filtres du segment), comment exporter, comment exclure les personnes à ne pas contacter, lien officiel.
- **Transmettre le fichier** : jamais en pièce jointe e-mail non protégée. Transmission sécurisée, directement vers le partenaire d'impression. getinside n'accède pas aux données. Mécanisme précis à confirmer (voir fiche interne).
- **Oppositions** : la marque exclut les personnes qui se sont opposées à la prospection. Rappel des règles CNIL déjà publiées.

Outils couverts, avec source officielle à vérifier lien par lien avant publication :

| Outil | Isoler les churners | Source repérée |
|---|---|---|
| Klaviyo | Segment : aucune ouverture d'e-mail et aucune commande sur la période | help.klaviyo.com, « How to export a list or segment to a CSV file » |
| Shopify | Segment sur la date de dernière commande (filtre confirmé par l'aide) | help.shopify.com, segments et export de segment |
| HubSpot | Liste filtrée sur « Last engagement date », désinscrits exclus par filtre | knowledge.hubspot.com, export de segments |
| Brevo | Segment sur l'activité des campagnes (non-ouvreurs) | help.brevo.com, « Export your contacts from Brevo » |
| Mailchimp | Segment « has not opened » combiné à « was sent » | mailchimp.com/help, « View or Export Your Contacts » |
| Salesforce | Rapport filtré sur la date de dernière activité ou commande | help.salesforce.com, export d'un rapport sur les contacts |
| Actito | Ciblage sur les interactions enregistrées | cdn3.actito.com/fe/actito-documentation, « Exporting Profile Data » |
| Splio | Filtre d'audience personnalisé | help.splio.com, « Using Audiences exports » |
| WooCommerce | Rapport Clients filtré sur la dernière commande | woocommerce.com/document, rapport Clients et extension d'export |
| Adobe Commerce (Magento) | Export « Customers Main File », filtre sur la dernière commande à faire dans la grille | experienceleague.adobe.com, « Export data » |
| Emarsys, PrestaShop | Aucune page officielle trouvée. Renvoi générique vers le support de l'outil, ou retrait du tableau. | |

La colonne « Isoler les churners » est une piste par outil. Chaque ligne n'est écrite qu'après lecture de la page officielle, sinon elle se limite au lien.

Règle : un outil n'entre dans le tableau que si son lien officiel a été ouvert et confirme l'export. Les libellés de menu sont décrits par fonction, sans citer d'écran susceptible de changer.

### 3. `docs/retain/direct-mail/design-mailing.md` (et miroir EN) : concevoir votre courrier

- **Qui crée** : par défaut, le studio getinside réalise le visuel, paramètre les champs et prépare le BAT. La marque lui transmet un brief : offre, code promo, cible, éléments de marque. Contact studio déjà publié sur `recruit/printing-services`. La suite de la page s'adresse à la marque qui crée elle-même.
- **Modes de création** : la marque fournit un PDF conforme (format, fond perdu, zone d'adresse, zone d'indexation vierge), ou part d'un modèle à zones personnalisables (logo, textes, offre), ou compose en ligne. Un PDF déjà composé pour chaque destinataire reste possible mais limite la mutualisation. À formuler une fois le fait 25 tranché.
- **Format** : A5, 250 g/m², enveloppe blanche sans fenêtre, adresse du destinataire imprimée, adresse de retour (à confirmer, fait 20). Chaque carte est rapprochée de son enveloppe par un numéro de séquence : la page l'explique en une phrase. Renvoi vers les spécifications papier existantes (`recruit/printing-services`, `recruit/sponsored-mail/design-guide/print-specs`) sans les dupliquer.
- **Règles de création** : renvoi vers le guide de design de l'Insertion colis (offre, mécanique, accroche, UX papier). Règles QR existantes reprises par lien.
- **Configurer les champs paramétrables** : chaque élément personnalisé du visuel (prénom, code promo, éléments propres à la campagne comme le nom d'un animal) correspond à une colonne du fichier. La marque dresse la liste des champs, nomme les colonnes sans ambiguïté et les place dans le visuel. Elle vérifie sur quelques lignes réelles, y compris les cas limites : prénom long, champ vide.
- **QR codes uniques** : en option. Sans cette option, un seul QR code sert pour toute la campagne. Avec elle, un QR code par destinataire, et getinside crée la liste des URL uniques. La marque n'en génère pas elle-même, car le QR code doit rester un `.svg` getinside dynamique (règle existante).
- **Codes promo uniques** : en option aussi. Un code par destinataire, créés par la marque dans sa boutique ou son CRM, puis ajoutés au fichier dans une colonne dédiée. Ils ne sont pas générés par getinside.
- **Ordre des opérations** : fichier des contacts, création des codes promo, création de la liste d'URL par getinside, fichier complet transmis, BAT, impression. L'ordre exact est à confirmer (voir faits à confirmer).
- **Page d'arrivée du QR code** : renvoi vers la section Post-scan du guide de design existant (page adaptée au mobile, rapide, simple).
- **Validation** : la marque valide un BAT avant impression, avec de vraies lignes du fichier. Elle contrôle l'adresse, le prénom, le code promo et que le QR code mène à la bonne page.
- **Sur devis** : enveloppe aux couleurs de la marque, autres formats.

### 4. Navigation et fichiers annexes

- `.vitepress/config.ts` : ajouter les deux sous-pages sous « Courrier adressé », blocs FR et EN.
- `docs/monetize/payouts.md` et miroir EN : l'« Option B : Le Réinvestissement » cite aujourd'hui l'insertion colis et l'e-mailing. Ajouter le courrier adressé.
- Liens croisés depuis `retain/index.md` et la FAQ si une question s'y prête.
- Fiche interne non publiée : `superpowers/fact-check/2026-11-10-courrier-adresse-questions.md`, format du fichier de questions du 5 novembre.

## Faits à confirmer avant publication

Ces points ne figurent pas dans les sources. Les pages les formulent de façon générale, sans les inventer, et la fiche interne les liste pour l'équipe.

| # | Point | Qui peut répondre |
|---|---|---|
| 1 | Mécanisme de transmission sécurisée du fichier, et dépôt éventuel sur la plateforme | Équipe plateforme |
| 2 | Déroulé du BAT pour le courrier adressé (qui, quand, par quel canal) | Équipe plateforme |
| 3 | Champs obligatoires du fichier, volume minimum de lignes | Équipe, imprimeur |
| 4 | Traitement des adresses invalides et des plis non distribués (PND) | Imprimeur |
| 5 | Liste d'opposition à respecter (la CNIL cite la FEVAD comme gestionnaire de la liste Robinson) | Juridique |
| 6 | Règle de consentement en août 2026 évoquée par un guide secondaire | Juridique. Non publiée tant que non confirmée. |
| 7 | Seuil de 3 500 courriers : publié comme condition, à confirmer, car c'est un volume et non un prix | Benoît |
| 8 | Délai : la page publiée dit 7 jours ouvrés, la présentation de l'imprimeur (octobre 2026) donne J+9 à J+13 depuis la réception du fichier pour le tarif optimisé, J+4 à J+5 en lettre verte ou courrier industriel plus chers. Choisir la formulation publiée. | Benoît |
| 9 | Durées de churner : décision de conception, pas de chiffre publié. La règle relative au cycle d'achat de la marque est à valider. | Benoît |
| 10 | Un désabonné e-mail peut-il recevoir un courrier adressé ? L'opposition doit-elle être propre au canal postal ? | Juridique |
| 11 | Champs paramétrables : outil de création, syntaxe des champs variables, règles de nommage des colonnes | Studio |
| 12 | QR codes uniques : comment la liste d'URL est reliée aux destinataires (identifiant dans le fichier ?), délai de création, format de retour | Équipe plateforme, studio |
| 13 | Codes promo uniques : contraintes de format (longueur, majuscules), volume à créer, délai de création | Équipe, studio |
| 14 | Brief type à transmettre au studio, et délai de création et de BAT | Studio |
| 15 | Wallet : confirmé par Benoît le 10 novembre. À préciser : comment choisir le Wallet comme moyen de paiement à la création d'une campagne, et si cela couvre la fidélisation | Équipe plateforme |
| 16 | QR codes uniques : option confirmée par Benoît. À préciser : délai et contraintes que l'option ajoute | Équipe plateforme |
| 17 | Norme d'adresse postale (six lignes, 38 caractères) : source officielle à ouvrir. Le devis de l'imprimeur ne contient qu'un « tri des fichiers d'adresses », sans nettoyage ni dédoublonnage. La présentation d'octobre cite des « contrôles, normalisation, fusion » sur la plateforme de l'imprimeur et un reporting des anomalies de fichiers : préciser ce que cela couvre (doublons, adresses incomplètes, code postal et commune). | Imprimeur |
| 20 | Fichiers fournis à l'imprimeur : le devis parle de « 2 PDF » et d'un numéro de séquence pour rapprocher la carte de son enveloppe. Préciser quels fichiers la marque ou le studio livre, et qui fournit l'adresse de retour imprimée sur l'enveloppe | Imprimeur, studio |
| 21 | RGPD : l'imprimeur traite le fichier pour le compte de la marque. Quel contrat de sous-traitance, et quel rôle pour getinside ? | Juridique |
| 22 | getinside est l'expéditeur de tout le flux et souscrit le contrat postal à son nom (présentation de l'imprimeur). Que doit afficher le courrier pour identifier la marque ? Impact CNIL : identité de l'organisme émetteur sur chaque envoi | Juridique |
| 23 | Dépôt des fichiers : la présentation montre un dépôt SFTP « de GetInside » et un espace par marque cliente. Qui dépose, et getinside voit-il les données ? Cela touche l'engagement « getinside n'accède pas au fichier » | Imprimeur, équipe plateforme |
| 24 | Format : la présentation propose carte postale A5 sans enveloppe (moins chère) ou lettre sous enveloppe blanche, le devis A5 sous enveloppe. Fixer la formulation du standard | Benoît |
| 25 | Modes de création de l'imprimeur : PDF fourni par la marque (contrôle automatique du format, fond perdu, zone d'adresse), modèle avec zones personnalisables, éditeur en ligne. Lesquels getinside ouvre-t-il aux marques ? | Équipe plateforme, studio |
| 18 | Suivi des résultats : ce que la marque voit (scans, achats), à quel rythme, et s'il existe un bilan de fin de campagne | Équipe plateforme |
| 19 | Positionnement du minimum de 3 500 courriers face à un concurrent qui démarre à 200. Le publier, le reformuler en volumes mutualisés, ou prévoir une exception pour un test ? | Benoît |

## Contrôles

- `scripts/check-content.sh` sur les fichiers modifiés : parité FR/EN, termes interdits.
- Vale FR et EN : pas de tiret cadratin, pas de vocabulaire `AIVocab`, phrases d'au plus 20 mots.
- H1 présent, frontmatter complet, guillemets autour des valeurs contenant `: `.
- Liens externes ouverts un par un. Liens internes : chemins sans base en markdown, avec `/handbook/` en HTML.
- Recherche de mots interdits dans le diff : nom de l'imprimeur, de concurrents, de collègues, « € », « marge », « tarif ».
- `npm run docs:build` sans erreur.

## Hors périmètre

- Grille tarifaire, marge, script de pitch et réponses aux objections de prix : document interne séparé. Il porte l'argument prix face aux prestataires spécialisés, que le handbook ne peut pas publier.
- Connexion API aux CRM des marques.
- Parcours d'acquisition complet.
