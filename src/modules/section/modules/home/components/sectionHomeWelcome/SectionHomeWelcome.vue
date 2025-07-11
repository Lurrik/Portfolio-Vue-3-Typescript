<template>
  <div class="section-home-welcome q-px-xl q-pb-xl">
    <section-home-welcome-text />
    <section-home-welcome-link />
  </div>
</template>

<script setup lang="ts">
import SectionHomeWelcomeText from './SectionHomeWelcomeText.vue';
import SectionHomeWelcomeLink from './SectionHomeWelcomeLink.vue';
</script>

<style lang="scss">
.section-home-welcome {
  width: -webkit-fill-available;
}
</style>
