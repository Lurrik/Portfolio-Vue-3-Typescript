<template>
  <q-parallax class="section-about">
    <template #media>
      <img :src="backgroundProfil" fit="scale-down" />
    </template>

    <template #content>
      <div class="absolute column items-center">
        <q-card class="q-ma-xl">
          <q-card-section class="text-center">
            <div class="text-h2 text-primary">Qui je suis ?</div>
          </q-card-section>

          <q-separator dark inset />

          <q-card-section class="text-body1">
            <p>
              Je suis Erick Golos, un développeur passionné par la création de solutions innovantes et efficaces.
              Ma principale motivation en tant que développeur est de créer des produits qui ont un impact positif sur la vie des gens. J'aime résoudre des problèmes concrets et travailler sur des projets qui peuvent améliorer la façon dont les gens interagissent avec la technologie. Que ce soit en créant une application multiplateforme pour simplifier le quotidien des utilisateurs ou en développant un système de gestion pour une entreprise, je suis toujours animé par cette volonté de créer des produits utiles et innovants.
              Je suis également passionné par la collaboration et le travail en équipe. J'aime travailler avec des personnes ayant des compétences complémentaires aux miennes pour créer des produits de qualité. Je suis convaincu que la coopération et le partage de connaissances sont essentiels pour atteindre les objectifs fixés.
              Enfin, j'apprécie énormément le fait que le développement d'applications soit un domaine en constante évolution. Les nouvelles technologies et les nouvelles pratiques émergent constamment, ce qui signifie qu'il y a toujours quelque chose de nouveau à apprendre et à découvrir. Je suis toujours à l'affût des dernières tendances et je n'hésite pas à expérimenter de nouvelles approches pour améliorer mes compétences.
              Voilà donc ce qui me motive en tant que développeur.
              J'espère que vous apprécierez mon travail et que nous aurons l'occasion de collaborer ensemble sur des projets passionnants à l'avenir.
            </p>
          </q-card-section>
        </q-card>
      </div>
    </template>
  </q-parallax>
</template>

<script setup lang="ts">
const backgroundProfil: URL = new URL(
  '/src/assets/mountain.jpg',
  import.meta.url
);
</script>

<style lang="scss">
.section-about {
  height: calc(100vh - 50px) !important;

  .q-parallax__media {
    bottom: 200px;
  }
}
</style>