<template>
  <div class="video-player-container">
    <div class="video-wrapper" :class="{ 'is-playing': isPlaying }">
      <video
        ref="videoRef"
        class="video-element"
        :src="src"
        preload="metadata"
        @click="togglePlay"
        @play="isPlaying = true"
        @pause="isPlaying = false"
        @ended="isPlaying = false"
        @loadedmetadata="onMetadataLoaded"
      ></video>

      <div v-if="!isPlaying" class="play-overlay" @click="togglePlay">
        <q-icon name="play_arrow" size="3rem" color="primary" />
      </div>

      <div class="controls-container" v-show="controlsVisible || !isPlaying">
        <div class="progress-bar" @click="seek">
          <div class="progress-background"></div>
          <div class="progress-filled" :style="{ width: `${progress}%` }"></div>
          <div class="progress-handle" :style="{ left: `${progress}%` }"></div>
        </div>

        <div class="controls">
          <q-btn
            flat
            round
            :icon="isPlaying ? 'pause' : 'play_arrow'"
            color="primary"
            @click="togglePlay"
          />

          <div class="time-display">
            {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
          </div>

          <div class="volume-control">
            <q-btn
              flat
              round
              :icon="isMuted ? 'volume_off' : 'volume_up'"
              color="primary"
              @click="toggleMute"
            />
            <q-slider
              v-model="volume"
              color="primary"
              class="volume-slider"
              :min="0"
              :max="100"
              @change="updateVolume"
            />
          </div>

          <q-btn
            flat
            round
            icon="fullscreen"
            color="primary"
            @click="toggleFullscreen"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

defineProps({
  src: {
    type: String,
    required: true,
  },
});

const videoRef = ref<HTMLVideoElement | null>(null);
const isPlaying = ref<boolean>(false);
const currentTime = ref<number>(0);
const duration = ref<number>(0);
const volume = ref<number>(100);
const isMuted = ref<boolean>(false);
const controlsVisible = ref<boolean>(false);
const controlsTimeout = ref<number | null>(null);

const progress = computed<number>(() => {
  if (duration.value === 0) return 0;
  return (currentTime.value / duration.value) * 100;
});

function togglePlay(): void {
  if (!videoRef.value) return;

  if (isPlaying.value) {
    videoRef.value.pause();
  } else {
    videoRef.value.play();
  }

  showControls();
}

function toggleMute(): void {
  if (!videoRef.value) return;

  isMuted.value = !isMuted.value;
  videoRef.value.muted = isMuted.value;

  showControls();
}

function updateVolume(): void {
  if (!videoRef.value) return;

  videoRef.value.volume = volume.value / 100;
  if (volume.value === 0) {
    isMuted.value = true;
    videoRef.value.muted = true;
  } else if (isMuted.value) {
    isMuted.value = false;
    videoRef.value.muted = false;
  }

  showControls();
}

function seek(event: MouseEvent): void {
  if (!videoRef.value) return;

  const progressBar = event.currentTarget as HTMLElement;
  const rect = progressBar.getBoundingClientRect();
  const pos = (event.clientX - rect.left) / rect.width;
  videoRef.value.currentTime = pos * duration.value;

  showControls();
}

function toggleFullscreen(): void {
  if (!videoRef.value) return;

  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    videoRef.value.requestFullscreen();
  }

  showControls();
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function onMetadataLoaded(): void {
  if (!videoRef.value) return;
  duration.value = videoRef.value.duration;
}

function updateTime(): void {
  if (!videoRef.value) return;
  currentTime.value = videoRef.value.currentTime;
}

function showControls(): void {
  controlsVisible.value = true;

  if (controlsTimeout.value) {
    clearTimeout(controlsTimeout.value);
  }

  if (isPlaying.value) {
    controlsTimeout.value = window.setTimeout(() => {
      controlsVisible.value = false;
    }, 3000);
  }
}

watch(
  videoRef,
  (newVal) => {
    if (newVal) {
      newVal.volume = volume.value / 100;
    }
  },
  { immediate: true },
);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.addEventListener('timeupdate', updateTime);
    document.addEventListener('mousemove', showControls);
  }
});

onUnmounted(() => {
  if (videoRef.value) {
    videoRef.value.removeEventListener('timeupdate', updateTime);
    document.removeEventListener('mousemove', showControls);
  }

  if (controlsTimeout.value) {
    clearTimeout(controlsTimeout.value);
  }
});
</script>

<style lang="scss" scoped>
.video-player-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background-color: #000;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover .controls-container {
    opacity: 1;
  }
}

.video-element {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .q-icon {
    opacity: 0.8;
    transition:
      transform 0.2s ease,
      opacity 0.2s ease;
    transform: scale(1.5);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  }

  &:hover .q-icon {
    opacity: 1;
    transform: scale(1.7);
  }
}

.controls-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.progress-bar {
  position: relative;
  height: 5px;
  width: 100%;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    .progress-handle {
      transform: scale(1);
      opacity: 1;
    }

    .progress-background {
      height: 8px;
    }

    .progress-filled {
      height: 8px;
    }
  }
}

.progress-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2.5px;
  transition: height 0.2s ease;
}

.progress-filled {
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  background-color: var(--q-primary);
  border-radius: 2.5px;
  transition: height 0.2s ease;
}

.progress-handle {
  position: absolute;
  top: 50%;
  width: 12px;
  height: 12px;
  background-color: var(--q-primary);
  border-radius: 50%;
  transform: scale(0) translateY(-50%);
  opacity: 0;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
  margin-left: -6px;
  transform-origin: center;

  .progress-bar:hover & {
    transform: scale(1) translateY(-50%);
  }
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}

.time-display {
  font-size: 0.8rem;
  margin: 0 10px;
  white-space: nowrap;
}

.volume-control {
  display: flex;
  align-items: center;

  .volume-slider {
    width: 60px;
    margin-left: 8px;
  }
}

@media (max-width: 767px) {
  .volume-control .volume-slider {
    display: none;
  }

  .time-display {
    font-size: 0.7rem;
    margin: 0 5px;
  }
}
</style>
