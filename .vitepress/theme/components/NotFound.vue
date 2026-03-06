<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { lang, site, base } = useData()

const isEn = computed(() => lang.value === 'en-US' || lang.value === 'en')

const content = computed(() => {
  if (isEn.value) {
    return {
      title: "Oops, nothing here! 👀",
      tagline: "Looks like this page took a wrong turn. Don't worry, it happens to the best of us.",
      home: "Back to home",
      contact: "Get in touch",
      homeLink: `${base.value}en/`
    }
  }
  return {
    title: "Oups, cette page n'existe pas ! 👀",
    tagline: "Il semblerait que cette page se soit perdue en chemin. Pas de panique, ça arrive !",
    home: "Retour à l'accueil",
    contact: "Nous contacter",
    homeLink: `${base.value}`
  }
})
</script>

<template>
  <div class="not-found">
    <div class="content">
      <div class="icon">🔍</div>
      <h1>{{ content.title }}</h1>
      <p class="tagline">{{ content.tagline }}</p>
      
      <div class="actions">
        <a :href="content.homeLink" class="btn btn-primary">
          {{ content.home }}
        </a>
        <a href="mailto:benoit@getinside.fr" class="btn">
          {{ content.contact }}
        </a>
      </div>

      <div class="parcel-graphic">
        <div class="box">
          <div class="tape"></div>
          <div class="label-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  padding: 64px 24px 96px;
  text-align: center;
  display: flex;
  justify-content: center;
}

.content {
  max-width: 600px;
}

.icon {
  font-size: 64px;
  margin-bottom: 24px;
}

h1 {
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--vp-c-text-1);
}

.tagline {
  font-size: 18px;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
  line-height: 1.5;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 48px;
}

/* Graphic elements for "fun" factor */
.parcel-graphic {
  position: relative;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
}

.box {
  width: 100px;
  height: 80px;
  background: #d4a373;
  border: 2px solid rgba(0,0,0,0.1);
  position: relative;
  border-radius: 4px;
  transform: rotate(-5deg);
}

.dark .box {
  background: #a68a64;
}

.tape {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 15px;
  background: rgba(0,0,0,0.15);
  transform: translateY(-50%);
}

.label-box {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 20px;
  background: white;
  opacity: 0.8;
  border-radius: 2px;
}

@media (min-width: 768px) {
  .not-found {
    padding: 96px 32px 128px;
  }
  
  h1 {
    font-size: 48px;
  }
}
</style>
