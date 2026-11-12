<script setup lang="ts">
import { withBase } from 'vitepress'
withDefaults(defineProps<{ name: string; alt?: string; size?: number }>(), { size: 160 })
</script>

<template>
  <img class="ds-pelican" :src="withBase(`/images/ds/${name}.webp`)" :alt="alt || ''" :width="size" :height="size" loading="lazy" />
</template>
