---
title: Préparer votre fichier de churners
description: Isolez vos churners dans votre outil e-mail ou e-commerce, exportez le fichier, contrôlez-le et transmettez-le de façon sécurisée pour votre courrier adressé.
keywords:
  - fichier clients
  - churners
  - export CRM
  - clients inactifs
  - courrier adressé
  - getinside
image: /images/gi-keyvisual.svg
---

# Préparer votre fichier de churners

Le fichier est la matière première de votre courrier adressé. Il liste les clients à relancer, avec leur adresse postale.

## Ce que contient le fichier

Un tableur XLSX ou CSV, avec une ligne par client. Il doit arriver prêt à imprimer.

- **Identité :** civilité, prénom, nom.
- **Adresse postale :** numéro, voie, code postal, commune.
- **Champs de la campagne :** les éléments à personnaliser dans le courrier, par exemple un code promo unique. Voir le [guide création](/retain/direct-mail/design-mailing).

## Étape 1 : isoler vos churners

Un churner n'ouvre plus vos e-mails et n'achète plus. Croisez deux critères.

1. **Inactivité e-mail :** aucune ouverture ni clic sur plusieurs envois consécutifs. Cette donnée est dans votre outil d'e-mailing.
2. **Absence d'achat :** aucun achat depuis plus longtemps que votre délai habituel entre deux achats. Cette donnée est dans votre boutique en ligne ou votre CRM.

Si les deux données sont dans deux outils, croisez les deux exports sur l'adresse e-mail.

::: tip Fixer les périodes
Adaptez les durées à votre cycle d'achat. Une marque de consommables choisit une période courte, une marque de produits durables une période longue.
:::

**À exclure du fichier :**

- les clients qui ont acheté récemment ;
- les personnes qui se sont opposées à la prospection par courrier ;
- les adresses incomplètes.

**Groupe témoin.** Avant l'export, mettez de côté un échantillon aléatoire de churners qui ne recevra pas le courrier. Comparez ensuite les achats des deux groupes pour mesurer l'effet réel.

## Étape 2 : exporter depuis votre outil

Aucune connexion automatique n'existe pour l'instant : vous exportez un fichier depuis votre outil. Le tableau indique où chercher. Les pages d'aide sont celles des éditeurs, en anglais.

| Outil | Comment faire | Aide officielle |
| :--- | :--- | :--- |
| Klaviyo | Créez un segment de profils inactifs, puis exportez-le en CSV avec les propriétés d'adresse. | [Export d'une liste ou d'un segment](https://help.klaviyo.com/hc/en-us/articles/115005078687) |
| Shopify | Créez un segment sur la date de dernière commande, puis exportez les clients du segment. Vérifiez que le fichier contient les colonnes d'adresse. | [Import et export de clients](https://help.shopify.com/en/manual/customers/import-export-customers) |
| HubSpot | Filtrez les contacts sur leur dernière interaction, puis exportez la vue en choisissant les propriétés d'adresse. | [Export de vos enregistrements](https://knowledge.hubspot.com/import-and-export/export-records) |
| Brevo | Créez un segment de contacts qui n'ouvrent plus vos e-mails, puis exportez-le en CSV en choisissant les attributs. | [Export de vos contacts](https://help.brevo.com/hc/en-us/articles/5310065850642-Export-your-contacts-from-Brevo) |
| Mailchimp | Créez un segment « n'a pas ouvert » combiné à « a reçu », puis exportez-le en CSV. | [Voir ou exporter vos contacts](https://mailchimp.com/help/view-export-contacts/) |
| WooCommerce | Téléchargez le rapport Clients en CSV, puis filtrez sur la dernière commande dans votre tableur. | [Rapport Clients](https://woocommerce.com/document/woocommerce-analytics/customers-report/) |
| Adobe Commerce | Exportez l'entité « Customers Main File » depuis le menu System, Data Transfer, puis filtrez dans votre tableur. | [Export de données](https://experienceleague.adobe.com/en/docs/commerce-admin/systems/data-transfer/data-export) |

Votre outil n'est pas dans la liste ? Cherchez « exporter un segment » dans son aide, ou demandez l'export à son support. Si l'adresse postale n'est pas dans votre outil d'e-mailing, complétez-la avec l'export clients de votre boutique en ligne.

## Étape 3 : contrôler le fichier

Vérifiez ces points avant de transmettre le fichier.

- Les doublons sont retirés : même personne, même adresse.
- Les lignes sans adresse complète sont écartées.
- Les civilités et les majuscules sont homogènes.
- Le code postal correspond à la commune.
- Chaque information a sa propre colonne.
- L'adresse respecte la norme postale : six lignes au plus, 38 caractères par ligne.

::: tip Repérer les doublons
Votre tableur propose une fonction pour supprimer les doublons. Appliquez-la sur l'adresse complète, pas sur le nom seul.
:::

## Étape 4 : transmettre le fichier

Le fichier contient des données personnelles. Ne l'envoyez jamais en pièce jointe d'un e-mail non protégé. Il est transmis par un canal sécurisé à notre partenaire d'impression. Notre équipe vous indique la marche à suivre au lancement de votre campagne.

## Respecter les oppositions

Excluez de votre fichier les personnes qui se sont opposées à la prospection par courrier. Les règles d'information et d'opposition sont rappelées dans la section [Conformité](/retain/direct-mail/#conformite) de la page Courrier adressé.

**Étape suivante :** [concevez votre courrier](/retain/direct-mail/design-mailing).
