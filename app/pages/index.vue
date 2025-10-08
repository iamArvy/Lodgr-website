<script setup lang="ts" >
import { homePageProperties } from '~/mocks';
useAppTitle("Home")
</script>
<template>
  <main>
    <HomeHero />
    <HomeProperties v-for="{label, properties} in homePageProperties" :label="label" :properties="properties" />
  </main>
</template>