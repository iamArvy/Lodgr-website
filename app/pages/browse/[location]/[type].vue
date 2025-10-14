<script setup lang="ts">
const { params } = useRoute();
const { location, type } = params
import { states, mockPropertyTypes } from '~/constants/browser'

const title = `${mockPropertyTypes.find(property => property.slug === type)?.name} in ${states.find(state => state.slug === location)?.name}`
useAppTitle(title)
</script>
<template>
  <Browser>
    <template #title>
      {{ title }}
    </template>
  </Browser>
</template>