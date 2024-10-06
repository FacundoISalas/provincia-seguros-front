/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'

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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'provinciaSegurosTheme',
    themes: {
      provinciaSegurosTheme,
    },
  },
})
