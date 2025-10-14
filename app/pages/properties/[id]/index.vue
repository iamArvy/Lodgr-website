<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';
import { formatPrice } from '~/helpers/format-price';
import { generateProperty } from '~/mocks';
const property = generateProperty();
const { name, location, rating, reviewsCount, baths, rooms, price } = property;
const infoItems = [
  {
    icon: "material-symbols:bed",
    label: "Bedrooms",
    value: rooms
  },
  {
    icon: "material-symbols:bathtub",
    label: "Bathrooms",
    value: baths
  }
]

const headDetails = [
  {
    icon: "lucide:map-pin",
    value: location
  },
  {
    icon: "material-symbols:star",
    value: `${rating} (${reviewsCount} reviews)`
  },
  {
    icon: "material-symbols:bed",
    value: `${rooms} Bedrooms`
  },
  {
    icon: "material-symbols:bathtub",
    value: `${baths} Bathrooms`
  },
]
useAppTitle(name);
const inFavourites = ref(false);

</script>
<template>
  <main class="space-y-5 container mx-auto">
    <section class="lg:grid grid-cols-3 gap-3 space-y-4">
      <div class="relative ">
        <PropertyGallery :gallery="property.gallery" />
        <Button class="absolute top-2 right-2 flex items-center gap-1" variant="favourite" size="icon"
          @click="inFavourites = !inFavourites">
          <Icon :name="inFavourites ? 'material-symbols:favorite-rounded' : 'material-symbols:favorite-outline-rounded'"
            size=" 20" class="text-primary" />
        </Button>
      </div>
      <div class="flex-1 space-y-1 col-span-2">
        <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold">{{ name }}</h1>
        <p v-for="{ icon, value } in headDetails" class="flex items-center gap-1">
          <Icon :name="icon" class="inline-block text-primary" size="20" /> {{ value }}
        </p>
        <div class="flex gap-1">
          <Button @click="navigateTo({ name: 'properties-id-book', params: { id: property.id } })">
            Book Now
          </Button>
          <Button>
            Schedule Tour
          </Button>
        </div>
      </div>
    </section>
    <section>
      <PropertyInformation v-bind="property" />
    </section>
  </main>
</template>