import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

export interface NavigationState {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useNavigationStore = defineStore('navigation', () => {
  const router = useRouter();
  const activeSection = ref<string>('home');

  function setActiveSection(section: string): void {
    if (activeSection.value !== section) {
      activeSection.value = section;

      const currentPath = window.location.pathname;
      router
        .replace({ path: currentPath, hash: `#${section}` })
        .catch(() => {});
    }
  }

  function initFromHash(): void {
    const hash = window.location.hash.substring(1);
    if (hash) {
      activeSection.value = hash;
    }
  }

  watch(
    () => window.location.hash,
    () => {
      initFromHash();
    },
    {
      immediate: true,
    },
  );

  return {
    activeSection,
    setActiveSection,
  };
});
