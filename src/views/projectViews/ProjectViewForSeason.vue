<template>
  <project-template :project="project"></project-template>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import ProjectTemplate from '@/components/projectTemplate/ProjectTemplate.vue';
import { useProjectsStore } from 'stores/useProjectsStore';
import { Project } from 'src/models/interfaces/projects';

const projectStore = useProjectsStore();

const project = computed(() => {
  return projectStore.projects.filter(
    (project: Project) => project.name === 'forSeason'
  )[0];
});
</script>
