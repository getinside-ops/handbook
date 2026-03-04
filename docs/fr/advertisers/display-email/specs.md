---
title: Spécifications Bannières
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

→ L'information principale et le Call-to-Action doivent impérativement figurer sur la **première frame**.
:::

---

## Bonnes Pratiques Design

:::tip Fond blanc : ajoutez une bordure
Si votre bannière a un fond blanc, elle risque de se fondre dans l'arrière-plan de l'email et de devenir invisible.

Ajoutez une **bordure grise de 1 px** (`#cccccc`) tout autour de votre visuel pour bien la délimiter.
:::

:::tip Lisibilité mobile
Sur mobile, une bannière 600 px est réduite à ~350 px de large. Évitez les polices trop fines ou trop petites — **taille minimum recommandée : 16 px**.
:::
