<script setup lang="ts">
import { formatPrice } from '~/helpers/format-price';
import type { PropertySidebarProps } from '~/interfaces/property';
const props = defineProps<PropertySidebarProps>();
const items = [
  { icon: 'lucide:phone', value: props.agent.phone },
  { icon: 'lucide:mail', value: props.agent.email },
];
</script>
<template>
  <div class="space-y-6">
    <Card class="sticky top-20">
      <CardContent class="space-y-6">
        <div>
          <p class="text-sm text-muted-foreground mb-1">Price</p>
          <p class="text-3xl font-bold text-primary">{{ formatPrice(price) }}</p>
          <p class="text-sm text-muted-foreground">per {{ frequency }}</p>
        </div>

        <div class="space-y-3">
          <Button class="w-full" size="lg">
            Book Now
          </Button>
          <Button variant="outline" class="w-full" size="lg">
            Schedule Tour
          </Button>
        </div>

        <div class="pt-6 border-t space-y-3">
          <h3 class="font-semibold">Contact Agent</h3>
          <Button v-for="{ icon, value } in items" variant="outline" class="w-full justify-start">
            <Icon :name="icon" size="16" class="mr-2" />
            {{ value }}
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>