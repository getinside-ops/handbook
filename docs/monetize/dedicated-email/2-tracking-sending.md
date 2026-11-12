---
title: 2. Tracking & Envoi
description: "Étape 2 de l'emailing dédié : intégrer le pixel d'ouverture et les liens trackés gtinsi.de, valider le BAT par un email de test réel, puis diffuser à votre base. Rappelle que « Valider la diffusion » est obligatoire pour déclencher le crédit de votre revenu sur le Wallet."
keywords:
  - Emailing dédié
  - Pixel d'ouverture
  - Liens trackés gtinsi.de
  - BAT
  - Valider la diffusion
  - Wallet
---

# Étape 2 : Tracking, Validation et Envoi

Intégrez le tracking, faites valider un BAT, puis diffusez.

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Intégration du tracking</h3>
    <p>Dans l'onglet <strong>"Configuration"</strong> de la campagne :</p>
    <ul>
      <li><strong>Pixel d'ouverture</strong> : balise <code>&lt;img…&gt;</code> à insérer dans le HTML avant <code>&lt;/body&gt;</code>. Il comptabilise les vues.</li>
      <li><strong>Liens trackés</strong> : remplacez <strong>tous</strong> les liens vers la marque par les URLs <code>gtinsi.de</code> fournies. Ils comptabilisent les clics.</li>
    </ul>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Validation BAT</h3>
    <p>Envoyez un email de test réel depuis votre routeur à <code>benoit+news@getinside.fr</code>, avec votre adresse d'envoi habituelle. Après vérification par getinside, cliquez sur <strong>"Valider la campagne"</strong> sur la plateforme, puis attendez la validation de la marque.</p>
  </div>
</div>

::: danger BAT : email réel obligatoire
Aucun BAT n'est validé sur capture d'écran, PDF ou HTML brut. Seul un email reçu teste réellement le responsive, le pixel et les redirections.
:::

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Diffusion</h3>
    <p>Vérifiez que la segmentation du brief est appliquée (ex : actifs 12 mois, genre, géographie), puis routez l'email à votre base.</p>
  </div>
</div>

::: tip Renvoi aux non-ouvreurs (RGNO)
Si la commande inclut un renvoi, utilisez **exactement le même email** : même HTML, mêmes liens <code>gtinsi.de</code>, même pixel.
:::

<div class="gi-step">
  <div class="gi-step-num done">✓</div>
  <div class="gi-step-body">
    <h3>Validation finale</h3>
    <p>Une fois la diffusion (et le renvoi éventuel) terminée, cliquez sur <strong>"Valider la diffusion"</strong> sur <a href="https://app.getinside.media/" target="_blank">app.getinside.media</a>.</p>
  </div>
</div>

::: warning Action bloquante
Sans **"Valider la diffusion"**, les fonds restent séquestrés et votre revenu n'est pas crédité sur le Wallet (disponible 30 jours après la fin de campagne).
:::
