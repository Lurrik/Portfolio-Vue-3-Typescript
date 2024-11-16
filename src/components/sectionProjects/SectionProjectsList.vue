<template>
  <div class="section-projects-list">
    <q-tabs
      v-model="tab"
      class="text-teal q-pb-md"
      @update:model-value="showMore = false"
    >
      <q-tab class="text-capitalize text-primary" name="all" label="Tout" />
      <q-tab
        class="text-capitalize text-primary"
        name="personal"
        label="Personel"
      />
      <q-tab
        class="text-capitalize text-primary"
        name="job"
        label="Professionel"
      />
    </q-tabs>
    <div v-if="getProjects.length" class="list row justify-center gap-8">
      <section-projects-list-item
        v-for="(_, index) in projectShownCount"
        :key="index"
        :name="getProjects[index].name"
        :label="getProjects[index].label"
        :category="getProjects[index].category"
        :navigate-from-home="navigateFromHome"
        @select-project-name="selectProjectName = $event"
      />
      <div class="row q-pt-md full-width justify-center">
        <q-btn
          v-if="!showMore"
          label="Voir plus de projets"
          color="primary"
          @click="showMore = true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onActivated } from 'vue';
import { useRouter } from 'vue-router';

import SectionProjectsListItem from '@/components/sectionProjects/SectionProjectsListItem.vue';

import { useProjectsStore } from 'stores/useProjectsStore';
import { Project } from 'src/models/interfaces/projects';

interface Props {
  navigateFromHome: boolean;
}

defineProps<Props>();

const router = useRouter();
const projectStore = useProjectsStore();

const tab = ref<string>('all');
const selectProjectName = ref<string>('');
const showMore = ref<boolean>(false);

const getProjects = computed<Project[]>(() => {
  if (projectStore.projects.length === 0) return [];

  switch (tab.value) {
    case 'all':
      return projectStore.projects;
    case 'personal':
      return projectStore.getPersonalProject;
    case 'job':
      return projectStore.getJobProject;
    default:
      return [];
  }
});

const projectShownCount = computed<number>(() => {
  return showMore.value ? getProjects.value.length : 6;
});

onActivated(() => {
  if (selectProjectName.value) router.push(`#${selectProjectName.value}`);
});
</script>
