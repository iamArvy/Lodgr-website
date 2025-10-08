<script setup lang="ts">
import type { Amenity } from '~/interfaces';
import Section from './section.vue';

defineProps<{ amenities: Amenity[] }>();
</script>
<template>
  <Section title="Amenities">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div v-for="{ icon, name } in amenities" :key="icon"
        class="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
        <Icon :name="icon" size="24" class="text-primary" />
        <span class="text-sm font-medium">{{ name }}</span>
      </div>
    </div>
  </Section>
</template>