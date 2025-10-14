<script setup lang="ts">
import { Calendar } from 'lucide-vue-next';
import type { UpcomingPayment } from '~/interfaces';

defineProps<{ payments: UpcomingPayment[] }>()
</script>
<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex items-center gap-2">
        <Calendar class="h-5 w-5 text-primary" />
        Upcoming Payments
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <div v-for="{ id, property, amount, dueDate } in payments" :key="id"
          class="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p class="font-semibold">{{ property }}</p>
            <p class="text-sm text-muted-foreground">
              Due: {{ dueDate }}
            </p>
          </div>
          <div class="text-right">
            <p class="font-bold text-primary">{{ amount }}</p>
            <Button size="sm" class="mt-2">
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>