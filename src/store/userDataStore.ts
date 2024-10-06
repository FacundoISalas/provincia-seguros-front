// store con datos del usuario

import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserData = defineStore('userData', () => {
  // data
  const userName = ref<string>('');
  // boolean valid fake login
  const isUserAuth = ref<boolean>(false);
  const isUserFirstTimeAuth = ref<boolean>(false);
  // computed funciona simil a getters en vuex
  const getUserName = computed(() => userName.value)
  const getIsUserAuth = computed(() => isUserAuth.value)
  const getIsUserFirstTimeAuth = computed(() => isUserFirstTimeAuth.value)
  // functions funciona simil a actions en vuex
  // funcion para guardar los datos del usuario
  function setUserData(user: string,) {
    userName.value = user;
    isUserAuth.value = true;
    isUserFirstTimeAuth.value = true;
    setTimeout(() => {
      isUserFirstTimeAuth.value = false;
    }, 5000);
  }
  // funcion para cerrar sesión
  function logout() {
    userName.value = '';
    isUserAuth.value = false;
    isUserFirstTimeAuth.value = false;
  }
  function clearFirstTimeAuth() {
    isUserFirstTimeAuth.value = false;
  }
  return {
    userName,
    isUserAuth,
    isUserFirstTimeAuth,
    getUserName,
    getIsUserFirstTimeAuth,
    getIsUserAuth,
    logout,
    clearFirstTimeAuth,
    setUserData
  };
},
{
  // persisto el state de pinia en localstorage para que no se pierda al refrescar la pagina
  persist: true,
});