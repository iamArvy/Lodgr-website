<script setup lang="ts">
import { formatDate } from '@vueuse/core';
import { Calendar, Eye, MapPin, RefreshCw, Wallet, X } from 'lucide-vue-next';
import { formatPrice } from '~/helpers/format-price';
import type { Lease } from '~/interfaces/lease';

const props = defineProps<{ status: string }>()
const { data: leases } = await useFetch<Lease[]>('/api/leases', {
  query: { status: props.status },
})
</script>
<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <Card v-for="{ id, property, status, price, paymentPlan, dueDate, endDate } in leases"
      class="overflow-hidden transition-all duration-200 hover:shadow-md py-0">
      <div class="aspect-video w-full overflow-hidden">
        <img :src="property.image" :alt="property.name"
          class="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <CardContent class="p-4 space-y-2">
        <div class="space-y-1">
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-semibold text-lg line-clamp-1">{{ property.name }}</h3>
            <LeaseStatusBadge :status="status" />
          </div>
          <div class="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin class="h-3 w-3" />
            <span class="line-clamp-1">{{ property.location }}</span>
          </div>
        </div>

        <div class="space-y-2 pt-2 border-t">
          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-1 text-muted-foreground">
              <Wallet class="h-4 w-4" />
              <span>Rent</span>
            </div>
            <span class="font-bold text-primary">{{ formatPrice(price) }}</span>
          </div>

          <div class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-1 text-muted-foreground">
              <Calendar class="h-4 w-4" />
              <span>Cycle</span>
            </div>
            <span class="font-medium">{{ paymentPlan.label }}</span>
          </div>

          <div class="flex items-center justify-between text-sm">
            <span class="text-muted-foreground">{{ status === 'ended' ? 'End Date' : 'Due Date' }}</span>
            <span class="font-medium"> {{
              formatDate(new Date((status === 'ended' ? endDate : dueDate) ?? '-'), 'MMM DD, YYYY') }}
            </span>
          </div>
        </div>

        <Button v-if="status === 'ended'" class="w-full"
          @click="navigateTo({ name: 'properties-id', params: { id: property.id } })">
          <Eye class="h-3 w-3" />
          View Details
        </Button>
        <div class="flex gap-2 pt-2" v-else>
          <Button size="sm" class="flex-1 gap-1" @click="">
            <RefreshCw class="h-3 w-3" />
            Renew
          </Button>
          <Button size="sm" variant="destructive" class="gap-1"
            @click="navigateTo({ name: 'leases-id', params: { id } })">
            <X class="h-3 w-3" />
            End Lease
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>