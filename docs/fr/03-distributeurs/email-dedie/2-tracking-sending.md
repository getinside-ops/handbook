---
layout: default
title: 2. Tracking & Envoi
parent: Dedicated Email
grand_parent: Espace Distributeurs
nav_order: 2
toc: false
---

# Étape 2 : Tracking, Validation et Envoi
{: .fs-9 }

Votre maquette est prête ? Intégrez le tracking, soumettez un BAT conforme et gérez la diffusion (et le renvoi éventuel).
{: .fs-6 .fw-300 }

<hr class="my-6">

<!-- ETAPE 1 -->
<div style="display: flex; gap: 20px; margin-bottom: 40px;">
 <div style="flex-shrink: 0; width: 40px; height: 40px; background: #7253ed; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">1</div>
 <div>
 <h3 class="mt-0 text-purple-200">Intégration du Tracking</h3>
 <p>Rendez-vous dans l'onglet <strong>"Configuration"</strong> de la campagne pour récupérer les tags.</p>
 
 <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 15px;">
 <div style="background: #fcfbff; border: 1px solid #7253ed; padding: 15px; border-radius: 6px;">
 <strong style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg> Voir Pixel d'Ouverture</strong><br>
 Tag image <code>&lt;img...&gt;</code> à coller dans le HTML (avant <code>&lt;/body&gt;</code>).<br>
 <em>Indispensable pour compter les vues.</em>
 </div>
 <div style="background: #fcfbff; border: 1px solid #7253ed; padding: 15px; border-radius: 6px;">
 <strong style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Liens Trackés</strong><br>
 Remplacez <strong>TOUS</strong> les liens vers l'Annonceur par les liens <code>gtinsi.de</code> fournis.<br>
 <em>Indispensable pour compter les clics.</em>
 </div>
 </div>
 </div>
</div>

<!-- ETAPE 2 -->
<div style="display: flex; gap: 20px; margin-bottom: 40px;">
 <div style="flex-shrink: 0; width: 40px; height: 40px; background: #7253ed; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">2</div>
 <div>
 <h3 class="mt-0 text-purple-200">Validation (BAT)</h3>
 <p>Pour valider la qualité technique, nous utilisons un viewer interne. Le BAT doit respecter un protocole strict.</p>
 
 <div style="background-color: #fff; border: 2px solid #7253ed; padding: 20px; border-radius: 8px;">
 <strong class="text-purple-200 fs-4" style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg> Procédure d'envoi du BAT</strong>
 <ol class="mb-0 mt-2">
 <li>Envoyez un <strong>email de test réel</strong> (depuis votre routeur).</li>
 <li>Destinataire unique : <code>benoit+news@getinside.fr</code></li>
 </ol>
 <hr style="margin: 15px 0; border-color: #eee;">
 <p class="mb-0 fs-2 text-grey-dk-000" style="display: flex; align-items: flex-start; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px; color: #cf222e;"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg><span><strong>Attention :</strong> Nous ne validons <strong>jamais</strong> de BAT sous forme de capture d'écran, de PDF ou de fichier HTML brut. Nous devons recevoir l'email pour tester le responsive, le pixel et les redirections en conditions réelles.</span></p>
 </div>

 <div style="margin-top: 20px;">
 <p>Une fois le BAT reçu et vérifié par getinside :</p>
 <ul>
 <li>Nous générons un lien de prévisualisation (BAT Statique).</li>
 <li><strong>Action Bloquante :</strong> Connectez-vous à la plateforme et cliquez sur <strong>"Valider la campagne"</strong>.</li>
 <li>Attendez que l'Annonceur valide également de son côté.</li>
 </ul>
 </div>
 </div>
</div>

<!-- ETAPE 3 -->
<div style="display: flex; gap: 20px; margin-bottom: 40px;">
 <div style="flex-shrink: 0; width: 40px; height: 40px; background: #28a745; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg></div>
 <div>
 <h3 class="mt-0 text-green-200">Diffusion & Renvoi</h3>
 
 <div style="margin-bottom: 20px;">
 <strong>1. Vérification du Ciblage</strong><br>
 Avant de router, assurez-vous d'avoir appliqué les critères de segmentation demandés dans le brief (ex: Actifs 12 mois, Femmes, etc.).
 </div>

 <div style="background-color: #fcfbff; border: 1px solid #e1e4e8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
 <h4 class="mt-0 text-blue-200" style="display: flex; align-items: center; gap: 8px;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg> Gestion du Renvoi (Non-Ouvreurs)</h4>
 <p class="fs-2 text-grey-dk-000">Si un renvoi aux non-ouvreurs (RGNO) est commandé :</p>
 <ul>
 <li>Utilisez <strong>exactement le même email</strong> (Même HTML, mêmes liens, même pixel).</li>
 <li>Ne changez pas les trackers.</li>
 <li>Une fois le renvoi effectué, n'oubliez pas de revenir confirmer cette deuxième diffusion.</li>
 </ul>
 </div>

 <div>
 <strong>2. Confirmation Finale</strong><br>
 Une fois l'envoi (et le renvoi éventuel) terminé, retournez sur <a href="https://app.getinside.media/">app.getinside.media</a> et cliquez sur le bouton <strong>"Valider la diffusion"</strong> dans l'espace "Configuration et Suivi".
 </div>
 </div>
</div>