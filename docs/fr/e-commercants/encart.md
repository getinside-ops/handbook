---
layout: default
title: Encart Newsletter
parent: Espace E-commerçants
nav_order: 2
---

# Guide E-commerçant : Intégration Encart 🧩

> **Votre rôle :** L'Éditeur. Vous intégrez une "pause publicitaire" pertinente dans votre contenu habituel.

## 1. Emplacement & Contextualisation
Contrairement à la newsletter dédiée, ici l'annonceur est un "invité" dans votre newsletter hebdomadaire ou transactionnelle.

* **Position :** L'encart doit être placé **au-dessus de la ligne de flottaison** (visible sans scroller) ou juste après votre premier bloc éditorial.
    * ❌ **Interdit :** Ne jamais noyer l'encart tout en bas dans le footer.
* **Séparation :** Utilisez un séparateur visuel (`<hr>` ou espace blanc) pour distinguer le contenu partenaire de votre contenu propre.
* **Mention :** Il est recommandé d'ajouter une petite mention discrète au-dessus de l'image (ex: *"Sélection Partenaire"* ou *"Offre du moment"*).

## 2. Specs Techniques (HTML)
L'annonceur fournit généralement une bannière (image seule) ou un visuel + texte.

* **Largeur :** Adaptez l'image à la largeur de votre template (généralement **600px** ou **100%** de la colonne).
* **Code Type :**
```html
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td align="center" style="padding: 20px 0;">
      <p style="font-size:10px; color:#999; text-transform:uppercase; margin-bottom:5px;">— Sélection Partenaire —</p>
      <a href="LIEN_TRACKE_GETINSIDE" target="_blank">
        <img src="URL_IMAGE_ANNONCEUR" width="600" style="display:block; max-width:100%; border:0;" alt="Voir l'offre">
      </a>
    </td>
  </tr>
</table>
```

## 3. Le Tracking (CRITIQUE 🚨)
* C'est le seul moyen pour nous de rémunérer la performance de l'encart.
* Lien Unique : L'image (et le bouton s'il y en a un) doit pointer vers le lien de redirection http://gtinsi.de/... fourni dans le brief.
* Target Blank : Le lien doit impérativement s'ouvrir dans un nouvel onglet (target="_blank") pour ne pas faire sortir le lecteur de votre newsletter.

✅ CHECKLIST AVANT ENVOI
Avant de valider votre newsletter, vérifiez ces 3 points sur l'encart :

- [ ] **Le lien fonctionne** : Le clic sur l'image redirige bien vers le site du partenaire via gtinsi.de.
- [ ] **L'image s'affiche** : Pas de lien cassé, l'image est hébergée sur un serveur public.
- [ ] **Mobile OK** : L'encart ne casse pas la largeur de la newsletter sur smartphone (l'image a bien max-width: 100%).

[⬅️ Retour au sommaire](./)