---
title: Gérer les listes d'exclusion de contacts
description: Comment recevoir et appliquer une liste d'exclusion d'un annonceur avant l'envoi d'une campagne Email Dédié — contacts opt-out RGPD ou clients existants à écarter d'une campagne d'acquisition.
keywords:
  - liste d'exclusion
  - suppression list
  - opt-out
  - clients existants
  - exclusion campagne
  - RGPD
  - SFTP
  - ESP
  - email hashé SHA-256
---

# Gérer les listes d'exclusion de contacts

Avant l'envoi d'une campagne Email Dédié, un annonceur peut vous transmettre une liste d'exclusion pour retirer certains contacts de la diffusion. Deux cas de figure :

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Contacts opt-out</strong>
    <p>Des contacts ont désabonné de la marque de l'annonceur. Leur exclusion est obligatoire pour rester conforme au RGPD.</p>
  </div>
  <div class="gi-value-card">
    <strong>Clients existants</strong>
    <p>L'annonceur veut exclure ses acheteurs actuels d'une campagne d'acquisition — inutile de cibler quelqu'un qui le connaît déjà.</p>
  </div>
  <div class="gi-value-card">
    <strong>Les deux</strong>
    <p>Opt-out + clients existants : les deux listes peuvent être fusionnées par getinside avant de vous être transmises.</p>
  </div>
</div>

Ce n'est pas systématique — beaucoup de campagnes n'en ont pas. Mais quand un annonceur en envoie une, voici comment la recevoir et l'appliquer.

---

## Ne jamais échanger des emails via messagerie

:::danger Données personnelles — canal sécurisé obligatoire
Les listes d'exclusion contiennent des **données personnelles** au sens du RGPD. Ne les demandez pas par email ou Slack. Ne les transmettez pas non plus par ces canaux.

Tout fichier contenant des adresses (même hashées) doit passer par un protocole sécurisé.
:::

---

## Recevoir le fichier

La méthode recommandée est le transfert SFTP avec **FileZilla** côté annonceur.

<div class="gi-value-grid">
  <div class="gi-value-card">
    <img src="/handbook/images/filezilla-logo.svg" alt="FileZilla" style="width: 48px; height: 48px; margin-bottom: 12px; display: block;">
    <strong>FileZilla</strong>
    <p>Gratuit, open source, disponible sur Windows, macOS et Linux. L'annonceur dépose le fichier via une interface graphique — pas de ligne de commande, juste un glisser-déposer.</p>
    <p><a href="https://filezilla-project.org/" target="_blank">Télécharger FileZilla →</a></p>
  </div>
</div>

Créez un accès SFTP sur votre serveur et communiquez ces informations à l'annonceur :

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Hôte | Adresse de votre serveur SFTP (ex. `sftp.mondomaine.com`) |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt (ex. `/exclusion/incoming/`) |
| Login | Identifiant SFTP dédié |
| Mot de passe | Généré, transmis hors messagerie |

:::warning Transmettez les credentials hors messagerie
Utilisez un gestionnaire de mots de passe avec partage sécurisé (1Password, Bitwarden…) ou un lien à usage unique (One-Time Secret).
:::

:::details Mon infrastructure est différente (S3, Azure, GCP, clé SSH, API…)

**SFTP avec clé SSH**

Option plus sécurisée, à privilégier si vous travaillez régulièrement avec le même annonceur. L'annonceur génère une paire de clés SSH et vous transmet sa clé publique — votre équipe technique l'ajoute au serveur. FileZilla supporte aussi cette méthode.

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Hôte | Adresse de votre serveur SFTP |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt |
| Clé SSH publique | La clé `.pub` de l'annonceur, à ajouter par votre équipe technique |

---

**Bucket S3 (AWS)**

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Endpoint | Ex. `s3.eu-west-1.amazonaws.com` |
| Bucket | Nom de votre bucket |
| Répertoire | Préfixe de destination (ex. `exclusion/`) |
| Access Key ID | Clé d'accès dédiée (droits écriture uniquement) |
| Secret Access Key | À transmettre hors messagerie |

---

**Bucket GCP (Google Cloud Storage)**

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Bucket | Nom du bucket GCS |
| Token d'authentification | Fichier JSON d'un compte de service avec rôle `Storage Object Creator` |

---

**Azure Blob Storage**

Générez un SAS Token restreint à l'opération `Write`, valable 48h. Renouvelez-le à chaque campagne.

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Compte de stockage | Nom de votre compte Azure |
| Conteneur | Nom du conteneur Blob |
| SAS Token | Jeton d'accès signé (Write uniquement, 48h) |

---

**API / Endpoint (Eulerian ou autre)**

Si vous utilisez Eulerian, l'intégration avec l'annonceur est native — pas de fichier à gérer.

Pour tout autre ESP ou DMP avec une API d'audience, transmettez la documentation de votre endpoint à l'annonceur et créez les accès nécessaires.
:::

---

## Appliquer les exclusions dans votre ESP

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
    <h3>Créer une liste d'exclusion dédiée</h3>
    <p>Ne mélangez pas les exclusions annonceur avec vos propres désabonnements. Créez une liste distincte nommée explicitement (ex. <code>EXCLUSION_NOM_ANNONCEUR_YYYYMMDD</code>).</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Appliquer l'exclusion au moment du routage</h3>
    <p>Dans les paramètres d'envoi, activez la liste d'exclusion pour cette campagne. Vérifiez que le volume d'envoi final tient bien compte des exclusions — si les chiffres ne bougent pas, l'exclusion n'a pas pris.</p>
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
La plupart des ESP modernes (Mailchimp, Brevo, Klaviyo, Mailjet…) acceptent les exclusions en SHA-256 — vérifiez dans la doc de votre routeur. Si ce n'est pas le cas, demandez à l'annonceur un fichier en clair via un canal sécurisé (SFTP).
:::

:::details L'annonceur veut envoyer la liste par email — que répondre ?
Refusez et redirigez vers cette page. Les adresses email sont des données personnelles : leur transmission via messagerie n'est pas conforme au RGPD. Proposez l'une des méthodes listées ici.
:::

:::details Dois-je conserver le fichier après l'envoi ?
Non. Une fois les exclusions importées et l'envoi confirmé, supprimez le fichier de votre serveur. La liste dans votre ESP n'a plus d'utilité après l'envoi — archivez-la ou supprimez-la.
:::

:::details Que faire si je reçois le fichier le jour J ?
Appliquez les exclusions avant de router, même si ça décale l'envoi. Envoyer à des contacts opt-out expose à des plaintes et dégrade votre réputation d'expéditeur. En cas de doute, appelez getinside.
:::

---

## Étape suivante

Exclusions appliquées ? Retournez sur [Tracking & Envoi](./2-tracking-sending) pour finaliser.
