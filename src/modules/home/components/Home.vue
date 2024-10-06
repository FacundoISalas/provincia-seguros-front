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
      width="100vw"
      height="100vh"
    >
    <v-img
      height="100%"
      width="100%"
      :src="slide.src"
      class="align-center text-white"
      cover
    >
      <div class="d-flex justify-start imgTextContainer text-wrap">
        <v-card
          color="secondary"
          class="d-flex flex-column justify-center"
          flat
         >
          <v-card-title
          class="textBreak text-h6 text-uppercase text-white"
          >
            {{ slide.text }}
          </v-card-title>
          <p 
            class="textBreak pa-2 mx-2 text-white"
            v-if="slide.subText"
          >
            {{  `${slide.subText}.` }}
          </p>
          <v-card-actions
            v-if="slide.actionTextPrimary || slide.actionTextSecondary"
            class="my-2 mx-2 d-flex flex-column justify-start align-start"
            >
            <v-btn
             v-if="slide.actionTextPrimary"
             color="secondary--text bg-primary"
             :block="$vuetify.display.mobile"
            >
              {{ slide.actionTextPrimary }}
              <v-icon
                v-if="slide.actionPrimaryIcon"
                color="secondary"
                size="28"
              >
                {{  slide.actionPrimaryIcon }}
              </v-icon>
            </v-btn>
            <v-btn
              v-if="slide.actionTextSecondary"
              color="secondary--text bg-primary"
              :block="$vuetify.display.mobile"
            >
              {{ slide.actionTextSecondary}}
              <v-icon
                v-if="slide.actionSecondaryIcon"
                color="secondary"
                size="28"
              >
                {{  slide.actionSecondaryIcon }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-img>
    </v-card>
    <div>{{  slide  }}</div>
    </v-carousel-item>
  </v-carousel>
  <v-card
  width="100vw"
  height="20vh"
  color="secondary-darken-1"
  flat
>
  <div class="d-flex justify-center align-center fill-height">
    <v-card-title class="text-center text-h4 text-uppercase d-flex align-center">
        <v-icon
        size="36"
        class="mr-2"
        >
        mdi-phone
      </v-icon>
      <a href="tel:0810-222-2444" class="noDecoration">
        0810-222-2444
      </a>
    </v-card-title>
  </div>
</v-card>
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
    actionPrimaryIcon: null,
    actionTextSecondary: null,
    actionSecondaryIcon: null,
  },
  {
    src: '/src/assets/images/appPhone.jpg',
    text: t('globalDownloadAppImgText'),
    subText: t('globalDownloadAppImgSubText'),
    actionTextPrimary: t('globalDownloadPlayStore'),
    actionPrimaryIcon: 'mdi-play',
    actionTextSecondary: t('globalDownloadAppStore'),
    actionSecondaryIcon: 'mdi-apple'
  },
  {
    src: '/src/assets/images/laptop.jpg',
    text: t('globalNewSiteImgText'),
    subText: t('globalNewSiteImgSubText'),
    actionTextPrimary: t('globalClikHere'),
    actionPrimaryIcon: null,
    actionTextSecondary: null,
    actionSecondaryIcon: null,
  },
]);
const cardHelpers = ref<any[]>([
  {
    icon: 'mdi-account-group',
    text: t('globalCustomers'),
    subText: t('globalCustomersSubText')
  },
  {
    icon: 'mdi-car-back',
    text: t('globalAccidents'),
    subText: t('globalAccidentsSubText')
  },
  {
    icon: 'mdi-account-credit-card-',
    text: t('globalPaymentWays'),
    subText: t('globalPaymentWaysSubText')
  },
  {
    icon: 'mdi-handhsake',
    text: t('globalSalesChannels'),
    subText: t('globalSalesChannelsSubText')
  },
]);
onMounted(() => {
  if (route.query && route.query.loginFirstTime) {
    isSnackbarOn.value = true;
  }
});
</script>
<style scoped>
.noDecoration {
  color: inherit;
  text-decoration: none !important;
}
 .imgTextContainer {
  display: flex;
  position: absolute;
  top: 68%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
  max-width: 80%;
}
.textBreak {
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  text-align: left;
}
</style>
  