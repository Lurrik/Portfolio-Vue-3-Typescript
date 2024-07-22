<template>
  <q-card-section>
    <q-timeline color="primary">
      <q-timeline-entry
        v-for="(description, index) in descriptions"
        :key="index"
        :title="description.title"
      >
        <ul>
          <li v-for="(task, taskIndex) in description.tasks" :key="taskIndex">{{task}}</li>
        </ul>
      </q-timeline-entry>
    </q-timeline>
  </q-card-section>
</template>

<script setup lang="ts">
defineProps({
  descriptions: {
    type: Object,
    required: true,
  },
});
</script>