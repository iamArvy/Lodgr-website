<script setup lang="ts">
import { Calendar, MapPin } from 'lucide-vue-next';
import { formatPrice } from '~/helpers/format-price';
import type { PaymentPlan, Property } from '~/interfaces';
import { CheckCircle2 } from 'lucide-vue-next';
const props = defineProps<{ values: any, property: Property, plans: PaymentPlan[] }>()
const fees = computed(() => [
  {
    label: "Service Fee",
    value: 50000,
  },
  {
    label: "Security Deposit",
    value: 200000,
  },
  {
    label: "Rent",
    value:
      props.plans.find((plan) => plan.id === props.values.paymentPlan)?.price ?? 0,
  },
])

</script>

<template>
  <div class="space-y-6">
    <Card class="sticky top-20">
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="aspect-video rounded-lg overflow-hidden">
          <img :src="property.image" alt="Property" class="w-full h-full object-cover" />
        </div>

        <div>
          <h3 class="font-bold text-lg mb-2">
            {{ property.name }}
          </h3>
          <div class="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin class="h-4 w-4" />
            <span>{{ property.location }}</span>
          </div>
        </div>

        <Separator />

        <div class="space-y-3">
          <div class="flex justify-between" v-for="{ label, value } in fees">
            <span class="text-muted-foreground">{{ label }}</span>
            <span class="font-semibold">{{ formatPrice(value) }}</span>
          </div>
        </div>

        <Separator />

        <div class="flex justify-between text-lg">
          <span class="font-bold">Total</span>
          <span class="font-bold text-primary">{{formatPrice(fees.reduce((sum, fee) => sum + fee.value, 0))}}</span>
        </div>

        <Button type="submit" size="lg" class="w-full">
          <CheckCircle2 class="mr-2 h-5 w-5" />
          Complete Payment
        </Button>
      </CardContent>
    </Card>
  </div>
</template>