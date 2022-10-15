import { createI18n} from 'vue-i18n'

const messages = {}

const i18n11 = createI18n({
  legacy: false,
  globalInjection: true, // 是否全局注入
  fallbackLocale: 'zh-cn',
  locale: 'zh-cn',
  messages,
  silentTranslationWarn: true
})
export default i18n11
