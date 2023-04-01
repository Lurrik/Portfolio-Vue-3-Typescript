<template>
  <q-header class="q-px-xl" :class="classHeaderDark">
    <q-toolbar>
      <a class="row no-wrap text-h6">
        <strong class="text-primary">&lt; &nbsp;</strong>
        <strong class="no-wrap">Erick Golos</strong>
        <strong class="text-primary">&nbsp;/></strong>
      </a>
      <q-space />
      <the-header-navigation />
    </q-toolbar>
    <q-separator inset color="primary" />
  </q-header>
</template>

<script setup lang="ts">
import TheHeaderNavigation from '@/layouts/theHeader/TheHeaderNavigation.vue';
import { computed } from 'vue';

import { useQuasar } from 'quasar';

const $q = useQuasar();

const classHeaderDark = computed(() => {
  return {
    'dark-mode': $q.dark.isActive,
  };
});
</script>

<style>
</style>