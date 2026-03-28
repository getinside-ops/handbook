---
title: "Étape 2 : Tracking, Validation & Envoi"
description: Intégrez le tracking, soumettez le BAT et gérez la diffusion de votre campagne Email Dédié.
keywords:
  - tracking email
  - validation BAT
  - diffusion email dédié
  - pixel ouverture
---

Votre maquette est prête. Intégrez le tracking, soumettez un BAT et gérez la diffusion.

## Processus d'envoi

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Intégration du tracking</h3>
    <p>Depuis l'onglet <strong>"Configuration"</strong> de la campagne, récupérez les deux éléments techniques :</p>
    <ul>
      <li><strong>Pixel d'ouverture</strong> — Balise image <code>&lt;img…&gt;</code> à insérer dans le HTML de l'email (avant <code>&lt;/body&gt;</code>). Indispensable pour comptabiliser les vues.</li>
      <li><strong>Liens trackés (gtinsi.de)</strong> — Remplacez <strong>tous</strong> les liens vers l'annonceur par les URLs <code>gtinsi.de</code> fournies. Indispensable pour comptabiliser les clics.</li>
    </ul>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Validation BAT</h3>
    <p>Envoyez un email de test réel depuis votre routeur :</p>
    <ul>
      <li>Destinataire : <code>benoit+news@getinside.fr</code></li>
      <li>Expéditeur : votre adresse d'envoi habituelle</li>
    </ul>
    <p>Après vérification par getinside : connectez-vous à la plateforme et cliquez sur <strong>"Valider la campagne"</strong>. Attendez ensuite la validation côté annonceur.</p>
  </div>
</div>

::: danger BAT — Email réel obligatoire
Ne soumettez jamais de BAT sous forme de capture d'écran, PDF ou fichier HTML brut. L'email doit être reçu sur notre boîte pour tester le responsive, le pixel et les redirections en conditions réelles.
:::

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Diffusion</h3>
    <p>Avant de router, vérifiez que les critères de segmentation du brief sont appliqués (ex : Actifs 12 mois, Genre, Géographie). Routez l'email à votre base selon le segment défini.</p>
  </div>
</div>

::: tip Renvoi aux non-ouvreurs (RGNO)
Si un renvoi est inclus dans la commande : utilisez **exactement le même email** (même HTML, mêmes liens <code>gtinsi.de</code>, même pixel). Ne modifiez pas les trackers entre l'envoi initial et le renvoi.
:::

<div class="gi-step">
  <div class="gi-step-num done">✓</div>
  <div class="gi-step-body">
    <h3>Validation finale — action obligatoire</h3>
    <p>Une fois la diffusion (et le renvoi éventuel) terminée, retournez sur <a href="https://app.getinside.media/" target="_blank">app.getinside.media</a> et cliquez sur <strong>"Valider la diffusion"</strong>. Sans cette action, les fonds restent séquestrés et votre revenu n'est pas déclenché.</p>
  </div>
</div>

::: warning Action bloquante
**"Valider la diffusion"** est indispensable pour déclencher le crédit de votre revenu sur le Wallet (disponible 30 jours après la fin de campagne).
:::
