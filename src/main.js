// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import vuetify from './plugins/vuetify'
import '@coreui/coreui/dist/css/coreui.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
// import '@mdi/font/css/materialdesignicons.css';

import App from './App.vue'
import router from './router'

import CoreuiVue from '@coreui/vue'
import { CIcon } from '@coreui/icons-vue'
import * as iconSet from '@coreui/icons'
import DocsComponents from '@/components/DocsComponents'
import DocsExample from '@/components/DocsExample'
import DocsIcons from '@/components/DocsIcons'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(CoreuiVue)
app.use(vuetify) // ✅ Vuetify must be used BEFORE mount
app.component('CIcon', CIcon)
app.provide('icons', iconSet)
app.component('DocsComponents', DocsComponents)
app.component('DocsExample', DocsExample)
app.component('DocsIcons', DocsIcons)

app.mount('#app')

document.addEventListener('contextmenu', (e) => e.preventDefault())

document.addEventListener('keydown', (e) => {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toLowerCase() === 'u')
  ) {
    e.preventDefault()
  }
})

setInterval(() => {
  const start = performance.now()
  debugger
  const end = performance.now()
  if (end - start > 100) {
    window.location.href = 'about:blank'
  }
}, 1000)