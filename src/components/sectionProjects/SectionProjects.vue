<template>
  <div class="section-project flex justify-center">
    <div class="col-8 column">
      <div class="text-center flex column no-wrap">
        <h3 class="q-mb-md text-primary">Projets</h3>
        <span class="text-grey text-subtitle1">Expérience professionnel</span>
        <q-separator class="q-my-md" inset />
      </div>
      <section-projects-list :navigate-from-home="navigateFromHome" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionProjectsList from '@/components/sectionProjects/SectionProjectsList.vue';

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
