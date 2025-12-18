---
layout: default
title: Home
nav_exclude: true
permalink: /
description: "getinside Handbook: Guides officiels, spécifications techniques et processus Retail Media."
---

<!-- NEW HERO SECTION -->
<div class="gi-hero">
  <h1 class="gi-hero-title">Handbook getinside</h1>
  <p class="gi-hero-subtitle">
    L'espace unique pour piloter vos campagnes Retail Media, monétiser vos audiences et accéder à tout notre savoir-faire technique.
  </p>
  
  <div class="gi-search-container">
    <span class="gi-search-icon">🔍</span>
    <input type="text" class="gi-search-input" placeholder="Que recherchez-vous ? (ex: Sponsored Mail, Tracking, RSE...)" id="hb-search-input">
  </div>

  <div class="d-flex justify-content-center flex-wrap mt-6" style="gap: 15px;">
    <a href="https://app.getinside.media/" target="_blank" class="btn btn-primary px-4 py-2">Accéder au SaaS</a>
    <a href="https://getinside.fr/" target="_blank" class="btn px-4 py-2">Site Web</a>
    <a href="docs/fr/01-decouvrir/" class="btn px-4 py-2">Démarrer ici</a>
  </div>
</div>

<!-- DUAL PATH NAVIGATION -->
<div class="gi-path-grid">

  <!-- PATH: ANNONCEURS -->
  <div class="gi-path-card">
    <div class="gi-path-icon">🛍️</div>
    <h2 class="gi-path-title">Espace Annonceurs</h2>
    <p class="gi-path-desc">
      Vous êtes une marque ou une agence ? Découvrez comment diffuser vos campagnes auprès de nos réseaux de distribution premium.
    </p>
    <div class="gi-path-links">
      <a href="docs/fr/02-annonceurs/asile-colis/" class="gi-btn-outline-glass">📦 Sponsored Mail <span>&rarr;</span></a>
      <a href="docs/fr/02-annonceurs/email-dedie/" class="gi-btn-outline-glass">📧 Dedicated Email <span>&rarr;</span></a>
      <a href="docs/fr/02-annonceurs/social-ads/" class="gi-btn-outline-glass">📱 Sponsored Social <span>&rarr;</span></a>
      <a href="docs/fr/02-annonceurs/tarification" class="gi-btn-outline-glass">💰 Modèle Tarifaire <span>&rarr;</span></a>
    </div>
    <div class="mt-4 pt-4 border-top">
       <a href="docs/fr/02-annonceurs/" class="fw-700 text-purple-200">Voir tout l'Espace Annonceurs &rarr;</a>
    </div>
  </div>

  <!-- PATH: DISTRIBUTEURS -->
  <div class="gi-path-card">
    <div class="gi-path-icon">🏭</div>
    <h2 class="gi-path-title">Espace Distributeurs</h2>
    <p class="gi-path-desc">
      Vous êtes e-commerçant ? Apprenez à monétiser vos colis et vos audiences tout en garantissant une expérience client irréprochable.
    </p>
    <div class="gi-path-links">
      <a href="docs/fr/03-distributeurs/onboarding" class="gi-btn-outline-glass">🚀 Guide de Démarrage <span>&rarr;</span></a>
      <a href="docs/fr/03-distributeurs/asile-colis/" class="gi-btn-outline-glass">📦 Sponsored Mail <span>&rarr;</span></a>
      <a href="docs/fr/03-distributeurs/affiliation" class="gi-btn-outline-glass">🤝 Programme Affiliation <span>&rarr;</span></a>
      <a href="docs/fr/03-distributeurs/paiements" class="gi-btn-outline-glass">💸 Paiements & Wallet <span>&rarr;</span></a>
    </div>
    <div class="mt-4 pt-4 border-top">
       <a href="docs/fr/03-distributeurs/" class="fw-700 text-purple-200">Voir tout l'Espace Distributeurs &rarr;</a>
    </div>
  </div>

</div>

<!-- REASSURANCE SECTION -->
<h3 class="gi-section-title">Pourquoi centraliser sur getinside ?</h3>
<div class="gi-grid gi-grid-3 mb-6">
  {% include card.html title="🛡️ Sécurité Financière" desc="Nous agissons comme tiers de confiance. Paiements sécurisés et garantis pour les distributeurs." %}
  {% include card.html title="⚡ Simplicité Administrative" desc="Un seul interlocuteur, un seul contrat, une seule facture pour toutes vos campagnes." %}
  {% include card.html title="📊 Fiabilité Technique" desc="Outils de tracking propriétaires, validation des assets et conformité RGPD/RSE." %}
</div>

<!-- SUPPORT QUICK LINKS -->
<h3 class="gi-section-title">Besoin d'aide ?</h3>
<div class="gi-grid gi-grid-2">
  {% include card.html title="❓ FAQ" desc="Réponses rapides sur la logistique, les paiements et le tracking." url="docs/fr/04-faq/" %}
  {% include card.html title="📖 Glossaire" desc="Toutes les définitions métier : CPM, Lead Time, BAT, FOGRA39..." url="docs/fr/01-decouvrir/glossaire" %}
</div>

<footer class="mt-6 pt-6 border-top text-center fs-2 text-grey-dk-000">
  <p>
    <strong>Contact Opérations</strong> : <a href="mailto:benoit@getinside.fr">benoit@getinside.fr</a> &bull; 
    <strong>Studio Graphique</strong> : <a href="mailto:studio@getinside.fr">studio@getinside.fr</a>
  </p>
  <p class="mt-2">
    &copy; {{ "now" | date: "%Y" }} getinside media. Tous droits réservés.
  </p>
</footer>

<script>
// Liaison simple pour la barre de recherche avec le système Just the Docs
document.getElementById('hb-search-input').addEventListener('input', function(e) {
  const searchInput = document.querySelector('.search-input'); // Selecteur original du theme
  if (searchInput) {
    searchInput.value = e.target.value;
    searchInput.dispatchEvent(new Event('input', { bubbles: true }));
  }
});
</script>
