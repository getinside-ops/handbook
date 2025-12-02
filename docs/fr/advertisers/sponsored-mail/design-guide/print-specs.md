---
layout: default
title: Spécifications Print
parent: Guide de Conception
grand_parent: Asile Colis
nav_order: 3
---

# Spécifications Techniques
{: .fs-9 }

Les contraintes impératives pour garantir une qualité d'impression et de distribution optimale.
{: .fs-6 .fw-300 }

<hr class="my-6">

<h2 class="text-blue-200 mb-4">📐 Formats Papier (Flyers)</h2>

| Format | Format fini (Découpé) | Format fichier (Avec fond perdu) | Zone tranquille |
| :--- | :--- | :--- | :--- |
| **A5** | 148 x 210 mm | **152 x 214 mm** | 3 mm internes |
| **A6** | 105 x 148 mm | **109 x 152 mm** | 3 mm internes |
| **Carte** | 105 x 148 mm | **109 x 152 mm** | Voir Gabarit |

<br>

<div style="display: flex; gap: 20px; flex-wrap: wrap; margin-bottom: 40px;">
  <div style="flex: 1; background: #fff5f5; border: 1px solid #d73a49; padding: 15px; border-radius: 6px;">
    <strong class="text-red-200">Fond Perdu (Bleed) : 2mm</strong><br>
    La matière (image/fond) doit déborder de 2mm à l'extérieur pour éviter les liserés blancs.
  </div>
  <div style="flex: 1; background: #f0fcf4; border: 1px solid #28a745; padding: 15px; border-radius: 6px;">
    <strong class="text-green-200">Zone Tranquille : 3mm</strong><br>
    Aucun texte ni logo important ne doit se trouver à moins de 3mm du bord intérieur.
  </div>
</div>

<h2 class="text-purple-200 mb-4">🎁 Formats Échantillons (Sampling)</h2>
<p>getinside permet la distribution d'échantillons seuls ou assemblés.</p>

| Taille | Poids Max | Développé Max (H + l + L) |
| :--- | :--- | :--- |
| **Format S** | Jusqu'à **15g** | Jusqu'à **15 cm** |
| **Format M** | Jusqu'à **100g** | Jusqu'à **30 cm** |
| **Format L** | Jusqu'à **450g** | Jusqu'à **40 cm** |

<br>

<div style="margin-top: 20px; border: 1px solid #e1e4e8; border-radius: 8px; overflow: hidden;">
  <div style="background: #f6f8fa; padding: 15px; border-bottom: 1px solid #e1e4e8; font-weight: bold;">
    ✨ Service d'Assemblage (Flyer + Échantillon)
  </div>
  <div style="padding: 24px; background: #fff;">
    <h3 class="mt-0 fs-4">Option "Duo" (Format S uniquement)</h3>
    <p>Nous pouvons coller votre échantillon (taille S) sur un flyer A5 ou A6 pour maximiser l'impact visuel.</p>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
      <div>
        <strong>Technique :</strong><br>
        Utilisation d'un point de <strong>colle fugitive</strong> (repositionnable) qui permet de détacher l'échantillon sans abîmer le flyer.
      </div>
      <div>
        <strong>Engagement RSE :</strong><br>
        Cette prestation est réalisée par des <strong>Entreprises Adaptées (EA)</strong>.
      </div>
    </div>
  </div>
</div>

<h2 class="text-blue-200 mt-6 mb-4">🌐 Fichiers & Couleurs</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; width: 100%;">
  <div style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 20px; background: #fff;">
    <h3 class="mt-0 fs-4">📁 Type de fichier</h3>
    <ul class="mb-0 pl-4">
      <li class="mb-2"><strong>PDF/X (Vectoriel) :</strong> À privilégier.</li>
      <li><strong>JPG / PNG :</strong> 300 DPI minimum.</li>
    </ul>
  </div>
  <div style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 20px; background: #fff;">
    <h3 class="mt-0 fs-4">🎨 Colorimétrie</h3>
    <ul class="mb-0 pl-4">
      <li class="mb-2"><strong>Mode :</strong> CMJN obligatoire.</li>
      <li class="mb-2"><strong>Profil :</strong> Coated FOGRA39.</li>
      <li><strong>Taux d'encrage :</strong> Max 300%.</li>
    </ul>
  </div>
</div>