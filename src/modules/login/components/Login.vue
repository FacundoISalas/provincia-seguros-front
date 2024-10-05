<template>
  <Form  v-slot="{ meta }">
    <v-card elevation="3" rounded="rounded-lg" max-height="640" max-width="640" class="mx-auto my-auto">
      <v-card-title> {{  $t('globalLogin') }}</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
              <Field :name="$t('globalUser')" :rules="{ required: true }" v-slot="{ field, errors }">
                <v-text-field
                  v-model="userName"
                  v-bind="field"
                  :label="$t('globalUser')"
                  :placeholder="$t('globalUser')"
                  :error-messages="errors"
                  prepend-inner-icon="mdi-account"
                >
              </v-text-field>
              </Field>
          </v-col>
          <v-col cols="12">
            <Field :name="$t('globalPassword')" :rules="{ required: true }" v-slot="{ field, errors }">
              <v-text-field
                v-model="userPassword"
                v-bind="field"
                :label="$t('globalPassword')"
                :placeholder="$t('globalPassword')"
                :error-messages="errors"
                prepend-inner-icon="mdi-key"
              >
            </v-text-field>
            </Field>
          </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="loginEvent"
            block
            :disabled="!meta.valid"
            color="primary--text bg-secondary"
          >
            {{ $t('globalLogin') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </Form>
    <v-snackbar
      v-model="isSnackbarOn"
      timeout="2000"
      color="success"
      location="top"
    >
    <template v-slot:actions>
        <v-btn
          icon="mdi-close"
          fab
          @click="isSnackbarOn = false"
        >
        </v-btn>
      </template>
      {{ $t('globalLoginSucces') }}
    </v-snackbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Form, Field } from 'vee-validate';
import { useUserData } from '@/store/userDataStore';
import { useRouter } from 'vue-router'
const userDataStore = useUserData();
const router = useRouter();

// data
const userName = ref<string>('');
const userPassword = ref<string>('');
const isSnackbarOn = ref<boolean|undefined>(false);

// methods
function loginEvent() {
  userDataStore.setUserData(userName.value);
  isSnackbarOn.value = true;
  router.push('/');
}
</script>
  