<template>
  <div class="section-home-welcome q-px-lg">
    <section-home-welcome-text />
    <section-home-welcome-link />
  </div>
</template>

<script setup lang="ts">
import SectionHomeWelcomeText from '@/components/sectionHome/sectionHomeWelcome/SectionHomeWelcomeText.vue';
import SectionHomeWelcomeLink from '@/components/sectionHome/sectionHomeWelcome/SectionHomeWelcomeLink.vue';
</script>

<style lang="scss">
.section-home-welcome {
  width: -webkit-fill-available;
}
</style>