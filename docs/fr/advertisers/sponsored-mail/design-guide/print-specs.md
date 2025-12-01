---
layout: default
title: Spécifications Print
parent: Guide de Conception
grand_parent: Asile Colis
nav_order: 3
toc: false
---

# Spécifications Techniques
{: .fs-9 }

Les contraintes impératives pour garantir une qualité d'impression optimale.
{: .fs-6 .fw-300 }

<hr class="my-6">

<h2 class="text-blue-200 mb-4">📐 Formats et Dimensions</h2>

<!-- Tableau en Markdown natif -->

| Format | Format fini (Découpé) | Format fichier (Avec fond perdu) | Zone tranquille |
| :--- | :--- | :--- | :--- |
| **A5** | 148 x 210 mm | **152 x 214 mm** | 3 mm internes |
| **A6** | 105 x 148 mm | **109 x 152 mm** | 3 mm internes |
| **Carte** | 105 x 148 mm | **109 x 152 mm** | Voir Gabarit |

<br>

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 40px;">
  <div style="flex: 1; background: #ffeef0; border: 1px solid #fdaeb7; padding: 15px; border-radius: 6px;">
    <strong class="text-red-100">Fond Perdu (Bleed) : 2mm</strong><br>
    La matière (image/fond) doit déborder de 2mm à l'extérieur du format fini pour éviter les liserés blancs à la coupe.
  </div>
  <div style="flex: 1; background: #f0fcf4; border: 1px solid #28a745; padding: 15px; border-radius: 6px;">
    <strong class="text-green-200">Zone Tranquille : 3mm</strong><br>
    Aucun texte ni logo important ne doit se trouver à moins de 3mm du bord intérieur.
  </div>
</div>

<h2 class="text-blue-200 mb-4">🌐 Fichiers & Couleurs</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; width: 100%;">

  <div style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 20px;">
    <h3 class="mt-0 fs-4">📁 Type de fichier</h3>
    <ul class="mb-0">
      <li class="mb-2"><strong>PDF/X (Vectoriel) :</strong> À privilégier. Incorporez les polices.</li>
      <li><strong>JPG / PNG (Matriciel) :</strong> Accepté si <strong>300 DPI minimum</strong>.</li>
    </ul>
  </div>

  <div style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 20px;">
    <h3 class="mt-0 fs-4">🎨 Colorimétrie</h3>
    <ul class="mb-0">
      <li class="mb-2"><strong>Mode :</strong> CMJN (Cyan Magenta Jaune Noir) obligatoire. Pas de RVB.</li>
      <li class="mb-2"><strong>Profil :</strong> Coated FOGRA39.</li>
      <li><strong>Taux d'encrage :</strong> Max 300%.</li>
    </ul>
  </div>

</div>

<div class="mt-4 p-4 bg-grey-lt-000 border rounded-1">
  <h4 class="mt-0">⚫ Gestion du Noir</h4>
  <p class="mb-0">
    Pour les <strong>textes</strong> : Utilisez du Noir pur (N100%).<br>
    Pour les <strong>aplat (fonds)</strong> : Utilisez un noir soutenu (C30% M30% J30% N100%) pour plus de profondeur.
  </p>
</div>