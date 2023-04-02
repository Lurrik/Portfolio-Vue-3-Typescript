<template>
  <div class="section-about row flex flex-center">
    <div class="col-xs-12 col-md-7 flex flex-center">
      <section-about-description />
    </div>
    <div
      class="col-xs-12 col-md-5 flex flex-center"
      :style="{ backgroundImage: `url(${backgroundImageProfil})` }"
    >
      <section-about-photo />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionAboutPhoto from '@/components/sectionAbout/SectionAboutPhoto.vue';
import SectionAboutDescription from '@/components/sectionAbout/SectionAboutDescription.vue';

const backgroundImageProfil: URL = new URL(
  'http://www.ivang-design.com/svg-load/parallax/parallax-01.png',
  import.meta.url
);
</script>

<style lang="scss">
.section-about {
  @media (min-width: $breakpoint-sm-min) {
    height: auto;
  }

  @media (min-width: $breakpoint-md-min) {
    height: calc(100vh - 50px) !important;
  }
}
</style>