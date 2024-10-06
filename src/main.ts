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
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App);
const pinia = createPinia();
// persisto store de pinia
pinia.use(piniaPluginPersistedstate)
// uso las reglas de vee-validate como plugin para tenerlas disponibles en toda la aplicacion
app.use(validationRules);
app.use(pinia);
// uso el servicio de i18n para poder acceder a los recursos de ingles o español a lo largo de la aplicacion
app.use(i18n);

// register plugins
registerPlugins(app)

app.mount('#app')
