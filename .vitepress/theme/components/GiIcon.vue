<script setup lang="ts">
import { computed } from 'vue'
import i_rocket from 'lucide-static/icons/rocket.svg?raw'
import i_package from 'lucide-static/icons/package.svg?raw'
import i_mail from 'lucide-static/icons/mail.svg?raw'
import i_smartphone from 'lucide-static/icons/smartphone.svg?raw'
import i_image from 'lucide-static/icons/image.svg?raw'
import i_gift from 'lucide-static/icons/gift.svg?raw'
import i_target from 'lucide-static/icons/target.svg?raw'
import i_handshake from 'lucide-static/icons/handshake.svg?raw'
import i_euro from 'lucide-static/icons/euro.svg?raw'
import i_banknote_arrow_up from 'lucide-static/icons/banknote-arrow-up.svg?raw'
import i_link from 'lucide-static/icons/link.svg?raw'
import i_briefcase from 'lucide-static/icons/briefcase.svg?raw'
import i_wrench from 'lucide-static/icons/wrench.svg?raw'
import i_settings from 'lucide-static/icons/settings.svg?raw'
import i_zap from 'lucide-static/icons/zap.svg?raw'
import i_hammer from 'lucide-static/icons/hammer.svg?raw'
import i_download from 'lucide-static/icons/download.svg?raw'
import i_lightbulb from 'lucide-static/icons/lightbulb.svg?raw'
import i_palette from 'lucide-static/icons/palette.svg?raw'
import i_mail_open from 'lucide-static/icons/mail-open.svg?raw'
import i_circle_check from 'lucide-static/icons/circle-check.svg?raw'
import i_circle_x from 'lucide-static/icons/circle-x.svg?raw'
import i_circle_help from 'lucide-static/icons/circle-help.svg?raw'
import i_wallet from 'lucide-static/icons/wallet.svg?raw'

// Table explicite: seules les icônes utilisées sont embarquées.
const icons: Record<string, string> = {
  'rocket': i_rocket,
  'package': i_package,
  'mail': i_mail,
  'smartphone': i_smartphone,
  'image': i_image,
  'gift': i_gift,
  'target': i_target,
  'handshake': i_handshake,
  'euro': i_euro,
  'banknote-arrow-up': i_banknote_arrow_up,
  'link': i_link,
  'briefcase': i_briefcase,
  'wrench': i_wrench,
  'settings': i_settings,
  'zap': i_zap,
  'hammer': i_hammer,
  'download': i_download,
  'lightbulb': i_lightbulb,
  'palette': i_palette,
  'mail-open': i_mail_open,
  'circle-check': i_circle_check,
  'circle-x': i_circle_x,
  'circle-help': i_circle_help,
  'wallet': i_wallet,
}

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 24 })
const svg = computed(() => (icons[props.name] || '').replace(/<!--[\s\S]*?-->/, ''))
</script>

<template>
  <span class="gi-icon" aria-hidden="true" :style="{ '--gi-icon-size': props.size + 'px' }" v-html="svg"></span>
</template>
