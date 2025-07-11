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
        name: 'skills',
        path: '/skills',
        props: true,
        component: () =>
          import(
            '../modules/section/modules/skills/views/SectionSkillsView.vue'
          ),
      },
      {
        name: 'about',
        path: '/about',
        component: () =>
          import('../modules/section/modules/about/views/SectionAboutView.vue'),
      },
      {
        name: 'projectsView',
        path: '/projects',
        component: () =>
          import(
            '../modules/section/modules/projects/views/SectionProjectsViews.vue'
          ),
        children: [
          {
            name: 'projects',
            path: '',
            component: () =>
              import(
                '../modules/section/modules/projects/views/SectionProjectsView.vue'
              ),
          },
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
