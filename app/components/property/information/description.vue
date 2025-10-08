<script setup lang="ts">
import Section from './section.vue';

defineProps<{ description: string }>();
</script>
<template>
  <Section title="Description">
    <div class="prose max-w-none text-base" v-html="description" />
  </Section>
</template>