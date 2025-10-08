<script setup lang="ts">
defineProps<{ title: string }>()
</script>
<template>
  <Card>
    <CardContent>
      <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
      <slot />
    </CardContent>
  </Card>
</template>