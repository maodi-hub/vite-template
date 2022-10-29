import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import '@style/reset/index.css'
import '@style/default/index.css'
import '@style/animation/index.css'
import '@style/element/index.css'
import i18n from './langs'
import ElementPlus from 'element-plus'
import pinia from '@/store'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(pinia)
.use(i18n)
.use(router)
.use(ElementPlus)
.mount('#app')

