<template>
  <q-page class="skills-view">
    <section-skills :no-animation="noAnimation" />
  </q-page>
</template>

<script setup>
import SectionSkills from '@/components/sectionSkills/SectionSkills.vue';

defineProps({
  noAnimation: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.skills-view {
  .section-skills {
    .list {
      @media (max-width: $breakpoint-md-min) {
        height: calc(100vh - 255px);
        overflow: auto;
      }
    }
  }
}
</style>
