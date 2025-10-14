<script setup lang="ts">
import { generateProperties } from '~/mocks';
useAppTitle('Wishlist');
definePageMeta({
  middleware: ['auth'],
})
const wishlist = generateProperties(10, { inFavourites: true });

</script>
<template>
  <main class="container mx-auto px-4">
    <h1 class="text-xl md:text-3xl font-bold">Wishlist</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
      <PropertyListItem v-for="property in wishlist" :key="property.id" v-bind="property" />
    </div>
  </main>
</template>