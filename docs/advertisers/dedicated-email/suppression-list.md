---
title: Liste de suppression opt-out
description: Comment transmettre votre liste de suppression opt-out à un retailer partenaire getinside via FileZilla ou d'autres protocoles sécurisés.
keywords:
  - suppression list
  - opt-out
  - RGPD
  - email hashé SHA-256
  - SFTP
  - FileZilla
---

# Liste de suppression opt-out

Certains retailers peuvent vous demander une liste de suppression avant l'envoi d'une campagne Email Dédié : ce sont les adresses de vos contacts qui ont opt-out auprès de votre marque, et qui ne doivent pas recevoir le mailing.

Ce n'est pas systématique. Mais si le retailer en fait la demande, voici comment transmettre le fichier.

---

## Ne jamais envoyer des adresses via messagerie

:::danger Données personnelles — canal sécurisé obligatoire
Les listes de suppression contiennent des **données personnelles** au sens du RGPD. Ne les transmettez pas par email, Slack, WhatsApp ou WeTransfer.

Tout fichier contenant des adresses (même hashées) doit passer par un protocole sécurisé.
:::

---

## Transmettre le fichier

La méthode recommandée est le dépôt SFTP avec **FileZilla**.

<div class="gi-value-grid">
  <div class="gi-value-card">
    <img src="/handbook/images/filezilla-logo.svg" alt="FileZilla" style="width: 48px; height: 48px; margin-bottom: 12px; display: block;">
    <strong>FileZilla</strong>
    <p>Gratuit, open source, disponible sur Windows, macOS et Linux. Déposez votre fichier via une interface graphique — pas de ligne de commande, juste un glisser-déposer.</p>
    <p><a href="https://filezilla-project.org/" target="_blank">Télécharger FileZilla →</a></p>
  </div>
</div>

Le retailer vous communique les informations de connexion SFTP :

| Champ | Ce que le retailer vous fournit |
|-------|--------------------------------|
| Hôte | Adresse du serveur SFTP (ex. `sftp.mondomaine.com`) |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt (ex. `/suppression/incoming/`) |
| Login | Identifiant SFTP |
| Mot de passe | Transmis hors messagerie |

**Format du fichier :** CSV, encodage UTF-8, header `email_sha256` ou `email`, nom `suppression_YYYYMMDD.csv`. Préférez les emails hashés SHA-256 — le retailer peut exclure les adresses sans les voir en clair.

:::details Mon infrastructure est différente (SFTP clé SSH, S3, Azure, GCP, API…)

**SFTP avec clé SSH**

Option plus sécurisée, sans mot de passe. Générez une paire de clés et transmettez votre clé publique au retailer — FileZilla supporte aussi cette méthode.

```bash
ssh-keygen -t ed25519 -C "suppression-list@votredomaine.com"
# Partagez uniquement le fichier .pub avec le retailer
```

---

**Bucket S3 (AWS)**

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Endpoint | Ex. `s3.eu-west-1.amazonaws.com` |
| Bucket | Nom du bucket |
| Répertoire | Préfixe de destination (ex. `suppression/`) |
| Access Key ID | Clé IAM dédiée (écriture uniquement) |
| Secret Access Key | À transmettre hors messagerie |

---

**Bucket GCP (Google Cloud Storage)**

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Bucket | Nom du bucket GCS |
| Token d'authentification | Fichier JSON d'un compte de service avec rôle `Storage Object Creator` |

---

**Azure Blob Storage**

Générez un SAS Token restreint à l'opération `Write`, valable 48h.

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Compte de stockage | Nom de votre compte Azure |
| Conteneur | Nom du conteneur Blob |
| SAS Token | Jeton d'accès signé (Write uniquement, 48h) |

---

**API / Endpoint (Eulerian ou autre)**

Si vous utilisez Eulerian, signalez-le au retailer — l'intégration est native, pas de fichier à transmettre.

Pour tout autre ESP ou DMP, partagez la documentation de votre endpoint et les accès nécessaires.

:::

---

## Étape suivante

Fichier déposé et confirmé par le retailer ? Passez à [Validation & Diffusion](./3-validation-diffusion).
