<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { useSidebar } from 'vitepress/theme'
import GiIcon from './GiIcon.vue'
import { groupOf } from '../sidebar-trail'

const { page, lang } = useData()
const { sidebar } = useSidebar()

const en = computed(() => lang.value.startsWith('en'))
const base = computed(() => (en.value ? '/en' : ''))
const tabs = computed(() => [
  { key: 'recruit', icon: 'target', text: en.value ? 'Recruit' : 'Recruter' },
  { key: 'retain', icon: 'mail-open', text: en.value ? 'Retain' : 'Fidéliser' },
  { key: 'monetize', icon: 'package', text: en.value ? 'Monetize' : 'Monétiser' },
])

// 'en/recruit/x.md' -> 'recruit' ; 'faq/index.md' -> 'faq'
const current = computed(() => page.value.relativePath.replace(/^en\//, '').split('/')[0])
const here = computed(() => '/' + page.value.relativePath.replace(/\.md$/, ''))

const crumb = computed(() => {
  const tab = tabs.value.find((t) => t.key === current.value)
  if (!tab) return []
  const group = groupOf(sidebar.value, here.value, `${base.value}/${tab.key}/`)
  return group ? [tab.text, group] : [tab.text]
})
</script>

<template>
  <div class="gi-sbhead">
    <nav class="gi-sbhead-tabs" :aria-label="en ? 'Journeys' : 'Parcours'">
      <a
        v-for="t in tabs"
        :key="t.key"
        class="gi-sbhead-tab"
        :class="{ 'is-current': t.key === current }"
        :href="withBase(`${base}/${t.key}/`)"
        :aria-current="t.key === current ? 'true' : undefined"
      >
        <GiIcon :name="t.icon" :size="18" />
        <span>{{ t.text }}</span>
      </a>
    </nav>
    <p v-if="crumb.length" class="gi-sbhead-crumb">{{ crumb.join(' › ') }}</p>
  </div>
</template>
