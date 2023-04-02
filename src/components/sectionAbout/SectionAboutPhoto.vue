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
const pictureProfil: URL = new URL('/src/assets/photo2.png', import.meta.url);

const backgroundProfil: URL = new URL(
  '/src/assets/mountain.jpg',
  import.meta.url
);
</script>

<style lang="scss">
.q-parallax__media {
  bottom: 200px;
}

.photo-about {
  height: 80vh;
  max-width: 450px;
  border-radius: 16px 16px 0 0;
}
</style>