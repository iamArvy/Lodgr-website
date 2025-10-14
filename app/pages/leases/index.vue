<script setup lang="ts">
// import { CheckCircle, PlayCircle, RefreshCw } from 'lucide-vue-next';
// import type { PaymentPlan, Property } from '~/interfaces';
// import { generateLeases } from '~/mocks/lease';

// const tabList = [
//   { name: "Ongoing", icon: PlayCircle, value: "ongoing" },
//   { name: "Ended", icon: CheckCircle, value: "ended" },
// ];
// useAppTitle("Leases");
// definePageMeta({
//   middleware: ['auth'],
// })
// const ongoingLeases = generateLeases(5)

import { CheckCircle, Filter, PlayCircle } from 'lucide-vue-next'

useAppTitle('Leases')
definePageMeta({ middleware: ['auth'] })

const tabList = [
  { name: 'Ongoing', icon: PlayCircle, value: 'active' },
  { name: 'Expired', icon: CheckCircle, value: 'expired' },
  { name: 'Ended', icon: CheckCircle, value: 'ended' },
]

</script>
<template>
  <main class="container mx-auto">
    <Tabs :defaultValue="tabList[0]?.value" class="space-y-6">
      <TabsList class="grid w-full grid-cols-3 lg:w-auto">
        <TabsTrigger v-for="{ name, icon, value } in tabList" :value="value" class="gap-2">
          <component :is="icon" class="h-4 w-4" />
          <span class="hidden sm:inline">{{ name }}</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent v-for="{ value } in tabList" :value="value" class="space-y-6">
        <LeaseList :status="value" />
      </TabsContent>
    </Tabs>
  </main>
</template>
