<template>
  <q-page>
    <section-home id="home" />
    <section-skills id="skills" class="q-py-lg" />
    <section-projects
      id="projects"
      class="q-py-lg"
      :navigate-from-home="!$q.screen.xs || $q.screen.sm"
    />
  </q-page>
</template>

<script setup lang="ts">
import { useMeta, useQuasar } from 'quasar';

import SectionHome from '@/components/sectionHome/SectionHome.vue';
import SectionSkills from '@/components/sectionSkills/SectionSkills.vue';
import SectionProjects from '@/components/sectionProjects/SectionProjects.vue';

const $q = useQuasar();

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
