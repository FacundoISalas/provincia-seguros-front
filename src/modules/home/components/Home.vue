<template>
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
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

// data
const isSnackbarOn = ref<boolean|undefined>(false);

onMounted(() => {
  if (route.query && route.query.loginFirstTime) {
    isSnackbarOn.value = true;
  }
});
</script>
  