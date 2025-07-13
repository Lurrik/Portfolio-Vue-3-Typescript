import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

export interface ScrollState {
  observersActive: Ref<boolean>;
  homeScrollPosition: Ref<number>;
  disableObservers: () => void;
  enableObservers: () => void;
  temporarilyDisableObservers: (delayMs?: number) => void;
  saveHomeScrollPosition: (position: number) => void;
  getHomeScrollPosition: () => number;
}

export const useScrollStore = defineStore('scroll', () => {
  const observersActive = ref<boolean>(true);
  const homeScrollPosition = ref<number>(0);

  function disableObservers(): void {
    observersActive.value = false;
  }

  function enableObservers(): void {
    observersActive.value = true;
  }

  function temporarilyDisableObservers(delayMs = 1000): void {
    disableObservers();
    setTimeout(() => {
      enableObservers();
    }, delayMs);
  }

  function saveHomeScrollPosition(position: number): void {
    homeScrollPosition.value = position;
  }

  function getHomeScrollPosition(): number {
    return homeScrollPosition.value;
  }

  return {
    observersActive,
    homeScrollPosition,
    disableObservers,
    enableObservers,
    temporarilyDisableObservers,
    saveHomeScrollPosition,
    getHomeScrollPosition,
  };
});
