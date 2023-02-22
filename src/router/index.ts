import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/works',
      name: 'Works',
      component: () => import('@/views/WorksCollection.vue'),
    },
  ],
});

export default router;
