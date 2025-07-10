<template>
  <h2 class="section-home-welcome-text" :class="textH">
    <p>{{ t('welcome.greeting') }}</p>
    <p>
      {{ t('welcome.iam') }}
      <strong class="text-primary">Erick&nbsp;</strong>
      <strong class>Golos</strong>
    </p>
    <p :key="locale" class="row items-center q-my-0">
      <Typed class="row items-center" :options="options">
        <span class="typing text-primary"></span>
      </Typed>
    </p>
    <span class="row text-subtitle1 items-start">
      {{ t('welcome.description') }}
    </span>
  </h2>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';

import { Typed } from '@duskmoon/vue3-typed-js';

import type { TypedOptions } from '@duskmoon/vue3-typed-js';

const $q = useQuasar();
const { t, locale } = useI18n();

// Récupérer les rôles traduits
const translatedRoles = computed(() => {
  return locale.value === 'fr-FR'
    ? ['Ingénieur', 'Tech Lead', 'Front End', 'Passionné']
    : ['Engineer', 'Tech Lead', 'Front End', 'Passionate'];
});

const options = computed<TypedOptions>(() => ({
  strings: translatedRoles.value,
  loop: true,
  typeSpeed: 100,
}));

const textH = computed(() => {
  return {
    'text-h5': $q.screen.xs,
    'text-h4': $q.screen.sm,
    'text-h3': $q.screen.md,
    'text-h2': $q.screen.lg,
  };
});
</script>
