<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { useColorModes } from '@coreui/vue'

import { useThemeStore } from '@/stores/theme.js'

const { isColorModeSet, setColorMode, colorMode } = useColorModes(
  'coreui-free-vue-admin-template-theme',
)
const currentTheme = useThemeStore()

onBeforeMount(() => {
  const urlParams = new URLSearchParams(window.location.href.split('?')[1])
  let theme = urlParams.get('theme')

  if (theme !== null && theme.match(/^[A-Za-z0-9\s]+/)) {
    theme = theme.match(/^[A-Za-z0-9\s]+/)[0]
  }

  if (theme) {
    setColorMode(theme)
    return
  }

  if (isColorModeSet()) {
    return
  }

  setColorMode(currentTheme.theme)
})

// onMounted(() => {
//   document.addEventListener('contextmenu', (e) => e.preventDefault())
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'F12' ||
//       (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
//       (e.ctrlKey && e.key === 'u')) {
//       e.preventDefault()
//     }
//   })
//   setInterval(function () {
//     const start = performance.now()
//     debugger
//     const end = performance.now()
//     if (end - start > 100) {
//       window.location.href = "about:blank"
//     }
//   }, 1000)
// })
</script>
<!-- :class="`bg-${colorMode}`" -->
<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style lang="scss">
// Import Main styles for this application
@use 'styles/style';
// We use those styles to show code examples, you should remove them in your application.
@use 'styles/examples';
</style>
