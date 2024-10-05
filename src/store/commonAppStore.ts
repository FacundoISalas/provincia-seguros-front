import { defineStore } from 'pinia';
import { ref } from 'vue';
import i18n from '@/locales/i18nService';
import { setLocale } from '@vee-validate/i18n';

type Locale = 'es' | 'en';
export const useCommonAppStore = defineStore('commonAppStore', () => {
    
  const locale = ref<Locale>('es');

  function setLocaleI18n(newLocale: Locale) {
    locale.value = newLocale;
    i18n.global.locale = newLocale; // set locale i18n service
    setLocale(newLocale); // set locale validations
  }

  return { locale, setLocaleI18n };
});
