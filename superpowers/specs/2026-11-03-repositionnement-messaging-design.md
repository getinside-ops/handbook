# Repositionnement du handbook sur le nouveau messaging getinside

Date : 2026-11-03
Statut : validé en brainstorming, en attente de relecture

Cette spec vit hors de `docs/` (`srcDir` de VitePress) pour ne pas être publiée sur le site.

## Contexte

Le handbook présente getinside comme une plateforme « Retail Media accessible » (250+ e-commerçants, 300+ annonceurs, 950+ campagnes, frais de plateforme de 12 %, emailing, social, jeux concours). Le produit et le discours ont changé. La dernière mise à jour du handbook date de mars 2026.

## Sources

| Source | Usage |
| :--- | :--- |
| Guide de messaging — getinside (23 oct. 2026, mis à jour le 30 oct.) | Référence pour le vocabulaire, les verbatims et les chiffres |
| Deck « Marketing par le colis et le courrier adressé » | Cas clients, fonctionnalités, 3 canaux, conformité |
| Deck « … — design system » | Cas clients supplémentaires, chiffres de résultats |
| Deck « getinside \| pour le réseau » | Côté éditeurs : Wallet, briefs, échange d'audiences, +300 audiences |

## Décisions

1. **Périmètre :** repositionnement des pages d'entrée et des hubs. Emailing, display, social et jeux concours restent, en « autres formats ».
2. **Tarifs :** aucun tarif dans le handbook. Les pages pricing sont supprimées et les montants, commissions et paliers sont retirés des autres pages.
3. **TOP CAC :** 1,21 € (ROAS 4,5X+), valeur du guide de messaging. Les decks indiquent 2,06 € et ne sont pas retenus sur ce point.
4. **Langues :** parité FR/EN conservée, structure identique sous `docs/en/`.
5. **Exécution :** 3 phases, chacune relisable et déployable seule.

## Contenu retenu

- Promesse : « Solution marketing par le colis et le courrier adressé à l'ère agentique », signature « Le marketing qui touche ».
- 3 usages : **Recruter** (achat média ou échange d'audiences), **Fidéliser** (courrier adressé aux inactifs e-mail, up-sell colis), **Monétiser** (diffuser des campagnes de marques, Wallet, répondre aux briefs, prospecter, héberger ses partenaires).
- 3 canaux : insertion colis, courrier adressé, échantillonnage (définitions du guide).
- Preuves : 98 % de délivrabilité, 100 % d'attention, 86 % des décisions d'achat au domicile, 500+ marques, +300 audiences agrégées (côté réseau).
- Records : TOP CAC 1,21 € (Recruter), TOP CVR 6 % (Fidéliser), TOP revenus +215 K€/an et 90 % réinvestis en acquisition (Monétiser).
- Cas clients : ceux des decks (échantillon beauté 30k/65k, colis auto-famille 12 % / CAC 3,5 €, cadeaux et événements 3,12 % / CAC 4,5 €, échantillon alimentation 30k/80k, événement sport 13k/50k, notoriété alimentation 44 %, monétisation 90 % réinvestis, +200 K€, +375 % de panier moyen, colis alimentation 2,5 % / CAC 10 €). Les verbatims clients sont repris tels quels.
- Conformité : RGPD sur intérêt légitime avec droit d'opposition sur chaque envoi ; échantillon remis sur demande préalable (art. L541-15-10 du code de l'environnement).
- Fonctionnalités éditeurs : Wallet (diffuser, générer des revenus, financer ses campagnes ou retirer), briefs annonceurs, échange d'audiences, prospection du réseau, hébergement des partenaires existants, performances en temps réel (Reach, CPA, CPC).

## Hors du handbook public

- ICP, profils à prospecter, pain points : contenus commerciaux internes.
- Étude concurrentielle.
- Points non tranchés du guide : terme « Agency », essai de 30 jours, simulateur de revenus.
- Tarifs et commissions.
- La page `publishers/score-distributor` n'apparaît dans aucune source : elle n'est pas modifiée, sauf retrait d'éventuels tarifs.

## Structure cible

- **Accueil (`docs/index.md`) et `start-here/` :** nouveau hero, 3 cartes d'usage, 3 cartes de canaux, preuves, cas clients.
- **Hubs :** `advertisers/` organisé autour de Recruter et Fidéliser ; `publishers/` autour de Monétiser (avec l'échange d'audiences).
- **Canaux :** `advertisers/sponsored-mail/` (insertion colis) est reformulé. Deux pages sont créées : courrier adressé et échantillonnage (chemins définis dans le plan, FR et EN).
- **Autres formats :** emailing, display, social et jeux concours sont regroupés sous une section secondaire de la sidebar, sans changement de leur contenu hors vocabulaire et tarifs.

## Règles d'écriture

- Remplacer « Retail Media », « asile colis » et « e-commerçants » par le vocabulaire du guide, y compris dans les titres, descriptions, mots-clés et balises SEO (`.vitepress/config.ts`, frontmatter, `seo-keywords.md`).
- Remplacer 250+, 300+ et 950+ partout.
- Respecter les conventions du `CLAUDE.md` : frontmatter complet sur chaque page, containers `::: tip/info/warning/danger`, blocs HTML `gi-*` conservés, sidebar à mettre à jour pour chaque page créée ou supprimée.

## Phases

1. **Entrée :** `docs/index.md`, `start-here/index.md`, `start-here/why-it-works.md`, `advertisers/index.md`, `publishers/index.md`, `glossary.md`, `resources/case-studies.md`, `faq/index.md`, et leurs équivalents `docs/en/`.
2. **Canaux :** reformulation de l'insertion colis, création des pages courrier adressé et échantillonnage, regroupement des autres formats, sidebar FR et EN.
3. **Nettoyage :** suppression de `advertisers/pricing.md` et `publishers/pricing.md` (FR et EN), tarifs retirés de `publishers/payouts.md`, `faq/billing.md`, `faq/logistics-tech.md`, `faq/account-audiences.md`, `advertisers/printing-services.md`, `advertisers/onboarding-quick-start.md`, `publishers/onboarding-process.md` et des fiches formats, correction des liens morts.

## Vérifications à chaque phase

- `npm run docs:build` passe (VitePress échoue sur les liens morts).
- Parité FR/EN : la liste des fichiers sous `docs/` et sous `docs/en/` correspond.
- Recherche des termes à bannir dans `docs/`, `.vitepress/` et `seo-keywords.md` : `250+`, `300+ annonceurs`, `950+`, `12%`, `€ HT`, `Retail Media`, `asile colis`.
- Relecture du rendu avec `npm run docs:preview` pour les pages d'entrée.

## Points ouverts

- Le guide indique que la page Fidéliser ne dispose pas encore d'ICP (« en cours ») : le texte s'appuie uniquement sur les verbatims.
- Les chemins exacts des deux nouvelles pages canaux sont fixés dans le plan d'implémentation.
