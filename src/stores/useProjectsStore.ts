import { defineStore } from 'pinia';

import { Project } from 'src/models/interfaces/projects';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [],
  }),
  actions: {
    async getProjects() {
      return new Promise<void>((resolve, reject) => {
        fetch('/projects.json')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
          })
          .then((jsonData) => {
            this.projects = jsonData.projects;
            return resolve();
          })
          .catch((error) => {
            console.error('Erreur:', error);
            return reject();
          });
      });
    },
  },
  getters: {
    getPersonalProject(state) {
      return state.projects.filter((project: Project) => project.personal);
    },
    getJobProject(state) {
      return state.projects.filter((project: Project) => !project.personal);
    },
  },
});
