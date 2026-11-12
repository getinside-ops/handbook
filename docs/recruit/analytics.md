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

::: tip En bref
- getinside mesure les scans (QR code) et les clics. Ce qui se passe ensuite sur votre site se mesure avec vos paramètres UTM.
- Le QR code de l'insertion colis doit pointer vers une URL dynamique, modifiable après impression.
- Testez l'URL et scannez le QR avant de valider le BAT.
:::

L'attribution getinside est **en boucle fermée** : le scan du QR code et le code promo unique par marque qui diffuse rattachent chaque vente à sa campagne, sans cookie tiers. Pour suivre l'acheteur après son arrivée sur votre site (visites, paniers, conversions), ajoutez votre propre tracking.

## Conventions UTM

Ajoutez ces paramètres à l'URL de votre landing page avant de la soumettre :

| Paramètre | Valeur |
|---|---|
| `utm_source` | `getinside` |
| `utm_medium` | Selon le format (tableau ci-dessous) |
| `utm_campaign` | Nom de votre campagne (ex : `promo-ete-2026`) |
| `utm_content` | Marque qui diffuse (optionnel) |

| Format | `utm_medium` | getinside mesure | Vous mesurez |
|---|---|---|---|
| Insertion colis | `sponsored-mail` | Scans du QR code | Visites, achats |
| Emailing dédié | `dedicated-email` | Clics sur les liens | Visites, conversions |
| Encart newsletter | `display-email` | Clics sur la bannière | Visites, conversions |
| Social Ads | `social-ads` | Clics sur la publication | Visites, conversions |

```
https://monsite.com/offre-ete?utm_source=getinside&utm_medium=sponsored-mail&utm_campaign=promo-ete-2026
```

## URL dynamique (insertion colis)

Une URL dynamique se modifie après impression : vous corrigez une erreur ou changez de landing page sans réimprimer.

::: warning URL statique = risque
Une URL codée en dur dans le QR code ne peut plus changer après impression. Utilisez une redirection : le service QR de getinside la gère automatiquement. Confirmez avec votre gestionnaire de compte.
:::

## Vérifier avant le BAT

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Tester l'URL</h3>
    <p>Collez l'URL avec ses paramètres UTM dans votre navigateur et vérifiez l'affichage de la page.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Vérifier dans GA4</h3>
    <p>Dans <strong>Rapports → Acquisition → Acquisition du trafic</strong>, vérifiez que la session apparaît avec la source <code>getinside</code> et le bon support.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">3</div>
  <div class="gi-step-body">
    <h3>Scanner le QR (insertion colis)</h3>
    <p>Scannez le QR avec un téléphone avant le BAT final et contrôlez la redirection et les UTM dans votre outil.</p>
  </div>
</div>
