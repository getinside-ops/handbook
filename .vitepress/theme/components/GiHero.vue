<script setup lang="ts">
import { withBase } from 'vitepress'
defineProps<{
  before?: string; accent: string; after?: string; lead?: string
  primaryText?: string; primaryLink?: string; secondaryText?: string; secondaryLink?: string
  image?: string; imageAlt?: string
}>()
</script>

<template>
  <section class="ds-hero">
    <div class="ds-hero-text">
      <h1 class="ds-hero-title">
        <template v-if="before">{{ before }} </template><span class="ds-accent ds-accent--box">{{ accent }}</span><template v-if="after"> {{ after }}</template>
      </h1>
      <p v-if="lead" class="ds-hero-lead">{{ lead }}</p>
      <div class="ds-hero-actions">
        <a v-if="primaryText" :href="withBase(primaryLink || '/')" class="ds-btn ds-btn--primary">{{ primaryText }}</a>
        <a v-if="secondaryText" :href="withBase(secondaryLink || '/')" class="ds-btn ds-btn--ghost">{{ secondaryText }}</a>
      </div>
    </div>
    <img v-if="image" class="ds-hero-img" :src="withBase(image)" :alt="imageAlt || ''" width="320" height="320" />
  </section>
</template>
