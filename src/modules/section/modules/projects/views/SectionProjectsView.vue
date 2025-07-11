<template>
  <q-page class="projects-view">
    <section-projects />
  </q-page>
</template>

<script setup>
import SectionProjects from '../components/SectionProjects.vue';
</script>

<style lang="scss">
.projects-view {
  .section-projects-list {
    .list {
      @media (max-width: $breakpoint-md-min) {
        height: calc(100vh - 320px);
        overflow: auto;
      }
    }
  }
}
</style>
