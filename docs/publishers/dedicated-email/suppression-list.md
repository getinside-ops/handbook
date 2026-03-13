---
title: Gérer les listes de suppression opt-out
description: Comment recevoir et appliquer une liste de suppression opt-out d'un annonceur avant l'envoi d'une campagne Email Dédié.
keywords:
  - suppression list
  - opt-out
  - RGPD
  - SFTP
  - ESP
  - email hashé SHA-256
---

# Gérer les listes de suppression opt-out

Certains annonceurs souhaitent vous transmettre une liste de suppression avant l'envoi d'une campagne Email Dédié : ce sont les adresses de leurs contacts qui ont opt-out auprès de leur marque, et qui ne doivent pas recevoir le mailing.

Ce n'est pas systématique — beaucoup de campagnes n'en ont pas. Mais quand un annonceur en envoie une, voici comment la recevoir et l'appliquer.

---

## Ne jamais échanger des emails via messagerie

:::danger Données personnelles — canal sécurisé obligatoire
Les listes de suppression contiennent des **données personnelles** au sens du RGPD. Ne les demandez pas par email ou Slack. Ne les transmettez pas non plus par ces canaux.

Tout fichier contenant des adresses (même hashées) doit passer par l'un des protocoles ci-dessous.
:::

---

## Ce que vous devez faire

Quand un annonceur vous signale qu'il a une liste de suppression à transmettre :

1. Fournissez-lui un accès sécurisé pour déposer le fichier (cf. ci-dessous)
2. Communiquez les infos de connexion **hors messagerie**
3. Importez les suppressions dans votre ESP avant de router

---

## Recevoir le fichier

Choisissez la méthode qui correspond à votre infrastructure.

:::details SFTP avec FileZilla (recommandé pour les annonceurs non techniques)

C'est la méthode la plus simple côté annonceur. Vous créez un accès SFTP sur votre serveur, l'annonceur dépose le fichier avec [**FileZilla**](https://filezilla-project.org/) — un logiciel gratuit, disponible sur Windows, macOS et Linux, sans ligne de commande.

Informations à communiquer à l'annonceur :

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Hôte | Adresse de votre serveur SFTP (ex. `sftp.mondomaine.com`) |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt (ex. `/suppression/incoming/`) |
| Login | Identifiant SFTP dédié |
| Mot de passe | Généré, transmis hors messagerie |

:::warning Transmettez les credentials hors messagerie
Utilisez un gestionnaire de mots de passe avec partage sécurisé (1Password, Bitwarden…) ou un lien à usage unique (One-Time Secret).
:::

:::

:::details SFTP avec clé SSH

Option plus sécurisée, à privilégier si vous travaillez régulièrement avec le même annonceur. L'annonceur génère une paire de clés SSH et vous transmet sa clé publique — votre équipe technique l'ajoute au serveur. FileZilla supporte aussi cette méthode côté annonceur.

Informations à communiquer à l'annonceur :

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Hôte | Adresse de votre serveur SFTP |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt |
| Clé SSH publique | La clé `.pub` de l'annonceur, à ajouter à votre serveur par votre équipe technique |

Testez l'accès avec l'annonceur avant J-2.
:::

:::details Bucket S3 (AWS)

Si vous utilisez AWS, vous pouvez créer un accès restreint à un bucket S3. À configurer avec votre équipe technique.

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Endpoint | Ex. `s3.eu-west-1.amazonaws.com` |
| Bucket | Nom de votre bucket |
| Répertoire | Préfixe de destination (ex. `suppression/`) |
| Access Key ID | Clé d'accès dédiée (droits écriture uniquement) |
| Secret Access Key | À transmettre hors messagerie |
:::

:::details Bucket GCP (Google Cloud Storage)

Si vous utilisez GCP, créez un compte de service avec le rôle `Storage Object Creator` sur le répertoire concerné. À configurer avec votre équipe technique.

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Bucket | Nom du bucket GCS |
| Token d'authentification | Fichier JSON du compte de service |
:::

:::details Azure Blob Storage

Si vous utilisez Azure, générez un SAS Token restreint à l'opération `Write`, valable 48h. À configurer avec votre équipe technique. Renouvelez le token à chaque campagne.

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Compte de stockage | Nom de votre compte Azure |
| Conteneur | Nom du conteneur Blob |
| SAS Token | Jeton d'accès signé (Write uniquement, 48h) |
:::

:::details API / Endpoint (Eulerian ou autre)

Si vous utilisez Eulerian, l'intégration avec l'annonceur est native — pas de fichier à gérer.

Pour tout autre ESP ou DMP avec une API d'audience, transmettez la documentation de votre endpoint à l'annonceur et créez les accès nécessaires. C'est l'option la moins contraignante si vous travaillez régulièrement avec le même annonceur.
:::

---

## Appliquer les suppressions dans votre ESP

Une fois le fichier reçu, importez-le dans votre routeur **avant** de programmer l'envoi.

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Vérifier le fichier reçu</h3>
    <p>Contrôlez l'encodage (UTF-8), le séparateur et le header. Si le fichier contient des emails hashés SHA-256, vérifiez que votre ESP gère ce format — la plupart le font, mais pas tous.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Créer une liste de suppression dédiée</h3>
    <p>Ne mélangez pas les suppressions annonceur avec vos propres désabonnements. Créez une liste distincte nommée explicitement (ex. <code>SUPPRESSION_NOM_ANNONCEUR_YYYYMMDD</code>).</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Appliquer la suppression au moment du routage</h3>
    <p>Dans les paramètres d'envoi, activez la liste de suppression pour cette campagne. Vérifiez que le volume d'envoi final tient bien compte des exclusions — si les chiffres ne bougent pas, la suppression n'a pas pris.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">4</div>
  <div class="gi-step-body">
    <h3>Confirmer à l'annonceur</h3>
    <p>Confirmez à l'annonceur que c'est bon. En cas de problème (format incorrect, volume anormal), signalez-le immédiatement à getinside.</p>
  </div>
</div>

---

## FAQ

:::details Le fichier contient des emails hashés SHA-256, que faire ?
La plupart des ESP modernes (Mailchimp, Brevo, Klaviyo, Mailjet…) acceptent les suppressions en SHA-256 — vérifiez dans la doc de votre routeur. Si ce n'est pas le cas, demandez à l'annonceur un fichier en clair via un canal sécurisé (SFTP).
:::

:::details L'annonceur veut envoyer la liste par email — que répondre ?
Refusez et redirigez vers cette page. Les adresses email sont des données personnelles : leur transmission via messagerie n'est pas conforme au RGPD. Proposez l'une des méthodes listées ici.
:::

:::details Dois-je conserver le fichier après l'envoi ?
Non. Une fois les suppressions importées et l'envoi confirmé, supprimez le fichier de votre serveur. La liste dans votre ESP n'a plus d'utilité après l'envoi — archivez-la ou supprimez-la.
:::

:::details Que faire si je reçois le fichier le jour J ?
Appliquez les suppressions avant de router, même si ça décale l'envoi. Envoyer à des contacts opt-out expose à des plaintes et dégrade votre réputation d'expéditeur. En cas de doute, appelez getinside.
:::

---

## Étape suivante

Suppressions appliquées ? Retournez sur [Tracking & Envoi](./2-tracking-sending) pour finaliser.
