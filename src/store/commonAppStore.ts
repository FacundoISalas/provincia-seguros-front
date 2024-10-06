import { defineStore } from 'pinia';
import { ref, watch, computed } from 'vue';
import i18n from '@/locales/i18nService';
import { localize, setLocale } from '@vee-validate/i18n';

type Locale = 'es' | 'en';
export const useCommonAppStore = defineStore('commonAppStore', () => {

  const locale = ref<Locale>('es');
  const getLocale = computed(() => locale.value);
  function setLocaleI18n(newLocale: Locale) {
    locale.value = newLocale;
    location.reload();
  }

  // si ocurren cambios en el locale actualizo tanto i18n como validaciones 
  watch(locale, (newLocale) => {
    i18n.global.locale = newLocale;
    setLocale(newLocale);
    localize(newLocale);
  });
  return { locale, getLocale, setLocaleI18n };
}, {
  persist: true,
});

