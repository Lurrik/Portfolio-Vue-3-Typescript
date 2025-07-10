<template>
  <div class="section-about q-py-xl q-px-sm">
    <div class="container col-8">
      <!-- Section Header with Animated Background -->
      <section-header
        :title="t('about.title')"
        :subtitle="t('about.subtitle')"
      />

      <!-- Main Content with Grid Layout -->
      <div class="row justify-center q-col-gutter-md">
        <!-- Description Card with Geometric Background -->
        <div ref="contentSection" class="col-sm-12">
          <div class="about-description q-mb-xl">
            <div class="geometric-bg">
              <div class="geo-element geo-1"></div>
              <div class="geo-element geo-2"></div>
              <div class="geo-element geo-3"></div>
            </div>
            <div class="description-content q-pa-xl q-pa-md-sm">
              <div class="text-body1" v-html="t('about.description')"></div>
            </div>
          </div>

          <!-- Info Cards with Hover Effects -->
          <div class="row q-col-gutter-md">
            <!-- Personal Info Card -->
            <div
              v-motion-slide-visible-left
              ref="personalSection"
              class="col-md-6 col-xs-12 col-sm-12"
            >
              <div class="info-card personal-card">
                <div class="card-header">
                  <div class="header-icon">
                    <q-icon name="person" size="xs" />
                  </div>
                  <h3 class="text-h6 q-mb-none">
                    {{ t('about.personalTitle') }}
                  </h3>
                </div>
                <div class="card-content">
                  <div
                    v-for="(value, key, index) in personalInfo"
                    :key="key"
                    class="info-item"
                    :class="`item-${index}`"
                  >
                    <div class="item-icon">
                      <q-icon :name="value.icon" color="primary" />
                    </div>
                    <div class="item-content">
                      <div class="item-label">
                        {{ t(`about.info.${key}.label`) }}
                      </div>
                      <div class="item-value">
                        {{ t(`about.info.${key}.value`) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Professional Info Card -->
            <div
              v-motion-slide-visible-right
              ref="professionalSection"
              class="col-md-6 col-xs-12 col-sm-12"
            >
              <div class="info-card professional-card">
                <div class="card-header">
                  <div class="header-icon">
                    <q-icon name="work" size="xs" />
                  </div>
                  <h3 class="text-h6 q-mb-none">
                    {{ t('about.professionalTitle') }}
                  </h3>
                </div>
                <div class="card-content">
                  <div
                    v-for="(value, key, index) in professionalInfo"
                    :key="key"
                    class="info-item"
                    :class="`item-${index}`"
                  >
                    <div class="item-icon">
                      <q-icon :name="value.icon" color="primary" />
                    </div>
                    <div class="item-content">
                      <div class="item-label">
                        {{ t(`about.info.${key}.label`) }}
                      </div>
                      <div class="item-value">
                        {{ t(`about.info.${key}.value`) }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useMotion } from '@vueuse/motion';

import SectionHeader from '../common/SectionHeader.vue';

const { t } = useI18n();

const contentSection = ref<HTMLElement>();
const personalSection = ref<HTMLElement>();
const professionalSection = ref<HTMLElement>();

useMotion(contentSection, {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 800,
      delay: 300,
      ease: 'easeOut',
    },
  },
});

useMotion(personalSection, {
  initial: {
    opacity: 0,
    x: -50,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 800,
      delay: 500,
      ease: 'easeOut',
    },
  },
});

useMotion(professionalSection, {
  initial: {
    opacity: 0,
    x: 50,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 800,
      delay: 700,
      ease: 'easeOut',
    },
  },
});

interface InfoItem {
  icon: string;
}

const personalInfo: Record<string, InfoItem> = {
  name: { icon: 'person' },
  location: { icon: 'place' },
  languages: { icon: 'language' },
};

const professionalInfo: Record<string, InfoItem> = {
  experience: { icon: 'work' },
  education: { icon: 'school' },
  interests: { icon: 'interests' },
};
</script>

<style lang="scss" scoped>
.section-about {
  position: relative;
  display: flex;
  justify-content: center;

  // Description Card Styling
  .about-description {
    position: relative;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition:
      transform 0.4s ease,
      box-shadow 0.4s ease;
    margin-bottom: 2.5rem;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);

      .geo-element {
        transform: scale(1.1) rotate(10deg);
      }
    }

    .geometric-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
      opacity: 0.07;

      .geo-element {
        position: absolute;
        background: var(--q-primary);
        transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .geo-1 {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        top: -100px;
        left: -50px;
      }

      .geo-2 {
        width: 150px;
        height: 150px;
        border-radius: 4px;
        bottom: -50px;
        right: 10%;
        transform: rotate(45deg);
      }

      .geo-3 {
        width: 100px;
        height: 100px;
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        top: 30%;
        right: -30px;
      }
    }

    .description-content {
      position: relative;
      z-index: 1;
      padding: 2rem;

      .text-body1 {
        line-height: 1.8;
        letter-spacing: 0.01em;
        text-align: justify;
      }
    }
  }

  // Info Cards Styling
  .info-card {
    position: relative;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: 100%;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.12);
    }

    .card-header {
      display: flex;
      align-items: center;
      padding: 1.25rem 1.5rem;
      background: linear-gradient(
        135deg,
        var(--q-primary) 0%,
        transparent 100%
      );
      color: white;

      .header-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        margin-right: 1rem;
        backdrop-filter: blur(5px);
      }

      h3 {
        font-weight: 600;
        letter-spacing: 0.01em;
        margin: 0;
      }
    }

    .card-content {
      padding: 1.5rem;
    }

    .info-item {
      display: flex;
      align-items: flex-start;
      padding: 1rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      opacity: 0;
      animation: slideIn 0.5s forwards;

      &:last-child {
        border-bottom: none;
      }

      @for $i from 0 through 3 {
        &.item-#{$i} {
          animation-delay: #{0.2 + $i * 0.1}s;
        }
      }

      .item-icon {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 8px;
        background: rgba(25, 118, 210, 0.1);
        transition: all 0.3s ease;
        flex-shrink: 0;
      }

      &:hover .item-icon {
        background: rgba(25, 118, 210, 0.2);
        transform: scale(1.1) rotate(5deg);
      }

      .item-content {
        flex: 1;

        .item-label {
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .item-value {
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.4;
        }
      }
    }
  }

  // Animations
  @keyframes pulse {
    0% {
      transform: scaleX(1);
      opacity: 1;
    }
    50% {
      transform: scaleX(1.3);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .col-8 {
    width: 80%;

    @media (max-width: $breakpoint-md-min) {
      width: 90%;
    }
  }

  // Responsive adjustments
  @media (max-width: 767px) {
    .info-card {
      margin-bottom: 1.5rem;
      width: 100%;
      max-width: 100%;
    }

    .about-description {
      margin-bottom: 2rem;
      padding: 0;
    }

    .description-content {
      padding: 1.5rem !important;
    }

    .card-header {
      padding: 1rem;
    }

    .card-content {
      padding: 1rem;
    }

    .info-item {
      padding: 0.75rem 0;
    }

    .item-icon {
      margin-right: 0.75rem;
    }

    .item-label {
      font-size: 0.75rem !important;
    }

    .item-value {
      font-size: 0.9rem !important;
    }
  }
}
</style>
