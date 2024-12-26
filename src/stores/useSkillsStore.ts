import { defineStore } from 'pinia';

export const useSkillsStore = defineStore('skills', {
  state: () => ({
    skills: [],
  }),
  actions: {
    async getSkills() {
      return new Promise<void>((resolve, reject) => {
        fetch('/skills.json')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
          })
          .then((jsonData) => {
            this.skills = jsonData.skills;
            return resolve();
          })
          .catch((error) => {
            console.error('Erreur:', error);
            return reject();
          });
      });
    },
  },
});
