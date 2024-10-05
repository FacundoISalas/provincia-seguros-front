<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-row>
        <v-col cols="12">
          <Form  v-slot="{ meta }">
            <Field name="username" validateOnMount :rules="{ required: true }" v-slot="{ field, errors }">
              <v-text-field
              v-bind="field"
              name="pepito"
              label="username"
              placeholder="Usuario"
              :error-messages="errors"
              >
            </v-text-field>
            <p> {{ $t('globalWelcomeMsg') }}</p>
            <p> {{ $t('globalWelcomeMsg2') }}</p>
            </Field>
            <v-btn :disabled="!meta.valid">
              {{ 'buton' }}
            </v-btn>
            <v-btn @click="changeLocaleService('en')">
              {{ 'change locale service '}}
            </v-btn>
          </Form>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate';
import { useUserData } from '@/store/userDataStore';
import { useCommonAppStore } from '@/store/commonAppStore';
type Locale = 'es' | 'en';

const userDataStore = useUserData();
const commonAppStore = useCommonAppStore();

function changeLocaleService(locale: Locale) {
  commonAppStore.setLocaleI18n(locale);
}
</script>
