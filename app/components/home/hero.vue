<script setup lang="ts">
import { heroConstant } from './constants';
const { title, subtitle } = heroConstant;
</script>
<template>
  <section
    class="text-center container mx-auto bg-hero py-20 md:min-h-[70vh] rounded-2xl bg-cover bg-center flex flex-col justify-center items-center space-y-8 px-4">
    <div class="space-y-4 animate-fade-in text-center max-w-2xl">
      <h1 class="text-3xl md:text-5xl text-foreground font-bold mb-4 font-code max-w-2xl">{{ title }}</h1>
      <p class="md:text-xl text-foreground/90">{{ subtitle }}</p>
    </div>
    <HomeSearch class="animate-scale-in" />
  </section>
</template>