<template>
  <div class="q-gutter-x-md">
    <q-btn
      round
      color="indigo-7"
      icon="eva-linkedin"
      href="https://www.linkedin.com/in/erick-golos-ingenieur-informatique/"
      target="_blank"
    >
      <q-tooltip class="bg-dark text-white">
        {{ t('social.linkedin') }}
      </q-tooltip>
    </q-btn>
    <q-btn
      round
      color="grey-8"
      icon="eva-github"
      href="https://github.com/Lurrik"
      target="_blank"
    >
      <q-tooltip class="bg-dark text-white">
        {{ t('social.github') }}
      </q-tooltip>
    </q-btn>
    <q-btn
      round
      color="red-8"
      icon="eva-email"
      href="mailto:erickgolos@gmail.com"
    >
      <q-tooltip class="bg-dark text-white">
        {{ t('social.email') }}
      </q-tooltip>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
