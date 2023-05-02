<template>
  <div class="section-home row" :style="{ backgroundImage: `url(${backgroundImageProfil})` }">
    <div
      class="col-xs-12 col-md-6 flex flex-center"
      :style="{ backgroundImage: `url(${backgroundImageProfil2})` }"
    >
      <section-home-profil />
    </div>
    <div
      class="col-xs-12 col-md-6 flex flex-center"
      :style="{ backgroundImage: `url(${backgroundImageProfil2})` }"
    >
      <section-home-welcome ref="homeWelcome" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionHomeWelcome from '@/components/sectionHome/sectionHomeWelcome/SectionHomeWelcome.vue';
import SectionHomeProfil from '@/components/sectionHome/SectionHomeProfil.vue';

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

const backgroundImageProfil: URL = new URL(
  'http://www.ivang-design.com/svg-load/parallax/parallax-01.png',
  import.meta.url
);
const backgroundImageProfil2: URL = new URL(
  'http://www.ivang-design.com/svg-load/parallax/parallax-0.png',
  import.meta.url
);
</script>

<style lang="scss">
.section-home {
  @media (min-width: $breakpoint-sm-min) {
    height: auto;
  }

  @media (min-width: $breakpoint-md-min) {
    height: calc(100vh - 50px) !important;
  }
}
</style>