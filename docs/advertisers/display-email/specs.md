---
title: Spécifications Bannières
description: Formats, contraintes techniques et bonnes pratiques de design pour les bannières Display Email getinside.
keywords:
  - spécifications bannière email
  - display email format
  - leaderboard 600x150
  - GIF animé email
---

# Spécifications Bannières

Standards à respecter pour garantir un affichage optimal sur tous les clients mail (Outlook, Gmail, Apple Mail…).

---

## Formats Standards

| Format | Dimensions (L × H) | Emplacement typique |
| :--- | :--- | :--- |
| **Bannière Large** (Leaderboard) | **600 × 150 px** *(parfois 640 px)* | Header ou cœur de mail — format le plus impactant |
| **Pavé** (Rectangle) | **300 × 250 px** | Colonne latérale ou pied de mail — format compact |

---

## Contraintes Techniques

| Critère | Spécification |
| :--- | :--- |
| **Type de fichier** | JPG, PNG ou GIF |
| **Mode colorimétrique** | RVB |
| **Poids maximum** | 150 Ko — recommandé < **80 Ko** pour un chargement rapide sur mobile |

:::warning GIF animés — règle de la première frame
Les GIFs animés sont acceptés, mais **Outlook (versions bureau) n'affiche que la première image**.

L'information principale et le Call-to-Action doivent impérativement figurer sur la **première frame**.
:::

---

## Animation GIF : bonnes pratiques

Si vous optez pour un GIF animé, gardez l'animation courte et lisible :

- **3 à 5 frames maximum** — une boucle simple attire l'œil sans alourdir le fichier.
- **Durée totale de 2 à 4 secondes**, puis arrêt sur la frame qui porte l'offre et le CTA.
- **Évitez le clignotement rapide** : il dégrade la lisibilité et gêne certains lecteurs.
- **Première frame autoportante** : elle doit fonctionner seule, puisque Outlook ne lit que celle-ci.

### Compatibilité clients mail

| Client | Affichage GIF animé |
| :--- | :--- |
| Gmail, Apple Mail, Yahoo, mobiles iOS/Android | Animation complète |
| Outlook (bureau, Windows) | Première frame uniquement |

---

## Bonnes Pratiques Design

:::tip Fond blanc : ajoutez une bordure
Si votre bannière a un fond blanc, ajoutez une **bordure grise de 1 px** (`#cccccc`) tout autour pour bien la délimiter sur fond d'email.
:::

Sur mobile, une bannière 600 px est réduite à ~350 px de large. Évitez les polices trop fines ou trop petites — **taille minimum recommandée : 16 px**.
