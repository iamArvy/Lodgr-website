<script setup lang="ts">
import { formatPrice } from "~/helpers/format-price";
import type { Property } from "~/interfaces";
const props = defineProps<Property>()

const items = [
  { icon: 'lucide:bed', value: props.rooms },
  { icon: 'lucide:bath', value: props.baths },
];
</script>

<template>
  <div class="select-none space-y-2 cursor-pointer mb-2" @click="navigateTo({ name: 'homes-id', params: { id } })">
    <figure class="overflow-hidden rounded-lg aspect-video">
      <img :src="gallery[0]" alt=""
        class="w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg" />
    </figure>
    <div class="text-sm space-y-1 px-1">
      <div class="">
        <h3 class="font-bold w-4/4 truncate">{{ name }}</h3>
        <p class="w-4/4 truncate text-xs ">{{ location }}</p>
      </div>
      <p class="flex items-center gap-0.5 text-xs">
        <span class="flex items-center">
          <Icon v-for="n in Math.floor(rating)" :key="n" name="material-symbols:star"
            class="inline-block text-secondary" size="14" />
          ({{ reviewsCount }})
        </span>
      </p>
      <hr>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <span v-for="{ icon, value } in items" class="text-xs font-medium flex items-center gap-0.5">
            <Icon :name="icon" class="inline-block mx-1" size="14" /> {{ value }}
          </span>
        </div>
        <span class="font-bold">
          {{ formatPrice(price) }}
        </span>
      </div>
    </div>
  </div>
</template>