<script setup lang="ts">
const { params } = useRoute();
const { location } = params
import { states } from '~/constants/browser'
const title = `Houses in ${states.find(state => state.slug === location)?.name} `
useAppTitle(title)

</script>
<template>
  <Browser>
    <template #title>
      {{ title }}
    </template>
  </Browser>
</template>