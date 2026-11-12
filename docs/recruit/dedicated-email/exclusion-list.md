---
title: Liste d'exclusion de contacts
description: "Comment transmettre une liste d'exclusion à la marque partenaire qui diffuse votre campagne : contacts opt-out RGPD ou clients existants à exclure d'une campagne de recrutement."
keywords:
  - liste d'exclusion
  - suppression list
  - opt-out RGPD
  - email hashé SHA-256
  - SFTP exclusion
---

# Liste d'exclusion de contacts

Avant l'envoi, transmettez à la marque partenaire une liste de contacts à écarter de la diffusion.

::: tip En bref
- À exclure : les contacts opt-out (obligatoire RGPD) et, si besoin, vos clients existants. Fusionnez-les en un seul fichier.
- Fichier CSV UTF-8, emails hashés SHA-256 de préférence.
- Transmission par canal sécurisé uniquement (SFTP, bucket, API), jamais par email ni WeTransfer.
:::

:::danger Données personnelles : canal sécurisé obligatoire
Ces listes contiennent des **données personnelles** au sens du RGPD. Ne les envoyez pas par email, messagerie getinside ou WeTransfer. Tout fichier contenant des adresses, même hashées, passe par un protocole sécurisé.
:::

## Transmettre le fichier

Méthode recommandée : dépôt SFTP avec **FileZilla** ([télécharger](https://filezilla-project.org/){target="_blank"}, gratuit, Windows / macOS / Linux). La marque partenaire vous communique :

| Champ | Contenu |
|-------|---------|
| Hôte | Adresse du serveur SFTP (ex. `sftp.mondomaine.com`) |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt (ex. `/suppression/incoming/`) |
| Login | Identifiant SFTP |
| Mot de passe | Transmis hors messagerie |

**Format :** CSV, UTF-8, header `email_sha256` ou `email`, nom `exclusion_YYYYMMDD.csv`. Préférez le hash SHA-256 : la marque exclut les adresses sans les voir en clair.

:::details Mon infrastructure est différente (clé SSH, S3, Azure, GCP, API)

- **SFTP avec clé SSH** (sans mot de passe) : générez une paire de clés avec `ssh-keygen -t ed25519 -C "exclusion-list@votredomaine.com"` et ne partagez que le fichier `.pub`. FileZilla supporte cette méthode.
- **Bucket S3 (AWS)** : endpoint (ex. `s3.eu-west-1.amazonaws.com`), nom du bucket, préfixe de destination (ex. `exclusion/`), clé IAM dédiée en écriture seule (Access Key ID + Secret Access Key, ce dernier hors messagerie).
- **Bucket GCP** : nom du bucket et fichier JSON d'un compte de service avec le rôle `Storage Object Creator`.
- **Azure Blob Storage** : compte de stockage, conteneur et SAS Token restreint à `Write`, valable 48h.
- **API / Endpoint** : avec Eulerian, l'intégration est native, signalez-le simplement. Pour tout autre ESP ou DMP, partagez la documentation de votre endpoint et les accès nécessaires.

:::

## Étape suivante

Fichier déposé et confirmé par la marque partenaire ? Passez à [Validation & Diffusion](./3-validation-diffusion).
