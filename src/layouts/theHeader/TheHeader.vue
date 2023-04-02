<template>
  <q-header class="q-px-xl" :class="classHeaderDark">
    <q-toolbar>
      <a class="row no-wrap text-h6" :class="classTextDark">
        <strong class="text-primary">&lt; &nbsp;</strong>
        <strong class="no-wrap">Erick Golos</strong>
        <strong class="text-primary">&nbsp;/></strong>
      </a>
      <q-space />
      <the-header-navigation :class="classTextDark" />
      <q-toggle
        v-model="DarkMode"
        checked-icon="fa fa-moon"
        color="black"
        unchecked-icon="fa fa-sun"
      />
    </q-toolbar>
    <q-separator inset color="primary" />
  </q-header>
</template>

<script setup lang="ts">
import TheHeaderNavigation from '@/layouts/theHeader/TheHeaderNavigation.vue';
import { computed } from 'vue';
import { useSettingsStore } from '@/stores/useSettingsStore';

import { useQuasar } from 'quasar';

const settingsStore = useSettingsStore();
const $q = useQuasar();

const classHeaderDark = computed(() => {
  return $q.dark.isActive ? 'dark-mode' : 'bg-white';
});

const classTextDark = computed(() => {
  return $q.dark.isActive ? 'text-white' : 'text-black';
});

let DarkMode = computed({
  get() {
    return settingsStore.settings.DarkMode;
  },
  set(value) {
    settingsStore.setDarkMode(value);
  },
});
</script>

<style>
</style>