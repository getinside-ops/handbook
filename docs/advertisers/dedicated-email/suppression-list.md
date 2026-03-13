---
title: Liste de suppression opt-out
description: Comment transmettre votre liste de suppression opt-out à un retailer partenaire getinside. Guide des méthodes de transfert sécurisé (SFTP, S3, GCP, Azure, API) et bonnes pratiques RGPD.
keywords:
  - suppression list
  - opt-out
  - RGPD
  - email hashé SHA-256
  - SFTP
  - S3
  - dépôt fichier sécurisé
---

# Liste de suppression opt-out

Avant tout envoi de campagne Email Dédié, vous devez transmettre au retailer la liste des adresses à **exclure** — les contacts qui ont opt-out auprès de votre marque. Si vous oubliez cette étape, l'envoi n'est pas conforme au RGPD.

---

## Ne jamais transmettre des emails via messagerie

:::danger Données personnelles — canal sécurisé obligatoire
Les listes d'adresses email sont des **données personnelles** au sens du RGPD. Les envoyer par email, Slack, WhatsApp ou WeTransfer est **interdit**.

Utilisez uniquement les méthodes listées ci-dessous. Si vous n'avez pas d'infra disponible, contactez votre chargé de compte getinside.
:::

---

## Format du fichier

Avant de choisir votre méthode de dépôt, alignez-vous avec le retailer sur ces points :

| Paramètre | Valeur recommandée |
|-----------|-------------------|
| Encodage | UTF-8 sans BOM |
| Séparateur | `,` (virgule) ou `;` (point-virgule) |
| Header | Oui — `email_sha256` ou `email` |
| Nom de fichier | `suppression_YYYYMMDD.csv` |
| Type d'identifiant | Email hashé SHA-256 (recommandé) |

### Email en clair ou hashé ?

Préférez le **hash SHA-256** : le retailer s'en sert pour exclure les adresses dans son ESP sans jamais les voir en clair. C'est une empreinte à sens unique.

```bash
# Hasher une adresse email en SHA-256 (Linux/macOS)
echo -n "utilisateur@exemple.com" | sha256sum
# → a1b2c3d4e5f6...
```

Si votre plateforme ne gère que les emails en clair, c'est acceptable techniquement — mais le dépôt sur un canal chiffré (SFTP ou bucket) devient alors indispensable.

---

## Fréquence et timing

- **One-shot** avant l'envoi : transmettez le fichier **au moins J-2** avant la date d'envoi.
- Précisez une heure si le retailer le demande (ex. avant 8h le J-2).
- Pour les campagnes automatisées (trigger post-achat), une mise à jour hebdomadaire est possible — à convenir avec le retailer.

---

## Méthodes de dépôt

Choisissez selon votre infrastructure ou celle de votre partenaire technique (ex. FDJ).

:::details SFTP avec clé SSH (recommandé)

Informations à fournir au retailer :

| Champ | Description |
|-------|-------------|
| Hôte | Nom de domaine ou IP de votre serveur SFTP |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt (ex. `/suppression/incoming/`) |
| Clé SSH publique | Votre fichier `.pub` à ajouter dans `authorized_keys` côté retailer |

Pas de mot de passe qui circule — l'auth repose sur une paire de clés. C'est la méthode la plus sûre.

Pour générer votre paire de clés :
```bash
ssh-keygen -t ed25519 -C "suppression-list@votredomaine.com"
# Partagez uniquement le fichier .pub avec le retailer
```
:::

:::details SFTP avec login/password

Informations à fournir :

| Champ | Description |
|-------|-------------|
| Hôte | Nom de domaine ou IP |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt |
| Login | Identifiant SFTP |
| Mot de passe | À transmettre hors messagerie |

:::warning Ne transmettez jamais les credentials par email ou Slack
Utilisez un gestionnaire de mots de passe avec partage sécurisé (1Password, Bitwarden…) ou un lien à usage unique (Passbolt, One-Time Secret).
:::
:::

:::details FTP (déconseillé)

Le FTP transmet identifiants et données **en clair** sur le réseau. À réserver aux situations sans autre option, et sur un réseau privé ou VPN.

Informations à fournir :

| Champ | Description |
|-------|-------------|
| Hôte | Nom de domaine ou IP |
| Port | Généralement `21` |
| Chemin | Répertoire de dépôt |
| Login / Mot de passe | Identifiants FTP |
| Mode | Actif ou passif (précisez) |
:::

:::details Bucket S3 (AWS)

Informations à fournir :

| Champ | Description |
|-------|-------------|
| Endpoint | Ex. `s3.eu-west-1.amazonaws.com` |
| Bucket | Nom du bucket |
| Répertoire | Préfixe de destination (ex. `suppression/`) |
| Access Key ID | Clé d'accès AWS |
| Secret Access Key | À transmettre hors messagerie |

Exemple avec AWS CLI :
```bash
aws s3 cp suppression_20260313.csv s3://nom-du-bucket/suppression/ \
  --sse AES256
```

Créez un utilisateur IAM dédié avec des droits limités au bucket et au répertoire concernés. Pas de clés root.
:::

:::details Bucket GCP (Google Cloud Storage)

Informations à fournir :

| Champ | Description |
|-------|-------------|
| ID Projet | L'identifiant de votre projet GCP |
| Nom du projet | Nom lisible |
| Bucket | Nom du bucket GCS |
| Token d'authentification | Fichier JSON du compte de service (hors messagerie) |

Exemple avec gsutil :
```bash
gsutil cp suppression_20260313.csv gs://nom-du-bucket/suppression/
```

Créez un compte de service dédié avec le rôle `Storage Object Creator` sur ce bucket uniquement. Pas de compte admin.
:::

:::details Azure Blob Storage

Informations à fournir :

| Champ | Description |
|-------|-------------|
| Compte de stockage | Nom du compte Azure |
| Conteneur | Nom du conteneur Blob |
| SAS Token | Jeton d'accès signé, limité en durée et en périmètre |
| Répertoire | Préfixe de destination |

Exemple avec Azure CLI :
```bash
az storage blob upload \
  --account-name nom-du-compte \
  --container-name suppression \
  --name "suppression_20260313.csv" \
  --file suppression_20260313.csv \
  --sas-token "?sv=2022-..."
```

Générez un SAS Token court (24-48h), restreint à l'opération `Write` sur ce conteneur.
:::

:::details API / Endpoint (Eulerian ou autre)

Si vous utilisez Eulerian, signalez-le au retailer — l'intégration est native, pas de fichier à transmettre.

Pour tout autre ESP ou DMP, fournissez :
- La documentation de l'endpoint (format de la requête, authentification)
- Les accès pour créer des audiences (API key, token OAuth…)
- Le schéma de données (champs, types)

Si vos listes changent chaque semaine, c'est de loin la meilleure option — pas de fichier, pas de dépôt manuel.
:::

---

## Quelle méthode choisir ?

| Situation | Méthode |
|-----------|---------|
| Vous avez un serveur SFTP | SFTP + clé SSH |
| Vous êtes sur AWS | S3 avec IAM restreint |
| Vous êtes sur GCP | GCS avec compte de service dédié |
| Vous êtes sur Azure | Blob Storage + SAS Token |
| Vous utilisez Eulerian | API native |
| Aucune infra disponible | Contactez getinside |

---

## Étape suivante

Fichier déposé et confirmé par le retailer ? Passez à [Validation & Diffusion](./3-validation-diffusion).
