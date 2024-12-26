<template>
  <q-header class="q-px-sm-xl" :class="classHeaderDark">
    <q-toolbar>
      <router-link class="row q-pl-lg" :to="{ name: 'home' }">
        <the-logo />
      </router-link>
      <q-space />
      <the-header-navigation v-if="showNavigation" :class="classTextDark" />
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
import { ref, computed, watch } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useQuasar } from 'quasar';

import { useSettingsStore } from 'stores/useSettingsStore';

import TheLogo from '@/layouts/TheLogo.vue';
import TheHeaderNavigation from '@/layouts/theHeader/TheHeaderNavigation.vue';

const route = useRoute();
const $q = useQuasar();
const settingsStore = useSettingsStore();

const showNavigation = ref<boolean>(false);

const classHeaderDark = computed<string>(() => {
  return $q.dark.isActive ? 'dark-mode' : 'bg-white';
});

const classTextDark = computed<string>(() => {
  return $q.dark.isActive ? 'text-white' : 'text-black';
});

let DarkMode = computed<boolean>({
  get() {
    return settingsStore.settings.DarkMode;
  },
  set(value: boolean) {
    settingsStore.setDarkMode(value);
  },
});

watch(
  route,
  (currentRoute) => {
    showNavigation.value = currentRoute.name === 'home';
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss">
.the-header {
  svg {
    color: var(--q-primary);
  }
}
</style>
