<template>
  <footer
    class="the-footer q-mt-md flex flex-center column items-center text-white bg-dark full-width"
    :class="Dark.isActive ? classDark : classLight"
  >
    <span>Portfolio Erick Golos</span>
    <span>@{{ currentYear }}</span>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Dark } from 'quasar';

const currentYear = computed<number>(() => new Date().getFullYear());

const classLight = computed<string[]>(() => {
  return ['bg-white', 'text-black'];
});

const classDark = computed<string[]>(() => {
  return ['bg-dark', 'text-white'];
});
</script>

<style lang="scss">
.the-footer {
  height: 100px;
}
</style>
