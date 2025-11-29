# 📚 getinside Handbook

> Le dépôt source de la base de connaissances officielle pour [getinside](https://www.getinside.fr/), la plateforme SaaS de Retail Media.

Ce projet héberge la documentation technique et fonctionnelle destinée aux **Annonceurs** et aux **Éditeurs** de la plateforme.

🔗 **Voir le site en ligne :** [https://getinside-ops.github.io/handbook/](https://getinside-ops.github.io/handbook/)

---

## 🛠️ Stack Technique

Ce site de documentation est statique, généré par **Jekyll** et utilise le thème [Just the Docs](https://just-the-docs.com/).

*   **Moteur :** Jekyll
*   **Thème :** Just the Docs
*   **Hébergement :** GitHub Pages
*   **Langage :** Markdown (`.md`)

## 📂 Structure du projet

L'architecture du contenu est organisée par cible (Annonceurs vs Éditeurs) dans le dossier `docs/` :

```text
.
├── _config.yml              # Configuration globale (Titre, URL, Thème)
├── Gemfile                  # Dépendances Ruby
├── index.md                 # Page d'accueil du site (Landing Page)
├── docs/
│   └── fr/
│       ├── advertisers/     # Documentation Annonceurs (Specs, Guides...)
│       ├── publishers/      # Documentation Éditeurs (Logistique, Onboarding...)
│       ├── glossary.md      # Glossaire
│       └── faq.md           # Foire aux questions
└── assets/
    └── images/              # Stockage des images, schémas et captures
