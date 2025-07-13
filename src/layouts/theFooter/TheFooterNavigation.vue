<template>
  <q-footer class="the-footer-navigation q-mt-md" :class="classDarkMode">
    <FooterNavigation
      :modelValue="navigationStore.activeSection"
      :tabs="tabs"
      @update:modelValue="navigationStore.setActiveSection($event)"
      @section-click="scrollToSection"
    />
  </q-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

import FooterNavigation from '@/core/components/FooterNavigation.vue';

import { useNavigationStore } from '@/core/stores/useNavigationStore';
import { useScrollStore } from '@/core/stores/useScrollStore';

const $q = useQuasar();
const { t } = useI18n();
const scrollStore = useScrollStore();
const navigationStore = useNavigationStore();

const tabs = computed(() => [
  {
    name: 'home',
    icon: 'fa-solid fa-house-user',
    label: t('navigation.home'),
  },
  {
    name: 'about',
    icon: 'fa-solid fa-user',
    label: t('navigation.about'),
  },
  {
    name: 'skills',
    icon: 'fa-solid fa-code',
    label: t('navigation.skills'),
  },
  {
    name: 'projects',
    icon: 'fa-solid fa-list-check',
    label: t('navigation.projects'),
  },
]);

const classDarkMode = computed<string>(() => {
  return $q.dark.isActive ? 'bg-dark' : 'bg-grey-3';
});

function scrollToSection(sectionId: string): void {
  scrollStore.disableObservers();

  navigationStore.setActiveSection(sectionId);

  const element = document.getElementById(sectionId);

  if (element) {
    const offset = $q.screen.lt.sm ? 10 : 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    setTimeout(() => {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setTimeout(() => {
        navigationStore.setActiveSection(sectionId);

        const delayMs = $q.screen.lt.sm ? 1500 : 1000;
        setTimeout(() => {
          scrollStore.enableObservers();
        }, delayMs);
      }, 500);
    }, 100);
  } else {
    scrollStore.enableObservers();
  }
}
</script>

<style lang="scss">
.the-footer-navigation {
  height: 60px;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);

  .q-dark & {
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
