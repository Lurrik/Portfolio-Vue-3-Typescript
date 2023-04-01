<template>
  <h2 class="section-home-welcome-text" :class="textWelcome">
    <p>Hello,</p>
    <p>
      je suis
      <strong class="text-primary">Erick&nbsp;</strong>
      <strong class>Golos</strong>
    </p>
    <p class="row items-center q-my-0">
      <Typed class="row items-center" :options="options">
        <span>et je suis&nbsp;</span>
        <span class="typing text-primary"></span>
      </Typed>
    </p>
    <span
      class="row text-subtitle1 items-start"
    >Bienvenue ! Ce portfolio est un reflet de mon travail et de mes réalisations au fil des années. Vous y trouverez des exemples de projets sur lesquels j'ai travaillé, des descriptions détaillées de mes compétences et de mes réalisations.</span>
  </h2>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { computed } from 'vue';
import { Typed } from '@duskmoon/vue3-typed-js';
import type { TypedOptions } from '@duskmoon/vue3-typed-js';
const $q = useQuasar();

const options: TypedOptions = {
  strings: ['software engineer', 'full stack', 'passionné'],
  loop: true,
  typeSpeed: 100,
};

const textWelcome = computed(() => {
  return {
    'text-h5': $q.screen.xs,
    'text-h4': $q.screen.sm,
    'text-h3': $q.screen.md,
    'text-h2': $q.screen.lg,
  };
});
</script>


