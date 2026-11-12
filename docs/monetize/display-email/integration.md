---
title: Intégration & Envoi
description: "Guide d'intégration du Display Email : réception de la bannière, récupération du lien tracké gtinsi.de, insertion dans votre routeur, test BAT puis diffusion. Rappelle que seul le lien tracké comptabilise les clics et que « Valider la diffusion » déclenche le crédit sur votre Wallet."
keywords:
  - Display Email
  - Lien tracké gtinsi.de
  - Routeur email
  - Test BAT
  - Valider la diffusion
  - Wallet
---

# Intégration et Diffusion

Utilisez le bon lien de redirection : c'est lui qui vous fait rémunérer.

<div class="gi-step">
  <div class="gi-step-num">1</div>
  <div class="gi-step-body">
    <h3>Réception du visuel</h3>
    <p>La marque vous transmet sa bannière (JPG, PNG ou GIF, max 150 Ko). Vérifiez que le format correspond à votre emplacement (ex : 600 × 150 px pour un Leaderboard) et la lisibilité sur mobile.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">2</div>
  <div class="gi-step-body">
    <h3>Récupération du lien tracké</h3>
    <p>Sur <a href="https://app.getinside.media/" target="_blank">app.getinside.media</a>, onglet <strong>"Configuration et suivi"</strong> de la campagne, copiez le <strong>lien tracké</strong> (<code>https://gtinsi.de/…</code>). Pas de pixel d'ouverture pour ce format : seuls les clics sont comptabilisés.</p>
  </div>
</div>

:::danger Lien tracké obligatoire
N'utilisez **jamais** le lien brut de la marque : sans <code>gtinsi.de</code>, les clics ne sont pas comptabilisés et vous n'êtes pas rémunéré.
:::

<div class="gi-step">
  <div class="gi-step-num">3</div>
  <div class="gi-step-body">
    <h3>Insertion dans votre routeur</h3>
    <p>Dans votre outil d'emailing (Mailchimp, Brevo, Klaviyo…) : insérez l'image, ajoutez-y un lien, puis collez le lien <code>gtinsi.de</code> comme URL de destination.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num">4</div>
  <div class="gi-step-body">
    <h3>Test BAT et validation</h3>
    <p>Envoyez un email de test à <code>benoit+news@getinside.fr</code>. Cliquez sur <strong>"Valider la campagne"</strong> sur la plateforme, puis attendez la validation de la marque.</p>
  </div>
</div>

<div class="gi-step">
  <div class="gi-step-num done">✓</div>
  <div class="gi-step-body">
    <h3>Diffusion et validation finale</h3>
    <p>Routez l'email à votre base, puis cliquez sur <strong>"Valider la diffusion"</strong> sur la plateforme.</p>
  </div>
</div>

::: warning Action bloquante
Sans **"Valider la diffusion"**, les fonds restent séquestrés : ce clic déclenche la facturation et le crédit sur votre Wallet (disponible 30 jours après la fin de campagne).
:::
