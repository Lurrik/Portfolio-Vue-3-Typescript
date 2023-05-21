<template>
  <div class="section-experience-list flex justify-center">
    <q-list class="experience-list">
      <section-experience-list-item
        v-for="(experience, index) in json.experiences"
        :key="index"
        :experience="experience"
      />
    </q-list>
  </div>
</template>

<script setup lang="ts">
import SectionExperienceListItem from '@/components/sectionExperience/SectionExperienceListItem.vue';

import json from './sectionExperience.json';
</script>

<style lang="scss">
.section-experience-list {
  .experience-list {
    width: 100%;
  }

  .q-tab__content {
    display: flex;
    flex-wrap: nowrap;
  }
}
</style>