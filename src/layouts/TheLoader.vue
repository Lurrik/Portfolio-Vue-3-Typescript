<template>
  <div
    class="fullscreen text-white text-center q-pa-md flex flex-center"
    :class="Dark.isActive ? classDark : classLight"
  >
    <BackgroundGradientCenter
      class="absolute-full full-width full-height flex flex-center"
    />
    <the-logo size="200px" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { Dark } from 'quasar';

import TheLogo from '@/layouts/TheLogo.vue';
import BackgroundGradientCenter from '@/components/backgroundGradient/BackgroundGradientCenter.vue';

const classLight = computed<string[]>(() => {
  return ['bg-white', 'text-black'];
});

const classDark = computed<string[]>(() => {
  return ['bg-dark', 'text-white'];
});
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
