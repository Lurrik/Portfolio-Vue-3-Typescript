import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    navigation: 'home',
  }),
  actions: {
    setNavigation(value: string) {
      this.navigation = value;
    },
  },
});
