
import { createI18n} from 'vue-i18n';

export const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 是否全局注入
  fallbackLocale: 'zh-cn',
  locale: 'zh-cn',
  silentTranslationWarn: true
})

export default i18n;