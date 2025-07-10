import { defineStore } from 'pinia';
import { Dark, LocalStorage } from 'quasar';
import { i18n } from '../boot/i18n';
import { useSkillsStore } from './useSkillsStore';
import { useProjectsStore } from './useProjectsStore';

type AvailableLanguages = 'en-US' | 'fr-FR';

interface ConfigSettings {
  DarkMode: boolean;
  Language: AvailableLanguages;
}

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {
      DarkMode: true,
      Language: 'en-US' as AvailableLanguages,
    },
  }),
  actions: {
    setDarkMode(value: boolean) {
      Dark.set(value);
      this.settings.DarkMode = value;
      this.saveSettings();
    },
    setLanguage(value: AvailableLanguages) {
      i18n.global.locale.value = value;
      this.settings.Language = value;
      this.saveSettings();
      
      // Reload skills and projects with the new language
      const skillsStore = useSkillsStore();
      skillsStore.getSkills();
      
      const projectsStore = useProjectsStore();
      projectsStore.getProjects();
    },
    saveSettings() {
      LocalStorage.set('settings', this.settings);
    },
    getSettings() {
      const configSettings = LocalStorage.getItem('settings') as ConfigSettings;
      if (configSettings) {
        Dark.set(configSettings.DarkMode);
        if (configSettings.Language) {
          i18n.global.locale.value = configSettings.Language;
        }
        Object.assign(this.settings, configSettings);
      }
    },
  },
});
