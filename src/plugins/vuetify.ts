/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { en, es } from 'vuetify/locale'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'

// tema custom
const provinciaSegurosTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#FFFFFF',
    'primary-darken-1': '#E0E0E0',
    secondary: '#234079',
    'secondary-darken-1': '#1A2B5D',
    error: '#F44336',
    info: '#2196F3',
    success: '#00C853',
    warning: '#FB8C00',
  },
}

// busco el setting del locale y le asigno a vuetify que utilice ese locale
// caso contrario toma por defecto español
const localeStorage = localStorage.getItem('commonAppStore');
let localeVuetify = 'es';
if (localeStorage) {
  const localeValue = JSON.parse(localeStorage);
  localeVuetify = localeValue.locale;
}
export default createVuetify({
  locale: {
    locale: localeVuetify,
    fallback: 'en',
    messages: { en, es },
  },
  theme: {
    defaultTheme: 'provinciaSegurosTheme',
    themes: {
      provinciaSegurosTheme,
    },
  },
})
