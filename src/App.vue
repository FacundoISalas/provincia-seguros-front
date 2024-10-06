<template>
  <v-app>
    <v-layout>
    <v-main>
      <v-app-bar
        v-if="userDataStore.getIsUserAuth"
        elevation="2" 
      >
      <template v-slot:prepend>
        <v-app-bar-nav-icon
        v-if="$vuetify.display.mobile"
        @click.stop="drawer = !drawer"
        >
        </v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
      <router-link to="/">
        <v-img
        src="https://www.provinciaseguros.com.ar/wp-content/uploads/2017/05/pseguros2-1.png"
        alt="Provincia seguros"
        width="160"
        height="160"
        aspect-ratio="16/9"
        v-tooltip:start="$t('globalHome')"
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
          <div v-tooltip:bottom="$t('globalOptions')" class="d-flex justify-space-between align-center mx-2 px-1">
            <v-btn
              color="secondary"
              v-bind="props"
              icon="mdi-account"
              >
            </v-btn>
            <p class="font-size-1 font-weight-bold">
              {{ userName }}
            </p>
          </div>
        </template>
        <v-card>
          <v-card-text>
            <v-radio-group
              inline
              :label="$t('language')"
              append-icon="mdi-translate"
              v-model="selectedLanguage"
            >
              <v-radio :label="$t('globalEs')" :value="t('globalEs')"></v-radio>
              <v-radio :label="t('globalEn')" :value="t('globalEn')"></v-radio>
            </v-radio-group>
            <v-btn
              fab
              v-tooltip:bottom="$t('globalLogout')"
              class="my-2"
            >
              {{ $t('globalLogout') }}
              <v-icon
                color="secondary"
                class="ml-1"
              >
                mdi-logout
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
    >
      <v-list>
        <v-list-item
        :to="'/'"
        append-icon="mdi-home"
        base-color="secondary"
        >
          <v-list-item-title> <span style="color: black;">{{ $t('globalHome') }}</span></v-list-item-title>
        </v-list-item>
        <v-list-item v-for="item in menuItems"
        :key="item.title"
        :to="item.path ? item.path : ''"
        :append-icon="item.icon"
        base-color="secondary"
        >
          <v-list-item-title> <span style="color: black;">{{ item.title }}</span></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <router-view />
    </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useUserData } from '@/store/userDataStore';
import { useCommonAppStore } from '@/store/commonAppStore';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();


type Locale = 'es' | 'en';
// interfaces
interface menuItemsInterface {
  title: string;
  path?: string;
  icon?: string;
}
const userDataStore = useUserData();
const commonAppStore = useCommonAppStore();

// data
const userName = ref<string>(userDataStore.getUserName);
const isUserMenuOn = ref<boolean|undefined>(false);
const drawer = ref<boolean|undefined>(false);
const selectedLanguage = ref<Locale>(commonAppStore.locale);

const menuItems = ref<menuItemsInterface[]>([
  {
    title: t('globalPersonalInsurance'),
  },
  {
    title: t('globalCompanyInsurance'),
  },
  {
    title: t('globalCustomers'),
  },
  {
    title: t('globalPas'),
  },
  {
    title: t('globalProviders'),
  },
  {
    title: t('globalAboutUs'),
  },
  {
    title: t('globalBranches'),
    path: '/sucursales',
    icon: 'mdi-bank-circle-outline'
  },
]
);

// watch 
watch(selectedLanguage, (newLocale) => {
  commonAppStore.setLocaleI18n(newLocale);
  });
</script>