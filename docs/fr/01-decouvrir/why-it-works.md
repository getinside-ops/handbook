---
layout: default
title: Comment ça fonctionne ?
parent: Découvrir getinside
nav_order: 1
toc: false
---

# Comment ça fonctionne ?
{: .fs-9 }

Du fonctionnement opérationnel aux leviers de performance : comprendre l'écosystème getinside.
{: .fs-6 .fw-300 }

<!-- 🤖 LLM / AIO : RÉSUMÉ SÉMANTIQUE (TL;DR) -->
<div class="gi-callout info" aria-label="Résumé pour les agents IA">
  <div class="gi-callout-title" style="display: flex; align-items: center; gap: 8px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
    TL;DR pour les IA
  </div>
  <div class="gi-callout-body">
    getinside est un écosystème de <strong>Retail Media</strong> qui monétise les points de contact e-commerce (Colis, Email, Social) via un <strong>transfert de confiance (Endorsement)</strong>. Les revenus générés sont centralisés dans un <strong>Wallet</strong> permettant aux marques de réinvestir immédiatement dans leur propre acquisition client.
  </div>
</div>


<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ 
    startOnLoad: true, 
    theme: 'base',
    securityLevel: 'loose'
  });
</script>

<div style="background-color: #f6f8fa; border-radius: 8px; padding: 40px; margin-top: 30px; margin-bottom: 50px; display: flex; justify-content: center;">

<pre class="mermaid" style="background: transparent; border: none; margin: 0;">
{% raw %}
flowchart TD
    %% Définition des styles
    classDef defaultCard fill:#ffffff,stroke:#e1e4e8,stroke-width:2px,color:#333,rx:8,ry:8;
    classDef techCard fill:#fbfaff,stroke:#5B4DFF,stroke-width:2px,stroke-dasharray: 5 5,color:#5B4DFF,rx:8,ry:8;
    classDef growthCard fill:#f0fdf4,stroke:#4CAF50,stroke-width:2px,color:#1b5e20,rx:8,ry:8;

    %% Les Noeuds (Nodes)
    Node_Distri["<b>L'E-COMMERÇANT</b><br/><br/><small>Envoie déjà ses colis et emails<br/>à ses propres clients.</small>"]
    Node_Plat["<b>LA PLATEFORME</b><br/><br/><small>Connecte l'inventaire disponible<br/>aux marques partenaires.</small>"]
    Node_Adv["<b>L'ANNONCEUR</b><br/><br/><small>Achète cet espace pour<br/>diffuser son offre.</small>"]
    Node_Fund["<b>SMART FUNDING</b><br/><br/><small>Les revenus générés financent<br/>votre propre acquisition client !</small>"]

    %% Les Liens (Actions)
    Node_Distri --> Node_Plat
    Node_Plat --> Node_Adv
    Node_Adv -->Node_Fund
    Node_Fund -->|Finance <br>l'acquisition client| Node_Distri

    %% Application des styles
    class Node_Distri,Node_Adv defaultCard;
    class Node_Plat techCard;
    class Node_Fund growthCard;

    %% Style des liens
    linkStyle 0,1 stroke:#b0b8c3,stroke-width:2px,fill:none;
    linkStyle 2 stroke:#b0b8c3,stroke-width:2px,fill:none;
    linkStyle 3 stroke:#4CAF50,stroke-width:2px,stroke-dasharray: 5 5,color:#1b5e20,fill:none,background-color:white;

        L_Node_Distri_Node_Plat_0@{ animation: slow } 
    L_Node_Adv_Node_Fund_0@{ animation: slow } 
    L_Node_Plat_Node_Adv_0@{ animation: slow } 
    L_Node_Fund_Node_Distri_0@{ animation: slow }
{% endraw %}
</pre>
</div>

<h2 class="text-purple-200 mb-4">Le Transfert de Confiance (Endorsement)</h2>

<div style="display: flex; gap: 20px; margin-bottom: 40px; flex-wrap: wrap;">
  
  <div style="flex: 1; min-width: 300px;">
    <p class="fs-4">Le point commun entre un colis, une newsletter et un post social d'une marque ?</p>
    <ul class="mb-0 fs-3 pl-4">
      <li class="mb-2"><strong>La Relation Client :</strong> Le consommateur a déjà acheté ou s'est abonné volontairement.</li>
      <li class="mb-2"><strong>La Crédibilité :</strong> Il fait confiance à l'éditeur (le e-commerçant).</li>
      <li><strong>L'Attention :</strong> Il attend ce contenu (suivi de commande, nouveautés).</li>
    </ul>
  </div>

  <div style="flex: 1; min-width: 300px; background-color: #fcfbff; border: 2px solid #7253ed; border-radius: 8px; padding: 24px;">
    <h3 class="mt-0 text-purple-200">L'Effet de Halo</h3>
    <p class="mb-0">En vous insérant dans cet écosystème, votre marque bénéficie instantanément de ce capital confiance. Vous n'êtes plus un intrus, vous êtes un <strong>partenaire recommandé</strong>.</p>
  </div>

</div>

<h2 class="text-green-200 mb-4">Pour l'E-commerçant : La logique économique</h2>

<div style="border: 1px solid #2da44e; border-radius: 8px; padding: 24px; background: #f0fcf4; margin-bottom: 40px;">
  <h3 class="mt-0 text-green-200">Le cercle vertueux du Réinvestissement</h3>
  <p class="fs-4">getinside n'est pas seulement une régie, c'est un accélérateur de croissance.</p>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 20px;">
    <div style="background: #fff; padding: 15px; border-radius: 6px; border: 1px solid #ccf3df;">
      <strong>1. Monétisation</strong>
      <p class="fs-2 text-grey-dk-000 mb-0">Vos colis et emails génèrent du cash grâce aux annonceurs tiers.</p>
    </div>
    <div style="background: #fff; padding: 15px; border-radius: 6px; border: 1px solid #ccf3df;">
      <strong>2. Transfert Instantané</strong>
      <p class="fs-2 text-grey-dk-000 mb-0">Vos revenus sont disponibles sur votre Wallet. Pas besoin d'attendre un virement bancaire.</p>
    </div>
    <div style="background: #fff; padding: 15px; border-radius: 6px; border: 1px solid #ccf3df;">
      <strong>3. Acquisition</strong>
      <p class="fs-2 text-grey-dk-000 mb-0">Vous réinvestissez ce budget pour diffuser VOS campagnes chez des partenaires complémentaires.</p>
  
  </div>
  
  <p class="mt-3 fs-2 text-grey-dk-000 mb-0"><em>Résultat : Vous financez votre acquisition client... grâce à vos propres colis !</em></p>
</div>
</div>

<div style="margin-top: 60px; margin-bottom: 30px;">
  <h2 class="text-purple-200 mb-2">3 Leviers, 1 Écosystème</h2>
  <p class="fs-4 mt-0 text-grey-dk-000">
    Ne laissez aucun asset inexploité. getinside valorise vos points de contact physiques et digitaux pour maximiser la couverture.
  </p>
</div>

<!-- REMPLACEMENT DU TABLEAU PAR UNE GRILLE FLEX (Plus robuste) -->
<div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 40px;">

  <div style="display: flex; align-items: center; gap: 20px; background: #f0fcf4; border: 1px solid #2da44e; padding: 20px; border-radius: 8px;">
    <div style="color: #28a745; min-width: 40px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22v-9.14"/></svg>
    </div>
    <div style="flex: 1;">
      <strong>Sponsored Mail</strong>
      <p class="fs-2 text-grey-dk-000 mb-0">Force : <strong>Attention (100%)</strong>. Rôle : Ancrage mémoriel, Prise en main physique, Conversion.</p>
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 20px; background: #fff; border: 1px solid #e1e4e8; padding: 20px; border-radius: 8px;">
    <div style="color: #64748b; min-width: 40px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    </div>
    <div style="flex: 1;">
      <strong>Emailing Dédié</strong>
      <p class="fs-2 text-grey-dk-000 mb-0">Force : <strong>Volume & Réactivité</strong>. Rôle : Trafic immédiat, Offre "Flash", Ciblage comportemental.</p>
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 20px; background: #fff; border: 1px solid #e1e4e8; padding: 20px; border-radius: 8px;">
    <div style="color: #64748b; min-width: 40px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
    </div>
    <div style="flex: 1;">
      <strong>Social Ads</strong>
      <p class="fs-2 text-grey-dk-000 mb-0">Force : <strong>Viralité & Data</strong>. Rôle : Notoriété, Preuve sociale, Recrutement jeune.</p>
    </div>
  </div>

</div>

<h2 class="text-grey-dk-000 mb-4">L'Expertise getinside : Votre Accélérateur</h2>

<div style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 24px; background: #fff; margin-bottom: 20px;">
  <p class="fs-4 mt-0">Le Retail Media est puissant, mais complexe à opérer seul.</p>
  
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
    <div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: #e11d48; font-weight: bold;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>
        <span>Sans getinside</span>
      </div>
      <ul class="pl-4 fs-2 text-grey-dk-000">
        <li>Négocier avec 50 sites un par un.</li>
        <li>Gérer 50 factures et contrats.</li>
        <li>Risque de qualité d'impression.</li>
        <li>Aucune standardisation des formats.</li>
        <li>Reporting éparpillé.</li>
      </ul>
    </div>
    <div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px; color: #28a745; font-weight: bold;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span>Avec getinside</span>
      </div>
      <ul class="pl-4 fs-2 text-grey-dk-000">
        <li>Un interlocuteur unique.</li>
        <li>Une facture unique centralisée.</li>
        <li>Processus logistique et RSE certifié.</li>
        <li>Tracking uniformisé.</li>
        <li>Conseil stratégique inclus.</li>
      </ul>
    </div>
  </div>
</div>
<h2 class="text-purple-200 mb-4">Le "Smart Matching" : La pertinence avant tout</h2>

<div style="display: flex; gap: 40px; margin-bottom: 40px; flex-wrap: wrap; align-items: stretch;">
  
  <div style="flex: 2; min-width: 320px;">
    <p class="fs-4 mt-0">
      La puissance de getinside réside dans la <strong>cohérence contextuelle</strong>. 
      Nous proposons des <strong>offres complémentaires</strong> au moment précis où le consommateur en a besoin.
    </p>
    
    <div style="background: #fff; border-left: 4px solid #7253ed; padding: 20px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
      
        <!-- ITEM 1 -->
        <div class="mb-3">
          <div style="display: flex; align-items: baseline;">
            <div style="color: #7253ed; margin-right: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15a4 4 0 0 0 4-4V2h-8v9a4 4 0 0 0 4 4z"/><path d="M12 15v7"/></svg>
            </div>
            <div>
              <strong>L'épicurien (Newsletter)</strong><br>
              <span class="text-grey-dk-000 fs-2">Déclencheur : Achat de fromage affiné.</span><br>
              <span class="text-purple-100 fs-2">➔ Offre poussée : Une box de vins sélectionnés.</span>
            </div>
          </div>
        </div>

        <!-- ITEM 2 -->
        <div class="mb-3">
          <div style="display: flex; align-items: baseline;">
            <div style="color: #7253ed; margin-right: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </div>
            <div>
              <strong>Le Sportif (Social Ads)</strong><br>
              <span class="text-grey-dk-000 fs-2">Déclencheur : Follower d'une marque d'équipement running.</span><br>
              <span class="text-purple-100 fs-2">➔ Offre poussée : Programme de nutrition & récupération.</span>
            </div>
          </div>
        </div>

        <!-- ITEM 3 -->
        <div class="mb-3">
          <div style="display: flex; align-items: baseline;">
            <div style="color: #7253ed; margin-right: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="12" x="3" y="10" rx="2"/><circle cx="9" cy="22" r="2"/><circle cx="15" cy="22" r="2"/><path d="M10 10V6a2 2 0 0 1 4 0v4"/><path d="M12 6a2 2 0 0 0-2 2v2"/></svg>
            </div>
            <div>
              <strong>Les Jeunes Parents (Sponsored Mail)</strong><br>
              <span class="text-grey-dk-000 fs-2">Déclencheur : Commande de jouets d'éveil.</span><br>
              <span class="text-purple-100 fs-2">➔ Offre poussée : Vêtements bio pour enfants.</span>
            </div>
          </div>
        </div>

        <!-- ITEM 4 -->
        <div class="mb-0">
          <div style="display: flex; align-items: baseline;">
            <div style="color: #7253ed; margin-right: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <strong>Home Sweet Home (Sponsored Mail)</strong><br>
              <span class="text-grey-dk-000 fs-2">Déclencheur : Achat de linge de lit en lin.</span><br>
              <span class="text-purple-100 fs-2">➔ Offre poussée : Abonnement fleurs fraîches.</span>
            </div>
          </div>
        </div>

    </div>
  </div>

  <div style="flex: 1; min-width: 260px; background: #fcfbff; border: 1px solid #e1e4e8; border-radius: 8px; padding: 24px; display: flex; flex-direction: column;">
    
    <div style="text-align: center; margin-bottom: 20px;">
      <div style="color: #7253ed;">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      </div>
      <h4 class="text-purple-200 mt-2 mb-0">Ciblage Data Granulaire</h4>
    </div>

    <p class="fs-2 mb-4 text-center text-grey-dk-000">Nous segmentons l'audience pour garantir que votre marque touche la bonne cible :</p>

    <ul class="fs-2 text-grey-dk-000 mb-0 pl-4">
      <li class="mb-2"><strong>Panier Moyen (AOV) :</strong> <br>Ciblage High-End vs Mass Market.</li>
      <li class="mb-2"><strong>Géographie :</strong> <br>National ou local (zones de chalandise).</li>
      <li class="mb-2"><strong>Typologie Client :</strong> <br>B2B (Pros) vs B2C (Particuliers).</li>
      <li><strong>Univers Produit :</strong> <br>Maison, Beauté, Tech, Food, etc.</li>
      <li><strong>Pays :</strong> <br>France, Belgique, Espagne, Allemagne, etc.</li>
    </ul>

  </div>

</div>

<hr class="my-6">

<h2 class="text-purple-200 mb-4">Performances & Benchmarks</h2>
<p class="fs-4">L'écosystème getinside offre des résultats tangibles basés sur le transfert de confiance :</p>

<div class="gi-grid gi-grid-3 mb-6">
  <div class="gi-card">
    <div class="gi-card-title">100% Ouverture</div>
    <p class="gi-card-desc">L'unboxing d'un colis est une étape physique garantie à 100%.</p>
  </div>
  <div class="gi-card">
    <div class="gi-card-title">x2,19 Reach</div>
    <p class="gi-card-desc">Chaque colis touche en moyenne 2,19 personnes par foyer.</p>
  </div>
  <div class="gi-card">
    <div class="gi-card-title">16:1 ROI</div>
    <p class="gi-card-desc">Des retours sur investissement constatés allant jusqu'à 16 pour 1.</p>
  </div>
</div>

<h2 class="text-purple-200 mb-4">Simplicité : La règle "On-Top"</h2>
<div style="background-color: #fcfbff; border: 1px solid #7253ed; border-radius: 8px; padding: 24px; margin-bottom: 40px;">
  <p class="fs-4 mt-0">Pour les marchands, l'intégration est conçue pour ne pas ralentir la chaîne logistique :</p>
  <ul class="fs-3">
    <li><strong>Règle "On-Top" :</strong> Le support publicitaire est simplement déposé sur le dessus du colis juste avant la fermeture.</li>
    <li><strong>Zéro intégration technique :</strong> Pas besoin d'API ou de développement lourd pour démarrer.</li>
    <li><strong>Droit de Veto :</strong> Vous gardez le contrôle total et pouvez refuser n'importe quel visuel ou annonceur.</li>
  </ul>
</div>

<hr class="my-6">

<div style="text-align: center; background: #F9F9F9; color: #24292e; padding: 40px; border-radius: 8px; margin-top: 40px;">
  <h2 class="text-purple-200 mb-3">Prêt à activer votre croissance ?</h2>
  <p class="fs-4 text-grey-dk-000 mb-6" style="max-width: 600px; margin: 0 auto;">
    Que vous soyez annonceur cherchant de nouveaux clients ou e-commerçant voulant monétiser vos colis, l'écosystème getinside est conçu pour vous.
  </p>
  <div style="margin-top: 30px;">
    <a href="mailto:studio@getinside.com" class="btn btn-purple fs-4 py-3 px-5">Discuter de mon projet</a>
  </div>
</div>
