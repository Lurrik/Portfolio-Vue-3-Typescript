<template>
  <div class="section-skills q-px-lg">
    <div class="flex column no-wrap">
      <h3 class="q-mt-xl q-mb-md">
        <strong class="text-primary">Expertises</strong>
      </h3>
      <span class="text-grey text-subtitle1">Liste des outils de développement</span>
      <q-separator class="q-my-md" inset />
    </div>
    <div class="row full-width">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        :data-id="index"
        class="col-xs-12 col-md-6"
      >
        <section-skills-card :skill="skill" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionSkillsCard from '@/components/sectionSkills/SectionSkillsCard.vue';

const skills = ref([
  {
    label: 'Langages de balisage / programmation',
    visible: false,
    tools: [
      {
        label: 'Html',
        picture: 'html',
      },
      {
        label: 'Css',
        picture: 'css',
      },
      {
        label: 'Javascript',
        picture: 'javascript',
      },
      {
        label: 'Typescript',
        picture: 'typescript',
      },
      {
        label: 'C#',
        picture: 'csharp',
      },
    ],
  },
  {
    label: 'Frameworks',
    visible: false,
    tools: [
      {
        label: 'Vue',
        picture: 'vue',
      },
      {
        label: 'Quasar',
        picture: 'quasar',
      },
      {
        label: '.Net',
        picture: 'dotnet',
      },
    ],
  },
  {
    label: 'Outils front-end',
    visible: false,
    tools: [
      {
        label: 'Pinia',
        picture: 'pinia',
      },
      {
        label: 'Vuex',
        picture: 'vuex',
      },
      {
        label: 'VueUse',
        picture: 'vueuse',
      },
      {
        label: 'Sass',
        picture: 'sass',
      },
    ],
  },
  {
    label: 'Testing',
    visible: false,
    tools: [
      {
        label: 'Jest',
        picture: 'jest',
      },
      {
        label: 'Vitest',
        picture: 'vitest',
      },
      {
        label: 'Storybook',
        picture: 'storybook',
      },
    ],
  },
  {
    label: 'Database',
    visible: false,
    tools: [
      {
        label: 'Sql server',
        picture: 'sqlServer',
      },
      {
        label: 'Postegre Sql',
        picture: 'postgreSql',
      },
      {
        label: 'Firebase',
        picture: 'firebase',
      },
    ],
  },
  {
    label: 'Outils',
    visible: false,
    tools: [
      {
        label: 'Visual studio code',
        picture: 'visualStudioCode',
      },
      {
        label: 'Visual studio',
        picture: 'visualStudio',
      },
      {
        label: 'Postman',
        picture: 'postman',
      },
      {
        label: 'Github',
        picture: 'github',
      },
      {
        label: 'Git',
        picture: 'git',
      },
    ],
  },
]);
</script>

<style lang="scss">
.section-skills {
  @media (min-width: $breakpoint-sm-min) {
    height: auto;
  }

  @media (min-width: $breakpoint-md-min) {
    height: calc(100vh - 50px) !important;
  }
}
</style>