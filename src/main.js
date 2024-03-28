import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/main.scss'
import App from './App.vue'
import router from './router'
import pinia from '@/stores/index.js'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(pinia)
app.mount('#app')
