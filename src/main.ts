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
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import validationRules from './validations/validation-rules';
import i18n from './locales/i18nService';

const app = createApp(App);
const pinia = createPinia();
app.use(validationRules);
app.use(pinia);
// persisto el store de pinia asi no se limpia al refrescar la pagina
// de esta forma se mantiene el estado y se muta unicamente mediante acciones
pinia.use(piniaPluginPersistedstate);
app.use(i18n);

// register plugins
registerPlugins(app)

app.mount('#app')
