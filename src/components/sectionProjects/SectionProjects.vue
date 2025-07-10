<template>
  <div class="section-project flex justify-center">
    <div class="col-8 column">
      <section-header
        :title="t('projects.title')"
        :subtitle="t('projects.subtitle')"
      />
      <section-projects-list :navigate-from-home="navigateFromHome" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import SectionHeader from '../common/SectionHeader.vue';
import SectionProjectsList from '@/components/sectionProjects/SectionProjectsList.vue';

const { t } = useI18n();

interface Props {
  navigateFromHome: boolean;
}

defineProps<Props>();
</script>

<style lang="scss">
.section-project {
  .col-8 {
    width: 80%;

    @media (max-width: $breakpoint-md-min) {
      width: 90%;
    }
  }
}
</style>
