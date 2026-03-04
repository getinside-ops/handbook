---
title: 2. Tracking & Envoi
---

# Étape 2 : Tracking, Validation et Envoi

Votre maquette est prête ? Intégrez le tracking, soumettez un BAT conforme et gérez la diffusion (et le renvoi éventuel).

<hr />
<!-- ETAPE 1 -->
<div style="display: flex; gap: 20px; margin-bottom: 40px;">
  <div style="flex-shrink: 0; width: 40px; height: 40px; background: var(--gi-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">1</div>
  <div>
    <h3>Intégration du Tracking</h3>
    <p>Rendez-vous dans l'onglet <strong>"Configuration"</strong> de la campagne pour récupérer les tags.</p>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 15px;">
      <div style="background: var(--gi-tint-blue-bg); border: 1px solid var(--gi-accent); padding: 15px; border-radius: 6px;">
        <strong>👁️ Pixel d'Ouverture</strong><br />
        Tag image <code>&lt;img...&gt;</code> à coller dans le HTML (avant <code>&lt;/body&gt;</code>).<br />
        <em>Indispensable pour compter les vues.</em>
      </div>
      <div style="background: var(--gi-tint-blue-bg); border: 1px solid var(--gi-accent); padding: 15px; border-radius: 6px;">
        <strong>🔗 Liens Trackés</strong><br />
        Remplacez <strong>TOUS</strong> les liens vers l'Annonceur par les liens <code>gtinsi.de</code> fournis.<br />
        <em>Indispensable pour compter les clics.</em>
      </div>
    </div>
  </div>
</div>
<!-- ETAPE 2 -->
<div style="display: flex; gap: 20px; margin-bottom: 40px;">
  <div style="flex-shrink: 0; width: 40px; height: 40px; background: var(--gi-accent); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">2</div>
  <div>
    <h3>Validation (BAT)</h3>
    <p>Pour valider la qualité technique, nous utilisons un viewer interne. Le BAT doit respecter un protocole strict.</p>
    <div style="background-color: var(--vp-c-bg-elv); border: 2px solid var(--gi-accent); padding: 20px; border-radius: 8px;">
      <strong>📧 Procédure d'envoi du BAT</strong>
      <ol>
        <li>Envoyez un <strong>email de test réel</strong> (depuis votre routeur).</li>
        <li>Destinataire unique : <code>benoit+news@getinside.fr</code></li>
      </ol>
      <hr style="margin: 15px 0; border-color: var(--vp-c-divider);" />
      <p>
        <strong>⚠️ Attention :</strong> Nous ne validons <strong>jamais</strong> de BAT sous forme de capture d'écran, de PDF ou de fichier HTML brut. Nous devons recevoir l'email pour tester le responsive, le pixel et les redirections en conditions réelles.
      </p>
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
  <div style="flex-shrink: 0; width: 40px; height: 40px; background: var(--gi-tint-green-text); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px;">🚀</div>
  <div>
    <h3>Diffusion & Renvoi</h3>
    <div style="margin-bottom: 20px;">
      <strong>1. Vérification du Ciblage</strong><br />
      Avant de router, assurez-vous d'avoir appliqué les critères de segmentation demandés dans le brief (ex: Actifs 12 mois, Femmes, etc.).
    </div>
    <div style="background: var(--gi-tint-blue-bg); border: 1px solid var(--vp-c-divider); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h4>🔄 Gestion du Renvoi (Non-Ouvreurs)</h4>
      <p>Si un renvoi aux non-ouvreurs (RGNO) est commandé :</p>
      <ul>
        <li>Utilisez <strong>exactement le même email</strong> (Même HTML, mêmes liens, même pixel).</li>
        <li>Ne changez pas les trackers.</li>
        <li>Une fois le renvoi effectué, n'oubliez pas de revenir confirmer cette deuxième diffusion.</li>
      </ul>
    </div>
    <div>
      <strong>2. Confirmation Finale</strong><br />
      Une fois l'envoi (et le renvoi éventuel) terminé, retournez sur <a href="https://app.getinside.media/">app.getinside.media</a> et cliquez sur le bouton <strong>"Valider la diffusion"</strong> dans l'espace "Configuration et Suivi".
    </div>
  </div>
</div>