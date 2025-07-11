<template>
  <section-projects-template v-if="project" :project>
    <component :is="projectsDetails[project.name]" :key="project.name" />
  </section-projects-template>
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed, type Component } from 'vue';
import { useRoute } from 'vue-router';

import SectionProjectsTemplate from '../components/template/SectionProjectsTemplate.vue';
const SectionProjectsDetailFalloutJdr = defineAsyncComponent(
  () => import('../components/detail/SectionProjectsDetailFalloutJdr.vue'),
);

import { useProjectsStore } from '../stores/useProjectsStore';

import type { Project } from '../models/interfaces/projects';

const route = useRoute();

const projectStore = useProjectsStore();

const projectsDetails: Record<string, Component> = {
  falloutJdr: SectionProjectsDetailFalloutJdr,
};

const project = computed<Project | null>(() => {
  if (projectStore.projects.length === 0) return null;

  return projectStore.projects.filter(
    (project: Project) => project.name === route.name,
  )[0];
});
</script>
