<template>
  <v-radio-group
    inline
    :label="$t('globalLanguage')"
    append-icon="mdi-translate"
    v-model="selectedLanguage"
  >
    <v-radio :label="$t('globalEs')" :value="t('globalEs')"></v-radio>
    <v-radio :label="t('globalEn')" :value="t('globalEn')"></v-radio>
  </v-radio-group>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCommonAppStore } from '@/store/commonAppStore';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const commonAppStore = useCommonAppStore();
type Locale = 'es' | 'en';

const selectedLanguage = ref<Locale>(commonAppStore.locale);
// watch 
watch(selectedLanguage, (newLocale) => {
  commonAppStore.setLocaleI18n(newLocale);
});
</script>