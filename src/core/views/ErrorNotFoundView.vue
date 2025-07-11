<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <BackgroundGradient />

    <div>
      <div class="text-primary" style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="primary"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import BackgroundGradient from '../components/backgroundGradient/BackgroundGradient.vue';

import { useProjectsStore } from '@/modules/section/modules/projects/stores/useProjectsStore';

import type { Project } from '@/modules/section/modules/projects/models/interfaces/projects';

const router = useRouter();
const projectStore = useProjectsStore();

async function generateRoute() {
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
