import { createRouter, createWebHistory } from 'vue-router';
import { useWorksStore } from '@/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' },
      meta: {
        toolbar: false,
      },
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/HomePage.vue'),
      meta: {
        toolbar: false,
      },
    },
    {
      path: '/works',
      name: 'Works',
      component: () => import('@/views/WorksCollection.vue'),
      meta: {
        toolbar: true,
        title: 'Works',
      },
    },
    {
      path: '/works/:workId',
      name: 'WorkView',
      component: () => import('@/views/WorkView.vue'),
      meta: {
        toolbar: true,
        isWorkView: true,
      },
    },
  ],
});

router.afterEach((to) => {
  let subTitle = '';
  useWorksStore().curWork = undefined;
  if (to.meta.isWorkView) {
    useWorksStore().curWork = useWorksStore().workList[to.params.workId as string];
    subTitle = ' | ' + useWorksStore().curWork?.label;
  } else if (to.meta.title) {
    subTitle = ' | ' + to.meta.title;
  }
  document.title = import.meta.env.VITE_SITE_NAME + subTitle;

  return;
});

export default router;
