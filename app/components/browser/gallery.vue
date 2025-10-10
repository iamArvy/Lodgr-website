<script setup lang="ts">
defineProps<{ gallery: string[] }>();
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
      class=" absolute z-5 w-full top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center justify-between px-2 transition-all ease-in-out duration-700">
      <CarouselPrevious />
      <CarouselNext />
    </div>
    <CarouselContent>
      <CarouselItem v-for="image in gallery" :key="image">
        <figure class="overflow-hidden rounded-lg aspect-video">
          <img :src="image" alt="" class="w-full object-cover">
        </figure>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>