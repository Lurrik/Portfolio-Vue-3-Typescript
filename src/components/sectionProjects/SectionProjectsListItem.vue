<template>
  <router-link :to="{ name }" custom>
    <div :id="name" class="section-project-list-item">
      <div class="card" :style="cardStyle" @click="navigate(name)">
        <div class="wrapper">
          <div class="thumb-card-image" :style="backgoundImageStyle"></div>
          <div class="thumb-container">
            <h2 class="title">{{ label }}</h2>
            <p class="details">{{ category }}</p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { ref, computed, watch, type StyleValue } from 'vue';
import { useMouse, useWindowSize } from '@vueuse/core';
import { RouterLink, useRouter } from 'vue-router';

interface Props {
  name: string | undefined;
  label: string | undefined;
  category: string | undefined;
  offsetTopParent: number | undefined;
  offsetLeftParent: number | undefined;
  navigateFromHome: boolean;
}

const { name, offsetTopParent, offsetLeftParent } = defineProps<Props>();

const emit = defineEmits<{
  (e: 'select-project-name', name: string | undefined): void;
}>();

const router = useRouter();
const { x, y } = useMouse();
const { width } = useWindowSize();

const offsetTop = ref<number | undefined>(0);
const offsetLeft = ref<number | undefined>(0);

const cardStyle = computed<StyleValue>(() => {
  if (!offsetLeft.value || !offsetTop.value) return {};

  return {
    '--x': `${x.value - offsetLeft.value}px`,
    '--y': `${y.value - offsetTop.value}px`,
  };
});

const backgoundImageStyle = computed<StyleValue>(() => ({
  'background-image': `url(https://erickgolos.com/images/projects/${name}.png)`,
}));

function setOffset(): void {
  if (!name) return;

  const div = document.getElementById(name);

  if (offsetTopParent == undefined || offsetLeftParent == undefined || !div)
    return;

  offsetTop.value = offsetTopParent + div.offsetTop;
  offsetLeft.value = offsetLeftParent + div.offsetLeft;
}

function navigate(name: string | undefined): void {
  emit('select-project-name', name);
  router.push({ name: name });
}

watch(
  () => [offsetTopParent, offsetLeftParent, width.value],
  () => {
    setOffset();
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
.section-project-list-item {
  display: flex;
  justify-content: center;
  width: 90%;
  border-radius: 8px;
  padding: 8px;

  @media (min-width: 768px) {
    width: 33.3333%;
  }

  .card {
    position: relative;
    padding: 4px;
    width: 100%;
    border-radius: 8px;
    background-color: var(--bg-soft);
    cursor: pointer;
  }

  .card::before {
    content: '';
    position: absolute;
    inset: 0;
    width: 100%;
    border-radius: 8px;
    background: radial-gradient(
      500px circle at var(--x) var(--y),
      var(--q-primary),
      transparent
    );
  }

  .wrapper {
    position: relative;
    padding: 4px;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    border: 1px solid grey;
    overflow: hidden;
    background-color: var(--bg-soft);

    .thumb-card-image {
      display: inline-block;
      height: 270px;
      width: 100%;
      background-position: 50%;
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      background-repeat: no-repeat;
      background-size: 100%;
      transition: background-size 0.3s ease-out;

      @media all and (min-width: 0px) and (max-width: 400px) {
        height: 160px;
      }
      @media all and (min-width: 400px) and (max-width: 900px) {
        height: 230px;
      }
      @media all and (min-width: 900px) and (max-width: 1200px) {
        height: 130px;
      }
      @media all and (min-width: 1200px) and (max-width: 1400px) {
        height: 160px;
      }
    }

    &:hover {
      .thumb-card-image {
        background-size: 110%;
      }
    }

    .thumb-container {
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 4px;
      height: 100%;
      background-color: var(--bg-soft);

      h2 {
        margin: 0;
        line-height: 24px;
        font-size: 16px;
        font-weight: 600;
        border: none;
        padding: 0;
      }
      p {
        margin: 0;
        flex-grow: 1;
        padding-top: 8px;
        line-height: 24px;
        font-size: 14px;
        font-weight: 500;
        color: var(--text-details);
      }
    }
  }
}
</style>
