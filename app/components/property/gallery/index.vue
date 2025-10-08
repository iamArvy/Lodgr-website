<script setup lang="ts">
import type { PropertyGalleryProps } from '~/interfaces';
const props = defineProps<PropertyGalleryProps>()
</script>
<template>
  <section class="container mx-auto space-y-3">
    <div class="grid grid-cols-4 auto-rows-[150px] gap-2 max-h-[60vh] rounded-lg overflow-hidden">
      <img v-for="(img, i) in gallery" :key="i" :src="img" :class="i === 0 ? 'col-span-2 row-span-2' : ''"
        class="w-full h-full object-cover rounded-lg" />
    </div>
  </section>
</template>