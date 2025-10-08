<script setup lang="ts">
import { Mail, MapPin, Phone } from 'lucide-vue-next';
import { description, nav, contactInformation, socials } from '~/constants/footer';

const { appName } = useAppConfig();
</script>
<template>
  <footer class="bg-footer text-footer-foreground border-t-8 border-primary">
    <section class="container mx-auto px-4 py-12 space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="mb-3 text-lg font-bold">{{ appName }}</h3>
          <p class="max-w-xl text-sm">{{ description }}</p>
        </div>
        <nav v-for="{ label, items } in nav">
          <h3 class="mb-4 font-semibold">{{ label }}</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="{ label, href } in items" :key="label">
              <NuxtLink :href="href" class="hover:text-primary transition-colors">{{ label }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <div>
          <h3 class="mb-4 font-semibold">Contact Us</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2" v-for="{ text, href, type } in contactInformation" :key="type">
              <component :is="type === 'address' ? MapPin : type === 'phone' ? Phone : Mail"
                class="h-4 w-4 text-primary" />
              {{ text }}
            </li>
            <div class="flex gap-3 mt-4">
              <NuxtLink v-for="{ icon, href } in socials" :href="href" class="hover:text-primary transition-colors">
                <component :is="icon" class="h-5 w-5 hover:text-primary" />
              </NuxtLink>
            </div>
          </ul>
        </div>
      </div>
      <div class="border-t pt-4 text-center text-sm">
        <p> &copy; {{ new Date().getFullYear() }} {{ appName }}. All rights reserved.</p>
      </div>
    </section>
  </footer>
</template>
