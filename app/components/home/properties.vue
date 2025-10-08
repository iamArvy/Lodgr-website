<script setup lang="ts">
import { formatPrice } from '~/helpers/format-price';
import type { PropertyListProps } from '~/interfaces';
defineProps<PropertyListProps>();
const { push } = useRouter();
</script>
<template>
  <section class="container mx-auto my-8">
    <Carousel :opts="{
      align: 'start',
      loop: false,
      dragFree: false,
    }" class="relative">
      <div class="flex items-center justify-between mb-1">
        <h2 class="text-2xl font-bold mb-4 flex-1">{{ label }}</h2>
        <div class="gap-2 relative flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent>
        <CarouselItem v-for="{ id, gallery, name, location, rating, reviewsCount, price, frequency } in properties"
          :key="id" class="basis-1/2 md:basis-1/4 lg:basis-1/6">
          <div class="select-none space-y-2" @click="push({ name: 'homes-id', params: { id } })">
            <figure class="overflow-hidden rounded-lg aspect-square">
              <img :src="gallery[0]" alt=""
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg aspect-square" />
            </figure>
            <div class="text-sm space-y-1 ">
              <div class="">
                <h3 class="text-sm font-bold w-4/4 truncate">{{ name }}</h3>
                <p class="w-4/4 truncate text-xs ">{{ location }}</p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-0.5 text-sm">
                  <Icon name="material-symbols:star" class="inline-block text-secondary" size="16" />
                  <span class="font-bold">{{ rating }}</span>
                  <span class="text-xs font-medium">({{ reviewsCount }})</span>
                </div>
                <span class="font-bold">
                  {{ formatPrice(price) }}<span class="text-xs font-medium ">/{{ frequency }}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <!-- <PropertyCard v-bind="property" /> -->
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </section>
</template>