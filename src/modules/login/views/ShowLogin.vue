<template>
  <v-responsive class="fill-height fill-width d-flex align-center justify-center gradient-background">
    <v-container fluid>
      <Login/>
    </v-container>
  </v-responsive>
</template>

<script lang="ts" setup>
import Login from '@/modules/login/components/Login.vue';
</script>
<style scoped="css">
.gradient-background {
  background: linear-gradient(126deg,#1a2b5d,#5a72ba,#36ba70);
  background-size: 180% 180%;
  animation: gradient-animation 18s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
  