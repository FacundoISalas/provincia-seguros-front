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
    background: '#FFFFFF',            // White
    surface: '#FFFFFF',               // White
    primary: '#FFFFFF',               // White
    'primary-darken-1': '#3700B3',    // Darkened primary color (optional)
    secondary: '#002f87',             // Dark Blue
    error: '#D50000',                 // Red
    info: '#2196F3',                  // Blue
    success: '#00C853',               // Green Accent-4
    warning: '#FF9800',               // Orange
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
