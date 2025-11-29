---
layout: default
title: Spécifications Print
parent: Asile Colis
grand_parent: Espace Annonceurs
nav_order: 3
---

# Spécifications Techniques

Cette page détaille les contraintes techniques pour garantir une qualité d'impression optimale et une découpe précise.

## 📐 Formats et Dimensions

{: .warning }
Étendez le fond de votre visuel sur la zone de fond perdu pour éviter tout liseré blanc disgracieux à la découpe. Ne placez aucun texte ou logo important dans la zone tranquille.

| Format | Format fini (après découpe) | Format fichier (avec fond perdu) | Zone tranquille (marge interne) | Fond perdu (marge externe) |
| :--- | :--- | :--- | :--- | :--- |
| **A5** | 148 x 210 mm | 152 x 214 mm | 3 mm | 2 mm |
| **A6** | 105 x 148 mm | 109 x 152 mm | 3 mm | 2 mm |
| **Carte cadeau** | 105 x 148 mm | 109 x 152 mm | 3 mm | 2 mm |

> **Note Carte Cadeau :** L’emplacement et la forme de la prédécoupe sont fixes. Merci de vous reporter impérativement à notre gabarit.

## 🌐 Préparation des fichiers

### Types de fichiers acceptés
*   **Fichiers vectoriels (.pdf) - À PRIVILÉGIER**
    *   Norme : **PDF/X** (assure la compatibilité pré-impression).
    *   Incorporez bien les polices et les images.
    *   Incluez les traits de coupe à l'export.
*   **Fichiers matriciels (.png, .jpeg)**
    *   Résolution impérative : **300 DPI minimum**.
    *   *Exemple A6 :* 1287 x 1795 pixels minimum.
    *   *Exemple A5 :* 1795 x 2528 pixels minimum.

### Colorimétrie & Encrage
*   **Mode colorimétrique :** CMJN (Cyan, Magenta, Jaune, Noir). Ne pas utiliser de RVB.
*   **Profil :** `Coated FOGRA39`.
*   **Taux d'encrage max :** 300% (La somme C+M+J+N ne doit pas dépasser ce total pour éviter le maculage).

{: .tip }
> **Gestion du Noir :**
> *   **Textes fins :** Utilisez du Noir pur (`N100%`) uniquement, pour éviter les défauts de repérage.
> *   **Aplats / Fonds :** Pour un noir profond, utilisez la recette : `C30% M30% J30% N100%`.

## 💻 Logiciels recommandés
Nous recommandons la suite Adobe pour garantir le respect des normes d'impression.
*   **Adobe Illustrator / InDesign :** Idéal pour la mise en page et l'export vectoriel.
*   **Adobe Photoshop :** Pour la retouche photo (attention à bien travailler en 300 DPI CMJN).

## 📄 Impression par vos soins
Si vous ne passez pas par nos services d'impression, vous devez respecter ces critères pour l'homogénéité des colis :
*   **Papier :** Certifié **FSC** ou **PEFC**.
*   **Finition :** Couché demi-mat ou mat (pas de pelliculage brillant).
*   **Grammage :** 250g/m² ou 300g/m².