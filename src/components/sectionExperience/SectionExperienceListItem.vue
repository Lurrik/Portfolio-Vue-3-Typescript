<template>
  <q-expansion-item
    v-motion-slide-visible-right
    class="section-experience-list-item"
    group="exp"
    :default-opened="index === 0 && !isScreenMobile"
    popup
  >
    <template v-slot:header>
      <q-item-section class="section-experience-title text-white">
        <q-img class="image-miniature" :src="experienceLogoMiniature(experience.srcLogo)" />
        {{experience.name}}
        <span
          v-if="isScreenMobile"
          class="row items-center text-grey-4 text-caption"
        >{{experience.startDate}} - {{experience.endDate}}</span>
      </q-item-section>

      <q-item-section class="text-white" v-if="!isScreenMobile" side>
        <span class="row items-center">{{experience.startDate}} - {{experience.endDate}}</span>
      </q-item-section>
    </template>
    <q-card class="section-experience-container">
      <q-card-section class="row">
        <div class="col-8">
          <div class="experiences-subtle">
            <div class="experience-subtle">
              <q-icon name="fa fa-location-pin" color="primary" />
              <span>{{experience.location.name}}</span>
            </div>
            <div class="experience-subtle">
              <q-icon name="fa fa-arrow-up-right-from-square" color="primary" />
              <span>{{experience.link.name}}</span>
            </div>
          </div>
          <section-experience-list-item-description
            v-if="!isScreenMobile"
            :descriptions="experience.descriptions"
          />
        </div>
        <div class="col-4">
          <q-img :src="experienceLogo(experience.srcLogo)" />
        </div>
      </q-card-section>
      <section-experience-list-item-description
        v-if="isScreenMobile"
        :descriptions="experience.descriptions"
      />
    </q-card>
  </q-expansion-item>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SectionExperienceListItemDescription from '@/components/sectionExperience/SectionExperienceListItemDescription.vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

defineProps({
  index: {
    type: Number,
    required: true,
  },
  experience: {
    type: Object,
    required: true,
  },
});

const isScreenMobile = computed(() => {
  return $q.screen.xs;
});

function experienceLogo(logo: string) {
  return new URL(`/src/assets/experience/${logo}.png`, import.meta.url).href;
}

function experienceLogoMiniature(logo: string) {
  return new URL(`/src/assets/experience/${logo}Miniature.png`, import.meta.url)
    .href;
}
</script>

<style lang="scss">
@use '@/css/quasar.variables.scss' as *;

.section-experience-list-item {
  .section-experience-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    justify-content: flex-start;

    .image-miniature {
      height: 20px;
      width: 20px;
    }
  }

  .section-experience-container {
    border-radius: 8px;

    .experiences-subtle {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;

      .experience-subtle {
        display: flex;
        align-items: center;
        gap: 6px;
      }
    }
  }

  .q-item {
    color: white;

    .q-icon {
      color: white;
    }
  }

  .q-expansion-item__container {
    border-radius: 8px;
    background-color: $primary;
    margin: 8px 0;
  }
}
</style>