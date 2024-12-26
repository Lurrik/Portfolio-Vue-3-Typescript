<template>
  <q-layout class="portfolio" :view="computeViewConfig">
    <the-header />

    <the-footer-navigation
      v-if="isScreenMobile"
      class="footer-buttons small-screen-only"
    />

    <q-page-container class="page-container">
      <BackgroundGradient />
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive :include="['HomeView']">
              <component :is="Component" no-animation></component>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
      <the-footer class="large-screen-only" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
import { useProjectsStore } from 'stores/useProjectsStore';
import { useSkillsStore } from 'stores/useSkillsStore';

import TheHeader from '@/layouts/theHeader/TheHeader.vue';
import TheFooter from '@/layouts/theFooter/TheFooter.vue';
import TheFooterNavigation from '@/layouts/theFooter/TheFooterNavigation.vue';
import BackgroundGradient from '@/components/backgroundGradient/BackgroundGradient.vue';

import type { Project } from 'src/models/interfaces/projects';

const $q = useQuasar();
const router = useRouter();
const projectStore = useProjectsStore();
const skillsStore = useSkillsStore();

await projectStore.getProjects();
await skillsStore.getSkills();
await generateRoute();

const computeViewConfig = computed<string>(() => {
  return isScreenMobile.value ? 'lHh Lpr fFf' : 'lHh Lpr lFf';
});

const isScreenMobile = computed<boolean>(() => {
  return $q.screen.xs || $q.screen.sm;
});

async function generateRoute(): Promise<void> {
  projectStore.projects.forEach((project: Project) => {
    router.addRoute('projectsView', {
      name: project.name,
      path: project.name,
      component: () => import('../views/ProjectDynamicView.vue'),
    });
  });
}
</script>

<style lang="scss">
.portfolio {
  .q-layout__section--marginal {
    &.dark-mode {
      background-color: var(--q-dark-page);
    }
  }

  .page-container {
    overflow: hidden;
  }
}
</style>
