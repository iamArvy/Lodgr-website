<script setup lang="ts">
import { ad } from "./constants";
const { icon, text, cta } = ad;
</script>
<template>
  <div class="bg-primary text-white font-semibold">
    <section
      class="container mx-auto flex justify-center items-center gap-3 py-1 text-sm"
    >
      <Icon :name="icon" size="20" />
      <p>{{ text }}</p>
      <Button type="secondary" class="text-sm bg-black">
        {{cta.label}}
      </Button>
    </section>
  </div>
</template>
