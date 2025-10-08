<script setup lang="ts">
import { generateProperties } from '~/mocks';

useAppTitle('Wishlist');
definePageMeta({
  middleware: ['auth'],
  // pageTransition: { name: 'fade' },
})


const wishlist = generateProperties(10);

</script>
<template>
  <main class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ExplorerCard v-for="item in wishlist" :key="item.id" v-bind="item" />
    </div>
  </main>
</template>