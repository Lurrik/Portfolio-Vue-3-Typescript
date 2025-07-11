<template>
  <div class="section-projects-list">
    <q-tabs
      v-model="tab"
      class="text-teal q-pb-md"
      @update:model-value="showMore = false"
    >
      <q-tab
        class="text-capitalize text-primary"
        name="all"
        :label="t('projects.tabs.all')"
      />
      <q-tab
        class="text-capitalize text-primary"
        name="job"
        :label="t('projects.tabs.professional')"
      />
      <q-tab
        class="text-capitalize text-primary"
        name="personal"
        :label="t('projects.tabs.personal')"
      />
    </q-tabs>
    <div
      v-if="getProjects.length"
      id="sectionProjectsList"
      class="list row justify-center q-col-gutter-md"
    >
      <section-projects-list-item
        v-for="(_, index) in projectShownCount"
        :key="index"
        :name="getProjects[index].name"
        :label="getProjects[index].label"
        :category="getProjects[index].category"
        :navigate-from-home="navigateFromHome"
        :offset-left-parent="offsetLeftParent"
        :offset-top-parent="offsetTopParent"
        @select-project-name="selectProjectName = $event"
      />
      <div class="row q-pt-md full-width justify-center">
        <q-btn
          v-if="!showMore"
          :label="t('projects.showMore')"
          color="primary"
          @click="showMore = true"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onActivated, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useWindowSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';

import SectionProjectsListItem from './SectionProjectsListItem.vue';

import { useProjectsStore } from '../stores/useProjectsStore';

import type { Project } from '@/modules/section/modules/projects/models/interfaces/projects';

interface Props {
  navigateFromHome: boolean;
}

defineProps<Props>();

const router = useRouter();
const { width } = useWindowSize();
const { t } = useI18n();

const projectStore = useProjectsStore();

const tab = ref<string>('all');
const selectProjectName = ref<string>('');
const showMore = ref<boolean>(false);

const offsetTopParent = ref<number | undefined>(-1);
const offsetLeftParent = ref<number | undefined>(-1);

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

function setOffset(): void {
  const div = document.getElementById('sectionProjectsList');

  const parent = div?.offsetParent;
  offsetTopParent.value = parent?.offsetTop;
  offsetLeftParent.value = parent?.offsetLeft;
}

watch(
  () => width.value,
  () => {
    setOffset();
  },
);

onActivated(() => {
  if (selectProjectName.value) router.push(`#${selectProjectName.value}`);
});

onMounted(() => {
  setOffset();
});
</script>
