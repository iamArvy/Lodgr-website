<script setup lang="ts">
import type { PaymentHistory, UpcomingPayment } from '~/interfaces';
import History from './history.vue';
import Upcoming from './upcoming.vue';
defineProps<{
  upcomingPayments: UpcomingPayment[];
  paymentHistory: PaymentHistory[];
}>();
</script>

<template>
  <Upcoming :payments="upcomingPayments" />
  <History :payments="paymentHistory" />
</template>