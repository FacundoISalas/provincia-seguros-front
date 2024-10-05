// utlizo vee-validate para configurar validaciones globales que sean faciles de utilizar a lo largo de la aplicacion
// de esta forma la logica de las validaciones se centra en un solo lugar.
import { defineRule, configure } from 'vee-validate';
import { required, max, min } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import { setLocale } from '@vee-validate/i18n';
import type { App } from 'vue';

export default  {
    install(app: App) {
    defineRule('required', required);
    defineRule('max', max);
    defineRule('min', min); 
    setLocale('es'); // default spanish locale
    configure({
        generateMessage: localize({
          en: {
            messages: {
              required: 'This {field} is required',
              min: 'The min quantity of characters of the field {field} is {min}',
              max: 'The max quantity of characters of the field {field} is {max}',
            },
          },
          es: {
            messages: {
              required: 'Este {field} es requerido',
              min: 'La cantidad minima de caracteres del campo {field} es {min}',
              max: 'La cantidad maxima de caracteres del campo {field} es {max}',
            },
          },
        }),
      });
    }
}