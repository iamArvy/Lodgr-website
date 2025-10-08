<script setup lang="ts">
import { generateProperties } from '~/mocks';
const properties = generateProperties(30);
useAppTitle("Explorer")
</script>
<template>
  <main class="container mx-auto">
    <!-- <section></section> -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8">
      <div class="hidden lg:block sticky top-20 self-start">
        <ScrollArea class="rounded-xl bg-card h-[450px] shadow-2xl">
          <ExplorerFilter />
        </ScrollArea>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 col-span-2">
        <ExplorerCard v-for="property in properties" :key="property.id" v-bind="property" />
      </div>
    </section>
  </main>
</template>