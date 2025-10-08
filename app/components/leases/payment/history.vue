<script setup lang="ts">
import type { PaymentHistory } from '~/interfaces';

defineProps<{ payments: PaymentHistory[] }>()
</script>
<template>
  <Card>
    <CardHeader>
      <CardTitle>Payment History</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="space-y-3">
        <div v-for="{ id, property, date, amount, status } in payments" :key="id"
          class="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p class="font-semibold">{{ property }}</p>
            <p class="text-sm text-muted-foreground">{{ date }}</p>
          </div>
          <div class="text-right">
            <p class="font-bold">{{ amount }}</p>
            <Badge class="mt-1 bg-primary/10 text-primary">
              {{ status }}
            </Badge>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>