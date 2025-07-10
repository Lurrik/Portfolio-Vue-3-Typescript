import { defineStore } from 'pinia';
import { i18n } from '../boot/i18n';

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    skills: [],
  }),
  actions: {
    async getSkills() {
      const currentLocale = i18n.global.locale.value;
      const skillsFile = `/skills-${currentLocale.substring(0, 2)}.json`;

      return new Promise<void>((resolve, reject) => {
        fetch(skillsFile)
          .then((response) => {
            return response;
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Error loading JSON file');
            }
            return response.json();
          })
          .then((jsonData) => {
            this.skills = jsonData.skills;
            return resolve();
          })
          .catch((error) => {
            console.error('Error:', error);
            return reject();
          });
      });
    },
  },
});
