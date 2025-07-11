<template>
  <q-header class="q-px-sm-xl" :class="classHeaderDark">
    <q-toolbar class="flex justify-between">
      <router-link class="row q-pl-lg" :to="{ name: 'home' }">
        <the-logo />
      </router-link>

      <the-header-navigation v-if="showNavigation" :class="classTextDark" />

      <div class="flex items-center">
        <!-- Language toggle -->
        <the-header-language-toggle />

        <!-- Dark mode toggle -->
        <q-toggle
          v-model="DarkMode"
          checked-icon="fa fa-moon"
          color="black"
          unchecked-icon="fa fa-sun"
        />
      </div>
    </q-toolbar>
    <q-separator inset color="primary" />
  </q-header>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, RouterLink } from 'vue-router';
import { useQuasar } from 'quasar';

import TheLogo from '../TheLogo.vue';
import TheHeaderNavigation from './TheHeaderNavigation.vue';
import TheHeaderLanguageToggle from './TheHeaderLanguageToggle.vue';

import { useSettingsStore } from '@/core/stores/useSettingsStore';

const route = useRoute();
const $q = useQuasar();
const settingsStore = useSettingsStore();
const { locale } = useI18n();

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

const currentLanguage = ref<string>(locale.value);

watch(locale, (newLocale) => {
  currentLanguage.value = newLocale;
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
