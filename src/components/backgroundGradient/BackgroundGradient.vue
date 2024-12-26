<template>
  <div class="absolute">
    <background-gradient-left class="gradient-left fixed overflow-hidden" />
    <background-gradient-right class="gradient-right fixed overflow-hidden" />
  </div>
</template>

<script setup>
import BackgroundGradientLeft from '@/components/backgroundGradient/BackgroundGradientLeft.vue';
import BackgroundGradientRight from '@/components/backgroundGradient/BackgroundGradientRight.vue';
</script>

<style lang="scss">
.gradient-left {
  left: 0;
  top: 0;

  @media (max-width: $breakpoint-md-min) {
    width: 50%;
  }
}

.gradient-right {
  right: 0;
  top: 0;

  @media (max-width: $breakpoint-md-min) {
    width: 50%;
  }
}
</style>
