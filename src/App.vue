<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <Transition mode="out-in" :duration="550">
        <Suspense timeout="500">
          <component :is="Component"></component>

          <template #fallback>
            <the-loader />
          </template>
        </Suspense>
      </Transition>
    </template>
  </router-view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Dark } from 'quasar';

import TheLoader from '@/layouts/TheLoader.vue';

import { useSettingsStore } from 'stores/useSettingsStore';

const settingsStore = useSettingsStore();

onMounted(() => {
  settingsStore.getSettings();
  Dark.set(settingsStore.settings.DarkMode);
});
</script>
