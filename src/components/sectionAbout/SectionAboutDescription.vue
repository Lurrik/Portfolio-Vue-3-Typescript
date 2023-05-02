<template>
  <div class="text-body1 q-pa-xl">
    <h3 :class="textH">
      <strong class="text-primary">À propos de moi</strong>
      <q-separator class="q-my-md" inset />
    </h3>
    <p>
      Je suis Erick Golos, un développeur full stack avec une expertise
      <b>front-end</b>. Je suis un développeur passionné avec plusieurs années d'expérience dans la création de sites Web et d'applications interactives. Ma spécialité est de concevoir des interfaces utilisateur attrayantes et conviviales, en utilisant des technologies modernes telles que HTML, CSS, JavaScript, Typescript et le framework Vue
      <b>(Vue 2 et Vue 3)</b>.
    </p>
    <p>
      J'apprécie énormément le fait que le développement d'applications soit un domaine en constante évolution. Les nouvelles technologies et les nouvelles pratiques émergent constamment, ce qui signifie qu'il y a toujours quelque chose de nouveau à apprendre et à découvrir. Je suis toujours à l'affût des dernières tendances et je n'hésite pas à expérimenter de nouvelles approches pour améliorer mes compétences.
      Voilà donc ce qui me motive en tant que développeur.
    </p>
    <p>
      Je suis également passionné par la collaboration et le travail en équipe. J'aime travailler avec des personnes ayant des compétences complémentaires aux miennes pour créer des produits de qualité. Je suis convaincu que la coopération et le partage de connaissances sont essentiels pour atteindre les objectifs fixés.
      J'espère que vous apprécierez mon travail et que nous aurons l'occasion de collaborer ensemble sur des projets passionnants à l'avenir.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const textH = computed(() => {
  return {
    'text-h5': $q.screen.xs,
    'text-h4': $q.screen.sm,
    'text-h3': $q.screen.md,
  };
});
</script>

<style>
</style>