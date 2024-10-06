<template>
<v-snackbar
  v-model="isSnackbarOn"
  timeout="5000"
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
  {{ `${$t('globalLoginSucces')}: ${userName}` }}
</v-snackbar>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

// data
const isSnackbarOn = ref<boolean|undefined>(false);
import { useUserData } from '@/store/userDataStore';
const userDataStore = useUserData();
const userName = computed(() => userDataStore.getUserName);

onMounted(() => {
  if (route.query && route.query.loginFirstTime) {
    isSnackbarOn.value = true;
  }
});
</script>
  