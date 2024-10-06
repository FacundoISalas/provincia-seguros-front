<template>
  <v-app>
    <v-main>
      <v-app-bar
        v-if="userDataStore.getIsUserAuth"
        elevation="2" 
      >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
      <router-link to="/">
        <v-img
        src="https://www.provinciaseguros.com.ar/wp-content/uploads/2017/05/pseguros2-1.png"
        alt="Provincia seguros"
        width="160"
        height="160"
        aspect-ratio="16/9"
        >
        </v-img>
      </router-link>
      </v-app-bar-title>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path ? item.path : ''"
          >
          <p class="text-body-1"> {{ item.title }} </p>
          <v-icon
            color="secondary"
            size="28"
            class="ml-1"
          >
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-menu
        v-model="isUserMenuOn"
      >
        <template v-slot:activator="{ props }">
          <div class="d-flex justify-space-between align-center mx-2 px-1">
            <v-btn
              color="secondary"
              v-bind="props"
              icon="mdi-account"
              small
              >
            </v-btn>
            <p class="font-size-1 font-weight-bold">
              {{ userName }}
            </p>
          </div>
        </template>
      </v-menu>
    </v-app-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useUserData } from '@/store/userDataStore';

// interfaces
interface menuItemsInterface {
  title: string;
  path?: string;
  icon?: string;
}
const userDataStore = useUserData();

// data
const userName = ref<string>(userDataStore.getUserName);
const isUserMenuOn = ref<boolean|undefined>(false);
const menuItems = ref<menuItemsInterface[]>([
  {
    title: 'Seguros personas',
  },
  {
    title: 'Seguros Empresas',
  },
  {
    title: 'Clientas/es',
  },
  {
    title: 'PAS',
  },
  {
    title: 'Proveedoreas/es',
  },
  {
    title: 'Quiénes somos',
  },
  {
    title: 'Sucursales',
    path: '/sucursales',
    icon: 'mdi-bank-circle-outline'
  },
]
);
</script>
