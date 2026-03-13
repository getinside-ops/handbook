---
title: Gérer les listes de suppression opt-out
description: Comment configurer un endpoint sécurisé pour recevoir les listes de suppression opt-out des annonceurs, et les appliquer dans votre ESP avant l'envoi de campagne.
keywords:
  - suppression list
  - opt-out
  - RGPD
  - SFTP
  - S3
  - ESP
  - email hashé SHA-256
---

# Gérer les listes de suppression opt-out

Quand un annonceur lance une campagne Email Dédié via getinside, il peut vous envoyer une liste de suppression : les adresses de contacts qui ont opt-out auprès de sa marque. Ces adresses ne doivent pas recevoir la campagne, même si elles sont dans votre base.

À vous de configurer un endpoint sécurisé et d'appliquer les suppressions dans votre routeur avant l'envoi.

---

## Ne jamais échanger des emails via messagerie

:::danger Données personnelles — canal sécurisé obligatoire
Les listes de suppression contiennent des **données personnelles** au sens du RGPD. Ne les demandez pas par email ou Slack. Ne les transmettez pas non plus par ces canaux.

Tout fichier contenant des adresses (même hashées) doit passer par l'un des protocoles ci-dessous.
:::

---

## Ce que vous devez faire

Avant l'envoi de la campagne, l'annonceur vous transmet un fichier CSV avec les adresses à exclure (en clair ou hashées SHA-256). Votre rôle :

1. Fournir un endpoint de réception sécurisé (cf. ci-dessous)
2. Communiquer les infos de connexion à l'annonceur **hors messagerie**
3. Importer les suppressions dans votre ESP avant de router

---

## Configurer votre endpoint de réception

Choisissez selon votre infrastructure.

:::details SFTP avec clé SSH (recommandé)

Informations à communiquer à l'annonceur :

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Hôte | Adresse de votre serveur SFTP (ex. `sftp.mondomaine.com`) |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt (ex. `/suppression/incoming/`) |
| Clé SSH publique | La clé `.pub` de l'annonceur, à ajouter dans votre `authorized_keys` |

Pour autoriser la clé SSH de l'annonceur :
```bash
# Sur votre serveur SFTP, ajoutez la clé fournie par l'annonceur
echo "ssh-ed25519 AAAA... suppression-list@annonceur.com" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Testez l'accès avec l'annonceur avant J-2.
:::

:::details SFTP avec login/password

Informations à communiquer à l'annonceur :

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Hôte | Adresse de votre serveur SFTP |
| Port | Généralement `22` |
| Chemin | Répertoire de dépôt |
| Login | Identifiant SFTP dédié à la suppression |
| Mot de passe | Généré de préférence, transmis hors messagerie |

:::warning Transmettez les credentials hors messagerie
Utilisez un gestionnaire de mots de passe avec partage sécurisé (1Password, Bitwarden…) ou un lien à usage unique (Passbolt, One-Time Secret).
:::
:::

:::details Bucket S3 (AWS)

Informations à communiquer à l'annonceur :

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Endpoint | Ex. `s3.eu-west-1.amazonaws.com` |
| Bucket | Nom de votre bucket |
| Répertoire | Préfixe de destination (ex. `suppression/`) |
| Access Key ID | Clé d'accès dédiée (droits `PutObject` sur ce répertoire uniquement) |
| Secret Access Key | À transmettre hors messagerie |

Pour créer un utilisateur IAM restreint :
```bash
aws iam create-user --user-name suppression-advertiser
aws iam put-user-policy --user-name suppression-advertiser \
  --policy-name SuppressionsOnly \
  --policy-document '{
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Action": ["s3:PutObject"],
      "Resource": "arn:aws:s3:::nom-du-bucket/suppression/*"
    }]
  }'
```
:::

:::details Bucket GCP (Google Cloud Storage)

Informations à communiquer à l'annonceur :

| Champ | Ce que vous fournissez |
|-------|------------------------|
| ID Projet | Votre identifiant de projet GCP |
| Nom du projet | Nom lisible |
| Bucket | Nom du bucket GCS |
| Token d'authentification | Fichier JSON d'un compte de service avec rôle `Storage Object Creator` |

Pour créer le compte de service et générer la clé :
```bash
gcloud iam service-accounts create suppression-advertiser \
  --display-name "Suppression list upload"

gcloud projects add-iam-policy-binding MON_PROJET \
  --member="serviceAccount:suppression-advertiser@MON_PROJET.iam.gserviceaccount.com" \
  --role="roles/storage.objectCreator" \
  --condition="resource.name.startsWith(\"projects/_/buckets/nom-du-bucket/objects/suppression/\")"

gcloud iam service-accounts keys create suppression-key.json \
  --iam-account=suppression-advertiser@MON_PROJET.iam.gserviceaccount.com
```

Transmettez `suppression-key.json` hors messagerie.
:::

:::details Azure Blob Storage

Informations à communiquer à l'annonceur :

| Champ | Ce que vous fournissez |
|-------|------------------------|
| Compte de stockage | Nom de votre compte Azure |
| Conteneur | Nom du conteneur Blob |
| SAS Token | Jeton d'accès signé (opération `Write` uniquement, durée 48h) |
| Répertoire | Préfixe de destination |

Pour générer un SAS Token restreint :
```bash
az storage container generate-sas \
  --account-name nom-du-compte \
  --name suppression \
  --permissions w \
  --expiry $(date -u -d "+48 hours" +%Y-%m-%dT%H:%MZ) \
  --output tsv
```

Renouvelez le SAS Token à chaque campagne. Un token expiré bloque le dépôt sans erreur visible côté annonceur.
:::

:::details API / Endpoint (Eulerian ou autre)

Si vous utilisez Eulerian, l'intégration avec l'annonceur est native — pas de fichier à gérer.

Pour tout autre ESP ou DMP avec une API d'audience :
- Fournissez la documentation de votre endpoint à l'annonceur
- Créez les accès nécessaires (API key, token OAuth…)
- Précisez le schéma attendu (champs, types, format d'email)

Si vous travaillez régulièrement avec le même annonceur, c'est l'option la moins contraignante sur la durée.
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
La plupart des ESP modernes (Mailchimp, Brevo, Klaviyo, Mailjet…) acceptent les suppressions en SHA-256 — vérifiez dans la doc de votre routeur. Si ce n'est pas le cas, demandez à l'annonceur un fichier en clair via un canal sécurisé (SFTP ou bucket chiffré).
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
