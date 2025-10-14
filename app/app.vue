<script setup lang="ts">
import 'vue-sonner/style.css'; // vue-sonner v2 requires this import
</script>
<template>
  <NuxtLayout>
    <Transition name="slide" mode="out-in">
      <NuxtPage />
    </Transition>
  </NuxtLayout>
  <Toaster />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>