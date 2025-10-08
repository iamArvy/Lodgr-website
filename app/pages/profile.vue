<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
useAppTitle("Profile")
</script>
<template>
  <main class="container mx-auto px-4 space-y-6">
    <ProfileInformation />
    <ProfileSecurity />
  </main>
</template>