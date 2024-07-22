<template>
  <q-footer class="the-footer-navigation q-mt-md" :class="classDarkMode">
    <CurvedBottomNavigation
      v-model="selected"
      :options="options"
      :foreground-color="getCssVar('primary')"
      :background-color="backGroundColor"
      :icon-color="iconColor"
      @update:model-value="router.push({ name: options[$event].name })"
    />
  </q-footer>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getCssVar } from 'quasar';

import { CurvedBottomNavigation } from 'bottom-navigation-vue';
import 'bottom-navigation-vue/dist/style.css';

import { useQuasar } from 'quasar';
const $q = useQuasar();
const route = useRoute();
const router = useRouter();

enum Tab {
  Skills = 0,
  Home = 1,
  Projects = 2,
}

const selected = ref<number>(Tab.Home);

const options = ref([
  {
    id: Tab.Skills,
    name: 'skills',
    icon: 'fa-solid fa-code',
    title: 'Expertises',
  },
  {
    id: Tab.Home,
    name: 'home',
    icon: 'fa-solid fa-house-user',
    title: 'Accueil',
  },
  {
    id: Tab.Projects,
    name: 'projects',
    icon: 'fa-solid fa-list-check',
    title: 'Projets',
  },
]);

const classDarkMode = computed(() => {
  return $q.dark.isActive ? 'bg-dark' : 'bg-white';
});

const backGroundColor = computed(() => {
  return $q.dark.isActive ? getCssVar('dark') : 'white';
});

const iconColor = computed(() => {
  return $q.dark.isActive ? 'white' : getCssVar('primary');
});

if (route.matched[1].name === 'projectsView') {
  selected.value = Tab.Projects;
}

watch(
  route,
  (newValue, oldValue) => {
    if (newValue.name === oldValue?.name) return;
    switch (newValue.name) {
      case 'home':
        selected.value = Tab.Home;
        break;
      case 'projectsView':
      case 'projects':
        selected.value = Tab.Projects;
        break;
      case 'skills':
        selected.value = Tab.Skills;
        break;
      default:
        break;
    }
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss">
.the-footer-navigation {
  height: 52px;
  font-size: 20px;

  #sweep-center {
    background: var(--q-primary);
  }

  #sweep-left:before {
    box-shadow: -40px -40px 0 0 var(--q-primary);
  }
  #sweep-right:before {
    box-shadow: 40px -40px 0 0 var(--q-primary);
  }

  .btn-container_foreground {
    border-radius: 10px 10px 0 0;
    background: var(--q-primary);
    .btn-container {
      border-radius: 10px 10px 0 0;

      .active-label {
        color: var(--q-primary);
      }

      .btn-title {
        color: var(--q-primary);
      }
    }
  }
}
</style>
