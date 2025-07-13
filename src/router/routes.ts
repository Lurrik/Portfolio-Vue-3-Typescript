import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/TheLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () =>
          import('../modules/section/modules/home/views/SectionHomeView.vue'),
      },
      {
        name: 'projectsView',
        path: '/projects',
        children: [
          {
            path: '/:pathMatch(.*)*',
            component: () => import('../core/views/LoadingRouteView.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../core/views/ErrorNotFoundView.vue'),
  },
];

export default routes;
