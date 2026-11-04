---
title: Suivi & Mesure des Campagnes
description: Configurez votre propre tracking analytique pour mesurer l'impact de vos campagnes getinside dans Google Analytics ou votre outil d'attribution.
keywords:
  - tracking campagne getinside
  - paramètres UTM
  - mesure conversion flyer
  - analytics campagne
---

# Suivi & Mesure des Campagnes

L'attribution getinside est **en boucle fermée** : le scan du QR code et le code promo unique par marque qui diffuse rattachent chaque vente à la campagne qui l'a générée, sans cookie tiers. Ce guide explique comment compléter cette boucle avec votre propre tracking, pour suivre l'acheteur du premier contact jusqu'à la conversion.

La plateforme getinside comptabilise les clics et les scans. Pour mesurer ce qui se passe **après** (visites, ajouts au panier, conversions), vous devez configurer votre propre couche de tracking.

## Pourquoi votre propre tracking est indispensable

getinside trace le volume de scans (QR code) et de clics (email, bannière). Ces données sont accessibles dans votre tableau de bord. Mais elles s'arrêtent à l'entrée sur votre site. Pour mesurer la suite, vous avez besoin de paramètres UTM dans vos URLs de destination.

## Conventions UTM getinside

Ajoutez ces paramètres à l'URL de votre landing page avant de la soumettre :

| Paramètre | Valeur recommandée |
|---|---|
| `utm_source` | `getinside` |
| `utm_medium` | Voir tableau ci-dessous |
| `utm_campaign` | Nom de votre campagne (ex : `promo-ete-2026`) |
| `utm_content` | Nom de la marque qui diffuse (optionnel) |

**Valeurs `utm_medium` par format :**

| Format | Valeur `utm_medium` |
|---|---|
| Insertion colis | `sponsored-mail` |
| Emailing dédié | `dedicated-email` |
| Encart newsletter | `display-email` |
| Social Ads | `social-ads` |

**Exemple d'URL complète :**

```
https://monsite.com/offre-ete?utm_source=getinside&utm_medium=sponsored-mail&utm_campaign=promo-ete-2026
```

## Ce qu'est une "conversion" selon le format

| Format | Ce que getinside mesure | Ce que vous mesurez côté site |
|---|---|---|
| Insertion colis | Scans du QR code | Visites sur la landing page → achats |
| Emailing dédié | Clics sur les liens de l'email | Visites → conversions |
| Encart newsletter | Clics sur la bannière | Visites → conversions |
| Social Ads | Clics sur la publication boostée | Visites → conversions |

## Prérequis pour l'insertion colis : URL dynamique

Le QR code sur votre flyer doit pointer vers une **URL dynamique** (modifiable après impression). Vous pouvez ainsi corriger une erreur d'URL ou modifier la landing page sans réimprimer.

::: warning URL statique = risque
Une URL codée en dur dans le QR code ne peut pas être modifiée après impression. Utilisez toujours un système de redirection. Le service QR de getinside le gère automatiquement. Confirmez avec votre gestionnaire de compte.
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
    <h3>Scanner le QR (insertion colis)</h3>
    <p>Pour les campagnes print, scannez votre QR code avec un téléphone avant de valider le BAT final. Vérifiez la redirection et les paramètres UTM dans votre outil analytique.</p>
  </div>
</div>
