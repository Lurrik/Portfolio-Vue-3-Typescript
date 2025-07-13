<template>
  <q-card
    v-if="skill"
    class="section-skills-card q-ma-sm"
    :class="{ 'dark-mode': isDarkMode }"
  >
    <div class="card-header">
      <div class="header-icon">
        <q-icon :name="skill.icon" size="xs" />
      </div>
      <h3 class="text-h6 q-mb-none">{{ skill.label }}</h3>
    </div>

    <div class="card-content">
      <div class="tools-grid">
        <div
          v-for="(tool, index) in skill.tools"
          :key="index"
          class="tool-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="tool-icon-container">
            <q-img
              class="skill-picture"
              :src="skillPicture(tool.picture)"
              spinner-color="primary"
              spinner-size="24px"
            />
          </div>
          <div class="tool-label">{{ tool.label }}</div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

defineProps({
  skill: {
    type: Object,
    default: undefined,
  },
});

const isDarkMode = computed(() => {
  return $q.dark.isActive;
});

function skillPicture(picture: string) {
  return `https://erickgolos.com/images/skills/${picture}.png`;
}
</script>

<style lang="scss" scoped>
.section-skills-card {
  position: relative;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background: transparent;

  &.dark-mode {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
  }

  .card-header {
    display: flex;
    align-items: center;
    padding: 1.25rem;
    background: var(--q-primary);
    color: white;

    .header-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      margin-right: 1rem;
      backdrop-filter: blur(5px);
    }

    h3 {
      font-weight: 600;
      line-height: 1em;
      letter-spacing: 0.01em;
      margin: 0;
    }
  }

  .card-content {
    padding: 1.5rem;
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1.5rem;
  }

  .tool-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;

    &:hover .tool-icon-container {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    &:hover .skill-picture {
      transform: scale(1.1);
    }
  }

  .tool-icon-container {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background: rgba(var(--q-primary-rgb), 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-bottom: 0.75rem;
    transition: all 0.3s ease;
  }

  .skill-picture {
    height: 40px;
    width: 40px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  .tool-label {
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 767px) {
    .tools-grid {
      grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      gap: 1rem;
    }

    .card-content {
      padding: 1rem;
    }

    .tool-icon-container {
      width: 50px;
      height: 50px;
    }

    .skill-picture {
      height: 30px;
      width: 30px;
    }

    .tool-label {
      font-size: 0.7rem;
    }
  }
}
</style>
