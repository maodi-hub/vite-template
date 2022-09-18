import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import '@style/reset/index.css'
import '@style/default/index.css'
import '@style/animation/index.css'
import '@style/element/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import ElementPlus from 'element-plus'
import pinia from '@/store'
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(pinia)
.use(router)
.use(ElementPlus, { size: 'small', locale })
.mount('#app')
