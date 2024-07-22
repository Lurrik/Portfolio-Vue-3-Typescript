<template>
  <q-parallax class="picture-profil q-pa-md q-mt-md">
    <q-img
      class="picture-profil bg-transparent shadow-10 border-primary"
      src="https://erickgolos.com/images/home/photo.png"
      fit="contain"
    />
  </q-parallax>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@use '@/css/quasar.variables.scss';

.picture-profil {
  width: 25vh;
  height: 25vh !important;
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
    border: solid 2px var(--q-primary);

    @media (min-width: $breakpoint-sm-min) {
      border: solid 10px var(--q-primary);
    }
  }
}
</style>
