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
import { useRouter } from 'vue-router';

import BackgroundGradientCenter from '../components/backgroundGradient/BackgroundGradientCenter.vue';

import { useProjectsStore } from '@/modules/section/modules/projects/stores/useProjectsStore';

import type { Project } from '@/modules/section/modules/projects/models/interfaces/projects';

const router = useRouter();
const projectStore = useProjectsStore();

async function generateRoute(): Promise<void> {
  projectStore.projects.forEach((project: Project) => {
    router.addRoute('projectsView', {
      name: project.name,
      path: project.name,
      component: () =>
        import(
          '../../modules/section/modules/projects/views/SectionProjectsDynamicView.vue'
        ),
    });
  });
}

async function setupRoutes(): Promise<void> {
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
