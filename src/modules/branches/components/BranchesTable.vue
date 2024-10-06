<template>
  <v-container fluid>
    <v-card-text>
      <v-skeleton-loader
        v-if="isLoading"
        type="card"
      >
      </v-skeleton-loader>
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
      <v-data-table
       v-if="!isLoading && dataTable.length > 0"
       :headers="headers"
       :items="dataTable"
       item-key="id"
      >
      </v-data-table>
    </v-card-text>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import apiService from '@/services/apiService';

const dataTable = ref<any[]>([]);
const isLoading = ref<boolean>(false);
const headers = ref<any[]>([
  { title: 'Id', align: 'start', key: 'id' },
  { title: 'Nombre', align: 'start', key: 'nombre' },
]);

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
    console.log('error occurred here', error);
  } finally {
    isLoading.value = false;
  }
}

// traigo los datos al montar el componente
onMounted(() => {
  fetchItems();
});

</script>
  