import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from '@/App.vue'
import router from '@/router'
import '@/styles/index.css'
import '@/styles/app.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
 
createApp(App)
.use(router)
.use(pinia)
.mount('#app')
