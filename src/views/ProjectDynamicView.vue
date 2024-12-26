<template>
  <project-template v-if="project" :project="project"></project-template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import ProjectTemplate from '@/components/projectTemplate/ProjectTemplate.vue';

import { useProjectsStore } from 'stores/useProjectsStore';

import type { Project } from 'src/models/interfaces/projects';

const route = useRoute();

const projectStore = useProjectsStore();

const project = computed<Project | null>(() => {
  if (projectStore.projects.length === 0) return null;

  return projectStore.projects.filter(
    (project: Project) => project.name === route.name,
  )[0];
});
</script>
