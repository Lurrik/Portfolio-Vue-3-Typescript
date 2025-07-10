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
import { useQuasar, getCssVar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

import { CurvedBottomNavigation } from 'bottom-navigation-vue';
import 'bottom-navigation-vue/dist/style.css';

const $q = useQuasar();
const route = useRoute();
const router = useRouter();
const { t } = useI18n();

enum Tab {
  Skills = 0,
  Home = 1,
  Projects = 2,
  About = 3,
}

interface Options {
  id: Tab;
  name: string;
  icon: string;
  title: string;
}

const selected = ref<number>(Tab.Home);

const options = ref<Options[]>([
  {
    id: Tab.Skills,
    name: 'skills',
    icon: 'fa-solid fa-code',
    title: t('navigation.skills'),
  },
  {
    id: Tab.Home,
    name: 'home',
    icon: 'fa-solid fa-house-user',
    title: t('navigation.home'),
  },
  {
    id: Tab.Projects,
    name: 'projects',
    icon: 'fa-solid fa-list-check',
    title: t('navigation.projects'),
  },
  {
    id: Tab.About,
    name: 'about',
    icon: 'fa-solid fa-user',
    title: t('navigation.about'),
  },
]);

const classDarkMode = computed<string>(() => {
  return $q.dark.isActive ? 'bg-dark' : 'bg-white';
});

const backGroundColor = computed<string | null>(() => {
  return $q.dark.isActive ? getCssVar('dark') : 'white';
});

const iconColor = computed<string | null>(() => {
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
      case 'about':
        selected.value = Tab.About;
        break;
      default:
        break;
    }
  },
  {
    immediate: true,
  },
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
