import { defineStore } from 'pinia';
import { Dark, LocalStorage } from 'quasar';

interface ConfigSettings {
  DarkMode: boolean;
}

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {
      DarkMode: true,
    },
  }),
  actions: {
    setDarkMode(value: boolean) {
      Dark.set(value);
      this.settings.DarkMode = value;
      this.saveSettings();
    },
    saveSettings() {
      LocalStorage.set('settings', this.settings);
    },
    getSettings() {
      const configSettings = LocalStorage.getItem('settings') as ConfigSettings;
      if (configSettings) {
        Dark.set(configSettings.DarkMode);
        Object.assign(this.settings, configSettings);
      }
    },
  },
});
