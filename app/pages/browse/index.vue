<script setup lang="ts">
const title = "Available Houses"
useAppTitle(title)
</script>
<template>
  <Browser>
    <template #title>
      {{ title }}
    </template>
  </Browser>
</template>