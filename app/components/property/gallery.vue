<script setup lang="ts">
import type { PropertyGalleryProps } from '~/interfaces';
defineProps<PropertyGalleryProps>()
const { settings, emblaMainApi, selectedIndex } = usePropertyGallery();
</script>
<template>
  <Carousel v-bind="settings" @init-api="(val) => emblaMainApi = val" class="relative group">
    <div
      class="absolute z-5 w-full top-1/2 -translate-y-1/2 hidden md:group-hover:flex items-center justify-between px-2 transition-all ease-in-out duration-500">
      <CarouselPrevious />
      <CarouselNext />
    </div>
    <CarouselContent>
      <CarouselItem v-for="image in gallery" :key="image">
        <figure class="relative overflow-hidden rounded-2xl md:aspect-[2/1] lg:aspect-video">
          <img :src="image" alt="" class="w-full object-cover">
          <div class="flex space-x-2 w-full justify-center mt-2 absolute bottom-2">
            <span v-for="(_, index) in gallery" :key="index" class="p-1 w-2 h-2 rounded-full"
              :class="index === selectedIndex ? 'bg-primary w-5' : 'bg-white'" />
          </div>
        </figure>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>