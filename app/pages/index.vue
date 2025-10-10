<script setup lang="ts">
import { homePageProperties } from '~/mocks';
useAppTitle("Home")
import { hero } from '~/constants/home'
const { title, subtitle } = hero;
</script>
<template>
  <main>
    <section
      class="text-center container mx-auto bg-hero py-20 md:min-h-[70vh] rounded-2xl bg-cover bg-center flex flex-col justify-center items-center space-y-8 px-4">
      <div class="text-primary-foreground space-y-4 animate-fade-in text-center max-w-2xl">
        <h1 class=" text-xl sm:text-3xl md:text-5xl font-bold mb-4 font-code max-w-2xl">{{ title }}</h1>
        <p class="text-sm md:text-xl font-semibold">{{ subtitle }}</p>
        <Button @click="navigateTo('/browse')" variant="secondary" size="lg"> Start Browsing </Button>
      </div>
    </section>
    <section v-for="{ label, properties } in homePageProperties" class="container mx-auto my-8">
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
          <CarouselItem v-for="property in properties" :key="property.id" class="basis-1/2 md:basis-1/4 lg:basis-1/6">
            <PropertyListItem v-bind="property" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  </main>
</template>