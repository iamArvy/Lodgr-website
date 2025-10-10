<script setup lang="ts">
import type { Property } from '~/interfaces';
import Gallery from './gallery.vue';
import { formatPrice } from '~/helpers/format-price';
const props = defineProps<Property>();
const items = [
  { icon: 'lucide:bed', value: props.rooms },
  { icon: 'lucide:bath', value: props.baths },
];
const { push } = useRouter();
</script>
<template>
  <div class="select-none space-y-3" @click="push({ name: 'home-id', params: { id } })">
    <Gallery :gallery="gallery" />
    <div class="px-1">
      <h3 class="font-bold w-1/1 truncate">{{ name }}</h3>
      <p class="text-sm w-1/1 truncate">{{ location }}</p>

      <div class="flex items-center gap-1 text-sm ">
        <Icon name="material-symbols:star" class="inline-block text-secondary" size="16" /> {{ rating }} ({{
          reviewsCount }})
      </div>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1">
          <span v-for="{ icon, value } in items" class="text-sm font-medium flex items-center gap-1">
            <Icon :name="icon" class="inline-block mx-1" size="16" /> {{ value }}
          </span>
        </div>
        <span class="font-bold text-lg">
          {{ formatPrice(price) }}<span class="text-sm font-medium ">
          </span>
        </span>
      </div>
    </div>
  </div>
</template>