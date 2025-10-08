<script setup lang="ts">
import { CheckCircle, PlayCircle } from 'lucide-vue-next';

const tabList = [
  { name: "Ongoing", icon: PlayCircle, value: "ongoing" },
  { name: "Ended", icon: CheckCircle, value: "ended" },
];
</script>
<template>
  <main class="container mx-auto">
    <Tabs :defaultValue="tabList[0]?.value" class="space-y-6">
      <TabsList class="grid w-full grid-cols-2 lg:w-auto">
        <TabsTrigger v-for="{ name, icon, value } in tabList" :value="value" class="gap-2">
          <component :is="icon" class="h-4 w-4" />
          <span class="hidden sm:inline">{{ name }}</span>
        </TabsTrigger>
      </TabsList>

      <!-- Leases -->
      <TabsContent value="ongoing" class="space-y-6">
        Ongoing leases
      </TabsContent>

      <TabsContent value="ended" class="space-y-6">
        Ended leases
      </TabsContent>
    </Tabs>
  </main>
</template>