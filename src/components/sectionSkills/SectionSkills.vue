<template>
  <div class="section-skills flex justify-center">
    <div class="col-8 column">
      <div class="text-center flex column no-wrap">
        <h3 class="q-mb-md text-primary">Expertises</h3>
        <span class="text-grey text-subtitle1">
          Liste des outils de développement
        </span>
        <q-separator class="q-my-md" inset />
      </div>
      <div class="list row justify-center q-pb-xl">
        <div
          v-for="(skill, index) in skillsStore.skills"
          :key="index"
          :data-id="index"
          class="col-xs-12 col-md-6"
        >
          <section-skills-card
            v-if="!noAnimation"
            v-motion-slide-visible-left
            :skill="skill"
          />
          <section-skills-card v-else :skill="skill" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionSkillsCard from '@/components/sectionSkills/SectionSkillsCard.vue';

import { useSkillsStore } from 'stores/useSkillsStore';

defineProps({
  noAnimation: {
    type: Boolean,
    default: false,
  },
});

const skillsStore = useSkillsStore();
</script>

<style lang="scss">
.section-skills {
  .col-8 {
    width: 80%;

    @media (max-width: $breakpoint-md-min) {
      width: 90%;
    }
  }
}
</style>
