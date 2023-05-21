<template>
  <q-page>
    <section-home id="home" />
    <section-about id="about" />
    <section-skills id="skills" />
    <section-experience id="experience" />
  </q-page>
</template>

<script setup lang="ts">
import SectionHome from '@/components/sectionHome/SectionHome.vue';
import SectionAbout from '@/components/sectionAbout/SectionAbout.vue';
import SectionSkills from '@/components/sectionSkills/SectionSkills.vue';
import SectionExperience from '@/components/sectionExperience/SectionExperience.vue';

import { watch } from 'vue';
import { scroll } from 'quasar';

import { useNavigationStore } from '@/stores/useNavigationStore';

const navigationStore = useNavigationStore();

const { getScrollTarget, setVerticalScrollPosition } = scroll;

// takes an element object
function scrollToElement() {
  const el = document.getElementById(navigationStore.navigation);
  if (!el) return;

  const target = getScrollTarget(el);
  const offset = el.offsetTop ?? 0;
  const duration = 500;
  setVerticalScrollPosition(target, offset, duration);
}

watch(
  () => navigationStore.navigation,
  () => {
    scrollToElement();
  }
);
</script>
