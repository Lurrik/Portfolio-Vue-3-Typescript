<template>
  <q-layout class="portfolio" view="lHh Lpr lFf">
    <the-header />

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TheHeader from '@/layouts/theHeader/TheHeader.vue';
</script>

<style lang="scss">
.portfolio {
  .q-layout__section--marginal {
    &.dark-mode {
      background-color: var(--q-dark-page);
    }
  }

  .page-container {
    overflow: hidden;
  }
}
</style>
