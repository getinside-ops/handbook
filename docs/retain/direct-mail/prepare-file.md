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

Le fichier liste les clients à relancer par courrier adressé, avec leur adresse postale.

::: tip En bref
- Un tableur XLSX ou CSV, une ligne par client, nommé avec votre code opération.
- Isolez les churners, excluez les opposants, exportez depuis votre outil.
- Déposez-le sur l'interface sécurisée de getinside, jamais par email.
:::

## Ce que contient le fichier

- **Identité :** civilité, prénom, nom.
- **Adresse postale :** numéro, voie, code postal, commune.
- **Champs de la campagne :** éléments à personnaliser, par exemple un code promo unique. Voir le [guide création](/retain/direct-mail/design-mailing).

Le code opération unique, fourni au lancement de la campagne, rattache le fichier à votre courrier et sert de nom de fichier.

## Étape 1 : isoler vos churners

Un [churner](/glossary#churner) n'ouvre plus vos e-mails et n'achète plus. Croisez deux critères :

1. **Inactivité e-mail :** aucune ouverture ni clic sur plusieurs envois consécutifs (données de votre outil d'e-mailing).
2. **Absence d'achat :** aucun achat depuis plus longtemps que votre délai habituel entre deux achats (boutique en ligne ou CRM).

Si les données sont dans deux outils, croisez les exports sur l'adresse e-mail. Adaptez les durées à votre cycle d'achat (courtes pour des consommables, longues pour du durable).

**À exclure :** les clients qui ont acheté récemment, les personnes opposées à la prospection par courrier (voir [Conformité](/retain/direct-mail/#conformite)) et les adresses incomplètes.

**[Groupe témoin](/glossary#groupe-temoin).** Avant l'export, mettez de côté un échantillon aléatoire de churners qui ne recevra pas le courrier, puis comparez les achats des deux groupes.

## Étape 2 : exporter depuis votre outil

Pas de connexion automatique pour l'instant : vous exportez un fichier. Aides des éditeurs, en anglais.

:::details Aide à l'export par outil
- **Klaviyo :** Segment de profils inactifs, export CSV avec les propriétés d'adresse ([aide](https://help.klaviyo.com/hc/en-us/articles/115005078687)).
- **Shopify :** Segment sur la date de dernière commande, export des clients (vérifiez les colonnes d'adresse) ([aide](https://help.shopify.com/en/manual/customers/import-export-customers)).
- **HubSpot :** Filtre sur la dernière interaction, export de la vue avec les propriétés d'adresse ([aide](https://knowledge.hubspot.com/import-and-export/export-records)).
- **Brevo :** Segment de contacts qui n'ouvrent plus vos e-mails, export CSV avec les attributs ([aide](https://help.brevo.com/hc/en-us/articles/5310065850642-Export-your-contacts-from-Brevo)).
- **Mailchimp :** Segment « n'a pas ouvert » combiné à « a reçu », export CSV ([aide](https://mailchimp.com/help/view-export-contacts/)).
- **WooCommerce :** Rapport Clients en CSV, filtre sur la dernière commande dans votre tableur ([aide](https://woocommerce.com/document/woocommerce-analytics/customers-report/)).
- **Adobe Commerce :** Export « Customers Main File » (System, Data Transfer), filtre dans votre tableur ([aide](https://experienceleague.adobe.com/en/docs/commerce-admin/systems/data-transfer/data-export)).
:::

Autre outil ? Cherchez « exporter un segment » dans son aide. Si l'adresse postale manque dans votre outil d'e-mailing, complétez avec l'export clients de votre boutique.

## Étape 3 : contrôler le fichier

- Doublons retirés (même adresse complète, pas seulement le même nom).
- Lignes sans adresse complète écartées.
- Civilités et majuscules homogènes, code postal cohérent avec la commune, une information par colonne.
- Adresse conforme à la norme postale : six lignes au plus, 38 caractères par ligne.

:::details Nettoyage des adresses avant impression
Chaque fichier est nettoyé : mise aux normes postales, détection des doublons et des déménagements. Chaque adresse est classée correcte, corrigée automatiquement, douteuse ou rejetée.
:::

## Étape 4 : transmettre le fichier

Le fichier contient des données personnelles : ne l'envoyez jamais en pièce jointe d'un e-mail non protégé.

1. getinside fournit une URL de dépôt sécurisé et le nom du fichier à utiliser. Le fichier déposé doit porter exactement ce nom, sinon il ne sera pas pris en compte.
2. Déposez votre base depuis cette interface. Une fois déposé, le fichier n'est ni consultable ni téléchargeable, y compris par getinside.
3. Il est supprimé après la production, généralement 48 heures à 15 jours après le dépôt.

## Plis non distribués

Ils reviennent en CSV, avec l'identifiant du destinataire et le motif. Premiers retours quelques jours après le dépôt, quasi-totalité environ un mois après : mettez votre base à jour.

**Étape suivante :** [concevez votre courrier](/retain/direct-mail/design-mailing).
