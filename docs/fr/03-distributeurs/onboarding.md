---
layout: default
title: Onboarding & Fonctionnement
description: "Processus d'intégration et de fonctionnement pour les éditeurs : audit, configuration, activation et gestion des campagnes."
parent: Espace Distributeurs
nav_order: 1
---

# Intégration et Fonctionnement Distributeur
{: .fs-9 }

Bienvenue chez getinside ! Nous sommes ravis de vous accompagner dans la monétisation de vos audiences. Ce guide vous explique pas à pas comment transformer vos colis et vos médias en revenus.
{: .fs-6 .fw-300 }

<div class="gi-grid gi-grid-3 mt-6">
 <div class="gi-card">
 <div class="gi-card-icon" style="color: #64748b;"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg></div>
 <div class="gi-card-title">1. Configuration</div>
 <p class="gi-card-desc">Audit, création de compte et paramétrage logistique.</p>
 </div>
 <div class="gi-card">
 <div class="gi-card-icon" style="color: #28a745;"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
 <div class="gi-card-title">2. Activation</div>
 <p class="gi-card-desc">Création de vos audiences et mise en ligne sur la marketplace.</p>
 </div>
 <div class="gi-card">
 <div class="gi-card-icon" style="color: #f59e0b;"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
 <div class="gi-card-title">3. Revenus</div>
 <p class="gi-card-desc">Gestion des offres, diffusion et encaissement des gains.</p>
 </div>
</div>

<hr class="my-6">

<h2 class="text-purple-200 mb-6">Phase 1 : Configuration et Activation</h2>

{% capture step1 %}
Tout commence par un échange privilégié avec notre équipe. 
<br>
1. Nous créons votre compte e-commerçant.
<br>
2. Vous recevez un email d'invitation.
<br>
3. **Action :** Activez votre accès en définissant votre mot de passe depuis l'email reçu.
{% endcapture %}
{% include step.html index="1" title="Démo & Création du compte" content=step1 %}

{% capture step2 %}
Avant de créer vos audiences, définissez vos contraintes logistiques pour que notre algorithme puisse vous proposer des campagnes adaptées.

<div style="background-color: #f0f8ff; border-left: 4px solid #0366d6; padding: 15px; margin-top: 15px; border-radius: 4px;">
 <strong class="text-blue-200">Paramètres Logistiques</strong><br>
 <div style="display: flex; align-items: center; gap: 8px; margin-top: 8px;">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
 <span><strong>Adresse de l'entrepôt :</strong> Où livrer les flyers ?</span>
 </div>
 <div style="display: flex; align-items: center; gap: 8px; margin-top: 4px;">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
 <span><strong>Lead Time :</strong> Délai entre la réception et le début de l'insertion.</span>
 </div>
</div>
{% endcapture %}
{% include step.html index="2" title="Configuration Logistique" content=step2 %}

{% capture step3 %}
Dans l'onglet **Monétisation**, décrivez précisément vos audiences pour maximiser votre attractivité.

<div class="mt-3">
 <a href="audiences" class="btn btn-primary btn-sm">Voir le guide complet : Audience & Score <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: inline-block; vertical-align: middle; margin-left: 4px;"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
</div>
{% endcapture %}
{% include step.html index="3" title="Création des Audiences" content=step3 %}

{% capture step4 %}
Pour chaque audience, activez les formats que vous souhaitez monétiser :

<div class="mt-3 mb-3">
 <div style="display: flex; align-items: center; gap: 8px;">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22v-9.14"/></svg>
 <strong>Sponsored Mail :</strong> Flyers, échantillons ou catalogues.
 </div>
 <br>
 <a href="asile-colis/" class="btn btn-outline btn-sm mt-2">Découvrir le format</a>
</div>

<div class="mt-3">
 <div style="display: flex; align-items: center; gap: 8px;">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
 <strong>Digital :</strong> Email dédié ou bannières.
 </div>
 <br>
 <a href="email-dedie/" class="btn btn-outline btn-sm mt-2">Découvrir le format</a>
</div>
{% endcapture %}
{% include step.html index="4" title="Choix des Formats" content=step4 %}

{% capture step5 %}
Dès que vos infos sont prêtes, nous réalisons un call de contrôle final pour vérifier que tout est optimal avant la mise en ligne.
{% endcapture %}
{% include step.html index="5" title="Validation Opérationnelle" content=step5 %}

{% capture step6 %}
Félicitations ! Vos audiences sont maintenant **visibles par des centaines d'annonceurs** sur la plateforme.
{% endcapture %}
{% include step.html index="<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>" color="green" title="Mise en ligne" content=step6 %}


<hr class="my-6">

<h2 class="text-purple-200 mb-6">Phase 2 : Gestion des Campagnes</h2>

{% capture step7 %}
Dès qu'un annonceur souhaite diffuser chez vous, vous recevez une proposition détaillée.
{% include callout.html type="important" title="Règle de Réactivité (48h)" content="Une réponse est attendue sous **48h ouvrées**. Sans réponse de votre part, l'offre est considérée comme refusée par défaut." %}
{% endcapture %}
{% include step.html index="7" title="Réception des Offres" content=step7 %}

{% capture step8 %}
Ne laissez aucune opportunité passer. Si une offre ne vous convient pas totalement, utilisez la négociation :
<div style="margin-left: 20px; list-style: none;">
 <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
 <strong>Tarif :</strong> Faites une contre-proposition.
 </div>
 <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 5px;">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
 <strong>Planning :</strong> Ajustez les dates selon vos pics de trafic.
 </div>
 <div style="display: flex; align-items: center; gap: 8px;">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
 <strong>Chat :</strong> Discutez en direct avec l'annonceur.
 </div>
</div>
{% endcapture %}
{% include step.html index="8" title="Négociation & Discussion" content=step8 %}

{% capture step9 %}
Une fois l'accord scellé, suivez les instructions opérationnelles (réception des stocks ou validation des BAT) directement dans l'interface.
{% endcapture %}
{% include step.html index="9" color="green" title="Lancement de Campagne" content=step9 %}

<hr class="my-6">

<h2 class="text-blue-200 mb-6">Phase 3 : Boostez vos revenus</h2>

{% capture step10 %}
Maximisez vos gains en invitant vos propres marques partenaires à utiliser la plateforme pour leurs campagnes chez vous.
{% include callout.html type="tip" title="Trade Marketing" content="Centralisez la gestion de vos fournisseurs sur getinside pour simplifier votre facturation et augmenter votre volume d'affaires." %}
{% endcapture %}
{% include step.html index="" color="blue" title="Proactivité (Trade Marketing)" content=step10 %}

{% capture step11 %}
Le programme d'affiliation vous permet de toucher **20% de commission** sur l'activité de vos parrainages.

<div class="mt-3">
 <a href="affiliation" class="btn btn-outline btn-sm">En savoir plus sur l'affiliation</a>
</div>
{% endcapture %}
{% include step.html index="" color="blue" title="Parrainage & Affiliation" content=step11 %}
