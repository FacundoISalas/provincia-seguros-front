/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components entry point
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// i18n and vee-validate rules
import validationRules from './validations/validation-rules';
import i18n from './locales/i18nService';

const app = createApp(App);
const pinia = createPinia();
app.use(validationRules);
app.use(pinia);
app.use(i18n);

// register plugins
registerPlugins(app)

app.mount('#app')
