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
 <v-row justify="center"
 class="
 bg-grey-darken-3
 text-white
 py-8
 "
 >
  <v-col
    v-for="cardHelper in cardHelpers"
    :key="cardHelper"
    lg="6"
    md="6"
    sm="12"
    class="d-flex justify-center align-center"
    >
    <v-card
      variant="outlined"
      class="d-flex flex-column"
      :width="$vuetify.display.mobile ? '98%' : '90%'"
      height="260"
    >
      <div class="d-flex justify-center align-center my-auto">
        <v-icon
          class="mr-4"
          :size="$vuetify.display.mdAndDown ? '60' : '120'"
        > {{  cardHelper.icon }}
        </v-icon>
        <div>
          <div class="text-container">
            <v-card-title :class="$vuetify.display.mdAndDown ? 'mb-0 text-uppercase text-center text-break text-body-1' : 'mb-0 text-uppercase text-h5'">{{  cardHelper.text }}</v-card-title>
            <p :class="$vuetify.display.mdAndDown ? 'mb-0 text-uppercase text-body text-center text-break text-body-1' : 'mb-0 text-uppercase white-text text-h5'">{{  cardHelper.subText }}</p>
          </div>
        </div>
      </div>
    </v-card>
  </v-col>
 </v-row>
 <v-footer
    class="bg-secondary-darken-1"
  >
  <v-row class="text-center">
    <v-col cols="12">
      <p class="text-h5 text-uppercase text-center">Contacto</p>
      <v-divider opacity="10" thickness="5" length="120" color="white">
        <v-icon>mdi-email</v-icon>
      </v-divider>
      <p class="text-body-1 text-center">Cómunicate con nosotros</p>
      </v-col>
      <v-col
      cols="12"
      lg="6"
      md="6"
      sm="12"
      >
        <div class="d-flex flex justify-start align-center">
          <div class="mx-2">
            <v-icon>mdi-map-marker</v-icon>
          </div>
          <div class="d-flex flex-column align-end">
            <p>{{ $t('globalAdress') }}</p>
            <p> {{ $t('globalAddressLocation') }}</p>
            <p> {{ $t('globalCityLocation') }}</p>
          </div>
        </div>
      </v-col>
      <v-col
      cols="12"
      lg="6"
      md="6"
      sm="12"
      >
        <div class="d-flex flex justify-start align-center">
          <div class="mx-2">
            <v-icon>mdi-email</v-icon>
          </div>
          <div class="d-flex flex-column align-end">
            <p>{{ $t('globalEmail') }}</p>
            <p>{{ $t('globalEmailAdress') }}</p>
          </div>
        </div>
      </v-col>
      <v-col
      cols="12"
      lg="6"
      md="6"
      sm="12"
      >
        <div class="d-flex flex justify-start align-center">
          <div class="mx-2">
            <v-icon>mdi-cellphone</v-icon>
          </div>
          <div class="d-flex flex-column align-end">
            <p>{{ $t('globalPhones') }}</p>
            <p>{{ $t('globalPhoneOption1') }}</p>
            <p>{{ $t('globalPhoneOption2') }}</p>
          </div>
        </div>
      </v-col>
      <v-col
      cols="12"
      lg="6"
      md="6"
      sm="12"
      >
        <div class="d-flex flex justify-start align-center">
          <div class="mx-2">
            <v-icon>mdi-clock</v-icon>

          </div>
          <div class="d-flex flex-column align-end">
            <p>{{ $t('globalHourTimes') }}</p>
            <p>{{ $t('globalAttentionHourTimes') }}</p>
            <p>{{ $t('globalEmergenciesAttention') }}</p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="text-center">
        <div>
          {{ new Date().getFullYear() }} — <strong>Provincia seguros</strong>
        </div>
      </v-col>
    </v-row>
  </v-footer>
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
    icon: 'mdi-account-credit-card',
    text: t('globalPaymentWays'),
    subText: t('globalPaymentWaysSubText')
  },
  {
    icon: 'mdi-car-back',
    text: t('globalAccidents'),
    subText: t('globalAccidentsSubText')
  },
  {
    icon: 'mdi-handshake',
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
  