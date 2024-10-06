import { defineStore } from 'pinia';
import { ref, watch, computed } from 'vue';
import i18n from '@/locales/i18nService';
import { localize, setLocale } from '@vee-validate/i18n';

type Locale = 'es' | 'en';
export const useCommonAppStore = defineStore('commonAppStore', () => {

  // reviso si existe locale persistido de antes en el localstorage si no por defecto utiliza locale es español
  const locale = ref<Locale>(localStorage.getItem('pinia-state') ? JSON.parse(localStorage.getItem('pinia-state')!).commonAppStore.locale : 'es');
  const getLocale = computed(() => locale.value);

  function setLocaleI18n(newLocale: Locale) {
    locale.value = newLocale;
    localize(newLocale);
  }

  // si ocurren cambios en el locale actualizo tanto i18n como validaciones 
  watch(locale, (newLocale) => {
    i18n.global.locale = newLocale;
    setLocale(newLocale);
  });
  return { locale, getLocale, setLocaleI18n };
},
{
  persist: true,
});

