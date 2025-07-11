<template>
  <div class="section-home row">
    <div
      class="section-home-profil-container col-xs-12 col-md-6 flex flex-center"
    >
      <section-home-profil />
    </div>
    <div
      class="section-home-profil-container col-xs-12 col-md-6 flex flex-center"
    >
      <section-home-welcome ref="homeWelcome" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import SectionHomeWelcome from './sectionHomeWelcome/SectionHomeWelcome.vue';
import SectionHomeProfil from './SectionHomeProfil.vue';

import { useMotion } from '@vueuse/motion';

const homeWelcome = ref<HTMLElement>();

useMotion(homeWelcome, {
  initial: {
    opacity: 0,
    x: 1000,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 500,
    },
  },
});
</script>

<style lang="scss">
.section-home {
  background-image: url(https://erickgolos.com/images/home/background-1.png);

  @media (min-width: $breakpoint-sm-min) {
    height: auto;
  }

  @media (min-width: $breakpoint-md-min) {
    height: calc(100vh - 50px) !important;
  }

  .section-home-profil-container {
    background-image: url(https://erickgolos.com/images/home/background-0.png);
  }

  .section-home-profil-container {
    background-image: url(https://erickgolos.com/images/home/background-0.png);
  }

  .gradient-left {
    left: 0;
    top: 0;
  }

  .gradient-right {
    right: 0;
    top: 0;
  }
}
</style>
