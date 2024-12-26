<template>
  <q-page class="projects-views">
    <q-page-container class="page-container">
      <BackgroundGradient />
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="fade" :duration="550">
            <KeepAlive :include="['ProjectsView']">
              <component :is="Component" no-animation></component>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
      <the-footer class="large-screen-only" />
    </q-page-container>
  </q-page>
</template>

<script setup></script>

<style lang="scss">
.projects-views {
  .page-container {
    padding: 0 !important;
  }
}
</style>
