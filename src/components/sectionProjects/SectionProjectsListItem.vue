<template>
  <router-link :to="{ name: name }" custom>
    <q-card
      v-if="name"
      :id="name"
      class="section-project-list-item col-lg-5 col-md-5 col-sm-5 col-xs-10"
      @click="navigate(name)"
    >
      <q-img class="project-image" :src="projectPicture(name)" fit="fill" />
      <q-card-section>
        <div class="text-h6 q-my-md">{{ label }}</div>
        <div class="text-subtitle2">{{ category }}</div>
      </q-card-section>
      <div class="hover absolute-full text-subtitle2 flex flex-center"></div>
    </q-card>
  </router-link>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';

interface Props {
  name: string | undefined;
  label: string | undefined;
  category: string | undefined;
  navigateFromHome: boolean;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'select-project-name', name: string): void;
}>();

const router = useRouter();

function projectPicture(name: string | undefined): string {
  if (!name) return '';

  return `https://erickgolos.com/images/projects/${name}.png`;
}

function navigate(name: string) {
  emit('select-project-name', name);
  router.push({ name: name });
}
</script>

<style lang="scss" scoped>
.section-project-list-item {
  max-width: 400px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  .hover {
    position: absolute;
    visibility: hidden;
    border-radius: 4px;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }

  &:hover {
    .hover {
      visibility: visible;
    }
  }

  .project-image {
    @media (min-width: $breakpoint-md-min) {
      height: 230px;
    }
  }
}
</style>
