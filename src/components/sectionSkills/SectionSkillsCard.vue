<template>
  <q-card v-if="skill" class="section-skills-card row rounded-borders q-ma-md">
    <div class="full-width">
      <q-card-section class="text-center">
        <div class="text-h6">{{ skill.label }}</div>
      </q-card-section>
      <div class="q-pb-md flex flex-center">
        <q-separator class="separator" color="primary" inset />
      </div>
      <div class="row flex-center">
        <div
          v-for="(tool, index) in skill.tools"
          :key="index"
          class="col-xs-6 col-md-2 flex column items-center"
        >
          <q-img
            class="skill-picture"
            round
            contain
            :src="skillPicture(tool.picture)"
          />
          <p class="text-center">{{ tool.label }}</p>
        </div>
      </div>
      <div class="bg-primary full-width height-5"></div>
    </div>
  </q-card>
</template>

<script setup>
defineProps({
  skill: {
    type: Object,
    default: undefined,
  },
});

function skillPicture(picture) {
  return `https://erickgolos.com/images/skills/${picture}.png`;
}
</script>

<style lang="scss">
.section-skills-card {
  .skill-picture {
    height: 50px;
    max-width: 50px;
  }

  .height-5 {
    height: 5px;
  }

  .separator {
    width: 50%;
  }
}
</style>
