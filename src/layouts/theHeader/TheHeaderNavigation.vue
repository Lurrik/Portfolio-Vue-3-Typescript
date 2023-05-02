<template>
  <q-tabs
    v-model="tab"
    class="the-navigation"
    :breakpoint="500"
    active-color="primary"
    no-caps
    indicator-color="transparent"
    inline-label
  >
    <q-tab name="home" icon="fa-solid fa-house-user" label="Accueil" />
    <q-tab name="about" icon="fa-solid fa-user-astronaut" label="À propos de moi" />
    <q-tab name="skills" icon="fa-solid fa-code" label="Expertises" />
    <q-tab name="experience" icon="fa-solid fa-timeline" label="Expériences" />
    <q-tab name="projects" icon="fa-solid fa-list-check" label="Projets" />
    <q-tab name="contact" icon="fa-solid fa-envelope" label="Contact" />
  </q-tabs>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useNavigationStore } from '@/stores/useNavigationStore';

const store = useNavigationStore();

const tab = computed<string>({
  get() {
    return store.navigation;
  },
  set(value: string) {
    store.setNavigation(value);
  },
});
</script>

<style lang="scss">
.the-navigation {
  .q-tab__icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  @media (max-width: $breakpoint-md-min) {
    display: none;
  }
}
</style>