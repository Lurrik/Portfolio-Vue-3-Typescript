<template>
  <div class="section-skills flex justify-center">
    <div class="col-8 column">
      <section-header
        :title="t('skills.title')"
        :subtitle="t('skills.subtitle')"
      />
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
import { useI18n } from 'vue-i18n';

import SectionHeader from '../common/SectionHeader.vue';
import SectionSkillsCard from '@/components/sectionSkills/SectionSkillsCard.vue';

import { useSkillsStore } from '../../stores/useSkillsStore';

const { t } = useI18n();

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
