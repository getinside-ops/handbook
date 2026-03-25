---
title: Spécifications Techniques
description: Formats papier, colorimétrie, QR code et contraintes d'impression pour vos flyers Sponsored Mail getinside.
keywords:
  - spécifications impression flyer
  - format A5 A6 fond perdu
  - CMJN FOGRA39 impression
  - QR code dynamique flyer
---

# Spécifications Techniques

Tout ce qu'il faut vérifier pour valider qu'une création est conforme à l'impression et la diffusion.

---

## Formats papier

| Format | Fini (découpé) | Fichier (avec fond perdu) | Zone tranquille |
| :--- | :--- | :--- | :--- |
| **A5** | 148 × 210 mm | **152 × 214 mm** | 3 mm internes |
| **A6** | 105 × 148 mm | **109 × 152 mm** | 3 mm internes |
| **Carte** | 105 × 148 mm | **109 × 152 mm** | Voir gabarit |

:::warning Fond perdu : 2 mm obligatoire
La matière (image ou fond coloré) doit déborder de **2 mm à l'extérieur** du format fini. Sans fond perdu, un liseré blanc apparaît après découpe.
:::

:::tip Zone tranquille : 3 mm
Aucun texte, logo ou élément important ne doit se trouver à moins de **3 mm du bord intérieur**. Ce qui est trop proche du bord risque d'être rogné.
:::

---

## Fichiers & Colorimétrie

| Critère | Spécification |
| :--- | :--- |
| **Format de fichier** | PDF/X vectoriel (norme ISO prépresse) — à privilégier. JPG ou PNG acceptés. |
| **Résolution** | **300 DPI minimum** |
| **Dimensions matricielles** | A6 : 1 287 × 1 795 px min · A5 : 1 795 × 2 528 px min |
| **Mode colorimétrique** | **CMJN obligatoire** (pas de RVB) |
| **Profil ICC** | Coated FOGRA39 |
| **Taux d'encrage** | **Maximum 300%** |

:::tip Noir profond
Pour un noir riche sur les aplats (fonds noirs larges) : utilisez **C30% M30% J30% N100%**.
Pour les textes fins et petits caractères : utilisez **N100% seul** pour éviter le décalage à l'impression.
:::

---

## Papier & Impression

| Critère | Valeur |
| :--- | :--- |
| **Grammage** | 250 à 300 g/m² |
| **Type** | Couché mat ou couté demi-mat |
| **Certification** | FSC ou PEFC |

:::info Certification environnementale obligatoire
**Si getinside réalise l'impression :** la mention suivante doit être imprimée sur le flyer :
*"Imprimé sur papier FSC par un imprimeur certifié Imprim'vert avec getinside"*
→ Intégrez les logos FSC et Imprim'vert (disponibles dans le dossier [Logos obligatoires](https://drive.google.com/drive/folders/1ORm6uAhsIWCCFWhOl-NjO4tKfiGQdLNy){target="_blank"}).

**Si vous gérez votre propre impression :** seule l'intégration du **logo getinside** est requise.
:::

---

## QR Code getinside

:::danger QR code propriétaire obligatoire
Vous **ne pouvez pas** utiliser un QR code généré par vos soins. Vous devez intégrer le fichier **`.svg`** fourni par la plateforme getinside.

Ce QR code certifie la distribution et permet le monitoring en temps réel.
:::

**Taille minimum : 25 × 25 mm** — en dessous, le QR code n'est pas lisible par tous les smartphones.

**Ne mélangez pas les QR codes :** chaque distributeur dispose de son propre QR code distinct. Le fichier `.svg` est disponible dans votre espace annonceur dès validation de votre proposition par le distributeur.

:::info QR Code dynamique
L'URL de destination n'est pas gravée dans le motif du code. Vous pouvez modifier la landing page à tout moment depuis la plateforme, **même après l'impression des flyers**.
:::

---

## Checklist de conformité BAT

À vérifier avant chaque soumission :

1. Les dimensions incluent **+2 mm de fond perdu** et respectent **-3 mm de zone tranquille**.
2. Le fichier est en **CMJN (FOGRA39)**, résolution ≥ **300 DPI**, taux d'encrage ≤ **300%**.
3. Le QR code getinside (`.svg`) est présent et mesure au minimum **25 × 25 mm** — chaque distributeur a le sien.
4. Les mentions légales universelles sont incluses : identification annonceur, Triman, logo getinside, CGV. Si getinside réalise l'impression, la mention de certification FSC/Imprim'vert est présente.
5. Les [mentions légales sectorielles](./legal) (si applicable) sont présentes et lisibles.

→ [Télécharger la checklist complète](https://docs.google.com/document/d/17oybJkf4iOX0XrC4LOJSI0zp2y0w_Wn7F4GW_oBAZcM/edit){target="_blank"}
