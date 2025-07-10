<template>
  <div class="row justify-center">
    <div ref="titleSection" class="col-12 text-center q-mb-sm">
      <div class="section-header">
        <h3 class="text-primary text-weight-bold q-mb-sm">
          {{ title }}
        </h3>
        <div class="animated-bar">
          <span class="bar-1"></span>
          <span class="bar-2"></span>
          <span class="bar-3"></span>
        </div>
        <p class="text-grey text-subtitle1 q-mt-sm" v-if="subtitle">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useMotion } from '@vueuse/motion';

defineProps<{
  title: string;
  subtitle?: string;
}>();

const titleSection = ref<HTMLElement>();

onMounted(() => {
  if (titleSection.value) {
    useMotion(titleSection, {
      initial: {
        opacity: 0,
        y: -50,
      },
      enter: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 200,
          duration: 800,
          ease: 'ease-out',
        },
      },
    });
  }
});
</script>

<style lang="scss" scoped>
.section-header {
  position: relative;

  h3 {
    position: relative;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .animated-bar {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 0.75rem auto;

    span {
      display: block;
      background: var(--q-primary);
      height: 4px;
    }

    .bar-1 {
      width: 30px;
      animation: pulse 2s infinite;
    }

    .bar-2 {
      width: 60px;
      animation: pulse 2s infinite 0.4s;
    }

    .bar-3 {
      width: 30px;
      animation: pulse 2s infinite 0.8s;
    }
  }
}

@keyframes pulse {
  0% {
    opacity: 0.6;
    transform: scaleX(1);
  }
  50% {
    opacity: 1;
    transform: scaleX(1.1);
  }
  100% {
    opacity: 0.6;
    transform: scaleX(1);
  }
}

@media (max-width: 767px) {
  .section-header {
    h2 {
      font-size: 1.8rem;
    }
  }
}
</style>
