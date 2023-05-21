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
import pictureProfil from '@/assets/general/photo.png';
import backgroundProfil from '@/assets/general/mountain.jpg';
</script>

<style lang="scss">
@use '@/css/quasar.variables.scss';

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
    border: solid 2px $primary;

    @media (min-width: $breakpoint-sm-min) {
      border: solid 10px $primary;
    }
  }
}
</style>