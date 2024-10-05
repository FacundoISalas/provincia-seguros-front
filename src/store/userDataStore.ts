// store con datos del usuario

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserData = defineStore('userData', () => {
  // data
  const userName = ref<string>('pepitow');
  // fakeData para login
  const validUserName = ref<string>('gongalezGarcia25');
  const validPassword = ref<string>('segurosGG');
  // boolean valid fake login
  const isUserAuth = ref<Boolean>(false);
  // computed funciona simil a getters en vuex
  const getUserName = computed(() => userName.value)
  // functions funciona simil a actions en vuex
  
  // funcion para guardar los datos del usuario
  function setUserData(user: string,) {
    userName.value = user;
    isUserAuth.value = true;
  }
  
  return { userName, validUserName, validPassword, isUserAuth, getUserName, setUserData };
},
{
  persist: true,
});