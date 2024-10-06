<template>
  <v-responsive class="fill-height fill-width d-flex align-center justify-center">
    <v-container fluid>
      <BranchesTable/>
    </v-container>
  </v-responsive>
</template>

<script lang="ts" setup>
import BranchesTable from '@/modules/branches/components/BranchesTable.vue';
</script>
  