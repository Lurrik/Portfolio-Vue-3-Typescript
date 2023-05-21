<template>
  <div class="section-experience q-px-lg">
    <div class="flex column no-wrap">
      <h3 class="q-mt-xl q-mb-md">
        <strong class="text-primary">Expériences</strong>
      </h3>
      <span class="text-grey text-subtitle1">Expérience professionnel</span>
      <q-separator class="q-my-md" inset />
    </div>
    <section-experience-list />
  </div>
</template>

<script setup lang="ts">
import SectionExperienceList from '@/components/sectionExperience/SectionExperienceList.vue';
</script>

  <style lang="scss">
.section-experience {
  @media (min-width: $breakpoint-sm-min) {
    height: auto;
  }

  @media (min-width: $breakpoint-md-min) {
    min-height: calc(100vh - 50px) !important;
  }
}
</style>