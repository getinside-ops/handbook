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

Les contraintes à respecter pour garantir une qualité d'impression optimale et un tracking performant.

---

## Formats Papier

| Format | Fini (découpé) | Fichier (avec fond perdu) | Zone tranquille |
| :--- | :--- | :--- | :--- |
| **A5** | 148 × 210 mm | **152 × 214 mm** | 3 mm internes |
| **A6** | 105 × 148 mm | **109 × 152 mm** | 3 mm internes |
| **Carte** | 105 × 148 mm | **109 × 152 mm** | Voir gabarit |

:::warning Fond perdu (Bleed) : 2 mm obligatoire
La matière (image ou fond coloré) doit déborder de **2 mm à l'extérieur** du format fini. Sans fond perdu, un liseré blanc apparaît après découpe. Une photo ou un motif pleine page doit atteindre ce bord sur les quatre côtés : s'il s'arrête au trait de coupe, un décalage de coupe laisse une bande blanche.
:::

:::tip Zone tranquille : 3 mm
Aucun texte, logo ou élément important ne doit se trouver à moins de **3 mm du bord intérieur**. Ce qui est trop proche du bord risque d'être rogné.
:::

---

## Fichiers & Colorimétrie

| Critère | Spécification |
| :--- | :--- |
| **Format de fichier** | PDF/X vectoriel (norme ISO prépresse, PDF/X-4 recommandé), à privilégier. JPG ou PNG acceptés. |
| **Polices** | Incorporées ou vectorisées dans le PDF. Un texte avec une police manquante sera remplacé à l'ouverture. |
| **Résolution** | **300 DPI minimum** |
| **Dimensions matricielles** | A6 : 1 287 × 1 795 px min · A5 : 1 795 × 2 528 px min |
| **Mode colorimétrique** | **CMJN obligatoire** (pas de RVB) |
| **Profil ICC** | Coated FOGRA39 |
| **Taux d'encrage** | **Maximum 300%** |

:::tip Astuce : noir profond
Pour un noir riche sur les aplats (fonds noirs larges) : utilisez **C30% M30% J30% N100%**.
Pour les textes fins et petits caractères : utilisez **N100% seul** pour éviter le décalage à l'impression.
:::

---

## Papier

:::info Spécifications papier recommandées
- **Grammage :** 250 à 300 g/m²
- **Type :** Couché mat ou couché demi-mat
- **Certification :** FSC ou PEFC
- **Pelliculage :** non, le pelliculage rend les QR codes moins lisibles
:::

:::info Certification environnementale obligatoire
**Si getinside réalise l'impression :** la mention suivante doit figurer sur le flyer :
*"Imprimé sur papier FSC par un imprimeur certifié Imprim'vert avec getinside"*
→ Intégrez les logos FSC et Imprim'vert (dossier [Logos obligatoires](https://drive.google.com/drive/folders/1ORm6uAhsIWCCFWhOl-NjO4tKfiGQdLNy){target="_blank"}).

**Si vous gérez votre propre impression :** seul le **logo getinside** est requis.
:::

→ L'argumentaire RSE complet : [RSE & insertion colis](/recruit/sustainability).

---

## QR Code getinside

:::danger QR code propriétaire obligatoire
Vous **ne pouvez pas** utiliser un QR code généré par vos soins. Vous devez impérativement intégrer le fichier **`.svg`** fourni par la plateforme getinside.

**Pourquoi ?** Ce QR code unique certifie la distribution, permet le monitoring en temps réel et active votre tableau de bord de performance.
:::

**Taille minimum : 14 × 14 mm** pour un A6 (en dessous, le QR code n'est pas lisible par tous les smartphones), à augmenter avec le format. Fond blanc et modules noirs. Vous pouvez le répéter sur chaque face (recommandé pour un insert, non obligatoire) : chaque QR code respecte alors cette taille.

**Ne mélangez pas les QR codes :** chaque marque qui diffuse votre campagne dispose de son propre QR code. Le fichier `.svg` est disponible dans votre espace dès que la marque a validé votre proposition.

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>✨ QR Code Dynamique</strong>
    <p>L'URL de destination n'est pas gravée dans le motif du code.</p>
    <p>Vous pouvez modifier la landing page à tout moment depuis la plateforme, <strong>même après l'impression des flyers</strong>. Idéal pour corriger une erreur d'URL ou prolonger une offre.</p>
  </div>
  <div class="gi-value-card">
    <strong>🎯 Tracking & UTM</strong>
    <p>getinside mesure les scans. Pour suivre les <strong>ventes</strong> dans Google Analytics, configurez l'URL avec des paramètres UTM :</p>
    <p><code>monsite.com?utm_source=getinside&utm_medium=sponsored-mail&utm_campaign=printemps</code></p>
    <p>Ajoutez aussi un <strong>code promo unique</strong> par marque qui diffuse votre campagne pour l'attribution offline.</p>
  </div>
</div>

---

## Formats Échantillons (Sampling)

getinside permet la distribution d'échantillons seuls ou assemblés avec un flyer.

| Format | Poids max | Développé max (H + l + L) |
| :--- | :--- | :--- |
| **Format S** | 15 g | 15 cm |
| **Format M** | 100 g | 30 cm |
| **Format L** | 450 g | 40 cm |

:::info Option "Duo" : assemblage flyer + échantillon (Format S)
L'échantillon est collé sur un flyer A5 ou A6 via un point de **colle fugitive** (repositionnable), permettant de le détacher sans abîmer le flyer.

Cette prestation est réalisée par des **Entreprises Adaptées (EA)**, favorisant l'emploi de travailleurs handicapés.
:::

---

## Checklist BAT

À vérifier avant chaque soumission :

1. Les dimensions incluent **+2 mm de fond perdu** et respectent **-3 mm de zone tranquille**.
2. Le fichier est en **CMJN (FOGRA39)**, résolution ≥ **300 DPI**, taux d'encrage ≤ **300%**.
3. Le QR code getinside (`.svg`) est présent et mesure au minimum **14 × 14 mm**. Chaque marque qui diffuse a le sien.
4. Les mentions légales universelles sont incluses : identification de votre marque, Triman, logo getinside, CGV. Si getinside réalise l'impression, la mention de certification FSC/Imprim'vert est présente.
5. Les [mentions sectorielles](./legal) obligatoires (si applicable) sont présentes et lisibles.
6. La **landing page** de destination a été testée sur mobile : responsive, chargement < 3 s, un seul appel à l'action (voir [Anatomie d'un flyer performant](./best-practices#la-landing-page-post-scan)).
7. Le **code promo est unique** pour chaque marque qui diffuse votre campagne.
8. Les **URLs de redirection** sont configurées sur la plateforme getinside.
9. Le code promo sera **activé dès le début de la diffusion**.
