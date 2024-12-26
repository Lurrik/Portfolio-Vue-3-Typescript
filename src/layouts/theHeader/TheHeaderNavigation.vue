<template>
  <q-tabs
    v-model="tab"
    class="the-header-navigation"
    :breakpoint="500"
    active-color="primary"
    no-caps
    indicator-color="transparent"
    inline-label
  >
    <q-route-tab
      name="home"
      to="#home"
      exact
      replace
      icon="fa-solid fa-house-user"
      label="Accueil"
    />
    <q-route-tab
      name="skills"
      to="#skills"
      exact
      replace
      icon="fa-solid fa-code"
      label="Expertises"
    />
    <q-route-tab
      name="projects"
      to="#projects"
      exact
      replace
      icon="fa-solid fa-list-check"
      label="Projets"
    />
  </q-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tab = ref('home');
</script>

<style lang="scss">
.the-header-navigation {
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
