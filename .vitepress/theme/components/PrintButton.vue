<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang, frontmatter } = useData()
const label = computed(() => (lang.value.startsWith('en') ? 'Print / PDF' : 'Imprimer / PDF'))
const visible = computed(() => frontmatter.value.layout !== 'home' && frontmatter.value.print !== false)
function print() {
  window.print()
}
</script>

<template>
  <button v-if="visible" class="gi-print-btn" type="button" @click="print">
    🖨️ {{ label }}
  </button>
</template>
