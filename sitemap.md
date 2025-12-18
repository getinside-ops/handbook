---
layout: default
title: Plan du Site
nav_order: 100
toc: false
---

# Plan du Site
{: .fs-9 }

Vue d'ensemble de toute la documentation disponible sur le Help Center.
{: .fs-6 .fw-300 }

<hr class="my-6">

<!-- SECTION DÉCOUVERTE (Tout en haut) -->
<div class="mb-6">
  <h2 class="mt-0 mb-4 text-purple-200">🚀 Découverte & Concepts</h2>
  <ul class="fs-4">
    {% assign start_pages = site.html_pages | where_exp: "item", "item.path contains 'docs/fr/01-decouvrir/'" | sort: "nav_order" %}
    {% for p in start_pages %}
      {% if p.title != "Découvrir getinside" %}
        <li class="mb-2"><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
      {% endif %}
    {% endfor %}
  </ul>
</div>

<hr class="mb-6">

<!-- GRILLE PRINCIPALE -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">

  <!-- COLONNE ANNONCEURS -->
  <div>
    <h2 class="mt-0 mb-4">🛍️ Espace Annonceurs</h2>
    <ul class="fs-4">
      {% assign advertisers_pages = site.html_pages | where_exp: "item", "item.path contains 'docs/fr/02-annonceurs/'" | sort: "title" %}
      {% for p in advertisers_pages %}
        {% if p.title != "Espace Annonceurs" %}
          <li class="mb-2"><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>

  <!-- COLONNE DISTRIBUTEURS -->
  <div>
    <h2 class="mt-0 mb-4">📦 Espace Distributeurs</h2>
    <ul class="fs-4">
      {% assign publishers_pages = site.html_pages | where_exp: "item", "item.path contains 'docs/fr/03-distributeurs/'" | sort: "title" %}
      {% for p in publishers_pages %}
        {% if p.title != "Espace Distributeurs" %}
          <li class="mb-2"><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>

  <!-- COLONNE SUPPORT -->
  <div>
    <h2 class="mt-0 mb-4">📚 Support & Aide</h2>
    <ul class="fs-4">
      <!-- FAQ -->
      <li class="mb-2"><strong>Foire Aux Questions</strong></li>
      {% assign faq_pages = site.html_pages | where_exp: "item", "item.path contains 'docs/fr/04-faq/'" | sort: "nav_order" %}
      {% for p in faq_pages %}
        {% if p.title != "FAQ" %}
          <li class="mb-2 ml-4"><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
        {% endif %}
      {% endfor %}
      
      <!-- Glossaire -->
      <li class="mb-2 mt-4"><a href="{{ '/docs/fr/01-decouvrir/glossaire' | relative_url }}">📖 Glossaire</a></li>
    </ul>
  </div>

</div>
