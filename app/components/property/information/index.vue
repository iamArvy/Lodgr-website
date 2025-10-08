<script setup lang="ts">
import type { PropertyInformationProps } from '~/interfaces';
import Amenities from './amenities.vue';
import Description from './description.vue';
import Details from './details.vue';
const props = defineProps<PropertyInformationProps>()

const infoItems = [
  {
    icon: "material-symbols:bed",
    label: "Bedrooms",
    value: props.rooms
  },
  {
    icon: "material-symbols:bathtub",
    label: "Bathrooms",
    value: props.baths
  }
]
</script>
<template>
  <div class="space-y-5">
    <div class="flex items-center">
      <div class="flex-1 space-y-3">
        <h1 class="text-5xl font-bold">{{ name }}</h1>
        <div class="flex items-center gap-4 text-xl ">
          <p class="flex items-center gap-1">
            <Icon name="material-symbols:star" class="text-secondary" size="24" />
            <span class="font-bold">{{ rating }}</span>
            ({{ reviewsCount }} reviews)
          </p>
          <p class="flex items-center gap-1">
            <Icon name="material-symbols:map" size="24" /> {{ location }}
          </p>
          <p class="flex items-center gap-1 capitalize">
            <Icon name="material-symbols:person" size="24" /> user
          </p>
        </div>
      </div>
      <Button variant="outline" size="lg">
        <Icon name="lucide:heart" />
        Save
      </Button>
    </div>
    <div class="flex gap-5">
      <div v-for="{ value, icon, label } in infoItems" class="flex items-center gap-2">
        <Icon :name="icon" size="22" class="text-primary" />
        <span class="font-semibold">{{ value }} {{ label }}</span>
      </div>
    </div>
    <Description :description="description ?? ''" />
    <Amenities :amenities="amenities" />
    <Details :details="details" />
  </div>
</template>