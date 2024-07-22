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
            name: 'nuiLibrary',
            path: 'nui-library',
            component: () =>
              import('../views/projectViews/ProjectViewNuiLibrary.vue'),
          },
          {
            name: 'elise',
            path: 'elise',
            component: () =>
              import('../views/projectViews/ProjectViewElise.vue'),
          },
          {
            name: 'portfolio',
            path: 'portfolio',
            component: () =>
              import('../views/projectViews/ProjectViewPortfolio.vue'),
          },
          {
            name: 'feedencre',
            path: 'fee-d-encre',
            component: () =>
              import('../views/projectViews/ProjectViewFeedencre.vue'),
          },
          {
            name: 'mathsUnited',
            path: 'maths-united',
            component: () =>
              import('../views/projectViews/ProjectViewMathsUnited.vue'),
          },
          {
            name: 'logbook',
            path: 'logbook',
            component: () =>
              import('../views/projectViews/ProjectViewLogbook.vue'),
          },
          {
            name: 'sympathy',
            path: 'sympathy',
            component: () =>
              import('../views/projectViews/ProjectViewSympathy.vue'),
          },
          {
            name: 'yugiohCounter',
            path: 'yu-gi-oh-counter',
            component: () =>
              import('../views/projectViews/ProjectViewYugiohCounter.vue'),
          },
          {
            name: 'forSeason',
            path: 'for-season',
            component: () =>
              import('../views/projectViews/ProjectViewForSeason.vue'),
          },
          {
            name: 'remakeHome',
            path: 'remake-home',
            component: () =>
              import('../views/projectViews/ProjectViewRemakeHome.vue'),
          },
          {
            name: 'portailDeNotification',
            path: 'portail-de-notification',
            component: () =>
              import(
                '../views/projectViews/ProjectViewPortailDeNotification.vue'
              ),
          },
          {
            name: 'lgo2Alert',
            path: 'lgo2-alert',
            component: () =>
              import('../views/projectViews/ProjectViewLgo2Alert.vue'),
          },
          {
            name: 'pgAuchanDrive',
            path: 'pg-auchan-drive',
            component: () =>
              import('../views/projectViews/ProjectViewPgAuchanDrive.vue'),
          },
          {
            name: 'running',
            path: 'running',
            component: () =>
              import('../views/projectViews/ProjectViewRunning.vue'),
          },
          {
            name: 'comunity',
            path: 'comunity',
            component: () =>
              import('../views/projectViews/ProjectViewComunity.vue'),
          },
          {
            name: 'dsf',
            path: 'dsf',
            component: () => import('../views/projectViews/ProjectViewDsf.vue'),
          },
          {
            name: 'cameraConfiguration',
            path: 'camera-configuration',
            component: () =>
              import(
                '../views/projectViews/ProjectViewCameraConfiguration.vue'
              ),
          },
          {
            name: 'vpr',
            path: 'vpr',
            component: () => import('../views/projectViews/ProjectViewVpr.vue'),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/ErrorNotFoundView.vue'),
  },
];

export default routes;
