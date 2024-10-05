import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/modules/home/views/ShowHome.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/modules/login/views/ShowLogin.vue'),
  },
  {
    path: '/sucursales',
    name: 'Sucursales',
    component: () => import('@/modules/branches/views/ShowBranches.vue'),
  },
];

export default routes;