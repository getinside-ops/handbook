---
title: Gérer les listes d'exclusion de contacts
description: Comment recevoir et appliquer une liste d'exclusion d'une marque avant l'envoi d'une campagne Email Dédié. Il s'agit des contacts opt-out RGPD ou des clients existants à écarter de la diffusion.
keywords:
  - liste d'exclusion
  - suppression list
  - opt-out RGPD
  - email hashé SHA-256
  - SFTP exclusion ESP
---


# Gérer les listes d'exclusion de contacts

Avant l'envoi, une marque peut vous transmettre une liste d'exclusion. C'est vous qui l'appliquez dans votre ESP.

::: tip En bref
- Pas systématique : la liste écarte les contacts opt-out (obligatoire RGPD) et/ou les clients existants de la marque.
- Données personnelles : réception par SFTP ou bucket sécurisé, jamais par email ni messagerie getinside.
- Importez-la dans votre ESP avant de programmer l'envoi, puis confirmez à la marque.
:::

:::danger Données personnelles : canal sécurisé obligatoire
Tout fichier contenant des adresses, même hashées, doit passer par un protocole sécurisé.
:::

## Recevoir le fichier

Méthode recommandée : transfert SFTP avec **FileZilla** côté marque ([télécharger FileZilla](https://filezilla-project.org/){target="_blank"}). Créez un accès SFTP et communiquez à la marque :

- **Hôte :** Adresse de votre serveur SFTP (ex. `sftp.mondomaine.com`)
- **Port :** Généralement `22`
- **Chemin :** Répertoire de dépôt (ex. `/exclusion/incoming/`)
- **Login :** Identifiant SFTP dédié
- **Mot de passe :** Généré, transmis hors messagerie

:::warning Transmettez les credentials hors messagerie
Utilisez un gestionnaire de mots de passe (1Password, Bitwarden…) ou un lien à usage unique (One-Time Secret).
:::

:::details Mon infrastructure est différente (S3, Azure, GCP, clé SSH, API…)

**SFTP avec clé SSH.** Plus sécurisé, pour une marque récurrente : la marque vous transmet sa clé publique (`.pub`), que votre équipe technique ajoute au serveur. Fournissez hôte, port et chemin.

**Bucket S3 (AWS)**

- **Endpoint :** Ex. `s3.eu-west-1.amazonaws.com`
- **Bucket :** Nom de votre bucket
- **Répertoire :** Préfixe de destination (ex. `exclusion/`)
- **Access Key ID :** Clé d'accès dédiée (droits écriture uniquement)
- **Secret Access Key :** À transmettre hors messagerie

**Bucket GCP (Google Cloud Storage)**

- **Bucket :** Nom du bucket GCS
- **Token d'authentification :** Fichier JSON d'un compte de service avec rôle `Storage Object Creator`

**Azure Blob Storage.** Générez un SAS Token restreint à l'opération `Write`, valable 48h, à renouveler à chaque campagne. Fournissez le nom du compte de stockage, le conteneur Blob et le token.

**API / Endpoint.** Avec Eulerian, l'intégration est native : pas de fichier à gérer. Pour tout autre ESP ou DMP avec une API d'audience, transmettez la documentation de votre endpoint à la marque.
:::

## Appliquer les exclusions dans votre ESP

Importez le fichier dans votre routeur **avant** de programmer l'envoi.

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Vérifier le fichier reçu</h3>
    <p>Contrôlez l'encodage (UTF-8), le séparateur et le header. Vérifiez que votre ESP gère les emails hashés SHA-256.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Créer une liste d'exclusion dédiée</h3>
    <p>Ne la mélangez pas avec vos désabonnements. Nommez-la explicitement (ex. <code>EXCLUSION_NOM_MARQUE_YYYYMMDD</code>).</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Appliquer l'exclusion au routage</h3>
    <p>Activez la liste dans les paramètres d'envoi. Si le volume final ne bouge pas, l'exclusion n'a pas pris.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">4</div>
  <div class="gi-step-body">
    <h3>Confirmer à la marque</h3>
    <p>En cas de problème (format incorrect, volume anormal), signalez-le immédiatement à getinside.</p>
  </div>
</div>

## FAQ

:::details Le fichier contient des emails hashés SHA-256, que faire ?
La plupart des ESP (Mailchimp, Brevo, Klaviyo, Mailjet…) les acceptent. Sinon, demandez un fichier en clair via SFTP.
:::

:::details La marque veut envoyer la liste par email : que répondre ?
Refusez et redirigez vers cette page : l'envoi d'adresses par messagerie n'est pas conforme au RGPD.
:::

:::details Dois-je conserver le fichier après l'envoi ?
Non. Une fois les exclusions importées et l'envoi confirmé, supprimez-le de votre serveur.
:::

:::details Que faire si je reçois le fichier le jour J ?
Appliquez-les avant de router, même si l'envoi est décalé : écrire à des contacts opt-out expose à des plaintes. En cas de doute, appelez getinside.
:::

**Étape suivante :** exclusions appliquées ? Retournez sur [Tracking & Envoi](./2-tracking-sending).
