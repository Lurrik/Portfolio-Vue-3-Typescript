import { defineStore } from 'pinia';
import { LocalStorage, Notify } from 'quasar';
import { Dark } from 'quasar';
import { getCssVar, setCssVar } from 'quasar';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {
      DarkMode: true,
      primary: '',
      accent: '',
    },
  }),
  actions: {
    setDarkMode(value: boolean) {
      Dark.set(value);
      this.settings.DarkMode = value;
      this.saveSettings();
    },
    setColorPrimary(value: string) {
      this.settings.primary = value;
      setCssVar('primary', value);
      this.saveSettings();
    },
    setColorCharacterEdition(value: string) {
      this.settings.accent = value;
      setCssVar('accent', value);
      this.saveSettings();
    },
    saveSettings() {
      LocalStorage.set('settings', this.settings);
      Notify.setDefaults({
        position: 'top-left',
        timeout: 2500,
        textColor: 'white',
      });
      Notify.create('Paramètre enregistré');
    },
    getSettings() {
      const configSettings = LocalStorage.getItem('settings');
      if (configSettings) {
        Dark.set(configSettings.DarkMode);
        if (!configSettings.primary) {
          configSettings.primary = getCssVar('primary');
        }
        setCssVar('primary', configSettings.primary);

        if (!configSettings.accent) {
          configSettings.accent = getCssVar('accent');
        }
        setCssVar('accent', configSettings.accent);

        Object.assign(this.settings, configSettings);
      }
    },
  },
  getters: {
    primary: (state) => {
      return state.settings.primary;
    },
    accent: (state) => {
      return state.settings.accent;
    },
  },
});
