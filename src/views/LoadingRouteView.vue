<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <BackgroundGradientCenter
      class="absolute-full full-width full-height flex flex-center"
    />
    <div>
      <q-spinner-rings color="primary" size="200px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import BackgroundGradientCenter from '@/components/backgroundGradient/BackgroundGradientCenter.vue';

import { useRouter } from 'vue-router';
import { useProjectsStore } from 'stores/useProjectsStore';
import { Project } from 'src/models/interfaces/projects';

const router = useRouter();
const projectStore = useProjectsStore();

async function generateRoute() {
  projectStore.projects.forEach((project: Project) => {
    router.addRoute('projectsView', {
      name: project.name,
      path: project.name,
      component: () => import('../views/ProjectDynamicView.vue'),
    });
  });
}

async function setupRoutes() {
  const projectStore = useProjectsStore();
  await projectStore.getProjects();
  generateRoute();
}

await setupRoutes().then(() => {
  const currentPath = router.currentRoute.value.path.split('/');
  if (currentPath[1] === 'projects') {
    router.push({ name: currentPath[2] });
  }
});
</script>
