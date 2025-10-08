<script setup lang="ts">
const { push } = useRouter()
</script>
<template>
  <header class="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
    <section class="container mx-auto py-3 px-4 md:py-3 flex items-center justify-between gap-6">
      <div class="flex items-center gap-1 flex-1">
        <NuxtLink to="/" class="text-primary font-bold font-code text-2xl">Lodgr</NuxtLink>
      </div>
      <Button @click="push('/explorer')"> Explore All Homes </Button>
      <HeaderAuth />
    </section>
  </header>
</template>
