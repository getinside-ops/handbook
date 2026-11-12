<script setup lang="ts">
defineProps<{ caption?: string; muted?: boolean }>()
</script>

<template>
  <figure class="ds-schema" :class="{ 'ds-schema--muted': muted }">
    <svg class="ds-regmark" viewBox="0 0 26 26" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
      <circle cx="13" cy="13" r="6" /><path d="M13 0v8M13 18v8M0 13h8M18 13h8" />
    </svg>
    <slot />
    <figcaption v-if="caption" class="ds-schema-caption">{{ caption }}</figcaption>
  </figure>
</template>
