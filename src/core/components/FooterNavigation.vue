<template>
  <div class="custom-footer-navigation">
    <q-separator inset color="primary" />
    <div class="nav-container">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="nav-item"
        :class="{ active: modelValue === tab.name }"
        @click="handleTabClick(tab.name)"
      >
        <div class="nav-icon-wrapper">
          <div class="nav-icon-container">
            <div class="nav-icon">
              <i :class="tab.icon"></i>
            </div>
          </div>
        </div>
        <div class="nav-label">{{ tab.label }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  name: string;
  icon: string;
  label: string;
}

defineProps<{
  modelValue: string;
  tabs: Tab[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'section-click', sectionId: string): void;
}>();

function handleTabClick(tabName: string) {
  emit('update:modelValue', tabName);
  emit('section-click', tabName);
}
</script>

<style lang="scss" scoped>
.custom-footer-navigation {
  width: 100%;
  height: 60px;
  position: relative;

  .q-separator--horizontal {
    height: 2px;
  }

  .nav-container {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: white;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding: 0;

    body.body--dark & {
      background-color: var(--q-dark-page);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }
  }

  .nav-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    padding: 4px 0;
    overflow: visible;

    &.active {
      .nav-icon {
        color: var(--q-primary);
        transform: translateY(-2px) scale(1.1);

        body.body--dark & {
          color: var(--q-primary);
        }
      }

      .nav-label {
        color: var(--q-primary);
        opacity: 1;
        transform: translateY(1px);
        font-weight: 500;

        body.body--dark & {
          color: var(--q-primary);
        }
      }
    }
  }

  .nav-icon-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    margin-bottom: 4px;
  }

  .nav-icon-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .nav-icon {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.6);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    i {
      font-size: 1.3rem;
    }

    body.body--dark & {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .nav-label {
    position: relative;
    z-index: 1;
    font-size: 0.7rem;
    opacity: 0.7;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.02em;

    body.body--dark & {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.3);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 6px rgba(76, 175, 80, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
    }
  }

  body.body--dark & {
    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(129, 199, 132, 0.4);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 8px rgba(129, 199, 132, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(129, 199, 132, 0);
      }
    }
  }
}
</style>
