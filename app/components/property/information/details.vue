<script setup lang="ts">
import type { PropertyDetails } from "~/interfaces";
import Section from "./section.vue";

defineProps<{ details: PropertyDetails[] }>()
</script>
<template>
  <Section title="Property Details">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="{ label, value } in details" :key="label" class="flex justify-between py-2 border-b">
        <span class="text-muted-foreground">{{ label }}</span>
        <span class="font-semibold">{{ value }}</span>
      </div>
    </div>
  </Section>
</template>