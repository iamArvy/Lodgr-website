<script setup lang="ts">
import type { PropertyGalleryProps } from '~/interfaces';
defineProps<PropertyGalleryProps>()
import Fade from 'embla-carousel-fade';
const plugins = [
  Fade()
]
</script>
<template>
  <Carousel :opts="{
    align: 'start',
    loop: false,
  }" :plugins="plugins" class="relative group">
    <div
      class="absolute z-5 w-full top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center justify-between px-2 transition-all ease-in-out duration-500">
      <CarouselPrevious />
      <CarouselNext />
    </div>
    <CarouselContent>
      <CarouselItem v-for="image in gallery" :key="image">
        <figure class="overflow-hidden rounded-2xl md:aspect-[2/1] lg:aspect-[5/2]">
          <img :src="image" alt="" class="w-full object-cover">
        </figure>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>