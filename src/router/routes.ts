import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/TheLayout.vue'),
    children: [
      {
        name: 'home',
        path: '',
        component: () => import('../views/HomeView.vue'),
      },
      {
        name: 'skills',
        path: '/skills',
        props: true,
        component: () => import('../views/SkillsView.vue'),
      },
      {
        name: 'projectsView',
        path: '/projects',
        component: () => import('../views/ProjectsViews.vue'),
        children: [
          {
            name: 'projects',
            path: '',
            component: () => import('../views/ProjectsView.vue'),
          },
          {
            path: '/:pathMatch(.*)*',
            component: () => import('../views/LoadingRouteView.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/ErrorNotFoundView.vue'),
  },
  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
