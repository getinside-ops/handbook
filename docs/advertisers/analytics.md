---
title: Suivi & Mesure des Campagnes
description: Configurez votre propre tracking analytique pour mesurer l'impact de vos campagnes getinside dans Google Analytics ou votre outil d'attribution.
keywords:
  - tracking campagne getinside
  - utm paramètres retail media
  - mesure conversion flyer
  - analytics annonceur
---

# Suivi & Mesure des Campagnes

La plateforme getinside comptabilise les clics et les scans. Pour mesurer ce qui se passe **après** — visites, ajouts au panier, conversions — vous devez configurer votre propre couche de tracking.

## Pourquoi votre propre tracking est indispensable

getinside trace le volume de scans (QR code) et de clics (email, bannière). Ces données sont accessibles dans votre tableau de bord. Mais elles s'arrêtent à l'entrée sur votre site. Pour mesurer la suite, vous avez besoin de paramètres UTM dans vos URLs de destination.

## Conventions UTM getinside

Ajoutez ces paramètres à l'URL de votre landing page avant de la soumettre :

| Paramètre | Valeur recommandée |
|---|---|
| `utm_source` | `getinside` |
| `utm_medium` | Voir tableau ci-dessous |
| `utm_campaign` | Nom de votre campagne (ex : `promo-ete-2026`) |
| `utm_content` | Nom du distributeur (optionnel) |

**Valeurs `utm_medium` par format :**

| Format | Valeur `utm_medium` |
|---|---|
| Insertion Colis | `sponsored-mail` |
| Emailing Dédié | `dedicated-email` |
| Display Email | `display-email` |
| Social Ads | `social-ads` |

**Exemple d'URL complète :**

```
https://monsite.com/offre-ete?utm_source=getinside&utm_medium=sponsored-mail&utm_campaign=promo-ete-2026
```

## Ce qu'est une "conversion" selon le format

| Format | Ce que getinside mesure | Ce que vous mesurez côté site |
|---|---|---|
| Insertion Colis | Scans du QR code | Visites sur la landing page → achats |
| Emailing Dédié | Clics sur les liens de l'email | Visites → conversions |
| Display Email | Clics sur la bannière | Visites → conversions |
| Social Ads | Clics sur la publication boostée | Visites → conversions |

## Prérequis pour l'Insertion Colis : URL dynamique

Le QR code sur votre flyer doit pointer vers une **URL dynamique** (modifiable après impression). Cela vous permet de corriger une erreur d'URL ou de modifier la landing page sans réimprimer.

::: warning URL statique = risque
Une URL codée en dur dans le QR code ne peut pas être modifiée après impression. Utilisez toujours un système de redirection — le service QR de getinside le gère automatiquement. Confirmez avec votre chargé de compte.
:::

## Vérifier que votre tracking fonctionne

Avant de valider votre BAT ou de soumettre votre brief :

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Tester l'URL</h3>
    <p>Copiez votre URL avec les paramètres UTM et collez-la dans votre navigateur. Vérifiez que la page s'affiche correctement.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Vérifier dans GA4</h3>
    <p>Dans Google Analytics 4, allez dans <strong>Rapports → Acquisition → Acquisition du trafic</strong> et vérifiez que la session apparaît avec la bonne source (<code>getinside</code>) et le bon support.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">3</div>
  <div class="gi-step-body">
    <h3>Scanner le QR (Insertion Colis)</h3>
    <p>Pour les campagnes print, scannez votre QR code avec un téléphone avant de valider le BAT final. Vérifiez la redirection et les paramètres UTM dans votre outil analytique.</p>
  </div>
</div>
