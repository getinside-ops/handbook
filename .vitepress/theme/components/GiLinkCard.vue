<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{ href: string; title: string; desc?: string; image?: string; imageAlt?: string; tone?: 'brand' | 'teal' | 'lilac' }>()
</script>

<template>
  <a :href="withBase(href)" class="ds-card" :class="tone ? `ds-card--${tone}` : ''">
    <span v-if="image" class="ds-card-media"><img :src="withBase(image)" :alt="imageAlt || ''" loading="lazy" /></span>
    <span class="ds-card-content">
      <span class="ds-card-title">{{ title }}</span>
      <span v-if="desc" class="ds-card-desc">{{ desc }}</span>
    </span>
  </a>
</template>
