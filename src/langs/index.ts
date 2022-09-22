import { createI18n} from 'vue-i18n'
import { getLangsConfig } from '@/utils/tools'


const messages = await getLangsConfig()

console.log(1);




const i18n11 = createI18n({
  legacy: false,
  globalInjection: true, // 是否全局注入
  fallbackLocale: 'zh-cn',
  locale: 'zh-cn',
  messages,
  silentTranslationWarn: true
})
console.log(i18n11.global.messages, 'message',3);
export default i18n11
