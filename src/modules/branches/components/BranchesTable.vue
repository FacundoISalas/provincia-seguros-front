<template>
  <v-container fluid>
      <!-- loader skeleton -->
      <v-skeleton-loader
        v-if="isLoading"
        type="table"
      >
      </v-skeleton-loader>
      <!-- ilustracion por si no hay datos -->
      <v-card 
        min-height="320"
        min-width="320"
        max-height="640"
        max-width="640"
        class="mx-auto my-auto"
        v-if="!isLoading && dataTable.length === 0"
      >
      <v-row justify="center">
        <v-img
          src="/src/assets/noData.svg"
          width="480"
          height="480"
          aspect-ratio="16/9"
          alt="noData"
        >
        </v-img>
      </v-row>
        <v-card-title class="text-center my-5 pa-5">
          {{ $t('globalNoDataAvailable') }}
        </v-card-title>
      </v-card>
      <!-- tabla -->
      <v-data-table
       v-if="!isLoading && dataTable.length > 0"
       :headers="headers"
       :items="dataTable"
       item-key="id"
      >
      </v-data-table>
    </v-container>
  <!-- snackbar para capturar error e informar al usuario -->
  <v-snackbar
    v-model="isSnackbarOn"
    timeout="2000"
    color="error"
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
    {{ snackBarMsg }}
  </v-snackbar>
</template>

<script lang="ts" setup>
// vue y api service
import { ref, onMounted } from 'vue';
import apiService from '@/services/apiService';
// i18n
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

// data definition
const dataTable = ref<any[]>([]);
const isLoading = ref<boolean>(false);
  const headers = ref<any[]>([
    { title: t('globalId'), align: 'start', key: 'id' },
    { title: t('globalName'), align: 'start', key: 'nombre' },
]);
const isSnackbarOn = ref<boolean|undefined>(false);
const snackBarMsg = ref<string>('');
// traigo los datos de la peticion y filtro por ids de provincias validas segun lo planteado en el requerimiento
const validProvinces: any[] = ['02','58','94','82','14', '54'];
const fetchItems = async () => {
  try {
    isLoading.value = true;
    const response = await apiService.getItems();
    if (response) {
      const filteredReponse = response.provincias.filter((e: any) => validProvinces.includes(e.id))
      dataTable.value = filteredReponse;
    }
  } catch (error) {
    isSnackbarOn.value = true;
    snackBarMsg.value = (error as Error).message;
  } finally {
    isLoading.value = false;
  }
}

// traigo los datos al montar el componente
onMounted(() => {
  fetchItems();
});

</script>
  