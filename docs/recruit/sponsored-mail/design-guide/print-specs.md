---
title: Spécifications Techniques
description: "Spécifications techniques d'impression des supports d'Insertion colis : formats A5 et A6, fond perdu, colorimétrie CMJN, QR code getinside dynamique, formats d'échantillons et check-list BAT."
keywords:
  - spécifications techniques
  - insertion colis
  - fond perdu
  - CMJN
  - QR code dynamique
  - échantillons
---

# Spécifications Techniques

Les contraintes à respecter pour une impression de qualité et un tracking performant.

::: tip En bref
- Fichier CMJN (FOGRA39), 300 DPI, **2 mm de fond perdu**, **3 mm de zone tranquille**.
- QR code getinside `.svg` obligatoire, **14 × 14 mm minimum**, un par marque qui diffuse.
- Papier 250 à 300 g/m² couché mat ou demi-mat, sans pelliculage.
:::

## Formats Papier

| Format | Fini (découpé) | Fichier (avec fond perdu) | Zone tranquille |
| :--- | :--- | :--- | :--- |
| **A5** | 148 × 210 mm | **152 × 214 mm** | 3 mm internes |
| **A6** | 105 × 148 mm | **109 × 152 mm** | 3 mm internes |
| **Carte** | 105 × 148 mm | **109 × 152 mm** | Voir gabarit |

- **Fond perdu : 2 mm obligatoire.** Image ou fond coloré débordent de 2 mm à l'extérieur du format fini, sur les quatre côtés. Sans cela, un liseré blanc apparaît après découpe.
- **Zone tranquille : 3 mm.** Aucun texte, logo ou élément important à moins de 3 mm du bord intérieur, sous peine de rognage.

## Fichiers & Colorimétrie

| Critère | Spécification |
| :--- | :--- |
| **Format de fichier** | PDF/X vectoriel (PDF/X-4 recommandé). JPG ou PNG acceptés. |
| **Polices** | Incorporées ou vectorisées (sinon la police manquante est remplacée). |
| **Résolution** | **300 DPI minimum** |
| **Dimensions matricielles** | A6 : 1 287 × 1 795 px min · A5 : 1 795 × 2 528 px min |
| **Mode colorimétrique** | **CMJN obligatoire** (pas de RVB) |
| **Profil ICC** | Coated FOGRA39 |
| **Taux d'encrage** | **Maximum 300%** |

:::tip Astuce : noir profond
Aplats (fonds noirs larges) : **C30% M30% J30% N100%**. Textes fins et petits caractères : **N100% seul**, pour éviter le décalage à l'impression.
:::

## Papier

- **Grammage :** 250 à 300 g/m²
- **Type :** couché mat ou couché demi-mat
- **Certification :** FSC ou PEFC
- **Pelliculage :** non, il rend les QR codes moins lisibles

:::info Certification environnementale
- **getinside réalise l'impression :** la mention de certification et les logos FSC et Imprim'vert figurent sur le flyer (texte exact et logos : [mentions légales](./legal#mentions-universelles)).
- **Vous gérez votre impression :** seul le **logo getinside** est requis.
:::

## QR Code getinside

:::danger QR code propriétaire obligatoire
Vous **ne pouvez pas** utiliser un QR code généré par vos soins : intégrez le fichier **`.svg`** fourni par la plateforme getinside. Il certifie la distribution, permet le suivi en temps réel et active votre tableau de bord.
:::

- **Taille minimum : 14 × 14 mm** pour un A6 (en dessous, il n'est pas lisible par tous les smartphones), à augmenter avec le format. Fond blanc, modules noirs. Répété sur chaque face (recommandé pour un insert, non obligatoire), chaque QR code respecte cette taille.
- **Un QR code par marque qui diffuse :** ne les mélangez pas. Le `.svg` est dans votre espace dès que la marque a validé votre proposition.
- **Dynamique :** l'URL n'est pas gravée dans le motif. Modifiez la landing page depuis la plateforme, même après impression, pour corriger une erreur ou prolonger une offre.
- **Tracking :** getinside mesure les scans. Pour suivre les **ventes** dans Google Analytics, ajoutez des UTM, par exemple `monsite.com?utm_source=getinside&utm_medium=sponsored-mail&utm_campaign=printemps`, et un **code promo unique** par marque qui diffuse.

## Formats Échantillons (Sampling)

| Format | Poids max | Développé max (H + l + L) |
| :--- | :--- | :--- |
| **Format S** | 15 g | 15 cm |
| **Format M** | 100 g | 30 cm |
| **Format L** | 450 g | 40 cm |

:::info Option "Duo" (Format S)
L'échantillon est collé sur un flyer A5 ou A6 par un point de **colle fugitive** (repositionnable), détachable sans abîmer le flyer. Prestation réalisée par des **Entreprises Adaptées (EA)**.
:::

## Checklist BAT

À vérifier avant chaque soumission :

1. Fond perdu **+2 mm**, zone tranquille **-3 mm**.
2. **CMJN (FOGRA39)**, ≥ **300 DPI**, encrage ≤ **300%**.
3. QR code `.svg` getinside, **14 × 14 mm** minimum, un par marque qui diffuse.
4. [Mentions légales](./legal) universelles (marque, Triman, logo getinside, CGV, certification FSC/Imprim'vert si getinside imprime) et sectorielles si applicable.
5. **Landing page** testée sur mobile : chargement < 3 s, un seul appel à l'action ([voir](./best-practices#la-landing-page-post-scan)).
6. **Code promo unique** par marque qui diffuse, actif dès le début de la diffusion.
7. **URLs de redirection** configurées sur la plateforme.
