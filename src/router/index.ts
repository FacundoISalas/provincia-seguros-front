import { createRouter, createWebHistory } from 'vue-router/auto';
import routes from '@/router/routes';
import { useUserData } from '@/store/userDataStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// navigation guard para home '/'
router.beforeEach((to, from, next) => {
  const userDataStore = useUserData();
  const isAuthenticated = userDataStore.getIsUserAuth;
  // si el usuario esta autenticado e ingresa a login por algun motivo
  // redirecciona a home
  if (to.name === 'Login' && isAuthenticated) {
    return next({ name: 'Home' });
  }
  if (to.meta.requiresAuth && !isAuthenticated) {
    // si el usuario no esta autenticado redirige a login
    return next({ name: 'Login' });
  }
  // caso contrario va a la proxima ruta
  next();
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  console.log('err', err);
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router