---
layout: default
title: 2. Création (Distributeur)
parent: Emailing Dédié
grand_parent: Espace Annonceurs
nav_order: 2
---

# Étape 2 : Création de l'email
{: .fs-9 }

C'est le Distributeur qui conçoit l'email pour le rendre "natif" et engageant pour sa base.
{: .fs-6 .fw-300 }

<hr class="my-6">

<h2 class="text-blue-200 mb-4">L'Art du Co-branding</h2>

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 40px;">
  
  <div style="flex: 1; min-width: 300px; border: 1px solid #28a745; background-color: #f0fcf4; border-radius: 8px; padding: 20px;">
    <h3 class="mt-0 text-green-200">✅ À FAIRE (Recommandation)</h3>
    <p>L'objectif est de recommander la marque à vos clients.</p>
    <ul>
      <li>Utiliser l'en-tête (Header) habituel du Distributeur.</li>
      <li>Rédiger un édito : "Notre coup de cœur de la semaine".</li>
      <li>Garder les boutons et polices du Distributeur.</li>
    </ul>
  </div>

  <div style="flex: 1; min-width: 300px; border: 1px solid #d73a49; background-color: #fff5f5; border-radius: 8px; padding: 20px;">
    <h3 class="mt-0 text-red-200">❌ À ÉVITER (Full Brand)</h3>
    <p>Ne pas envoyer une publicité brute.</p>
    <ul>
      <li>Utiliser 100% de la charte de l'Annonceur.</li>
      <li>Faire disparaître la marque du Distributeur.</li>
      <li>Le lecteur ne comprend pas qui lui écrit (Risque de désabonnement).</li>
    </ul>
  </div>

</div>

<!-- BLOC STUDIO -->
<div style="border: 2px solid #7253ed; border-radius: 8px; padding: 30px; position: relative; margin-bottom: 40px;">
  <div style="position: absolute; top: -12px; left: 30px; background: #7253ed; color: white; padding: 2px 12px; border-radius: 12px; font-weight: bold; font-size: 14px;">OPTION STUDIO</div>
  
  <h2 class="mt-2 text-purple-200">Délégation au Studio getinside</h2>
  <p class="fs-4">Le Distributeur manque de temps ou de ressources créatives ?</p>
  
  <div style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap;">
    <ul class="mb-0 flex-grow-1">
      <li><strong>Copywriting :</strong> Rédaction de l'édito et des accroches.</li>
      <li><strong>Design :</strong> Création graphique et retouches.</li>
      <li><strong>Tech :</strong> Intégration HTML responsive et tests.</li>
    </ul>
    <div style="text-align: right;">
      <div class="fs-8 fw-700 text-purple-200">550€ HT</div>
      <div class="fs-2 text-grey-dk-000">par création</div>
      <a href="mailto:studio@getinside.fr" class="btn btn-purple mt-2">Contacter le Studio</a>
    </div>
  </div>
</div>

<h2 class="text-grey-dk-000 mb-4">Spécifications Techniques</h2>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Élément</th>
        <th>Contrainte</th>
        <th>Pourquoi ?</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Largeur</strong></td>
        <td>600px à 640px max</td>
        <td>Standard pour lecture mobile et desktop.</td>
      </tr>
      <tr>
        <td><strong>Poids HTML</strong></td>
        <td>&lt; 102 Ko</td>
        <td>Évite que Gmail ne coupe le message ("Afficher la suite").</td>
      </tr>
      <tr>
        <td><strong>Images</strong></td>
        <td>Hébergées (https://)</td>
        <td>Liens absolus obligatoires.</td>
      </tr>
      <tr>
        <td><strong>Ratio</strong></td>
        <td>60% Image / 40% Texte</td>
        <td>Éviter les filtres anti-spam (Délivrabilité).</td>
      </tr>
      <tr>
        <td><strong>CSS</strong></td>
        <td>Inline (dans les balises)</td>
        <td>Compatibilité Outlook et webmails.</td>
      </tr>
    </tbody>
  </table>
</div>