<script setup lang="ts">
defineProps<{ value: string; label: string; detail?: string }>()
</script>

<template>
  <div class="ds-stat">
    <span class="ds-stat-value"><span class="ds-stat-mark">{{ value }}</span></span>
    <span class="ds-stat-label">{{ label }}</span>
    <span v-if="detail" class="ds-stat-detail">{{ detail }}</span>
  </div>
</template>
