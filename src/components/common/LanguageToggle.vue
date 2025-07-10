<template>
  <div class="language-toggle">
    <div class="toggle-container" @click="toggleLanguage">
      <div class="toggle-option" :class="{ active: isEnglish }">EN</div>
      <div class="toggle-option" :class="{ active: !isEnglish }">FR</div>
      <div class="slider" :class="{ 'slide-right': !isEnglish }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { useSettingsStore } from '../../stores/useSettingsStore';

const { locale } = useI18n();
const settingsStore = useSettingsStore();

const isEnglish = computed<boolean>(() => locale.value === 'en-US');

function toggleLanguage(): void {
  const newLang = isEnglish.value ? 'fr-FR' : 'en-US';
  settingsStore.setLanguage(newLang);
}
</script>

<style lang="scss" scoped>
.language-toggle {
  margin-right: 12px;

  .toggle-container {
    position: relative;
    display: flex;
    width: 80px;
    height: 32px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .toggle-option {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 14px;
      z-index: 2;
      transition: color 0.3s ease;
      color: var(--q-primary);

      &.active {
        color: white;
      }
    }

    .slider {
      position: absolute;
      top: 2px;
      left: 2px;
      width: calc(50% - 4px);
      height: calc(100% - 4px);
      background-color: var(--q-primary);
      border-radius: 14px;
      z-index: 1;
      transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      &.slide-right {
        transform: translateX(calc(100% + 4px));
      }
    }
  }
}

// Adaptation au mode sombre
.q-dark,
.dark-mode {
  .language-toggle {
    .toggle-container {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }
}
</style>
