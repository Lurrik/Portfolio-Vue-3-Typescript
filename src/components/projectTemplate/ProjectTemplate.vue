<template>
  <q-page class="project-template q-pb-xl">
    <div class="row flex-center full-width">
      <q-card ref="projectLogo" class="logo-card width-80 bg-transparent">
        <q-img :src="projectPicture"> </q-img>
      </q-card>
      <div class="row items-start width-80">
        <h4 class="text-primary">{{ project.label }}</h4>
      </div>
      <q-separator class="width-80" />
      <div class="column width-80">
        <div class="row full-width">
          <div
            class="content-center text-body1 col-lg-12 col-sm-12 q-py-md"
            v-html="project.desc"
          ></div>
          <div class="col-lg-6 col-sm-6 col-xs-12 column">
            <div class="row items-baseline gap-8">
              <h6 class="text-primary col-4">CATEGORIE</h6>
              <div class="text-h6 col-6" :class="classJustifyList">
                <span>{{ project.category }}</span>
              </div>
            </div>
            <div class="row items-baseline gap-8">
              <h6 class="text-primary col-4">ANNEE</h6>
              <div class="row text-h6 col-6" :class="classJustify">
                <span>{{ project.year }}</span>
              </div>
            </div>
            <div class="row items-baseline gap-8">
              <h6 class="text-primary col-4">ENTREPRISE</h6>
              <div class="row text-h6 col-6" :class="classJustify">
                <span>{{ project.company }}</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6 col-xs-12 column">
            <div class="row items-baseline gap-8 max-height-180">
              <h6 class="text-primary col-4">TRAVAUX</h6>
              <div class="text-h6 col-6 line-height" :class="classJustifyList">
                <span
                  v-for="(work, index) in project.works"
                  :key="work"
                  :class="classTextList"
                >
                  {{ work }}
                  {{ index + 1 != project.works.length ? ',' : '' }}
                </span>
              </div>
            </div>
            <div class="row items-baseline gap-8">
              <h6 class="text-primary col-4">PARTICIPANTS</h6>
              <div class="text-h6 col-6 line-height" :class="classJustifyList">
                <span
                  v-for="(participant, index) in project.participants"
                  :key="participant"
                  :class="classTextList"
                >
                  {{ participant }}
                  {{ index + 1 != project.participants.length ? ',' : '' }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="project.links.length" class="row q-py-xl gap-8">
          <a
            v-for="link in project.links"
            :key="link.path"
            class="text-primary"
            :href="link.path"
            target="_blank"
          >
            {{ link.title }}
            <i class="fa-solid fa-arrow-up-right-from-square q-px-sm" />
          </a>
        </div>
        <div class="row q-py-md gap-8">
          <q-chip
            v-for="tech in project.tech"
            :key="tech"
            class="q-ma-none"
            outline
            color="primary"
            :label="tech"
          />
        </div>
      </div>
    </div>
    <q-btn
      class="back-button text-primary q-ma-md large-screen-only"
      icon="fa fa-arrow-left"
      @click="back"
    >
      <q-tooltip class="bg-transparent text-primary text-subtitle2">
        Retour
      </q-tooltip>
    </q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from 'vue';
import { useQuasar, getCssVar, setCssVar } from 'quasar';
import { useRouter } from 'vue-router';
import { useMotion } from '@vueuse/motion';

import type { Project } from 'src/models/interfaces/projects';

interface Props {
  project: Project;
}

const props = defineProps<Props>();

const $q = useQuasar();
const router = useRouter();
const projectLogo = ref<HTMLElement>();

useMotion(projectLogo, {
  initial: {
    opacity: 0,
    y: -1000,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 100,
    },
  },
});

const primary: string | null = getCssVar('primary');
const gradientEllipseLeft: string | null = getCssVar('gradient-ellispse-left');
const gradientCircleRight: string | null = getCssVar('gradient-circle-right');
const gradientEllipse1Right: string | null = getCssVar(
  'gradient-ellispse-1-right',
);
const gradientEllipse2Right: string | null = getCssVar(
  'gradient-ellispse-2-right',
);

const projectPicture = computed<string>(() => {
  if (!props.project.name) return '';
  return `https://erickgolos.com/images/projects/${props.project.name}/logo.png`;
});

const classJustify = computed<string>(() => {
  return $q.screen.xs || $q.screen.sm ? 'justify-end' : 'justify-start';
});

const classJustifyList = computed<string>(() => {
  return $q.screen.xs || $q.screen.sm
    ? 'justify-end row'
    : 'justify-start column';
});

const classTextList = computed<string>(() => {
  return $q.screen.xs || $q.screen.sm ? 'text-right' : 'text-left';
});

watch(
  () => $q.dark.isActive,
  (val) => {
    setPrimaryVar(val);
  },
  {
    immediate: true,
  },
);

function setPrimaryVar(isDark: boolean): void {
  if (isDark) {
    setCssVar('primary', props.project.colorDark.primary);
    setCssVar(
      'gradient-ellispse-left',
      props.project.colorDark.gradientEllipseLeft,
    );
    setCssVar(
      'gradient-circle-right',
      props.project.colorDark.gradientCircleRight,
    );
    setCssVar(
      'gradient-ellispse-1-right',
      props.project.colorDark.gradientEllipse1Right,
    );
    setCssVar(
      'gradient-ellispse-2-right',
      props.project.colorDark.gradientEllipse2Right,
    );
  } else {
    setCssVar('primary', props.project.colorLight.primary);
    setCssVar(
      'gradient-ellispse-left',
      props.project.colorLight.gradientEllipseLeft,
    );
    setCssVar(
      'gradient-circle-right',
      props.project.colorLight.gradientCircleRight,
    );
    setCssVar(
      'gradient-ellispse-1-right',
      props.project.colorLight.gradientEllipse1Right,
    );
    setCssVar(
      'gradient-ellispse-2-right',
      props.project.colorLight.gradientEllipse2Right,
    );
  }
}

function back(): void {
  router.back();
}

onUnmounted(() => {
  if (primary != null) setCssVar('primary', primary);
  if (gradientEllipseLeft != null)
    setCssVar('gradient-ellispse-left', gradientEllipseLeft);
  if (gradientCircleRight != null)
    setCssVar('gradient-circle-right', gradientCircleRight);
  if (gradientEllipse1Right != null)
    setCssVar('gradient-ellispse-1-right', gradientEllipse1Right);
  if (gradientEllipse2Right != null)
    setCssVar('gradient-ellispse-2-right', gradientEllipse2Right);
});
</script>

<style lang="scss" scoped>
.project-template {
  .width-80 {
    width: 80%;
  }

  .separator {
    width: 50%;
  }

  .line-height {
    line-height: 1.3em;
  }

  .max-height-180 {
    max-height: 180px;
  }

  .logo-card {
    border-radius: 0 0 32px 32px;
    max-height: 50vh;

    .q-img {
      max-height: 50vh;
    }
  }

  .back-button {
    position: fixed;
    top: 50px;
    left: 12px;
  }
}
</style>
