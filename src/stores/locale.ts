import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const locales = {
  en,
  'zh-cn': zhCn,
}

export const useLocaleStore = defineStore('locale', () => {
  const defaultLanguage = 'en'
  const savedLanguage = localStorage.getItem('language') || defaultLanguage
  const currentLocale = ref(locales[savedLanguage as keyof typeof locales] || locales.en)

  function switchLanguage(language: keyof typeof locales) {
    if (locales[language]) {
      currentLocale.value = locales[language]
      localStorage.setItem('language', language)
    }
  }

  return { currentLocale, switchLanguage }
})
