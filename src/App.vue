<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Dark } from 'quasar';
import { useSettingsStore } from 'stores/useSettingsStore';

const settingsStore = useSettingsStore();

onMounted(() => {
  settingsStore.getSettings();
  Dark.set(settingsStore.settings.DarkMode);
});
</script>