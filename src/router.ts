import { createRouter, createWebHistory } from 'vue-router';
import { useErrorStore } from '@/composables/error-store';

import HomeView from './views/Home.vue';
import AboutView from './views/About.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to) => {
  console.warn('TO', to);
  const { error } = useErrorStore();
  error.value = undefined;
});
export default router;
