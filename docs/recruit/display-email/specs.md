---
title: Spécifications Bannières
description: "Formats, dimensions, poids et contraintes techniques des bannières Display Email pour un affichage optimal sur Outlook, Gmail et Apple Mail. Inclut les règles sur les GIF animés et les bonnes pratiques de design et de lisibilité mobile."
keywords:
  - spécifications bannières
  - display email
  - formats 600x150
  - GIF animé
  - poids d'image
  - lisibilité mobile
---

# Spécifications Bannières

## Formats et contraintes

| Format | Dimensions (L × H) | Emplacement typique |
| :--- | :--- | :--- |
| **Bannière Large** (Leaderboard) | **600 × 150 px** *(parfois 640 px)* | Header ou cœur de mail, le plus impactant |
| **Pavé** (Rectangle) | **300 × 250 px** | Colonne latérale ou pied de mail |

| Critère | Spécification |
| :--- | :--- |
| **Type de fichier** | JPG, PNG ou GIF |
| **Mode colorimétrique** | RVB |
| **Poids maximum** | 150 Ko, recommandé < **80 Ko** pour un chargement rapide sur mobile |

## GIF animés

:::warning Règle de la première frame
Outlook 2007 à 2019 (Windows) n'affiche que la première image. Placez l'information principale et le Call-to-Action sur la **première frame**.
:::

- **3 à 5 frames maximum**, pour une boucle simple et un fichier léger.
- **Durée totale de 2 à 4 secondes**, puis arrêt sur la frame qui porte l'offre et le CTA.
- **Pas de clignotement rapide** : il dégrade la lisibilité.

| Client | Affichage |
| :--- | :--- |
| Gmail, Apple Mail, Yahoo, mobiles iOS/Android, Outlook (web, Mac, mobile, nouvel Outlook) | Animation complète |
| Outlook 2021, 2024 et Microsoft 365 (Windows) | Animation complète, sauf animations Windows désactivées (première frame) |
| Outlook 2007 à 2019 (Windows) | Première frame uniquement |

## Design

:::tip Fond blanc : ajoutez une bordure
Une bannière à fond blanc se fond dans l'email. Ajoutez une **bordure grise de 1 px** (`#cccccc`) autour du visuel.
:::

:::tip Lisibilité mobile
Sur mobile, une bannière 600 px est réduite à ~350 px de large. Évitez les polices fines ou petites : **minimum recommandé 16 px**.
:::
