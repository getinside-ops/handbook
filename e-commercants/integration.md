# Guide E-commerçant : Intégration & Tracking 🛠️

> **Votre rôle :** L'Architecte et l'Hôte. Vous accueillez une marque chez vous.

## 1. Structure & Co-branding
L'email est envoyé par **VOUS**, à **VOTRE** base. Il doit respecter votre charte graphique tout en mettant l'annonceur en valeur.

* **Header (En-tête) :** Gardez votre logo en haut. C'est votre caution de confiance.
* **Introduction :** Contextualisez. *Exemple : "Aujourd'hui, je suis ravi de vous présenter [Partenaire], une marque que nous adorons pour..."*
* **Footer (Pied de page) :** Gardez votre footer habituel avec le lien de désabonnement obligatoire.

## 2. Specs Techniques (HTML)
* **Largeur :** 600px de large maximum pour le conteneur principal.
* **Mobile First :** Assurez-vous que les polices sont lisibles sur mobile (14px minimum) et que les boutons sont assez gros pour être cliqués avec le pouce.
* **Ratio Texte/Image :** Visez 60% d'images et 40% de texte réel (HTML). Un email 100% image a une mauvaise délivrabilité.

## 3. Le Tracking (CRITIQUE 🚨)
Pour que la campagne soit validée, la remontée de données doit être parfaite.

### Le Pixel d'ouverture
Vous devez intégrer le code HTML (pixel) fourni par GetInside tout en bas de votre email, juste avant la fermeture du `</body>`. C'est lui qui compte les vues.

### Les Liens Trackés
N'utilisez **JAMAIS** le lien brut du site de l'annonceur.
* Utilisez uniquement les liens de redirection (`http://gtinsi.de/...`) fournis dans le brief.
* **Vérification :** Chaque bouton et chaque image cliquable doit pointer vers ce lien tracké.

---

## ✅ CHECKLIST AVANT UPLOAD (La "Kill List")

Avant de déposer votre HTML sur la plateforme, vérifiez ces 5 points. Si un seul point est rouge, ne lancez pas.

- [ ] **L'Objet et le Pre-header** sont renseignés et sans fautes.
- [ ] **Les liens fonctionnent :** J'ai cliqué sur tous les boutons dans l'email de test, et j'arrive bien sur la page de l'annonceur.
- [ ] **Mobile OK :** J'ai ouvert le mail de test sur mon téléphone, rien n'est cassé.
- [ ] **Pixel présent :** Le code de tracking GetInside est bien inséré dans le HTML.
- [ ] **Poids léger :** Le fichier HTML pèse moins de 100ko (hors images).

---
[⬅️ Retour à l'accueil](../)
