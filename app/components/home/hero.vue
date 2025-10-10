<script setup lang="ts">
import { heroConstant } from './constants';
const { title, subtitle } = heroConstant;
</script>
<template>
  <section
    class="text-center container mx-auto bg-hero py-20 md:min-h-[70vh] rounded-2xl bg-cover bg-center flex flex-col justify-center items-center space-y-8 px-4">
    <div class="text-primary-foreground space-y-4 animate-fade-in text-center max-w-2xl">
      <h1 class=" text-xl sm:text-3xl md:text-5xl font-bold mb-4 font-code max-w-2xl">{{ title }}</h1>
      <p class="text-sm md:text-xl font-semibold">{{ subtitle }}</p>
      <Button @click="navigateTo('/browse')" variant="secondary" size="lg"> Start Browsing </Button>
    </div>
  </section>
</template>