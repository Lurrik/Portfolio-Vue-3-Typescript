<template>
  <div class="section-home row" :style="{ backgroundImage: `url(${backgroundImageProfil})` }">
    <div
      class="col-xs-12 col-md-6 flex flex-center"
      :style="{ backgroundImage: `url(${backgroundImageProfil2})` }"
    >
      <q-parallax class="picture-profil q-pa-md" :src="backgroundProfil">
        <q-img
          class="picture-profil bg-transparent shadow-10 border-grey"
          :src="pictureProfil"
          fit="contain"
        />
      </q-parallax>
    </div>
    <div
      class="col-xs-12 col-md-6 flex flex-center"
      :style="{ backgroundImage: `url(${backgroundImageProfil2})` }"
    >
      <section-home-welcome />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHomeWelcome from '@/components/sectionHome/sectionHomeWelcome/SectionHomeWelcome.vue';

const pictureProfil: URL = new URL('/src/assets/photo.png', import.meta.url);
const backgroundProfil: URL = new URL(
  '/src/assets/mountain.jpg',
  import.meta.url
);
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
  height: calc(100vh - 50px);
  // background-repeat: no-repeat;
  // background-size: 100% 100%;

  .picture-profil {
    width: 30vh;
    height: 30vh !important;
    border-radius: 50%;

    @media (min-width: $breakpoint-sm-min) {
      width: 50vh;
      height: 50vh !important;
    }
    @media (min-width: $breakpoint-md-min) {
      width: 50vh;
      height: 50vh !important;
    }
    @media (min-width: $breakpoint-lg-min) {
      width: 70vh;
      height: 70vh !important;
    }

    &.border-grey {
      border: solid 2px grey;

      @media (min-width: $breakpoint-sm-min) {
        border: solid 10px grey;
      }
    }
  }
}
</style>