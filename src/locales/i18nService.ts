import { createI18n } from 'vue-i18n';
import esMessages from '@/locales/es.json';
import enMessages from '@/locales/en.json';

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    es: esMessages,
    en: enMessages,
  },
});

export default i18n;