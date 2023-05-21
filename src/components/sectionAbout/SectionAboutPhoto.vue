<template>
  <q-parallax class="photo-about shadow-10" :src="backgroundProfil">
    <q-img
      class="photo-about bg-transparent shadow-10 border-primary"
      :src="pictureProfil"
      fit="contain"
    />
  </q-parallax>
</template>

<script setup lang="ts">
import pictureProfil from '@/assets/general/photo2.png';
import backgroundProfil from '@/assets/general/mountain.jpg';
</script>

<style lang="scss">
.photo-about {
  height: 80vh;
  max-width: 450px;
  border-radius: 16px 16px 0 0;
}
</style>