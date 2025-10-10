<script setup lang="ts">
import type { PropertyInformationProps } from '~/interfaces';

defineProps<PropertyInformationProps>()

const tabs = [
  "description",
  "amenities",
  "details"
]

</script>
<template>
  <Tabs :default-value="tabs[0]">
    <TabsList class="w-full mb-2">
      <TabsTrigger v-for="item in tabs" :value="item" class="capitalize">
        {{ item }}
      </TabsTrigger>
    </TabsList>
    <TabsContent value="description">
      <div class="prose max-w-none text-base" v-html="description" />
    </TabsContent>
    <TabsContent value="amenities">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="{ icon, name } in amenities" :key="icon"
          class="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
          <Icon :name="icon" size="24" class="text-primary" />
          <span class="text-sm font-medium">{{ name }}</span>
        </div>
      </div>
    </TabsContent>
    <TabsContent value="details">
      <div class="grid sm:grid-cols-2 gap-4">
        <div v-for="{ label, value } in details" :key="label" class="flex justify-between py-2 border-b">
          <span class="text-muted-foreground">{{ label }}</span>
          <span class="font-semibold">{{ value }}</span>
        </div>
      </div>
    </TabsContent>
  </Tabs>
</template>