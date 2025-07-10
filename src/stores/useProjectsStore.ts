import { defineStore } from 'pinia';
import { i18n } from '../boot/i18n';

import { Project } from 'src/models/interfaces/projects';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [],
  }),
  actions: {
    async getProjects() {
      const currentLocale = i18n.global.locale.value;
      const projectsFile = `/projects-${currentLocale.substring(0, 2)}.json`;

      return new Promise<void>((resolve, reject) => {
        fetch(projectsFile)
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
            this.projects = jsonData.projects;
            return resolve();
          })
          .catch((error) => {
            console.error('Error:', error);
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
