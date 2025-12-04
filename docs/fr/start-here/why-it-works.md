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

<!-- DEBUT DU SCHEMA MERMAID -->
<div class="mermaid">
flowchart TD
    %% --- STYLES ---
    classDef defaultCard fill:#ffffff,stroke:#e1e4e8,stroke-width:2px,color:#333,rx:8,ry:8;
    classDef techCard fill:#fbfaff,stroke:#5B4DFF,stroke-width:2px,stroke-dasharray: 5 5,color:#5B4DFF,rx:8,ry:8;
    classDef growthCard fill:#f0fdf4,stroke:#4CAF50,stroke-width:2px,color:#1b5e20,rx:8,ry:8;

    %% --- CONTENU ---
    Node_Distri["📦 <b>LE DISTRIBUTEUR</b><br/><br/><small>Met son inventaire à disposition<br/>(colis, emails).</small>"]
    Node_Plat["⚡ <b>LA PLATEFORME</b><br/><br/><small>Matching intelligent &<br/>réponse sous 48h.</small>"]
    Node_Adv["📢 <b>L'ANNONCEUR</b><br/><br/><small>Diffuse son offre exclusive<br/>au cœur de l'expérience.</small>"]
    Node_Fund["📈 <b>SMART FUNDING</b><br/><br/><small>Le solde finance votre<br/>propre acquisition (0% frais).</small>"]

    %% --- STRUCTURE ---
    subgraph Row1 [ ]
        direction LR
        Node_Distri --> Node_Plat
    end

    subgraph Row2 [ ]
        direction RL
        Node_Adv --> Node_Fund
    end

    Node_Plat --> Node_Adv
    
    %% --- LIEN DE RETOUR ---
    Node_Fund -->|Finance l'acquisition| Node_Distri

    %% --- STYLES ---
    class Node_Distri,Node_Adv defaultCard;
    class Node_Plat techCard;
    class Node_Fund growthCard;
    
    linkStyle 0,1,2 stroke:#b0b8c3,stroke-width:2px,fill:none;
    linkStyle 3 stroke:#4CAF50,stroke-width:2px,stroke-dasharray: 5 5,color:#1b5e20,fill:none;

    %% --- SUPPRESSION BORDURES ---
    style Row1 fill:#ffffff,stroke:none
    style Row2 fill:#ffffff,stroke:none
</div>

<hr class="my-6">

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

<!-- REMPLACEMENT DU TABLEAU PAR UNE GRILLE FLEX (Plus robuste) -->
<div style="display: flex; flex-direction: column; gap: 15px; margin-bottom: 40px;">

  <div style="display: flex; align-items: center; gap: 20px; background: #f0fcf4; border: 1px solid #2da44e; padding: 20px; border-radius: 8px;">
    <div style="font-size: 30px; min-width: 40px;">📦</div>
    <div style="flex: 1;">
      <strong>Asile Colis</strong>
      <p class="fs-2 text-grey-dk-000 mb-0">Force : <strong>Attention (100%)</strong>. Rôle : Ancrage mémoriel, Prise en main physique, Conversion.</p>
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 20px; background: #fff; border: 1px solid #e1e4e8; padding: 20px; border-radius: 8px;">
    <div style="font-size: 30px; min-width: 40px;">📧</div>
    <div style="flex: 1;">
      <strong>Emailing Dédié</strong>
      <p class="fs-2 text-grey-dk-000 mb-0">Force : <strong>Volume & Réactivité</strong>. Rôle : Trafic immédiat, Offre "Flash", Ciblage comportemental.</p>
    </div>
  </div>

  <div style="display: flex; align-items: center; gap: 20px; background: #fff; border: 1px solid #e1e4e8; padding: 20px; border-radius: 8px;">
    <div style="font-size: 30px; min-width: 40px;">📱</div>
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
      <strong>🚫 Sans getinside</strong>
      <ul class="pl-4 fs-2 text-grey-dk-000">
        <li>Négocier avec 50 sites un par un.</li>
        <li>Gérer 50 factures et contrats.</li>
        <li>Risque de qualité d'impression.</li>
        <li>Aucune standardisation des formats.</li>
        <li>Reporting éparpillé.</li>
      </ul>
    </div>
    <div>
      <strong>✅ Avec getinside</strong>
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
            <span style="font-size: 24px; margin-right: 10px;">🍷</span>
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
            <span style="font-size: 24px; margin-right: 10px;">🏃</span>
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
            <span style="font-size: 24px; margin-right: 10px;">👶</span>
            <div>
              <strong>Les Jeunes Parents (Asile Colis)</strong><br>
              <span class="text-grey-dk-000 fs-2">Déclencheur : Commande de jouets d'éveil.</span><br>
              <span class="text-purple-100 fs-2">➔ Offre poussée : Vêtements bio pour enfants.</span>
            </div>
          </div>
        </div>

        <!-- ITEM 4 -->
        <div class="mb-0">
          <div style="display: flex; align-items: baseline;">
            <span style="font-size: 24px; margin-right: 10px;">🪴</span>
            <div>
              <strong>Home Sweet Home (Asile Colis)</strong><br>
              <span class="text-grey-dk-000 fs-2">Déclencheur : Achat de linge de lit en lin.</span><br>
              <span class="text-purple-100 fs-2">➔ Offre poussée : Abonnement fleurs fraîches.</span>
            </div>
          </div>
        </div>

    </div>
  </div>

  <div style="flex: 1; min-width: 260px; background: #fcfbff; border: 1px solid #e1e4e8; border-radius: 8px; padding: 24px; display: flex; flex-direction: column;">
    
    <div style="text-align: center; margin-bottom: 20px;">
      <span style="font-size: 40px;">🎯</span>
      <h4 class="text-purple-200 mt-2 mb-0">Ciblage Data Granulaire</h4>
    </div>

    <p class="fs-2 mb-4 text-center text-grey-dk-000">Nous segmentons l'audience pour garantir que votre marque touche la bonne cible :</p>

    <ul class="fs-2 text-grey-dk-000 mb-0 pl-4">
      <li class="mb-2"><strong>Panier Moyen (AOV) :</strong> <br>Ciblage High-End vs Mass Market.</li>
      <li class="mb-2"><strong>Géographie :</strong> <br>National ou local (zones de chalandise).</li>
      <li class="mb-2"><strong>Typologie Client :</strong> <br>B2B (Pros) vs B2C (Particuliers).</li>
      <li><strong>Univers Produit :</strong> <br>Maison, Beauté, Tech, Food, etc.</li>
      <li><strong>Pays :</strong> <br>Audiences dans toute l'Europe.</li>
    </ul>

  </div>

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

<script type="module">
  import mermaid from '[https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs](https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs)';
  mermaid.initialize({ startOnLoad: true });
</script>