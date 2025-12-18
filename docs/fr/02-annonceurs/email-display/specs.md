---
layout: default
title: Spécifications Bannières
parent: Display Email
grand_parent: Espace Annonceurs
nav_order: 2
---

# Spécifications Bannières
{: .fs-9 }

Pour garantir un affichage optimal sur tous les clients mails (Outlook, Gmail, Apple Mail...), merci de respecter ces standards IAB.
{: .fs-6 .fw-300 }

<hr class="my-6">

<h2 class="text-blue-200 mb-4">Formats Standards</h2>
<p>Les formats dépendent de l'emplacement négocié dans la newsletter du partenaire.</p>

<!-- Tableau en Markdown natif (Corrige le bug d'affichage) -->

| Format | Dimensions (L x H) | Usage fréquent |
| :--- | :--- | :--- |
| **Bannière Large**<br><span class="text-grey-dk-000 fs-2">(Leaderboard)</span> | **600 x 150 px**<br>(parfois 640px de large) | Header ou Cœur de mail.<br><em>Format le plus impactant.</em> |
| **Pavé**<br><span class="text-grey-dk-000 fs-2">(Rectangle)</span> | **300 x 250 px** | Colonne latérale ou fin de mail.<br><em>Format compact.</em> |

<br>

<h2 class="text-blue-200 mb-4">Contraintes Techniques</h2>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 40px;">

  <div style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 20px; background-color: #fff;">
    <h3 class="mt-0 fs-4">📁 Fichiers</h3>
    <ul class="mb-0">
      <li class="mb-2"><strong>Type :</strong> JPG, PNG ou GIF.</li>
      <li class="mb-2"><strong>Couleurs :</strong> RVB.</li>
      <li><strong>Poids :</strong> Max <strong>150 Ko</strong>.<br><em class="text-grey-dk-000">Recommandé < 80 Ko pour un chargement rapide sur mobile.</em></li>
    </ul>
  </div>

  <div style="border: 1px solid #e1e4e8; border-radius: 8px; padding: 20px; background-color: #fff;">
    <h3 class="mt-0 fs-4">🎬 GIF Animés</h3>
    <p class="mb-2">Acceptés, mais attention à <strong>Outlook</strong> (versions bureau) qui n'affiche que la première image.</p>
    <div style="background: #fff9e6; border: 1px solid #ffeeba; padding: 10px; border-radius: 4px; color: #856404; font-size: 0.9em;">
      <strong>Règle d'or :</strong> L'information principale et le Call-to-Action doivent figurer sur la <strong>première frame</strong>.
    </div>
  </div>

</div>

<h2 class="text-grey-dk-000 mb-4">💡 Bonnes Pratiques Design</h2>

<div style="border-left: 4px solid #7253ed; background-color: #fcfbff; padding: 20px; border-radius: 0 8px 8px 0; margin-bottom: 20px;">
  <h3 class="mt-0 text-purple-200">La Bordure (Border)</h3>
  <p>Si votre bannière a un fond blanc, elle risque de se fondre dans le fond de l'email et de devenir invisible.</p>
  <p class="mb-0">👉 <strong>Ajoutez une fine bordure grise de 1px</strong> (<code>#cccccc</code>) tout autour de votre créa pour bien la délimiter.</p>
</div>

<div style="border-left: 4px solid #28a745; background-color: #f0fcf4; padding: 20px; border-radius: 0 8px 8px 0;">
  <h3 class="mt-0 text-green-200">Lisibilité Mobile</h3>
  <p class="mb-0">Sur mobile, votre bannière de 600px sera réduite à ~350px de large. Évitez les polices trop fines ou trop petites (minimum 16px recommandé).</p>
</div>