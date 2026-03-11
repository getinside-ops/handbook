---
title: Spécifications Techniques
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
La matière (image ou fond coloré) doit déborder de **2 mm à l'extérieur** du format fini. Sans fond perdu, un liseré blanc apparaît après découpe.
:::

:::tip Zone tranquille : 3 mm
Aucun texte, logo ou élément important ne doit se trouver à moins de **3 mm du bord intérieur**. Ce qui est trop proche du bord risque d'être rogné.
:::

---

## Fichiers & Colorimétrie

| Critère | Spécification |
| :--- | :--- |
| **Format de fichier** | PDF/X (vectoriel) — à privilégier. JPG ou PNG acceptés. |
| **Résolution** | **300 DPI minimum** |
| **Mode colorimétrique** | **CMJN obligatoire** (pas de RVB) |
| **Profil ICC** | Coated FOGRA39 |
| **Taux d'encrage** | **Maximum 300%** |

:::tip Astuce — Noir Profond
Pour un noir riche sur les aplats (fonds noirs larges) : utilisez **C30% M30% J30% N100%**.
Pour les textes fins et petits caractères : utilisez **N100% seul** pour éviter le décalage à l'impression.
:::

---

## Papier

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>Grammage</strong>
    <p>250 à 300 g/m² (Rigidité optimale)</p>
  </div>
  <div class="gi-value-card">
    <strong>Type</strong>
    <p>Couché mat ou couché demi-mat (FSC/PEFC)</p>
  </div>
</div>

:::warning Éco-conception : Pelliculage interdit
Dans une démarche d'éco-conception et pour garantir la **recyclabilité intégrale** de vos supports, le pelliculage (ajout d'une couche plastique mate ou brillante) est interdit. Un support pelliculé ne peut pas être recyclé dans la filière papier classique. 

Privilégiez un vernis machine si vous souhaitez protéger l'impression sans compromettre le recyclage.
:::

---

## QR Code getinside

:::danger QR code propriétaire obligatoire
Vous **ne pouvez pas** utiliser un QR code généré par vos soins. Vous devez impérativement intégrer le fichier **`.svg`** fourni par la plateforme getinside.

**Pourquoi ?** Ce QR code unique certifie la distribution, permet le monitoring en temps réel et active votre tableau de bord de performance.
:::

**Taille minimum : 25 × 25 mm** (en dessous, le QR code n'est pas lisible par tous les smartphones).

<div class="gi-value-grid">
  <div class="gi-value-card">
    <strong>✨ QR Code Dynamique</strong>
    <p>L'URL de destination n'est pas gravée dans le motif du code.</p>
    <p>Vous pouvez modifier la landing page à tout moment depuis la plateforme — <strong>même après l'impression des flyers</strong>. Idéal pour corriger une erreur d'URL ou prolonger une offre.</p>
  </div>
  <div class="gi-value-card">
    <strong>🎯 Tracking & UTM</strong>
    <p>getinside mesure les scans. Pour suivre les <strong>ventes</strong> dans Google Analytics, configurez l'URL avec des paramètres UTM :</p>
    <p><code>monsite.com?utm_source=getinside&utm_medium=insertion-colis&utm_campaign=printemps</code></p>
    <p>Ajoutez aussi un <strong>code promo unique</strong> par distributeur pour l'attribution offline.</p>
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

:::info Option "Duo" — Assemblage Flyer + Échantillon (Format S)
L'échantillon est collé sur un flyer A5 ou A6 via un point de **colle fugitive** (repositionnable), permettant de le détacher sans abîmer le flyer.

Cette prestation est réalisée par des **Entreprises Adaptées (EA)**, favorisant l'emploi de travailleurs handicapés.
:::

---

## Checklist BAT

À vérifier avant chaque soumission :

1. Les dimensions incluent **+2 mm de fond perdu** et respectent **-3 mm de zone tranquille**.
2. Le fichier est en **CMJN (FOGRA39)**, résolution ≥ **300 DPI**, taux d'encrage ≤ **300%**.
3. Le QR code getinside (`.svg`) est présent et mesure au minimum **25 × 25 mm**.
4. Les mentions légales universelles sont incluses : identification annonceur, Triman, logo getinside, CGV.
5. Les mentions sectorielles obligatoires (si applicable) sont lisibles.

→ [Télécharger la Check-list complète](https://docs.google.com/document/d/17oybJkf4iOX0XrC4LOJSI0zp2y0w_Wn7F4GW_oBAZcM/edit){target="_blank"}
