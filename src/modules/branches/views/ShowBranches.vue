<template>
  <v-container fluid>
    <v-card color="secondary-darken-1" rounded="rounded-lg">
      <v-toolbar flat density="compact" color="secondary">
        <v-toolbar-title> {{ $t('globalBranchesList') }} </v-toolbar-title>
      </v-toolbar>
      <v-container fluid>
        <BranchesTable/>
      </v-container>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import BranchesTable from '@/modules/branches/components/BranchesTable.vue';
</script>
  