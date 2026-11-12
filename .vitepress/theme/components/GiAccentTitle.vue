<script setup lang="ts">
import { onMounted, ref } from 'vue'
withDefaults(defineProps<{ before?: string; accent: string; after?: string; level?: 'h1' | 'h2' | 'h3' }>(), { level: 'h2' })
const root = ref<HTMLElement | null>(null)
const armed = ref(false)
const shown = ref(false)
onMounted(() => {
  const el = root.value
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
  armed.value = true
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { shown.value = true; io.disconnect() }
  }, { threshold: 0.6 })
  io.observe(el)
})
</script>

<template>
  <component :is="level" ref="root" class="ds-title" :class="{ 'is-armed': armed, 'is-in': shown }">
    <template v-if="before">{{ before }} </template><span class="ds-accent ds-accent--serif">{{ accent }}</span><template v-if="after"> {{ after }}</template>
  </component>
</template>
