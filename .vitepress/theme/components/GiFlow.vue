<script setup lang="ts">
import { withBase } from 'vitepress'
// steps : [{ label, ours?, picto? }] ; ours = élément porteur du message (jaune, seule ombre dure)
defineProps<{ steps: { label: string; ours?: boolean; picto?: string }[] }>()
</script>

<template>
  <div class="ds-flow-row" role="list">
    <template v-for="(s, i) in steps" :key="i">
      <div class="ds-flow-step" :class="s.ours ? 'ds-ours' : 'ds-theirs'" role="listitem">
        <img v-if="s.picto" :src="withBase(s.picto)" alt="" width="48" height="48" loading="lazy" />
        <span>{{ s.label }}</span>
      </div>
      <span v-if="i < steps.length - 1" class="ds-flow-line" aria-hidden="true" />
    </template>
  </div>
</template>
