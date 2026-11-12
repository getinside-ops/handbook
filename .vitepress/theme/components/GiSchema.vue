<script setup lang="ts">
defineProps<{ caption?: string; muted?: boolean }>()
</script>

<template>
  <figure class="ds-schema" :class="{ 'ds-schema--muted': muted }">
    <slot />
    <figcaption v-if="caption" class="ds-schema-caption">{{ caption }}</figcaption>
  </figure>
</template>
