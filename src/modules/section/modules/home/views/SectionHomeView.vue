<template>
  <q-page>
    <section-home id="home" />
    <section-about id="about" class="q-py-lg" />
    <section-skills id="skills" class="q-py-lg" />
    <section-projects
      id="projects"
      class="q-py-lg"
      :navigate-from-home="!$q.screen.xs || $q.screen.sm"
    />
  </q-page>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted } from 'vue';
import { useMeta, useQuasar } from 'quasar';

import SectionHome from '@/modules/section/modules/home/components/SectionHome.vue';
import SectionAbout from '@/modules/section/modules/about/components/SectionAbout.vue';
import SectionSkills from '@/modules/section/modules/skills/components/SectionSkills.vue';
import SectionProjects from '@/modules/section/modules/projects/components/SectionProjects.vue';

import { useNavigationStore } from '@/core/stores/useNavigationStore';
import { useScrollStore } from '@/core/stores/useScrollStore';

const $q = useQuasar();
const scrollStore = useScrollStore();
const navigationStore = useNavigationStore();

onDeactivated(() => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  scrollStore.saveHomeScrollPosition(scrollPosition);
});

onActivated(() => {
  setTimeout(() => {
    const savedPosition = scrollStore.getHomeScrollPosition();
    window.scrollTo({ top: savedPosition });
  }, 50);
});

onMounted(() => {
  const sections = ['home', 'about', 'skills', 'projects'];
  const observers = [];

  const updateActiveSection = (sectionId: string) => {
    if (!scrollStore.observersActive) return;

    if (navigationStore.activeSection === sectionId) return;

    navigationStore.setActiveSection(sectionId);
  };

  sections.forEach((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const thresholds = $q.screen.lt.sm ? [0.1, 0.2, 0.3] : [0.3, 0.4, 0.5];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const minThreshold = $q.screen.lt.sm ? 0.1 : 0.5;

          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= minThreshold &&
            scrollStore.observersActive
          ) {
            updateActiveSection(sectionId);
          }
        });
      },
      {
        threshold: thresholds,
        rootMargin: $q.screen.lt.sm ? '-20% 0px -20% 0px' : '0px',
      },
    );

    observer.observe(element);
    observers.push(observer);
  });

  return () => {
    observers.forEach((observer) => observer.disconnect());
  };
});

const metaData = {
  title: 'Erick Golos - portfolio',
  titleTemplate: (title: string) => `${title}`,

  // meta tags
  meta: {
    description: { name: 'description', content: 'home page' },
    keywords: { name: 'keywords', content: 'web application' },
    equiv: {
      'http-equiv': 'Content-Type',
      content: 'text/html; charset=UTF-8',
    },
    ogTitle: {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template(ogTitle: string) {
        return `${ogTitle}Erick Golos`;
      },
    },
  },
  // JS tags
  script: {
    ldJson: {
      type: 'application/ld+json',
      innerHTML: `{
        "@context": "https://schema.org",
        "@type": "website",
        "name": "Erick golos - portfolio",
        "url": "https://erickgolos.com",
        "logo": "https://erickgolos.com/icons/favicon-128x128.png"
      }`,
    },
  },
};

useMeta(metaData);
</script>
