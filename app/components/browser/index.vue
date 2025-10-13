<script setup lang="ts">
import { generateProperties } from '~/mocks';
const properties = generateProperties(20);
</script>
<template>
  <main class="container mx-auto space-y-6">
    <section class="flex justify-between items-center gap-1">
      <h1 class="text-lg sm:text-xl md:text-3xl font-bold">
        <slot name="title" />
      </h1>
      <BrowserFilter />
    </section>
    <section class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 col-span-2">
      <PropertyListItem v-for="property in properties" :key="property.id" v-bind="property" />
    </section>
  </main>
</template>