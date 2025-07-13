<template>
  <q-tabs
    v-model="navigationStore.activeSection"
    class="the-header-navigation"
    :breakpoint="500"
    active-color="primary"
    no-caps
    indicator-color="transparent"
    inline-label
  >
    <q-tab
      name="home"
      icon="fa-solid fa-house-user"
      :label="t('navigation.home')"
      @click="scrollToSection('home')"
    />
    <q-tab
      name="about"
      icon="fa-solid fa-user"
      :label="t('navigation.about')"
      @click="scrollToSection('about')"
    />
    <q-tab
      name="skills"
      icon="fa-solid fa-code"
      :label="t('navigation.skills')"
      @click="scrollToSection('skills')"
    />
    <q-tab
      name="projects"
      icon="fa-solid fa-list-check"
      :label="t('navigation.projects')"
      @click="scrollToSection('projects')"
    />
  </q-tabs>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useNavigationStore } from '@/core/stores/useNavigationStore';
import { useScrollStore } from '@/core/stores/useScrollStore';

const { t } = useI18n();
const scrollStore = useScrollStore();
const navigationStore = useNavigationStore();

function scrollToSection(sectionId: string): void {
  navigationStore.setActiveSection(sectionId);

  scrollStore.temporarilyDisableObservers();

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  } else {
    scrollStore.enableObservers();
  }
}
</script>

<style lang="scss">
.the-header-navigation {
  .q-tab__icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  @media (max-width: $breakpoint-md-min) {
    display: none;
  }
}
</style>
