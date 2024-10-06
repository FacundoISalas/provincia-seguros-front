<template>
  <!-- carousel -->
  <v-carousel
    height="100vh"
    :continuous="true"
    cycle
    interval="6000"
    show-arrows="hover"
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
    <v-card
      width="100%"
      height="100%"
    >
    <v-img
      height="100%"
      width="100%"
      :src="slide.src"
      class="align-center text-white"
      cover
    >
    <div>
      <div class="d-flex justify-start imgTextContainer" style="">
        <v-card
          color="secondary"
         >
          <v-card-title>{{ slide.text }}</v-card-title>
          <v-card-subtitle> {{  slide.subText }}</v-card-subtitle>
        </v-card>
      </div>
    </div>
    </v-img>
    </v-card>
    <div>{{  slide  }}</div>
    </v-carousel-item>
  </v-carousel>
  <p>more content here</p>
  <p>more content here</p>
  <p>more content here</p>
  <p>more content here</p>
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const route = useRoute();

// data
const isSnackbarOn = ref<boolean|undefined>(false);
import { useUserData } from '@/store/userDataStore';
const userDataStore = useUserData();
const userName = computed(() => userDataStore.getUserName);
const slides = ref<any[]>([
  {
    src: '/src/assets/images/insuranceSearch.jpg',
    text: t('globalQuoteInsuranceImgText'),
    subText: null,
    actionTextPrimary: t('globalQuoteHere'),
    actionTextSecondary: null,
  },
  {
    src: '/src/assets/images/appPhone.jpg',
    text: t('globalDownloadAppImgText'),
    subText: t('globalDownloadAppImgSubText'),
    actionTextPrimary: t('globalDownloadPlayStore'),
    actionTextSecondary: t('globalDownloadAppStore'),
  },
  {
    src: '/src/assets/images/laptop.jpg',
    text: t('globalNewSiteImgText'),
    subText: t('globalNewSiteImgSubText'),
    actionTextPrimary: t('globalClikHere'),
    actionTextSecondary: null,
  },
]);
onMounted(() => {
  if (route.query && route.query.loginFirstTime) {
    isSnackbarOn.value = true;
  }
});
</script>
<style>
  .imgTextContainer {
    display: flex;
    margin-left: 5%;
  }
</style>
  