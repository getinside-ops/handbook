---
layout: default
title: Home
nav_exclude: true
permalink: /
description: "getinside Handbook: Guides officiels, spécifications techniques et processus Retail Media."
---

<!-- PREMIUM HERO SECTION -->
<div class="gi-hero" role="banner">
  <div class="gi-badge">DOCUMENTATION OFFICIELLE</div>
  <h1 class="gi-hero-title">Handbook getinside</h1>
  <p class="gi-hero-subtitle">
    L'espace unique pour piloter vos campagnes, monétiser vos audiences et accéder à tout l'univers technique du Retail Media.
  </p>
  
  <div class="d-flex justify-content-center flex-wrap mt-6 gap-15" style="position: relative; z-index: 10;">
    <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary px-4 py-2" aria-label="Accéder à la plateforme SaaS getinside (nouvel onglet)">Accéder au SaaS</a>
    <a href="docs/fr/01-decouvrir/" class="btn px-4 py-2" aria-label="Démarrer la lecture du handbook">Démarrer ici</a>
    <a href="https://getinside.fr/" target="_blank" class="btn px-4 py-2" aria-label="Visiter le site web officiel getinside.fr (nouvel onglet)">Site Web</a>
  </div>
</div>

<!-- DUAL PATH NAVIGATION -->
<div class="gi-path-grid" role="navigation" aria-label="Navigation par profil : Annonceur ou Distributeur">

  <!-- PATH: ANNONCEURS -->
  <div class="gi-path-card" id="path-annonceurs">
    <div class="gi-path-icon" aria-hidden="true">🛍️</div>
    <h2 class="gi-path-title">Espace Annonceurs</h2>
    <p class="gi-path-desc">
      Marques et agences : découvrez comment diffuser vos campagnes auprès de nos réseaux de distribution premium.
    </p>
    <div class="gi-path-links">
      <a href="docs/fr/02-annonceurs/asile-colis/" class="gi-btn-outline-glass">📦 Sponsored Mail <span>&rarr;</span></a>
      <a href="docs/fr/02-annonceurs/email-dedie/" class="gi-btn-outline-glass">📧 Dedicated Email <span>&rarr;</span></a>
      <a href="docs/fr/02-annonceurs/social-ads/" class="gi-btn-outline-glass">📱 Sponsored Social <span>&rarr;</span></a>
      <a href="docs/fr/02-annonceurs/tarification" class="gi-btn-outline-glass">💰 Modèle Tarifaire <span>&rarr;</span></a>
    </div>
    <div class="mt-auto pt-6">
       <a href="docs/fr/02-annonceurs/" class="fw-700 text-purple-200" aria-label="Explorer l'espace complet pour les annonceurs">Explorer l'espace complet &rarr;</a>
    </div>
  </div>

  <!-- PATH: DISTRIBUTEURS -->
  <div class="gi-path-card" id="path-distributeurs">
    <div class="gi-path-icon" aria-hidden="true">🏭</div>
    <h2 class="gi-path-title">Espace Distributeurs</h2>
    <p class="gi-path-desc">
      E-commerçants : apprenez à monétiser vos colis et vos audiences avec une expérience client irréprochable.
    </p>
    <div class="gi-path-links">
      <a href="docs/fr/03-distributeurs/onboarding" class="gi-btn-outline-glass">🚀 Guide de Démarrage <span>&rarr;</span></a>
      <a href="docs/fr/03-distributeurs/asile-colis/" class="gi-btn-outline-glass">📦 Sponsored Mail <span>&rarr;</span></a>
      <a href="docs/fr/03-distributeurs/affiliation" class="gi-btn-outline-glass">🤝 Programme Affiliation <span>&rarr;</span></a>
      <a href="docs/fr/03-distributeurs/paiements" class="gi-btn-outline-glass">💸 Paiements & Wallet <span>&rarr;</span></a>
    </div>
    <div class="mt-auto pt-6">
       <a href="docs/fr/03-distributeurs/" class="fw-700 text-purple-200" aria-label="Explorer l'espace complet pour les distributeurs">Explorer l'espace complet &rarr;</a>
    </div>
  </div>

</div>

<!-- REASSURANCE SECTION -->
<h3 class="gi-section-title">Pourquoi centraliser sur getinside ?</h3>
<div class="gi-grid gi-grid-3 mb-6">
  {% include card.html title="🛡️ Sécurité Financière" desc="Tiers de confiance assurant des paiements sécurisés et garantis." %}
  {% include card.html title="⚡ Simplicité Administrative" desc="Un seul interlocuteur et un contrat unique pour toutes vos campagnes." %}
  {% include card.html title="📊 Fiabilité Technique" desc="Tracking propriétaire et conformité totale aux standards RGPD/RSE." %}
</div>

<!-- SUPPORT QUICK LINKS -->
<h3 class="gi-section-title">Besoin d'aide ?</h3>
<div class="gi-grid gi-grid-2">
  {% include card.html title="❓ FAQ" desc="Réponses rapides sur la logistique, les paiements et le tracking." url="docs/fr/04-faq/" %}
  {% include card.html title="📖 Glossaire" desc="Définitions métier : CPM, Lead Time, BAT, FOGRA39..." url="docs/fr/01-decouvrir/glossaire" %}
</div>

<footer class="gi-home-footer">
  <p>
    © {{ "now" | date: "%Y" }} <strong>Contact Opérations</strong> : <a href="mailto:benoit@getinside.fr" style="color: #7253ed; text-decoration: none;">benoit@getinside.fr</a> • <strong>Studio Graphique</strong> : <a href="mailto:studio@getinside.fr" style="color: #7253ed; text-decoration: none;">studio@getinside.fr</a>
  </p>
  <p class="mt-2" style="font-size: 0.9em; opacity: 0.8;">
    © {{ "now" | date: "%Y" }} getinside media. Tous droits réservés.
  </p>
</footer>


