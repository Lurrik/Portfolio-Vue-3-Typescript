<template>
  <q-parallax class="picture-profil q-pa-md q-mt-md" :src="backgroundProfil">
    <q-img
      class="picture-profil bg-transparent shadow-10 border-primary"
      :src="pictureProfil"
      fit="contain"
    />
  </q-parallax>
</template>

<script setup lang="ts">
const pictureProfil: URL = new URL('/src/assets/photo.png', import.meta.url);
const backgroundProfil: URL = new URL(
  '/src/assets/mountain.jpg',
  import.meta.url
);
</script>

<style lang="scss">
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

  &.border-primary {
    border: solid 2px #9f7e5a;

    @media (min-width: $breakpoint-sm-min) {
      border: solid 10px #9f7e5a;
    }
  }
}
</style>