<template>
  <q-layout class="portfolio" :view="computeViewConfig">
    <the-header />

    <the-footer-navigation
      v-if="isScreenMobile && route.name === 'home'"
      class="footer-buttons small-screen-only"
    />

    <q-page-container class="page-container">
      <BackgroundGradient />
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive :include="['SectionHomeView']">
              <component :is="Component" />
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
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

import TheHeader from './theHeader/TheHeader.vue';
import TheFooter from './theFooter/TheFooter.vue';
import TheFooterNavigation from './theFooter/TheFooterNavigation.vue';
import BackgroundGradient from '@/core/components/backgroundGradient/BackgroundGradient.vue';

import { useProjectsStore } from '@/modules/section/modules/projects/stores/useProjectsStore';
import { useSkillsStore } from '@/modules/section/modules/skills/stores/useSkillsStore';

import type { Project } from '@/modules/section/modules/projects/models/interfaces/projects';

const $q = useQuasar();
const route = useRoute();
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
      component: () =>
        import(
          '../modules/section/modules/projects/views/SectionProjectsDynamicView.vue'
        ),
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
