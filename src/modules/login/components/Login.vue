<template>
  <v-container fluid>
    <v-responsive
      class="align-centerfill-height mx-auto"
    >
      <v-card>
        <v-card-title> {{  $t('globalLogin') }}</v-card-title>
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <Form  v-slot="{ meta }">
              <Field :name="$t('globalUser')" :rules="{ required: true }" v-slot="{ field, errors }">
                <v-text-field
                  v-model="userName"
                  v-bind="field"
                  :label="$t('globalUser')"
                  :placeholder="$t('globalUser')"
                  :error-messages="errors"
                >
              </v-text-field>
              </Field>
              <Field :name="$t('globalPassword')" :rules="{ required: true }" v-slot="{ field, errors }">
                <v-text-field
                  v-model="userPassword"
                  v-bind="field"
                  :label="$t('globalPassword')"
                  :placeholder="$t('globalPassword')"
                  :error-messages="errors"
                >
              </v-text-field>
              </Field>
              <v-btn
                @click="loginEvent"
                color="secondary"
                :disabled="!meta.valid"
              >
                {{ $t('globalLogin') }}
              </v-btn>
            </Form>
          </v-col>
        </v-row>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Form, Field } from 'vee-validate';
import { useUserData } from '@/store/userDataStore';
const userDataStore = useUserData();

// data
const userName = ref<string>('');
const userPassword = ref<string>('');

// methods

function loginEvent() {
  if (userName.value === userDataStore.validUserName && userPassword.value === userDataStore.validPassword) {
    userDataStore.setUserData(userName.value);
  }
}
</script>
  