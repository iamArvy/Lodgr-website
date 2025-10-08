<script setup lang="ts">
import { generateProperty } from '~/mocks';
const property = generateProperty();
useAppTitle(property.name);
</script>
<template>
  <main class="space-y-5">
    <PropertyGallery v-bind="property" />
    <section class="grid grid-cols-3 container mx-auto gap-8">
      <PropertyInformation v-bind="property" class="col-span-2" />
      <PropertySidebar :price="property.price" :frequency="property.frequency" :agent="property.agent" />
    </section>
  </main>
</template>