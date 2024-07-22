<template>
  <q-layout class="portfolio" :view="computeViewConfig">
    <the-header />

    <the-footer-navigation
      v-if="isScreenMobile"
      class="footer-buttons small-screen-only"
    />

    <q-page-container class="page-container">
      <BackgroundGradient />
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive :include="['HomeView']">
              <component :is="Component" no-animation></component>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
      <the-footer class="large-screen-only" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

import TheHeader from '@/layouts/theHeader/TheHeader.vue';
import TheFooter from '@/layouts/theFooter/TheFooter.vue';
import TheFooterNavigation from '@/layouts/theFooter/TheFooterNavigation.vue';
import BackgroundGradient from '@/components/backgroundGradient/BackgroundGradient.vue';

const $q = useQuasar();

const computeViewConfig = computed(() => {
  return isScreenMobile.value ? 'lHh Lpr fFf' : 'lHh Lpr lFf';
});

const isScreenMobile = computed(() => {
  return $q.screen.xs || $q.screen.sm;
});
</script>

<style lang="scss">
.portfolio {
  .q-layout__section--marginal {
    &.dark-mode {
      background-color: var(--q-dark-page);
    }
  }

  .page-container {
    overflow: hidden;
  }
}
</style>
